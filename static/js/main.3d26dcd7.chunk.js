(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{162:function(e,t,r){},168:function(e,t){},216:function(e,t){},242:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(140),s=r.n(a),o=(r(162),r(48)),l=r(60),i=r(4),u=r.n(i),d=r(68),b=r(141),p=r(99),j=r(26),f=r(19),h=new b.a("rinkeby"),x=h.getBundleDropModule("0xec585f1103706a2bdcc7d4be2a62a6d586d5b3e1"),O=h.getTokenModule("0xb7c565C82f30BA6F1A24b155e5D513075b21d358"),v=h.getVoteModule("0xE699Ee2a26b1630CdE82d3A0Aaad2322Dc2d2230"),m=function(){var e=Object(p.b)(),t=e.connectWallet,r=e.address,c=e.error,a=e.provider;console.log("hello address: ".concat(r));var s=Object(n.useState)(!1),i=Object(l.a)(s,2),b=i[0],m=i[1],k=a?a.getSigner():void 0,g=Object(n.useState)(!1),y=Object(l.a)(g,2),w=y[0],A=y[1],S=Object(n.useState)({}),I=Object(l.a)(S,2),E=I[0],M=I[1],N=Object(n.useState)([]),T=Object(l.a)(N,2),C=T[0],F=T[1],D=Object(n.useState)([]),P=Object(l.a)(D,2),B=P[0],V=P[1],R=Object(n.useState)(!1),U=Object(l.a)(R,2),J=U[0],W=U[1],H=Object(n.useState)(!1),L=Object(l.a)(H,2),Y=L[0],Z=L[1];Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,v.getAll();case 5:t=e.sent,V(t),console.log("Proposals:",t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("failed to get proposals",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[b]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:if(B.length){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,v.hasVoted(B[0].proposalId,r);case 7:t=e.sent,Z(t),t?console.log("User has already voted"):console.log("User has not voted yet"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error("Failed to check if wallet has voted",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])}))),[b,B,r]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,x.getAllClaimerAddresses("0");case 5:t=e.sent,F(t),console.log("\ud83d\ude80 Members addresses",t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("failed to get member list",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[b]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.getAllHolderBalances();case 5:t=e.sent,M(t),console.log("\ud83d\udc5c Amounts",t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("failed to get token amounts",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[b]);var q=Object(n.useMemo)((function(){return C.map((function(e){return{address:e,tokenAmount:j.a.utils.formatUnits(E[e]||0,18)}}))}),[C,E]);if(Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.setProviderOrSigner(k);case 1:case"end":return e.stop()}}),e)}))),[k]),Object(n.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.balanceOf(r,"0");case 4:t=e.sent;try{t.gt(0)?(m(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(m(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))}catch(c){m(!1),console.error("failed to nft balance",c)}case 6:case"end":return e.stop()}}),e)}))),[r]),c instanceof d.a)return Object(f.jsxs)("div",{className:"unsupported-network",children:[Object(f.jsx)("h2",{children:"Please connect to Rinkeby"}),Object(f.jsx)("p",{children:"This dapp only works on the Rinkeby network, please switch networks in your connected wallet."})]});if(!r)return Object(f.jsxs)("div",{className:"landing",children:[Object(f.jsx)("h1",{style:{color:"black"},children:"Welcome to Football Transfers DAO"}),Object(f.jsx)("button",{onClick:function(){return t("injected")},className:"btn-hero",children:"Connect your wallet"})]});if(b)return Object(f.jsxs)("div",{className:"member-page",children:[Object(f.jsx)("h1",{style:{color:"black"},children:"Transfer DAO member"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{style:{color:"black"},children:"Member List"}),Object(f.jsxs)("table",{className:"card",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Address"}),Object(f.jsx)("th",{children:"Token Amount"})]})}),Object(f.jsx)("tbody",{children:q.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:(t=e.address,t.toString().substring(0,6)+"..."+t.toString().substring(t.length-4))}),Object(f.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{style:{color:"black"},children:"Active Proposals"}),Object(f.jsxs)("form",{onSubmit:function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),W(!0),n=B.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(r){document.getElementById(e.proposalId+"-"+r.type).checked&&(t.vote=r.type)})),t})),e.prev=4,e.next=7,O.getDelegationOf(r);case 7:if(e.sent!==j.a.constants.AddressZero){e.next=11;break}return e.next=11,O.delegateTo(r);case 11:return e.prev=11,e.next=14,Promise.all(n.map(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",v.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(n.map(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",v.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:Z(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,W(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[B.map((function(e,t){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h5",{style:{color:"black"},children:e.description}),Object(f.jsx)("div",{children:e.votes.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(f.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(f.jsx)("button",{disabled:J||Y,type:"submit",children:J?"Voting...":Y?"You Already Voted":"Submit Votes"}),Object(f.jsx)("small",{style:{color:"black"},children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]});var z=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,e.next=4,x.claim("0",1);case 4:m(!0),console.log("Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/".concat(x.address,"/0")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Failed to claim ",c);case 11:return e.prev=11,A(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"mint-nft",children:[Object(f.jsx)("h1",{children:"Mint your free DAO membership NFT"}),Object(f.jsx)("button",{disabled:w,onClick:function(){return z()},children:w?"Minting...":"Mint your nft (FREE)"})]})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(p.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(f.jsx)(m,{})})}),document.getElementById("root"))}},[[242,2,3]]]);
//# sourceMappingURL=main.3d26dcd7.chunk.js.map