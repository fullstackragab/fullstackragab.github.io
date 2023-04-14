"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[906],{7906:(S,p,i)=>{i.r(p),i.d(p,{BooksModule:()=>N});var c=i(6895),l=i(3369),o=i(4650),s=i(7388),g=i(3336),r=i(4850);function d(t,e){if(1&t&&(o.TgZ(0,"a",15),o._UZ(1,"img",16),o.qZA()),2&t){const n=o.oxw(2);o.Q6J("href",n.book.url,o.LSH),o.xp6(1),o.Q6J("src",n.book.image,o.LSH)("alt",n.book.title)}}function m(t,e){if(1&t&&o._UZ(0,"img",16),2&t){const n=o.oxw(2);o.Q6J("src",n.book.image,o.LSH)("alt",n.book.title)}}function _(t,e){1&t&&(o.TgZ(0,"div",17)(1,"div",18),o._uU(2,"Live"),o.qZA()())}function x(t,e){1&t&&(o.TgZ(0,"div",19)(1,"div",18),o._uU(2,"Not available"),o.qZA()())}function f(t,e){if(1&t&&(o.TgZ(0,"div",20)(1,"div",21),o._uU(2,"Read on Amazon Kindle"),o.qZA(),o.TgZ(3,"a",22),o._uU(4),o.qZA()()),2&t){const n=o.oxw(2);o.xp6(3),o.Q6J("href",n.book.url,o.LSH),o.xp6(1),o.Oqu(n.book.title)}}function k(t,e){if(1&t&&(o.TgZ(0,"div",23)(1,"div",24),o._uU(2,"Source Code on GitHub"),o.qZA(),o.TgZ(3,"a",25),o._uU(4),o.qZA()()),2&t){const n=o.oxw(2);o.xp6(3),o.Q6J("href",n.book.githubRepoUrl,o.LSH),o.xp6(1),o.Oqu(n.book.githubRepoUrl)}}function u(t,e){if(1&t&&(o.TgZ(0,"a",15),o._uU(1),o.qZA()),2&t){const n=o.oxw().$implicit;o.Q6J("href",n.url,o.LSH),o.xp6(1),o.Oqu(n.title)}}function C(t,e){if(1&t&&(o.TgZ(0,"a",31),o._uU(1),o.qZA()),2&t){const n=o.oxw().$implicit;o.Q6J("href",n.url,o.LSH)("download",n.filename),o.xp6(1),o.Oqu(n.title)}}function h(t,e){if(1&t&&(o.ynx(0),o.YNc(1,u,2,2,"a",7),o.YNc(2,C,2,3,"a",30),o.BQk()),2&t){const n=e.$implicit;o.xp6(1),o.Q6J("ngIf",n.isExternal),o.xp6(1),o.Q6J("ngIf",!n.isExternal)}}function b(t,e){if(1&t&&(o.TgZ(0,"div",26)(1,"div",27),o._uU(2,"Downloadables:"),o.qZA(),o.TgZ(3,"div",28),o.YNc(4,h,3,2,"ng-container",29),o.qZA()()),2&t){const n=o.oxw(2);o.xp6(4),o.Q6J("ngForOf",n.book.downloadables)}}function O(t,e){if(1&t&&(o.TgZ(0,"div")(1,"div",1)(2,"header"),o._uU(3,"Book"),o.qZA()(),o.TgZ(4,"div",2)(5,"h2"),o._uU(6),o.qZA(),o.TgZ(7,"div",3)(8,"a",4)(9,"div",5)(10,"mat-icon"),o._uU(11,"west"),o.qZA(),o.TgZ(12,"div"),o._uU(13,"Books"),o.qZA()()()(),o.TgZ(14,"div",6),o.YNc(15,d,2,3,"a",7),o.YNc(16,m,1,2,"img",8),o.qZA(),o.YNc(17,_,3,0,"div",9),o.YNc(18,x,3,0,"div",10),o._UZ(19,"br")(20,"br")(21,"mat-divider"),o.TgZ(22,"p",11),o._uU(23),o.qZA(),o.YNc(24,f,5,2,"div",12),o.YNc(25,k,5,2,"div",13),o.YNc(26,b,5,1,"div",14),o.qZA()()),2&t){const n=o.oxw();o.xp6(6),o.Oqu(n.book.title),o.xp6(9),o.Q6J("ngIf",n.book.isActive),o.xp6(1),o.Q6J("ngIf",!n.book.isActive),o.xp6(1),o.Q6J("ngIf",n.book.isActive),o.xp6(1),o.Q6J("ngIf",!n.book.isActive),o.xp6(5),o.hij(" ",n.book.description," "),o.xp6(1),o.Q6J("ngIf",n.book.isActive),o.xp6(1),o.Q6J("ngIf",n.book.githubRepoUrl),o.xp6(1),o.Q6J("ngIf",n.book.downloadables)}}let v=(()=>{class t{constructor(n,a){this.booksService=n,this.route=a,this.book=void 0}ngOnInit(){this.book=this.booksService.getBook(this.route.snapshot.params.id)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(s.y),o.Y36(l.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"page-header"],[1,"page-content"],[1,"books-link"],["routerLink","/books"],[1,"link-wrapper"],[1,"image"],["target","_blank",3,"href",4,"ngIf"],[3,"src","alt",4,"ngIf"],["class","live-text",4,"ngIf"],["class","not-available-text",4,"ngIf"],[1,"content"],["class","action",4,"ngIf"],["class","repo",4,"ngIf"],["class","downloadables",4,"ngIf"],["target","_blank",3,"href"],[3,"src","alt"],[1,"live-text"],[1,"text"],[1,"not-available-text"],[1,"action"],[1,"action-title"],["target","_blank",1,"paypal-button",3,"href"],[1,"repo"],[1,"repo-title"],["target","_blank",1,"repo-link",3,"href"],[1,"downloadables"],[1,"downloadables-title"],[1,"downloadables-content"],[4,"ngFor","ngForOf"],["target","_self",3,"href","download",4,"ngIf"],["target","_self",3,"href","download"]],template:function(n,a){1&n&&o.YNc(0,O,27,9,"div",0),2&n&&o.Q6J("ngIf",a.book)},dependencies:[c.sg,c.O5,l.rH,g.Hw,r.d],styles:["h2[_ngcontent-%COMP%]{margin:60px auto;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto 60px;display:flex;flex-direction:row;width:90%;justify-content:center}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.9}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.not-available-text[_ngcontent-%COMP%]{color:orange;width:100%;display:flex;justify-content:center;align-items:center}.live-text[_ngcontent-%COMP%]{color:green;width:100%;display:flex;justify-content:center;align-items:center}.books-link[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;text-decoration:none;outline:none}.books-link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;gap:10px}@media (min-width: 721px){.books-link[_ngcontent-%COMP%]{top:40px;left:80px}}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.content[_ngcontent-%COMP%]{font-size:medium;line-height:26px;margin:60px auto 30px}@media (min-width: 768px){.content[_ngcontent-%COMP%]{width:800px}}.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:30px auto;font-weight:500;padding-left:2px;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 768px){.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:800px;display:flex;flex-direction:row;align-items:center}}.action[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .action[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%]{width:180px;margin:20px 0;font-weight:400}.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{font-weight:400;line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.downloadables[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:40px auto 30px;font-weight:500;padding-left:2px;display:flex;align-items:flex-start}@media (min-width: 768px){.downloadables[_ngcontent-%COMP%]{width:800px}}.downloadables[_ngcontent-%COMP%]   .downloadables-title[_ngcontent-%COMP%]{margin-right:20px}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#ff4081;display:block;margin-bottom:5px}"]}),t})();var M=i(3546);const w=function(t){return["/books",t]};function P(t,e){if(1&t&&(o.TgZ(0,"div",1)(1,"div",2),o._UZ(2,"img",3),o.qZA()()),2&t){const n=o.oxw();o.Q6J("routerLink",o.VKq(3,w,n.book.id)),o.xp6(2),o.Q6J("src",n.book.image,o.LSH)("alt",n.book.title)}}let B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-card"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","wrapper",3,"routerLink",4,"ngIf"],[1,"wrapper",3,"routerLink"],[1,"book"],["mat-card-image","",3,"src","alt"]],template:function(n,a){1&n&&o.YNc(0,P,3,5,"div",0),2&n&&o.Q6J("ngIf",a.book)},dependencies:[c.O5,l.rH,M.G2],styles:[".book[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:40px 20px;max-width:100%;margin:20px auto 30px;cursor:pointer}.book[_ngcontent-%COMP%]:hover{opacity:.9}.book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;max-height:400px}"]}),t})();function Z(t,e){1&t&&o._UZ(0,"app-book-card",8),2&t&&o.Q6J("book",e.$implicit)}function T(t,e){if(1&t&&(o.TgZ(0,"section",4)(1,"header",5),o._uU(2,"Angular One Topic Series"),o.qZA(),o.TgZ(3,"div",6),o.YNc(4,Z,1,1,"app-book-card",7),o.qZA()()),2&t){const n=o.oxw();o.xp6(4),o.Q6J("ngForOf",n.angularOneTopicBooks)}}function A(t,e){1&t&&o._UZ(0,"app-book-card",8),2&t&&o.Q6J("book",e.$implicit)}function y(t,e){if(1&t&&(o.TgZ(0,"section",4)(1,"header",5),o._uU(2,"Angular Complete Application Series"),o.qZA(),o.TgZ(3,"div",6)(4,"div",6),o.YNc(5,A,1,1,"app-book-card",7),o.qZA()()()),2&t){const n=o.oxw();o.xp6(5),o.Q6J("ngForOf",n.angularCompleteApplicationBooks)}}function J(t,e){1&t&&o._UZ(0,"app-book-card",8),2&t&&o.Q6J("book",e.$implicit)}function Q(t,e){if(1&t&&(o.TgZ(0,"section",4)(1,"header",5),o._uU(2,"Other Books"),o.qZA(),o.TgZ(3,"div",6),o.YNc(4,J,1,1,"app-book-card",7),o.qZA()()),2&t){const n=o.oxw();o.xp6(4),o.Q6J("ngForOf",n.angularOtherBooks)}}const U=[{path:"",component:(()=>{class t{constructor(n){this.booksService=n,this.angularOneTopicBooks=[],this.angularCompleteApplicationBooks=[],this.angularOtherBooks=[]}ngOnInit(){this.angularOneTopicBooks=this.booksService.getBooks().filter(n=>"Angular One Topic"===n.series),this.angularCompleteApplicationBooks=this.booksService.getBooks().filter(n=>"Angulr Complete Application"===n.series),this.angularOtherBooks=this.booksService.getBooks().filter(n=>"Other"===n.series)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(s.y))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books"]],decls:8,vars:3,consts:[[1,"page-header"],[1,"page-content"],[1,"container"],["class","section",4,"ngIf"],[1,"section"],[1,"section-title"],[1,"books"],[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(n,a){1&n&&(o.TgZ(0,"div",0)(1,"header"),o._uU(2,"Books"),o.qZA()(),o.TgZ(3,"div",1)(4,"div",2),o.YNc(5,T,5,1,"section",3),o.YNc(6,y,6,1,"section",3),o.YNc(7,Q,5,1,"section",3),o.qZA()()),2&n&&(o.xp6(5),o.Q6J("ngIf",a.angularOneTopicBooks.length>0),o.xp6(1),o.Q6J("ngIf",a.angularCompleteApplicationBooks.length>0),o.xp6(1),o.Q6J("ngIf",a.angularOtherBooks.length>0))},dependencies:[c.sg,c.O5,B],styles:[".title[_ngcontent-%COMP%]{margin-top:30px;margin-left:30px;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]{width:100%}@media (min-width: 721px){.container[_ngcontent-%COMP%]{padding:60px}}.section[_ngcontent-%COMP%]{width:100%;margin-bottom:120px;margin-top:60px}@media (min-width: 721px){.section[_ngcontent-%COMP%]{margin-top:20px}}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:block;width:100%;min-height:60px;line-height:32px;font-size:28px;text-align:center;opacity:.9}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:left}}.section[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;width:100%;margin-top:40px;gap:35px}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]}),t})(),pathMatch:"full"},{path:":id",component:v}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(U),l.Bz]}),t})();var q=i(9350),Y=i(104);let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.ez,I,q.q,r.t,Y.n]}),t})()}}]);