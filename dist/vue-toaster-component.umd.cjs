(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n["vue-toaster-component"]={},n.Vue))})(this,function(n,e){"use strict";var x=Object.defineProperty;var L=(n,e,d)=>e in n?x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[e]=d;var M=(n,e,d)=>(L(n,typeof e!="symbol"?e+"":e,d),d);const d="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkY2NTY1Ii8+CjxwYXRoIGQ9Ik05LjkyNzczIDEwLjM2MzNMMjMuOTI3NyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+CjxwYXRoIGQ9Ik0yMy45Mjc3IDEwLjM2MzNMOS45Mjc3MyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+Cjwvc3ZnPgo=",N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2LjM2MzMiIHI9IjE2IiBmaWxsPSIjN0NEOTIwIi8+CjxwYXRoIGQ9Ik04LjkyNzczIDE2Ljk0MzlMMTQuODgxMiAyMi4zNjMzTDI0LjkyNzcgMTAuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=",v="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuOTI3NyAxNi44NjMzKSIgZmlsbD0iIzFDNjlENCIvPgo8cGF0aCBkPSJNMTYuOTI3NyAyNC4zNjUyTDE2LjkyNzcgMTQuMzY1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDguMzY1MjNMMTYuOTI3NyAxMS4zNjUyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==",h="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkZDMzRGIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDkuMzYzMjhWMTkuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDI1LjM2MzNMMTYuOTI3NyAyMi4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==";class b{constructor(i,s){M(this,"startedAt");M(this,"callback");M(this,"delay");M(this,"timer");this.startedAt=Date.now(),this.callback=i,this.delay=s,this.timer=setTimeout(i,s)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const k={key:0,src:d},B={key:1,src:N},C={key:2,src:v},O={key:3,src:h},D={class:"toaster-text"},Z={class:"body-text-bold"},E={class:"fine-print"},P=e.defineComponent({__name:"ToasterComponent",props:{toaster:{default:()=>({title:"",message:"",type:"success"})},queue:{type:Boolean,default:!0},duration:{default:4e5},dismissible:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!0},onClick:null,onDismiss:null,position:{default:"top-right"}},setup(r){const i=r,s={TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"},u=e.ref(!1),a=e.ref(null),l=e.ref(null),c=e.ref(),m=e.ref(),y=e.ref(),H=e.computed(()=>{switch(i.position){case s.TOP:case s.TOP_RIGHT:case s.TOP_LEFT:return a.value;case s.BOTTOM:case s.BOTTOM_RIGHT:case s.BOTTOM_LEFT:return l.value;default:return a.value}}),T=e.computed(()=>{switch(i.position){case s.TOP:case s.TOP_RIGHT:case s.TOP_LEFT:return{enter:"toaster-fade-in-down",leave:"toaster-fade-out"};case s.BOTTOM:case s.BOTTOM_RIGHT:case s.BOTTOM_LEFT:return{enter:"toaster-fade-in-up",leave:"toaster-fade-out"};default:return{enter:"toaster-fade-in-down",leave:"toaster-fade-out"}}});e.onMounted(()=>{G(),f()}),e.onBeforeUnmount(()=>{p()});function G(){if(a.value=document.querySelector(".toaster.toaster-top"),l.value=document.querySelector(".toaster.toaster-bottom"),a.value&&l.value)return;a.value||(a.value=document.createElement("div"),a.value.className="toaster toaster-top",g(a.value)),l.value||(l.value=document.createElement("div"),l.value.className="toaster toaster-bottom",g(l.value));const t=document.body;t.appendChild(a.value),t.appendChild(l.value)}function g(t){t.style.position="fixed",t.style.display="flex",t.style.top="0",t.style.bottom="0",t.style.left="0",t.style.right="0",t.style.overflow="hidden",t.style.zIndex="9999",t.style.pointerEvents="none",t.style.padding="40px"}function S(){var t,o;return i.queue?a.value&&((t=a.value)==null?void 0:t.childElementCount)>0||l.value&&((o=l.value)==null?void 0:o.childElementCount)>0:!1}function p(...t){c.value&&c.value.stop(),clearTimeout(y.value),u.value=!1,setTimeout(()=>{var I;(I=i.onDismiss)==null||I.apply(null,t);const o=m.value;o&&(e.render(null,o),j(o))},150)}function f(){var o,I;if(S()){y.value=setTimeout(f,250);return}const t=(o=m.value)==null?void 0:o.parentElement;(I=H.value)==null||I.insertAdjacentElement("afterbegin",m.value),j(t),u.value=!0,i.duration&&(c.value=new b(p,i.duration))}function w(...t){var o;i.dismissible&&((o=i.onClick)==null||o.apply(null,t),p())}function z(t){!i.pauseOnHover||!c.value||(t?c.value.pause():c.value.resume())}function j(t){var o;typeof t.remove<"u"?t.remove():(o=t.parentNode)==null||o.removeChild(t)}return(t,o)=>(e.openBlock(),e.createBlock(e.Transition,{"enter-active-class":e.unref(T).enter,"leave-active-class":e.unref(T).leave},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{ref_key:"toasterMessage",ref:m,role:"alert",class:e.normalizeClass(["toaster-message",[`toaster-position-${r.position}`]]),onMouseover:o[0]||(o[0]=I=>z(!0)),onMouseleave:o[1]||(o[1]=I=>z(!1))},[r.toaster.type==="error"?(e.openBlock(),e.createElementBlock("img",k)):r.toaster.type==="success"?(e.openBlock(),e.createElementBlock("img",B)):r.toaster.type==="info"?(e.openBlock(),e.createElementBlock("img",C)):r.toaster.type==="warning"?(e.openBlock(),e.createElementBlock("img",O)):e.createCommentVNode("",!0),e.createElementVNode("div",D,[e.createElementVNode("p",Z,e.toDisplayString(r.toaster.title),1),e.createElementVNode("p",E,e.toDisplayString(r.toaster.message),1)]),e.createElementVNode("div",{class:"close-toaster",onClick:w})],34),[[e.vShow,u.value]])]),_:1},8,["enter-active-class","leave-active-class"]))}}),R="",A=(r={})=>({addToast(i){const u=Object.assign({},{toaster:i},r),a=this.createComponent(P,u,document.body);return{dismiss:a==null?void 0:a.ctx.dismiss}},createComponent(i,s,u,a={}){const l=e.h(i,s,a),c=document.createElement("div");return c.classList.add("toaster-pending"),u.appendChild(c),e.render(l,c),l.component}});n.useToaster=A,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
