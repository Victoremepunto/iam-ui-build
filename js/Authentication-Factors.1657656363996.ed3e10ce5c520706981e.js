/*! For license information please see Authentication-Factors.1657656363996.ed3e10ce5c520706981e.js.LICENSE.txt */
(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[402],{9225:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(7245).IU)({name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0})},3754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(3264);const o=n.n(a)().createContext("light")},1646:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var a=n(3264),o=n.n(a),r=n(6530),i=n(6706),c=n(943),l=n(885),s=n(9225);const u=(0,n(7245).IU)({name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0});var h=n(3215),f="http://localhost:8081/auth/realms/redhat-external/apis/organization/v1/my/two-factor";insights.chrome.isBeta()?f="https://sso.stage.redhat.com/auth/realms/redhat-external/apis/organization/v1/my/two-factor":insights.chrome.isProd()&&(f="https://sso.redhat.com/auth/realms/redhat-external/apis/organization/v1/my/two-factor");var m=f+"/enforce",p=f+"/unenforce";const d=function(e){var t=(0,i.I0)(),n=(0,a.useState)({checked:!1,changed:!1}),r=(0,l.Z)(n,2),d=r[0],g=r[1],v=(0,a.useState)({loading:!0}),y=(0,l.Z)(v,2),E=y[0],w=(y[1],(0,a.useState)({showPopover:!0})),b=(0,l.Z)(w,2);b[0],b[1],(0,a.useEffect)((function(){insights.chrome.auth.getToken().then((function(e){fetch(f,{method:"GET",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){g({checked:e.enforced,loading:!1}),e.error&&(console.error(e.error),k())}))}))}),[]);var k=function(){t((0,h.wN)({variant:"danger",description:"Failed to fetch the current status",title:"Error"}))};return o().createElement("div",null,o().createElement(c.Title,{headingLevel:"h2",size:"xl"},"Organizational two-factor authentication"),o().createElement(c.Text,{className:"primaryTextBox pf-u-mt-md"},"Enabling two-factor authentication will require all users in your organization to use their password plus a one-time code to log in to their account. In order to generate one-time codes, all users must be able to add an authenticator application to their mobile device.",o().createElement(c.Button,{onClick:function(){window.location.href="https://access.redhat.com/documentation/en-us/red_hat_customer_portal/1/html/using_two-factor_authentication/con-ciam-2fa-about_two-factor-authentication"},variant:"link",component:"span",isInline:!0,icon:o().createElement(s.ZP,null),iconPosition:"right"},"Learn more about two-factor authentication")),o().createElement(c.FormGroup,{className:"pf-u-mt-md"},o().createElement(c.Checkbox,{onClick:function(){updateSetState({checked:!d.checked,changed:!0})},label:"Require two-factor authentication for your organization",id:"confirmed",className:"twofaCheck",isChecked:d.checked}),o().createElement(c.Button,{id:"infoIcon",variant:"link",component:"span",isInline:!0,className:"questionIcon pf-u-ml-xs",icon:o().createElement(u,null)}),o().createElement(c.Popover,{"aria-label":"Advanced popover usages example",position:"right",hideOnOutsideClick:!0,shouldClose:function(){},shouldOpen:function(){},enableFlip:!0,appendTo:function(){return document.body},bodyContent:o().createElement("div",null,"Users will be required to set up two-factor authentication the next time they attempt to login"),reference:function(){return document.getElementById("infoIcon")}})),o().createElement(c.ActionGroup,null,o().createElement(c.Button,{onClick:function(e){var n;n=d.checked?m:p,insights.chrome.auth.getToken().then((function(e){fetch(n,{method:"POST",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){g({checked:e.enforced,loading:!1,changed:!1}),t((0,h.wN)({variant:"success",description:"Authentication policy settings saved"}))}))}))},isDisabled:E||d.changed},"Save"),o().createElement(c.Button,{variant:"link",isInline:!0,className:"pf-u-ml-lg"},"Cancel")))};var g=n(4184),v=n.n(g),y=n(3754),E=function(){return E=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)};const w=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["className","children"]),r=v()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return o().createElement(y.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var c=v()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return o().createElement("section",E({},a,{className:"".concat(r," ").concat(c),"widget-type":"InsightsPageHeader"}),n)}))},b=function(e){var t=e.className,n=e.title,a=v()(t);return o().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},n)},k=(0,r.withRouter)((function(){return(0,i.I0)(),(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"authentication-factors")}),[]),o().createElement(o().Fragment,null,o().createElement(w,null,o().createElement(b,{title:"Authentication Factors",className:"pf-u-mb-lg"}),o().createElement("p",null," Manage authentication factors for your organization ")),o().createElement(c.Divider,null),o().createElement(c.PageSection,null,o().createElement(c.Form,null,o().createElement(d,null))))}))},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=../sourcemaps/Authentication-Factors.83dbd9edd45f3f55db28ccbff93a6c71.js.map