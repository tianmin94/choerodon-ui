webpackJsonp([99],{2192:function(t,e){t.exports={content:["section",["h2","何时使用"],["p","文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用",["code","树控件"],"可以完整展现其中的层级关系，并具有展开收起选择等交互功能。"]],meta:{category:"Components",type:"Data Display",title:"Tree",subtitle:"树形控件",filename:"components/tree/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意",title:"注意"},"注意"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","autoExpandParent"],["td","是否自动展开父节点"],["td","boolean"],["td","true"]],["tr",["td","checkable"],["td","节点前添加 Checkbox 复选框"],["td","boolean"],["td","false"]],["tr",["td","checkedKeys"],["td","（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置",["code","checkable"],"和",["code","checkStrictly"],"，它是一个有",["code","checked"],"和",["code","halfChecked"],"属性的对象，并且父子节点的选中与否不再关联"],["td","string","[","] ","|"," {checked: string","[","], halfChecked: string","[","]}"],["td","[","]"]],["tr",["td","checkStrictly"],["td","checkable状态下节点选择完全受控（父子节点选中状态不再关联）"],["td","boolean"],["td","false"]],["tr",["td","defaultCheckedKeys"],["td","默认选中复选框的树节点"],["td","string","[","]"],["td","[","]"]],["tr",["td","defaultExpandAll"],["td","默认展开所有树节点"],["td","boolean"],["td","false"]],["tr",["td","defaultExpandedKeys"],["td","默认展开指定的树节点"],["td","string","[","]"],["td","[","]"]],["tr",["td","defaultExpandParent"],["td","默认展开父节点"],["td","bool"],["td","true"]],["tr",["td","defaultSelectedKeys"],["td","默认选中的树节点"],["td","string","[","]"],["td","[","]"]],["tr",["td","disabled"],["td","将树禁用"],["td","bool"],["td","false"]],["tr",["td","draggable"],["td","设置节点可拖拽（IE>8）"],["td","boolean"],["td","false"]],["tr",["td","expandedKeys"],["td","（受控）展开指定的树节点"],["td","string","[","]"],["td","[","]"]],["tr",["td","filterTreeNode"],["td","按需筛选树节点（高亮），返回true"],["td","function(node)"],["td","-"]],["tr",["td","loadData"],["td","异步加载数据"],["td","function(node)"],["td","-"]],["tr",["td","multiple"],["td","支持点选多个节点（节点本身）"],["td","boolean"],["td","false"]],["tr",["td","selectedKeys"],["td","（受控）设置选中的树节点"],["td","string","[","]"],["td","-"]],["tr",["td","showIcon"],["td","是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式"],["td","boolean"],["td","false"]],["tr",["td","showLine"],["td","是否展示连接线"],["td","boolean"],["td","false"]],["tr",["td","onCheck"],["td","点击复选框触发"],["td","function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"],["td","-"]],["tr",["td","onDragEnd"],["td","dragend 触发时调用"],["td","function({event, node})"],["td","-"]],["tr",["td","onDragEnter"],["td","dragenter 触发时调用"],["td","function({event, node, expandedKeys})"],["td","-"]],["tr",["td","onDragLeave"],["td","dragleave 触发时调用"],["td","function({event, node})"],["td","-"]],["tr",["td","onDragOver"],["td","dragover 触发时调用"],["td","function({event, node})"],["td","-"]],["tr",["td","onDragStart"],["td","开始拖拽时调用"],["td","function({event, node})"],["td","-"]],["tr",["td","onDrop"],["td","drop 触发时调用"],["td","function({event, node, dragNode, dragNodesKeys})"],["td","-"]],["tr",["td","onExpand"],["td","展开/收起节点时触发"],["td","function(expandedKeys, {expanded: bool, node})"],["td","-"]],["tr",["td","onRightClick"],["td","响应右键点击"],["td","function({event, node})"],["td","-"]],["tr",["td","onSelect"],["td","点击树节点触发"],["td","function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"],["td","-"]]]],["h3","TreeNode props"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","disableCheckbox"],["td","禁掉 checkbox"],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","禁掉响应"],["td","boolean"],["td","false"]],["tr",["td","icon"],["td","自定义图标。可接收组件，props 为当前节点 props"],["td","element/Function(props):ReactNode"],["td","-"]],["tr",["td","isLeaf"],["td","设置为叶子节点(设置了",["code","loadData"],"时有效)"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！"],["td","string"],["td","内部计算出的节点位置"]],["tr",["td","selectable"],["td","设置节点是否可被选中"],["td","boolean"],["td","true"]],["tr",["td","title"],["td","标题"],["td","string","|","ReactNode"],["td","'---'"]]]],["h2","注意"],["p","树节点可以有很多，但在设置",["code","checkable"],"时，将会花费更多的计算时间，因此我们缓存了一些计算结果（",["code","this.treeNodesStates"],"）来复用，避免多次重复计算，以此提高性能。但这也带来了一些限制，当你异步加载树节点时，你需要这样渲染树："],["pre",{lang:"jsx",highlighted:'<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span>length\n  <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tree</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">:</span> <span class="token string">\'loading tree\'</span><span class="token punctuation">}</span>'},["code","{this.state.treeData.length\n  ? <Tree>{this.state.treeData.map(data => <TreeNode />)}</Tree>\n  : 'loading tree'}"]]]}}});