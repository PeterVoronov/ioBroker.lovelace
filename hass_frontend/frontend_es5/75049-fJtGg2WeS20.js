"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[75049],{34821:function(e,i,t){t.d(i,{i:function(){return b}});var o,a,n,l=t(33368),d=t(71650),r=t(82390),s=t(69205),c=t(70906),h=t(91808),u=t(34541),m=t(47838),g=t(88962),v=t(87762),p=t(91632),f=t(68144),_=t(79932),k=t(74265),x=(t(10983),["button","ha-list-item"]),b=function(e,i){var t;return(0,f.dy)(o||(o=(0,g.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),i,null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,h.Z)([(0,_.Mo)("ha-dialog")],(function(e,i){var t=function(i){(0,s.Z)(o,i);var t=(0,c.Z)(o);function o(){var i;(0,d.Z)(this,o);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return i=t.call.apply(t,[this].concat(n)),e((0,r.Z)(i)),i}return(0,l.Z)(o)}(i);return{F:t,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(a||(a=(0,g.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)((0,m.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,u.Z)((0,m.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,x].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)((0,m.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[p.W,(0,f.iv)(n||(n=(0,g.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),v.M)},75049:function(e,i,t){t.r(i);var o,a,n,l,d,r=t(88962),s=t(33368),c=t(71650),h=t(82390),u=t(69205),m=t(70906),g=t(91808),v=(t(53918),t(44577),t(68144)),p=t(79932),f=t(47181),_=t(32594),k=t(34821),x=(t(86630),t(3555),t(93748)),b=t(44547),y=t(11654),w=t(27322);(0,g.Z)([(0,p.Mo)("ha-dialog-automation-mode")],(function(e,i){var t=function(i){(0,u.Z)(o,i);var t=(0,m.Z)(o);function o(){var i;(0,c.Z)(this,o);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return i=t.call.apply(t,[this].concat(n)),e((0,h.Z)(i)),i}return(0,s.Z)(o)}(i);return{F:t,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",key:"_params",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_newMode",value:function(){return x.B$}},{kind:"field",decorators:[(0,p.SB)()],key:"_newMax",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._opened=!0,this._params=e,this._newMode=e.config.mode||x.B$,this._newMax=(0,b.vA)(this._newMode)?e.config.max||x.Yc:void 0}},{kind:"method",key:"closeDialog",value:function(){this._params.onClose(),this._opened&&(0,f.B)(this,"dialog-closed",{dialog:this.localName}),this._opened=!1}},{kind:"method",key:"render",value:function(){var e,i,t=this;return this._opened?(0,v.dy)(o||(o=(0,r.Z)([' <ha-dialog open scrimClickAction @closed="','" .heading="','"> <ha-select .label="','" .value="','" @selected="','" @closed="','" fixedMenuPosition .helper="','"> '," </ha-select> ",' <mwc-button @click="','" slot="secondaryAction"> ',' </mwc-button> <mwc-button @click="','" slot="primaryAction"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,k.i)(this.hass,this.hass.localize("ui.panel.config.automation.editor.change_mode")),this.hass.localize("ui.panel.config.automation.editor.modes.label"),this._newMode,this._modeChanged,_.U,(0,v.dy)(a||(a=(0,r.Z)([' <a style="color:var(--secondary-text-color)" href="','" target="_blank" rel="noreferrer">',"</a> "])),(0,w.R)(this.hass,"/docs/automation/modes/"),this.hass.localize("ui.panel.config.automation.editor.modes.learn_more")),b.EH.map((function(e){return(0,v.dy)(n||(n=(0,r.Z)([' <mwc-list-item .value="','"> '," </mwc-list-item> "])),e,t.hass.localize("ui.panel.config.automation.editor.modes.".concat(e))||e)})),(0,b.vA)(this._newMode)?(0,v.dy)(l||(l=(0,r.Z)([' <br><ha-textfield .label="','" type="number" name="max" .value="','" @change="','" class="max"> </ha-textfield> '])),this.hass.localize("ui.panel.config.automation.editor.max.".concat(this._newMode)),null!==(e=null===(i=this._newMax)||void 0===i?void 0:i.toString())&&void 0!==e?e:"",this._valueChanged):v.Ld,this.closeDialog,this.hass.localize("ui.dialogs.generic.cancel"),this._save,this.hass.localize("ui.panel.config.automation.editor.change_mode")):v.Ld}},{kind:"method",key:"_modeChanged",value:function(e){var i=e.target.value;this._newMode=i,(0,b.vA)(i)?this._newMax||(this._newMax=x.Yc):this._newMax=void 0}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var i=e.target;"max"===i.name&&(this._newMax=Number(i.value))}},{kind:"method",key:"_save",value:function(){this._params.updateAutomation(Object.assign(Object.assign({},this._params.config),{},{mode:this._newMode,max:this._newMax})),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[y.Qx,y.yu,(0,v.iv)(d||(d=(0,r.Z)(["ha-select,ha-textfield{display:block}"])))]}}]}}),v.oi)}}]);
//# sourceMappingURL=75049-fJtGg2WeS20.js.map