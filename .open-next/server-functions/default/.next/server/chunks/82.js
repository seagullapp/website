"use strict";exports.id=82,exports.ids=[82],exports.modules={13362:(e,t,a)=>{a.d(t,{P:()=>i});var r=a(21590);a(70376);var s=a(42449),o=a(99344);let l=new s.Pool({host:process.env.DB_HOST,user:process.env.DB_USER,port:5432,password:process.env.DB_PASSWORD,database:process.env.DB_DATABASE,ssl:!0});async function u(){return(await l.query("SELECT version();")).rows}async function i(e,t){return await l.query(e,t||[])}(0,o.D)([u,i]),(0,r.A)(u,"001ceca995e446d8feebb36954bff66df1af521413",null),(0,r.A)(i,"6098242062054845d9c23bff0445dbf4ba7b3e57ee",null)},71082:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(21590);a(70376);var s=a(13362),o=a(99344);async function l(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let t=await (0,s.P)(`
            SELECT * 
            FROM user_tags 
            WHERE user_id = $1
            ORDER BY tag_order
            LIMIT 40
            `,[e]);if(!t||!t.rows||0===t.rows.length)return{success:!0,status:404,msg:"User tags not found",data:[]};return{success:!0,status:200,msg:"User tags found",data:t.rows.map(e=>({id:e.id,userId:e.user_id,createdAt:e.created_at instanceof Date?e.created_at.toISOString():e.created_at,type:e.type,verified:e.verified,value:e.value,link:e.link||null,tagOrder:e.tag_order}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}async function u(e){if(!e)return{success:!1,msg:"Invalid id",status:400};try{let t=await (0,s.P)(`
            SELECT COUNT(followed) 
            FROM followers 
            WHERE followed = $1`,[e]);if(!t)throw"A database error occurred";let a=parseInt(t.rows[0].count);if(!a)return{success:!0,msg:"No followers",status:200,data:0};return{success:!0,msg:"Count found",status:200,data:a}}catch(e){return console.log(e),{success:!1,status:500,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred",data:0}}}async function i(e){if(!e)return{success:!1,msg:"Invalid id",status:400};try{let t=await (0,s.P)(`
            SELECT COUNT(follower) 
            FROM followers 
            WHERE follower = $1`,[e]);if(!t)throw"A database error occurred";let a=parseInt(t.rows[0].count);if(!a)return{success:!0,msg:"No following",status:200,data:0};return{success:!0,msg:"Count found",status:200,data:a}}catch(e){return console.log(e),{success:!1,status:500,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred",data:0}}}async function d(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let t=await (0,s.P)(`
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
            LIMIT 30`,[e]);if(!t)throw"A database error occurred";if(!t.rows||0===t.rows.length)return{success:!0,status:404,msg:"Followers not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:t.rows.map((e,t)=>({id:e.id,follower:e.follower,followed_id:e.followed,followed_slug:e.followed_slug,followed_first_name:e.followed_first_name,followed_last_name:e.followed_last_name,followed_avatar:e.followed_avatar,followed_avatar_url:e.followed_avatar_url,created_at:e.created_at?new Date(e.created_at).toISOString():null}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}async function n(e){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let t=await (0,s.P)(`
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
            LIMIT 30`,[e]);if(!t)throw"A database error occurred";if(!t.rows||0===t.rows.length)return{success:!0,status:404,msg:"Followers not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:t.rows.map((e,t)=>({id:e.id,followed:e.followed,follower_id:e.follower,follower_slug:e.follower_slug,follower_first_name:e.follower_first_name,follower_last_name:e.follower_last_name,follower_avatar:e.follower_avatar,follower_avatar_url:e.follower_avatar_url,created_at:e.created_at?new Date(e.created_at).toISOString():null}))}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}async function c(e,t){if(!e)return{success:!1,msg:"Invalid user ID",status:400,data:[]};try{let a=await (0,s.P)(`
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
        `,[e]);if(!a)throw"A database error occurred";if(!a.rows||0===a.rows.length)return{success:!0,status:404,msg:"Experience not found",data:[]};return{success:!0,status:200,msg:"Followers found",data:a.rows.map((e,a)=>{if(t||e.public)return{experience_id:e.experience_id,item_id:e.item_id,user_id:e.user_id,title:e.title,description:e.description,public:e.public,type:e.type,created_at:e.created_at?new Date(e.created_at).toISOString():null,item_title:e.item_title,item_description:e.item_description,item_link:e.item_link,item_attachments:e.item_attachments,item_created_at:e.item_created_at?new Date(e.item_created_at).toISOString():null,item_date_start:e.item_date_start,item_date_end:e.item_date_end}})}}catch(e){return{success:!1,status:500,msg:e instanceof Error?e.message:"A server error occurred",data:[]}}}async function f(e,t){if(!e||"number"!=typeof e)return{success:!1,msg:"Invalid user id",status:400};try{let t=await (0,s.P)(`
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
        `,[e]);if(!t||!t.rowCount)throw"A database error occurred";if(t.rowCount<=0||t.rows.length<=0)return{success:!0,msg:"No organizations found",status:404,data:[]};return{success:!0,msg:"Organizations found",status:200,data:t.rows.map(e=>({id:e.id,owner_id:e.owner_id,owner_slug:e.owner_slug,owner_first_name:e.owner_first_name,owner_last_name:e.owner_last_name,name:e.name,slug:e.slug,logo_id:e.logo_id,logo_url:e.logo_url,created_at:e.created_at?new Date(e.created_at).toISOString():null,about:e.about}))}}catch(e){return{success:!1,status:400,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred"}}}async function _(e,t){let a=!1;a=!!t&&t;try{let t=await (0,s.P)(`
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
            WHERE slug = $1`,[e]);if(!t)return{success:!1,status:400,msg:"Could not fetch user"};if(!t.rowCount)return{success:!1,status:404,msg:"User does not exist"};let r=t.rows[0],o=await l(r.id),_=[];o.success&&o.data&&(_=o.data);let w=await u(r.id),m=await i(r.id),g=0,E=0;w.success&&w.data&&(g=w.data),m.success&&m.data&&(E=m.data);let v=[];if(E){let e=await n(r.id);e.success&&e.data&&(v=e.data)}let b=[];if(E){let e=await d(r.id);e.success&&e.data&&(b=e.data)}let A=await c(r.id,a),p=[];A.success&&A.data&&(p=A.data);let I=[];if(a){let e=await f(r.id,a);e.success&&(I=e.data)}return{success:!0,msg:"User found",status:200,user:{slug:r.slug,firstName:r.first_name,lastName:r.last_name,id:r.id,createdAt:r.created_at,avatar:r.avatar,avatar_url:r.avatar_url,onboarding:r.onboarding,hireable:r.hireable,about:r.about,tags:_,followersCount:g,followingCount:E,followers:v,followed:b,experience:p,organizations:I}}}catch(e){return{success:!1,status:400,msg:e?`${`${e}`.includes("error: ")?`${e}`.split("error: ")[1].trim():e}`:"A server error occurred"}}}(0,o.D)([l]),(0,r.A)(l,"404d2a60c440802fda175063cb62a4ab50ddfb22da",null),(0,o.D)([u]),(0,r.A)(u,"40f8f2f090ca352e6b95c38277e385fc1dd79b6b94",null),(0,o.D)([i]),(0,r.A)(i,"408ca83da2a7494c7a7781ffd9ab611ba56ee51811",null),(0,o.D)([d]),(0,r.A)(d,"401c375d175b3bc04c185da96fc99497d2f03fc5ff",null),(0,o.D)([n]),(0,r.A)(n,"401af72ff7f7d55f51261b404620916ec184026e28",null),(0,o.D)([c]),(0,r.A)(c,"60c448cf360e41d7f8ac8c944614f59edb8e5c9841",null),(0,o.D)([f]),(0,r.A)(f,"60d1f6e8477b5a8c6b0fdcae07b94e02c8d4cb1269",null),(0,o.D)([_]),(0,r.A)(_,"60e17cb2baeee781bd9da0356c33ad975f46aaf1c0",null)}};