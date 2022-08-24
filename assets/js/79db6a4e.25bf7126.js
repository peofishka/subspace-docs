"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[2604],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7293:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Farming with Subspace Desktop",sidebar_position:2,description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI"},s="Subspace Desktop",p={unversionedId:"subspace-desktop",id:"version-v0.6.0/subspace-desktop",title:"Farming with Subspace Desktop",description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI",source:"@site/subspace-desktop_versioned_docs/version-v0.6.0/subspace-desktop.md",sourceDirName:".",slug:"/subspace-desktop",permalink:"/subspace-desktop/v0.6.0/subspace-desktop",draft:!1,tags:[],version:"v0.6.0",sidebarPosition:2,frontMatter:{title:"Farming with Subspace Desktop",sidebar_position:2,description:"How to run a Subspace Network Farmer with Subspace Desktop - Farmer - Farming - Application - App - GUI"},sidebar:"masterSidebar",previous:{title:"What is Subspace Desktop?",permalink:"/subspace-desktop/v0.6.0/"}},u={},d=[{value:"Upgrade from previous version of Subspace Desktop",id:"upgrade-from-previous-version-of-subspace-desktop",level:2},{value:"Upgrade from CLI (subspace-node + subspace-farmer)",id:"upgrade-from-cli-subspace-node--subspace-farmer",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Linux",id:"linux",level:3},{value:"Install the dependencies",id:"install-the-dependencies",level:2},{value:"Start the app in development mode",id:"start-the-app-in-development-mode",level:3},{value:"Build the app for production (Builds Quasar and Tauri)",id:"build-the-app-for-production-builds-quasar-and-tauri",level:3},{value:"Access Tauri or Quasar specific commands",id:"access-tauri-or-quasar-specific-commands",level:3},{value:"Customize Quasar config",id:"customize-quasar-config",level:3},{value:"Customize Tauri config",id:"customize-tauri-config",level:3},{value:"Contribute to development",id:"contribute-to-development",level:3}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subspace-desktop"},"Subspace Desktop"),(0,o.kt)("p",null,"Standalone Desktop application for farming on Subspace Network (includes both node and farmer).\nDownload and run this application to be a farmer on Subspace Network (currently on testnet)."),(0,o.kt)("h1",{id:"os-requirements"},"OS Requirements"),(0,o.kt)("p",null,"Below is not necessarily strict boundaries, but rather what we have tested and confirmed so far."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10 and 11"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04 and 22.04"),(0,o.kt)("li",{parentName:"ul"},"macOS 11 and 12")),(0,o.kt)("h1",{id:"how-to-install"},"How to Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace-desktop/releases"},"release")," for your preferred platform."),(0,o.kt)("li",{parentName:"ol"},"Install the program."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"subspace-desktop")," application."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Quick Start")," option."),(0,o.kt)("li",{parentName:"ol"},"Wait for app to sync network size, and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Start Plotting")," (In this version, you plot the full history. In future versions you will be able to set your plot size on this page)."),(0,o.kt)("li",{parentName:"ol"},"The network will begin to sync, while you wait you can click ",(0,o.kt)("inlineCode",{parentName:"li"},"next")," to open up the ",(0,o.kt)("inlineCode",{parentName:"li"},"what is plotting")," page, and reveal your ",(0,o.kt)("inlineCode",{parentName:"li"},"seed")," phrase, and provide you with our social links."),(0,o.kt)("li",{parentName:"ol"},"Once the node fully syncs you will be taken the the Farmer Dashboard which will show you the network status, and if you have won any blocks.")),(0,o.kt)("h1",{id:"how-to-upgrade"},"How to Upgrade"),(0,o.kt)("h2",{id:"upgrade-from-previous-version-of-subspace-desktop"},"Upgrade from previous version of Subspace Desktop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simply uninstall the old application from your computer"),(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace-desktop/releases"},"release"),' for your preferred platform (make sure to select "Latest" release with green label and not "Pre-release")'),(0,o.kt)("li",{parentName:"ol"},"Install new version of Subspace Desktop"),(0,o.kt)("li",{parentName:"ol"},"Run the application, it should detect your old plot and continue farming as usual")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UNLESS STATED OTHERWISE IN THE RELEASE NOTES:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You don't need to delete your existing plot"),(0,o.kt)("li",{parentName:"ul"},"You don't need to create a new identity"),(0,o.kt)("li",{parentName:"ul"},"You don't need to delete the config files")),(0,o.kt)("h2",{id:"upgrade-from-cli-subspace-node--subspace-farmer"},"Upgrade from CLI (subspace-node + subspace-farmer)"),(0,o.kt)("p",null,"These instructions are for upgrading installation that followed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/farming.md"},"official guide"),",\nif you followed unofficial one, ask guide author for proper upgrade steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove old data to free space used by CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain testnet\n")),"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"FARMER_FILE_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_FILE_NAME")," with actual file names"),(0,o.kt)("li",{parentName:"ol"},"Delete those files ",(0,o.kt)("inlineCode",{parentName:"li"},"FARMER_FILE_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_FILE_NAME")),(0,o.kt)("li",{parentName:"ol"},"Install Subspace Desktop"),(0,o.kt)("li",{parentName:"ol"},"If you didn't specify ",(0,o.kt)("inlineCode",{parentName:"li"},"--reward-address"),", didn't import mnemonic or don't care, use \"Quick start\" at the first screen"),(0,o.kt)("li",{parentName:"ol"},"In case you specified ",(0,o.kt)("inlineCode",{parentName:"li"},"--reward-address"),' when running your farmer before, choose "Advanced" on the first screen and use the same reward address there'),(0,o.kt)("li",{parentName:"ol"},'In case you imported mnemonic before, choose "Advanced" and specify the address that corresponds to that mnemonic (can be found in Polkadot.js waller or explorer, both "any chain", "Polkadot" and Subspace addresses are fine)'),(0,o.kt)("li",{parentName:"ol"},"If you didn't specify ",(0,o.kt)("inlineCode",{parentName:"li"},"--reward-address")," and didn't import mnemonic and farmed some coins already, use ",(0,o.kt)("inlineCode",{parentName:"li"},"./FARMER_FILE_NAME identity view --mnemonic")," to find mnemonic (replace ",(0,o.kt)("inlineCode",{parentName:"li"},"FARMER_FILE_NAME")," with the actual file name), import it into Polkadot.js wallet and follow step 6 above")),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nodejs 14+"),(0,o.kt)("li",{parentName:"ul"},"yarn"),(0,o.kt)("li",{parentName:"ul"},"rustc")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On Linux you'll have to install development version of ",(0,o.kt)("inlineCode",{parentName:"p"},"libwebkit2gtk-4.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libappindicator")," packages, which can be done on Ubuntu with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install libwebkit2gtk-4.0-dev \\\n    build-essential \\\n    curl \\\n    wget \\\n    libssl-dev \\\n    libgtk-3-dev \\\n    libappindicator3-dev \\\n    patchelf \\\n    librsvg2-dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"libappindicator: needed to use the system tray feature."),(0,o.kt)("li",{parentName:"ul"},"patchelf and librsvg: needed to bundle AppImage.")),(0,o.kt)("p",null,"Stuck?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tauri.studio/en/docs/getting-started/intro"},"https://tauri.studio/en/docs/getting-started/intro")),(0,o.kt)("h2",{id:"install-the-dependencies"},"Install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,o.kt)("h3",{id:"start-the-app-in-development-mode"},"Start the app in development mode"),(0,o.kt)("p",null,"Terminal 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn quasar dev\n")),(0,o.kt)("p",null,"Terminal 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn tauri dev\n")),(0,o.kt)("h3",{id:"build-the-app-for-production-builds-quasar-and-tauri"},"Build the app for production (Builds Quasar and Tauri)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,o.kt)("h3",{id:"access-tauri-or-quasar-specific-commands"},"Access Tauri or Quasar specific commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn quasar --help\nyarn tauri --help\n")),(0,o.kt)("h3",{id:"customize-quasar-config"},"Customize Quasar config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://v2.quasar.dev/quasar-cli/quasar-conf-js"},"https://v2.quasar.dev/quasar-cli/quasar-conf-js")),(0,o.kt)("h3",{id:"customize-tauri-config"},"Customize Tauri config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tauri.studio/en/docs/api/config"},"https://tauri.studio/en/docs/api/config")),(0,o.kt)("h3",{id:"contribute-to-development"},"Contribute to development"),(0,o.kt)("p",null,"Review the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace-desktop/blob/main/ARCHITECTURE.md"},"ARCHITECTURE.md")," document for an overview of the application design."))}m.isMDXComponent=!0}}]);