(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),i=a(3),s=a(4),u=a(6),l=a(5),h=(a(11),a(17),a(0)),d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pictureName:""},e.handleNameChange=function(t){e.setState({pictureName:t.currentTarget.value.toLowerCase()})},e.handelSubmit=function(t){t.preventDefault(),""!==e.state.pictureName.trim()?(e.props.onSubmit(e.state.pictureName),e.setState({pictureName:""})):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:this.handelSubmit,className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{value:this.state.pictureName,onChange:this.handleNameChange,className:"SearchForm-input",type:"text",placeholder:"Search images and photos"})]})})}}]),a}(c.a.Component),p=a(10),m=a(8);a(19),a(20);function j(e){var t=e.pictures,a=e.click;return t.map((function(e){var t=e.id,n=e.tags,c=e.webformatURL;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{onClick:function(){return a(c,n)},src:c,width:"800",height:"600",alt:n,className:"ImageGalleryItem-image"})},t)}))}a(21);var b=a(12),f=a.n(b);function O(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c...."}),Object(h.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:5e3})]})}a(42);function v(e){var t=e.click;return Object(h.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})}a(43);var g=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(h.jsx)("div",{onClick:this.handleBackdropClick,className:"Overlay",children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),g)}}]),a}(c.a.Component),w="22042879-adb59bab87f7729a85f6313d3",x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={status:"idle",showModal:!1,pictures:[],currentImage:{},pages:1,currentPage:1},e.handleFetchPictures=function(t){var a=e.props.picturesName;e.setState({status:"pending"}),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat(w)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))})).then((function(n){var c=n.totalHits,r=n.hits;if(0===c)return Promise.reject(new Error("\u043d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(a)));e.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{pictures:1===t?r:[].concat(Object(p.a)(e.pictures),Object(p.a)(r)),status:"resolved",pages:Math.ceil(c/12),currentPage:t})}),(function(){console.log("here"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))})).catch((function(t){e.setState({error:t,status:"rejected"})}))},e.handlLoadMore=function(){e.handleFetchPictures(e.state.currentPage+1)},e.openModal=function(t,a){e.setState({showModal:!0,currentImage:{src:t,alt:a}})},e.closeModal=function(){e.setState({showModal:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){e.picturesName!==this.props.picturesName&&this.handleFetchPictures(1)}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.error,n=e.status,c=e.pages,r=e.currentPage,o=e.showModal;return"idle"===n?Object(h.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}):"pending"===n?Object(h.jsx)(O,{}):"rejected"===n?Object(h.jsx)("h1",{children:a.message}):"resolved"===n?Object(h.jsxs)("div",{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(j,{pictures:t,click:this.openModal})}),r<c&&Object(h.jsx)(v,{click:this.handlLoadMore}),o&&Object(h.jsx)(y,Object(m.a)({onCloseModal:this.closeModal},this.state.currentImage))]}):void 0}}]),a}(c.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={picturesName:""},e.handlFormSubmit=function(t){e.setState({picturesName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{onSubmit:this.handlFormSubmit}),Object(h.jsx)(x,{picturesName:this.state.picturesName})]})}}]),a}(c.a.Component);a(44);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2dec59f9.chunk.js.map