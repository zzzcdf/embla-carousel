!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("EmblaCarousel",[],e):"object"==typeof exports?exports.EmblaCarousel=e():t.EmblaCarousel=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Vector1D=function(t){var e={},n={value:t};function o(){return n.value}function i(t){return n.value/=t,e}function a(){return o()}function u(){var t=a();return 0!==t&&i(t),e}return r(e,{add:function(t){return n.value+=t.get(),e},addNumber:function(t){return n.value+=t,e},divide:i,get:o,limit:function(t){return a()>t&&u().multiply(t),e},magnitude:a,multiply:function(t){return n.value*=t,e},normalize:u,set:function(t){return n.value=t.get(),e},setNumber:function(t){return n.value=t,e},subtract:function(t){return n.value-=t.get(),e},subtractNumber:function(t){return n.value-=t,e}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rectWidth=function(t){return t.getBoundingClientRect().width},e.map=function(t,e,n,r,o){return r+(t-e)/(n-e)*(o-r)},e.debounce=function(t,e){var n={id:0};return function(){window.clearTimeout(n.id),n.id=window.setTimeout(t,e)||0}},e.arrayFromCollection=function(t){var e=[],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;e.push(u)}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.Direction=function(t){var e={},n=o.Vector1D(i(t));function i(t){return 0===t?0:t/Math.abs(t)}return r(e,{get:n.get,set:function(t){var r=i(t.get());return r&&r!==n.get()&&n.setNumber(r),e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.EventStore=function(){var t={},e={listeners:[]};return r(t,{add:function(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.addEventListener(r,o,i),e.listeners.push(function(){return n.removeEventListener(r,o,i)}),t},removeAll:function(){return e.listeners.forEach(function(t){return t()}),e.listeners=[],t}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Limit=function(t){var e=t.low,n=t.high,o=[0,e,n],i=[0,n,e];function a(t){var e=u(t)&&1,n=c(t)&&2;return e||n||0}function u(t){return t<e}function c(t){return t>n}return r({},{constrain:function(t){var e=a(t);return e?o[e]:t},high:n,loop:function(t){var e=a(t);return e?i[e]:t},low:e,reached:{any:function(t){return u(t)||c(t)},high:c,low:u}})}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n(3),a=n(21),u=n(1);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},c={active:!1,lastWindowWidth:0},s=r({},a.defaultOptions,e),l={},f=i.EventStore(),d=i.EventStore(),v=u.debounce(function(){var t=window.innerWidth;t!==c.lastWindowWidth&&(c.lastWindowWidth=t,m())},500);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(function(){var e=t;if(!e)throw new Error("No root element provided 😢");var n=s.container,r=e.querySelector(n);if(!r)throw new Error("No valid container element found 😢");l.container=r,l.slides=u.arrayFromCollection(r.children),c.lastWindowWidth=window.innerWidth,c.active=!0}(),l.slides.length>0){var i=l.container,a=l.slides,d=r(s,e),p=o.Engine(t,i,a,d);r(n,p),f.add(window,"resize",v),a.forEach(function(e,n){return f.add(e,"focus",(r=n,function(){t.scrollLeft=0,h(r)}),!0);var r}),n.translate.to(n.mover.location),s.draggable&&n.pointer.activate(),s.loop&&n.shifter.shiftAccordingTo(n.mover.location)}}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(c.active){var e=r({startIndex:n.index.get()},t);g(),p(e)}}function g(){var t=l.container,e=l.slides;n.pointer.destroy(),n.animation.stop(),f.removeAll(),t.style.transform="",e.forEach(function(t){return t.style.left=""})}function h(t){n.mover.useDefaultSpeed(),n.travel.toIndex(t)}return p(s),s.onInit(n.index.get()),r({},{addEvent:d.add,changeOptions:m,destroy:function(){d.removeAll(),c.active=!1,g()},goTo:h,next:function(){n.mover.useDefaultSpeed(),n.travel.toNext()},previous:function(){n.mover.useDefaultSpeed(),n.travel.toPrevious()}})}e.EmblaCarousel=c,t.exports=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(9),i=n(10),a=n(11),u=n(12),c=n(13),s=n(4),l=n(14),f=n(15),d=n(16),v=n(17),p=n(18),m=n(1),g=n(0),h=n(19),y=n(20);e.Engine=function(t,e,n,b){var O=b.align,w=b.startIndex,j=b.loop,x=b.speed,P=s.Limit({low:5,high:20}),D=a.Counter({limit:s.Limit({low:0,high:n.length-1}),loop:j,start:w}),_=m.rectWidth(e),M=i.ChunkSize(_),S=r.AlignSize({align:O,root:M.getRoot}),T=n.map(m.rectWidth).map(M.measure),E=T.map(S.measure),k=T.reduce(function(t,e){return t+e},0),V=T.map(function(t,e){var n=D.clone().set(e+1).get();return t+E[e]-E[n]}),N=n.map(function(t,e){return V.slice(0,e).reduce(function(t,e){return t-e},E[0])}),L=E[0],A=-k+E[0]+(j?M.measure(1):T[D.max]),C=s.Limit({high:L,low:A}),z=o.Animation(function(){q.isDown()||(j||U.bounds.constrain(I),U.mover.seek(I).update(),U.mover.settle(I)&&(U.animation.stop(),U.translate.useDefault())),j&&(U.infinite.loop(q.isDown()?q.direction.get():U.mover.direction.get()),U.shifter.shiftAccordingTo(U.mover.location)),U.translate.to(U.mover.location).use3d(),U.animation.proceed()}),W=N[D.get()],F=g.Vector1D(W),I=g.Vector1D(W),R=function(){return b.onSelect(U.index.get())},B=l.Mover({location:F,mass:1.5,maxForce:2*M.getRoot,speed:P.constrain(x)}),X=p.Traveller({animation:z,findTarget:d.TargetFinder({diffDistances:V,index:D,location:F,loop:j}),index:D,moverTarget:I,onSelect:R}),q=u.DragBehaviour({animation:z,element:t,index:D,limit:C,location:F,loop:b.loop,mover:B,onSelect:R,pointer:f.Pointer(M),target:I,travel:X}),U={animation:z,bounds:h.VectorBounds({animation:z,limit:C,location:F,mover:B}),index:D,infinite:y.VectorLooper({limit:C,location:F,span:k,vectors:[F,I,q.dragStartLocation]}),mover:B,pointer:q,shifter:c.InfiniteShifter({alignSizes:E,chunkSize:M,itemSizes:T,items:n}),target:I,translate:v.Translate(e),travel:X};return U}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.AlignSize=function(t){var e=t.root,n=t.align,o={start:function(t){return 0*t},center:function(t){return(e-t)/2},end:function(t){return e-t}};return r({},{measure:function(t){return o[n](t)}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Animation=function(t){var e={},n=requestAnimationFrame.bind(window),o=cancelAnimationFrame.bind(window),i={animationFrame:0};function a(t,n){return function(){return t===!!i.animationFrame&&n(),e}}function u(){i.animationFrame=n(t)}return r(e,{proceed:a(!0,u),start:a(!1,u),stop:a(!0,function(){o(i.animationFrame),i.animationFrame=0})})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.ChunkSize=function(t){var e={root:t};function n(t){return t/e.root*100}return r({},{getRoot:n(e.root),measure:n})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Counter=function t(e){var n={},o=e.start,i=e.limit,a=e.loop,u=a?"loop":"constrain",c={value:f(o)};function s(){return c.value}function l(t){return c.value=f(t),n}function f(t){return i[u](t)}return r(n,{add:function t(e){if(0!==e){var r=e/Math.abs(e);return l(s()+r),t(e+-1*r)}return n},clone:function(){return t({start:s(),limit:i,loop:a})},get:s,max:i.high,min:i.low,set:l})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),a=n(0);e.DragBehaviour=function(t){var e=t.element,n=t.pointer,u=t.location,c=t.limit,s=t.loop,l=["INPUT","SELECT","TEXTAREA"],f=a.Vector1D(0),d=a.Vector1D(0),v=a.Vector1D(0),p=o.EventStore(),m=o.EventStore(),g={isMouse:!1,preventClick:!1,preventScroll:!1};function h(r){var o=t.animation,i=r.target;g.isMouse="mousedown"===r.type,n.down(r),f.set(u),o.start(),g.preventClick=!1,e.classList.add("is-dragging"),function(t){var n=t?document:e;m.add(n,"touchmove",y).add(n,"touchend",b).add(n,"mousemove",y).add(n,"mouseup",b)}(g.isMouse),g.isMouse?function(t){var e=t.nodeName||"";return l.indexOf(e)>-1}(i)||r.preventDefault():(d.set(n.read(r,"x")),v.set(n.read(r,"y")))}function y(t){if(g.preventScroll||g.isMouse){t.preventDefault();var e=n.move(t),r=c.reached.any(u.get()),o=!s&&r?2:1;u.addNumber(e/o)}else{var i=n.read(t,"x").get(),a=n.read(t,"y").get(),l=i-d.get(),f=a-v.get();g.preventScroll=Math.abs(l)>Math.abs(f),g.preventScroll||b()}}function b(){var r=t.travel,o=t.target,a=t.mover,l=t.index,d=t.onSelect,v=n.up()*(g.isMouse?1:2.4),p=Math.abs(v),h=i.Limit({low:11,high:15}).constrain(p);if(g.isMouse=!1,g.preventScroll=!1,m.removeAll(),e.classList.remove("is-dragging"),!s){var y=u.get()+v,b=c.reached.low(y),O=c.reached.high(y);if(O||b){var w=O?l.min:l.max;return o.setNumber(y),l.set(w),void d()}}var j=Math.abs(f.get()-u.get()),x=Math.abs(o.get()-u.get());j>1&&x>1&&(g.preventClick=!0,j>5&&(a.useSpeed(h),r.toDistance(f.get(),v)))}function O(t){g.preventClick&&t.preventDefault()}return r({},{activate:function(){var t;e.classList.add("draggable"),t=e,p.add(t,"touchmove",function(){}).add(t,"touchend",function(){}).add(t,"touchstart",h).add(t,"touchcancel",b).add(t,"mousedown",h).add(t,"click",O)},cancel:b,destroy:function(){p.removeAll(),m.removeAll(),e.classList.remove("draggable"),e.classList.remove("is-dragging")},direction:n.direction,down:h,dragStartLocation:f,isDown:n.isDown,move:y,onClick:O,up:b})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(0);e.InfiniteShifter=function(t){var e,n,a,u=t.items,c=t.chunkSize,s=t.itemSizes,l=t.alignSizes,f=u.map(o.rectWidth).map(c.measure),d=s.reduce(function(t,e){return t+e},0),v=c.getRoot,p=f.reduce(function(t,e){return t+e},0),m=Object.keys(u).map(Number),g=m.slice().reverse(),h=(e=l[0]-1,n=b(e,g),a=O(e,n,0),w(n,a,1)).concat(function(){var t=b(v-l[0]-1,m),e=O(d,m,-v);return w(t,-e,0)}());function y(t,e){return t.reduce(function(t,e){return t-s[e]},e)}function b(t,e){return e.reduce(function(e,n){return y(e,t)>0?e.concat([n]):e},[])}function O(t,e,n){return e.reduce(function(e,n){var r=e+s[n];return r<t?r:e},n)}function w(t,e,n){var r=t.slice().sort(function(t,e){return t-e});return r.map(function(t,o){var a=u[t],c=p*(n?-1:0),s=p*(n?0:1),l=function(t,e,n){var r=u.length-1;return y(t.map(function(t){return(t+n)%r}),e)}(r.slice(0,o),e,n);return{findTarget:function(t){var e=i.Vector1D(0),n=t>l?c:s;return e.setNumber(n)},location:i.Vector1D(-1),node:a}})}return r({},{shiftAccordingTo:function(t){h.forEach(function(e){var n=e.findTarget,r=e.location,o=e.node,i=n(t.get());i.get()!==r.get()&&(o.style.left="".concat(i.get(),"%"))})}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(1),a=n(0);e.Mover=function(t){var e={},n=t.location,u=t.speed,c=t.mass,s=t.maxForce,l=a.Vector1D(0),f=a.Vector1D(0),d=a.Vector1D(0),v=o.Direction(0),p={speed:u};function m(t){return p.speed!==t&&(p.speed=t),e}return r(e,{direction:v,location:n,seek:function(t){d.set(t).subtract(n);var r,o=d.magnitude(),a=i.map(o,0,100,0,p.speed);return v.set(d),d.normalize().multiply(a).subtract(l).limit(s),(r=d).divide(c),f.add(r),e},settle:function(t){var e=t.get()-n.get(),r=!(Math.round(100*e)/100);return r&&n.set(t),r},update:function(){return l.add(f),n.add(l),f.multiply(0),e},useDefaultSpeed:function(){return m(u)},useSpeed:m})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(0);e.Pointer=function(t){var e={x:"clientX",y:"clientY"},n=i.Vector1D(0),a=i.Vector1D(0),u=i.Vector1D(0),c=o.Direction(0),s=i.Vector1D(0),l={isDown:!1,trackPoints:[],trackTime:(new Date).getTime()};function f(t,n){var r=!!t.type.match(/mouse/),o=e[n],i=r?t[o]:t.touches[0][o];return s.setNumber(i)}return r({},{direction:c,down:function(e){var r=f(e,"x");return n.set(r),u.set(r),l.isDown=!0,t.measure(n.get())},isDown:function(){return l.isDown},move:function(e){var n=f(e,"x"),r=(new Date).getTime();return r-l.trackTime>=10&&(l.trackPoints.push(n.get()),l.trackTime=r),a.set(n).subtract(u),c.set(a),u.set(n),t.measure(a.get())},read:f,up:function(){return u.setNumber(l.trackPoints.slice(-5).map(function(t){return u.get()-t}).sort(function(t,e){return Math.abs(t)<Math.abs(e)?1:-1})[0]||0),l.isDown=!1,l.trackPoints=[],t.measure(u.get())}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.TargetFinder=function(t){var e=t.location,n=t.diffDistances,i=t.loop;function a(e,r){var o=t.index.clone(),i=-1===r?0:-1;return function t(a){var u=o.get(),c=o.clone().add(i),s=n[c.get()],l=a*r;return o.add(-1*r),e({distance:a,index:u})?{index:u,distance:l}:t(a+s)}(0)}return r({},{byDistance:function(t,n){var r=e.get()+n-t,i=o.Direction(r).get();return a(function(t){return function(e){return e.distance>=t}}(Math.abs(r)),i)},byIndex:function(e,n){var r=t.index,o=function(t){return function(e){return e.index===t}}(r.clone().set(e).get());if(!i||r.max<=1)return a(o,n);var u=a(o,-1).distance,c=a(o,1).distance;return{index:e,distance:Math.abs(u)>Math.abs(c)?c:u}}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Translate=function(t){var e={},n={translateType:"x"},o={x:function(t){return"translateX(".concat(t,"%)")},x3d:function(t){return"translate3d(".concat(t,"%,0px,0px)")}};function i(t){return n.translateType!==t&&(n.translateType=t),e}return r(e,{to:function(r){var i=n.translateType,a=r.get();return t.style.transform=o[i](a),e},use3d:function(){return i("x3d")},useDefault:function(){return i("x")}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.Traveller=function(t){var e={},n=t.index,i=t.findTarget,a=t.animation,u=t.moverTarget;function c(r){var o=t.onSelect;return a.start(),u.addNumber(r.distance),n.set(r.index),o(),e}function s(t,r){var a=n.get()-t.get();if(a){var u=r||o.Direction(a).get();c(i.byIndex(t.get(),u))}return e}return r(e,{toDistance:function(t,n){return c(i.byDistance(t,n)),e},toIndex:function(t){return s(n.clone().set(t),0),e},toNext:function(){return s(n.clone().add(1),-1),e},toPrevious:function(){return s(n.clone().add(-1),1),e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.VectorBounds=function(t){var e={},n=t.limit,o=t.location,i=t.mover,a=t.animation,u={timeout:0};return r(e,{constrain:function(t){if(!u.timeout&&function(t){var e=o.get(),r=t.get()===n.low,i=t.get()===n.high;return n.reached.low(e)&&!r||n.reached.high(e)&&!i}(t)){var r=n.constrain(t.get());u.timeout=window.setTimeout(function(){t.setNumber(r),i.useSpeed(10),a.start(),u.timeout=0},50)}return e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.VectorLooper=function(t){var e={},n=t.limit,o=t.location,i=t.span,a=t.vectors;function u(t){var e=o.get(),r=function(t){var e=n.reached,r=e.low,o=e.high;return-1===t?r:o}(t);return 0!==t&&r(e)}return r(e,{loop:function(t){if(u(t)){var n=i*(-1*t);a.forEach(function(t){return t.addNumber(n)})}return e}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultOptions=Object.freeze({align:"center",container:"*",draggable:!0,loop:!1,onInit:function(){return!1},onSelect:function(){return!1},speed:10,startIndex:0})}])});