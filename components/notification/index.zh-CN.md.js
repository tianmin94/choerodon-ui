webpackJsonp([139],{2135:function(t,n){t.exports={content:["section",["p","全局展示通知提醒信息。"],["h2","何时使用"],["p","在系统四个角显示通知提醒信息。经常用于以下情况："],["ul",["li",["p","较为复杂的通知内容。"]],["li",["p","带有交互的通知，给出用户下一步的行动点。"]],["li",["p","系统主动推送。"]]]],meta:{category:"Components",type:"Feedback",noinstant:!0,title:"Notification",subtitle:"通知提醒框",filename:"components/notification/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","notification.success(config)"]]],["li",["p",["code","notification.error(config)"]]],["li",["p",["code","notification.info(config)"]]],["li",["p",["code","notification.warning(config)"]]],["li",["p",["code","notification.warn(config)"]]],["li",["p",["code","notification.close(key: String)"]]],["li",["p",["code","notification.destroy()"]]]],["p","config 参数如下："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","btn"],["td","自定义关闭按钮"],["td","ReactNode"],["td","-"]],["tr",["td","className"],["td","自定义 CSS class"],["td","string"],["td","-"]],["tr",["td","description"],["td","通知提醒内容，必选"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","默认 4.5 秒后自动关闭，配置为 null 则不自动关闭"],["td","number"],["td","4.5"]],["tr",["td","icon"],["td","自定义图标"],["td","ReactNode"],["td","-"]],["tr",["td","key"],["td","当前通知唯一标志"],["td","string"],["td","-"]],["tr",["td","message"],["td","通知提醒标题，必选"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","placement"],["td","弹出位置，可选 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","style"],["td","自定义内联样式"],["td",["a",{title:null,href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"React.CSSProperties"]],["td","-"]],["tr",["td","onClose"],["td","点击默认关闭按钮时触发的回调函数"],["td","Function"],["td","-"]]]],["p","还提供了一个全局配置方法，在调用前提前配置，全局一次生效。"],["ul",["li",["p",["code","notification.config(options)"]]]],["pre",{lang:"js",highlighted:'notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  placement<span class="token punctuation">:</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">,</span>\n  bottom<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","notification.config({\n  placement: 'bottomRight',\n  bottom: 50,\n  duration: 3,\n});"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","bottom"],["td","消息从底部弹出时，距离底部的位置，单位像素。"],["td","number"],["td","24"]],["tr",["td","duration"],["td","默认自动关闭延时，单位秒"],["td","number"],["td","4.5"]],["tr",["td","getContainer"],["td","配置渲染节点的输出位置"],["td","() => HTMLNode"],["td","() => document.body"]],["tr",["td","placement"],["td","弹出位置，可选 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","top"],["td","消息从顶部弹出时，距离顶部的位置，单位像素。"],["td","number"],["td","24"]]]]]}}});