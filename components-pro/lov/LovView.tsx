import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { action } from 'mobx';
import KeyCode from 'choerodon-ui/lib/_util/KeyCode';
import DataSet from '../data-set/DataSet';
import Table, { TableProps } from '../table/Table';
import { SelectionMode, TableMode } from '../table/enum';
import { DataSetSelection } from '../data-set/enum';
import { LovConfig } from './Lov';
import { ColumnProps } from '../table/Column';

export interface LovViewProps {
  dataSet: DataSet;
  config: LovConfig;
  tableProps?: TableProps;
  multiple: boolean;
  values: any[];
  onDoubleClick: () => void;
  onEnterDown: () => void;
}

export default class LovView extends Component<LovViewProps> {
  static propTypes = {
    dataSet: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    tableProps: PropTypes.object,
    onDoubleClick: PropTypes.func.isRequired,
    onEnterDown: PropTypes.func.isRequired,
  };

  selection: DataSetSelection | false;

  @action
  componentWillMount() {
    const {
      dataSet,
      dataSet: { selection },
      multiple,
    } = this.props;
    this.selection = selection;
    dataSet.selection = multiple ? DataSetSelection.multiple : DataSetSelection.single;
  }

  @action
  componentWillUnmount() {
    const { dataSet } = this.props;
    dataSet.selection = this.selection;
  }

  /* istanbul ignore next */
  getColumns(): ColumnProps[] | undefined {
    const {
      config: { lovItems },
    } = this.props;
    return lovItems
      ? lovItems
          .filter(({ gridField }) => gridField === 'Y')
          .sort(({ gridFieldSequence: seq1 }, { gridFieldSequence: seq2 }) => seq1 - seq2)
          .map<ColumnProps>(({ display, gridFieldName, gridFieldWidth, gridFieldAlign }) => ({
            key: gridFieldName,
            header: display,
            name: gridFieldName,
            width: gridFieldWidth,
            align: gridFieldAlign,
          }))
      : undefined;
  }

  /* istanbul ignore next */
  handleKeyDown = e => {
    if (e.keyCode === KeyCode.ENTER) {
      const { onEnterDown } = this.props;
      onEnterDown();
    }
  };

  handleRow = () => {
    const { onDoubleClick } = this.props;
    return {
      onDoubleClick,
    };
  };

  render() {
    const {
      dataSet,
      config: { height, treeFlag, queryColumns, queryBar },
      multiple,
      tableProps,
    } = this.props;
    const lovTableProps: TableProps = {
      ...tableProps,
      autoFocus: true,
      mode: treeFlag === 'Y' ? TableMode.tree : TableMode.list,
      onKeyDown: this.handleKeyDown,
      dataSet,
      columns: this.getColumns(),
      queryFieldsLimit: queryColumns,
      queryBar,
    };
    if (multiple) {
      lovTableProps.selectionMode = SelectionMode.rowbox;
    } else {
      lovTableProps.selectionMode = tableProps?.selectionMode ? tableProps.selectionMode : SelectionMode.none;
      lovTableProps.onRow = this.handleRow;
    }

    if (height) {
      lovTableProps.style = { ...lovTableProps.style, height };
    }

    return <Table {...lovTableProps} />;
  }
}
