const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_56_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxYWxsaGhrelNVQUV6SXlNbmtSbGNIZ2JJTEVJUHhEMllhT05tcXdySU1FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0cWpqUDYtbFRYS1FRUkhuVVpTcVhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1NGY4NTgyLWQ4NjYtNDU0Yi04NGM2LWU1N2IzMTIzMzM3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxLFxuICAgICAgMjQzLFxuICAgICAgMjQyLFxuICAgICAgMTk3LFxuICAgICAgNCxcbiAgICAgIDEzOSxcbiAgICAgIDE2LFxuICAgICAgNzQsXG4gICAgICA0NyxcbiAgICAgIDksXG4gICAgICAxMjIsXG4gICAgICA5NixcbiAgICAgIDIyNixcbiAgICAgIDQ5LFxuICAgICAgNTksXG4gICAgICA5MixcbiAgICAgIDUyLFxuICAgICAgODIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTc4LFxuICAgICAgMTQsXG4gICAgICAxMDMsXG4gICAgICAyMjEsXG4gICAgICAyNDMsXG4gICAgICAwLFxuICAgICAgNTAsXG4gICAgICAyMzcsXG4gICAgICAxOTQsXG4gICAgICA1MyxcbiAgICAgIDE2MSxcbiAgICAgIDE4OCxcbiAgICAgIDI1MCxcbiAgICAgIDMzLFxuICAgICAgMjE4LFxuICAgICAgMzMsXG4gICAgICA4NyxcbiAgICAgIDE5MSxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUVk1R0ROSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDAxMzQ2NjE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCWo5ggR09U4Zep4ZaHIEvhl7BHIPCWo5hcIixcbiAgICBcImxpZFwiOiBcIjE3OTE3MzcyMTExNjkwMzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yRnB0OEdFS0xkd3JjR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVlA3blJxTDUzaW56OEZ1cUNabExGQXN4WE0zZU1RaFdZN2pKL0dpQjV5ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsRElzcVM1TUFOcjBYQ0I5anovQVVjQkZnaE9haVJoTlIzZzA2bXJpZUs2ckl5L1l2RTJNSEpHRWFOdTVGL0kxcTVRTjVYSkZDOGlQVk5mQnBFaEppUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFZmhqZGNQT0Q0YURzWkJCeUxoeHAxdHBoN3RKNGJZaXhhK3VZNGVmMU1pT3FhSkNBM29kdG00WDlHbG5RNG5JbnZjT3JKdlhtcTJuUE1mend1bkFqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MDEzNDY2MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzA0OTM4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBCWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiditHNWw1T2FYV0h2cmsxTFJuL0RGaUNPcHdTMTNmcVRaNkg3Q20xUHVGWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODEwNDY1NTE3LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjk2NjQyNTg1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𖣘 GOTᗩᖇ KᗰG 𖣘",
  ownername:process.env.OWNER_NAME|| "𖣘 GOTᗩᖇ KᗰG 𖣘",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
