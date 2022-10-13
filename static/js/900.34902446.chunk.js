"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{1237:function(n,e,t){t.d(e,{II:function(){return l},Rx:function(){return f},__:function(){return h},m0:function(){return m},y:function(){return x}});var r,o,i,c,s,a=t(168),u=t(6444),d=t(5705),h=u.ZP.label(r||(r=(0,a.Z)(["\n  position: relative;\n  display: block;\n\n  &:not(:last-child) {\n    /* color: red; */\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[4]})),l=(0,u.ZP)(d.gN)(o||(o=(0,a.Z)(["\n  padding: "," ","px;\n  width: 320px;\n  height: 30px;\n  font-size: ",";\n  border: ",";\n  border-radius: ",";\n  border-color: ",";\n\n  &:focus-within {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.borders.m}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgSecondary}),(function(n){return n.theme.colors.accent})),m=u.ZP.p(i||(i=(0,a.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),f=u.ZP.div(c||(c=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  height: 10px;\n"]))),x=(0,u.ZP)(d.Bc)(s||(s=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.fontSizes.xs}))},4900:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,o,i,c,s,a,u,d,h,l,m,f,x=t(885),p=t(9434),b=t(2791),g=t(1233),v=t(1413),j=t(5705),w=t(7103),Z=t(1237),y=t(6916),C=function(n){return n.contacts.items},k=function(n){return n.contacts.filter},z=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},S=(0,y.P1)([C,k],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),_=t(3502),R=t(8402),A=t(168),I=t(6444),F=I.ZP.div(r||(r=(0,A.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 24px;\n  height: 24px;\n"]))),E=t(184),N=function(n){var e=n.loading,t=n.size;return(0,E.jsx)(F,{children:(0,E.jsx)(R.s5,{strokeColor:"#ffffff",strokeWidth:"5",animationDuration:"0.75",width:t,visible:e})})},L=w.Ry().shape({name:w.Z_().strict().trim().min(1).max(30).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces").required(),number:w.Z_().strict().trim().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),W={name:"",number:""},$=function(n){var e=n.onAddContact,t=n.onReviewName,r=(0,p.v9)(z);return(0,E.jsx)(j.J9,{initialValues:W,validationSchema:L,onSubmit:function(n,r){t(n.name)?alert("".concat(n.name," is already in contacts.")):(e((0,v.Z)({},n)),r.resetForm())},children:(0,E.jsxs)(j.l0,{children:[(0,E.jsxs)(Z.__,{htmlFor:"name",children:[(0,E.jsx)(Z.m0,{children:"Name"}),(0,E.jsx)(Z.II,{autoComplete:"off",type:"text",name:"name"}),(0,E.jsx)(Z.Rx,{children:(0,E.jsx)(Z.y,{component:"p",name:"name"})})]}),(0,E.jsxs)(Z.__,{htmlFor:"number",children:[(0,E.jsx)(Z.m0,{children:"Phone"}),(0,E.jsx)(Z.II,{type:"tel",name:"number"}),(0,E.jsx)(Z.Rx,{children:(0,E.jsx)(Z.y,{component:"p",name:"number"})})]}),(0,E.jsxs)(_.z,{disabled:r,margin:"45px 0 0",children:["Add contact",(0,E.jsx)(N,{loading:r,size:"24"})]})]})})},q=I.ZP.p(o||(o=(0,A.Z)(["\n  margin-top: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s})),B=I.ZP.ul(i||(i=(0,A.Z)(["\n  padding: ","px ","px;\n  margin-top: ","px;\n  margin: 30px auto 0;\n  max-width: 500px;\n  max-height: 490px;\n  overflow: auto;\n  border: ",";\n  border-color: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.m}),(function(n){return n.theme.colors.bgSecondary}),(function(n){return n.theme.radii.md})),H=I.ZP.li(c||(c=(0,A.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: ","px;\n  border: ",";\n  border-color: inherit;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);\n\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n\n  &:hover,\n  :focus {\n    border: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.m}),(function(n){return n.theme.radii.md}),(function(n){return n.index%2===0?n.theme.colors.bgPrimary:n.theme.colors.bgSecondary}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.m}),(function(n){return n.theme.colors.accent})),T=I.ZP.button(s||(s=(0,A.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  /* padding: ","px; */\n  border-radius: ",";\n  border: ",";\n  background-color: ",";\n  cursor: pointer;\n\n  &:active {\n    box-shadow: none;\n  }\n\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.borders.none}),(function(n){return n.index?n.index%2===0?n.theme.colors.bgSecondary:n.theme.colors.bgPrimary:n.theme.colors.bgSecondary}),(function(n){return n.theme.colors.accent})),D=function(n){var e=n.onRemoveContact,t=n.id,r=n.index,o=n.children,i=(0,b.useState)(!1),c=(0,x.Z)(i,2),s=c[0],a=c[1];return(0,p.v9)(P)&&a(!1),(0,E.jsxs)(T,{index:r,type:"button",disabled:s,onClick:function(){a(!0),e(t)},children:[(0,E.jsx)(N,{loading:s,size:"24"}),o]})},J=t(4651),V=function(n){var e=n.onRemoveContact,t=(0,p.v9)(S);return(0,E.jsx)(B,{children:t.map((function(n,t){var r=n.name,o=n.number,i=n.id;return(0,E.jsxs)(H,{index:t,children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{children:r}),(0,E.jsx)(q,{children:o})]}),(0,E.jsx)(D,{onRemoveContact:e,id:i,index:t,children:(0,E.jsx)(J.ven,{})})]},i)}))})},X=(I.ZP.p(a||(a=(0,A.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),I.ZP.input(u||(u=(0,A.Z)(["\n  padding: "," ","px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 30px;\n  font-size: ",";\n  border: ",";\n  border-radius: ",";\n  border-color: ",";\n\n  &:focus-within {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.borders.m}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgSecondary}),(function(n){return n.theme.colors.accent}))),G=I.ZP.div(d||(d=(0,A.Z)(["\n  margin: 0 auto;\n  max-width: 400px;\n"]))),K=function(n){n.filterHeader;var e=n.value,t=n.onChange;return(0,E.jsx)(G,{children:(0,E.jsx)("label",{htmlFor:"filter",children:(0,E.jsx)(X,{type:"text",name:"filter",value:e,onChange:t,placeholder:"Find contacts by name"})})})},M=t(4164),O=t(7425),Q=I.ZP.div(h||(h=(0,A.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n\n  body & {\n    overflow: hidden;\n  }\n"]))),U=I.ZP.div(l||(l=(0,A.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ","px;\n  width: 500px;\n  height: 400px;\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.bgPrimary})),Y=I.ZP.button(m||(m=(0,A.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border: ",";\n  border-radius: ",";\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);\n  background-color: ",";\n  cursor: pointer;\n\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.bgSecondary}),(function(n){return n.theme.colors.accent})),nn=document.getElementById("modal"),en=function(n){var e=n.onClose,t=n.children;(0,b.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[e]);return(0,M.createPortal)((0,E.jsx)(Q,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,E.jsxs)(U,{children:[t,(0,E.jsx)(Y,{onClick:function(){return e()},children:(0,E.jsx)(O.tgW,{})})]})}),nn)},tn=t(1538),rn=t(3634),on=t(2168),cn=function(n){var e=n.message;return(0,E.jsx)(on.x,{as:"p",p:4,color:"red",children:e})},sn=function(n){var e=n.children;return(0,E.jsx)(on.x,{as:"h2",mb:5,textAlign:"center",children:e})},an=I.ZP.button(f||(f=(0,A.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: ",";\n  right: ",";\n  width: ",";\n  height: ",";\n  border-radius: ",";\n  border: ",";\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);\n  background-color: ",";\n  cursor: pointer;\n  z-index: 9999;\n\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n\n  & svg {\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.position[0]}),(function(n){return n.position[1]}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.bgSecondary})),un=function(n){var e=n.size,t=n.position,r=n.onClick,o=n.children;return(0,E.jsx)(an,{size:e,position:t,onClick:function(){return r()},children:o})},dn=t(6856),hn=function(){var n=(0,b.useState)(!1),e=(0,x.Z)(n,2),t=e[0],r=e[1],o=(0,p.I0)(),i=(0,p.v9)(C),c=(0,p.v9)(k),s=(0,p.v9)(P),a=(0,p.v9)(S);(0,b.useEffect)((function(){o(rn.fetchContacts())}),[o]);var u=function(){r(!t)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(un,{size:"50px",position:["5px","49%"],onClick:u,children:(0,E.jsx)(dn.WZt,{})}),(0,E.jsxs)(g.$,{title:"Contacts",children:[(0,E.jsx)(K,{filterHeader:"Find contacts by name",value:c,onChange:function(n){o((0,tn.hX)(n.currentTarget.value.trimStart()))}}),s&&(0,E.jsx)(cn,{message:s}),a.length>0&&(0,E.jsx)(V,{onRemoveContact:function(n){o(rn.deleteContact(n))}}),t&&(0,E.jsx)(en,{onClose:u,children:(0,E.jsxs)("div",{children:[(0,E.jsx)(sn,{children:"Add Contact"}),(0,E.jsx)($,{onAddContact:function(n){o(rn.addNewContact(n)),u()},onReviewName:function(n){return i.find((function(e){return e.name===n}))}})]})})]})]})}}}]);
//# sourceMappingURL=900.34902446.chunk.js.map