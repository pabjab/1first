(window["webpackJsonpethereum-delegated-tx-widget"]=window["webpackJsonpethereum-delegated-tx-widget"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(24),n(2)),i=n.n(s),u=n(3),l=n(12),d=n(13),p=n(16),m=n(14),w=n(17),f=n(1),b=n(18),h=(n(27),n(6)),v=n(4);function k(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark(function e(t){var n,r,a=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:void 0,e.abrupt("return",new Promise(function(e,a){var c=new XMLHttpRequest;c.open(n,t,!0),c.onload=function(){4===c.readyState&&c.status>=200&&c.status<300?e(JSON.parse(c.responseText)):a(c.responseText?JSON.parse(c.responseText):c.status)},c.onerror=a,c.send(r&&JSON.stringify(r))}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(i.a.mark(function e(t,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(t,"POST",n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),x=Object.freeze({chainId:-1,name:"unknown-network"}),E={1:{chainId:1,ensAddress:"0x314159265dd8dbb310642f98f50c066173c1259b",name:"homestead"},3:{chainId:3,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"ropsten"},2:{chainId:2,name:"morden"},4:{chainId:4,ensAddress:"0xe7410170f87102DF0055eB195163A03B7F2Bff4A",name:"rinkeby"},5:{chainId:5,ensAddress:"0x112234455c3a32fd11230c42e7bccd4a84e02010",name:"goerli"},42:{chainId:42,name:"kovan"},61:{chainId:61,name:"classic"},62:{chainId:62,name:"classicTestnet"}},j=["http://localhost:8088"],N="26330e580e9d49ffb91482c15a92e86a",A=a.a.createElement("span",null,"In order to use this delegated transactions service, you need to browse this page with"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metamask.io"},"Metamask wallet")," ","extension or from your"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://trustwallet.com"},"mobile wallet's")," ","embedded DApp browser (if supported)."),P=function(e,t){return a.a.createElement("span",null,"Please, switch your wallet to"," ",a.a.createElement("strong",null,"homestead"===e?"mainnet":e," network")," ","(it is currently on ",t," network).")},I=function(e){return a.a.createElement("span",null,"Unknown network selected in your wallet (",e,"). Please, switch to main network or known testnets (ropsten/kovan)")},S=function(e){return a.a.createElement("span",null,e)},M=function(e,t){return a.a.createElement("span",null,'Configuration error: unknown or wrong URL parameter "',e,'"="',t,'".')};function B(e){return e?e.slice(0,6)+".."+e.slice(-4):"0x????..????"}function C(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(i.a.mark(function e(t,n,r){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("https://".concat(t,".infura.io/v3/").concat(N),{id:42,jsonrpc:"2.0",method:"eth_call",params:[{data:v.utils.id(r).slice(0,10)+"00000000000000000000000000000000000000000000000000000000",to:n},"latest"]});case 2:return a=e.sent,e.abrupt("return",a.result);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var T=Object(f.l)({globalWarningMessage:null,currentEthereumAccount:"",targetNetwork:E[1],selectedNetwork:x,contractAddress:"0x82f4ded9cec9b5750fbff5c2185aee35afc16587",contractSymbolReadOnly:"DREAM",contractDecimalsReadOnly:6,functionName:"transfer",functionArguments:["0xB3311c91d7c1B305DA3567C2320B716B13F24F8A","9990000"],backEndsMeta:[],backEndsByContractReadOnly:{}});console.log("state",T);var W=T,D=Object(f.d)(Object(u.a)(i.a.mark(function e(){var t,n,r,a,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="homestead"===W.targetNetwork.name?"mainnet":W.targetNetwork.name,e.prev=1,e.next=4,Promise.all([C(t,W.contractAddress,"symbol()"),C(t,W.contractAddress,"decimals()")]);case 4:n=e.sent,r=Object(h.a)(n,2),a=r[0],c=r[1],Object(f.n)(function(){W.contractSymbolReadOnly=v.utils.parseBytes32String("0x"+a.substr(130,194)),W.contractDecimalsReadOnly=parseInt(c)}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),Object(f.n)(function(){W.contractSymbolReadOnly="Tokens",W.contractDecimalsReadOnly=18}),console.error("Unable to determine token symbol",e.t0);case 15:case"end":return e.stop()}},e,null,[[1,11]])})));Object(f.m)(W,"contractAddress",D);var U=n(8),F=n(15);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(U.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=Object(F.parse)(window.location.search.slice(1));Object(f.d)(function(){var e;z.network&&("mainnet"===z.network&&(z.network="homestead"),parseInt(z.network)===+z.network?W.targetNetwork=E[z.network]:W.targetNetwork=Object.values(E).find(function(e){return e.name===z.network}),W.targetNetwork||(W.targetNetwork=x,W.globalWarningMessage=M("network",z.network))),z.contractAddress&&("string"===typeof(e=z.contractAddress)&&/0x[0-9a-f]{40}/i.test(e)?W.contractAddress=z.contractAddress:W.globalWarningMessage=M("contractAddress",z.contractAddress))})(),Object(f.d)(Object(u.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=function(){Object(f.n)(function(){for(var e,n;r=t.pop()||[],e=(a=Object(h.a)(r,2))[0],n=a[1],r&&e;){var r,a;W.backEndsMeta.push(e),e.contracts&&e.contracts instanceof Array||console.warn("Back end endpoint GET ".concat(n," does not provide contracts[]"));var c=!0,o=!1,s=void 0;try{for(var i,u=(e.contracts||[])[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var l=i.value;W.backEndsByContractReadOnly=J({},W.backEndsByContractReadOnly,Object(U.a)({},l.address,(W.backEndsByContractReadOnly[l.address]||[]).concat(J({},l,{url:n,networkChainId:e.networkChainId,networkName:e.networkName}))))}}catch(d){o=!0,s=d}finally{try{c||null==u.return||u.return()}finally{if(o)throw s}}}})},r=setInterval(n,250),e.next=5,Promise.all(j.map(function(){var e=Object(u.a)(i.a.mark(function e(n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(n);case 3:r=e.sent,t.push([r,n]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Back end ".concat(n," responds with error."),e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()));case 5:clearInterval(r),n();case 7:case"end":return e.stop()}},e)})))();n(30);function _(){return a.a.createElement("div",{className:"round"},a.a.createElement("div",{className:"cta"},a.a.createElement("span",{className:"arrow arr1 next"}),a.a.createElement("span",{className:"arrow arr2 next"})))}n(31);function H(e){var t=e.tokenAddress||"0x82f4ded9cec9b5750fbff5c2185aee35afc16587",n="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(t,"/logo.png");return a.a.createElement("img",{className:"token-logo-img",src:n,alt:""})}n(32);function G(){return a.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16px",height:"16px",viewBox:"0 0 554.2 554.199",className:"warning-icon"},a.a.createElement("path",{fill:"currentColor",d:"M538.5,386.199L356.5,70.8c-16.4-28.4-46.7-45.9-79.501-45.9c-32.8,0-63.1,17.5-79.5,45.9L12.3,391.6 c-16.4,28.4-16.4,63.4,0,91.8C28.7,511.8,59,529.3,91.8,529.3H462.2c0.101,0,0.2,0,0.2,0c50.7,0,91.8-41.101,91.8-91.8 C554.2,418.5,548.4,400.8,538.5,386.199z M316.3,416.899c0,21.7-16.7,38.3-39.2,38.3s-39.2-16.6-39.2-38.3V416 c0-21.601,16.7-38.301,39.2-38.301S316.3,394.3,316.3,416V416.899z M317.2,158.7L297.8,328.1c-1.3,12.2-9.4,19.8-20.7,19.8 s-19.4-7.7-20.7-19.8L237,158.6c-1.3-13.1,5.801-23,18-23H299.1C311.3,135.7,318.5,145.6,317.2,158.7z"}))}function V(){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(i.a.mark(function e(){var t,n,r=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:null,n=r.length>1&&void 0!==r[1]?r[1]:function(){},t){e.next=6;break}return e.next=5,q(n);case 5:t=e.sent;case 6:return e.abrupt("return",new v.providers.Web3Provider(t.currentProvider));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(e){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return window.web3=new window.Web3(window.ethereum),e.prev=2,t("Please, allow an access to this page in your wallet"),e.next=6,window.ethereum.enable();case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new Error("You've denied the access to see your account address.");case 11:e.next=18;break;case 13:if(!window.web3){e.next=17;break}window.web3=new window.Web3(window.web3.currentProvider),e.next=18;break;case 17:return e.abrupt("return",null);case 18:return e.abrupt("return",window.web3);case 19:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}var Z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={warningMessage:A,networkWarningMessage:null},n.accountUpdateTimeout=1,n.provider=null,n.web3Provider=null,n.updateFromProvider=Object(f.d)(Object(u.a)(i.a.mark(function e(){var t,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.provider){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.provider.listAccounts();case 4:t=e.sent[0];case 5:return e.next=7,new Promise(function(e,t){return n.web3Provider.version.getNetwork(function(n,r){return n?t(n):e(r)})});case 7:if(r=e.sent,E[r]){e.next=12;break}return n.setState({networkWarningMessage:I(r)}),e.next=12,new Promise(function(e){return setTimeout(e,5e3)});case 12:if(!E[r]){e.next=5;break}case 13:Object(f.n)(function(){W.currentAccount!==t&&(W.currentAccount=t),+r!==W.selectedNetwork.chainId&&(W.selectedNetwork=E[r]||x)}),n.setState({networkWarningMessage:W.selectedNetwork.chainId===W.targetNetwork.chainId||W.backEndsByContractReadOnly[W.contractAddress]&&W.backEndsByContractReadOnly[W.contractAddress].find(function(e){return e.networkChainId===W.selectedNetwork.chainId})?null:P(W.targetNetwork.name,W.selectedNetwork.name)}),n.accountUpdateTimeout>0&&(n.accountUpdateTimeout=setTimeout(n.updateFromProvider,100));case 16:case"end":return e.stop()}},e)}))),n}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(function(e){return t.setState({warningMessage:S(e)})});case 3:if(this.web3Provider=e.sent,this.web3Provider){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,V(this.web3Provider);case 8:return this.provider=e.sent,e.next=11,this.updateFromProvider();case 11:this.setState({warningMessage:null}),console.log("Provider",this.provider),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),this.setState({warningMessage:(n=e.t0.toString(),a.a.createElement("span",null,"Unable to connect to your wallet. ",n))});case 18:case"end":return e.stop()}var n},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.accountUpdateTimeout),this.accountUpdateTimeout=0}},{key:"render",value:function(){var e=B(W.currentAccount),t=W.contractAddress,n=W.contractSymbolReadOnly,r=W.backEndsByContractReadOnly,c=W.selectedNetwork,o=B("0x6f8103606b649522aF9687e8f1e7399eff8c4a6B"),s=this.state,i=s.warningMessage,u=s.networkWarningMessage,l=i||u||W.globalWarningMessage;return r[t]?r[t].find(function(e){return e.networkChainId===c.chainId})||(l=l||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.a.createElement("span",null,"Configured back ends support only"," ",a.a.createElement("strong",null,t.map(function(e){return"homestead"===e?"mainnet":e}).join(" or "))," ","network",t.length>1?"s":""," for this contract. Please,"," ","switch your wallet to ",t.length>1?"these":"this"," network",t.length>1?"s":""," (it is currently on ",e," ","network).")}(c.name,Array.from(new Set(r[t].map(function(e){return e.networkName}))))):l=l||function(e){return a.a.createElement("span",null,"There is no back end for contract ",B(e)," ","found which supports delegated transactions. If this contract indeed supports delegated transactions, you may add it by contributing to"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ZitRos/ethereum-delegated-tx-widget"},"this project"),".")}(t),a.a.createElement("div",{className:"app"},a.a.createElement("section",{className:"app-body"},a.a.createElement("h1",{className:"head-title"},"Transfer"),a.a.createElement("div",{className:"token-info"},5," ",a.a.createElement(H,{tokenAddress:t})," ",n),a.a.createElement("div",{className:"sender-and-recipient-block"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{value:e,disabled:!0})),a.a.createElement("div",{className:"address-sub"},"Sender (You)")),a.a.createElement(_,null),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{value:o,disabled:!0})),a.a.createElement("div",{className:"address-sub"},"Recipient"))),a.a.createElement("div",{className:"spec-table"},a.a.createElement("div",{className:"spec-table-row"},a.a.createElement("div",null,"Fee for Sender"),a.a.createElement("div",{className:"strong"},2.1516," ",a.a.createElement(H,{tokenAddress:t})," ",n)),a.a.createElement("div",{className:"spec-table-row"},a.a.createElement("div",null,"Confirmation Time"),a.a.createElement("div",null,"~3 minutes"))),l&&a.a.createElement("div",{className:"warning-message"},a.a.createElement(G,null)," ",l),a.a.createElement("div",{className:"center"},a.a.createElement("button",{className:l?"unavailable":""},"Confirm"))))}}]),t}(a.a.PureComponent),$=Object(b.a)(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.7af35047.chunk.js.map