(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3511],{83511:(t,i,e)=>{"use strict";e.d(i,{bW:()=>w,AR:()=>p});var s=e(50424),h=e(19967),r=e(24731),n=e(13690);let o,l;async function a(){return l||async function(){if(o)return(await o).default;o=window.ResizeObserver;try{new o((function(){}))}catch(t){o=e.e(4528).then(e.bind(e,4528)),o=(await o).default}return l=o}()}const _=Symbol("scrollerRef");class c{constructor(t){this._benchmarkStart=null,this._layout=null,this._scrollTarget=null,this._sizer=null,this._scrollSize=null,this._scrollErr=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._container=null,this._containerElement=null,this._containerInlineStyle=null,this._containerSize=null,this._containerRO=null,this._childrenRO=null,this._mutationObserver=null,this._mutationPromise=null,this._mutationPromiseResolver=null,this._mutationsObserved=!1,this._loadListener=this._childLoaded.bind(this),this._scrollToIndex=null,this._items=[],this._totalItems=null,this._first=0,this._last=0,this._firstVisible=0,this._lastVisible=0,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._first=-1,this._last=-1,t&&Object.assign(this,t)}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}get totalItems(){return null===this._totalItems?this._items.length:this._totalItems}set totalItems(t){if("number"!=typeof t&&null!==t)throw new Error("New value must be a number.");t!==this._totalItems&&(this._totalItems=t,this._schedule(this._updateLayout))}get container(){return this._container}set container(t){t!==this._container&&(this._container&&this._children.forEach((t=>t.parentNode.removeChild(t))),this._container=t,this._schedule(this._updateLayout),this._initResizeObservers().then((()=>{const i=this._containerElement,e=t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t;if(i!==e&&(this._containerRO.disconnect(),this._containerSize=null,i?(this._containerInlineStyle?i.setAttribute("style",this._containerInlineStyle):i.removeAttribute("style"),this._containerInlineStyle=null,i===this._scrollTarget&&(i.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._sizer.remove()),i.removeEventListener("load",this._loadListener,!0),this._mutationObserver.disconnect()):addEventListener("scroll",this,{passive:!0}),this._containerElement=e,e)){this._containerInlineStyle=e.getAttribute("style")||null;const t=e.style;t.display=t.display||"block",t.position=t.position||"relative",t.overflow=t.overflow||"auto",t.contain=t.contain||"strict",e===this._scrollTarget&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild)),this._schedule(this._updateLayout),this._containerRO.observe(e),this._mutationObserver.observe(e,{childList:!0}),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._layout&&this._layout.listenForChildLoadEvents&&e.addEventListener("load",this._loadListener,!0)}})))}get layout(){return this._layout}set layout(t){if(this._layout===t)return;let i=null,e={};if("object"==typeof t?(void 0!==t.type&&(i=t.type),e=t):i=t,"function"==typeof i){if(this._layout instanceof i)return void(e&&(this._layout.config=e));i=new i(e)}this._layout&&(this._measureCallback=null,this._measureChildOverride=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),delete this.container[_],this.container.removeEventListener("load",this._loadListener,!0),this._containerElement&&this._sizeContainer(void 0)),this._layout=i,this._layout&&(this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._container[_]=this,this._layout.listenForChildLoadEvents&&this._container.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout))}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const t=window.performance.now(),i=t-this._benchmarkStart,e=performance.getEntriesByName("uv-virtualizing","measure").filter((i=>i.startTime>=this._benchmarkStart&&i.startTime<t)).reduce(((t,i)=>t+i.duration),0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:e}}return null}_measureChildren(){const t={},i=this._children,e=this._measureChildOverride||this._measureChild;for(let s=0;s<i.length;s++){const h=i[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(h))&&(t[r]=e.call(this,h,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:i,height:e}=t.getBoundingClientRect();return Object.assign({width:i,height:e},function(t){const i=window.getComputedStyle(t);return{marginTop:d(i.marginTop),marginRight:d(i.marginRight),marginBottom:d(i.marginBottom),marginLeft:d(i.marginLeft)}}(t))}get scrollTarget(){return this._scrollTarget}set scrollTarget(t){t===window&&(t=null),this._scrollTarget!==t&&(this._sizeContainer(void 0),this._scrollTarget&&(this._scrollTarget.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._scrollTarget===this._containerElement&&this._sizer.remove()),this._scrollTarget=t,t&&(t.addEventListener("scroll",this,{passive:!0}),t===this._containerElement&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.insertBefore(this._sizer,this._container.firstChild))))}set scrollToIndex(t){this._scrollToIndex=t,this._schedule(this._updateLayout)}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(){const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1,this._itemsChanged=!1,await this._mutationPromise),this._layout.measureChildren&&this._children.forEach((t=>this._childrenRO.observe(t))),this._positionChildren(this._childrenPos),this._sizeContainer(this._scrollSize),this._scrollErr&&(this._correctScrollError(this._scrollErr),this._scrollErr=null),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout.totalItems=this._totalItems,null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(this._itemsChanged),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":this._scrollTarget&&t.target!==this._scrollTarget||this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=t.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollErr=t.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=t.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(t.detail),this._schedule(this._updateDOM);break;default:console.warn("event not handled",t)}}async _initResizeObservers(){if(null===this._containerRO){const t=await a();this._containerRO=new t((t=>this._containerSizeChanged(t[0].contentRect))),this._childrenRO=new t(this._childrenSizeChanged.bind(this)),this._mutationObserver=new MutationObserver(this._observeMutations.bind(this))}}_createContainerSizer(){const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.innerHTML="&nbsp;",t.id="uni-virtualizer-spacer",t}get _children(){const t=[];let i=this.container.firstElementChild;for(;i;)"uni-virtualizer-spacer"!==i.id&&t.push(i),i=i.nextElementSibling;return t}_updateView(){if(!this.container||!this._containerElement||!this._layout)return;let t,i,e,s;if(this._scrollTarget===this._containerElement&&null!==this._containerSize)t=this._containerSize.width,i=this._containerSize.height,s=this._containerElement.scrollLeft,e=this._containerElement.scrollTop;else{const h=this._containerElement.getBoundingClientRect(),r=this._scrollTarget?this._scrollTarget.getBoundingClientRect():{top:h.top+window.pageYOffset,left:h.left+window.pageXOffset,width:innerWidth,height:innerHeight},n=r.width,o=r.height,l=Math.max(0,Math.min(n,h.left-r.left)),a=Math.max(0,Math.min(o,h.top-r.top));t=("vertical"===this._layout.direction?Math.max(0,Math.min(n,h.right-r.left)):n)-l,i=("vertical"===this._layout.direction?o:Math.max(0,Math.min(o,h.bottom-r.top)))-a,s=Math.max(0,-(h.left-r.left)),e=Math.max(0,-(h.top-r.top))}this._layout.viewportSize={width:t,height:i},this._layout.viewportScroll={top:e,left:s}}_sizeContainer(t){if(this._scrollTarget===this._containerElement){const i=t&&t.width?t.width-1:0,e=t&&t.height?t.height-1:0;this._sizer&&(this._sizer.style.transform=`translate(${i}px, ${e}px)`)}else if(this._containerElement){const i=this._containerElement.style;i.minWidth=t&&t.width?t.width+"px":null,i.minHeight=t&&t.height?t.height+"px":null}}_positionChildren(t){if(t){const i=this._children;Object.keys(t).forEach((e=>{const s=e-this._first,h=i[s];if(h){const{top:i,left:s,width:r,height:n}=t[e];h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${s}px, ${i}px)`,void 0!==r&&(h.style.width=r+"px"),void 0!==n&&(h.style.height=n+"px")}}))}}async _adjustRange(t){const{_first:i,_last:e,_firstVisible:s,_lastVisible:h}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==e,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==h}_correctScrollError(t){this._scrollTarget?(this._scrollTarget.scrollTop-=t.top,this._scrollTarget.scrollLeft-=t.left):window.scroll(window.pageXOffset-t.left,window.pageYOffset-t.top)}_notifyRange(){this._container.dispatchEvent(new CustomEvent("rangeChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_notifyVisibility(){this._container.dispatchEvent(new CustomEvent("visibilityChanged",{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}))}_containerSizeChanged(t){const{width:i,height:e}=t;this._containerSize={width:i,height:e},this._schedule(this._updateLayout)}async _observeMutations(){this._mutationsObserved||(this._mutationsObserved=!0,this._mutationPromiseResolver(),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._mutationsObserved=!1)}_childLoaded(){}_childrenSizeChanged(t){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren(),this._schedule(this._updateLayout)}}function d(t){const i=t?parseFloat(t):NaN;return Number.isNaN(i)?0:i}const u=t=>t,m=t=>s.dy`${JSON.stringify(t,null,2)}`;class g extends r.s{constructor(t){if(super(t),this.container=null,this.scroller=null,this.first=0,this.last=-1,this.renderItem=m,this.keyFunction=u,this.items=[],t.type!==h.pX.CHILD)throw new Error("The scroll directive can only be used in child expressions")}render(t){t&&(this.renderItem=t.renderItem||this.renderItem,this.keyFunction=t.keyFunction||this.keyFunction);const i=[];if(this.first>=0&&this.last>=this.first)for(let t=this.first;t<this.last+1;t++)i.push(this.items[t]);return(0,n.r)(i,this.keyFunction||u,this.renderItem)}update(t,[i]){var e;if(this.scroller||this._initialize(t,i)){const{scroller:t}=this;return this.items=t.items=i.items||[],t.totalItems=i.totalItems||(null===(e=i.items)||void 0===e?void 0:e.length)||0,t.layout=i.layout||null,t.scrollTarget=i.scrollTarget||this.container,i.scrollToIndex&&(t.scrollToIndex=i.scrollToIndex),this.render(i)}return s.Ld}_initialize(t,i){const e=this.container=t.parentNode;return e&&1===e.nodeType?(this.scroller=new c({container:e}),e.addEventListener("rangeChanged",(t=>{this.first=t.detail.first,this.last=t.detail.last,this.setValue(this.render())})),!0):(Promise.resolve().then((()=>this.update(t,[i]))),!1)}}const p=(0,h.XM)(g);let f,y;async function v(){return y||async function(){f=window.EventTarget;try{new f}catch(t){f=(await e.e(8116).then(e.t.bind(e,98251,23))).EventTarget}return y=f}()}class w extends class{constructor(t){this._latestCoords={left:0,top:0},this._direction="vertical",this._viewportSize={width:0,height:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._scrollToIndex=-1,this._scrollToAnchor=0,this._firstVisible=0,this._lastVisible=0,this._eventTargetPromise=v().then((t=>{this._eventTarget=new t})),this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._itemSize={width:100,height:100},this._spacing=0,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._totalItems=0,this._scrollSize=1,this._overhang=1e3,this._eventTarget=null,this._spacingChanged=!1,this._defaultConfig={direction:"vertical"},this.config=t||this._defaultConfig}set config(t){Object.assign(this,Object.assign({},this._defaultConfig,t))}get config(){return{direction:this.direction}}get totalItems(){return this._totalItems}set totalItems(t){const i=Number(t);i!==this._totalItems&&(this._totalItems=i,this._scheduleReflow())}get direction(){return this._direction}set direction(t){(t="horizontal"===t?t:"vertical")!==this._direction&&(this._direction=t,this._sizeDim="horizontal"===t?"width":"height",this._secondarySizeDim="horizontal"===t?"height":"width",this._positionDim="horizontal"===t?"left":"top",this._secondaryPositionDim="horizontal"===t?"top":"left",this._scheduleLayoutUpdate())}get itemSize(){return this._itemSize}set itemSize(t){const{_itemDim1:i,_itemDim2:e}=this;Object.assign(this._itemSize,t),i===this._itemDim1&&e===this._itemDim2||(e!==this._itemDim2?this._itemDim2Changed():this._scheduleLayoutUpdate())}get spacing(){return this._spacing}set spacing(t){const i=Number(t);i!==this._spacing&&(this._spacing=i,this._scheduleLayoutUpdate())}get viewportSize(){return this._viewportSize}set viewportSize(t){const{_viewDim1:i,_viewDim2:e}=this;Object.assign(this._viewportSize,t),e!==this._viewDim2?this._viewDim2Changed():i!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(t){Object.assign(this._latestCoords,t);const i=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],i!==this._scrollPosition&&(this._scrollPositionChanged(i,this._scrollPosition),this._updateVisibleIndices({emit:!0})),this._checkThresholds()}reflowIfNeeded(t){(t||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}scrollToIndex(t,i="start"){if(Number.isFinite(t)){switch(t=Math.min(this.totalItems,Math.max(0,t)),this._scrollToIndex=t,"nearest"===i&&(i=t>this._first+this._num/2?"end":"start"),i){case"start":this._scrollToAnchor=0;break;case"center":this._scrollToAnchor=.5;break;case"end":this._scrollToAnchor=1;break;default:throw new TypeError("position must be one of: start, center, end, nearest")}this._scheduleReflow()}}async dispatchEvent(t){await this._eventTargetPromise,this._eventTarget.dispatchEvent(t)}async addEventListener(t,i,e){await this._eventTargetPromise,this._eventTarget.addEventListener(t,i,e)}async removeEventListener(t,i,e){await this._eventTargetPromise,this._eventTarget.removeEventListener(t,i,e)}_itemDim2Changed(){}_viewDim2Changed(){}_updateLayout(){}_getItemSize(t){return{[this._sizeDim]:this._itemDim1,[this._secondarySizeDim]:this._itemDim2}}get _delta(){return this._itemDim1+this._spacing}get _itemDim1(){return this._itemSize[this._sizeDim]}get _itemDim2(){return this._itemSize[this._secondarySizeDim]}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_reflow(){const{_first:t,_last:i,_scrollSize:e}=this;this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._getActiveItems(),this._scrollIfNeeded(),this._updateVisibleIndices(),this._scrollSize!==e&&this._emitScrollSize(),-1===this._first&&-1===this._last?this._emitRange():(this._first!==t||this._last!==i||this._spacingChanged)&&(this._emitRange(),this._emitChildPositions()),this._emitScrollError()}_updateScrollSize(){this._scrollSize=Math.max(1,this._totalItems*this._delta)}_scrollIfNeeded(){if(-1===this._scrollToIndex)return;const t=this._scrollToIndex,i=this._scrollToAnchor,e=this._getItemPosition(t)[this._positionDim],s=this._getItemSize(t)[this._sizeDim],h=this._scrollPosition+this._viewDim1*i,r=e+s*i,n=Math.floor(Math.min(this._scrollSize-this._viewDim1,Math.max(0,this._scrollPosition-h+r)));this._scrollError+=this._scrollPosition-n,this._scrollPosition=n}_emitRange(t){const i=Object.assign({first:this._first,last:this._last,num:this._num,stable:!0,firstVisible:this._firstVisible,lastVisible:this._lastVisible},t);this.dispatchEvent(new CustomEvent("rangechange",{detail:i}))}_emitScrollSize(){const t={[this._sizeDim]:this._scrollSize};this.dispatchEvent(new CustomEvent("scrollsizechange",{detail:t}))}_emitScrollError(){if(this._scrollError){const t={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0};this.dispatchEvent(new CustomEvent("scrollerrorchange",{detail:t})),this._scrollError=0}}_emitChildPositions(){const t={};for(let i=this._first;i<=this._last;i++)t[i]=this._getItemPosition(i);this.dispatchEvent(new CustomEvent("itempositionchange",{detail:t}))}get _num(){return-1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0)this._scheduleReflow();else{const t=Math.max(0,this._scrollPosition-this._overhang),i=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);(this._physicalMin>t||this._physicalMax<i)&&this._scheduleReflow()}}_updateVisibleIndices(t){if(-1===this._first||-1===this._last)return;let i=this._first;for(;Math.round(this._getItemPosition(i)[this._positionDim]+this._getItemSize(i)[this._sizeDim])<=Math.round(this._scrollPosition);)i++;let e=this._last;for(;Math.round(this._getItemPosition(e)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)e--;i===this._firstVisible&&e===this._lastVisible||(this._firstVisible=i,this._lastVisible=e,t&&t.emit&&this._emitRange())}_scrollPositionChanged(t,i){const e=this._scrollSize-this._viewDim1;(t<e||i<e)&&(this._scrollToIndex=-1)}}{constructor(){super(...arguments),this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metrics=new Map,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._needsRemeasure=!1,this._nMeasured=0,this._tMeasured=0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(t){Object.keys(t).forEach((i=>{const e=t[Number(i)],s=this._getMetrics(Number(i)),h=s[this._sizeDim];s.width=e.width+(e.marginLeft||0)+(e.marginRight||0),s.height=e.height+(e.marginTop||0)+(e.marginBottom||0);const r=s[this._sizeDim],n=this._getPhysicalItem(Number(i));if(n){let t=0;void 0!==r&&(n.size=r,-1===h?(t=r,this._nMeasured++):t=r-h),this._tMeasured=this._tMeasured+t}})),this._nMeasured&&(this._updateItemSize(),this._scheduleReflow())}_updateItemSize(){this._itemSize[this._sizeDim]=Math.round(this._tMeasured/this._nMeasured)}_getMetrics(t){let i=this._metrics.get(t);return void 0===i&&(i={height:-1,width:-1},this._metrics.set(t,i)),i}_getPhysicalItem(t){return this._newPhysicalItems.get(t)||this._physicalItems.get(t)}_getSize(t){const i=this._getPhysicalItem(t);return i&&i.size}_getPosition(t){const i=this._getPhysicalItem(t);return i?i.pos:t*this._delta+this._spacing}_calculateAnchor(t,i){return 0===t?0:i>this._scrollSize-this._viewDim1?this._totalItems-1:Math.max(0,Math.min(this._totalItems-1,Math.floor((t+i)/2/this._delta)))}_getAnchor(t,i){if(0===this._physicalItems.size)return this._calculateAnchor(t,i);if(this._first<0)return console.error("_getAnchor: negative _first"),this._calculateAnchor(t,i);if(this._last<0)return console.error("_getAnchor: negative _last"),this._calculateAnchor(t,i);const e=this._getPhysicalItem(this._first),s=this._getPhysicalItem(this._last),h=e.pos,r=h+e.size,n=s.pos,o=n+s.size;if(o<t)return this._calculateAnchor(t,i);if(h>i)return this._calculateAnchor(t,i);if(h>=t||r>=t)return this._first;if(o<=i||n<=i)return this._last;let l=this._last,a=this._first;for(;;){const e=Math.round((l+a)/2),s=this._physicalItems.get(e),h=s.pos,r=h+s.size;if(h>=t&&h<=i||r>=t&&r<=i)return e;r<t?a=e+1:h>i&&(l=e-1)}}_getActiveItems(){0===this._viewDim1||0===this._totalItems?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;const t=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=t,this._stable=!0}_getItems(){const t=this._newPhysicalItems;let i,e;this._scrollToIndex>=0?(this._anchorIdx=this._scrollToIndex,this._anchorPos=this._getPosition(this._anchorIdx),this._scrollIfNeeded(),i=Math.max(0,this._scrollPosition-this._overhang),e=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang)):(e=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),i=Math.max(0,e-this._viewDim1-2*this._overhang),null!==this._anchorIdx&&null!==this._anchorPos||(this._anchorIdx=this._getAnchor(i,e),this._anchorPos=this._getPosition(this._anchorIdx)));let s=this._getSize(this._anchorIdx);void 0===s&&(s=this._itemDim1);let h=0;for(this._anchorPos+s+this._spacing<i&&(h=i-(this._anchorPos+s+this._spacing)),this._anchorPos>e&&(h=e-this._anchorPos),h&&(this._scrollPosition-=h,i-=h,e-=h,this._scrollError+=h),t.set(this._anchorIdx,{pos:this._anchorPos,size:s}),this._first=this._last=this._anchorIdx,this._physicalMin=this._physicalMax=this._anchorPos,this._stable=!0;this._physicalMin>i&&this._first>0;){let i=this._getSize(--this._first);void 0===i&&(this._stable=!1,i=this._itemDim1);const e=this._physicalMin-=i+this._spacing;if(t.set(this._first,{pos:e,size:i}),!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<e&&this._last<this._totalItems;){let i=this._getSize(this._last);if(void 0===i&&(this._stable=!1,i=this._itemDim1),t.set(this._last++,{pos:this._physicalMax,size:i}),!1===this._stable&&!1===this._estimate)break;this._physicalMax+=i+this._spacing}this._last--;const r=this._calculateError();r&&(this._physicalMin-=r,this._physicalMax-=r,this._anchorPos-=r,this._scrollPosition-=r,t.forEach((t=>t.pos-=r)),this._scrollError+=r),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=t)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this._totalItems-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this._totalItems-1-this._last)*this._delta:0}_updateScrollSize(){super._updateScrollSize(),this._scrollSize=Math.max(this._physicalMax,this._scrollSize)}_reflow(){const{_first:t,_last:i,_scrollSize:e}=this;this._updateScrollSize(),this._getActiveItems(),this._scrollSize!==e&&this._emitScrollSize(),this._updateVisibleIndices(),this._emitRange(),-1===this._first&&-1===this._last?this._resetReflowState():this._first!==t||this._last!==i||this._needsRemeasure?(this._emitChildPositions(),this._emitScrollError()):(this._emitChildPositions(),this._emitScrollError(),this._resetReflowState())}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_getItemPosition(t){return{[this._positionDim]:this._getPosition(t),[this._secondaryPositionDim]:0}}_getItemSize(t){return{[this._sizeDim]:this._getSize(t)||this._itemDim1,[this._secondarySizeDim]:this._itemDim2}}_viewDim2Changed(){this._needsRemeasure=!0,this._scheduleReflow()}_emitRange(){const t=this._needsRemeasure,i=this._stable;this._needsRemeasure=!1,super._emitRange({remeasure:t,stable:i})}}var b=e(26861),z=e(12445),I=function(t,i,e,s){var h,r=arguments.length,n=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,s);else for(var o=t.length-1;o>=0;o--)(h=t[o])&&(n=(r<3?h(n):r>3?h(i,e,n):h(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};let S=class extends s.oi{constructor(){super(...arguments),this.items=[],this.scrollTarget=this,this.keyFunction=void 0,this._layout=null,this._scrollToIndex=null}createRenderRoot(){return this}set layout(t){this._layout=t,this.requestUpdate()}get layout(){return this[_].layout}async scrollToIndex(t,i="start"){this._scrollToIndex={index:t,position:i},this.requestUpdate(),await this.updateComplete,this._scrollToIndex=null}render(){const{items:t,renderItem:i,keyFunction:e,scrollTarget:h}=this,r=this._layout;return s.dy`
      ${p({items:t,renderItem:i,layout:r,keyFunction:e,scrollTarget:h,scrollToIndex:this._scrollToIndex})}
    `}};I([(0,z.C)()],S.prototype,"renderItem",void 0),I([(0,z.C)({attribute:!1})],S.prototype,"items",void 0),I([(0,z.C)({attribute:!1})],S.prototype,"scrollTarget",void 0),I([(0,z.C)()],S.prototype,"keyFunction",void 0),I([(0,z.C)({attribute:!1})],S.prototype,"layout",null),S=I([(0,b.M)("lit-virtualizer")],S)}}]);
//# sourceMappingURL=chunk.4267b7da770fd94799cb.js.map