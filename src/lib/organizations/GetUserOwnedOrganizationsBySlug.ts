"use server"

import { Organization } from "@/types/organization/organization"
import { query } from "@/lib/database"
import { getCurrentSession } from "../auth/cookies/getCurrentSession"

/**
 * @params id - The user ID 
 */

// Types
type Result = {
    success: false,
    msg: string,
    status: number,
} | {
    success: true,
    msg: string,
    status: number,
    data: Organization[]
}

export default async function GetUserOwnedOrganizationsById(slug : string, isCurrentUser?: boolean) : Promise<Result> {

    if (!slug || typeof slug !== "string") return { success: false, msg: "Invalid user id", status: 400 }

    // CHECK AUTHENTICATED
    const currentUser = await getCurrentSession()
    if (!currentUser.user || !currentUser.session) return { success: true, msg: "Not authenticated", status: 403, data: [] }

    try {

        const cols = [slug]
        const rows = await query(`
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
            WHERE u.slug = $1
            LIMIT 10
        `, cols)

        if (!rows || !rows.rowCount) throw "A database error occurred"
        
        if (rows.rowCount <= 0 || rows.rows.length <= 0) return { success: true, msg: "No organizations found", status: 404, data: [] }

        return { 
            success: true, 
            msg: "Organizations found",
            status: 200,
            data: rows.rows.map((row : Organization) => { return {
                id: row.id,
                owner_id: row.owner_id,
                owner_slug: row.owner_slug,
                owner_first_name: row.owner_first_name,
                owner_last_name: row.owner_last_name,
                name: row.name,
                slug: row.slug,
                logo_id: row.logo_id,
                logo_url: row.logo_url,
                created_at: row.created_at ? new Date(row.created_at).toISOString() : null,
                about: row.about
        }})
        }

    } catch (error : any) {

        return { 
            success: false, 
            status: 400, 
            msg: error ? `${`${error}`.includes("error: ") ? `${error}`.split("error: ")[1].trim() : error}` : "A server error occurred",
        }
        
    }

}