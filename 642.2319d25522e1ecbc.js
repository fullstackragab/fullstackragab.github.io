"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[642],{642:(k,p,i)=>{i.r(p),i.d(p,{CoursesModule:()=>A});var a=i(6814),r=i(7133),t=i(9212),g=i(8854),d=i(1175),l=i(6385);function u(n,s){if(1&n&&(t.TgZ(0,"a",12),t._UZ(1,"img",13),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("href",e.course.url,t.LSH),t.xp6(1),t.Q6J("src",e.course.image,t.LSH)("alt",e.course.title)}}function m(n,s){if(1&n&&(t.TgZ(0,"div")(1,"div",1)(2,"header"),t._uU(3,"Course"),t.qZA()(),t.TgZ(4,"div",2)(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"div",3)(8,"a",4)(9,"div",5)(10,"mat-icon"),t._uU(11,"west"),t.qZA(),t.TgZ(12,"div"),t._uU(13,"Courses"),t.qZA()()()(),t.TgZ(14,"div",6),t.YNc(15,u,2,3,"a",7),t.qZA(),t._UZ(16,"mat-divider"),t.TgZ(17,"section",8)(18,"div",9),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p",10),t._uU(21),t.qZA()(),t.TgZ(22,"section",8)(23,"div",9),t._uU(24,"Course on Udemy"),t.qZA(),t.TgZ(25,"div",10)(26,"a",11),t._uU(27),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.course.title),t.xp6(9),t.Q6J("ngIf",e.course.isActive),t.xp6(6),t.hij(" ",e.course.description," "),t.xp6(5),t.Q6J("href",e.course.url,t.LSH),t.xp6(1),t.Oqu(e.course.title)}}let x=(()=>{class n{constructor(e,o){this.coursesService=e,this.route=o,this.course=void 0}ngOnInit(){this.course=this.coursesService.getCourse(this.route.snapshot.params.id)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.N),t.Y36(r.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-course-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"page-header"],[1,"page-content"],[1,"courses-link"],["routerLink","/courses"],[1,"link-wrapper"],[1,"image"],["target","_blank",3,"href",4,"ngIf"],[1,"section"],[1,"label"],[1,"content"],["target","_blank",1,"udemy-link",3,"href"],["target","_blank",3,"href"],[3,"src","alt"]],template:function(o,c){1&o&&t.YNc(0,m,28,5,"div",0),2&o&&t.Q6J("ngIf",c.course)},dependencies:[a.O5,r.rH,d.Hw,l.d],styles:["h2[_ngcontent-%COMP%]{margin:60px auto;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto 60px;display:flex;flex-direction:row;justify-content:center}@media (min-width: 721px){.image[_ngcontent-%COMP%]{width:90%}}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.9}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.not-available-text[_ngcontent-%COMP%]{color:orange;width:100%;display:flex;justify-content:center;align-items:center}.live-text[_ngcontent-%COMP%]{color:#90ee90;width:100%;display:flex;justify-content:center;align-items:center;cursor:default}.courses-link[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;text-decoration:none;outline:none}.courses-link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;gap:10px}@media (min-width: 721px){.courses-link[_ngcontent-%COMP%]{top:40px;left:80px}}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:30px auto;font-weight:500;padding-left:2px;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 768px){.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:800px;display:flex;flex-direction:row;align-items:center}}.action[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .action[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%]{width:180px;margin:20px 0;font-weight:400}.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{font-weight:400;line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.downloadables[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:40px auto 30px;font-weight:500;padding-left:2px;display:flex;align-items:flex-start}@media (min-width: 768px){.downloadables[_ngcontent-%COMP%]{width:800px}}.downloadables[_ngcontent-%COMP%]   .downloadables-title[_ngcontent-%COMP%]{margin-right:20px}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#ff4081;display:block;margin-bottom:5px}.label[_ngcontent-%COMP%]{text-align:left;opacity:.8;font-size:18px;margin-bottom:20px}.section[_ngcontent-%COMP%]{width:100%;max-width:750px;margin-bottom:60px}.udemy-link[_ngcontent-%COMP%]{color:var(--background-color-light);font-size:16px}.udemy-link[_ngcontent-%COMP%]:hover{opacity:1!important;filter:brightness(1.5)}"]})}return n})(),C=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-coming-soon"]],decls:3,vars:0,consts:[[1,"coming-soon"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2,"Coming soon.."),t.qZA()())},styles:[".coming-soon[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:auto;display:flex;justify-content:center;align-items:center}"]})}return n})();var f=i(5195);const h=n=>["/courses",n];function _(n,s){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA()()),2&n){const e=t.oxw();t.Q6J("routerLink",t.VKq(3,h,e.course.id)),t.xp6(2),t.Q6J("src",e.course.image,t.LSH)("alt",e.course.title)}}let O=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-course-card"]],inputs:{course:"course"},decls:1,vars:1,consts:[["class","wrapper",3,"routerLink",4,"ngIf"],[1,"wrapper",3,"routerLink"],[1,"course"],["mat-card-image","",3,"src","alt"]],template:function(o,c){1&o&&t.YNc(0,_,3,5,"div",0),2&o&&t.Q6J("ngIf",c.course)},dependencies:[a.O5,r.rH,f.G2],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.course[_ngcontent-%COMP%]{cursor:pointer;padding:20px;max-width:100%;margin:20px 20px 30px;display:flex;justify-content:flex-start;align-items:center}.course[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;max-height:320px}.course[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:32px;height:auto}.course[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:20px;font-size:18px;opacity:.9}.course[_ngcontent-%COMP%]:hover{opacity:.8}.course[_ngcontent-%COMP%]:active{opacity:1}@media (max-width: 721px){.course[_ngcontent-%COMP%]:not(:first-of-type){display:none}}"]})}return n})();function M(n,s){1&n&&t._UZ(0,"app-course-card",8),2&n&&t.Q6J("course",s.$implicit)}function P(n,s){if(1&n&&(t.TgZ(0,"section",5)(1,"div",6),t.YNc(2,M,1,1,"app-course-card",7),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.courses)}}function w(n,s){1&n&&t._UZ(0,"app-coming-soon")}const v=[{path:"",component:(()=>{class n{constructor(e){this.coursesService=e,this.courses=[]}ngOnInit(){this.courses=this.coursesService.getCourses().filter(e=>e.isActive)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.N))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-courses"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"page-content"],[1,"container"],["class","section",4,"ngIf"],[4,"ngIf"],[1,"section"],[1,"courses"],[3,"course",4,"ngFor","ngForOf"],[3,"course"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"header"),t._uU(2,"Courses"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2),t.YNc(5,P,3,1,"section",3)(6,w,1,0,"app-coming-soon",4),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngIf",c.courses.length>0),t.xp6(1),t.Q6J("ngIf",0===c.courses.length))},dependencies:[a.sg,a.O5,C,O],styles:[".title[_ngcontent-%COMP%]{margin-top:30px;margin-left:30px;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 721px){.container[_ngcontent-%COMP%]{padding:60px}}.section[_ngcontent-%COMP%]{width:100%;margin-bottom:120px;margin-top:60px}@media (min-width: 721px){.section[_ngcontent-%COMP%]{margin-top:20px}}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:block;width:100%;min-height:60px;line-height:32px;font-size:22px;text-align:center;opacity:.9}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:left}}.section[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;width:100%;margin-top:40px;gap:35px}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}"]})}return n})(),pathMatch:"full"},{path:":id",component:x}];let y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(v),r.Bz]})}return n})();var Z=i(4858),T=i(181),b=i(8524);let A=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[a.ez,y,Z.q,l.t,T.n,b.m]})}return n})()}}]);