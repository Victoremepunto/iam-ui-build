/*! For license information please see AuthPolicy.1655300084328.a8945547fb10f81fab7f.js.LICENSE.txt */
(self.webpackChunkauthentication_policy=self.webpackChunkauthentication_policy||[]).push([[761],{9225:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(7245).IU)({name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0})},3754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(3264);const r=n.n(a)().createContext("light")},717:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(3264),r=n.n(a),o=n(6530),i=n(4494),c=n(943),l=n(5671),s=n(3144),u=n(7326),h=n(136),f=n(6215),p=n(1120),m=n(4942),d=n(9225);const g=(0,n(7245).IU)({name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0});const v=function(e){(0,h.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,p.Z)(t);if(n){var r=(0,p.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,f.Z)(this,e)});function o(e){var t;return(0,l.Z)(this,o),t=a.call(this,e),(0,m.Z)((0,u.Z)(t),"updateStatus",(function(e){var n;n=t.state.checked?"http://localhost:8081/auth/realms/redhat-external/apis/organization/v1/my/two-factor/unenforce":"http://localhost:8081/auth/realms/redhat-external/apis/organization/v1/my/two-factor/enforce",insights.chrome.auth.getToken().then((function(e){fetch(n,{method:"POST",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){return t.setState({checked:e.enforced,loading:!1})}))}))})),t.state={checked:!1,loading:!0},t}return(0,s.Z)(o,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.auth.getToken().then((function(t){fetch("http://localhost:8081/auth/realms/redhat-external/apis/organization/v1/my/two-factor",{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){return e.json()})).then((function(t){return e.setState({checked:t.enforced,loading:!1})}))}))}},{key:"learnMoreLink",value:function(){window.location.href="https://access.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication"}},{key:"render",value:function(){return r().createElement("div",null,r().createElement(c.Title,{headingLevel:"h2",size:"xl"},"Organizational two-factor authentication"),r().createElement(c.Text,{className:"pf-u-w-75"},"Enabling two-factor authentication will require all users in your organization to use their password plus a one-time code to log in to their account. In order to generate one-time codes, all users must be able to add an authenticator application to their mobile device.",r().createElement(c.Button,{onClick:this.learnMoreLink,variant:"link",component:"span",isInline:!0,icon:r().createElement(d.ZP,null),iconPosition:"right"},"Learn more about two-factor authentication")),r().createElement(c.FormGroup,null,r().createElement(c.Checkbox,{label:"Require two-factor authentication for your organization",id:"confirmed",className:"twofaCheck",isChecked:this.state.checked}),r().createElement(c.Button,{variant:"link",component:"span",isInline:!0,className:"questionIcon pf-u-ml-xs",icon:r().createElement(g,null)})),r().createElement(c.ActionGroup,null,r().createElement(c.Button,{onClick:this.updateStatus,isDisabled:this.state.loading},"Save"),r().createElement(c.Button,{variant:"link",isInline:!0,className:"pf-u-ml-lg"},"Cancel")))}}]),o}(r().Component);var y=n(4184),E=n.n(y),w=n(3754),k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k.apply(this,arguments)};const b=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),o=E()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return r().createElement(w.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var c=E()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return r().createElement("section",k({},a,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader"}),n)}))},O=function(e){var t=e.className,n=e.title,a=E()(t);return r().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},n)};n(3215),n(5697);const x=(0,o.withRouter)((function(){return(0,i.I0)(),(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"sample-page")}),[]),r().createElement(r().Fragment,null,r().createElement(b,null,r().createElement(O,{title:"Authentication Factors",className:"pf-u-mb-lg"}),r().createElement("p",null," Manage authentication factors for your organization ")),r().createElement(c.Divider,null),r().createElement(c.PageSection,null,r().createElement(c.Form,null,r().createElement(v,null))))}))},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=../sourcemaps/AuthPolicy.5c75707198b32d179aa743b6a92c2b8e.js.map