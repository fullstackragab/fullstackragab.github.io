"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[232],{4232:(A,a,i)=>{i.r(a),i.d(a,{CoursesModule:()=>b});var s=i(6895),r=i(3369),n=i(4650),p=i(8786),l=i(3336),g=i(4850);function u(t,o){if(1&t&&(n.TgZ(0,"a",12),n._UZ(1,"img",13),n.qZA()),2&t){const e=n.oxw(2);n.Q6J("href",e.course.url,n.LSH),n.xp6(1),n.Q6J("src",e.course.image,n.LSH)("alt",e.course.title)}}function d(t,o){if(1&t&&(n.TgZ(0,"div")(1,"div",1)(2,"header"),n._uU(3,"Course"),n.qZA()(),n.TgZ(4,"div",2)(5,"h2"),n._uU(6),n.qZA(),n.TgZ(7,"div",3)(8,"a",4)(9,"div",5)(10,"mat-icon"),n._uU(11,"west"),n.qZA(),n.TgZ(12,"div"),n._uU(13,"Courses"),n.qZA()()()(),n.TgZ(14,"div",6),n.YNc(15,u,2,3,"a",7),n.qZA(),n._UZ(16,"mat-divider"),n.TgZ(17,"section",8)(18,"div",9),n._uU(19,"Description"),n.qZA(),n.TgZ(20,"p",10),n._uU(21),n.qZA()(),n.TgZ(22,"section",8)(23,"div",9),n._uU(24,"Course on Udemy"),n.qZA(),n.TgZ(25,"div",10)(26,"a",11),n._uU(27),n.qZA()()()()()),2&t){const e=n.oxw();n.xp6(6),n.Oqu(e.course.title),n.xp6(9),n.Q6J("ngIf",e.course.isActive),n.xp6(6),n.hij(" ",e.course.description," "),n.xp6(5),n.Q6J("href",e.course.url,n.LSH),n.xp6(1),n.Oqu(e.course.title)}}let m=(()=>{class t{constructor(e,c){this.coursesService=e,this.route=c,this.course=void 0}ngOnInit(){this.course=this.coursesService.getCourse(this.route.snapshot.params.id)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.N),n.Y36(r.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-course-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"page-header"],[1,"page-content"],[1,"courses-link"],["routerLink","/courses"],[1,"link-wrapper"],[1,"image"],["target","_blank",3,"href",4,"ngIf"],[1,"section"],[1,"label"],[1,"content"],["target","_blank",1,"udemy-link",3,"href"],["target","_blank",3,"href"],[3,"src","alt"]],template:function(e,c){1&e&&n.YNc(0,d,28,5,"div",0),2&e&&n.Q6J("ngIf",c.course)},dependencies:[s.O5,r.rH,l.Hw,g.d],styles:["h2[_ngcontent-%COMP%]{margin:60px auto;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto 60px;display:flex;flex-direction:row;justify-content:center}@media (min-width: 721px){.image[_ngcontent-%COMP%]{width:90%}}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.9}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.not-available-text[_ngcontent-%COMP%]{color:orange;width:100%;display:flex;justify-content:center;align-items:center}.live-text[_ngcontent-%COMP%]{color:#90ee90;width:100%;display:flex;justify-content:center;align-items:center;cursor:default}.courses-link[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;text-decoration:none;outline:none}.courses-link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;gap:10px}@media (min-width: 721px){.courses-link[_ngcontent-%COMP%]{top:40px;left:80px}}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:30px auto;font-weight:500;padding-left:2px;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 768px){.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:800px;display:flex;flex-direction:row;align-items:center}}.action[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .action[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%]{width:180px;margin:20px 0;font-weight:400}.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{font-weight:400;line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.downloadables[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:40px auto 30px;font-weight:500;padding-left:2px;display:flex;align-items:flex-start}@media (min-width: 768px){.downloadables[_ngcontent-%COMP%]{width:800px}}.downloadables[_ngcontent-%COMP%]   .downloadables-title[_ngcontent-%COMP%]{margin-right:20px}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#ff4081;display:block;margin-bottom:5px}.label[_ngcontent-%COMP%]{text-align:left;opacity:.8;font-size:18px;margin-bottom:20px}.section[_ngcontent-%COMP%]{width:100%;max-width:750px;margin-bottom:60px}.udemy-link[_ngcontent-%COMP%]{color:var(--background-color-light);font-size:16px}.udemy-link[_ngcontent-%COMP%]:hover{opacity:1!important;filter:brightness(1.5)}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-coming-soon"]],decls:3,vars:0,consts:[[1,"coming-soon"]],template:function(e,c){1&e&&(n.TgZ(0,"div",0)(1,"p"),n._uU(2,"Coming soon.."),n.qZA()())},styles:[".coming-soon[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:auto;display:flex;justify-content:center;align-items:center}"]}),t})();var x=i(3546);const f=function(t){return["/courses",t]};function h(t,o){if(1&t&&(n.TgZ(0,"div",1)(1,"div",2),n._UZ(2,"img",3),n.qZA()()),2&t){const e=n.oxw();n.Q6J("routerLink",n.VKq(3,f,e.course.id)),n.xp6(2),n.Q6J("src",e.course.image,n.LSH)("alt",e.course.title)}}let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-course-card"]],inputs:{course:"course"},decls:1,vars:1,consts:[["class","wrapper",3,"routerLink",4,"ngIf"],[1,"wrapper",3,"routerLink"],[1,"course"],["mat-card-image","",3,"src","alt"]],template:function(e,c){1&e&&n.YNc(0,h,3,5,"div",0),2&e&&n.Q6J("ngIf",c.course)},dependencies:[s.O5,r.rH,x.G2],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.course[_ngcontent-%COMP%]{cursor:pointer;padding:20px;max-width:100%;margin:20px 20px 30px;display:flex;justify-content:flex-start;align-items:center}.course[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;max-height:320px}.course[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:32px;height:auto}.course[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:20px;font-size:18px;opacity:.9}.course[_ngcontent-%COMP%]:hover{opacity:.8}.course[_ngcontent-%COMP%]:active{opacity:1}@media (max-width: 721px){.course[_ngcontent-%COMP%]:not(:first-of-type){display:none}}"]}),t})();function M(t,o){1&t&&n._UZ(0,"app-course-card",8),2&t&&n.Q6J("course",o.$implicit)}function _(t,o){if(1&t&&(n.TgZ(0,"section",5)(1,"div",6),n.YNc(2,M,1,1,"app-course-card",7),n.qZA()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.courses)}}function P(t,o){1&t&&n._UZ(0,"app-coming-soon")}const w=[{path:"",component:(()=>{class t{constructor(e){this.coursesService=e,this.courses=[]}ngOnInit(){this.courses=this.coursesService.getCourses().filter(e=>e.isActive)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.N))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-courses"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"page-content"],[1,"container"],["class","section",4,"ngIf"],[4,"ngIf"],[1,"section"],[1,"courses"],[3,"course",4,"ngFor","ngForOf"],[3,"course"]],template:function(e,c){1&e&&(n.TgZ(0,"div",0)(1,"header"),n._uU(2,"Courses"),n.qZA()(),n.TgZ(3,"div",1)(4,"div",2),n.YNc(5,_,3,1,"section",3),n.YNc(6,P,1,0,"app-coming-soon",4),n.qZA()()),2&e&&(n.xp6(5),n.Q6J("ngIf",c.courses.length>0),n.xp6(1),n.Q6J("ngIf",0===c.courses.length))},dependencies:[s.sg,s.O5,C,O],styles:[".title[_ngcontent-%COMP%]{margin-top:30px;margin-left:30px;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 721px){.container[_ngcontent-%COMP%]{padding:60px}}.section[_ngcontent-%COMP%]{width:100%;margin-bottom:120px;margin-top:60px}@media (min-width: 721px){.section[_ngcontent-%COMP%]{margin-top:20px}}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:block;width:100%;min-height:60px;line-height:32px;font-size:22px;text-align:center;opacity:.9}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:left}}.section[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;width:100%;margin-top:40px;gap:35px}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}"]}),t})(),pathMatch:"full"},{path:":id",component:m}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(w),r.Bz]}),t})();var y=i(9350),Z=i(104),T=i(2271);let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,v,y.q,g.t,Z.n,T.m]}),t})()}}]);