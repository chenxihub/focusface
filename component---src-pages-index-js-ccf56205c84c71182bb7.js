(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(145),n=a(151),o=(a(162),a(163),a(149));t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(o.a,{title:"首页",lang:"zh",keywords:["FocusFace","陈夕","永远年轻"]}),i.a.createElement("p",null,"世界,你好"),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),i.a.createElement(s.a,{to:"/page-2/"},"Go to page 2"))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(146);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},146:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Mr.chenxi 的小站"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},149:function(e,t,a){"use strict";var r=a(150),i=a(0),s=a.n(i),n=a(4),o=a.n(n),l=a(153),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Mr.chenxi 的小站",description:"Tell me what you want to hear,Something that will light those ears.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var r=a(147),i=a(0),s=a.n(i),n=a(4),o=a.n(n),l=a(145),d=function(e){var t=e.siteTitle;return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{background:"rebeccapurple",position:"fixed",width:"100%",zIndex:4}},s.a.createElement("a",{className:"navbar-brand",href:"#"},"ChenX"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"}," ")),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.a,{to:"/",className:"nav-link"},"首页")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.a,{className:"nav-link",to:"/page-2/"},"分支")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(l.a,{className:["nav-link pull-right"],to:"/"},t))))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(152),function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement("div",{style:{background:"#f8f8f8"}},s.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0px auto",maxWidth:960,padding:"15px 1.0875rem 1.45rem",paddingTop:56,background:"#ffffff",borderRadius:"4px",border:"1px solid #d1d5da",minHeight:"768px"}},s.a.createElement("main",null,t)),s.a.createElement("footer",{className:"text-center",style:{padding:"15px 0px 15px 0px",color:"#eee"}},"Copyright © Forever Young"))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},162:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/69ecd/gatsby-astronaut.png",srcSet:"/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/705dd/gatsby-astronaut.png 75w,\n/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/2bd34/gatsby-astronaut.png 150w,\n/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/69ecd/gatsby-astronaut.png 300w,\n/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/419be/gatsby-astronaut.png 450w,\n/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/3cf9a/gatsby-astronaut.png 600w,\n/focusface/static/6d91c86c0fde632ba4cd01062fd9ccfa/ae92a/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},163:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),n=r(a(34)),o=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),g.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.Tag,w=e.itemProp,E="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),x={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(g){var N=g;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&d.default.createElement(b,(0,l.default)({src:N.base64},x)),N.tracedSVG&&d.default.createElement(b,(0,l.default)({src:N.tracedSVG},x)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:N.sizes,src:N.src,srcSet:N.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},N))}}))}if(h){var z=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete L.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},z.base64&&d.default.createElement(b,(0,l.default)({src:z.base64},x)),z.tracedSVG&&d.default.createElement(b,(0,l.default)({src:z.tracedSVG},x)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(b,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-ccf56205c84c71182bb7.js.map