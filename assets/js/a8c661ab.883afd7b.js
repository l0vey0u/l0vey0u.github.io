"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[533],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(r),f=a,m=g["".concat(i,".").concat(f)]||g[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},l),{},{components:r})):n.createElement(m,u({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6690:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=["components"],c={title:"[Research] \uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)",authors:"syru",tags:["research","http","http smuggling"],categories:["Research"],date:new Date("2022-02-06T18:00:00.000Z")},i=void 0,s={permalink:"/blog/funny-smuggling-story-pt1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/funny-smuggling-story-pt1.md",source:"@site/blog/funny-smuggling-story-pt1.md",title:"[Research] \uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)",description:"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4.",date:"2022-02-06T18:00:00.000Z",formattedDate:"February 6, 2022",tags:[{label:"research",permalink:"/blog/tags/research"},{label:"http",permalink:"/blog/tags/http"},{label:"http smuggling",permalink:"/blog/tags/http-smuggling"}],readingTime:5.715,truncated:!0,authors:[{name:"SYRU",title:"security researcher",url:"https://github.com/l0vey0u",imageURL:"https://avatars.githubusercontent.com/u/30224688",key:"syru"}],frontMatter:{title:"[Research] \uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (1)",authors:"syru",tags:["research","http","http smuggling"],categories:["Research"],date:"2022-02-06T18:00:00.000Z"},prevItem:{title:"[Research] \uc7ac\ubc0c\ub294 HTTP Request Smuggling \uc774\uc57c\uae30 (2)",permalink:"/blog/funny-smuggling-story-pt2"}},l={authorsImageUrls:[void 0]},p=[],g={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 : ) \uc2dc\ub8e8\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc624\ub298\uc740 \uac04\ub2e8\ud55c \uc6d0\ub9ac\uc9c0\ub9cc \ubd88\ud2b9\uc815 \ub2e4\uc218\uc5d0\uac8c \ud53c\ud574\ub97c \uc904 \uc218 \uc788\ub294 \uacf5\uaca9\uae30\ubc95\uc744 \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);