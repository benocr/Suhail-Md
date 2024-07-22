const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_24_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialVvTTc2UDVGWjY4dm45akIyeWdCMnRmNzFlT0xWbDgrN0RvVlpVMW5Cbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVN6T1pkc3RRSHlfa0FzNzltQjJoZ1wiLFxuICBcInBob25lSWRcIjogXCI1MDMyOWFiZi01OWI5LTQ5NzQtOWFiYy03ZDcxYjI2YzhhNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTI4LFxuICAgICAgMTI4LFxuICAgICAgNjAsXG4gICAgICAxOTksXG4gICAgICAxMjUsXG4gICAgICAxMzQsXG4gICAgICAyMzUsXG4gICAgICAxMjcsXG4gICAgICAxODIsXG4gICAgICA5MSxcbiAgICAgIDE5MSxcbiAgICAgIDE0OCxcbiAgICAgIDMsXG4gICAgICA0NSxcbiAgICAgIDE2NyxcbiAgICAgIDkzLFxuICAgICAgMTcyLFxuICAgICAgMTY4LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDEyNixcbiAgICAgIDIxNixcbiAgICAgIDg3LFxuICAgICAgMTAyLFxuICAgICAgNjMsXG4gICAgICAyMzMsXG4gICAgICAxMDgsXG4gICAgICAyMzQsXG4gICAgICAyMDMsXG4gICAgICAxMjIsXG4gICAgICAyMzYsXG4gICAgICAxNDYsXG4gICAgICAyMjUsXG4gICAgICAxODAsXG4gICAgICA3MCxcbiAgICAgIDIzNCxcbiAgICAgIDIxOSxcbiAgICAgIDE5NSxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUDJZQllGWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTYxMzQ2MTM3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidXJ4X2Jlbm9cIixcbiAgICBcImxpZFwiOiBcIjY1OTQ5NjkyNjEyODYxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFhaMjdvRkVOdUY5N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIVko1aENJWTNXYnJUQmtPNHY4czZqVWJoVTBXRUQvR0RZOE8rdlE1UkQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImY5NmFVUmhvTEt1QmdLaFJIeHlmdkVPbkNqdEdPZUMyNWFaWFJJZlh4bVM1UkFYdjlFWTdYVFRZSEtsYk5Mc0VLYklMbTRkd1NZNVAzU3dEQzJpcUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImcwWFlPZ2w0YjVMNURGTlYrMmFVUmV4bmhuMEhJSTJzaFhBUzJpRWptVDc0WnprOHdtOFhqZ1FHSmhaRnJZWFRZQ0MxM0t1M0o5c3FnQTRoYXZEdmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2MTM0NjEzNzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjE1MDY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnlXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKeVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJveTEwNTJycVFicHFMeTFPWE5CRG1sbFRYMkdNSWdMNXNkZndWVW9uRzc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjUzMTQ1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTYxNTA3Njk1OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
