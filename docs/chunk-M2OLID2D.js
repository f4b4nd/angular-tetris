import{$ as c,A as R,Bb as te,Ca as b,Da as d,Ea as z,Fa as B,Fb as ne,Ga as j,Gb as h,Ha as o,Hb as P,Ia as r,Ja as m,Ka as _,La as k,Ma as Y,Na as q,Oa as u,Pa as J,Qa as y,R as L,Ra as l,Sa as K,Ta as $,Ua as S,Va as T,Wa as A,X as v,c as g,ca as U,d as w,e as H,eb as Q,fb as V,m as N,ra as X,sb as O,t as I,ta as p,tb as M,ub as W,vb as Z,wb as ee,z as F}from"./chunk-6W3PR53S.js";var C=(()=>{let e=class e{constructor(){this.store=v(te),this.grid$$=this.store.selectSignal(P.selectGrid),this.currentTetromino$$=this.store.selectSignal(P.selectCurrentTetromino),this.nextTetromino$$=this.store.selectSignal(P.selectNextTetromino),this.isPaused$$=this.store.selectSignal(P.selectIsPaused),this.isGameOver$$=this.store.selectSignal(P.selectIsGameOver),this.score$$=this.store.selectSignal(P.selectScore),this.isLocked$$=Q(()=>this.isPaused$$()===!0||this.isGameOver$$()===!0),V(()=>{this.isLocked?clearInterval(this._interval):(this.gameRoutine(),this.watchGrid())})}get grid(){return this.grid$$()}get currentTetromino(){return this.currentTetromino$$()}get isPaused(){return this.isPaused$$()}get isGameOver(){return this.isGameOver$$()}get isLocked(){return this.isLocked$$()}get nextTetromino(){return this.nextTetromino$$()}get score(){return this.score$$()}get displayedScore(){return this.score*100}watchGrid(){let s=this.currentTetromino===null,n=ne(this.grid);s&&n>0&&(this.cleanGridFullRows(),this.raiseScore(n))}cleanGridFullRows(){N.schedule(()=>this.store.dispatch(h.cleanGridFullRows()))}raiseScore(s){N.schedule(()=>this.store.dispatch(h.raiseScore({lines:s})))}dropdownTetromino(){for(;!this.isLocked&&this.currentTetromino;)this.moveDownTetromino()}moveDownTetromino(){this.isLocked||this.store.dispatch(h.moveDownTetromino())}moveHorizontalTetromino(s){this.isLocked||this.store.dispatch(h.moveHorizontalTetromino({direction:s}))}rotateTetromino(){this.isLocked||this.store.dispatch(h.rotateTetromino())}resetGame(){this.store.dispatch(h.resetGame())}spawnTetromino(){this.store.dispatch(h.setRandomNextTetromino()),this.store.dispatch(h.spawnTetrominoOnGrid()),this.store.dispatch(h.setRandomNextTetromino())}toggleIsPaused(){this.store.dispatch(h.setIsPaused({isPaused:!this.isPaused})),this.isPaused&&clearInterval(this._interval)}gameRoutine(){clearInterval(this._interval),this._interval=setInterval(()=>{this.moveDownTetromino(),!this.currentTetromino&&this.spawnTetromino()},700)}onGameOver(){this.resetGame(),this.store.dispatch(h.setIsPaused({isPaused:!0})),this.store.dispatch(h.setIsGameOver({isGameOver:!0}))}startGame(){this.store.dispatch(h.resetGame()),this.store.dispatch(h.setIsPaused({isPaused:!1})),this.store.dispatch(h.setIsGameOver({isGameOver:!1})),this.gameRoutine()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ie=(()=>{var e;let a=class a{constructor(){w(this,e,v(C))}onChange(n){if(!n.target.checked){confirm("You're having a good time. Are you sure you want to turn-off ?")&&g(this,e).resetGame();return}g(this,e).startGame()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["power-switch-button"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"power-switch-button__wrapper","flex","flex-col","items-center"],[1,"switch"],["type","checkbox",1,"h-4","w-4",3,"change"],[1,"slider","round"],[1,"btn-label"]],template:function(i,x){i&1&&(o(0,"div",0)(1,"label",1)(2,"input",2),_("change",function(E){return x.onChange(E)}),r(),m(3,"span",3),r(),o(4,"span",4),u(5,"ON/OFF"),r()())},styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#000;-webkit-transition:.4s;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#696969;-webkit-transition:.4s;transition:.4s}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#000}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{background-color:red;-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translate(26px)}.btn-label[_ngcontent-%COMP%]{font-size:13px}']});let t=a;return t})();var oe=(()=>{var e;let a=class a{constructor(){w(this,e,v(C))}handleClick(){g(this,e).toggleIsPaused()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["pause-button"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"button-wrapper","flex","flex-col","items-center"],[1,"pause-button","rounded-lg",3,"click"]],template:function(i,x){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return x.handleClick()}),r(),o(2,"label"),u(3,"Pause"),r()())},styles:[".pause-button[_ngcontent-%COMP%]{background-color:#000;height:15px;width:60px;box-shadow:0 -3px 6px #fff9 inset}.pause-button[_ngcontent-%COMP%]:active{transform:rotate(180deg)}.button-wrapper[_ngcontent-%COMP%]{transform:rotate(-15deg)}label[_ngcontent-%COMP%]{font-size:14px;text-transform:capitalize}"]});let t=a;return t})();var re=(()=>{var e;let a=class a{constructor(){w(this,e,v(C))}handleClick(){g(this,e).dropdownTetromino()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["drop-button"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"button-wrapper","flex","flex-col"],[1,"drop-button","rounded-full",3,"click"]],template:function(i,x){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return x.handleClick()}),r(),o(2,"label"),u(3,"Drop (Space)"),r()())},styles:[".drop-button[_ngcontent-%COMP%]{background-color:gray;box-shadow:0 -3px 6px #fff9 inset}.drop-button[_ngcontent-%COMP%]:active{transform:rotate(180deg);transition:transform 0s}label[_ngcontent-%COMP%]{font-size:14px}"]});let t=a;return t})();var xe=t=>[t],se=(()=>{var e;let a=class a{constructor(){w(this,e,void 0);this.classNames="",H(this,e,v(C))}handleClickButton(n){switch(n){case"down":g(this,e).moveDownTetromino();break;case"left":g(this,e).moveHorizontalTetromino("left");break;case"right":g(this,e).moveHorizontalTetromino("right");break;case"rotation":g(this,e).rotateTetromino();break;default:return}}keyEvent(n){switch(n.key){case"ArrowDown":g(this,e).moveDownTetromino(),n.preventDefault();break;case"ArrowLeft":g(this,e).moveHorizontalTetromino("left"),n.preventDefault();break;case"ArrowRight":g(this,e).moveHorizontalTetromino("right"),n.preventDefault();break;case"ArrowUp":g(this,e).rotateTetromino(),n.preventDefault();break;default:return}}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["directionnal-button"]],hostBindings:function(i,x){i&1&&_("keydown",function(E){return x.keyEvent(E)},!1,X)},inputs:{direction:"direction",classNames:"classNames"},standalone:!0,features:[l],decls:4,vars:4,consts:[[1,"directionnal-button__wrapper","flex","flex-col","items-center"],[1,"directionnal-button","rounded-full",3,"click","ngClass"],[1,"text"]],template:function(i,x){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return x.handleClickButton(x.direction)}),r(),o(2,"label",2),u(3),r()()),i&2&&(p(),d("ngClass",K(2,xe,x.classNames)),p(2),J(x.direction))},dependencies:[O],styles:[".directionnal-button[_ngcontent-%COMP%]{box-shadow:0 -3px 6px #fff9 inset}.directionnal-button[_ngcontent-%COMP%]:active{transform:rotate(180deg)}.directionnal-button.red[_ngcontent-%COMP%]{background-color:red}.directionnal-button.blue[_ngcontent-%COMP%]{background-color:#00f}.directionnal-button.yellow[_ngcontent-%COMP%]{background-color:#d4ac0d}.directionnal-button.green[_ngcontent-%COMP%]{background-color:green}.directionnal-button__wrapper[_ngcontent-%COMP%]{position:relative}label[_ngcontent-%COMP%]{font-size:14px;text-transform:capitalize}"]});let t=a;return t})();var ae=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["directionnal-cross"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"directionnal-cross","flex","flex-col","justify-center","gap-1"],[1,"up","self-center"],[1,"flex","justify-between"],[1,"left"],[1,"right"],[1,"down","self-center"]],template:function(n,i){n&1&&(o(0,"div",0),m(1,"em",1),o(2,"div",2),m(3,"em",3)(4,"em",4),r(),m(5,"em",5),r())},styles:[".directionnal-cross[_ngcontent-%COMP%]{width:50px}em[_ngcontent-%COMP%]{display:block;height:0;width:0;border:6px solid;border-color:transparent transparent #111}em.right[_ngcontent-%COMP%]{transform:rotate(90deg)}em.left[_ngcontent-%COMP%]{transform:rotate(-90deg)}em.down[_ngcontent-%COMP%]{transform:rotate(180deg)}"]});let t=e;return t})();var Ce=(t,e)=>[t,e],ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["tile"]],inputs:{isActive:"isActive",size:"size",opacity:"opacity"},standalone:!0,features:[l],decls:2,vars:5,consts:[["name","tile__wrapper",1,"border","border-black",3,"ngClass"],["name","tile",3,"ngClass"]],template:function(n,i){n&1&&(o(0,"div",0),m(1,"div",1),r()),n&2&&(d("ngClass",i.opacity),p(),d("ngClass",$(2,Ce,i.size,i.isActive?"bg-black":"")))},dependencies:[O],styles:["[name=tile].tile-lg[_ngcontent-%COMP%]{height:.8rem;width:.8rem}[name=tile].tile-sm[_ngcontent-%COMP%]{height:.5rem;width:.5rem}"]});let t=e;return t})();var be=(t,e)=>[t,e];function _e(t,e){if(t&1&&m(0,"tile",4),t&2){let a=k().$implicit,s=k(3);d("size",s.tileSize)("isActive",a===1)("opacity",s.tileOpacity)}}function ye(t,e){if(t&1&&b(0,_e,1,3,"tile",5),t&2){let a=k(3);d("ngIf",a.gridSize)}}function we(t,e){if(t&1&&(o(0,"div",3),B(1,ye,1,1,"tile",4,z),r()),t&2){let a=e.$implicit;p(),j(a)}}function Se(t,e){if(t&1&&(o(0,"div",2),B(1,we,3,0,"div",3,z),r()),t&2){let a=k();p(),j(a.grid)}}var G=(()=>{let e=class e{constructor(){this.classNames=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["grid"]],inputs:{grid:"grid",gridSize:"gridSize",tileSize:"tileSize",tileOpacity:"tileOpacity",classNames:"classNames"},standalone:!0,features:[l],decls:2,vars:5,consts:[["name","grid",3,"ngClass"],["class","grid__wrapper flex flex-col items-center",4,"ngIf"],[1,"grid__wrapper","flex","flex-col","items-center"],[1,"grid__row","flex"],[3,"size","isActive","opacity"],[3,"size","isActive","opacity",4,"ngIf"]],template:function(n,i){n&1&&(o(0,"div",0),b(1,Se,3,0,"div",1),r()),n&2&&(d("ngClass",$(2,be,i.gridSize,i.classNames)),p(),d("ngIf",i.grid))},dependencies:[ce,O,M],styles:[".grid-sm[_ngcontent-%COMP%]   .grid__wrapper[_ngcontent-%COMP%], .grid-sm[_ngcontent-%COMP%]   .grid__row[_ngcontent-%COMP%], .grid-lg[_ngcontent-%COMP%]   .grid__wrapper[_ngcontent-%COMP%]{gap:.125rem}.grid-lg[_ngcontent-%COMP%]   .grid__row[_ngcontent-%COMP%]{gap:.2rem}"]});let t=e;return t})();var le=(()=>{let e=class e{transform(s){return`${s}`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=U({name:"tostring",type:e,pure:!0,standalone:!0});let t=e;return t})();function Me(t,e){t&1&&(o(0,"span",6),u(1,":"),r())}var me=(()=>{let e=class e{constructor(){this.counter$=F(0,1e3),this.show$=F(0,2e3),this.hide$=F(1e3,2e3),this.currentTime$=this.counter$.pipe(I(s=>new Date)),this.blinker$=R(this.show$.pipe(I(s=>"show")),this.hide$.pipe(I(s=>"hide")))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["clock"]],standalone:!0,features:[l],decls:13,vars:15,consts:[[1,"clock","flex","justify-center"],[1,"clock__body","flex","justify-between","w-11"],[1,"clock__hour"],[1,"clock__colon"],["class","colon",4,"ngIf"],[1,"clock__minutes"],[1,"colon"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1)(2,"span",2),u(3),S(4,"async"),S(5,"date"),r(),o(6,"span",3),b(7,Me,2,0,"span",4),S(8,"async"),r(),o(9,"span",5),u(10),S(11,"async"),S(12,"date"),r()()()),n&2&&(p(3),y(" ",A(5,5,T(4,3,i.currentTime$),"HH")," "),p(4),d("ngIf",T(8,8,i.blinker$)==="show"),p(3),y(" ",A(12,12,T(11,10,i.currentTime$),"mm")," "))},dependencies:[W,Z,M],encapsulation:2});let t=e;return t})();var pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen-info-text"]],inputs:{text:"text"},standalone:!0,features:[l],decls:2,vars:1,consts:[[1,"screen-info__text"]],template:function(n,i){n&1&&(o(0,"div",0),u(1),r()),n&2&&(p(),y(" ",i.text," "))},encapsulation:2});let t=e;return t})();var de=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen-info-title"]],inputs:{title:"title"},standalone:!0,features:[l],decls:2,vars:1,consts:[[1,"screen-info__title","font-bold"]],template:function(n,i){n&1&&(o(0,"div",0),u(1),r()),n&2&&(p(),y(" ",i.title," "))},encapsulation:2});let t=e;return t})();var ke=["*"],ue=(()=>{let e=class e{constructor(){this.classNames=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen-info-group"]],inputs:{classNames:"classNames"},standalone:!0,features:[l],ngContentSelectors:ke,decls:2,vars:0,consts:[[1,"screen-info__group","flex","flex-col","items-center"]],template:function(n,i){n&1&&(Y(),o(0,"div",0),q(1),r())},encapsulation:2});let t=e;return t})();function Pe(t,e){if(t&1&&(o(0,"screen-info-group"),m(1,"screen-info-title",6)(2,"screen-info-text",7),S(3,"tostring"),r()),t&2){let a=k();p(2),d("text",T(3,1,a.gameService.displayedScore))}}var fe=(()=>{let e=class e{constructor(){this.gameService=v(C),this.emptyTetrominoShape=Array(2).fill(Array(4).fill(0))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen-info"]],standalone:!0,features:[l],decls:7,vars:2,consts:[[1,"screen_info__wrapper","flex","flex-col","gap-8","h-full","w-14"],[4,"ngIf"],["title","Next"],["gridSize","grid-sm","tileSize","tile-sm",3,"grid"],[1,"align-self-end","mt-auto"],[1,"font-bold"],["title","Score"],[3,"text"]],template:function(n,i){n&1&&(o(0,"div",0),b(1,Pe,4,3,"screen-info-group",1),o(2,"screen-info-group"),m(3,"screen-info-title",2)(4,"grid",3),r(),o(5,"div",4),m(6,"clock",5),r()()),n&2&&(p(),d("ngIf",i.gameService.displayedScore>=0),p(3),d("grid",(i.gameService.nextTetromino==null?null:i.gameService.nextTetromino.previewShape)||i.emptyTetrominoShape))},dependencies:[G,me,ue,pe,de,le,M],encapsulation:2});let t=e;return t})();var ge=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen-grid-text"]],inputs:{text:"text"},standalone:!0,features:[l],decls:2,vars:1,consts:[[1,"screen__text","font-bold"]],template:function(n,i){n&1&&(o(0,"div",0),u(1),r()),n&2&&(p(),y(" ",i.text," "))},encapsulation:2});let t=e;return t})();function Te(t,e){t&1&&m(0,"screen-grid-text",5)}function Oe(t,e){t&1&&m(0,"screen-grid-text",6)}var he=(()=>{let e=class e{constructor(){this.gameService=v(C)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["screen"]],standalone:!0,features:[l],decls:5,vars:4,consts:[[1,"screen","border","border-black","inline-flex","mx-auto","justify-between","h-full","relative"],["gridSize","grid-lg","tileSize","tile-lg","classNames","border-2 border-black p-0.5",1,"p-2",3,"grid","tileOpacity"],["class","absolute top-[44%] left-[23%] text-2xl ","text","PAUSE",4,"ngIf"],["class","absolute top-[44%] left-[10%] text-xl","text","Turn ON to start",4,"ngIf"],[1,"p-2"],["text","PAUSE",1,"absolute","top-[44%]","left-[23%]","text-2xl"],["text","Turn ON to start",1,"absolute","top-[44%]","left-[10%]","text-xl"]],template:function(n,i){n&1&&(o(0,"div",0),m(1,"grid",1),b(2,Te,1,0,"screen-grid-text",2)(3,Oe,1,0,"screen-grid-text",3),m(4,"screen-info",4),r()),n&2&&(p(),d("grid",i.gameService.grid)("tileOpacity",i.gameService.isPaused||i.gameService.isGameOver?"opacity-25":""),p(),d("ngIf",i.gameService.isPaused&&!i.gameService.isGameOver),p(),d("ngIf",i.gameService.isGameOver))},dependencies:[G,fe,ge,M],styles:[".screen[_ngcontent-%COMP%]{background-color:#9ead86}"]});let t=e;return t})();var ve=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["game-console"]],hostAttrs:[1,"basis-full"],standalone:!0,features:[l],decls:16,vars:0,consts:[[1,"game-console","flex","flex-col","mx-auto","rounded-xl","p-2"],[1,"flex","justify-end"],[1,"self-center"],["name","game-controls"],["name","commands",1,"flex","black","justify-between","px-4"],["name","drop-button",1,"self-center"],["id","directionnal-buttons",1,"flex","flex-col","align-end","self-center","basis-2/5"],["name","btn-up","classNames","blue","direction","rotation",1,"self-center"],[1,"flex","justify-between"],["name","btn-left","classNames","green","direction","left"],["name","directionnal-cross"],["name","btn-right","classNames","red","direction","right"],["name","btn-down","classNames","yellow","direction","down",1,"self-center"],[1,"flex","justify-center"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),m(2,"power-switch-button"),r(),m(3,"screen",2),o(4,"div",3)(5,"div",4),m(6,"drop-button",5),o(7,"div",6),m(8,"directionnal-button",7),o(9,"div",8),m(10,"directionnal-button",9)(11,"directionnal-cross",10)(12,"directionnal-button",11),r(),m(13,"directionnal-button",12),r()(),o(14,"div",13),m(15,"pause-button"),r()()())},dependencies:[he,ae,se,re,oe,ie],styles:[".game-console[_ngcontent-%COMP%]{width:100%;max-width:500px;background-color:#a6acaf;height:100%}[name=game-controls][_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-evenly}[name=directionnal-cross][_ngcontent-%COMP%]{margin-top:3%}[name=drop-button][_ngcontent-%COMP%]     button{height:4.5rem;width:4.5rem}#directionnal-buttons[_ngcontent-%COMP%]     button{height:2.6rem;width:2.6rem}#directionnal-buttons[_ngcontent-%COMP%]     [name=btn-up] label{position:absolute;right:-57px;top:0%}#directionnal-buttons[_ngcontent-%COMP%]     [name=btn-down] label{position:absolute;right:-40px;bottom:0%}"]});let t=e;return t})();var Kt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],hostAttrs:[1,"h-full"],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"h-full"],[1,"flex","justify-center","h-full","px-1","py-2"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),m(2,"game-console"),r()())},dependencies:[ve,ee],encapsulation:2});let t=e;return t})();export{Kt as HomeComponent};
