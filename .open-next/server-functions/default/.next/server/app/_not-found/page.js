"use strict";(()=>{var e={};e.id=492,e.ids=[492],e.modules={10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{e.exports=require("pg")},33873:e=>{e.exports=require("path")},91552:(e,r,s)=>{s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>l,routeModule:()=>c,tree:()=>u});var t=s(70260),n=s(28203),a=s(25155),i=s.n(a),o=s(67292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(r,d);let u=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,71354)),"/Users/tahaparacha/Downloads/Coding/Main Projects/seagull/website/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],l=[],p={require:s,loadChunk:()=>Promise.resolve()},c=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},34516:(e,r,s)=>{s.r(r),s.d(r,{"7f5f553b95b32f91fbfa62b02a301ed5755c7b9bb6":()=>t.q});var t=s(90559)},90559:(e,r,s)=>{s.d(r,{q:()=>c});var t=s(21590);s(70376);var n=s(42385),a=s(23346),i=s(13362),o=s(64230),d=s(57647),u=s(71082),l=s(99344);async function p(e){let r=(0,o.tO)((0,d.sc)(new TextEncoder().encode(e))),s=await (0,i.P)(`
        SELECT 
            s.id AS session_id, 
            s.user_id, 
            s.created_at AS session_created_at, 
            s.expires_at,
            u.slug
        FROM user_sessions s
        INNER JOIN users u
            ON u.id = s.user_id 
        WHERE s.id = $1`,[r]);if(!s||0===s.rowCount)return{session:null,user:null};let t=s.rows[0],n=await (0,u.A)(t.slug,!0);if(!n.success||!n.user)return{session:null,user:null};let a={id:t.session_id,userId:t.user_id,createdAt:new Date(t.session_created_at.toISOString()),expiresAt:new Date(t.expires_at.toISOString())},l=new Date(a.expiresAt);return Date.now()>=l.getTime()?(await (0,i.P)("DELETE FROM user_sessions WHERE id = $1",[a.id]),{session:null,user:null}):(Date.now()>=l.getTime()-2592e6&&(a.expiresAt=new Date(Date.now()+2592e6),await (0,i.P)("UPDATE user_sessions SET expires_at = $1 WHERE id = $2",[a.expiresAt,a.id])),{session:a,user:n.user})}(0,l.D)([p]),(0,t.A)(p,"40f6de09ec2822252f3fdfc0bb278e4ae125d2c60a",null);let c=(0,a.cache)(async()=>{let e=await (0,n.UL)(),r=e.get("session")?.value??null;return null===r?{session:null,user:null}:await p(r)});(0,l.D)([c]),(0,t.A)(c,"7f5f553b95b32f91fbfa62b02a301ed5755c7b9bb6",null)}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,246,825,436,82],()=>s(91552));module.exports=t})();