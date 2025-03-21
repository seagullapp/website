"use strict";exports.id=382,exports.ids=[382],exports.modules={81790:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e,a){if(!e||"number"!=typeof e)return{success:!1,msg:"Invalid user id",status:400};try{let a=await (0,s.P)(`
            SELECT
                o.id,
                o.owner_id,
                    u.slug AS owner_slug,
                    u.first_name AS owner_first_name,
                    u.last_name AS owner_last_name,
                o.name,
                o.slug,
                o.logo_id,
                    i.url AS logo_url,
                o.created_at,
                o.about
            FROM organizations o
            INNER JOIN users u
                ON o.owner_id = u.id
            INNER JOIN images i
                ON o.logo_id = i.id
            WHERE o.owner_id = $1
            LIMIT 10
        `,[e]);if(!a||!a.rowCount)throw"A database error occurred";if(a.rowCount<=0||a.rows.length<=0)return{success:!0,msg:"No organizations found",status:404,data:[]};return{success:!0,msg:"Organizations found",status:200,data:a.rows.map(e=>({id:e.id,owner_id:e.owner_id,owner_slug:e.owner_slug,owner_first_name:e.owner_first_name,owner_last_name:e.owner_last_name,name:e.name,slug:e.slug,logo_id:e.logo_id,logo_url:e.logo_url,created_at:e.created_at?new Date(e.created_at).toISOString():null,about:e.about}))}}catch(e){return{success:!1,status:400,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred"}}}(0,t(56215).D)([o]),(0,r.A)(o,"60d1f6e8477b5a8c6b0fdcae07b94e02c8d4cb1269",null)},76109:(e,a,t)=>{t.d(a,{P:()=>u,m:()=>i});var r=t(88977);t(98063);var s=t(42449),o=t(56215);let l=new s.Pool({host:process.env.DB_HOST,user:process.env.DB_USER,port:5432,password:process.env.DB_PASSWORD,database:process.env.DB_DATABASE,ssl:!0});async function i(){return(await l.query("SELECT version();")).rows}async function u(e,a){return await l.query(e,a||[])}(0,o.D)([i,u]),(0,r.A)(i,"001ceca995e446d8feebb36954bff66df1af521413",null),(0,r.A)(u,"6098242062054845d9c23bff0445dbf4ba7b3e57ee",null)},50679:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e){if(!e)return{success:!1,msg:"Invalid id",status:400};try{let a=await (0,s.P)(`
            SELECT COUNT(followed) 
            FROM followers 
            WHERE followed = $1`,[e]);if(!a)throw"A database error occurred";let t=parseInt(a.rows[0].count);if(!t)return{success:!0,msg:"No followers",status:200,data:0};return{success:!0,msg:"Count found",status:200,data:t}}catch(e){return console.log(e),{success:!1,status:500,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred",data:0}}}(0,t(56215).D)([o]),(0,r.A)(o,"40f8f2f090ca352e6b95c38277e385fc1dd79b6b94",null)},18251:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e){if(!e)return{success:!1,msg:"Invalid id",status:400};try{let a=await (0,s.P)(`
            SELECT COUNT(follower) 
            FROM followers 
            WHERE follower = $1`,[e]);if(!a)throw"A database error occurred";let t=parseInt(a.rows[0].count);if(!t)return{success:!0,msg:"No following",status:200,data:0};return{success:!0,msg:"Count found",status:200,data:t}}catch(e){return console.log(e),{success:!1,status:500,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred",data:0}}}(0,t(56215).D)([o]),(0,r.A)(o,"408ca83da2a7494c7a7781ffd9ab611ba56ee51811",null)},89321:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let a=await (0,s.P)(`
            SELECT 
                f.id, 
                f.followed, 
                f.follower, 
                u.slug as followed_slug, 
                u.first_name as followed_first_name, 
                u.last_name as followed_last_name, 
                u.avatar as followed_avatar,
                i.url AS followed_avatar_url,
                f.created_at
            FROM followers f
            INNER JOIN users u
                ON f.followed = u.id
            INNER JOIN images i
                ON i.id = u.avatar
            WHERE f.follower = $1
            ORDER BY f.created_at
            LIMIT 30`,[e]);if(!a)throw"A database error occurred";if(!a.rows||0===a.rows.length)return{success:!0,status:404,msg:"Followers not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:a.rows.map((e,a)=>({id:e.id,follower:e.follower,followed_id:e.followed,followed_slug:e.followed_slug,followed_first_name:e.followed_first_name,followed_last_name:e.followed_last_name,followed_avatar:e.followed_avatar,followed_avatar_url:e.followed_avatar_url,created_at:e.created_at?new Date(e.created_at).toISOString():null}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}(0,t(56215).D)([o]),(0,r.A)(o,"401c375d175b3bc04c185da96fc99497d2f03fc5ff",null)},91278:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let a=await (0,s.P)(`
            SELECT 
                f.id, 
                f.followed, 
                f.follower, 
                u.slug as follower_slug, 
                u.first_name as follower_first_name, 
                u.last_name as follower_last_name, 
                u.avatar as follower_avatar,
                i.url AS follower_avatar_url,
                f.created_at
            FROM followers f
            INNER JOIN users u
                ON f.follower = u.id
            INNER JOIN images i
                ON i.id = u.avatar
            WHERE f.followed = $1
            ORDER BY f.created_at
            LIMIT 30`,[e]);if(!a)throw"A database error occurred";if(!a.rows||0===a.rows.length)return{success:!0,status:404,msg:"Followers not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:a.rows.map((e,a)=>({id:e.id,followed:e.followed,follower_id:e.follower,follower_slug:e.follower_slug,follower_first_name:e.follower_first_name,follower_last_name:e.follower_last_name,follower_avatar:e.follower_avatar,follower_avatar_url:e.follower_avatar_url,created_at:e.created_at?new Date(e.created_at).toISOString():null}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}(0,t(56215).D)([o]),(0,r.A)(o,"401af72ff7f7d55f51261b404620916ec184026e28",null)},71807:(e,a,t)=>{t.d(a,{A:()=>f});var r=t(88977);t(98063);var s=t(76109),o=t(42734),l=t(50679),i=t(18251),u=t(89321),d=t(91278),n=t(49695),c=t(81790);async function f(e,a){let t=!1;t=!!a&&a;try{let a=await (0,s.P)(`
            SELECT 
                u.id, 
                u.slug, 
                u.first_name, 
                u.last_name, 
                u.created_at,
                u.avatar,
                i.url AS avatar_url,
                u.onboarding,
                u.hireable,
                u.about
            FROM users u
            INNER JOIN images i
                ON i.id = u.avatar
            WHERE slug = $1`,[e]);if(!a)return{success:!1,status:400,msg:"Could not fetch user"};if(!a.rowCount)return{success:!1,status:404,msg:"User does not exist"};let r=a.rows[0],f=await (0,o.A)(r.id),_=[];f.success&&f.data&&(_=f.data);let w=await (0,l.A)(r.id),m=await (0,i.A)(r.id),g=0,v=0;w.success&&w.data&&(g=w.data),m.success&&m.data&&(v=m.data);let A=[];if(v){let e=await (0,d.A)(r.id);e.success&&e.data&&(A=e.data)}let E=[];if(v){let e=await (0,u.A)(r.id);e.success&&e.data&&(E=e.data)}let b=await (0,n.A)(r.id,t),p=[];b.success&&b.data&&(p=b.data);let I=[];if(t){let e=await (0,c.A)(r.id,t);e.success&&(I=e.data)}return{success:!0,msg:"User found",status:200,user:{slug:r.slug,firstName:r.first_name,lastName:r.last_name,id:r.id,createdAt:r.created_at,avatar:r.avatar,avatar_url:r.avatar_url,onboarding:r.onboarding,hireable:r.hireable,about:r.about,tags:_,followersCount:g,followingCount:v,followers:A,followed:E,experience:p,organizations:I}}}catch(e){return{success:!1,status:400,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred"}}}(0,t(56215).D)([f]),(0,r.A)(f,"60e17cb2baeee781bd9da0356c33ad975f46aaf1c0",null)},49695:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e,a){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let t=await (0,s.P)(`
            SELECT
                e.id,
                i.experience_id,
                i.id AS item_id, 
                e.user_id, 
                e.title,
                e.description, 
                e.public, 
                e.type, 
                e.created_at,
                i.title AS item_title,
                i.description AS item_description,
                i.link AS item_link,
                i.attachments AS item_attachments,
                i.created_at AS item_created_at,
                i.date_start AS item_date_start,
                i.date_end AS item_date_end
            FROM experience_items i
            INNER JOIN experiences e
            ON i.experience_id = e.id
            WHERE user_id = $1
        `,[e]);if(!t)throw"A database error occurred";if(!t.rows||0===t.rows.length)return{success:!0,status:404,msg:"Experience not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:t.rows.map((e,t)=>{if(a||e.public)return{experience_id:e.experience_id,item_id:e.item_id,user_id:e.user_id,title:e.title,description:e.description,public:e.public,type:e.type,created_at:e.created_at?new Date(e.created_at).toISOString():null,item_title:e.item_title,item_description:e.item_description,item_link:e.item_link,item_attachments:e.item_attachments,item_created_at:e.item_created_at?new Date(e.item_created_at).toISOString():null,item_date_start:e.item_date_start,item_date_end:e.item_date_end}})}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}(0,t(56215).D)([o]),(0,r.A)(o,"60c448cf360e41d7f8ac8c944614f59edb8e5c9841",null)},42734:(e,a,t)=>{t.d(a,{A:()=>o});var r=t(88977);t(98063);var s=t(76109);async function o(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let a=await (0,s.P)(`
            SELECT * 
            FROM user_tags 
            WHERE user_id = $1
            ORDER BY tag_order
            LIMIT 40
            `,[e]);if(!a||!a.rows||0===a.rows.length)return{success:!0,status:404,msg:"User tags not found",data:[]};return{success:!0,status:200,msg:"User tags found",data:a.rows.map(e=>({id:e.id,userId:e.user_id,createdAt:e.created_at instanceof Date?e.created_at.toISOString():e.created_at,type:e.type,verified:e.verified,value:e.value,link:e.link||null,tagOrder:e.tag_order}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}(0,t(56215).D)([o]),(0,r.A)(o,"404d2a60c440802fda175063cb62a4ab50ddfb22da",null)},70440:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var r=t(88077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};