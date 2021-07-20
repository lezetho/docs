(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[248],{6604:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},s="Translate your site",d={unversionedId:"Contributing/translate-your-site",id:"Contributing/translate-your-site",isDocsHomePage:!1,title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/Contributing/translate-your-site.md",sourceDirName:"Contributing",slug:"/Contributing/translate-your-site",permalink:"/docs/Contributing/translate-your-site",editUrl:"https://github.com/ControlPanel-gg/docs/docs/Contributing/translate-your-site.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/docs/Contributing/manage-docs-versions"}},u=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,i.kt)("p",null,"Let's translate ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,i.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,i.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,i.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,i.kt)("p",null,"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,i.kt)("p",null,"Translate ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,i.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,i.kt)("p",null,"Start your site on the French locale:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,i.kt)("p",null,"Your localized site is accessible at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),(0,i.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,i.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Locale Dropdown",src:n(322).Z})),(0,i.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,i.kt)("p",null,"Build your site for a specific locale:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,i.kt)("p",null,"Or build your site to include all the locales at once:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}p.isMDXComponent=!0},322:function(e,t,n){"use strict";t.Z=n.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);