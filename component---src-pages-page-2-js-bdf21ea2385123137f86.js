(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),l=a(161),o=a(158);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(153);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Mr.chenxi 的小站"}}}}},157:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(155),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Mr.chenxi 的小站",description:"Tell me what you want to hear,Something that will light those ears.",author:"@gatsbyjs"}}}}},161:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(150),s=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{background:"rebeccapurple",position:"fixed",width:"100%",zIndex:4}},i.a.createElement(c.a,{to:"/",className:"navbar-brand"},"ChenX"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"}," ")),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.a,{to:"/",className:"nav-link"},"首页")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.a,{className:"nav-link",to:"/page-2/"},"分支")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.a,{className:["nav-link pull-right"],to:"/"},t))))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var d=s,u=(a(162),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement("div",{style:{background:"#f8f8f8"}},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0px auto",maxWidth:960,padding:"15px 1.0875rem 1.45rem",paddingTop:56,background:"#ffffff",borderRadius:"4px",border:"1px solid #d1d5da",minHeight:"768px"}},i.a.createElement("main",null,t)),i.a.createElement("footer",{className:"text-center",style:{padding:"15px 0px 15px 0px",color:"#eee"}},"Copyright © Forever Young"))},data:n})});u.propTypes={children:o.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-page-2-js-bdf21ea2385123137f86.js.map