(()=>{var e={};e.id=904,e.ids=[904],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},22498:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=s(70260),t=s(28203),i=s(25155),o=s.n(i),n=s(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(r,l);let d=["",{children:["(pages)",{children:["user",{children:["[user]",{children:["(pages)",{children:["followers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,70271)),"/Users/tahaparacha/Downloads/Coding/Main Projects/seagull/website/src/app/(pages)/user/[user]/(pages)/followers/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,45871)),"/Users/tahaparacha/Downloads/Coding/Main Projects/seagull/website/src/app/(pages)/user/[user]/(pages)/layout.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,71354)),"/Users/tahaparacha/Downloads/Coding/Main Projects/seagull/website/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/tahaparacha/Downloads/Coding/Main Projects/seagull/website/src/app/(pages)/user/[user]/(pages)/followers/page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/(pages)/user/[user]/(pages)/followers/page",pathname:"/user/[user]/followers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},61641:(e,r,s)=>{"use strict";s.r(r),s.d(r,{"4013764e7b855cccaa7cda414c7a370b4c1903e7bf":()=>t.A,"402a7edfca58b4630a014ba0800c40be42ffeda737":()=>i.A,"7f5f553b95b32f91fbfa62b02a301ed5755c7b9bb6":()=>a.q});var a=s(90559),t=s(98910),i=s(64779)},55811:(e,r,s)=>{"use strict";s.r(r),s.d(r,{"001ceca995e446d8feebb36954bff66df1af521413":()=>t.m,"401af72ff7f7d55f51261b404620916ec184026e28":()=>d.A,"401c375d175b3bc04c185da96fc99497d2f03fc5ff":()=>l.A,"404d2a60c440802fda175063cb62a4ab50ddfb22da":()=>i.A,"408ca83da2a7494c7a7781ffd9ab611ba56ee51811":()=>n.A,"40f8f2f090ca352e6b95c38277e385fc1dd79b6b94":()=>o.A,"6098242062054845d9c23bff0445dbf4ba7b3e57ee":()=>t.P,"60c448cf360e41d7f8ac8c944614f59edb8e5c9841":()=>c.A,"60d1f6e8477b5a8c6b0fdcae07b94e02c8d4cb1269":()=>u.A,"60e17cb2baeee781bd9da0356c33ad975f46aaf1c0":()=>a.A});var a=s(71807),t=s(76109),i=s(42734),o=s(50679),n=s(18251),l=s(89321),d=s(91278),c=s(49695),u=s(81790)},27099:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,59607,23))},63891:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,28531,23))},56821:e=>{e.exports={followersWrapper:"page_followersWrapper__bqSFs",backArrow:"page_backArrow__dxYSD",title:"page_title__Iy9c0"}},80519:e=>{e.exports={horizontalUserWidget:"HorizontalUserWidget_horizontalUserWidget___HVXG",first:"HorizontalUserWidget_first__CCEaU",name:"HorizontalUserWidget_name__kYj48"}},70271:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>f});var a=s(62740),t=s(71807),i=s(91278),o=s(56989),n=s(59607),l=s.n(n),d=s(31831),c=s(83698),u=s(56821),p=s.n(u);async function f({params:e}){let r=(await e).user,s=await (0,t.A)(r);s&&s.success&&s.user||(0,d.notFound)();let n=s.user,u=(await (0,i.A)(n.id)).data;return(0,a.jsx)("div",{className:`wrapper ${p().followersWrapper}`,children:(0,a.jsxs)("div",{className:"container items-start justify-start",children:[(0,a.jsx)(l(),{href:`/user/${n.slug}/`,children:(0,a.jsx)(c.QVr,{className:p().backArrow})}),(0,a.jsx)(l(),{href:`/user/${n.slug}/`,children:(0,a.jsxs)("h5",{className:"grey capitalize mt-10 font-semibold",children:[" ",n.firstName,"  ",n.lastName]})}),(0,a.jsx)("h2",{className:`capitalize ${p().title}`,children:" Followers "}),u?(0,a.jsx)("div",{children:u.length>0&&(0,a.jsx)("div",{children:u.map((e,r)=>(0,a.jsx)(o.A,{index:r,user:{id:e.follower_id,firstName:e.follower_first_name,lastName:e.follower_last_name,slug:e.follower_slug,avatar:e.follower_avatar,avatar_url:e.follower_avatar_url}},r))})}):(0,a.jsx)("p",{children:"This user has 0 followers"})]})})}},56989:(e,r,s)=>{"use strict";s.d(r,{A:()=>d});var a=s(62740),t=s(59607),i=s.n(t),o=s(80519),n=s.n(o),l=s(91980);function d({index:e,user:r}){return(0,a.jsxs)(i(),{className:`flex gap-3 items-center ${n().horizontalUserWidget} ${0==e?n().first:""}`,href:`/user/${r.slug}/`,children:[(0,a.jsx)(l.A,{avatar_url:r.avatar_url,avatar:r.avatar,size:50}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{className:`capitalize font-semibold ${n().name}`,children:[" ",r.firstName," ",r.lastName," "]}),(0,a.jsxs)("p",{className:"grey",children:[" @",r.slug," "]})]})]})}}};var r=require("../../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),a=r.X(0,[638,246,825,77,635,885,698,436,82,382,928],()=>s(22498));module.exports=a})();