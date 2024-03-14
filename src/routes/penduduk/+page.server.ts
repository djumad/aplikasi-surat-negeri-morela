import db from "$lib/database/config/db";
import { Penduduk } from "$lib/database/schema/schema";
import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = async()=>{
    const result = await db.select({
        nik : Penduduk.nik,
        nama : Penduduk.nama,
        alamat : Penduduk.alamat,
        role : Penduduk.role
    }).from(Penduduk);
    return {
        result
    }
}