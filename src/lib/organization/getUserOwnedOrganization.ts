"use server"

import { Organization } from "@/types/organization/organization"
import { query } from "../database"

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

export default async function getUserOwnedOrganization(id : number, isCurrentUser?: boolean) : Promise<Result> {

    if (!id || typeof id !== "number") return { success: false, msg: "Invalid user id", status: 400 }

    try {

        const cols = [id]
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
            WHERE o.owner_id = $1
            LIMIT 10
        `, cols)

        if (!rows || !rows.rowCount) throw "A database error occurred"
        
        if (rows.rowCount <= 0) return { success: true, msg: "No organizations found", status: 404, data: [] }

        return { 
            success: true, 
            msg: "Organizations found",
            status: 200,
            data: rows.rows
        }

    } catch (error : any) {

        return { 
            success: false, 
            status: 400, 
            msg: error ? `${`${error}`.includes("error: ") ? `${error}`.split("error: ")[1].trim() : error}` : "A server error occurred",
        }
        
    }

}