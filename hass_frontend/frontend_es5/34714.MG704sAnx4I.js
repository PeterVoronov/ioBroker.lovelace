"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[34714],{55642:function(t,e,i){i.d(e,{h:function(){return l}});var a=i(68990),n=i(71650),r=i(33368),s=i(69205),o=i(70906),d=(i(51467),i(46798),i(9849),i(50289),i(94167),i(82073),i(68144)),c=i(57835),l=(0,c.XM)(function(t){(0,s.Z)(i,t);var e=(0,o.Z)(i);function i(t){var a;if((0,n.Z)(this,i),(a=e.call(this,t))._element=void 0,t.type!==c.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings");return a}return(0,r.Z)(i,[{key:"update",value:function(t,e){var i=this,n=(0,a.Z)(e,2),r=n[0],s=n[1];return this._element&&this._element.localName===r?(s&&Object.entries(s).forEach((function(t){var e=(0,a.Z)(t,2),n=e[0],r=e[1];i._element[n]=r})),d.Jb):this.render(r,s)}},{key:"render",value:function(t,e){var i=this;return this._element=document.createElement(t),e&&Object.entries(e).forEach((function(t){var e=(0,a.Z)(t,2),n=e[0],r=e[1];i._element[n]=r})),this._element}}]),i}(c.Xe))},17595:function(t,e,i){i.d(e,{O:function(){return C}});var a,n,r,s,o,d=i(68990),c=i(53709),l=i(99312),u=i(81043),h=i(88962),f=i(33368),p=i(71650),m=i(82390),v=i(69205),g=i(70906),y=i(91808),_=(i(97393),i(65974),i(40271),i(46798),i(9849),i(50289),i(94167),i(82073),i(46349),i(70320),i(36513),i(60163),i(37313),i(68144)),x=i(95260),k=i(14516),b=i(55070),Z=i(7323),w=i(18457),j=i(38014),C=(i(62336),{mean:"mean",min:"min",max:"max",sum:"sum",state:"sum",change:"sum"});(0,y.Z)([(0,x.Mo)("statistics-chart")],(function(t,e){var i,y=function(e){(0,v.Z)(a,e);var i=(0,g.Z)(a);function a(){var e;(0,p.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=i.call.apply(i,[this].concat(r)),t((0,m.Z)(e)),e}return(0,f.Z)(a)}(e);return{F:y,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"metadata",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Array})],key:"statTypes",value:function(){return["sum","min","mean","max"]}},{kind:"field",decorators:[(0,x.Cb)()],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"hideLegend",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"logarithmicScale",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"isLoadingData",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)()],key:"period",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,x.SB)()],key:"_statisticIds",value:function(){return[]}},{kind:"field",decorators:[(0,x.SB)()],key:"_chartOptions",value:void 0},{kind:"field",decorators:[(0,x.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"field",key:"resize",value:function(){var t=this;return function(e){var i;null===(i=t._chart)||void 0===i||i.resize(e)}}},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated||t.has("unit")||t.has("period")||t.has("chartType")||t.has("logarithmicScale"))&&this._createOptions(),(t.has("statisticsData")||t.has("statTypes")||t.has("chartType")||t.has("hideLegend"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,Z.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?(0,_.dy)(n||(n=(0,h.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.statistics_charts.loading_statistics")):this.statisticsData&&Object.keys(this.statisticsData).length?(0,_.dy)(s||(s=(0,h.Z)([' <ha-chart-base .hass="','" .data="','" .options="','" .chartType="','"></ha-chart-base> '])),this.hass,this._chartData,this._chartOptions,this.chartType):(0,_.dy)(r||(r=(0,h.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.statistics_charts.no_statistics_found")):(0,_.dy)(a||(a=(0,h.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.history_charts.history_disabled"))}},{kind:"method",key:"_createOptions",value:function(t){var e=this;this._chartOptions={parsing:!1,animation:!1,interaction:{mode:"nearest",axis:"x"},scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale,config:this.hass.config}},ticks:{source:"bar"===this.chartType?"data":void 0,maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:"datetime",unit:"bar"===this.chartType&&this.period&&["hour","day","week","month"].includes(this.period)?this.period:void 0}},y:{beginAtZero:"bar"===this.chartType,ticks:{maxTicksLimit:7},title:{display:t||this.unit,text:t||this.unit},type:this.logarithmicScale?"logarithmic":"linear"}},plugins:{tooltip:{callbacks:{label:function(t){return"".concat(t.dataset.label,": ").concat((0,w.uf)(t.parsed.y,e.hass.locale,(0,w.l4)(void 0,e.hass.entities[e._statisticIds[t.datasetIndex]]))," ").concat(t.dataset.unit||"")}}},filler:{propagate:!0},legend:{display:!this.hideLegend,labels:{usePointStyle:!0}}},elements:{line:{tension:.4,cubicInterpolationMode:"monotone",borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,w.Hd)(this.hass.locale)}}},{kind:"field",key:"_getStatisticsMetaData",value:function(){var t=this;return(0,k.Z)(function(){var e=(0,u.Z)((0,l.Z)().mark((function e(i){var a,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Py)(t.hass,i);case 2:return a=e.sent,n={},a.forEach((function(t){n[t.statistic_id]=t})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{kind:"method",key:"_generateData",value:(i=(0,u.Z)((0,l.Z)().mark((function t(){var e,i,a,n,r,s,o,u=this;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.statisticsData){t.next=2;break}return t.abrupt("return");case 2:if(t.t0=this.metadata,t.t0){t.next=7;break}return t.next=6,this._getStatisticsMetaData(Object.keys(this.statisticsData));case 6:t.t0=t.sent;case 7:if(e=t.t0,i=0,a=Object.entries(this.statisticsData),n=[],r=[],0!==a.length){t.next=14;break}return t.abrupt("return");case 14:(this.endTime||new Date(Math.max.apply(Math,(0,c.Z)(a.map((function(t){var e=(0,d.Z)(t,2),i=(e[0],e[1]);return new Date(i[i.length-1].start).getTime()}))))))>new Date&&new Date,o=this.names||{},a.forEach((function(t){var a=(0,d.Z)(t,2),l=a[0],h=a[1],f=null==e?void 0:e[l],p=o[l];void 0===p&&(p=(0,j.Kd)(u.hass,l,f)),u.unit||(void 0===s?s=(0,j.dO)(u.hass,l,f):null!==s&&s!==(0,j.dO)(u.hass,l,f)&&(s=null));var m,v=null,g=[],y=(0,b.hZ)(i,u._computedStyle||getComputedStyle(u));i++;var _=[],x=u.statTypes.includes("mean")&&(0,j.Nw)(h,"mean"),k=x||u.statTypes.includes("min")&&(0,j.Nw)(h,"min")&&u.statTypes.includes("max")&&(0,j.Nw)(h,"max");(k?(0,c.Z)(u.statTypes).sort((function(t,e){return"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0})):u.statTypes).forEach((function(t){if((0,j.Nw)(h,t)){var e=k&&("min"===t||"max"===t);_.push(t),g.push({label:p?"".concat(p," (").concat(u.hass.localize("ui.components.statistics_charts.statistic_types.".concat(t)),")\n            "):u.hass.localize("ui.components.statistics_charts.statistic_types.".concat(t)),fill:!!k&&("min"===t&&x?"+1":"max"===t&&"-1"),borderColor:e&&x?y+(u.hideLegend?"00":"7F"):y,backgroundColor:e?y+"3F":y+"7F",pointRadius:0,data:[],unit:null==f?void 0:f.unit_of_measurement,band:e}),r.push(l)}}));var Z=null,w=null;h.forEach((function(t){var e=new Date(t.start);if(Z!==e){Z=e;var i=[];_.forEach((function(e){var a,n;"sum"===e?null==w?(n=0,w=t.sum):n=(t.sum||0)-w:n=t[e],i.push(null!==(a=n)&&void 0!==a?a:null)})),function(t,e,i){i&&(t>e||(g.forEach((function(e,a){"line"===u.chartType&&m&&v&&m.getTime()!==t.getTime()&&(e.data.push({x:m.getTime(),y:v[a]}),e.data.push({x:m.getTime(),y:null})),e.data.push({x:t.getTime(),y:i[a]})})),v=i,m=e))}(e,new Date(t.end),i)}})),Array.prototype.push.apply(n,g)})),s&&this._createOptions(s),this._chartData={datasets:n},this._statisticIds=r;case 21:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,_.iv)(o||(o=(0,h.Z)([":host{display:block;min-height:60px}.info{text-align:center;line-height:60px;color:var(--secondary-text-color)}"])))}}]}}),_.oi)},73366:function(t,e,i){i.d(e,{M:function(){return g}});var a,n=i(88962),r=i(33368),s=i(71650),o=i(82390),d=i(69205),c=i(70906),l=i(91808),u=i(34541),h=i(47838),f=(i(97393),i(61092)),p=i(96762),m=i(68144),v=i(95260),g=(0,l.Z)([(0,v.Mo)("ha-list-item")],(function(t,e){var i=function(e){(0,d.Z)(a,e);var i=(0,c.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return e=i.call.apply(i,[this].concat(r)),t((0,o.Z)(e)),e}return(0,r.Z)(a)}(e);return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,h.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.W,(0,m.iv)(a||(a=(0,n.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),f.K)},3555:function(t,e,i){var a,n,r,s,o=i(88962),d=i(33368),c=i(71650),l=i(82390),u=i(69205),h=i(70906),f=i(91808),p=i(34541),m=i(47838),v=(i(97393),i(42977)),g=i(31338),y=i(68144),_=i(95260),x=i(30418);(0,f.Z)([(0,_.Mo)("ha-textfield")],(function(t,e){var i=function(e){(0,u.Z)(a,e);var i=(0,h.Z)(a);function a(){var e;(0,c.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=i.call.apply(i,[this].concat(r)),t((0,l.Z)(e)),e}return(0,d.Z)(a)}(e);return{F:i,d:[{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,_.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,_.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,_.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(t){(0,p.Z)((0,m.Z)(i.prototype),"updated",this).call(this,t),(t.has("invalid")&&(this.invalid||void 0!==t.get("invalid"))||t.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),t.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),t.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),t.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"trailing":"leading";return(0,y.dy)(a||(a=(0,o.Z)([' <span class="mdc-text-field__icon mdc-text-field__icon--','" tabindex="','"> <slot name="','Icon"></slot> </span> '])),i,e?1:-1,i)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,y.iv)(n||(n=(0,o.Z)([".mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}"]))),"rtl"===x.E.document.dir?(0,y.iv)(r||(r=(0,o.Z)([".mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}"]))):(0,y.iv)(s||(s=(0,o.Z)([""])))]}}]}}),v.P)},76270:function(t,e,i){i.d(e,{Q:function(){return a}});var a=["relative","total","date","time","datetime"]},86943:function(t,e,i){i.r(e),i.d(e,{HuiStatisticsGraphCardEditor:function(){return T}});var a,n,r=i(88962),s=i(99312),o=i(81043),d=i(33368),c=i(71650),l=i(82390),u=i(69205),h=i(70906),f=i(91808),p=(i(97393),i(46349),i(70320),i(51358),i(46798),i(78399),i(5239),i(56086),i(47884),i(81912),i(64584),i(41483),i(12367),i(9454),i(98490),i(9849),i(50289),i(94167),i(13526),i(36513),i(32797),i(87438),i(85717),i(85472),i(90126),i(22890),i(22859),i(68144)),m=i(95260),v=i(14516),g=i(93088),y=i(76680),_=i(47181),x=i(36639),k=i(17595),b=(i(13927),i(68331),i(38014)),Z=i(90271),w=i(98346),j=i(30232),C=i(95396),E=(0,g.G0)([(0,g.i0)("state"),(0,g.i0)("sum"),(0,g.i0)("change"),(0,g.i0)("min"),(0,g.i0)("max"),(0,g.i0)("mean")]),D=(0,g.f0)(w.I,(0,g.Ry)({entities:(0,g.IX)(j.K),title:(0,g.jt)((0,g.Z_)()),days_to_show:(0,g.jt)((0,g.Rx)()),period:(0,g.jt)((0,g.G0)([(0,g.i0)("5minute"),(0,g.i0)("hour"),(0,g.i0)("day"),(0,g.i0)("week"),(0,g.i0)("month")])),chart_type:(0,g.jt)((0,g.G0)([(0,g.i0)("bar"),(0,g.i0)("line")])),stat_types:(0,g.jt)((0,g.G0)([(0,g.IX)(E),E])),unit:(0,g.jt)((0,g.Z_)()),hide_legend:(0,g.jt)((0,g.O7)()),logarithmic_scale:(0,g.jt)((0,g.O7)())})),S=["5minute","hour","day","week","month"],O=["mean","min","max","sum","state","change"],T=(0,f.Z)([(0,m.Mo)("hui-statistics-graph-card-editor")],(function(t,e){var i,f=function(e){(0,u.Z)(a,e);var i=(0,h.Z)(a);function a(){var e;(0,c.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=i.call.apply(i,[this].concat(r)),t((0,l.Z)(e)),e}return(0,d.Z)(a)}(e);return{F:f,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_configEntities",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_metaDatas",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,g.hu)(t,D),this._config=t,this._configEntities=t.entities?(0,Z.A)(t.entities,!1).map((function(t){return t.entity})):[]}},{kind:"field",key:"_getStatisticsMetaData",value:function(){var t=this;return function(){var e=(0,o.Z)((0,s.Z)().mark((function e(i){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Py)(t.hass,i||[]);case 2:t._metaDatas=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},{kind:"method",key:"willUpdate",value:function(t){var e;t.has("_configEntities")&&!(0,x.v)(this._configEntities,t.get("_configEntities"))&&(this._metaDatas=void 0,null!==(e=this._configEntities)&&void 0!==e&&e.length&&this._getStatisticsMetaData(this._configEntities))}},{kind:"field",key:"_schema",value:function(){var t=this;return(0,v.Z)((function(e,i,a){var n=new Set;null==a||a.forEach((function(e){var i=(0,b.dO)(t.hass,e.statistic_id,e);i&&n.add(i)}));var r=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"period",required:!0,selector:{select:{options:S.map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.card.statistics-graph.periods.".concat(t)),disabled:"5minute"===t&&(null==i?void 0:i.some((function(t){return(0,b.Hs)(t)})))}}))}}},{name:"days_to_show",default:C.DEFAULT_DAYS_TO_SHOW,selector:{number:{min:1,mode:"box"}}},{name:"stat_types",required:!0,selector:{select:{multiple:!0,mode:"list",options:O.map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.card.statistics-graph.stat_type_labels.".concat(t)),disabled:!a||!a.some((function(e){return(0,b.Z0)(e,k.O[t])}))}}))}}},{name:"chart_type",required:!0,type:"select",options:[["line","Line"],["bar","Bar"]]},{name:"hide_legend",required:!1,selector:{boolean:{}}},{name:"logarithmic_scale",required:!1,selector:{boolean:{}}}]}];return n.size>1&&r[1].schema.push({name:"unit",required:!1,selector:{select:{options:Array.from(n).map((function(t){return{value:t,label:t}}))}}}),r}))}},{kind:"method",key:"render",value:function(){var t,e,i=this;if(!this.hass||!this._config)return p.Ld;var n=this._schema(this.hass.localize,this._configEntities,this._metaDatas),s=this._config.stat_types?(0,y.r)(this._config.stat_types):O.filter((function(t){var e;return null===(e=i._metaDatas)||void 0===e?void 0:e.some((function(e){return(0,b.Z0)(e,t)}))})),o=Object.assign(Object.assign({chart_type:"line",period:"hour"},this._config),{},{stat_types:s}),d=null===(t=this._metaDatas)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.unit_class,c=d||null===(e=this._metaDatas)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.statistics_unit_of_measurement;return(0,p.dy)(a||(a=(0,r.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <ha-statistics-picker allow-custom-entity .hass="','" .pickStatisticLabel="','" .pickedStatisticLabel="','" .includeStatisticsUnitOfMeasurement="','" .includeUnitClass="','" .ignoreRestrictionsOnFirstStatistic="','" .value="','" .configValue="','" @value-changed="','"></ha-statistics-picker> '])),this.hass,o,n,this._computeLabelCallback,this._valueChanged,this.hass,this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.pick_statistic"),this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.picked_statistic"),c,d,!0,this._configEntities,"entities",this._entitiesChanged)}},{kind:"method",key:"_valueChanged",value:function(t){(0,_.B)(this,"config-changed",{config:t.detail.value})}},{kind:"method",key:"_entitiesChanged",value:(i=(0,o.Z)((0,s.Z)().mark((function t(e){var i,a,n,r,o=this;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.detail.value,a=i.map((function(t){var e=o._config.entities.find((function(e){return"string"!=typeof e&&e.entity===t}));return null!=e?e:t})),n=Object.assign(Object.assign({},this._config),{},{entities:a}),null!=i&&i.some((function(t){return(0,b.Hs)(t)}))&&"5minute"===n.period&&delete n.period,!n.stat_types&&!n.unit){t.next=10;break}return t.next=7,(0,b.Py)(this.hass,i);case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=void 0;case 11:r=t.t0,n.stat_types&&n.entities.length&&(n.stat_types=(0,y.r)(n.stat_types).filter((function(t){return r.some((function(e){return(0,b.Z0)(e,t)}))})),n.stat_types.length||delete n.stat_types),n.unit&&!r.some((function(t){return(0,b.dO)(o.hass,null==t?void 0:t.statistic_id,t)===n.unit}))&&delete n.unit,(0,_.B)(this,"config-changed",{config:n});case 15:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{kind:"field",key:"_computeLabelCallback",value:function(){var t=this;return function(e){switch(e.name){case"chart_type":case"stat_types":case"period":case"unit":case"hide_legend":case"logarithmic_scale":return t.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.".concat(e.name));default:return t.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(e.name))}}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,p.iv)(n||(n=(0,r.Z)(["ha-statistics-picker{width:100%}"])))}}]}}),p.oi)},85677:function(t,e,i){i.d(e,{C:function(){return f}});var a=i(76775),n=i(93088),r=(0,n.Ry)({user:(0,n.Z_)()}),s=(0,n.G0)([(0,n.O7)(),(0,n.Ry)({text:(0,n.jt)((0,n.Z_)()),excemptions:(0,n.jt)((0,n.IX)(r))})]),o=(0,n.Ry)({action:(0,n.i0)("url"),url_path:(0,n.Z_)(),confirmation:(0,n.jt)(s)}),d=(0,n.Ry)({action:(0,n.i0)("call-service"),service:(0,n.Z_)(),service_data:(0,n.jt)((0,n.Ry)()),data:(0,n.jt)((0,n.Ry)()),target:(0,n.jt)((0,n.Ry)({entity_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),device_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),area_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())]))})),confirmation:(0,n.jt)(s)}),c=(0,n.Ry)({action:(0,n.i0)("navigate"),navigation_path:(0,n.Z_)(),navigation_replace:(0,n.jt)((0,n.O7)()),confirmation:(0,n.jt)(s)}),l=(0,n.dt)({action:(0,n.i0)("assist"),pipeline_id:(0,n.jt)((0,n.Z_)()),start_listening:(0,n.jt)((0,n.O7)())}),u=(0,n.dt)({action:(0,n.i0)("fire-dom-event")}),h=(0,n.Ry)({action:(0,n.kE)(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:(0,n.jt)(s)}),f=(0,n.D8)((function(t){if(t&&"object"===(0,a.Z)(t)&&"action"in t)switch(t.action){case"call-service":return d;case"fire-dom-event":return u;case"navigate":return c;case"url":return o;case"assist":return l}return h}))},98346:function(t,e,i){i.d(e,{I:function(){return n}});var a=i(93088),n=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})},30232:function(t,e,i){i.d(e,{K:function(){return s}});var a=i(93088),n=i(76270),r=i(85677),s=(0,a.G0)([(0,a.Ry)({entity:(0,a.Z_)(),name:(0,a.jt)((0,a.Z_)()),icon:(0,a.jt)((0,a.Z_)()),image:(0,a.jt)((0,a.Z_)()),secondary_info:(0,a.jt)((0,a.Z_)()),format:(0,a.jt)((0,a.kE)(n.Q)),state_color:(0,a.jt)((0,a.O7)()),tap_action:(0,a.jt)(r.C),hold_action:(0,a.jt)(r.C),double_tap_action:(0,a.jt)(r.C)}),(0,a.Z_)()])},79894:function(t,e,i){i(68077)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},95818:function(t,e,i){i(68077)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991})}}]);
//# sourceMappingURL=34714.MG704sAnx4I.js.map