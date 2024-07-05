import{$a as S,A as L,Ab as x,Bb as k,Cb as Y,Db as q,Eb as J,Fb as _,Ia as y,Ka as d,Ma as B,Na as G,Oa as j,Ob as h,Pa as o,Qa as r,Ra as s,Sa as w,Ta as C,Ua as u,Va as R,Wa as O,Y as b,Ya as l,Za as D,_a as I,ab as P,ba as c,bb as A,c as f,d as M,e as H,ea as U,s as F,ua as X,wa as p,z as N}from"./chunk-2WPCYJ5S.js";var K=(()=>{var e;let a=class a{constructor(){M(this,e,b(h))}onChange(n){if(!n.target.checked){confirm("You're having a good time. Are you sure you want to turn-off ?")&&(f(this,e).resetGame(),f(this,e).logout());return}f(this,e).startGame()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["power-switch-button"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"power-switch-button__wrapper","flex","flex-col","items-center"],[1,"switch"],["type","checkbox",1,"h-4","w-4",3,"change"],[1,"slider","round"],[1,"btn-label"]],template:function(i,v){i&1&&(o(0,"div",0)(1,"label",1)(2,"input",2),w("change",function(z){return v.onChange(z)}),r(),s(3,"span",3),r(),o(4,"span",4),u(5,"ON/OFF"),r()())},styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#000;-webkit-transition:.4s;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#696969;-webkit-transition:.4s;transition:.4s}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#000}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{background-color:red;-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translate(26px)}.btn-label[_ngcontent-%COMP%]{font-size:13px}']});let t=a;return t})();var Q=(()=>{var e;let a=class a{constructor(){M(this,e,b(h))}handleClick(){f(this,e).toggleIsPaused()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["pause-button"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"button-wrapper","flex","flex-col","items-center"],[1,"pause-button","rounded-lg",3,"click"]],template:function(i,v){i&1&&(o(0,"div",0)(1,"button",1),w("click",function(){return v.handleClick()}),r(),o(2,"label"),u(3,"Pause"),r()())},styles:[".pause-button[_ngcontent-%COMP%]{background-color:#000;height:15px;width:60px;box-shadow:0 -3px 6px #fff9 inset}.pause-button[_ngcontent-%COMP%]:active{transform:rotate(180deg)}.button-wrapper[_ngcontent-%COMP%]{transform:rotate(-15deg)}label[_ngcontent-%COMP%]{font-size:14px;text-transform:capitalize}"]});let t=a;return t})();var V=(()=>{var e;let a=class a{constructor(){M(this,e,b(h))}handleClick(){f(this,e).dropdownTetromino()}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["drop-button"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"button-wrapper","flex","flex-col"],[1,"drop-button","rounded-full",3,"click"]],template:function(i,v){i&1&&(o(0,"div",0)(1,"button",1),w("click",function(){return v.handleClick()}),r(),o(2,"label"),u(3,"Drop (Space)"),r()())},styles:[".drop-button[_ngcontent-%COMP%]{background-color:gray;box-shadow:0 -3px 6px #fff9 inset}.drop-button[_ngcontent-%COMP%]:active{transform:rotate(180deg);transition:transform 0s}label[_ngcontent-%COMP%]{font-size:14px}"]});let t=a;return t})();var ce=t=>[t],W=(()=>{var e;let a=class a{constructor(){M(this,e,void 0);this.classNames="",H(this,e,b(h))}handleClickButton(n){switch(n){case"down":f(this,e).moveDownTetromino();break;case"left":f(this,e).moveHorizontalTetromino("left");break;case"right":f(this,e).moveHorizontalTetromino("right");break;case"rotation":f(this,e).rotateTetromino();break;default:return}}keyEvent(n){switch(n.key){case"ArrowDown":f(this,e).moveDownTetromino(),n.preventDefault();break;case"ArrowLeft":f(this,e).moveHorizontalTetromino("left"),n.preventDefault();break;case"ArrowRight":f(this,e).moveHorizontalTetromino("right"),n.preventDefault();break;case"ArrowUp":f(this,e).rotateTetromino(),n.preventDefault();break;default:return}}};e=new WeakMap,a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=c({type:a,selectors:[["directionnal-button"]],hostBindings:function(i,v){i&1&&w("keydown",function(z){return v.keyEvent(z)},!1,X)},inputs:{direction:"direction",classNames:"classNames"},standalone:!0,features:[l],decls:4,vars:4,consts:[[1,"directionnal-button__wrapper","flex","flex-col","items-center"],[1,"directionnal-button","rounded-full",3,"click","ngClass"],[1,"text"]],template:function(i,v){i&1&&(o(0,"div",0)(1,"button",1),w("click",function(){return v.handleClickButton(v.direction)}),r(),o(2,"label",2),u(3),r()()),i&2&&(p(),d("ngClass",D(2,ce,v.classNames)),p(2),R(v.direction))},dependencies:[x],styles:[".directionnal-button[_ngcontent-%COMP%]{box-shadow:0 -3px 6px #fff9 inset}.directionnal-button[_ngcontent-%COMP%]:active{transform:rotate(180deg)}.directionnal-button.red[_ngcontent-%COMP%]{background-color:red}.directionnal-button.blue[_ngcontent-%COMP%]{background-color:#00f}.directionnal-button.yellow[_ngcontent-%COMP%]{background-color:#d4ac0d}.directionnal-button.green[_ngcontent-%COMP%]{background-color:green}.directionnal-button__wrapper[_ngcontent-%COMP%]{position:relative}label[_ngcontent-%COMP%]{font-size:14px;text-transform:capitalize}"]});let t=a;return t})();var Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["directionnal-cross"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"directionnal-cross","flex","flex-col","justify-center","gap-1"],[1,"up","self-center"],[1,"flex","justify-between"],[1,"left"],[1,"right"],[1,"down","self-center"]],template:function(n,i){n&1&&(o(0,"div",0),s(1,"em",1),o(2,"div",2),s(3,"em",3)(4,"em",4),r(),s(5,"em",5),r())},styles:[".directionnal-cross[_ngcontent-%COMP%]{width:50px}em[_ngcontent-%COMP%]{display:block;height:0;width:0;border:6px solid;border-color:transparent transparent #111}em.right[_ngcontent-%COMP%]{transform:rotate(90deg)}em.left[_ngcontent-%COMP%]{transform:rotate(-90deg)}em.down[_ngcontent-%COMP%]{transform:rotate(180deg)}"]});let t=e;return t})();var le=(t,e)=>[t,e],ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["tile"]],inputs:{isActive:"isActive",size:"size"},standalone:!0,features:[l],decls:2,vars:4,consts:[["name","tile__wrapper",1,"border","border-black"],["name","tile",3,"ngClass"]],template:function(n,i){n&1&&(o(0,"div",0),s(1,"div",1),r()),n&2&&(p(),d("ngClass",I(1,le,i.size,i.isActive?"bg-black":"")))},dependencies:[x],styles:["[name=tile].tile-lg[_ngcontent-%COMP%]{height:.8rem;width:.8rem}[name=tile].tile-sm[_ngcontent-%COMP%]{height:.5rem;width:.5rem}"]});let t=e;return t})();var me=(t,e)=>[t,e];function pe(t,e){if(t&1&&s(0,"tile",4),t&2){let a=C().$implicit,m=C(3);d("size",m.tileSize)("isActive",a===1)}}function de(t,e){if(t&1&&y(0,pe,1,2,"tile",5),t&2){let a=C(3);d("ngIf",a.gridSize)}}function fe(t,e){if(t&1&&(o(0,"div",3),G(1,de,1,1,"tile",4,B),r()),t&2){let a=e.$implicit;p(),j(a)}}function ue(t,e){if(t&1&&(o(0,"div",2),G(1,fe,3,0,"div",3,B),r()),t&2){let a=C();p(),j(a.grid)}}var E=(()=>{let e=class e{constructor(){this.classNames=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["grid"]],inputs:{grid:"grid",gridSize:"gridSize",tileSize:"tileSize",classNames:"classNames"},standalone:!0,features:[l],decls:2,vars:5,consts:[["name","grid",3,"ngClass"],["class","grid__wrapper flex flex-col items-center",4,"ngIf"],[1,"grid__wrapper","flex","flex-col","items-center"],[1,"grid__row","flex"],[3,"size","isActive"],[3,"size","isActive",4,"ngIf"]],template:function(n,i){n&1&&(o(0,"div",0),y(1,ue,3,0,"div",1),r()),n&2&&(d("ngClass",I(2,me,i.gridSize,i.classNames)),p(),d("ngIf",i.grid))},dependencies:[ee,_,x,k],styles:[".grid-sm[_ngcontent-%COMP%]   .grid__wrapper[_ngcontent-%COMP%], .grid-sm[_ngcontent-%COMP%]   .grid__row[_ngcontent-%COMP%], .grid-lg[_ngcontent-%COMP%]   .grid__wrapper[_ngcontent-%COMP%]{gap:.125rem}.grid-lg[_ngcontent-%COMP%]   .grid__row[_ngcontent-%COMP%]{gap:.2rem}"]});let t=e;return t})();function ge(t,e){t&1&&(o(0,"span",6),u(1,":"),r())}var te=(()=>{let e=class e{constructor(){this.counter$=N(0,1e3),this.show$=N(0,2e3),this.hide$=N(1e3,2e3),this.currentTime$=this.counter$.pipe(F(m=>new Date)),this.blinker$=L(this.show$.pipe(F(m=>"show")),this.hide$.pipe(F(m=>"hide")))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["clock"]],standalone:!0,features:[l],decls:13,vars:15,consts:[[1,"clock","flex","justify-center"],[1,"clock__body","flex","justify-between","w-11"],[1,"clock__hour"],[1,"clock__colon"],["class","colon",4,"ngIf"],[1,"clock__minutes"],[1,"colon"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1)(2,"span",2),u(3),S(4,"async"),S(5,"date"),r(),o(6,"span",3),y(7,ge,2,0,"span",4),S(8,"async"),r(),o(9,"span",5),u(10),S(11,"async"),S(12,"date"),r()()()),n&2&&(p(3),O(" ",A(5,5,P(4,3,i.currentTime$),"HH")," "),p(4),d("ngIf",P(8,8,i.blinker$)==="show"),p(3),O(" ",A(12,12,P(11,10,i.currentTime$),"mm")," "))},dependencies:[_,k,Y,J],encapsulation:2});let t=e;return t})();var ve=t=>[t];function be(t,e){if(t&1&&(o(0,"div",3),u(1),r()),t&2){let a=C();p(),O(" ",a.title," ")}}function he(t,e){if(t&1&&(o(0,"div",4),u(1),r()),t&2){let a=C();p(),O(" ",a.text," ")}}var ne=(()=>{let e=class e{constructor(){this.classNames=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["gameboard-info-section"]],inputs:{title:"title",text:"text",classNames:"classNames"},standalone:!0,features:[l],decls:3,vars:5,consts:[[1,"gameboard-info-section__wrapper","flex","flex-col",3,"ngClass"],["class","gameboard-info-section__title font-bold",4,"ngIf"],["class","gameboard-info-section__text",4,"ngIf"],[1,"gameboard-info-section__title","font-bold"],[1,"gameboard-info-section__text"]],template:function(n,i){n&1&&(o(0,"div",0),y(1,be,2,1,"div",1)(2,he,2,1,"div",2),r()),n&2&&(d("ngClass",D(3,ve,i.classNames)),p(),d("ngIf",i.title),p(),d("ngIf",i.text))},dependencies:[_,x,k],encapsulation:2});let t=e;return t})();var Ce=t=>[t],ie=(()=>{let e=class e{constructor(){this.classNames="",this.emptyTetrominoShape=Array(2).fill(Array(4).fill(0))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["next-tetromino-section"]],inputs:{tetromino:"tetromino",classNames:"classNames"},standalone:!0,features:[l],decls:4,vars:4,consts:[[1,"next-box__wrapper",3,"ngClass"],[1,"next-tetromino-section__title","text-center","font-bold"],["gridSize","grid-sm","tileSize","tile-sm",3,"grid"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),u(2," Next "),r(),s(3,"grid",2),r()),n&2&&(d("ngClass",D(2,Ce,i.classNames)),p(3),d("grid",(i.tetromino==null?null:i.tetromino.baseShape)||i.emptyTetrominoShape))},dependencies:[E,x],encapsulation:2});let t=e;return t})();var oe=(()=>{let e=class e{transform(m){return`${m}`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=U({name:"tostring",type:e,pure:!0,standalone:!0});let t=e;return t})();function xe(t,e){if(t&1&&(s(0,"gameboard-info-section",6),S(1,"tostring")),t&2){let a=C();d("text",P(1,1,a.gameService.displayedScore))}}var re=(()=>{let e=class e{constructor(){this.gameService=b(h)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["gameboard-info"]],standalone:!0,features:[l],decls:7,vars:5,consts:[[1,"flex","flex-col","gap-8","h-full","w-14"],["title","Score","classNames","items-center",3,"text",4,"ngIf"],["classNames","flex flex-col gap-1",3,"tetromino"],[1,"align-self-end","mt-auto"],["classNames","items-center",3,"title"],[1,"font-bold"],["title","Score","classNames","items-center",3,"text"]],template:function(n,i){n&1&&(o(0,"div",0),y(1,xe,2,3,"gameboard-info-section",1),s(2,"next-tetromino-section",2),o(3,"div",3),s(4,"gameboard-info-section",4),S(5,"uppercase"),s(6,"clock",5),r()()),n&2&&(p(),d("ngIf",i.gameService.displayedScore>=0),p(),d("tetromino",i.gameService.nextTetromino),p(2),d("title",P(5,3,i.gameService.playerName)||""))},dependencies:[te,ne,ie,oe,_,k,q],encapsulation:2});let t=e;return t})();var ae=(()=>{let e=class e{constructor(){this.gameService=b(h)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["game-screen"]],standalone:!0,features:[l],decls:3,vars:1,consts:[[1,"game-screen","border","border-black","inline-flex","mx-auto","justify-between","h-full"],["gridSize","grid-lg","tileSize","tile-lg","classNames","border-2 border-black p-0.5",1,"p-2",3,"grid"],[1,"p-2"]],template:function(n,i){n&1&&(o(0,"div",0),s(1,"grid",1)(2,"gameboard-info",2),r()),n&2&&(p(),d("grid",i.gameService.grid))},dependencies:[E,re],styles:[".game-screen[_ngcontent-%COMP%]{background-color:#9ead86}"]});let t=e;return t})();var se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["game-console"]],hostAttrs:[1,"basis-full"],standalone:!0,features:[l],decls:16,vars:0,consts:[[1,"game-console","flex","flex-col","mx-auto","rounded-xl","p-2"],[1,"flex","justify-end"],[1,"self-center"],["name","game-controls"],["name","commands",1,"flex","black","justify-between","px-4"],["name","drop-button",1,"self-center"],["id","directionnal-buttons",1,"flex","flex-col","align-end","self-center","basis-2/5"],["name","btn-up","classNames","blue","direction","rotation",1,"self-center"],[1,"flex","justify-between"],["name","btn-left","classNames","green","direction","left"],["name","directionnal-cross"],["name","btn-right","classNames","red","direction","right"],["name","btn-down","classNames","yellow","direction","down",1,"self-center"],[1,"flex","justify-center"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),s(2,"power-switch-button"),r(),s(3,"game-screen",2),o(4,"div",3)(5,"div",4),s(6,"drop-button",5),o(7,"div",6),s(8,"directionnal-button",7),o(9,"div",8),s(10,"directionnal-button",9)(11,"directionnal-cross",10)(12,"directionnal-button",11),r(),s(13,"directionnal-button",12),r()(),o(14,"div",13),s(15,"pause-button"),r()()())},dependencies:[ae,Z,W,V,Q,K],styles:[".game-console[_ngcontent-%COMP%]{width:100%;max-width:500px;background-color:#a6acaf;height:100%}[name=game-controls][_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-evenly}[name=directionnal-cross][_ngcontent-%COMP%]{margin-top:3%}[name=drop-button][_ngcontent-%COMP%]     button{height:4.5rem;width:4.5rem}#directionnal-buttons[_ngcontent-%COMP%]     button{height:2.6rem;width:2.6rem}#directionnal-buttons[_ngcontent-%COMP%]     [name=btn-up] label{position:absolute;right:-57px;top:0%}#directionnal-buttons[_ngcontent-%COMP%]     [name=btn-down] label{position:absolute;right:-40px;bottom:0%}"]});let t=e;return t})();var Dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],hostAttrs:[1,"h-full"],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"h-full"],[1,"flex","justify-center","h-full","px-1","py-2"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1),s(2,"game-console"),r()())},dependencies:[se,_],encapsulation:2});let t=e;return t})();export{Dt as HomeComponent};
