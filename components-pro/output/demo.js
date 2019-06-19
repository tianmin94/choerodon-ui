webpackJsonp([53],{2249:function(n,a,s){n.exports={basic:s(2992),controlled:s(2993),dataset:s(2994),form:s(2995),renderer:s(2996)}},2992:function(n,a,s){n.exports={content:{"zh-CN":[["p","基本使用。"]],"en-US":[["p","Basic usage example."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic usage"},filename:"components-pro/output/demo/basic.md",id:"components-pro-output-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Output<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(486));return n.createElement(a.Row,{gutter:10},n.createElement(a.Col,{span:8},n.createElement(a.Output,{value:"hello"})),n.createElement(a.Col,{span:8},n.createElement(a.Output,null)),n.createElement(a.Col,{span:8},n.createElement(a.Output,null)))}}},2993:function(n,a,s){n.exports={content:{"zh-CN":[["p","受控。"]],"en-US":[["p","Under control."]]},meta:{order:1,title:{"zh-CN":"受控","en-US":"Under Control"},filename:"components-pro/output/demo/controlled.md",id:"components-pro-output-demo-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Output<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(486));return n.createElement(a.Row,{gutter:10},n.createElement(a.Col,{span:8},n.createElement(a.Output,{value:"1"})),n.createElement(a.Col,{span:8},n.createElement(a.Output,{value:"2"})),n.createElement(a.Col,{span:8},n.createElement(a.Output,{value:"3"})))}}},2994:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源。"]],"en-US":[["p","DataSet binding."]]},meta:{order:2,title:{"zh-CN":"数据源","en-US":"DataSet"},filename:"components-pro/output/demo/dataset.md",id:"components-pro-output-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Output <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'first-name\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'Huazhen\'</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(486),c=function(s){function c(){var s,t,p,e;n(this,c);for(var u=arguments.length,l=Array(u),i=0;i<u;i++)l[i]=arguments[i];return t=p=a(this,(s=c.__proto__||Object.getPrototypeOf(c)).call.apply(s,[this].concat(l))),p.ds=new o.DataSet({autoCreate:!0,fields:[{name:"first-name",type:"string",defaultValue:"Huazhen",required:!0}]}),e=t,a(p,e)}return t(c,s),e(c,[{key:"render",value:function(){return p.createElement(o.Output,{dataSet:this.ds,name:"first-name"})}}]),c}(p.Component);return p.createElement(c,null)}}},2995:function(n,a,s){n.exports={content:{"zh-CN":[["p","表单绑定数据源，与其他字段混合使用。"]],"en-US":[["p","Use with other ",["code","FormField"],"s in a ",["code","Form"]," with ",["code","DataSet"],"."]]},meta:{order:3,title:{"zh-CN":"在表单中使用","en-US":"Use in Form"},filename:"components-pro/output/demo/form.md",id:"components-pro-output-demo-form"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Output<span class="token punctuation">,</span> EmailField<span class="token punctuation">,</span> NumberField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'phone\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'15888888888\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'手机号\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'年龄\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'sex\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'F\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'性别\'</span><span class="token punctuation">,</span> lookupCode<span class="token punctuation">:</span> <span class="token string">\'HR.EMPLOYEE_GENDER\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'language\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'zh-CN\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'语言\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'email\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'some@example.com\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'邮箱\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'homepage\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'www.baidu.com\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'个人主页\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'birth\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'2018-12-26\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'date\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'生日\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'3.5rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>language<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmailField</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>homepage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>birth<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(486),c=function(s){function c(){var s,t,p,e;n(this,c);for(var u=arguments.length,l=Array(u),i=0;i<u;i++)l[i]=arguments[i];return t=p=a(this,(s=c.__proto__||Object.getPrototypeOf(c)).call.apply(s,[this].concat(l))),p.ds=new o.DataSet({autoCreate:!0,fields:[{name:"phone",defaultValue:"15888888888",type:"string",label:"手机号"},{name:"age",defaultValue:18,type:"number",label:"年龄"},{name:"sex",defaultValue:"F",type:"string",label:"性别",lookupCode:"HR.EMPLOYEE_GENDER"},{name:"language",defaultValue:"zh-CN",type:"string",label:"语言"},{name:"email",defaultValue:"some@example.com",type:"string",label:"邮箱"},{name:"homepage",defaultValue:"www.baidu.com",type:"string",label:"个人主页"},{name:"birth",defaultValue:"2018-12-26",type:"date",label:"生日"}]}),e=t,a(p,e)}return t(c,s),e(c,[{key:"render",value:function(){return p.createElement(o.Form,{dataSet:this.ds,style:{width:"3.5rem"}},p.createElement(o.Output,{name:"phone"}),p.createElement(o.NumberField,{name:"age"}),p.createElement(o.Output,{name:"sex"}),p.createElement(o.Output,{name:"language"}),p.createElement(o.EmailField,{name:"email"}),p.createElement(o.Output,{name:"homepage"}),p.createElement(o.Output,{name:"birth"}))}}]),c}(p.Component);return p.createElement(c,null)}}},2996:function(n,a,s){n.exports={content:{"zh-CN":[["p","使用renderer属性覆盖默认渲染行为。"]],"en-US":[["p","Use ",["code","renderer"]," property to override the default render process."]]},meta:{order:0,title:{"zh-CN":"使用renderer","en-US":"Use renderer"},filename:"components-pro/output/demo/renderer.md",id:"components-pro-output-demo-renderer"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Output <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">rendererOne</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> text <span class="token punctuation">}</span> <span class="token operator">=</span> param<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token attr-name">renderer</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>rendererOne<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){var s=n.text;return a.createElement("span",{style:{color:"red"}},s)}var a=s(0),t=(s(7),s(486));return a.createElement(t.Output,{value:"hello",renderer:n})}}}});