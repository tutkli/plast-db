"use strict";(self.webpackChunkplast_db=self.webpackChunkplast_db||[]).push([[820],{2820:(h,r,a)=>{a.r(r),a.d(r,{default:()=>s});var e=a(8274),l=a(6895),m=a(1962),p=a(590),c=a(3900),_=a(9769);function x(n,i){if(1&n&&(e.TgZ(0,"p",26),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.name))}}function g(n,i){1&n&&(e.ynx(0),e._uU(1,","),e.BQk())}function d(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.YNc(2,g,2,0,"ng-container",27),e.qZA()),2&n){const t=i.$implicit,o=i.last;e.xp6(1),e.hij(" ",t.name,""),e.xp6(1),e.Q6J("ngIf",!o)}}function u(n,i){if(1&n&&(e.TgZ(0,"div",29),e._UZ(1,"img",30),e.TgZ(2,"p",31),e._uU(3),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",null==t.character.images.webp?null:t.character.images.webp.image_url,e.LSH)("alt",t.character.name+" portrait"),e.xp6(2),e.Oqu(t.character.name)}}function f(n,i){if(1&n&&(e.ynx(0),e.YNc(1,u,4,3,"div",28),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf","Main"===t.role)}}const Z=function(n,i){return{"bg-green-600":n,"bg-red-500":i}};function A(n,i){if(1&n&&(e.TgZ(0,"section",1)(1,"header",2)(2,"p",3),e._uU(3),e.qZA(),e.TgZ(4,"p",4),e._uU(5),e.qZA(),e.TgZ(6,"div",5),e.YNc(7,x,3,3,"p",6),e.qZA(),e.TgZ(8,"div",5)(9,"p")(10,"span",7),e._uU(11,"Ranked:"),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"p")(14,"span",7),e._uU(15,"Popularity:"),e.qZA(),e._uU(16),e.qZA()()(),e.TgZ(17,"div",8)(18,"section",9),e._UZ(19,"img",10),e.TgZ(20,"div",11)(21,"div",12)(22,"p"),e._uU(23,"SCORE"),e.qZA(),e.TgZ(24,"p"),e._uU(25),e.qZA()(),e.TgZ(26,"p",13),e._uU(27),e.qZA(),e.TgZ(28,"div",14)(29,"p",15)(30,"span",16),e._uU(31,"Type:"),e.qZA(),e._uU(32),e.qZA(),e.TgZ(33,"p",15)(34,"span",16),e._uU(35,"Aired:"),e.qZA(),e._uU(36),e.ALo(37,"date"),e.ALo(38,"date"),e.qZA(),e.TgZ(39,"p",17)(40,"span",16),e._uU(41,"Studios:"),e.qZA(),e.YNc(42,d,3,2,"span",18),e.qZA()()()(),e.TgZ(43,"section",19)(44,"article",20)(45,"div",21)(46,"h2",22),e._uU(47,"Synopsis"),e.qZA(),e._UZ(48,"div",23),e.qZA(),e.TgZ(49,"p",24),e._uU(50),e.qZA()(),e.TgZ(51,"div",20)(52,"div",21)(53,"h2",22),e._uU(54,"Main Characters"),e.qZA(),e._UZ(55,"div",23),e.qZA(),e.TgZ(56,"div",25),e.YNc(57,f,2,1,"ng-container",18),e.ALo(58,"async"),e.qZA()()()()()),2&n){const t=i.ngIf,o=e.oxw();e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.title_japanese),e.xp6(2),e.Q6J("ngForOf",t.genres),e.xp6(5),e.hij(" #",t.rank," "),e.xp6(4),e.hij(" #",t.popularity," "),e.xp6(3),e.Q6J("src",null==t.images.webp?null:t.images.webp.large_image_url,e.LSH)("alt",t.title+" front cover"),e.xp6(6),e.Oqu(t.score),e.xp6(1),e.Q6J("ngClass",e.WLB(22,Z,t.airing,!t.airing)),e.xp6(1),e.hij(" ",t.status," "),e.xp6(5),e.hij(" ",t.type,""),e.xp6(4),e.AsE(" From ",e.lcZ(37,16,t.aired.from)," to ",e.lcZ(38,18,t.aired.to)||"unknown"," "),e.xp6(6),e.Q6J("ngForOf",t.studios),e.xp6(8),e.Oqu(t.synopsis),e.xp6(7),e.Q6J("ngForOf",e.lcZ(58,20,o.animeCharacters$))}}class s{constructor(){this.activatedRoute=(0,e.f3M)(m.gz),this.animeService=(0,e.f3M)(_.o)}ngOnInit(){this.anime$=this.activatedRoute.url.pipe((0,p.P)(),(0,c.w)(i=>{const t=parseInt(i[0]?.path,10);return this.animeService.getAnimeDetail(t)})),this.animeCharacters$=this.activatedRoute.url.pipe((0,p.P)(),(0,c.w)(i=>{const t=parseInt(i[0]?.path,10);return this.animeService.getAnimeCharacters(t)}))}}s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["plast-anime-detail"]],standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[["class","mt-[72px] sm:mt-[80px]",4,"ngIf"],[1,"mt-[72px]","sm:mt-[80px]"],[1,"flex","flex-col","gap-3","bg-black","text-white","py-5","px-6","lg:px-20","xl:pl-[450px]"],[1,"font-semibold","text-3xl"],[1,"opacity-80","text-sm"],[1,"flex","flex-row","flex-wrap","gap-3"],["class","py-1 px-8 border-2 border-solid border-white text-xs sm:text-sm",4,"ngFor","ngForOf"],[1,"font-medium","text-sm"],[1,"p-6","lg:px-20"],[1,"flex","flex-col","md:flex-row","relative","items-center","md:items-start"],["width","350","height","500",1,"xl:mt-[-200px]","xl:min-w-[350px]","xl:w-[350px]",3,"src","alt"],[1,"flex","flex-col","py-6","md:px-6","md:py-0","gap-3","w-full"],[1,"flex","flex-col","justify-center","items-center","font-semibold","text-white","bg-amber-500"],[1,"font-semibold","text-white","p-2","text-center",3,"ngClass"],[1,"border-2","border-solid","border-black"],[1,"p-2","border-2","border-solid","border-b-black"],[1,"font-semibold"],[1,"p-2"],[4,"ngFor","ngForOf"],[1,"py-6","flex","flex-col","gap-10"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-row","flex-wrap","sm:flex-nowrap","gap-3","justify-between","items-center"],[1,"w-fit","whitespace-nowrap","font-semibold","text-lg","sm:text-xl","md:text-2xl"],[1,"bg-gray-400","h-1.5","w-full"],[1,"anime-detail__synopsis__text"],[1,"grid","gap-3","grid-cols-2","sm:grid-cols-3","lg:grid-cols-5"],[1,"py-1","px-8","border-2","border-solid","border-white","text-xs","sm:text-sm"],[4,"ngIf"],["class","flex flex-col items-center",4,"ngIf"],[1,"flex","flex-col","items-center"],["width","225","height","350",1,"w-full",3,"src","alt"],[1,"p-2","w-full","bg-black","text-white","font-semibold"]],template:function(i,t){1&i&&(e.YNc(0,A,59,25,"section",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,t.anime$))},dependencies:[l.sg,l.O5,l.Ov,l.gd,l.uU,l.mk],encapsulation:2,changeDetection:0})}}]);