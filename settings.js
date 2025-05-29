import { watchFile, unwatchFile } from 'fs' // استيراد دوال لمراقبة الملف أو إيقاف المراقبة
import chalk from 'chalk' // مكتبة لتلوين النصوص في الكونسول
import { fileURLToPath } from 'url' // لتحويل رابط الملف إلى مسار ملف فعلي
import fs from 'fs' // نظام الملفات
import cheerio from 'cheerio' // مكتبة لتحليل صفحات HTML
import fetch from 'node-fetch' // جلب البيانات من الإنترنت
import axios from 'axios' // مكتبة أخرى للطلبات HTTP

// تحديد المالكين للبوت (رقم + اسم + حالة الفعالية)
global.owner = [
  ['201551428703', 'Irokz Dal ダーク', true],
  ['201551428703', 'Hans', true]
]

// لا يوجد مشرفين (mods) أو مستخدمين مميزين (prems) حالياً
global.mods = []
global.prems = []
   
// إعدادات البوت العامة
global.packname = `` // اسم الحزمة
global.author = '{\n "bot": {\n   "name": "OTTO² BOT",\n     "author": "Irokz Dal ダーク",\n   "status_bot": "active"\n }\n}' // تعريف البوت في شكل JSON
global.wait = '🐢 *Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ, sᴏʏ ʟᴇɴᴛᴀ... ฅ^•ﻌ•^ฅ*' // رسالة الانتظار
global.botname = '✯ OTTO² BOT ✰' // اسم البوت الظاهر
global.textbot = `Powered By Starlights Team` // توقيع الفريق
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*' // رسالة عند الجاهزية
global.namechannel = '【 ✯ Starlights Team - Oficial Chanel ✰ 】' // اسم القناة الرسمي

// تحميل الصور المستخدمة
global.catalogo = fs.readFileSync('./storage/img/catalogo.png') // صورة كاتالوج
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg') // صورة مصغرة

// روابط المجموعات والقناة
global.group = 'https://chat.whatsapp.com/IxpXbSLuXm448t32u38uo4'
global.group2 = 'https://chat.whatsapp.com/CwJUaRDDmQJLfUUn52txjR'
global.group3 = 'https://chat.whatsapp.com/F0GcAVpVdtVHqAkC2hrDFY'
global.canal = 'https://whatsapp.com/channel/0029Vb5zvPuIN9ix82BPWN3b'

// رسالة تنسيق افتراضي للردود
global.estilo = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    ...(false ? { remoteJid: "201551428703-1625305606@g.us" } : {})
  },
  message: {
    orderMessage: {
      itemCount : -999999,
      status: 1,
      surface : 1,
      message: botname,
      orderTitle: 'Bang',
      thumbnail: catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// تعيين مكتبات جاهزة في الكائن العام
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios

// إعدادات أخرى
global.multiplier = 69 // معامل نقاط الخبرة أو التحديات
global.maxwarn = '2' // عدد التحذيرات القصوى

// مراقبة التعديلات في هذا الملف وإعادة تحميله تلقائياً عند التغيير
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
