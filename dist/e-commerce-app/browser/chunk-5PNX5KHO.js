import{k as S,m as b}from"./chunk-KAKHVXE5.js";import"./chunk-7URCRLYX.js";import{$a as c,Ab as y,Bc as h,Gb as v,Na as s,Nb as a,Ob as u,Qa as r,Ra as p,Yb as x,Zb as _,fb as m,qb as l,ub as g,vb as d,wb as C,xb as f,yb as o,zb as n}from"./chunk-3F5GLBN5.js";import"./chunk-4CLCTAJ7.js";function L(t,i){if(t&1&&(o(0,"div",2)(1,"div",3)(2,"div"),y(3,"img",4),o(4,"div",5)(5,"span",6),a(6),x(7,"uppercase"),n()()()()()),t&2){let e=i.$implicit;r(3),l("src",e.image,s),r(3),u(_(7,2,e.name))}}function A(t,i){if(t&1&&(o(0,"h1",0),a(1,"All Categories:"),n(),o(2,"div",1),C(3,L,8,4,"div",2,d),n()),t&2){let e=v();r(3),f(e.categoryList)}}var I=class t{constructor(i){this._CategoryService=i}categoryList;ngOnInit(){this.getAllCategories()}getAllCategories(){this._CategoryService.getAllCategories().subscribe({next:i=>{this.categoryList=i.data,console.log(this.categoryList)}})}static \u0275fac=function(e){return new(e||t)(p(b))};static \u0275cmp=c({type:t,selectors:[["app-categories"]],decls:1,vars:1,consts:[[1,"text-2xl","p-7","text-gray-900","font-bold"],[1,"row","my-6"],[1,"p-3","md:w-1/4"],[1,"shadow-lg","rounded","p-3","cursor-pointer","text-gray-900","hover:text-primary","duration-500"],["alt","",1,"w-full","rounded","h-[300px]","object-cover",3,"src"],[1,"py-10","text-center"],[1,"text-lg","font-semibold"]],template:function(e,w){e&1&&m(0,A,5,0),e&2&&g(w.categoryList?0:-1)},dependencies:[S,h],encapsulation:2})};export{I as CategoriesComponent};
