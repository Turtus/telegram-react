(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{731:function(e,t,n){},732:function(e,t,n){},733:function(e,t,n){},734:function(e,t,n){},740:function(e,t,n){"use strict";n.r(t);var r=n(126),a=n(14),s=n.n(a),i=n(24),o=n(7),c=n(9),l=n(11),u=n(10),d=n(12),p=n(0),f=n.n(p),h=n(8),k=n.n(h),m=n(55),v=n(5),S=n.n(v),b=n(39),w=n(32),O=n.n(w),g=n(73),E=n.n(g),j=n(476),C=n.n(j),P=n(737),y=n(456),M=n(33),R=n(415),x=n(401),N=n(29),T=n(400),I=(n(731),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.info!==e.info}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.info,r=e.onSelect,a=e.onMouseDown,s=e.onMouseOver;if(!n)return null;var i=n.title,o=n.stickers.map(function(e,n){return f.a.createElement("div",{className:k()("sticker-set-item",t.stickerSetItem),key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return r(e)},onMouseDown:a,onMouseOver:s},f.a.createElement(R.a,{key:e.sticker.id,className:"sticker-set-item-sticker",sticker:e,displaySize:N.V-6,blur:!1}))});return f.a.createElement("div",{className:"sticker-set"},f.a.createElement("div",{className:k()("sticker-set-title",t.title)},f.a.createElement("span",null,i)),f.a.createElement("div",{className:"sticker-set-content"},o))}}]),t}(f.a.Component)),D=S()(function(e){return{title:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},stickerSetItem:{width:N.V,height:N.V,padding:3,boxSizing:"border-box","&:hover":{background:"dark"===e.palette.type?"#303030":"#f4f4f4",borderRadius:6}}}})(I),L=n(30),U=n(411),V=n(2),B=(n(732),n(13)),A=n(125),F=n(127),H=(n(733),function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(o.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,r=n.duration;n.start=e,n.end=t+r,n.draw(e)},this.draw=function(t){var r=n.stopped,a=n.duration,s=n.start,i=n.options;if(!r){t-s>=a&&(n.stopped=!0);var o=(t-s)/a,c=e.outSine(o);i.forEach(function(e){var t=e.from,n=e.to;(0,e.func)(t+(n-t)*c)}),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=r,this.duration=t}return Object(c.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}()),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollToPosition=function(){var e=n.props.position,t=Object(B.a)(Object(B.a)(n)),r=t.animator,a=t.anchorRef,s=t.scrollRef.current,i=a.current,o=M.findDOMNode(i);console.log("Stickers.scrollToPosition",i,o,o.style,o.style.left),r&&r.stop(),n.animator=new H(500,[{from:s.scrollLeft,to:44*e-147,func:function(e){return s.scrollLeft=e}},{from:Number(o.style.left.replace("px","")),to:44*e,func:function(e){return o.style.left=e+"px"}}]),n.animator.start()},n.scrollRef=f.a.createRef(),n.anchorRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.position!==this.props.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.stickers,r=(e.position,e.onSelect),a=n.map(function(e){return f.a.createElement(R.a,{key:e.sticker.id,className:"stickers-picker-header-sticker",sticker:e,displaySize:32,blur:!1,openMedia:function(){return r(e)}})});return f.a.createElement("div",{className:k()("stickers-picker-header",t.borderColor)},f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll"},f.a.createElement("div",{className:"stickers-picker-header-items"},a),f.a.createElement("div",{ref:this.anchorRef,className:k()("stickers-picker-header-anchor",t.accentBackgroundDark)})))}}]),t}(f.a.Component),q=S()(function(e){return Object(A.a)({},Object(F.b)(e),Object(F.a)(e))})(_),z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(i.a)(s.a.mark(function e(t,r){var a,i,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.stickerSets){e.next=2;break}return e.abrupt("return");case 2:if(r){e.next=11;break}return e.next=5,V.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 5:return a=e.sent,i=[],a.sets.forEach(function(e){i.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=10,Promise.all(i);case 10:r=e.sent;case 11:o=r.slice(0,5),c=r.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]),n.setState({stickerSets:t,sets:o,headerStickers:c}),n.setsLength=o.length;case 15:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,r=n.state.sets,a=[];r.forEach(function(r){var s=n.itemsMap.get(r.id),i=M.findDOMNode(s);if(i){var o=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=i.offsetTop,u=i.offsetTop+i.clientHeight;l>=o&&i.offsetTop<=c?a.push(r):u>=o&&u<=c?a.push(r):l<=o&&u>=c&&a.push(r)}}),a.forEach(function(e){var t=T.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(x.r)(t,e))})},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,r=e.scrollHeight,a=0,s=0;t.forEach(function(t,i){var o=n.itemsMap.get(t.id);if(o){var c=M.findDOMNode(o);if(c){s=0===i?c.offsetTop:s;var l=c.offsetTop-s;if(c&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=r&&(r=u,a=i)}}}}),n.setState({position:a})},n.handleScroll=Object(i.a)(s.a.mark(function e(){var t,r,a,i,o,c,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScroll(),n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=6;break}return e.abrupt("return");case 6:if(r=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(r=!0),r){e.next=10;break}return e.abrupt("return",!1);case 10:if(a=n.state,i=a.sets,(o=a.stickerSets).sets.length!==i.length){e.next=13;break}return e.abrupt("return");case 13:return n.loadingChunk=!0,Date.now(),c=[],o.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){c.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=19,Promise.all(c).finally(function(){return n.loadingChunk=!1});case 19:l=e.sent,n.setsLength+=l.length,u=i.concat(l),n.setState({sets:u});case 23:case"end":return e.stop()}},e)})),n.loadPreviewContent=function(e){var t=n.state.sets,r=Object(U.c)(t).find(function(t){return t.sticker.id===e});if(r){var a=T.a.getStore();Object(x.q)(a,r,null);Object(U.b)(r,t,5).forEach(function(e){Object(x.q)(a,e,null)})}},n.handleMouseOver=function(e){var t=Number(e.target.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var r=n.props.onPreview,a=n.state.sets;r(Object(U.c)(a).find(function(e){return e.sticker.id===t}))}},n.handleMouseDown=function(e){var t=Number(e.target.dataset.stickerId);if(t){n.mouseDownStickerId=t;var r=Date.now();return n.setState({previewStickerId:t,timestamp:r,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===r&&n.setState({showPreview:!0,cancelSend:!0},function(){var e=n.props.onPreview,r=n.state.sets;e(Object(U.c)(r).find(function(e){return e.sticker.id===t}))})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(e){},n.scrollRef=f.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(L.c)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(L.t)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(L.t)(n.updatePosition,250),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.state,a=r.position,s=r.stickerSets,i=r.sets,o=r.showPreview;return t.stickerSets!==s||(t.sets!==i||(t.showPreview!==o||t.position!==a))}},{key:"render",value:function(){var e=this,t=this.state,n=t.position,r=t.stickerSets,a=t.sets,s=t.headerStickers;if(!r)return null;if(!a)return null;if(!a.length)return null;this.itemsMap.clear();var i=a.map(function(t){return f.a.createElement(D,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseOver:e.handleMouseOver})});return f.a.createElement("div",{className:"stickers-picker"},f.a.createElement(q,{onSelect:this.handleSelectSet,position:n,stickers:s}),f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},i))}}]),t}(f.a.Component),J=n(28),X=n(89),W=(n(734),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets())},N.d)},n.loadStickerSets=Object(i.a)(s.a.mark(function e(){var t,r,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,V.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 4:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach(function(e){t.push(V.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=9,Promise.all(t);case 9:n.sets=e.sent,r=n.stickersPickerRef.current,a=T.a.getStore(),n.sets.slice(0,5).reverse().forEach(function(e){Object(x.r)(a,e),r.loadedSets.set(e.id,e.id)}),n.sets.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]).forEach(function(e){Object(x.s)(a,e)});case 16:case"end":return e.stop()}},e)})),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.tryClosePicker()},N.d)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.tryClosePicker()},N.d)},n.updatePicker=function(e){n.setState({open:e})},n.switchPicker=function(){n.updatePicker(!n.state.open)},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;e.loadContent(n.stickerSets,n.sets),n.setState({tab:1}),1===t&&e.scrollTop()},n.handleStickerSend=function(e){e&&(V.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=f.a.createRef(),n.stickersPickerRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){J.a.on("clientUpdateThemeChange",this.onClientUpdateChange),X.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){J.a.removeListener("clientUpdateThemeChange",this.onClientUpdateChange),X.a.removeListener("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,a=e.t,s=this.state,i=s.open,o=s.tab,c=s.sticker;if(i&&!this.picker){var l={search:a("Search"),notfound:a("NotEmojiFound"),skintext:a("ChooseDefaultSkinTone"),categories:{search:a("SearchResults"),recent:a("Recent"),people:a("SmileysPeople"),nature:a("AnimalsNature"),foods:a("FoodDrink"),activity:a("Activity"),places:a("TravelPlaces"),objects:a("Objects"),symbols:a("Symbols"),flags:a("Flags"),custom:a("Custom")}};this.picker=f.a.createElement(P.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:n.palette.primary.dark,i18n:l,style:{width:338,overflowX:"hidden"}}),this.stickersPicker=f.a.createElement(z,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview})}return f.a.createElement(f.a.Fragment,null,f.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===n.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),f.a.createElement(E.a,{className:t.iconButton,"aria-label":"Emoticon",onClick:this.switchPicker,onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},f.a.createElement(C.a,null)),f.a.createElement("div",{className:k()(t.pickerRoot,Object(r.a)({},t.pickerRootOpened,i)),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},f.a.createElement("div",{className:"emoji-picker-header"},f.a.createElement(O.a,{color:0===o?"primary":"default",className:t.headerButton,onClick:this.handleEmojiClick},a("Emoji")),f.a.createElement(O.a,{color:1===o?"primary":"default",className:t.headerButton,onClick:this.handleStickersClick},a("Stickers"))),f.a.createElement("div",{className:k()("emoji-picker-content",{"emoji-picker-content-stickers":1===o})},this.picker,this.stickersPicker),f.a.createElement(y.a,{sticker:c})))}}]),t}(f.a.Component)),G=Object(m.a)(S()(function(e){return{iconButton:{margin:"8px 0px"},headerButton:{borderRadius:0,flex:"50%"},pickerRoot:{width:338,overflowX:"hidden",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[8],position:"absolute",bottom:80,display:"none"},pickerRootOpened:{display:"block"}}},{withTheme:!0}),Object(b.c)());t.default=G(W)}}]);
//# sourceMappingURL=5.3c607d63.chunk.js.map