export const id=29055;export const ids=[29055];export const modules={55642:(e,a,t)=>{t.d(a,{h:()=>n});var i=t(68144),r=t(57835);const n=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==r.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[a,t]){return this._element&&this._element.localName===a?(t&&Object.entries(t).forEach((([e,a])=>{this._element[e]=a})),i.Jb):this.render(a,t)}render(e,a){return this._element=document.createElement(e),a&&Object.entries(a).forEach((([e,a])=>{this._element[e]=a})),this._element}})},36741:(e,a,t)=>{t.r(a),t.d(a,{HuiAreaCardEditor:()=>u});var i=t(17463),r=t(68144),n=t(79932),o=t(14516),c=t(38768),s=t(47181),l=(t(68331),t(95795)),h=t(98346);const d=(0,c.f0)(h.I,(0,c.Ry)({area:(0,c.jt)((0,c.Z_)()),navigation_path:(0,c.jt)((0,c.Z_)()),theme:(0,c.jt)((0,c.Z_)()),show_camera:(0,c.jt)((0,c.O7)()),camera_view:(0,c.jt)((0,c.Z_)()),aspect_ratio:(0,c.jt)((0,c.Z_)())}));let u=(0,i.Z)([(0,n.Mo)("hui-area-card-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",key:"_schema",value:()=>(0,o.Z)((e=>[{name:"area",selector:{area:{}}},{name:"show_camera",required:!1,selector:{boolean:{}}},...e?[{name:"camera_view",selector:{select:{options:["auto","live"]}}}]:[],{name:"",type:"grid",schema:[{name:"navigation_path",required:!1,selector:{navigation:{}}},{name:"theme",required:!1,selector:{theme:{}}},{name:"aspect_ratio",default:l.DEFAULT_ASPECT_RATIO,selector:{text:{}}}]}]))},{kind:"method",key:"setConfig",value:function(e){(0,c.hu)(e,d),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r.Ld;const e=this._schema(this._config.show_camera||!1),a={camera_view:"auto",...this._config};return r.dy` <ha-form .hass="${this.hass}" .data="${a}" .schema="${e}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const a=e.detail.value;a.show_camera||delete a.camera_view,(0,s.B)(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;case"area":return this.hass.localize("ui.panel.lovelace.editor.card.area.name");case"navigation_path":return this.hass.localize("ui.panel.lovelace.editor.action-editor.navigation_path");case"aspect_ratio":return this.hass.localize("ui.panel.lovelace.editor.card.generic.aspect_ratio");case"camera_view":return this.hass.localize("ui.panel.lovelace.editor.card.generic.camera_view")}return this.hass.localize(`ui.panel.lovelace.editor.card.area.${e.name}`)}}}]}}),r.oi)},98346:(e,a,t)=>{t.d(a,{I:()=>r});var i=t(38768);const r=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)()})}};
//# sourceMappingURL=29055.gFvjz-6tFNM.js.map