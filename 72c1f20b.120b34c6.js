(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(268)),i=n(277),c={id:"schema",title:"Structured config schema"},s={unversionedId:"tutorials/structured_config/schema",id:"version-1.0/tutorials/structured_config/schema",isDocsHomePage:!1,title:"Structured config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",slug:"/tutorials/structured_config/schema",permalink:"/docs/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1614192135,sidebar:"version-1.0/docs",previous:{title:"Defaults List",permalink:"/docs/tutorials/structured_config/defaults"},next:{title:"Static schema with many configs",permalink:"/docs/tutorials/structured_config/static_schema"}},u=[],l={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{to:"examples/tutorials/structured_configs/5_structured_config_schema",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files)."),Object(a.b)("p",null,"When Hydra loads a config file, it looks in the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," for a Structured Config with a matching name and group.\nIf found, it is used as the schema for the newly loaded config."),Object(a.b)("p",null,"This page shows how to validate ",Object(a.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," files against a pre-defined schema."),Object(a.b)("p",null,"Given the config directory structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(a.b)("p",null,"We can add Structured Configs for ",Object(a.b)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"postgresql.yaml"),", providing a schema for validating them."),Object(a.b)("p",null,"The Structured Configs below are stored as ",Object(a.b)("inlineCode",{parentName:"p"},"db/mysql")," and ",Object(a.b)("inlineCode",{parentName:"p"},"db/postgresql"),". They will be used as schema\nwhen we load their corresponding config files."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Note the lack of defaults list here.\n    # In this example it comes from config.yaml\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n# The config name matches both \'config.yaml\' under the conf directory\n# and \'config\' stored in the ConfigStore.\n# config.yaml will compose in db: mysql by default (per the defaults list),\n# and it will be validated against the schema from the Config class\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," are loaded, the corresponding configs from the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," are used automatically.\nThis can be used to validate that both the configuration files (",Object(a.b)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"postgresql.yaml"),") and the command line overrides are conforming to the schema. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(a.b)("p",null,"Unlike the example in the previous page, the Defaults List here is ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," and ",Object(a.b)("strong",{parentName:"p"},"not")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Config")," class."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,g=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},270:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},271:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=n(269),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(272),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),C=p||g,D=Object(i.a)(C),S=null==C?void 0:C.replace("pathname://",""),N=void 0!==S?(n=S,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),x=f?a.e:a.c,A=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&D&&window.docusaurus.prefetch(N),function(){A&&d&&d.disconnect()}}),[N,A,D]);var L=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,_=!N||!D||L;return N&&D&&!L&&!v&&w.collectLink(N),_?o.a.createElement("a",Object.assign({href:N},C&&!D&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(x,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(N),P.current=!0)},innerRef:function(e){var t,n;A&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},f&&{isActive:b,activeClassName:m}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(21),o=n(269);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(r){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(270),o=n(275),a=n(276);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return a.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getDocVersionSuggestions(n,o)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return i}));var r=n(21);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,a,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),a=n.n(o),i=n(271),c=n(21),s=n(273);function u(e){return a.a.createElement(i.a,Object(r.a)({},e,{to:(t=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);