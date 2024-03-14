
import { foreignKey, mysqlEnum, mysqlTable, primaryKey,varchar } from "drizzle-orm/mysql-core";



export const Penduduk = mysqlTable("penduduk" , {
    nik : varchar("nik" , {length : 100}).notNull().unique(),
    nama : varchar("nama" , {length : 100}).notNull(),
    alamat : varchar("alamat" , {length : 100}).notNull(),
    password : varchar("password" , {length : 100}).notNull().primaryKey(),
    role : mysqlEnum("role" , ["masyarakat" , "raja"]).notNull(),
} , (table) =>{
    return {
        pk : primaryKey({columns : [table.nik , table.nama , table.alamat , table.password]})
    }
});

export const SessionPenduduk = mysqlTable("session" , {
   pendudukNik : varchar("penduduk_nik" , {length : 100}).primaryKey().notNull(),
   pendudukPassword : varchar("penduduk_password" , {length :100}).primaryKey().notNull(), 
} , (table)=>{
     return {
        pendudukReference : foreignKey({
            columns : [table.pendudukNik , table.pendudukPassword],
            foreignColumns : [Penduduk.nik , Penduduk.password],
        })
     }
});