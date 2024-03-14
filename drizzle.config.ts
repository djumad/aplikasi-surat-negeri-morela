import {Config} from "drizzle-kit";

export default ({
    schema : "./src/lib/database/schema/schema.ts",
    out : "./drizzle",
    driver : "mysql2",
    dbCredentials : {
        host : "localhost",
        user : "root",
        database : "morela"
    }
}) satisfies Config;