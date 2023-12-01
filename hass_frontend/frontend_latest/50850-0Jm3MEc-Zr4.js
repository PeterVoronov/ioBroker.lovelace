export const id=50850;export const ids=[50850];export const modules={19267:(i,t,e)=>{var a=e(17463),s=e(34541),o=e(47838),n=e(68144),r=e(79932),l=e(47181),c=(e(13266),e(22098),e(31206),e(65189),e(25727),e(14089),e(86490)),d=e(11654);e(88165);(0,a.Z)([(0,r.Mo)("blueprint-script-editor")],(function(i,t){class e extends t{constructor(...t){super(...t),i(this)}}return{F:e,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,r.Cb)({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_blueprints",value:void 0},{kind:"method",key:"firstUpdated",value:function(i){(0,s.Z)((0,o.Z)(e.prototype),"firstUpdated",this).call(this,i),this._getBlueprints()}},{kind:"get",key:"_blueprint",value:function(){if(this._blueprints)return this._blueprints[this.config.use_blueprint.path]}},{kind:"method",key:"render",value:function(){var i;const t=this._blueprint;return n.dy` ${this.disabled?n.dy`<ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.script.editor.read_only")} <mwc-button slot="action" @click="${this._duplicate}"> ${this.hass.localize("ui.panel.config.script.editor.migrate")} </mwc-button> </ha-alert>`:""} <ha-card outlined class="blueprint" .header="${this.hass.localize("ui.panel.config.automation.editor.blueprint.header")}"> <div class="blueprint-picker-container"> ${this._blueprints?Object.keys(this._blueprints).length?n.dy` <ha-blueprint-picker .hass="${this.hass}" .label="${this.hass.localize("ui.panel.config.automation.editor.blueprint.blueprint_to_use")}" .blueprints="${this._blueprints}" .value="${this.config.use_blueprint.path}" .disabled="${this.disabled}" @value-changed="${this._blueprintChanged}"></ha-blueprint-picker> `:this.hass.localize("ui.panel.config.automation.editor.blueprint.no_blueprints"):n.dy`<ha-circular-progress active></ha-circular-progress>`} </div> ${this.config.use_blueprint.path?t&&"error"in t?n.dy`<p class="warning padding"> There is an error in this Blueprint: ${t.error} </p>`:n.dy`${null!=t&&t.metadata.description?n.dy`<ha-markdown class="card-content" breaks .content="${t.metadata.description}"></ha-markdown>`:""} ${null!=t&&null!==(i=t.metadata)&&void 0!==i&&i.input&&Object.keys(t.metadata.input).length?Object.entries(t.metadata.input).map((([i,t])=>{var e;return n.dy`<ha-settings-row .narrow="${this.narrow}"> <span slot="heading">${(null==t?void 0:t.name)||i}</span> <ha-markdown slot="description" class="card-content" breaks .content="${null==t?void 0:t.description}"></ha-markdown> ${n.dy`<ha-selector .hass="${this.hass}" .selector="${null!==(e=null==t?void 0:t.selector)&&void 0!==e?e:{text:void 0}}" .key="${i}" .disabled="${this.disabled}" .required="${void 0===(null==t?void 0:t.default)}" .placeholder="${null==t?void 0:t.default}" .value="${this.config.use_blueprint.input&&i in this.config.use_blueprint.input?this.config.use_blueprint.input[i]:null==t?void 0:t.default}" @value-changed="${this._inputChanged}"></ha-selector>`} </ha-settings-row>`})):n.dy`<p class="padding"> ${this.hass.localize("ui.panel.config.automation.editor.blueprint.no_inputs")} </p>`}`:""} </ha-card> `}},{kind:"method",key:"_getBlueprints",value:async function(){this._blueprints=await(0,c.wc)(this.hass,"script")}},{kind:"method",key:"_blueprintChanged",value:function(i){i.stopPropagation(),this.config.use_blueprint.path!==i.detail.value&&(0,l.B)(this,"value-changed",{value:{...this.config,use_blueprint:{path:i.detail.value}}})}},{kind:"method",key:"_inputChanged",value:function(i){i.stopPropagation();const t=i.target,e=t.key,a=i.detail?i.detail.value:t.value;if(this.config.use_blueprint.input&&this.config.use_blueprint.input[e]===a||!this.config.use_blueprint.input&&""===a)return;const s={...this.config.use_blueprint.input,[e]:a};(0,l.B)(this,"value-changed",{value:{...this.config,use_blueprint:{...this.config.use_blueprint,input:s}}})}},{kind:"method",key:"_duplicate",value:function(){(0,l.B)(this,"duplicate")}},{kind:"get",static:!0,key:"styles",value:function(){return[d.Qx,n.iv`:host{display:block}ha-card.blueprint{margin:0 auto}.padding{padding:16px}.link-button-row{padding:14px}.blueprint-picker-container{padding:0 16px 16px}ha-blueprint-picker,ha-textfield{display:block}h3{margin:16px}.introduction{margin-top:0;margin-bottom:12px}.introduction a{color:var(--primary-color)}p{margin-bottom:0}.description{margin-bottom:16px}ha-settings-row{--paper-time-input-justify-content:flex-end;--settings-row-content-width:100%;--settings-row-prefix-display:contents;border-top:1px solid var(--divider-color)}ha-alert{margin-bottom:16px;display:block}`]}}]}}),n.oi)},50850:(i,t,e)=>{e.a(i,(async(i,a)=>{try{e.r(t);var s=e(17463),o=e(34541),n=e(47838),r=e(22264),l=e(79932),c=e(14516),d=e(22311),h=e(38346),u=e(96339),p=e(18199),f=e(67826),m=e(25931),y=i([f,m]);[f,m]=y.then?(await y)():y;const _=(i,t)=>i.length===t.length&&i.every(((i,e)=>i===t[e]));(0,s.Z)([(0,l.Mo)("ha-config-script")],(function(i,t){class a extends t{constructor(...t){super(...t),i(this)}}return{F:a,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"showAdvanced",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"scripts",value:()=>[]},{kind:"field",decorators:[(0,l.SB)(),(0,r.F)({context:u.we,subscribe:!0})],key:"_entityReg",value:void 0},{kind:"field",key:"routerOptions",value:()=>({defaultPage:"dashboard",routes:{dashboard:{tag:"ha-script-picker",cache:!0},edit:{tag:"ha-script-editor"},show:{tag:"ha-script-editor"},trace:{tag:"ha-script-trace",load:()=>Promise.all([e.e(99528),e.e(12740),e.e(67876)]).then(e.bind(e,67876))}}})},{kind:"field",key:"_debouncedUpdateScripts",value(){return(0,h.D)((i=>{const t=this._getScripts(this.hass.states);_(t,i.scripts)||(i.scripts=t)}),10)}},{kind:"field",key:"_getScripts",value:()=>(0,c.Z)((i=>Object.values(i).filter((i=>"script"===(0,d.N)(i)&&!i.attributes.restored))))},{kind:"method",key:"firstUpdated",value:function(i){(0,o.Z)((0,n.Z)(a.prototype),"firstUpdated",this).call(this,i),this.hass.loadBackendTranslation("device_automation")}},{kind:"method",key:"updatePageEl",value:function(i,t){if(i.hass=this.hass,i.narrow=this.narrow,i.isWide=this.isWide,i.route=this.routeTail,i.showAdvanced=this.showAdvanced,i.entityRegistry=this._entityReg,this.hass&&(i.scripts&&t?t.has("hass")&&this._debouncedUpdateScripts(i):i.scripts=this._getScripts(this.hass.states)),t&&!t.has("route")||"show"!==this._currentPage){if((!t||t.has("route"))&&"dashboard"!==this._currentPage){i.creatingNew=void 0;const t=this.routeTail.path.substr(1);i.scriptId="new"===t?null:t}}else{i.creatingNew=void 0;const t=this.routeTail.path.substr(1);i.entityId="new"===t?null:t}}}]}}),p.n);a()}catch(i){a(i)}}))},67826:(i,t,e)=>{e.a(i,(async(i,t)=>{try{var a=e(17463),s=e(34541),o=e(47838),n=(e(44577),e(68144)),r=e(79932),l=e(83448),c=e(14516),d=e(47181),h=e(83849),u=e(83447),p=e(87744),f=e(50577),m=e(96151),y=(e(81545),e(22098),e(36125),e(10983),e(52039),e(18900),e(44547)),_=e(26765),g=(e(60010),e(23670)),v=e(11654),k=e(27322),b=e(81796),$=(e(19267),e(84407)),w=e(56007),C=e(34838),A=i([$]);$=(A.then?(await A)():A)[0];const x="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",z="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z",I="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z",V="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",H="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",M="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",B="M8,5.14V19.14L19,12.14L8,5.14Z",Z="M15,12C15,10.7 14.16,9.6 13,9.18V6.82C14.16,6.4 15,5.3 15,4A3,3 0 0,0 12,1A3,3 0 0,0 9,4C9,5.3 9.84,6.4 11,6.82V9.19C9.84,9.6 9,10.7 9,12C9,13.3 9.84,14.4 11,14.82V17.18C9.84,17.6 9,18.7 9,20A3,3 0 0,0 12,23A3,3 0 0,0 15,20C15,18.7 14.16,17.6 13,17.18V14.82C14.16,14.4 15,13.3 15,12M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M12,21A1,1 0 0,1 11,20A1,1 0 0,1 12,19A1,1 0 0,1 13,20A1,1 0 0,1 12,21Z";let S=(0,a.Z)(null,(function(i,t){class e extends t{constructor(...t){super(...t),i(this)}}return{F:e,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"scriptId",value:()=>null},{kind:"field",decorators:[(0,r.Cb)()],key:"entityId",value:()=>null},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"entityRegistry",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_idError",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_dirty",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_errors",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_mode",value:()=>"gui"},{kind:"field",decorators:[(0,r.SB)()],key:"_readOnly",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_validationErrors",value:void 0},{kind:"field",key:"_schema",value(){return(0,c.Z)(((i,t,e)=>[{name:"alias",selector:{text:{type:"text"}}},{name:"icon",selector:{icon:{}}},...i?[]:[{name:"id",selector:{text:{prefix:"script."}}}],...t?[]:[{name:"mode",selector:{select:{mode:"dropdown",options:y.EH.map((i=>({label:this.hass.localize(`ui.panel.config.script.editor.modes.${i}`),value:i})))}}}],...e&&(0,y.vA)(e)?[{name:"max",required:!0,selector:{number:{mode:"box",min:1,max:1/0}}}]:[]]))}},{kind:"method",key:"render",value:function(){var i;if(!this._config)return n.Ld;const t=this._entityId?this.hass.states[this._entityId]:void 0,e="use_blueprint"in this._config,a=this._schema(!!this.scriptId,e,this._config.mode),s={...!this._config.mode&&!e&&{mode:y.EH[0]},icon:void 0,max:this._config.mode&&(0,y.vA)(this._config.mode)?10:void 0,...this._config,id:this._entityId};return n.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" .backCallback="${this._backTapped}" .header="${null!==(i=this._config)&&void 0!==i&&i.alias?this._config.alias:""}"> ${this.scriptId&&!this.narrow?n.dy` <mwc-button @click="${this._showTrace}" slot="toolbar-icon"> ${this.hass.localize("ui.panel.config.script.editor.show_trace")} </mwc-button> `:""} <ha-button-menu slot="toolbar-icon"> <ha-icon-button slot="trigger" .label="${this.hass.localize("ui.common.menu")}" .path="${H}"></ha-icon-button> <mwc-list-item graphic="icon" .disabled="${!this.scriptId}" @click="${this._showInfo}"> ${this.hass.localize("ui.panel.config.script.editor.show_info")} <ha-svg-icon slot="graphic" .path="${M}"></ha-svg-icon> </mwc-list-item> <mwc-list-item graphic="icon" .disabled="${!this.scriptId}" @click="${this._runScript}"> ${this.hass.localize("ui.panel.config.script.picker.run_script")} <ha-svg-icon slot="graphic" .path="${B}"></ha-svg-icon> </mwc-list-item> ${this.scriptId&&this.narrow?n.dy` <a href="/config/script/trace/${this.scriptId}"> <mwc-list-item graphic="icon"> ${this.hass.localize("ui.panel.config.script.editor.show_trace")} <ha-svg-icon slot="graphic" .path="${Z}"></ha-svg-icon> </mwc-list-item> </a> `:""} <li divider role="separator"></li> <mwc-list-item graphic="icon" @click="${this._switchUiMode}"> ${this.hass.localize("ui.panel.config.automation.editor.edit_ui")} ${"gui"===this._mode?n.dy` <ha-svg-icon class="selected_menu_item" slot="graphic" .path="${x}"></ha-svg-icon> `:""} </mwc-list-item> <mwc-list-item graphic="icon" @click="${this._switchYamlMode}"> ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")} ${"yaml"===this._mode?n.dy` <ha-svg-icon class="selected_menu_item" slot="graphic" .path="${x}"></ha-svg-icon> `:""} </mwc-list-item> <li divider role="separator"></li> <mwc-list-item .disabled="${!this._readOnly&&!this.scriptId}" graphic="icon" @click="${this._duplicate}"> ${this.hass.localize(this._readOnly?"ui.panel.config.script.editor.migrate":"ui.panel.config.script.editor.duplicate")} <ha-svg-icon slot="graphic" .path="${z}"></ha-svg-icon> </mwc-list-item> <mwc-list-item .disabled="${this._readOnly||!this.scriptId}" class="${(0,l.$)({warning:Boolean(this.scriptId)})}" graphic="icon" @click="${this._deleteConfirm}"> ${this.hass.localize("ui.panel.config.script.picker.delete")} <ha-svg-icon class="${(0,l.$)({warning:Boolean(this.scriptId)})}" slot="graphic" .path="${V}"> </ha-svg-icon> </mwc-list-item> </ha-button-menu> <div class="content ${(0,l.$)({"yaml-mode":"yaml"===this._mode})}"> ${this._errors||(null==t?void 0:t.state)===w.nZ?n.dy` <ha-alert alert-type="error" .title="${(null==t?void 0:t.state)===w.nZ?this.hass.localize("ui.panel.config.script.editor.unavailable"):void 0}"> ${this._errors||this._validationErrors} </ha-alert> `:""} ${this._readOnly?n.dy`<ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.script.editor.read_only")} <mwc-button slot="action" @click="${this._duplicate}"> ${this.hass.localize("ui.panel.config.script.editor.migrate")} </mwc-button> </ha-alert>`:""} ${"gui"===this._mode?n.dy` <div class="${(0,l.$)({rtl:(0,p.HE)(this.hass)})}"> ${this._config?n.dy` <div class="config-container"> <ha-card outlined> <div class="card-content"> <ha-form .schema="${a}" .data="${s}" .hass="${this.hass}" .disabled="${this._readOnly}" .computeLabel="${this._computeLabelCallback}" .computeHelper="${this._computeHelperCallback}" @value-changed="${this._valueChanged}"></ha-form> </div> </ha-card> </div> ${e?n.dy` <blueprint-script-editor .hass="${this.hass}" .narrow="${this.narrow}" .isWide="${this.isWide}" .config="${this._config}" .disabled="${this._readOnly}" @duplicate="${this._duplicate}" @value-changed="${this._configChanged}"></blueprint-script-editor> `:n.dy` <manual-script-editor .hass="${this.hass}" .narrow="${this.narrow}" .isWide="${this.isWide}" .config="${this._config}" .disabled="${this._readOnly}" @duplicate="${this._duplicate}" @value-changed="${this._configChanged}"></manual-script-editor> `} `:""} </div> `:"yaml"===this._mode?n.dy` <ha-yaml-editor .hass="${this.hass}" .defaultValue="${this._preprocessYaml()}" .readOnly="${this._readOnly}" @value-changed="${this._yamlChanged}"></ha-yaml-editor> <ha-card outlined> <div class="card-actions"> <mwc-button @click="${this._copyYaml}"> ${this.hass.localize("ui.panel.config.automation.editor.copy_to_clipboard")} </mwc-button> </div> </ha-card> `:""} </div> <ha-fab slot="fab" .label="${this.hass.localize("ui.panel.config.script.editor.save_script")}" extended @click="${this._saveScript}" class="${(0,l.$)({dirty:this._dirty})}"> <ha-svg-icon slot="icon" .path="${I}"></ha-svg-icon> </ha-fab> </hass-subpage> `}},{kind:"method",key:"updated",value:function(i){(0,s.Z)((0,o.Z)(e.prototype),"updated",this).call(this,i);const t=i.get("scriptId");if(!i.has("scriptId")||!this.scriptId||this.entityId||!this.hass||t&&t===this.scriptId||(0,y.oE)(this.hass,this.scriptId).then((i=>{this._dirty=!1,this._readOnly=!1,this._config=this._normalizeConfig(i);const t=this.entityRegistry.find((i=>"script"===i.platform&&i.unique_id===this.scriptId));this._entityId=null==t?void 0:t.entity_id,this._checkValidation()}),(i=>{const t=this.entityRegistry.find((i=>"script"===i.platform&&i.unique_id===this.scriptId));t?(0,h.c)(`/config/script/show/${t.entity_id}`,{replace:!0}):(alert(404===i.status_code?this.hass.localize("ui.panel.config.script.editor.load_error_not_editable"):this.hass.localize("ui.panel.config.script.editor.load_error_unknown","err_no",i.status_code||i.code)),history.back())})),i.has("scriptId")&&!this.scriptId&&this.hass){const i=(0,y.FI)();this._dirty=!!i;const t={alias:this.hass.localize("ui.panel.config.script.editor.default_name")};i&&"use_blueprint"in i||(t.sequence=[]),this._config={...t,...i},this._readOnly=!1}if(i.has("entityId")&&this.entityId){(0,y.eM)(this.hass,this.entityId).then((i=>{this._config=this._normalizeConfig(i.config),this._checkValidation()}));const i=this.entityRegistry.find((i=>i.entity_id===this.entityId));null!=i&&i.unique_id&&(this.scriptId=i.unique_id),this._entityId=this.entityId,this._dirty=!1,this._readOnly=!0}}},{kind:"method",key:"_normalizeConfig",value:function(i){const t=i.sequence;return t&&!Array.isArray(t)&&(i.sequence=[t]),i}},{kind:"method",key:"_checkValidation",value:async function(){if(this._validationErrors=void 0,!this._entityId||!this._config)return;const i=this.hass.states[this._entityId];if((null==i?void 0:i.state)!==w.nZ)return;const t=await(0,C.w)(this.hass,{action:this._config.sequence});this._validationErrors=Object.entries(t).map((([i,t])=>t.valid?"":n.dy`${this.hass.localize(`ui.panel.config.automation.editor.${i}s.header`)}: ${t.error}<br>`))}},{kind:"field",key:"_computeLabelCallback",value(){return(i,t)=>{switch(i.name){case"mode":return this.hass.localize("ui.panel.config.script.editor.modes.label");case"max":return this.hass.localize(`ui.panel.config.script.editor.max.${t.mode}`);default:return this.hass.localize(`ui.panel.config.script.editor.${i.name}`)}}}},{kind:"field",key:"_computeHelperCallback",value(){return i=>{if("mode"===i.name)return n.dy` <a style="color:var(--secondary-text-color)" href="${(0,k.R)(this.hass,"/integrations/script/#script-modes")}" target="_blank" rel="noreferrer">${this.hass.localize("ui.panel.config.script.editor.modes.learn_more")}</a> `}}},{kind:"method",key:"_showInfo",value:async function(){if(!this.scriptId)return;const i=this.entityRegistry.find((i=>i.unique_id===this.scriptId));i&&(0,d.B)(this,"hass-more-info",{entityId:i.entity_id})}},{kind:"method",key:"_showTrace",value:async function(){if(this.scriptId){await this.confirmUnsavedChanged()&&(0,h.c)(`/config/script/trace/${this.scriptId}`)}}},{kind:"method",key:"_runScript",value:async function(i){i.stopPropagation(),await(0,y.kC)(this.hass,this.scriptId),(0,b.C)(this,{message:this.hass.localize("ui.notification_toast.triggered","name",this._config.alias)})}},{kind:"method",key:"_computeEntityIdFromAlias",value:function(i){const t=(0,u.l)(i);let e=t,a=2;for(;this.hass.states[`script.${e}`];)e=`${t}_${a}`,a++;return e}},{kind:"method",key:"_setEntityId",value:function(i){this._entityId=i,this.hass.states[`script.${this._entityId}`]?this._idError=!0:this._idError=!1}},{kind:"method",key:"updateEntityId",value:function(i,t){var e,a,s;const o=null!==(e=null===(a=this._config)||void 0===a?void 0:a.alias)&&void 0!==e?e:"",n=null!==(s=this._entityId)&&void 0!==s?s:"";if(i!==this._entityId)return void this._setEntityId(i||void 0);if(this._computeEntityIdFromAlias(o)===n||!this._entityId){const i=t?this._computeEntityIdFromAlias(t):void 0;this._setEntityId(i)}}},{kind:"method",key:"_valueChanged",value:function(i){var t;if(i.stopPropagation(),this._readOnly)return;this._errors=void 0;const e=i.detail.value;let a=!1;const s={alias:null!==(t=e.alias)&&void 0!==t?t:"",icon:e.icon,mode:e.mode,max:(0,y.vA)(e.mode)?e.max:void 0};this.scriptId||this.updateEntityId(e.id,e.alias);for(const i of Object.keys(s)){const t=s[i];if(t!==this._config[i]){if(void 0===t){const t={...this._config};delete t[i],this._config=t}else this._config={...this._config,[i]:t};a=!0}}a&&(this._dirty=!0)}},{kind:"method",key:"_configChanged",value:function(i){this._config=i.detail.value,this._errors=void 0,this._dirty=!0}},{kind:"method",key:"_preprocessYaml",value:function(){return this._config}},{kind:"method",key:"_copyYaml",value:async function(){var i;null!==(i=this._yamlEditor)&&void 0!==i&&i.yaml&&(await(0,f.v)(this._yamlEditor.yaml),(0,b.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"method",key:"_yamlChanged",value:function(i){i.stopPropagation(),i.detail.isValid&&(this._config=i.detail.value,this._errors=void 0,this._dirty=!0)}},{kind:"method",key:"confirmUnsavedChanged",value:async function(){return!this._dirty||(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm_title"),text:this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm_text"),confirmText:this.hass.localize("ui.common.leave"),dismissText:this.hass.localize("ui.common.stay"),destructive:!0})}},{kind:"field",key:"_backTapped",value(){return async()=>{await this.confirmUnsavedChanged()&&(0,m.T)((()=>history.back()))}}},{kind:"method",key:"_duplicate",value:async function(){var i,t;(this._readOnly?await(0,_.g7)(this,{title:"Migrate script?",text:"You can migrate this script, so it can be edited from the UI. After it is migrated and you have saved it, you will have to manually delete your old script from your configuration. Do you want to migrate this script?"}):await this.confirmUnsavedChanged())&&(this._entityId=void 0,(0,y.rg)({...this._config,alias:this._readOnly?null===(i=this._config)||void 0===i?void 0:i.alias:`${null===(t=this._config)||void 0===t?void 0:t.alias} (${this.hass.localize("ui.panel.config.script.picker.duplicate")})`}))}},{kind:"method",key:"_deleteConfirm",value:async function(){var i;(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.script.editor.delete_confirm_title"),text:this.hass.localize("ui.panel.config.script.editor.delete_confirm_text",{name:null===(i=this._config)||void 0===i?void 0:i.alias}),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._delete(),destructive:!0})}},{kind:"method",key:"_delete",value:async function(){await(0,y.oR)(this.hass,this.scriptId),history.back()}},{kind:"method",key:"_switchUiMode",value:function(){this._mode="gui"}},{kind:"method",key:"_switchYamlMode",value:function(){this._mode="yaml"}},{kind:"method",key:"_saveScript",value:async function(){if(this._idError)return void(0,b.C)(this,{message:this.hass.localize("ui.panel.config.script.editor.id_already_exists_save_error"),dismissable:!1,duration:0,action:{action:()=>{},text:this.hass.localize("ui.dialogs.generic.ok")}});const i=this.scriptId||this._entityId||Date.now();try{await this.hass.callApi("POST","config/script/config/"+i,this._config)}catch(i){throw this._errors=i.body.message||i.error||i.body,(0,b.C)(this,{message:i.body.message||i.error||i.body}),i}this._dirty=!1,this.scriptId||(0,h.c)(`/config/script/edit/${i}`,{replace:!0})}},{kind:"method",key:"handleKeyboardSave",value:function(){this._saveScript()}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,n.iv`ha-card{overflow:hidden}p{margin-bottom:0}.errors{padding:20px;font-weight:700;color:var(--error-color)}.yaml-mode{height:100%;display:flex;flex-direction:column;padding-bottom:0}.config-container,blueprint-script-editor,manual-script-editor{margin:0 auto;max-width:1040px;padding:28px 20px 0}.config-container ha-alert{margin-bottom:16px;display:block}ha-yaml-editor{flex-grow:1;--code-mirror-height:100%;min-height:0}.yaml-mode ha-card{overflow:initial;--ha-card-border-radius:0;border-bottom:1px solid var(--divider-color)}span[slot=introduction] a{color:var(--primary-color)}ha-fab{position:relative;bottom:calc(-80px - env(safe-area-inset-bottom));transition:bottom .3s}ha-fab.dirty{bottom:0}.selected_menu_item{color:var(--primary-color)}li[role=separator]{border-bottom-color:var(--divider-color)}.header{display:flex;margin:16px 0;align-items:center}.header .name{font-size:20px;font-weight:400;flex:1}.header a{color:var(--secondary-text-color)}ha-button-menu a{text-decoration:none;color:var(--primary-color)}`]}}]}}),(0,g.U)(n.oi));customElements.define("ha-script-editor",S),t()}catch(i){t(i)}}))},25931:(i,t,e)=>{e.a(i,(async(i,t)=>{try{var a=e(17463),s=e(68144),o=e(79932),n=e(14516),r=e(24112),l=e(47501),c=e(7323),d=e(44583),h=e(5435),u=e(47181),p=e(91741),f=e(83849),m=e(87744),y=(e(67556),e(36125),e(10983),e(48429),e(52039),e(44547)),_=e(26765),g=(e(96551),e(11654)),v=e(27322),k=e(81796),b=e(29311),$=e(87515),w=e(94449),C=e(86490),A=e(56007),x=i([d,h]);[d,h]=x.then?(await x)():x;const z="M11,17H4A2,2 0 0,1 2,15V3A2,2 0 0,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7A2,2 0 0,1 8,5H19A2,2 0 0,1 21,7V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19Z",I="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",V="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",H="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",M="M8,5.14V19.14L19,12.14L8,5.14Z",B="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Z="M15,12C15,10.7 14.16,9.6 13,9.18V6.82C14.16,6.4 15,5.3 15,4A3,3 0 0,0 12,1A3,3 0 0,0 9,4C9,5.3 9.84,6.4 11,6.82V9.19C9.84,9.6 9,10.7 9,12C9,13.3 9.84,14.4 11,14.82V17.18C9.84,17.6 9,18.7 9,20A3,3 0 0,0 12,23A3,3 0 0,0 15,20C15,18.7 14.16,17.6 13,17.18V14.82C14.16,14.4 15,13.3 15,12M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M12,21A1,1 0 0,1 11,20A1,1 0 0,1 12,19A1,1 0 0,1 13,20A1,1 0 0,1 12,21Z";(0,a.Z)([(0,o.Mo)("ha-script-picker")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"scripts",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"entityRegistry",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_searchParms",value:()=>new URLSearchParams(window.location.search)},{kind:"field",decorators:[(0,o.SB)()],key:"_activeFilters",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_filteredScripts",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_filterValue",value:void 0},{kind:"field",key:"_scripts",value:()=>(0,n.Z)(((i,t)=>null===t?[]:(t?i.filter((i=>t.includes(i.entity_id))):i).map((i=>({...i,name:(0,p.C)(i),last_triggered:i.attributes.last_triggered||void 0})))))},{kind:"field",key:"_columns",value(){return(0,n.Z)(((i,t)=>{const e={icon:{title:"",label:this.hass.localize("ui.panel.config.script.picker.headers.state"),type:"icon",template:(i,t)=>s.dy`<ha-state-icon .state="${t}" style="${(0,l.V)({color:t.state===A.nZ?"var(--error-color)":"unset"})}"></ha-state-icon>`},name:{title:this.hass.localize("ui.panel.config.script.picker.headers.name"),main:!0,sortable:!0,filterable:!0,direction:"asc",grows:!0,template:i?(i,t)=>{const e=new Date(t.attributes.last_triggered),a=new Date,o=(0,r.Z)(a,e);return s.dy` ${i} <div class="secondary"> ${this.hass.localize("ui.card.automation.last_triggered")}: ${t.attributes.last_triggered?o>3?(0,d.yD)(e,this.hass.locale,this.hass.config):(0,h.G)(e,this.hass.locale):this.hass.localize("ui.components.relative_time.never")} </div> `}:void 0}};return i||(e.last_triggered={sortable:!0,width:"40%",title:this.hass.localize("ui.card.automation.last_triggered"),template:i=>{const t=new Date(i),e=new Date,a=(0,r.Z)(e,t);return s.dy` ${i?a>3?(0,d.yD)(t,this.hass.locale,this.hass.config):(0,h.G)(t,this.hass.locale):this.hass.localize("ui.components.relative_time.never")} `}}),e.actions={title:"",width:this.narrow?void 0:"10%",type:"overflow-menu",template:(i,t)=>s.dy` <ha-icon-overflow-menu .hass="${this.hass}" narrow .items="${[{path:H,label:this.hass.localize("ui.panel.config.script.picker.show_info"),action:()=>this._showInfo(t)},{path:M,label:this.hass.localize("ui.panel.config.script.picker.run"),action:()=>this._runScript(t)},{path:Z,label:this.hass.localize("ui.panel.config.script.picker.show_trace"),action:()=>this._showTrace(t)},{divider:!0},{path:z,label:this.hass.localize("ui.panel.config.script.picker.duplicate"),action:()=>this._duplicate(t)},{label:this.hass.localize("ui.panel.config.script.picker.delete"),path:I,action:()=>this._deleteConfirm(t),warning:!0}]}"> </ha-icon-overflow-menu> `},e}))}},{kind:"method",key:"render",value:function(){return s.dy` <hass-tabs-subpage-data-table .hass="${this.hass}" .narrow="${this.narrow}" back-path="/config" .route="${this.route}" .tabs="${b.configSections.automations}" .columns="${this._columns(this.narrow,this.hass.locale)}" .data="${this._scripts(this.scripts,this._filteredScripts)}" .activeFilters="${this._activeFilters}" id="entity_id" .noDataText="${this.hass.localize("ui.panel.config.script.picker.no_scripts")}" @clear-filter="${this._clearFilter}" hasFab clickable @row-click="${this._handleRowClicked}"> <ha-icon-button slot="toolbar-icon" .label="${this.hass.localize("ui.common.help")}" .path="${V}" @click="${this._showHelp}"></ha-icon-button> <ha-button-related-filter-menu slot="filter-menu" .narrow="${this.narrow}" .hass="${this.hass}" .value="${this._filterValue}" exclude-domains='["script"]' @related-changed="${this._relatedFilterChanged}"> </ha-button-related-filter-menu> <ha-fab slot="fab" ?is-wide="${this.isWide}" ?narrow="${this.narrow}" .label="${this.hass.localize("ui.panel.config.script.picker.add_script")}" extended ?rtl="${(0,m.HE)(this.hass)}" @click="${this._createNew}"> <ha-svg-icon slot="icon" .path="${B}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> `}},{kind:"method",key:"firstUpdated",value:function(){this._searchParms.has("blueprint")&&this._filterBlueprint()}},{kind:"method",key:"_filterBlueprint",value:async function(){const i=this._searchParms.get("blueprint");if(!i)return;const[t,e]=await Promise.all([(0,w.K)(this.hass,"script_blueprint",i),(0,C.wc)(this.hass,"script")]);this._filteredScripts=t.script||[];const a=e[i];this._activeFilters=[this.hass.localize("ui.panel.config.script.picker.filtered_by_blueprint","name",!a||"error"in a?i:a.metadata.name||i)]}},{kind:"method",key:"_relatedFilterChanged",value:function(i){this._filterValue=i.detail.value,this._filterValue?(this._activeFilters=[i.detail.filter],this._filteredScripts=i.detail.items.script||null):this._clearFilter()}},{kind:"method",key:"_clearFilter",value:function(){this._filteredScripts=void 0,this._activeFilters=void 0,this._filterValue=void 0}},{kind:"method",key:"_handleRowClicked",value:function(i){const t=this.entityRegistry.find((t=>t.entity_id===i.detail.id));t?(0,f.c)(`/config/script/edit/${t.unique_id}`):(0,f.c)(`/config/script/show/${i.detail.id}`)}},{kind:"method",key:"_createNew",value:function(){(0,c.p)(this.hass,"blueprint")?(0,$.X)(this,{mode:"script"}):(0,f.c)("/config/script/edit/new")}},{kind:"field",key:"_runScript",value(){return async i=>{const t=this.entityRegistry.find((t=>t.entity_id===i.entity_id));t&&(await(0,y.kC)(this.hass,t.unique_id),(0,k.C)(this,{message:this.hass.localize("ui.notification_toast.triggered","name",(0,p.C)(i))}))}}},{kind:"method",key:"_showInfo",value:function(i){(0,u.B)(this,"hass-more-info",{entityId:i.entity_id})}},{kind:"method",key:"_showTrace",value:function(i){const t=this.entityRegistry.find((t=>t.entity_id===i.entity_id));t&&(0,f.c)(`/config/script/trace/${t.unique_id}`)}},{kind:"method",key:"_showHelp",value:function(){(0,_.Ys)(this,{title:this.hass.localize("ui.panel.config.script.caption"),text:s.dy` ${this.hass.localize("ui.panel.config.script.picker.introduction")} <p> <a href="${(0,v.R)(this.hass,"/docs/scripts/")}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.script.picker.learn_more")} </a> </p> `})}},{kind:"method",key:"_duplicate",value:async function(i){try{const t=this.entityRegistry.find((t=>t.entity_id===i.entity_id));if(!t)return;const e=await(0,y.oE)(this.hass,t.unique_id);(0,y.rg)({...e,alias:`${null==e?void 0:e.alias} (${this.hass.localize("ui.panel.config.script.picker.duplicate")})`})}catch(t){if(404===t.status_code){const t=await(0,y.eM)(this.hass,i.entity_id);return void(0,y.rg)(t.config)}await(0,_.Ys)(this,{text:this.hass.localize("ui.panel.config.script.editor.load_error_unknown","err_no",t.status_code)})}}},{kind:"method",key:"_deleteConfirm",value:async function(i){(0,_.g7)(this,{title:this.hass.localize("ui.panel.config.script.editor.delete_confirm_title"),text:this.hass.localize("ui.panel.config.script.editor.delete_confirm_text",{name:i.name}),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._delete(i),destructive:!0})}},{kind:"method",key:"_delete",value:async function(i){try{const t=this.entityRegistry.find((t=>t.entity_id===i.entity_id));t&&await(0,y.oR)(this.hass,t.unique_id)}catch(i){await(0,_.Ys)(this,{text:400===i.status_code?this.hass.localize("ui.panel.config.script.editor.load_error_not_deletable"):this.hass.localize("ui.panel.config.script.editor.load_error_unknown","err_no",i.status_code)})}}},{kind:"get",static:!0,key:"styles",value:function(){return[g.Qx,s.iv`a{text-decoration:none}`]}}]}}),s.oi);t()}catch(i){t(i)}}))},84407:(i,t,e)=>{e.a(i,(async(i,t)=>{try{var a=e(17463),s=(e(14271),e(68144)),o=e(79932),n=e(47181),r=(e(22098),e(10983),e(11654)),l=e(27322),c=e(61788),d=i([c]);c=(d.then?(await d)():d)[0];const h="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z";(0,a.Z)([(0,o.Mo)("manual-script-editor")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"method",key:"render",value:function(){return s.dy` ${this.disabled?s.dy`<ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.script.editor.read_only")} <mwc-button slot="action" @click="${this._duplicate}"> ${this.hass.localize("ui.panel.config.script.editor.migrate")} </mwc-button> </ha-alert>`:""} <div class="header"> <h2 id="sequence-heading" class="name"> ${this.hass.localize("ui.panel.config.script.editor.sequence")} </h2> <a href="${(0,l.R)(this.hass,"/docs/scripts/")}" target="_blank" rel="noreferrer"> <ha-icon-button .path="${h}" .label="${this.hass.localize("ui.panel.config.script.editor.link_available_actions")}"></ha-icon-button> </a> </div> <ha-automation-action role="region" aria-labelledby="sequence-heading" .actions="${this.config.sequence}" @value-changed="${this._sequenceChanged}" .hass="${this.hass}" .narrow="${this.narrow}" .disabled="${this.disabled}"></ha-automation-action> `}},{kind:"method",key:"_sequenceChanged",value:function(i){i.stopPropagation(),(0,n.B)(this,"value-changed",{value:{...this.config,sequence:i.detail.value}})}},{kind:"method",key:"_duplicate",value:function(){(0,n.B)(this,"duplicate")}},{kind:"get",static:!0,key:"styles",value:function(){return[r.Qx,s.iv`:host{display:block}ha-card{overflow:hidden}.description{margin:0}p{margin-bottom:0}.header{display:flex;align-items:center}.header:first-child{margin-top:-16px}.header .name{font-size:20px;font-weight:400;flex:1}.header a{color:var(--secondary-text-color)}`]}}]}}),s.oi);t()}catch(i){t(i)}}))}};
//# sourceMappingURL=50850-0Jm3MEc-Zr4.js.map