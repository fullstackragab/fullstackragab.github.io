"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[642],{642:(I,p,i)=>{i.r(p),i.d(p,{CoursesModule:()=>J});var r=i(6814),a=i(7133),t=i(9212),u=i(8854),g=i(1175);function l(e,c){if(1&e&&(t.TgZ(0,"a",10),t._UZ(1,"img",11),t.qZA()),2&e){const n=t.oxw(2);t.Q6J("href",n.course.url,t.LSH),t.xp6(1),t.Q6J("src",n.course.image,t.LSH)("alt",n.course.title)}}function m(e,c){if(1&e&&(t.TgZ(0,"div")(1,"div",1)(2,"header"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"a",4)(7,"div",5)(8,"mat-icon"),t._uU(9,"west"),t.qZA(),t.TgZ(10,"div"),t._uU(11,"Courses"),t.qZA()()()(),t.TgZ(12,"div",6),t.YNc(13,l,2,3,"a",7),t.qZA(),t.TgZ(14,"p",8),t._uU(15),t.qZA(),t.TgZ(16,"div",9),t._uU(17,"Buy now!"),t.qZA()()()),2&e){const n=t.oxw();t.xp6(3),t.Oqu(n.course.title),t.xp6(10),t.Q6J("ngIf",n.course.isActive),t.xp6(2),t.hij(" ",n.course.description," ")}}let d=(()=>{class e{constructor(n,o){this.coursesService=n,this.route=o,this.course=void 0}ngOnInit(){this.course=this.coursesService.getCourse(this.route.snapshot.params.id)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.N),t.Y36(a.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-course-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"page-header"],[1,"page-content"],[1,"courses-link"],["routerLink","/courses"],[1,"link-wrapper"],[1,"image"],["target","_blank",3,"href",4,"ngIf"],[1,"content"],[1,"call-to-action"],["target","_blank",3,"href"],[3,"src","alt"]],template:function(o,s){1&o&&t.YNc(0,m,18,3,"div",0),2&o&&t.Q6J("ngIf",s.course)},dependencies:[r.O5,a.rH,g.Hw],styles:["h2[_ngcontent-%COMP%]{margin:60px auto;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto 20px;display:flex;flex-direction:row;width:90%;justify-content:center}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.9}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.courses-link[_ngcontent-%COMP%]{position:absolute;top:90px;left:20px;text-decoration:none;outline:none}.courses-link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;gap:10px}@media (min-width: 721px){.courses-link[_ngcontent-%COMP%]{top:100px;left:80px}}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.content[_ngcontent-%COMP%]{font-size:medium;line-height:26px;margin:60px 0 20px}"]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-coming-soon"]],decls:3,vars:0,consts:[[1,"coming-soon"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2,"Coming soon.."),t.qZA()())},styles:[".coming-soon[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:auto;display:flex;justify-content:center;align-items:center}"]})}return e})();var f=i(5195);const h=e=>["/courses",e];function x(e,c){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA()()),2&e){const n=t.oxw();t.Q6J("routerLink",t.VKq(3,h,n.course.id)),t.xp6(2),t.Q6J("src",n.course.image,t.LSH)("alt",n.course.title)}}let v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-course-card"]],inputs:{course:"course"},decls:1,vars:1,consts:[["class","wrapper",3,"routerLink",4,"ngIf"],[1,"wrapper",3,"routerLink"],[1,"course"],["mat-card-image","",3,"src","alt"]],template:function(o,s){1&o&&t.YNc(0,x,3,5,"div",0),2&o&&t.Q6J("ngIf",s.course)},dependencies:[r.O5,a.rH,f.G2],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;width:100%;margin:auto}.course[_ngcontent-%COMP%]{cursor:pointer;padding:20px;max-width:100%;margin:auto;display:grid;place-content:center center;place-items:center center}.course[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;max-height:320px}.course[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:32px;height:auto}.course[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:20px;font-size:18px;opacity:.9}.course[_ngcontent-%COMP%]:hover{opacity:.8}.course[_ngcontent-%COMP%]:active{opacity:1}@media (max-width: 721px){.course[_ngcontent-%COMP%]:not(:first-of-type){display:none}}"]})}return e})();function O(e,c){1&e&&t._UZ(0,"app-course-card",8),2&e&&t.Q6J("course",c.$implicit)}function _(e,c){if(1&e&&(t.TgZ(0,"section",5)(1,"div",6),t.YNc(2,O,1,1,"app-course-card",7),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.courses)}}function M(e,c){1&e&&t._UZ(0,"app-coming-soon")}const P=[{path:"",component:(()=>{class e{constructor(n){this.coursesService=n,this.courses=[]}ngOnInit(){this.courses=this.coursesService.getCourses().filter(n=>n.isActive)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-courses"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"page-content"],[1,"container"],["class","section",4,"ngIf"],[4,"ngIf"],[1,"section"],[1,"courses"],[3,"course",4,"ngFor","ngForOf"],[3,"course"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"header"),t._uU(2,"Courses"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2),t.YNc(5,_,3,1,"section",3)(6,M,1,0,"app-coming-soon",4),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngIf",s.courses.length>0),t.xp6(1),t.Q6J("ngIf",0===s.courses.length))},dependencies:[r.sg,r.O5,C,v],styles:[".title[_ngcontent-%COMP%]{margin-top:30px;margin-left:30px;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]{width:100%;margin-bottom:120px;margin-top:60px}@media (min-width: 721px){.section[_ngcontent-%COMP%]{margin-top:20px}}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:block;width:100%;min-height:60px;line-height:32px;font-size:22px;text-align:center;opacity:.9}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:left}}.section[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{display:grid;width:100%;margin:auto;place-content:center center;place-items:center center;gap:35px}"]})}return e})(),pathMatch:"full"},{path:":id",component:d}];let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(P),a.Bz]})}return e})();var w=i(6385),Z=i(4858),T=i(181),A=i(8524);let J=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.ez,y,Z.q,w.t,T.n,A.m]})}return e})()}}]);