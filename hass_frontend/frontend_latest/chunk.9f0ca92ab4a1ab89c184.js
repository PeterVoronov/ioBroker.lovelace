(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3047],{43047:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ExternalAuth:()=>c,createExternalAuth:()=>w});var n=s(75394);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class i{constructor(){a(this,"commands",{}),a(this,"cache",{}),a(this,"msgId",0)}attach(){var e;e=this,window.addEventListener("connection-status",(t=>e.fireMessage({type:"connection-status",payload:{event:t.detail}}))),(e=>{window.addEventListener("haptic",(t=>e.fireMessage({type:"haptic",payload:{hapticType:t.detail}})))})(this),window.externalBus=e=>this.receiveMessage(e)}sendMessage(e){const t=++this.msgId;return e.id=t,this.fireMessage(e),new Promise(((e,s)=>{this.commands[t]={resolve:e,reject:s}}))}fireMessage(e){e.id||(e.id=++this.msgId),this._sendExternal(e)}receiveMessage(e){const t=this.commands[e.id];t?"result"===e.type&&(e.success?t.resolve(e.result):t.reject(e.error)):console.warn("Received unknown msg ID",e.id)}_sendExternal(e){window.externalApp?window.externalApp.externalBus(JSON.stringify(e)):window.webkit.messageHandlers.externalBus.postMessage(e)}}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const o="externalAuthSetToken",l="externalAuthRevokeToken";if(!window.externalApp&&!window.webkit)throw new Error("External auth requires either externalApp or webkit defined on Window object.");class c extends n.gx{constructor(e){super({hassUrl:e,clientId:"",refresh_token:"",access_token:"",expires_in:0,expires:0}),r(this,"external",void 0),r(this,"_tokenCallbackPromise",void 0)}async refreshAccessToken(e){if(this._tokenCallbackPromise&&!e)try{return void await this._tokenCallbackPromise}catch(e){this._tokenCallbackPromise=void 0}const t={callback:o};e&&(t.force=!0),this._tokenCallbackPromise=new Promise(((e,t)=>{window[o]=(s,n)=>s?e(n):t(n)})),await Promise.resolve(),window.externalApp?window.externalApp.getExternalAuth(JSON.stringify(t)):window.webkit.messageHandlers.getExternalAuth.postMessage(t);const s=await this._tokenCallbackPromise;this.data.access_token=s.access_token,this.data.expires=1e3*s.expires_in+Date.now(),this._tokenCallbackPromise=void 0}async revoke(){const e={callback:l},t=new Promise(((e,t)=>{window[l]=(s,n)=>s?e(n):t(n)}));await Promise.resolve(),window.externalApp?window.externalApp.revokeExternalAuth(JSON.stringify(e)):window.webkit.messageHandlers.revokeExternalAuth.postMessage(e),await t}}const w=e=>{const t=new c(e);return(window.externalApp&&window.externalApp.externalBus||window.webkit&&window.webkit.messageHandlers.externalBus)&&(t.external=new i,t.external.attach()),t}}}]);
//# sourceMappingURL=chunk.9f0ca92ab4a1ab89c184.js.map