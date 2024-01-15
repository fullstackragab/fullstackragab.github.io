"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[156],{5156:(Q,p,c)=>{c.r(p),c.d(p,{BooksModule:()=>j});var s=c(6814),r=c(7133),t=c(9212),l=c(6402),g=c(1474),d=c(7323);function m(o,i){if(1&o&&(t.TgZ(0,"a",15),t._UZ(1,"img",16),t.qZA()),2&o){const n=t.oxw(2);t.Q6J("href",n.book.url,t.LSH),t.xp6(1),t.Q6J("src",n.book.image,t.LSH)("alt",n.book.title)}}function x(o,i){if(1&o&&t._UZ(0,"img",16),2&o){const n=t.oxw(2);t.Q6J("src",n.book.image,t.LSH)("alt",n.book.title)}}function h(o,i){if(1&o&&(t.TgZ(0,"a",17),t._uU(1,"Download source code"),t.qZA()),2&o){const n=t.oxw(2);t.Q6J("href",n.book.sourceCodeUrl,t.LSH)}}function f(o,i){if(1&o&&(t.TgZ(0,"div",18)(1,"div",19),t._uU(2,"Source Code on GitHub"),t.qZA(),t.TgZ(3,"a",20),t._uU(4),t.qZA()()),2&o){const n=t.oxw(2);t.xp6(3),t.Q6J("href",n.book.githubRepoUrl,t.LSH),t.xp6(1),t.Oqu(n.book.githubRepoUrl)}}function k(o,i){if(1&o&&(t.TgZ(0,"div")(1,"div",1)(2,"header"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"a",4)(7,"div",5)(8,"mat-icon"),t._uU(9,"west"),t.qZA(),t.TgZ(10,"div"),t._uU(11,"Books"),t.qZA()()()(),t.TgZ(12,"div",6),t.YNc(13,m,2,3,"a",7)(14,x,1,2,"img",8),t.qZA(),t.TgZ(15,"span",9),t._uU(16),t.qZA(),t.TgZ(17,"div",10)(18,"a",11),t._uU(19,"Buy now!"),t.qZA()(),t.TgZ(20,"p",12),t._uU(21),t.qZA(),t.YNc(22,h,2,1,"a",13)(23,f,5,2,"div",14),t.qZA()()),2&o){const n=t.oxw();t.xp6(3),t.Oqu(n.book.title),t.xp6(10),t.Q6J("ngIf",n.book.isActive),t.xp6(1),t.Q6J("ngIf",!n.book.isActive),t.xp6(2),t.Oqu(n.book.price),t.xp6(5),t.hij(" ",n.description," "),t.xp6(1),t.Q6J("ngIf",n.book.sourceCodeUrl),t.xp6(1),t.Q6J("ngIf",n.book.githubRepoUrl)}}let _=(()=>{class o{constructor(n,e,a){this.booksService=n,this.route=e,this.http=a,this.book=void 0,this.description=""}ngOnInit(){this.book=this.booksService.getBook(this.route.snapshot.params.id),this.book?.descriptionUrl&&this.http.get(this.book?.descriptionUrl,{responseType:"text"}).subscribe(n=>{this.description=n??""})}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(l.y),t.Y36(r.gz),t.Y36(g.eN))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"page-header"],[1,"page-content"],[1,"books-link"],["routerLink","/books"],[1,"link-wrapper"],[1,"image"],["target","_blank",3,"href",4,"ngIf"],[3,"src","alt",4,"ngIf"],[1,"price"],[1,"call-to-action"],["href","https://books2read.com/ap/nmjGGv/Abdelfattah-Ragab"],[1,"content"],["download","","class","download-source-code",3,"href",4,"ngIf"],["class","repo",4,"ngIf"],["target","_blank",3,"href"],[3,"src","alt"],["download","",1,"download-source-code",3,"href"],[1,"repo"],[1,"repo-title"],["target","_blank",1,"repo-link",3,"href"]],template:function(e,a){1&e&&t.YNc(0,k,24,7,"div",0),2&e&&t.Q6J("ngIf",a.book)},dependencies:[s.O5,r.rH,d.Hw],styles:["h2[_ngcontent-%COMP%]{margin:60px auto;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto 20px;display:flex;flex-direction:row;width:90%;justify-content:center}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.9}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.not-available-text[_ngcontent-%COMP%]{color:orange;width:100%;display:flex;justify-content:center;align-items:center}.live-text[_ngcontent-%COMP%]{color:green;width:100%;display:flex;justify-content:center;align-items:center}.books-link[_ngcontent-%COMP%]{position:absolute;top:90px;left:20px;text-decoration:none;outline:none}.books-link[_ngcontent-%COMP%]   .link-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;gap:10px}@media (min-width: 721px){.books-link[_ngcontent-%COMP%]{top:100px;left:80px}}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.price[_ngcontent-%COMP%]{font-size:1.3em;color:var(--background-color-light);margin-bottom:10px;cursor:default}.content[_ngcontent-%COMP%]{font-size:medium;line-height:26px;margin:60px 0 20px;white-space:pre;max-width:100%;text-wrap:wrap}@media (min-width: 760px){.content[_ngcontent-%COMP%]{padding:0 100px;text-indent:-6px}}.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:30px auto;font-weight:500;padding-left:2px;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 768px){.action[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]{width:800px;display:flex;flex-direction:row;align-items:center}}.action[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .action[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .action-title[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-title[_ngcontent-%COMP%]{width:180px;margin:20px 0;font-weight:400}.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{font-weight:400;line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .repo-link[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{line-height:25px;margin-top:10px}@media (min-width: 768px){.action[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%], .repo[_ngcontent-%COMP%]   .paypal-button[_ngcontent-%COMP%]{width:600px;line-height:25px;margin-left:30px;margin-top:0}}.downloadables[_ngcontent-%COMP%]{width:360px;font-size:medium;margin:40px auto 30px;font-weight:500;padding-left:2px;display:flex;align-items:flex-start}@media (min-width: 768px){.downloadables[_ngcontent-%COMP%]{width:800px}}.downloadables[_ngcontent-%COMP%]   .downloadables-title[_ngcontent-%COMP%]{margin-right:20px}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.downloadables[_ngcontent-%COMP%]   .downloadables-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#ff4081;display:block;margin-bottom:5px}.download-link[_ngcontent-%COMP%], .download-source-code[_ngcontent-%COMP%]{color:var(--background-color-light)}"]})}return o})();var u=c(5195);const C=o=>["/books",o];function b(o,i){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA()()),2&o){const n=t.oxw();t.Q6J("routerLink",t.VKq(3,C,n.book.id)),t.xp6(2),t.Q6J("src",n.book.image,t.LSH)("alt",n.book.title)}}let P=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-card"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","wrapper",3,"routerLink",4,"ngIf"],[1,"wrapper",3,"routerLink"],[1,"book"],["mat-card-image","",3,"src","alt"]],template:function(e,a){1&e&&t.YNc(0,b,3,5,"div",0),2&e&&t.Q6J("ngIf",a.book)},dependencies:[s.O5,r.rH,u.G2],styles:[".book[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:40px 20px;max-width:100%;margin:20px auto 30px;cursor:pointer}.book[_ngcontent-%COMP%]:hover{opacity:.9}.book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;max-height:400px}"]})}return o})();function O(o,i){1&o&&t._UZ(0,"app-book-card",8),2&o&&t.Q6J("book",i.$implicit)}function M(o,i){if(1&o&&(t.TgZ(0,"section",5)(1,"div",6),t.YNc(2,O,1,1,"app-book-card",7),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.books)}}function v(o,i){1&o&&t._UZ(0,"app-book-card",8),2&o&&t.Q6J("book",i.$implicit)}function w(o,i){if(1&o&&(t.TgZ(0,"section",5)(1,"header",9),t._uU(2,"Creative Angular Projects"),t.qZA(),t.TgZ(3,"div",6),t.YNc(4,v,1,1,"app-book-card",7),t.qZA()()),2&o){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.creativeAngularProjectsBooks)}}function Z(o,i){1&o&&t._UZ(0,"app-book-card",8),2&o&&t.Q6J("book",i.$implicit)}function y(o,i){if(1&o&&(t.TgZ(0,"section",5)(1,"header",9),t._uU(2,"Creative CSS Projects"),t.qZA(),t.TgZ(3,"div",6),t.YNc(4,Z,1,1,"app-book-card",7),t.qZA()()),2&o){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.creativeCssProjectsBooks)}}const B=[{path:"",component:(()=>{class o{constructor(n){this.booksService=n,this.creativeAngularProjectsBooks=[],this.creativeCssProjectsBooks=[],this.books=[]}ngOnInit(){this.creativeAngularProjectsBooks=this.booksService.getBooks().filter(n=>"Creative Angular Projects"===n.series),this.creativeCssProjectsBooks=this.booksService.getBooks().filter(n=>"Creative CSS Projects"===n.series),this.books=this.booksService.getBooks().filter(n=>"Creative Angular Projects"!==n.series&&"Creative CSS Projects"!==n.series)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(l.y))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-books"]],decls:10,vars:3,consts:[[1,"page-header"],[1,"page-content"],[1,"container"],[1,"info"],["class","section",4,"ngIf"],[1,"section"],[1,"books"],[3,"book",4,"ngFor","ngForOf"],[3,"book"],[1,"section-title"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"header"),t._uU(2,"Books"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3),t._uU(6," The books are available in all known ebook stores in the world, at Amazon, Apple, Scribd and many more. "),t.qZA(),t.YNc(7,M,3,1,"section",4)(8,w,5,1,"section",4)(9,y,5,1,"section",4),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",a.books.length>0),t.xp6(1),t.Q6J("ngIf",a.creativeAngularProjectsBooks.length>0),t.xp6(1),t.Q6J("ngIf",a.creativeCssProjectsBooks.length>0))},dependencies:[s.sg,s.O5,P],styles:[".title[_ngcontent-%COMP%]{margin-top:30px;margin-left:30px;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]{width:100%}.info[_ngcontent-%COMP%]{text-align:center;font-style:italic}.section[_ngcontent-%COMP%]{width:100%;margin-bottom:120px;margin-top:60px}@media (min-width: 721px){.section[_ngcontent-%COMP%]{margin-top:20px}}.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{display:block;width:100%;min-height:60px;line-height:32px;font-size:16px;text-align:center;opacity:.9}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:left}}.section[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;width:100%;margin-top:40px;gap:35px}@media (min-width: 721px){.section[_ngcontent-%COMP%]   .books[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.download-link[_ngcontent-%COMP%]{color:var(--background-color-light)}"]})}return o})(),pathMatch:"full"},{path:":id",component:_}];let T=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(B),r.Bz]})}return o})();var A=c(6385),U=c(4858),J=c(181);let j=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[s.ez,T,U.q,A.t,J.n]})}return o})()}}]);