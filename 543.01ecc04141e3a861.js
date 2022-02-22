"use strict";(self.webpackChunkfullstackragab=self.webpackChunkfullstackragab||[]).push([[543],{1543:(x,g,r)=>{r.r(g),r.d(g,{ProjectsModule:()=>P});var s=r(9808),c=r(374),t=r(5e3);let p=(()=>{class e{constructor(){this.projects=[{id:"RECIPE-BOOK",title:"Recipe Book",description:"PWA You can install it and use it offline. Simple CRUD application using Ngrx with actions, reducers and effects.",demoUrl:"https://recipe-book-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/recipe-book",image:"assets/images/projects/recipe-book.jpg"},{id:"PWAGRAM",title:"PWAGram",description:"PWA, Offline, Background Sync, Push Notifications, Native Features (Camera, GeoLocation...).",demoUrl:"https://pwagram-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/pwagram",image:"assets/images/projects/pwagram.jpg"},{id:"SHOPPING-STORE",title:"Shopping Store",description:"Build Online E-Commerce Shopping Store Using Angular, Angular Material, & RxJS",demoUrl:"https://shopping-store-v5.netlify.app/",repoUrl:"",image:"assets/images/projects/shopping-store.jpg"},{id:"PASSWORD-GENERATOR",title:"Password Generator",description:"Generate random password using letters, numbers, and symbols",demoUrl:"https://password-generator-v9.netlify.app/",repoUrl:"https://github.com/fullstackragab/password-generator",image:"assets/images/projects/password-generator.jpg"},{id:"TYPING-CHALLENGE",title:"Typing Challenge",description:"Type the random generated sentence in the input box to win!",demoUrl:"https://typing-challenge-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/typing-challenge",image:"assets/images/projects/typing-challenge.jpg"},{id:"WIKIPEDIA-SEARCH",title:"Wikipedia Search",description:"Search wikipedia",demoUrl:"https://wsearch-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/wsearch",image:"assets/images/projects/wsearch.jpg"},{id:"GITHUB-SEARCH",title:"Github Search With Pagination",description:"Search github users with pagination",demoUrl:"https://github-search-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/github-search",image:"assets/images/projects/github-search.jpg"},{id:"TRACK-ORDER-DELIVERY",title:"Track Order Delivery",description:"Track your order delivery on the map",demoUrl:"https://track-delivery-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/track-delivery",image:"assets/images/projects/track-order-delivery.jpg"},{id:"D3-CHARTS",title:"D3 Charts",description:"Data Visualization Using D3",demoUrl:"https://svg-d3-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/svg-d3",image:"assets/images/projects/svg-d3.jpg"},{id:"FITNESS-TRACKER",title:"Fitness Tracker",description:"This is a PWA. You can install it and use it offline. This is a good example of using Angular Material Table with filtering, sorting, and pagination.",demoUrl:"https://fitness-tracker-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/fitness-tracker",image:"assets/images/projects/fitness-tracker.jpg"},{id:"AUTO-MARKET",title:"Auto Market",description:"Auto market stats",demoUrl:"https://auto-market-v5.netlify.app/",repoUrl:"https://github.com/fullstackragab/auto-market",image:"assets/images/projects/auto-market.jpg"}]}getProjects(){return this.projects.slice()}getProject(n){return this.projects.find(o=>o.id===n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var l=r(4834);function d(e,i){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"a",2),t._UZ(5,"img",3),t.qZA(),t.qZA(),t._UZ(6,"mat-divider"),t.TgZ(7,"p",4),t._uU(8),t.qZA(),t.TgZ(9,"a",5),t._uU(10),t.qZA(),t.TgZ(11,"a",5),t._uU(12),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.project.title),t.xp6(2),t.Q6J("href",n.project.demoUrl,t.LSH),t.xp6(1),t.Q6J("src",n.project.image,t.LSH)("alt",n.project.title),t.xp6(3),t.hij(" ",n.project.description," "),t.xp6(1),t.Q6J("href",n.project.demoUrl,t.LSH),t.xp6(1),t.Oqu(n.project.demoUrl),t.xp6(1),t.Q6J("href",n.project.repoUrl,t.LSH),t.xp6(1),t.Oqu(n.project.repoUrl)}}let m=(()=>{class e{constructor(n,o){this.projectsService=n,this.route=o,this.project=void 0}ngOnInit(){this.project=this.projectsService.getProject(this.route.snapshot.params.id)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p),t.Y36(c.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-project-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"image"],["target","_blank",3,"href"],[3,"src","alt"],[1,"content"],["target","_blank",1,"demo",3,"href"]],template:function(n,o){1&n&&t.YNc(0,d,13,9,"div",0),2&n&&t.Q6J("ngIf",o.project)},directives:[s.O5,l.d],styles:["h2[_ngcontent-%COMP%]{margin:10px;text-align:center}.image[_ngcontent-%COMP%]{margin:30px auto;display:flex;flex-direction:row;width:90%;justify-content:center}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:800px;margin:0 auto}mat-divider[_ngcontent-%COMP%]{width:360px;margin:10px auto}@media (min-width: 768px){mat-divider[_ngcontent-%COMP%]{width:800px}}.content[_ngcontent-%COMP%]{width:350px;font-size:medium;line-height:26px;margin:30px auto}@media (min-width: 768px){.content[_ngcontent-%COMP%]{width:800px}}.demo[_ngcontent-%COMP%]{width:360px;font-size:medium;line-height:26px;margin:30px auto;display:block}@media (min-width: 768px){.demo[_ngcontent-%COMP%]{width:800px}}.repo[_ngcontent-%COMP%]{width:360px;font-size:medium;line-height:26px;margin:30px auto}@media (min-width: 768px){.repo[_ngcontent-%COMP%]{width:800px}}"]}),e})();var a=r(9224);const u=function(e){return["/projects",e]};function h(e,i){if(1&e&&(t.TgZ(0,"mat-card",6),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t._UZ(3,"img",7),t.TgZ(4,"mat-card-content"),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&e){const n=i.$implicit;t.Q6J("routerLink",t.VKq(5,u,n.id)),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("src",n.image,t.LSH)("alt",n.title),t.xp6(3),t.hij(" ",n.description," ")}}const f=[{path:"",component:(()=>{class e{constructor(n){this.projectsService=n,this.projects=[]}ngOnInit(){this.projects=this.projectsService.getProjects()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-projects"]],decls:8,vars:1,consts:[[1,"container"],[1,"header"],[1,"title"],[1,"warning"],[1,"projects"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["mat-card-image","",3,"src","alt"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3," Angular Projects "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," If the application is not ready, wait 30 seconds and then refresh the page. "),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,h,7,7,"mat-card",5),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngForOf",o.projects))},directives:[s.sg,a.a8,c.rH,a.n5,a.G2,a.dn],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:20px;text-align:center;box-sizing:border-box}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;align-items:center}}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:10px;margin-left:0;margin-bottom:10px;font-size:x-large;cursor:default}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:#ff4081;padding:10px;margin:20px auto 10px;border:1px solid #ff4081;border-radius:4px;cursor:default}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{margin:10px}}.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:15px;column-gap:15px;padding:20px}}.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{cursor:pointer;margin:20px auto}@media (min-width: 768px){.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin:10px auto}}.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:large;height:60px}.container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px}"]}),e})(),pathMatch:"full"},{path:":id",component:m}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[p],imports:[[s.ez,j,a.QW,l.t]]}),e})()}}]);