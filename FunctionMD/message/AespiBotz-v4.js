 "use strict";
 const fs = require('fs')
 const cron = require('node-cron')
 const uptime = process.uptime();
 const { exec, spawn} = require('child_process')
 const axios = require("axios")
 const Exif = require('../sticker/exif.js');
 const util = require('util')
 const exif = new Exif();
 const moment = require("moment-timezone")
 const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
 const speed = require("performance-now");
 const fetch = require('node-fetch')
 const brainly = require('brainly-scraper');
 let google = require('google-it')
 const kotz = require("kotz-api");
 const hx = require('hxz-api')
 const xfar = require('xfarr-api');
 const XTeam = require('xteam-api');
 const ig = require('insta-fetcher');
 const ffmpeg = require('fluent-ffmpeg')
 const bdr = require('rumus-bdr')
 const encodeUrl = require('encodeurl')
 const {
getContentType, downloadContentFromMessage,	generateWAMessage, generateWAMessageFromContent, makeChatsSocket
} = require('@adiwajshing/baileys');
 const { 
  color, 
  runtime,
  fetchJson, 
  getRandom, 
webp2mp4File, 
mediafireDl, 
igstalk, 
  pickRandom, 
  randomInt, 
  genMath
 } = require('../function.js')
 const { 
  yta, 
  ytv, 
  searchResult 
 } = require('../scrape/ytdl')
 const {
   ramalan_jodoh, 
   tafsir_mimpi,
   nomer_hoki,
   ramalan_cinta,
   suami_istri,
   ramalan_jodoh_bali,
   arti_nama,
   kecocokan_nama,
   kecocokan_nama_pasangan,
   tanggal_jadian_pernikahan,
   sifat_usaha_bisnis,
   pekerjaan_weton_lahir,
   rejeki_hoki_weton,
   ramalan_nasib,
   cek_potensi_penyakit,
   perhitungan_feng_shui,
   arti_kartu_tarot,
   petung_hari_baik,
   hari_sangar_taliwangke,
   primbon_hari_naas,
   rahasia_naga_hari,
   primbon_arah_rejeki,
   ramalan_peruntungan,
   weton_jawa,
   sifat_karakter_tanggal_lahir,
   potensi_keberuntungan,
   primbon_memancing_ikan,
   masa_subur,
   zodiak,
   shio
  } = require('../scrape/primbon') 
const getLocationData = require('../scrape/location')
 const { igDownloader } = require('../scrape/igdown.js') 
 const  Searchnabi  = require('../scrape/kisahnabi.js');
 const { detikNews } = require('../scrape/detik') 
 const { textpro } = require('../scrape/textpro') 
const ph = require('../scrape/photooxy.js')
 let { cnn } = require('../scrape/cnn.js') 
 const geayubi = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/geayubi.json");
 const bocil = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/bocil.json");
 const rikagusriani = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/rikagusriani.json");
 const { wikiSearch } = require('../scrape/wiki.js');
 const { TiktokDownloader } = require('../scrape/tiktokdl') 
 let antilink = JSON.parse(fs.readFileSync('./storage/group/antilink.json'))
 const Options = require('../settings/options.js')
 const afk = require("../../storage/user/afk.js");
 let _afk = JSON.parse(fs.readFileSync('./storage/user/afk.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let _registered = JSON.parse(fs.readFileSync('./storage/user/registered.json'))
 let textproo = Options.textpro
 let thumb = fs.readFileSync('./storage/image/ArielGantengBangetWowOmaygatEpribadihTeetewtwtetwArielSPnihbostengtengteng.jpg') 
 const { pinterest, wallpaper, porno, hentai, quotesAnime } = require('../scrape/ApiOrScrap')
 const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../../storage/user/game");
 const tebakkimia = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkimia.json');
 const asahotak = fs.readFileSync('./FunctionMD/scrape/Result/Game/asahotak.json');
 const susunkata = fs.readFileSync('./FunctionMD/scrape/Result/Game/susunkata.json');
 const tebakkalimat = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkalimat.json');
 const tekateki = fs.readFileSync('./FunctionMD/scrape/Result/Game/tekateki.json');
 const caklontong = fs.readFileSync('./FunctionMD/scrape/Result/Game/caklontong.json');
 const tebakbendera = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakbendera.json');
 const tebakanime = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakanime.json');
 const tebakkabupaten = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkabupaten.json');
 const tebaklagu = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebaklagu.json');
 const tebaklirik = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebaklirik.json');
 const { Gempa } = require("../scrape/gempa.js");
 let { covid } = require('../scrape/covid.js') 
const { jadwaltv }= require('../scrape/jadwaltv');
const { lirikLagu } = require('../scrape/lirik')

const _math = JSON.parse(fs.readFileSync('./storage/user/math.json'))
const _tbkkimia = JSON.parse(fs.readFileSync('./storage/user/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./storage/user/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./storage/user/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./storage/user/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./storage/user/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./storage/user/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./storage/user/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./storage/user/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./storage/user/tebakkabupaten.json'))
const _tebaklirik= JSON.parse(fs.readFileSync('./storage/user/tebaklirik.json'))
const _tebaklagu= JSON.parse(fs.readFileSync('./storage/user/tebaklagu.json'))
let tebakgambar = []
let gamewaktu = 50
 
 let OwnerNumber = Options.info.owner 
module.exports = async (
    sock,
    m,
    store   
    ) => {
   
   try{            
   const from = m.key.remoteJid
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'	  
   const quoted = m.quoted ? m.quoted : m
   const mime = (quoted.m || quoted).mimetype || ''
   const chatmessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
   const ordermessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   const chats = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
   const args = ordermessage.trim().split(/ +/).slice(1)
   const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'

   const order = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
   const sender = m.sender
   const quotedMsg = m.isMedia
   const q = args.join(' ')       
   const isCmd = ordermessage.startsWith(prefix)   
   const isGroup = from.endsWith('@g.us') 
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid 
   const isOwner = OwnerNumber.includes(itulho)      
   const groupMetdata = isGroup ? await sock.groupMetadata(from) : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const isAntiLink = isGroup ? antilink.includes(m.sender) : false
   const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetadata.participants : ''
   const groupAdmins = isGroup ? m.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(m.sender)
   const more = String.fromCharCode(8206);
   const readMore = more.repeat(4000);

    function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
    let examlink = `*Example* : ${prefix + order } link\n*Penjelasan*\nSesuaikan sesuai link command\nMisal fitur ytmp4 jadi\n${prefix}ytmp4 https://youtu.be/hqpeOYBthow\nBegitu juga dengan link lainya`
    let examquery = `Example* : ${prefix + order } query\n\n*Penjelasan*\nquery itu adalah text yg diperlukan setelah command\nmisal fitur #play\ncontoh penggunaanya adalah #play judul / #play happier\nKirim perintah tanpa argument untuk melihat example lebih jelas`
    let examkosong = `Untuk command ini kamu hanya perlu mengetik ${prefix + order}`
    let examtag = `*Example* : ${prefix + order } lalu tag nomor seseorang`
    let examply = `*Example* : gunakan ${prefix + order} sekalian reply pesan bot`
    let examplyme = `Kirim Media lalu reply dengan ${prefix + order}`
    
   let LETT = 1;
   let head = `╭───╼[ ${Options.info.botName} ]╾──➲`
   let left = "│"
   let branch = "├"
   let bracketmenu = "┞─╼「"
   let F = "」"
   let A = "┟"
   let B = "┞"
   let stick = "╿"
   let tayime = "🕒 *Time:*"
   let runtz = "⏱️*Runtime:*"
   let taipye = "💻 *Type:*"
   let borderlist = "╭╾───────────────╼╮"
   let borderlistend = "╰╾───────────────╼╯"
   let opener = "╭─────────────────╮"
   let closing = "╰─────────────────╯"
   let headtqto = "╭╾─「 Thanks To✨ 」╾───╮"
   let endbordertqto = "╰╾───────────────╾╯"
   let end = "╰╾────────────────╼▢"
const MenuList2 = `Silahkan Klick Tombol Di Bawah Untuk Mengakses Bot Ini ><`
const MenuList = `✘ *I N F O - B O T*

⌕ *Owner Name : ${Options.info.ownerName}*
⌕ *Bot Name : ${Options.info.botName}*
⌕ *Library : Baileys-Md*
⌕ *Version :* *2.1.3*
⌕ *Nomor Owner :* wa.me/${Options.info.wmAriel}

✘ *G R O U P - M E N U*

⌕ ${prefix}add
⌕ ${prefix}kick
⌕ ${prefix}promote
⌕ ${prefix}demote
⌕ ${prefix}setnamegroup
⌕ ${prefix}setdesc
⌕ ${prefix}revoke
⌕ ${prefix}afk
⌕ ${prefix}delete
⌕ ${prefix}broadcast (Owner)

✘ *D O W N L O A D - M E N U*

⌕ ${prefix}play
⌕ ${prefix}tiktoknowm
⌕ ${prefix}tiktokmp3
⌕ ${prefix}youtubemp3
⌕ ${prefix}youtubemp4
⌕ ${prefix}mediafire

✘ *C O N V E R T - M E N U*

⌕ ${prefix}toimg
⌕ ${prefix}tomp4
⌕ ${prefix}tomp3
⌕ ${prefix}togif
⌕ ${prefix}unduh
⌕ ${prefix}sticker

✘ *R P G - M E N U*

⌕ ${prefix}berburu
⌕ ${prefix}mancing
⌕ ${prefix}menambang
⌕ ${prefix}mining
⌕ ${prefix}heal

✘ *T E X T P R O - M E N U*

⌕ ${prefix}arielpetir <text>
⌕ ${prefix}arielpetir2 <text>
⌕ ${prefix}bussines3d <text>
⌕ ${prefix}stoneariel3d <text>
⌕ ${prefix}neon3dariel <text>
⌕ ${prefix}neon <text>
⌕ ${prefix}impresiveariel <text>
⌕ ${prefix}neondevil3dariel <text>
⌕ ${prefix}underwater3d <text>
⌕ ${prefix}bears3dariel <text>
⌕ ${prefix}fireworkbucin <text>
⌕ ${prefix}metaldarkariel <text>
⌕ ${prefix}halloweenariel <text>
⌕ ${prefix}captainamerikabyariel <text>
⌕ ${prefix}spacetext <text>
⌕ ${prefix}plastic3d <text>
⌕ ${prefix}dropwater3d <text>
⌕ ${prefix}avengerslogo3d <text>
⌕ ${prefix}harrypoter <text>
⌕ ${prefix}brokenglass <text>
⌕ ${prefix}wonderfulgravity3d <text>
⌕ ${prefix}futuristicneon3d <text>
⌕ ${prefix}skytext3d <text>
⌕ ${prefix}robotr2 <text>
⌕ ${prefix}natal3d <text>
⌕ ${prefix}matrixstyle <text>
⌕ ${prefix}waterpiperariel <text>
⌕ ${prefix}blackpink <text>
⌕ ${prefix}lightglow <text>
⌕ ${prefix}glass <text>
⌕ ${prefix}hoorror_blood <text>
⌕ ${prefix}sand <text>
⌕ ${prefix}sketch <text>
⌕ ${prefix}magma <text>
⌕ ${prefix}batman <text>
⌕ ${prefix}demon <text>
⌕ ${prefix}sci_fi <text>
⌕ ${prefix}ice <text>
⌕ ${prefix}sea_metal <text>
⌕ ${prefix}skeleton <text>
⌕ ${prefix}transformer <text>
⌕ ${prefix}warning <text>
⌕ ${prefix}denim <text>

✘ *I N F O - M E N U*

⌕ ${prefix}owner
⌕ ${prefix}leaderboard
⌕ ${prefix}runtime
⌕ ${prefix}profile
⌕ ${prefix}inventori

✘ *G O O G L E - M E N U*

⌕ ${prefix}detiknews
⌕ ${prefix}wiki
⌕ ${prefix}gempa
⌕ ${prefix}lirik
⌕ ${prefix}jadwaltv
⌕ ${prefix}covidindo
⌕ ${prefix}pinterest

✘ *R A N D O M - M E N U*

⌕ ${prefix}patrik
⌕ ${prefix}penyegar
⌕ ${prefix}moodbooster
⌕ ${prefix}waifu
⌕ ${prefix}simi
⌕ ${prefix}awoo
⌕ ${prefix}shinobu
⌕ ${prefix}couple
⌕ ${prefix}aesthetic
⌕ ${prefix}artinama
⌕ ${prefix}storywa
⌕ ${prefix}asupan

✘ *S O U N D - M E N U*

⌕ ${prefix}sound1
⌕ ${prefix}sound2
⌕ ${prefix}sound3
⌕ ${prefix}sound4
⌕ ${prefix}sound5
⌕ ${prefix}sound6
⌕ ${prefix}sound7
⌕ ${prefix}sound8
⌕ ${prefix}sound9
⌕ ${prefix}sound10
⌕ ${prefix}sound11
⌕ ${prefix}sound12
⌕ ${prefix}sound13
⌕ ${prefix}sound14
⌕ ${prefix}sound15
⌕ ${prefix}sound16
⌕ ${prefix}sound17
⌕ ${prefix}sound18
⌕ ${prefix}sound19
⌕ ${prefix}sound20
⌕ ${prefix}sound21

✘ *KISAH - M E N U*

⌕ ${prefix}kisahnabi adam
⌕ ${prefix}kisahnabi ayyub
⌕ ${prefix}kisahnabi daud
⌕ ${prefix}kisahnabi dzulkifli
⌕ ${prefix}kisahnabi harun
⌕ ${prefix}kisahnabi hud
⌕ ${prefix}kisahnabi ibrahim
⌕ ${prefix}kisahnabi idris
⌕ ${prefix}kisahnabi ilyas
⌕ ${prefix}kisahnabi ilyasa
⌕ ${prefix}kisahnabi isa
⌕ ${prefix}kisahnabi ishaq
⌕ ${prefix}kisahnabi ismail
⌕ ${prefix}kisahnabi luth
⌕ ${prefix}kisahnabi muhammad
⌕ ${prefix}kisahnabi musa
⌕ ${prefix}kisahnabi nuh
⌕ ${prefix}kisahnabi sholeh
⌕ ${prefix}kisahnabi sulaiman
⌕ ${prefix}kisahnabi syuaib
⌕ ${prefix}kisahnabi yahya
⌕ ${prefix}kisahnabi yaqub
⌕ ${prefix}kisahnabi yunus
⌕ ${prefix}kisahnabi yusuf
⌕ ${prefix}kisahnabi zakariya

✘ *AL - QUR'AN MENU*

⌕ ${prefix}surah

✘ *A N I M E - M E N U*

⌕ ${prefix}chara
⌕ ${prefix}manga
⌕ ${prefix}otakudesu
⌕ ${prefix}neko
⌕ ${prefix}megumin
⌕ ${prefix}anime

✘ *T O O L S - M E N U*

⌕ ${prefix}tinyurl
⌕ ${prefix}cuttly
⌕ ${prefix}ceklokasi

✘ *M T K - M E N U*

⌕ ${prefix}luas-segitiga
⌕ ${prefix}kel-segitiga
⌕ ${prefix}luas-persegi
⌕ ${prefix}kel-persegi
⌕ ${prefix}kuadrat
⌕ ${prefix}kubik

✘ *W A R - M E N U*

⌕ ${prefix}virtexmenu
⌕ ${prefix}wamenu

✘ *G A M E - M E N U*

⌕ ${prefix}tebakgambar
⌕ ${prefix}kuismath
⌕ ${prefix}tebakkimia
⌕ ${prefix}asahotak
⌕ ${prefix}tebakkalimat
⌕ ${prefix}susunkata
⌕ ${prefix}caklontong
⌕ ${prefix}tekateki
⌕ ${prefix}tebakkabupaten
⌕ ${prefix}tebakbendera
⌕ ${prefix}tebakanime

✘ *T R A N S A K S I*

⌕ ${prefix}jual _nama_ _jumlah mao di jual_
⌕ ${prefix}beli _nama_ _jumlah mao di beli_
`

   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
   const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
   const reply = async (teks) => {

   sock.sendMessage(from, 
        { text: teks, mentions: [m.sender] },
        { quoted : m })  
    }      
   
// Auto Read & Presence Online
sock.sendReadReceipt(from, m.sender, [m.key.id])
sock.sendPresenceUpdate('available', from)
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6282118022072-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `Aespi-Botz`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ariel;;;\nFN:ariel\nitem1.TEL;waid=6282118022072:6282118022072\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}               

sock.setStatus = (status) => {
        sock.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }

/*if (isCmd){
let uptime = await runtime(process.uptime())
await sock.setStatus(`ACTIVE DURING : ${runtime(process.uptime())} TYPE ${prefix}menu`) 
	}*/
	

   //function Afk
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)    
     
   if (isGroup) {	
    for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk) && !isCmd) {
    const getId = afk.getAfkId(x, _afk)
    const getReason = afk.getAfkReason(getId, _afk)
    const sejak = afk.getAfkSejak(getId, _afk) 
    const cptl = `*「 AFK MODE 」*\n\n*Sssttt! Orang itu sedang afk, harap jangan ganggu*\n*Alasan*  : ${getReason}\n*Sejak* : ${sejak}`
    if (m.key.fromMe){ return }
    reply(cptl)
    }
   }
   
   if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
    const pep = `*@${m.sender.split("@")[0]}* telah kembali dari AFK!\n\n*Selama* : ${clockString(new Date - afk.getAfkTime(m.sender, _afk))}`
    reply(pep)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./storage/user/afk.json', JSON.stringify(_afk))
    } 
   }

      var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
       var date = new Date(dates);
        var bulan1 = date.getMonth();
let getUserRandomId = () => {
 	return _registered[Math.floor(Math.random() * _registered.length)].id
 }
let addRegisterUser = (userid, sender) => {
	let obj = { id: userid, name: sender }
	_registered.push(obj)
	fs.writeFileSync('./storage/user/registered.json', JSON.stringify(_registered))
	}
let createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}
let cekUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
			}
			})
			return status
			}
let isUser = cekUser(sender)
   //function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('../../storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('../../storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('../../storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('../../storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('../../storage/user/buruan.js')
   let DarahAwal =  Options.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']     
 // Game
cekWaktuGame(sock, tebakgambar)
if (isPlayGame(from, tebakgambar)) {
if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
var htgm = randomNomor(100, 150)
addMonay(m.sender, htgm)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${htgm} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
}
}
if (_math.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _math[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_math[m.sender.split('@')[0]].user, _math[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_math[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _math[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
} else {
reply("Jawaban Salah Kak!")
}
} 
if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tbkkimia[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tbkkimia[m.sender.split('@')[0]].user, _tbkkimia[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tbkkimia[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tbkkimia[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _asahotak[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_asahotak[m.sender.split('@')[0]].user, _asahotak[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_asahotak[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _susunkata[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_susunkata[m.sender.split('@')[0]].user, _susunkata[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_susunkata[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkalimat[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakkalimat[m.sender.split('@')[0]].user, _tebakkalimat[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakkalimat[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tekateki[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tekateki[m.sender.split('@')[0]].user, _tekateki[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tekateki[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tekateki[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _caklontong[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_caklontong[m.sender.split('@')[0]].user, _caklontong[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_caklontong[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakbendera[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakbendera[m.sender.split('@')[0]].user, _tebakbendera[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {
text: `${Options.info.botName} Game`,
footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakbendera[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, 
title: "List Game",
buttonText: "Play Again",
sections
}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebakanime.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakanime[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakanime[m.sender.split('@')[0]].user, _tebakanime[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakanime[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections
   }
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkabupaten[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakkabupaten[m.sender.split('@')[0]].user, _tebakkabupaten[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakkabupaten[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkabupaten[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklirik[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebaklirik[m.sender.split('@')[0]].user, _tebaklirik[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebaklirik[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
} else {
reply("Jawaban Salah Kak!")
}
}
if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklagu[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebaklagu[m.sender.split('@')[0]].user, _tebaklagu[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#inikuis", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `${Options.info.botName} Game`,footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebaklagu[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklagu[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
} else {
reply("Jawaban Salah Kak!")
}
}
  //Auto reset
  //Jika bot on di jam 24.00 maka limit dan darah bakal reset
  //Kalo off yaa kaga, Harus tunggu besok :v
    cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahOrg = reset
     console.log('Darah di reset')
     fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
     console.log('Success!')
     }, 
     {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
   )  
     cron.schedule('0 0 * * *', () => {
     const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     console.log('Success!')
    }, 
    {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
    ) 
      if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        sock.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : m })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Bangsat`) || chatmessage.includes(`bangsat`) || chatmessage.includes(`Bacot`) || chatmessage.includes(`bacot`) || chatmessage.includes(`Kontol`)){
       sock.sendMessage(from, 
        { text: 'Gaboleh Toxic Kak Nanti Bot Sedih :(' }, 
        { quoted : m })  

       } 
         if (isAntiLink) 
if (chatmessage.includes('https://chat.whatsapp.com')) {
               if (!m.key.fromMe) {
   if (isGroupAdmins) return reply('Untung Admin') 
               reply('Kenapa Kamu Kirim Link Group? Maaf Kamu Akan Di Kick Oleh Bot')
             let number = m.sender
               await sock.groupParticipantsUpdate(from, [number], 'remove')
               }
	  }	
	  
    if (chatmessage.startsWith("> ") && isOwner) {
	   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
		const ev = (val) => {
        var pekok = JSON.stringify(val, null, 2)
        var nyir = util.format(pekok)
        if (pekok === undefined) {
        nyir = util.format(val)
}
        return reply(nyir)
}
        try {
        reply(util.format(eval(`;(async () => { ${chatmessage.slice(2)} })()`)))
        } catch (e) {
        reply(util.format(e))
        }
	    } 
	   else 
	    if (chatmessage.startsWith("$ ") && isOwner) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEC\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
        exec(chatmessage.slice(2), (err, stdout) => {
	    if (err) return reply(`${err}`)
	    if (stdout) reply(`${stdout}`)
	    })
        } 
        else 
        if (chatmessage.startsWith("=> ") && isOwner) {
	    console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
	    try {
	    let vul =  eval(chatmessage.slice(2))
	    if (typeof vul !== 'string') vul = require("util").inspect(vul)
		reply(`${vul}`)
        } catch (err) {
		reply(`${err}`)
	   }
     }  
  if (isCmd && !isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName))
   
  if (isCmd && isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
/*if (!isCmd && !isGroup && !m.ke+y.fromMe) {
const simi = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${chats}&lc=id&cf=false`)
const sami = simi.success
reply(sami) 
}*/
if (!isGroup && !m.sender.includes('62')) {
reply('Only Indonesia User') 
await sock.updateBlockStatus(from, "block")
}
if (isCmd && !isUser && !m.key.fromMe)  { 
addRegisterUser(sender)
}
 switch (order) {
case 'cariteman': 
case 'start':
case 'next':{
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
let hem = getUserRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Sedang Mencari Seseorang...')
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
let teks = `‣ *Nama* : ${m.pushName}
‣ *Nomor* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=Hai+kak+boleh+kenalan? 

Klik APi untuk memulai obrolan`
 let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: ppuser },
      caption: teks,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
}         
             break

 case 'tebakkabupaten':{
 if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung") 
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkabupaten
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let gambar = data.url
   let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s`
   _tebakkabupaten[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakkabupaten[m.sender.split('@')[0]].time)
   if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkabupaten[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
 
    }
 }
 break
 case 'tebakanime':{
 if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakanime
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let gambar = data.image
   let japan = data.name_jp
   let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
   _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakanime[m.sender.split('@')[0]].time)
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakanime[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
 
    }
 }
 break
 case 'tebakbendera':{
 if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   let upah = randomInt(500, 600)   
   let waktu = 60000
   /*
   / 1000 = 1 detik
   / 60000 = 1 menit
   >_tebakbendera
   */
   let datta = tebakbendera
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.name
   let gambar = data.img
   let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s`
   _tebakbendera[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakbendera[m.sender.split('@')[0]].time)
   if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakbendera[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
 
    }
 }
 break
case 'caklontong':{
 if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = caklontong
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let desk = data.deskripsi
   let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _caklontong[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_caklontong[m.sender.split('@')[0]].time)
   if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [m.sender] },
{ quoted : m }) 
      delete _caklontong[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
 
    }
 }
 break
case 'tebaklagu':{
 if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta =  tebaklagu
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let soal = data.artists
   let songs = data.songs
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklagu[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
sock.sendMessage(from, { text : teks}, { quoted: m })
await sock.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
  await sleep(_tebaklagu[m.sender.split('@')[0]].time)
   if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklagu[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
 
    }
 }
 break
case 'tebaklirik':{
 if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta =  tebaklirik
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklirik[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebaklirik[m.sender.split('@')[0]].time)
   if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklirik[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
 
    }
 }
 break
case 'tekateki':{
 if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tekateki
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tekateki[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tekateki[m.sender.split('@')[0]].time)
   if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tekateki[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
 
    }
 }
 break
case 'tebakkalimat':{
 if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkalimat
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebakkalimat[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebakkalimat[m.sender.split('@')[0]].time)
   if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkalimat[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
 
    }
 }
 break
case 'susunkata':{
 if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = susunkata
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let tipe = data.tipe
   let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s`
   _susunkata[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_susunkata[m.sender.split('@')[0]].time)
   if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _susunkata[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
 
    }
 }
 break
case 'asahotak':{
 if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = asahotak
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s`
   _asahotak[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_asahotak[m.sender.split('@')[0]].time)
   if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _asahotak[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
 
    }
 }
 break
case 'tebakkimia':{
 if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkimia
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.lambang
   let unsur = data.unsur
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${waktu}s`
   _tbkkimia[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tbkkimia[m.sender.split('@')[0]].time)
   if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tbkkimia[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
 
    }
 }
 break
case 'reset':
if (!isOwner) return reply('khusus owner') 
const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     fs.writeFileSync('./storage/user/_registered.json', JSON.stringify(_limit))
     exec('pm2 restart all') 
     reply('Success!')
break
case 'kuismath':
case 'math':{
    if (_math.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   
     let operators = {
      '+': '+',
      '-': '-',
      '*': '×'
     }  
  if (!args[0]) return reply("Mode : \nnoob | easy | medium | hard | extreme | deathzone")
  let mode = args[0]   
  if (args[0] === "noob"){
  let a = randomInt(-5, 5)
  let b = randomInt(10, 1)
  let op = pickRandom(['+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)    
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "easy"){
  let a = randomInt(-9, 9)
  let b = randomInt(99, 9)
  let op = pickRandom(['+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 1500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "medium"){
  let a = randomInt(-99, 9)
  let b = randomInt(999, -99)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 3500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "hard"){
  let a = randomInt(-999, 99)
  let b = randomInt(9999, -999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 5000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m })  
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "extreme"){
  let a = randomInt(-999, 99)
  let b = randomInt(999999, -99999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 10000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "veryextreme"){
  let a = randomInt(-9999, 999)
  let b = randomInt(99999999, -99999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 25000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "deathzone"){
  let a = randomInt(-99999, 9999)
  let b = randomInt(9999999999, -9999999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 35000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else reply('Mode itu tidak ada jancuk!')
  
  } 
  break
case 'webtonsearch': case 'webtoon':
if (!q) return reply('Nyari apa')
await reply('Wait')
xfar.Webtoons(q).then(async data => {
let txt = `*------「 WEBTOONS 」------*\n\n`
for (let i of data) {
txt += `*🛡 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*👤 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📃Url :* ${i.url}\n ----------------------------------------------------------\n`
}
await reply(txt)
})
.catch((err) => {
reply(lang.err())
})
break
case 'ceklokasi':
	  if (!m.isQuotedLocation) return reply(`Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`)
            console.log(`Request Status Zona Penyebaran Covid-19 (${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude}, ${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude}).`)
            const zoneStatus = await getLocationData(m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude, m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude)
            if (zoneStatus.kode !== 200) return reply('Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `Informasi dampak disekitar anda:\n${datax}`
reply(texto) 
            break	
case 'cuttly': 
if (!q) return reply('link?')
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
let anu3 = await fetchJson(`https://cutt.ly/api/api.php?key=341578d2de946244680120edd9d03f068dd38&short=${args[0]}`)
reply(anu3.url.shortLink) 
} catch (e) {
let emror = String(e)
reply(`Emang itu link?`)
}
break
case 'luas-segitiga':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
reply(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const kuadrat = bdr.rdb.kuadrat(q)
reply(`*Hasil:* ${kuadrat}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kubik':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const kubik = bdr.rdb.kubik(q)
reply(`*Hasil:* ${kubik}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
//case
    case 'otaku': case 'otakudesu':
if (q.includes('--help')) return reply(examquery) 
if(!q) return reply('judul animenya?')
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
let anime = await hx.otakudesu(q)
let rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
sock.sendMessage(from, { image : { url : anime.img }, caption : rem}, { quoted : m }) 
break
case 'mediafire':
if (q.includes('--help')) return reply(examlink) 
if (args.length < 1) return reply('Mana Link Nya Ngab')
if (!args[0].includes('mediafire')) return reply(`Link is not valid`)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
🔖Judul : ${baby1[0].nama}
🔖 Link : ${baby1[0].link}
🔖 Size : ${baby1[0].size}				
_Mengirim file..._`
reply(result4)
sock.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
case 'aesthetic':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const Ariell = fs.readFileSync("./FunctionMD/scrape/Result/RandomImage/aesthetic.json");
const Ariel = JSON.parse(Ariell)
const Arielll = Math.floor(Math.random() * Ariel.length)
const Ariellll = Ariel[Arielll]
sock.sendMessage(from, { image : { url : Ariellll }, caption : 'nih' }, { quoted : m}) 
break
case 'storywa':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const Ariel1 = fs.readFileSync("./FunctionMD/scrape/Result/RandomVideo/storywa.json");
const Ariel2 = JSON.parse(Ariel1)
const Ariel3 = Math.floor(Math.random() * Ariel2.length)
const Ariel4 = Ariel2[Ariel3]
sock.sendMessage(from, { video : { url : Ariel4.url }, caption : 'nih' }) 
break
case 'patrik':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const Arielll1 = fs.readFileSync("./Ariel-SP_Ganteng/Patrik/stiker.json");
const Arielll2 = JSON.parse(Arielll1)
const Arielll3 = Math.floor(Math.random() * Arielll2.length)
const Arielll4 = Arielll2[Arielll3]
sock.sendMessage(from, { image : { url : Arielll4.url }, caption : 'Jika Ingin Di Jadikan Stiker Silahkan Balas Gambar Ini Dan Ketikan #s' }) 
break
case 'penyegar':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const Ariellll1 = fs.readFileSync("./Ariel-SP_Ganteng/Ariel-Kece.json");
const Ariellll2 = JSON.parse(Ariellll1)
const Ariellll3 = Math.floor(Math.random() * Ariellll2.length)
const Ariellll4 = Ariellll2[Ariellll3]
sock.sendMessage(from, { video : { url : Ariellll4.url }, caption : 'Penyegar Random' }) 
break
case 'moodbooster':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const Arielllll1 = fs.readFileSync("./Ariel-SP_Ganteng/Ariel-Kece1.json");
const Arielllll2 = JSON.parse(Arielllll1)
const Arielllll3 = Math.floor(Math.random() * Arielllll2.length)
const Arielllll4 = Arielllll2[Arielllll3]
sock.sendMessage(from, { video : { url : Arielllll4.url }, caption : 'Mood Booster Random' }) 
break
case 'surah': {
if (args.length < 1) return reply(`Example : ${prefix}surah 1\nSurah Yang Tersedia 1 - 114`)
hx.surah(q).then(yu => {
let t = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of yu) {
t += `*•> Arab :* ${i.arab} \n`
t += `*•> Indo  :* ${i.indo} \n`
t += `*•> Latin :* ${i.latin} \n\n`
}
reply(t)
})
}
break
case 'sewabot':
  reply(`*Permanent* : *_10K_*\nSilahkan Chat wa.me/6282118022072 ಥ‿ಥ`)
  break
case 'unduh':{
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
  try{
  let filename = Math.ceil(Math.random() * 99999)
   if (m.isQuotedImage) {
  var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
  var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
    fs.writeFileSync('./' + filename + '.jpg', buffer)
    reply('success')
    sock.sendMessage(from, { image: { url: './' + filename + '.jpg' }}, { quoted: m })

  } else if (m.isQuotedVideo) {
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
  var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   let filename = Math.ceil(Math.random() * 99999)
    fs.writeFileSync('./' + filename + '.mp4', buffer)
    reply('success')
    sock.sendMessage(from, { video: { url: './' + filename + '.mp4' }}, { quoted: m })
  } else if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true){
   var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync('./' + filename + '.webp', buffer)
     webp2mp4File('./' + filename + '.webp').then( data => {
     fs.unlinkSync('./' + filename + '.webp')
     sock.sendMessage(from, { video: { url: data.result }}, { quoted: m })
     })
  } else if (m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage){
  var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync('./' + filename + '.jpg', buffer)
   reply('success')
   sock.sendMessage(from, { image: { url: './' + filename + '.jpg' }}, { quoted: m })
   }
   } catch { reply(`Reply gambar/video/sticker dengan caption ${prefix + 'unduh'}`) }
  }
 break
 case 'togif':{
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
 try{
  if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true){
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./999.webp`, buffer)
     webp2mp4File(`./999.webp`).then( data => {
     fs.unlinkSync(`./999.webp`)
     sock.sendMessage(from, { video: { url : data.result }, caption: "Nih", gifPlayback: true}, { quoted: m } )
     })
    } 
    } catch { reply(`reply sticker dengan caption ${prefix + 'togif'}\n "(Sticker harus yang bergerak!)"`)}
   }
  break
 case 'tomp3':{
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
    if (!m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage) return reply ('Reply videonya tod!')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   fs.writeFileSync('./' + 777 + '.mp3', buffer)
   sock.sendMessage(from, { audio: {url : './777.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})    
   }
  break
 case 'tovn':{
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
 try{
   if (m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage){
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./101010.mp3`, buffer)
      sock.sendMessage(from, { audio: {url : './101010.mp3'}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
   } else if (m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage){
    reply('Please wait.....')
     var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   fs.writeFileSync('./' + 777 + '.mp3', buffer)
   sock.sendMessage(from, { audio: {url : './777.mp3'}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})    
   } 
   } catch { reply(`Reply audio/video dengan caption ${prefix + 'tovn'}`) } 
  }
  break
case 'tinyurl':
if (q.includes('--help')) return reply(examlink)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
try {
const link = args[0]
const anu3 = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu3.data}`)
} catch (e) {
let emror = String(e)
reply(`Emang itu link? `)
}
break
case 'simi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply('contoh : #simi udah makan blom') 
const simi = await fetchJson(`https://simsimi.info/api/?text=${q}&lc=id`)
const sami = simi.success
reply(sami) 
//sock.sendMessage(from, { text : sami },m) 
break
case 'lirik':
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return reply('title?')
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
lirikLagu(q).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'jadwaltv':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply('Kirim perintah *#jadwaltv [channel]*')
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
reply(await jadwaltv(q))
break
case 'covidindo':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
sock.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'gempa':
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
sock.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'chara':
if (q.includes('--help')) return reply(examquery) 
if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
let im = await hx.chara(q)
let acak = im[Math.floor(Math.random() * im.length)]
await sock.sendMessage(from, {image : { url : acak }, caption : 'Nih bang'})
break
break

case 'tebakgambar':
if (q.includes('--help')) return reply(examkosong) 
if (isPlayGame(from, tebakgambar)) return reply(`Masih ada game yang belum diselesaikan`)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
kotz.tebakgambar().then( data => {
const data2 = data[0]
data2.jawaban = data2.jawaban.split('Jawaban ').join('')
var teks = `*TEBAK GAMBAR*\n\nPetunjuk : ${data2.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`
sock.sendMessage(from, { image: { url: data2.image }, caption: teks }, { quoted: m })
.then( res => {
var jawab = data2.jawaban.toLowerCase()
addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
})
})
break
case 'google': {
if (q.includes('--help')) return reply(examquery) 
if (!q) reply(`*Example : ${prefix + order} Cara buat bakso*`) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
google({'query': q}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `〽️ *Title* : ${g.title}\n`
teks += `🪙 *Description* : ${g.snippet}\n`
teks += `🪃 *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
sock.sendMessage(from, { image : { url : 'https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg' }, caption : teks }) 
})
}
break
        
case 'setdesc': case 'setdescription':
if (q.includes('--help')) return reply(examquery) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} teks`)
await sock.groupUpdateDescription(from, q)
break
case 'welcome': case 'grup':
if (q.includes('--help')) return reply(`Example : ${prefix + order} on/off`) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} _options_\nOptions : off & on\nContoh : ${prefix + order} off`)
if (q == "off") {
  sock.groupSettingUpdate(from, 'announcement')
  reply(`*Sukses menutup group*`)
} else if (q == "on") {
  sock.groupSettingUpdate(from, 'not_announcement')
  reply(`*Sukses membuka group*`)
} else {
  reply(`Kirim perintah ${prefix + order} _options_\nOptions : off & on\nContoh : ${prefix + order} off`)
}
break
case 'revoke':
if (q.includes('--help')) return reply(examkosong) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
await sock.groupRevokeInvite(from)
break
case 'setnamegroup':
if (q.includes('--help')) return reply(examkosong) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) reply('Diganti jadi apa') 
await sock.groupUpdateSubject(from, q)
break
case 'wiki':
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
sock.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'asupan':
if (q.includes('--help')) return reply(examquery) 
if (q.toLowerCase() === "geayubi") {
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
const oi = geayubi
const jsonData = JSON.parse(oi);
const xm1 = Math.floor(Math.random() * jsonData.length);
const xm2 = jsonData[xm1];
console.log(xm2.url) 
sock.sendMessage(from, {video : { url : xm2.url }, caption : 'nih'}) 
} else if  (q.toLowerCase() === "bocil") {
const ooi = bocil
const jsonData = JSON.parse(ooi);
const x1 = Math.floor(Math.random() * jsonData.length);
const x2 = jsonData[x1];
console.log(x2.url) 
sock.sendMessage(from, {video : { url : x2.url }, caption : 'nih'}) 
} else if (q.toLowerCase() === "rikagusriani") {
const oi = geayubi
const jsonData = JSON.parse(oi);
const xm1 = Math.floor(Math.random() * jsonData.length);
const xm2 = jsonData[xm1];
console.log(xm2.url) 
sock.sendMessage(from, {video : { url : xm2.url }, caption : 'nih'}) 
} else {
reply(`𝗔𝘀𝘂𝗽𝗮𝗻 𝗮𝗽𝗮\n${prefix + order} bocil\n${prefix + order} geayubi\n${prefix + order} rikagusriani`) 
}
break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../scrape/uploader')
let media = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
if (m.isQuotedImage) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!m.isQuotedImage) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'jadigambar': case 'toimg': case 'toimage':{
if (q.includes('--help')) return reply(examplyme) 
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo toimg stikernya jangan yang bergerak tod!')
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./666.jpg`, buffer)
     
     sock.sendMessage(from, { image: { url: `./666.jpg` }}, { quoted: m })
   }
  break
 case 'tomp4':{
if (q.includes('--help')) return reply(examplyme) 
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo yang ini stikernya wajib yang bergerak tod!')
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./999.webp`, buffer)
     webp2mp4File(`./999.webp`).then( data => {
     fs.unlinkSync(`./999.webp`)
     sock.sendMessage(from, { video: { url: data.result }}, { quoted: m })
     })
   }
  break
case'cnn':
if (q.includes('--help')) return reply(examquery) 
var server = await cnn()
//console.log(server)
let cn = 'CNN NEWS'
for (let i = 0; i < server.length; i++) {
cn += `\n\nTitle : ${server[i].judul}\nLink : ${server[i].link}\nImage: ${server[i].thumb}`
}
sock.sendMessage(from, {image : { url : server[10].thumb }, caption : cn}) 
break
case 'manga':{
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Masukkan query!`)
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
let res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${q}`)
let json = await res.json()
let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
sock.sendMessage(from, {image : { url : image_url }, caption: mangaingfo})
} 
  break
case 'broadcast':
if (q.includes('--help')) return reply(examquery) 
if (!isOwner) return reply('khusus owner')
if (args.length < 1) return reply(`Masukkan isi pesannya`)
const bc = store.chats.all()
for (let i of bc) {
sock.sendMessage(i.id, { text: `*[ PENGUMUMAN ]*\n\n${q}` })
}
break
case 'couple': {
if (q.includes('--help')) return reply(examkosong) 
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(from, { image: { url: random.male }, caption: `Donasi : ${Options.info.duituntukowner}` }, { quoted: m })
sock.sendMessage(from, { image: { url: random.female }, caption: `Nanti Donasi Ya Xixi` }, { quoted: m })
            }
	    break
 case 'speed':
if (q.includes('--help')) return reply(examkosong) 
let timestamp = speed();
let latensi = speed() - timestamp
reply(`${latensi.toFixed(4)} Second`)
break
case 'hoorror_blood':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link13 = `${textproo.hoorror_blood}`
     let anu13 = await textpro(link13, q)
     console.log(anu13)
    sock.sendMessage(from, { image: { url : anu13 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
   break 
   case 'sand':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link12 = `${textproo.sand}`
     let anu12 = await textpro(link12, q)
     console.log(anu12)
    sock.sendMessage(from, { image: { url : anu12 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
   break
   case 'magma':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link11 = `${textproo.magma}`
     let anu11 = await textpro(link11, q)
     console.log(anu11)
    sock.sendMessage(from, { image: { url : anu11 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'blackpink':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link10 = `${textproo.blackpink}`
     let anu10 = await textpro(link10, q)
     console.log(anu10)
    sock.sendMessage(from, { image: { url : anu10 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'sketch':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link9 = `${textproo.sketch}`
     let anu9 = await textpro(link9, q)
     console.log(anu9)
    sock.sendMessage(from, { image: { url : anu9 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'glass':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link8 = `${textproo.glass}`
     let anu8 = await textpro(link8, q)
     console.log(anu8)
    sock.sendMessage(from, { image: { url : anu8 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
   break
   case 'lightglow':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link7 = `${textproo.lightglow}`
     let anu7 = await textpro(link7, q)
     console.log(anu7)
    sock.sendMessage(from, { image: { url : anu7 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'sci_fi':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
      let link6 = `${textproo.sci_fi}`
      let anu6 = await textpro(link6, q)
     console.log(anu6)
    sock.sendMessage(from, { image: { url : anu6 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
  
}
  break
  case 'ice':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link5 = `${textproo.ice}`
     let anu5 = await textpro(link, q)
     console.log(anu5)
    sock.sendMessage(from, { image: { url : anu5 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'demon':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link4 = `${textproo.gdemon}`
     let anu4 = await textpro(link4, q)
     console.log(anu4)
    sock.sendMessage(from, { image: { url : anu4 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'batman':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link3 = `${textproo.batman}`
     let anu3 = await textpro(link3, q)
     console.log(anu3)
    sock.sendMessage(from, { image: { url : anu3 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'sea_metal':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link1 = `${textproo.sea_metal}`
     let anu1 = await textpro(link1, q)
     console.log(anu1)
    sock.sendMessage(from, { image: { url : anu1 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'skeleton':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link2 = `${textproo.skeleton}`
     let anu2 = await textpro(link2, q)
     console.log(anu2)
    sock.sendMessage(from, { image: { url : anu2 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'arielpetir2':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link15 = `${textproo.arielpetir2}`
     let anu15 = await textpro(link15, q)
     console.log(anu15)
    sock.sendMessage(from, { image: { url : anu15 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'arielsandypermana':{
 {
 	           const arielkece = `*Hallo Kak* ${m.sender.split("@")[0]} (≧▽≦)
 
⌕ *Nama Owner : ${Options.info.ownerName}*
⌕ *Nama Bot : ${Options.info.botName}*
⌕ *Nomor Owner :* wa.me/${Options.info.wmAriel}
⌕ *Saweria :* ${Options.info.duituntukowner}
`
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "🌀 Semua Menu", rowId: "#menu2", description: `Menampilkan Semua Menu ${Options.info.botName}`},{title: "👻 Group Menu", rowId: "#groupmenu", description: "Menampilkan Menu Group"},{title: "📢 Download Menu", rowId: "#downloadmenu", description: "Menampilkan Menu Download"},{title: "🎥 Random Video", rowId: "#videomenu", description: `Random Video By ${Options.info.ownerName}`},{title: "🌚 Convert Menu", rowId: "#convertmenu", description: "Menampilkan Menu Convert"},{title: "⚔️ RPG Menu", rowId: "#rpgmenu", description: "Menampilkan Menu RPG ⚔️"},{title: "✏️ Textpro Menu", rowId: "#textpromenu", description: "Menampilkan Menu Textpro"},{title: "🗣️ Info Menu", rowId: "#infomenu", description: "Menampilkan Menu Informasi"},{title: "🍳 Google Menu", rowId: "#googlemenu", description: "Menampilkan Menu Google"},{title: "🤖 Random Menu", rowId: "#randommenu", description: "Menampilkan Menu Random"},{title: "🎧 Sound Menu", rowId: "#soundmenu", description: "Menampilkan Menu Musik"},{title: "📖 Kisah Menu", rowId: "#kisahmenu", description: "Menampilkan Menu Kisah Nabi"},{title: "👀 Wibu Menu", rowId: "#animemenu", description: "Menampilkan Menu Wibu"},{title: "⌨️ Tools Menu", rowId: "#toolsmenu", description: "Menampilkan Menu Tools"},{title: "🦃 MTK Menu", rowId: "#mtkmenu", description: "Menampilkan Menu MTK"},{title: "🎮 Game Menu", rowId: "#gamemenu", description: "Menampilkan Menu Game"},{title: "💎 Top Up Game", rowId: "#topup", description: "Anda Ingin Top Up?"},{title: "☢️ Virtex Menu", rowId: "#virtexmenu", description: `Anda Ingin War? Yuk Cobain Virtex ${Options.info.botName}`},{title: "☠️ WA Imun Menu", rowId: "#wamenu", description: "WhatsApp Anti Virtex"},{title: "📂 Script Bot Gratis", rowId: "#arielnolimit", description: "Script Gratis By Ariel"}, ]}    ]
                let listMessage = {footer: "Jika Ada Salah Satu Fitur Yang Error Silahkan Chat Owner Ya Kak Xixixi ><",text: arielkece, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'videomenu':{
 {
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "🎥 Mood Booster", rowId: "#moodbooster", description: "Random Video Bikin Mood Balik"},{title: "🎥 Story WhatsApp", rowId: "#storywa", description: "Random Video Kata Kata Cocok Untuk SW"},{title: "🎥 Ciwi Ciwi Traveling", rowId: "#penyegar", description: "Random Cewe Bikin Mata Melek"},{title: "🎥 Random Asupan", rowId: "#asumenu", description: "Asupan Bocil, Geayoubi, Rikagusriani"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Random Video`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'asumenu':{
 {
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "🎥 Asupan Geayoubi", rowId: "#asupan geayubi", description: "Random Video Geayoubi"},{title: "🎥 Asupan Bocil", rowId: "#asupan bocil", description: "Random Video Bocil Sexy"},{title: "🎥 Asupan Rikagusriani", rowId: "#asupan rikagusriani", description: "Random Video Rikagusriani"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Klick Aja Tombol Dibawah Gw Males Kasih Judul Udh Kehabisan ide🗿`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'wamenu':{
 {
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "🌡️ WhatsApp Imun [ 1 ]", rowId: "#waariel https://www.mediafire.com/file/2kughxqmq5wwusz/%2523WhatsApp_Clonne_By_IrwanMhmd_.apk/file", description: "Anti Virtex Full Kebal"},{title: "🌡️ WhatsApp Imun [ 2 ]", rowId: "#waariel https://www.mediafire.com/file/wmypc1tldxgp0xh/GBWhatsApp.apk/file", description: "Anti Virtex Virgam DLL"},{title: "🌡️ WhatsApp Imun [ 3 ]", rowId: "#waariel https://www.mediafire.com/file/gfuxxrc9cbsjv4w/Hwwhatsapp.apk/file", description: "Kebal Virus"},{title: "🌡️ WhatsApp Imun [ 4 ]", rowId: "#waariel https://www.mediafire.com/file/psvz8kpbrvjxejn/Wago.apk/file", description: "The Best"},{title: "🌡️ WhatsApp Imun [ 5 ]", rowId: "#waariel https://www.mediafire.com/file/77xa11ukf5t25b9/hwmodswa.apk/file", description: "Lope yu"},{title: "🌡️ WhatsApp Imun [ 6 ]", rowId: "#waariel https://www.mediafire.com/file/gfuxxrc9cbsjv4w/Hwwhatsapp.apk/file", description: "Lope u"},{title: "🌡️ Zarchiver", rowId: "#mediafire https://www.mediafire.com/file/jfu3xq6qyx8cvvj/Untuk-WaImun.apk/file", description: "Aplikasi Untuk Memasang Wa Imun"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Fitur WhatsApp Imun Cocok Untuk War`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'topup':{
 {
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "⚔️ Topup Free Fire", rowId: "#freefire", description: "TopUp Diamond Free Fire"},{title: "💎 Topup Mobile Legends", rowId: "#mlmenu", description: "Topup Diamond Mobile Legends"},{title: "🔫 Topup Point Blank", rowId: "#pbmenu", description: "Isi Cash Point Blank"},{title: "🌟 Topup Super Sus", rowId: "#supersus", description: "Topup Super Sus"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Anda Ingin Top Up Game? Silahkan Klik Tombol Di Bawah Untuk Melihat Menu Top Up Yang Tersedia`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'freefire':{
  	m.reply(from, '70💎 : 10K\n 140💎 : 20K\n355💎 : 50K\n720💎 : 100K\n1450💎 : 200K\n2180💎 : 300K\n3640💎 : 500K\n\nMM : 32K\nMB : 145K', { quoted : m } )
      sock.sendMessage(from, { audio: {url : './FunctionMD/Topup.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})
}
break
  case 'mlmenu':{
  	m.reply(from, '25 + 3💎 : 9K\n40 + 4💎 : 14K\n53 + 6💎 : 18K\n77 + 8💎 : 25K\n154 + 16💎 : 49K\n217 + 23💎 : 69K\n256 + 40💎 : 85K', { quoted : m } )
      sock.sendMessage(from, { audio: {url : './FunctionMD/Topup.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})
}
break
  case 'pbmenu':{
  	m.reply(from, '1200 Cash : 11K\n2400 Cash : 21K\n6000 Cash : 51K\n12000 Cash : 101K\n24000 Cash : 201K\n36000 Cash : 301K\n60000 Cash : 500K', { quoted : m } )
      sock.sendMessage(from, { audio: {url : './FunctionMD/Topup.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})
}
break
  case 'supersus':{
  	m.reply(from, '100 🌟 : 11K\n200 🌟 : 21K\n310 🌟 : 29K\n520 🌟 : 51K\n1060 🌟 : 101K\n2180 🌟 : 211K\n5600 🌟 : 531K', { quoted : m } )
      sock.sendMessage(from, { audio: {url : './FunctionMD/Topup.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})
}
break
  case 'groupmenu':{
  	m.reply(from, '✘ *G R O U P - M E N U*\n\n⌕ #add\n⌕ #kick\n⌕ #promote\n⌕ #demote\n⌕ #setnamegroup\n⌕ #setdesc\n⌕ #revoke\n⌕ #afk\n⌕ #delete\n⌕ #broadcast', { quoted : m } )
}
break
case 'arielnolimit':
const arielsp4 = `*Tutorial Nya*				

Download Termux & Zarchiver Di Playstore Terlebih Dahulu, Lalu Ketikan Command Dibawah

✏️ pkg update -y
✏️ pkg upgrade
✏️ pkg install nodejs -y
✏️ pkg install nodejs-lts
✏️ pkg install git -y
✏️ pkg install imagemagick -y
✏️ pkg install libwebp -y
✏️ pkg install ffmpeg -y
✏️ termux-setup-storage
✏️ cd /sdcard
✏️ git clone https://github.com/Aespi-Gaming/Base-Aespi_Botz
✏️ cd Base-Aespi_Botz
✏️ yarn
✏️ npm start

*TUTORIAL GANTI NOMOR BOT*

✏️ Masuk Ke Folder *Base-Aespi_Botz*
✏️ Masuk Ke Folder *FunctionMD*
✏️ Masuk Ke Folder *settings*
✏️ Buka File *options.js*
✏️ Ganti Nomor Bot & Owner

*TUTORIAL SCAN QR NYA*

✏️ Buka WhatsApp Yang Nomor Bot
✏️ Klick Titik Tiga Yang Ada Di Atas
✏️ Klick Perangkat Tertaut
✏️ Scan Dan Tunggu Beberapa Detik`
reply(arielsp4)
break
case 'downloadmenu':{
  	m.reply(from, '✘ *D O W N L O A D - M E N U*\n\n⌕ #play\n⌕ #tiktoknowm\n⌕ #tiktokmp3\n⌕ #youtubemp3\n⌕ #youtubemp4\n⌕ #mediafire', { quoted : m } )
}
break
case 'convertmenu':{
  	m.reply(from, '✘ *C O N V E R T - M E N U*\n\n⌕ #toimg\n⌕ #tomp4\n⌕ #tomp3\n⌕ #togif\n⌕ #unduh\n⌕ #sticker', { quoted : m } )
}
break
case 'rpgmenu':{
    {
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "[ 🏹 ] Berburu", rowId: "#berburu", description: "Berburu Di Hutan"},{title: "[ 🎣 ] Memancing Ikan", rowId: "#mancing", description: "Memancing Ikan"},{title: "[ ⛏️ ] Menambang", rowId: "#menambang", description: "Menambang Untuk Mendapatkan Emas"},{title: "[ ⚒️ ] Mining", rowId: "#mining", description: "Mining Yuk"},{title: "[ ♥️ ] Mengisi Darah", rowId: "#heal", description: "Mengisi Darah Agar Kamu Tidak Mati"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Adventure`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'textpromenu':{
  	m.reply(from, '✘ *T E X T P R O - M E N U*\n\n⌕ #arielpetir\n⌕ #arielpetir2\n⌕ #bussines3d\n⌕ #stoneariel3d\n⌕ #neon3dariel\n⌕ #neon\n⌕ #impresiveariel\n⌕ #neondevil3dariel\n⌕ #underwater3d\n⌕ #bears3dariel\n⌕ #fireworkbucin\n⌕ #metaldarkariel\n⌕ #halloweenariel\n⌕ #captainamerikabyariel\n⌕ #spacetext\n⌕ #plastic3d\n⌕ #dropwater3d\n⌕ #avengerslogo3d\n⌕ #harrypoter\n⌕ #brokenglass\n⌕ #wonderfulgravity3d\n⌕ #futuristicneon3d\n⌕ #skytext3d\n⌕ #robotr2\n⌕ #natal3d\n⌕ #matrixstyle\n⌕ #waterpiperariel\n⌕ #blackpink\n⌕ #lightglow\n⌕ #glass\n⌕ #hoorror_blood\n⌕ #sand\n⌕ #sketch\n⌕ #magma\n⌕ #batman\n⌕ #demon\n⌕ #sci_fi\n⌕ #ice\n⌕ #sea_metal\n⌕ #skeleton\n⌕ #transformer\n⌕ #warning\n⌕ #denim', { quoted : m } )
}
break
case 'infomenu':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "Nomor Owner", rowId: "#owner", description: "Nomor Ariel Ganteng"},{title: "Leaderboard", rowId: "#leaderboard", description: "Anda Di Posisi Berapa?"},{title: "Bot Aktif Selama?", rowId: "#runtime", description: "Info Bot"},{title: "Profile", rowId: "#profile", description: "Profile Anda"},{title: "Leaderboard", rowId: "#inventori", description: "Hasil Adventure Anda"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Info`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'googlemenu':{
	m.reply(from, '✘ *G O O G L E - M E N U*\n\n⌕ #detiknews\n⌕ #wiki\n⌕ #google\n⌕ #gempa\n⌕ #lirik\n⌕ #jadwaltv\n⌕ #covidindo\n⌕ #pinterest\n⌕ #webtoon\n⌕ #anime\n⌕ #wallpaperaccess', { quoted : m } )
}
break
case 'randommenu':{
	m.reply(from, '✘ *R A N D O M - M E N U*\n\n⌕ #patrik\n⌕ #penyegar\n⌕ #moodbooster\n⌕ #waifu\n⌕ #simi\n⌕ #awoo\n⌕ #shinobu\n⌕ #neko\n⌕ #megumin\n⌕ #couple\n⌕ #aesthetic\n⌕ #artinama\n⌕ #storywa\n⌕ #asupan', { quoted : m } )
}
break
case 'soundmenu':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "Sound Ke 1", rowId: "#sound1", description: "Sound Jedag Jedug 1"},{title: "Sound Ke 2", rowId: "#sound2", description: "Sound Jedag Jedug 2"},{title: "Sound Ke 3", rowId: "#sound3", description: "Sound Jedag Jedug 3"},{title: "Sound Ke 4", rowId: "#sound4", description: "Sound Jedag Jedug 4"},{title: "Sound Ke 5", rowId: "#sound5", description: "Sound Jedag Jedug 5"},{title: "Sound Ke 6", rowId: "#sound6", description: "Sound Jedag Jedug 6"},{title: "Sound Ke 7", rowId: "#sound7", description: "Sound Jedag Jedug 7"},{title: "Sound Ke 8", rowId: "#sound8", description: "Sound Jedag Jedug 8"},{title: "Sound Ke 9", rowId: "#sound9", description: "Sound Jedag Jedug 9"},{title: "Sound Ke 10", rowId: "#sound10", description: "Sound Jedag Jedug 10"},{title: "Sound Ke 11", rowId: "#sound11", description: "Sound 11"},{title: "Sound Ke 12", rowId: "#sound12", description: "Sound Jedag Jedug 12"},{title: "Sound Ke 13", rowId: "#sound13", description: "Sound Jedag Jedug 13"},{title: "Sound Ke 14", rowId: "#sound14", description: "Sound Jedag Jedug 14"},{title: "Sound Ke 15", rowId: "#sound15", description: "Sound Jedag Jedug 16"},{title: "Sound Ke 16", rowId: "#sound16", description: "Sound Jedag Jedug 16"},{title: "Sound Ke 17", rowId: "#sound17", description: "Sound Jedag Jedug 17"},{title: "Sound Ke 18", rowId: "#sound18", description: "Sound Jedag Jedug 18"},{title: "Sound Ke 19", rowId: "#sound19", description: "Sound Jedag Jedug 19"},{title: "Sound Ke 20", rowId: "#sound20", description: "Sound Jedag Jedug 20"},{title: "Sound Ke 21", rowId: "#sound21", description: "Sound Jedag Jedug 21"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Musik`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'kisahmenu':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "Kisah Nabi Adam", rowId: "#kisahnabi adam", description: "Nabi Adam AS"},{title: "Kisah Nabi Ayyub", rowId: "#kisahnabi ayyub", description: "Nabi Ayyub AS"},{title: "Kisah Nabi Daud", rowId: "#kisahnabi daud", description: "Nabi Daud AS"},{title: "Kisah Nabi Dzulkifli", rowId: "#kisahnabi dzulkifli", description: "Nabi Dzulkifli AS"},{title: "Kisah Nabi Harun", rowId: "#kisahnabi harun", description: "Nabi Harun AS"},{title: "Kisah Nabi Hud", rowId: "#kisahnabi hud", description: "Nabi Hud AS"},{title: "Kisah Nabi Ibrahim", rowId: "#kisahnabi ibrahim", description: "Nabi ibrahim AS"},{title: "Kisah Nabi Idris", rowId: "#kisahnabi idris", description: "Nabi Idris AS"},{title: "Kisah Nabi Ilyas", rowId: "#kisahnabi ilyas", description: "Nabi Ilyas AS"},{title: "Kisah Nabi Ilyasa", rowId: "#kisahnabi ilyasa", description: "Nabi Ilyasa AS"},{title: "Kisah Nabi Isa", rowId: "#kisahnabi isa", description: "Nabi Isa AS"},{title: "Kisah Nabi Ishaq", rowId: "#kisahnabi ishaq", description: "Nabi Ishaq AS"},{title: "Kisah Nabi Ismail", rowId: "#kisahnabi ismail", description: "Nabi Ismail AS"},{title: "Kisah Nabi Luth", rowId: "#kisahnabi luth", description: "Nabi Luth AS"},{title: "Kisah Nabi muhammad", rowId: "#kisahnabi muhammad", description: "Nabi Muhammad SAW"},{title: "Kisah Nabi Musa", rowId: "#kisahnabi musa", description: "Nabi Musa AS"},{title: "Kisah Nabi Dzulkifli", rowId: "#kisahnabi nuh", description: "Nabi Nuh AS"},{title: "Kisah Nabi Sholeh", rowId: "#kisahnabi sholeh", description: "Nabi Sholeh AS"},{title: "Kisah Nabi Sulaiman", rowId: "#kisahnabi sulaiman", description: "Nabi sulaiman AS"},{title: "Kisah Nabi Syuaib", rowId: "#kisahnabi syuaib", description: "Nabi Syuaib AS"},{title: "Kisah Nabi Yahya", rowId: "#kisahnabi yahya", description: "Nabi Yahya AS"},{title: "Kisah Nabi Yaqub", rowId: "#kisahnabi yaqub", description: "Nabi Yaqub AS"},{title: "Kisah Nabi Yunus", rowId: "#kisahnabi yunus", description: "Nabi Yunus AS"},{title: "Kisah Nabi Yusuf", rowId: "#kisahnabi yusuf", description: "Nabi Yusuf AS"},{title: "Kisah Nabi zakariya", rowId: "#kisahnabi zakariya", description: "Nabi Zakariya AS"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Kisah Nabi Apakah Anda Ingin Membaca Nya? Jika Ingin Klick Button Nya`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'virtexmenu':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "☢️ Virtex Ringan [ 1 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/8b99ugzkabs7etu/virtex+1.txt/file", description: "Virtex Ringan"},{title: "☢️ Virtex Ganas [ 2 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/et2bqmno68hnbkk/virtex.txt/file", description: "Virtex Ganas"},{title: "☢️ Virtex Ganas [ 3 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/blt8jxo1bqauj5k/virtex2.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 4 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/e5gm8e6fdye8eor/virtex+3.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 5 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/wnmj3or2avpkojq/virtex+4.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 6 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/svuztzb9vo9wtfj/virtex+5.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 7 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/xgstx9zc9uls4z8/virtex+6.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 8 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/ldh1qmt50b657vr/virtex+7.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Virtex Ganas [ 9 ]", rowId: "#virtexarielsp https://www.mediafire.com/file/e4j577a2snkmum6/virtexFull-Lag.txt/file", description: `${Options.info.ownerName}`},{title: "☢️ Quick Edit", rowId: "#mediafire https://www.mediafire.com/file/b3hrtsowsw2jijx/Untuk-Virtex.apk/file", description: "Untuk Membuka File Virtex"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Virtex`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'animemenu':{
	m.reply(from, '✘ *A N I M E - M E N U*\n\n⌕ #chara\n⌕ #neko\n⌕ #manga\n⌕ #otakudesu', { quoted : m } )
}
break
case 'virtexarielsp':
if (q.includes('--help')) return reply(examlink) 
if (args.length < 1) return reply('Mana Link Nya Ngab')
if (!args[0].includes('mediafire')) return reply(`Link is not valid`)
     reply(`Sedang Mengirim File Virtex.... ಥ‿ಥ`)
const ariel1 = args.join(' ')
const ariel2 = await mediafireDl(ariel1)
sock.sendMessage(from, { document : { url : ariel2[0].link}, fileName : ariel2[0].nama, mimetype: ariel2[0].mime }, { quoted : m }) 
break
case 'waariel':
if (q.includes('--help')) return reply(examlink) 
if (args.length < 1) return reply('Mana Link Nya Ngab')
if (!args[0].includes('mediafire')) return reply(`Link is not valid`)
     reply(`Sedang Mengirim Apk WhatsApp Imun.... ಥ‿ಥ`)
const ariell1 = args.join(' ')
const ariell2 = await mediafireDl(ariell1)
sock.sendMessage(from, { document : { url : ariell2[0].link}, fileName : ariell2[0].nama, mimetype: ariell2[0].mime }, { quoted : m }) 
break
case 'toolsmenu':{
	m.reply(from, '✘ *T O O L S - M E N U*\n\n⌕ #tinyurl\n⌕ #cuttly\n⌕ #ceklokasi', { quoted : m } )
}
break
case 'mtkmenu':{
	m.reply(from, '✘ *M T K - M E N U*\n\n⌕ #luas-segitiga\n⌕ #kel-segitiga\n⌕ #luas-persegi\n⌕ #kel-persegi\n⌕ #kuadrat\n⌕ #kubik', { quoted : m } )
}
break
case 'gamemenu':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "Tebak Gambar", rowId: "#tebakgambar", description: "Yakin Bisa Jawab?"},{title: "Kuis Match", rowId: "#inikuis", description: "Bermain Kuis"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Anda Anak IPS ? Yuk Cobain"},{title: "Asah Otak", rowId: "#asahotak", description: "Otak Anda Ingin Tajam? Yuk Main Game Ini"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Tebak Kalimat"},{title: "Game Susun Kata", rowId: "#susunkata", description: "Main Susun Kata"},{title: "Cak Lontong", rowId: "#caklontong", description: "Anda Stres? Main Game Ini Yo"},{title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Anda Kurang Tau Kabupaten? Yuk Main"},{title: "Tebak Bendera", rowId: "#tebakbendera", description: "Tebak Bendera Negara Luar"},{title: "Tebak Anime", rowId: "#tebakanime", description: "Tebak Anime Untuk Wibu"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Game`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
case 'inikuis':{
	{
                let sections = [ { title: `${Options.info.ownerName}`, rows: [ { title: "Kuis Math Gampang", rowId: "#kuismath noob", description: "Ez"},{title: "Kuis Match Sedang", rowId: "#kuismath easy", description: "Ea"},{title: "Kuis Math Medium", rowId: "#kuismath medium", description: "Lumayan Broh"},{title: "Kuis Math Hard", rowId: "#kuismath hard", description: "Hm"},{title: "Kuis Math", rowId: "#kuismath extreme", description: "extreme"},{title: "Kuis Math Deathzone", rowId: "#kuismath deathzone", description: "Males Kasih Judul"}, ]}    ]
                let listMessage = {footer: `${Options.info.botName}`,text: `Selamat Datang Di Menu Kuis Math`, buttonText: "Klick Ini Kak",sections}
                let sendm =  sock.sendMessage( from, listMessage, {quoted :m })
                }
            }
            break
  case 'bussines3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link16 = `${textproo.bussines3d}`
     let anu16 = await textpro(link16, q)
     console.log(anu16)
    sock.sendMessage(from, { image: { url : anu16 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'neon':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link17 = `${textproo.neon}`
     let anu17 = await textpro(link17, q)
     console.log(anu17)
    sock.sendMessage(from, { image: { url : anu17 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'stoneariel3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link18 = `${textproo.stoneariel3d}`
     let anu18 = await textpro(link18, q)
     console.log(anu18)
    sock.sendMessage(from, { image: { url : anu18 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'neon3dariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link19 = `${textproo.neon3dariel}`
     let anu19 = await textpro(link19, q)
     console.log(anu19)
    sock.sendMessage(from, { image: { url : anu19 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'impresiveariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link20 = `${textproo.impresiveariel}`
     let anu20 = await textpro(link20, q)
     console.log(anu20)
    sock.sendMessage(from, { image: { url : anu20 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'neondevil3dariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link21 = `${textproo.neondevil3dariel}`
     let anu21 = await textpro(link21, q)
     console.log(anu21)
    sock.sendMessage(from, { image: { url : anu21 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'underwater3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link22 = `${textproo.underwater3d}`
     let anu22 = await textpro(link22, q)
     console.log(anu22)
    sock.sendMessage(from, { image: { url : anu22 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'bears3dariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link23 = `${textproo.bears3dariel}`
     let anu23 = await textpro(link23, q)
     console.log(anu23)
    sock.sendMessage(from, { image: { url : anu23 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'fireworkbucin':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link24 = `${textproo.fireworkbucin}`
     let anu24 = await textpro(link24, q)
     console.log(anu24)
    sock.sendMessage(from, { image: { url : anu24 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'metaldarkariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link25 = `${textproo.metaldarkariel}`
     let anu25 = await textpro(link25, q)
     console.log(anu25)
    sock.sendMessage(from, { image: { url : anu25 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'halloweenariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link26 = `${textproo.halloweenariel}`
     let anu26 = await textpro(link26, q)
     console.log(anu26)
    sock.sendMessage(from, { image: { url : anu26 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'captainamerikabyariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link27 = `${textproo.captainamerikabyariel}`
     let anu27 = await textpro(link27, q)
     console.log(anu27)
    sock.sendMessage(from, { image: { url : anu27 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'spacetext':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link28 = `${textproo.spacetext}`
     let anu28 = await textpro(link28, q)
     console.log(anu28)
    sock.sendMessage(from, { image: { url : anu28 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'plastic3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link29 = `${textproo.plastic3d}`
     let anu29 = await textpro(link29, q)
     console.log(anu29)
    sock.sendMessage(from, { image: { url : anu29 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'dropwater3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link30 = `${textproo.dropwater3d}`
     let anu30 = await textpro(link30, q)
     console.log(anu30)
    sock.sendMessage(from, { image: { url : anu30 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'avengerslogo3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link31 = `${textproo.avengerslogo3d}`
     let anu31 = await textpro(link31, q)
     console.log(anu31)
    sock.sendMessage(from, { image: { url : anu31 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'harrypoter':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link32 = `${textproo.harrypoter}`
     let anu32 = await textpro(link, q)
     console.log(anu32)
    sock.sendMessage(from, { image: { url : anu32 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'brokenglass':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link33 = `${textproo.brokenglass}`
     let anu33 = await textpro(link33, q)
     console.log(anu33)
    sock.sendMessage(from, { image: { url : anu33 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'wonderfulgravity3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link35 = `${textproo.wonderfulgravity3d}`
     let anu35 = await textpro(link35, q)
     console.log(anu35)
    sock.sendMessage(from, { image: { url : anu35 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'futuristicneon3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link36 = `${textproo.futuristicneon3d}`
     let anu36 = await textpro(link36, q)
     console.log(anu36)
    sock.sendMessage(from, { image: { url : anu36 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'skytext3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link37 = `${textproo.skytext3d}`
     let anu37 = await textpro(link37, q)
     console.log(anu37)
    sock.sendMessage(from, { image: { url : anu37 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'robotr2':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link38 = `${textproo.robotr2}`
     let anu38 = await textpro(link38, q)
     console.log(anu38)
    sock.sendMessage(from, { image: { url : anu38 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'natal3d':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link39 = `${textproo.natal3d}`
     let anu39 = await textpro(link39, q)
     console.log(anu39)
    sock.sendMessage(from, { image: { url : anu39 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'matrixstyle':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link40 = `${textproo.matrixstyle}`
     let anu40 = await textpro(link40, q)
     console.log(anu40)
    sock.sendMessage(from, { image: { url : anu40 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'arielpetir':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link41 = `${textproo.arielpetir}`
     let anu41 = await textpro(link41, q)
     console.log(anu41)
    sock.sendMessage(from, { image: { url : anu41 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'waterpiperariel':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link42 = `${textproo.waterpiperariel}`
     let anu42 = await textpro(link42, q)
     console.log(anu42)
    sock.sendMessage(from, { image: { url : anu42 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'warning':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link43 = `${textproo.warning}`
     let anu43 = await textpro(link43, q)
     console.log(anu43)
    sock.sendMessage(from, { image: { url : anu43 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'transformer':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link44 = `${textproo.transformer}`
     let anu44 = await textpro(link44, q)
     console.log(anu44)
    sock.sendMessage(from, { image: { url : anu44 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
  case 'denim':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
     reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
     let link45 = `${textproo.denim}`
     let anu45 = await textpro(link45, q)
     console.log(anu45)
    sock.sendMessage(from, { image: { url : anu45 }, caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n${Options.info.duituntukowner}`}, { quoted: m } )
   
}
  break
case 'kisahnabi':
if (q.includes('--help')) return reply(examquery) 
const res = await Searchnabi(q) 
const result = `*Nama* : ${res.name}\n*Wafat* : ${res.wafat_usia}\n*Kelahiran* : ${res.kelahiran}\n*Singgah* : ${res.singgah}\n*Kisah* : ${res.kisah}`
sock.sendMessage(from, {image : { url : 'https://i.ibb.co/Kw282gw/b54b1faadf3b.jpg' }, caption : result}) 
break	
case 'pinterest': {
if (q.includes('--help')) return reply(examquery) 
reply('*Tunggu Otey... ( ꈍᴗꈍ)*')
const anu = await pinterest(q)
const result = anu[Math.floor(Math.random(), anu.length)]
sock.sendMessage(from, { image: { url: result }, caption: '▹ Media Url : '+result }, { quoted: m })
            }
            break
  case 'antilink':
if (q.includes('--help')) return reply(`*Example* : ${prefix+order}off/on`) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin') 
if (!isBotGroupAdmins) return reply('Bot bukan admin') 
if (q === 'on') {
if (isAntiLink) return reply('Sudah Aktif Kak')
antilink.push(m.sender)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan fitur antilink')
sock.sendMessage(from,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
} else if (q === 'off') {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(m.sender)
antilink.splice(ini, 1)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses menonaktifkan fitur antilink')
} else if (!q){
 reply(`Pilih Antilink On / Off `)
}
break 		
  case 'promote':{
if (q.includes('--help')) return reply(examtag) 
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args.length < 1) return reply('Contoh : #promote @6282118022072 Untuk Menjadikan Nomor Tersebut Admin Di Group Ini')
   reply('Berhasil!! Dan Sekarang Dia Sudah Menjadi Admin Di Group Ini')
   console.log(mentionUser)
   sock.groupParticipantsUpdate(from, mentionUser, "promote")
   }
  break
  case 'demote':{
if (q.includes('--help')) return reply(examtag) 
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args.length < 1) return reply('Contoh : #promote @6282118022072 Untuk Menjadikan Nomor Tersebut Sebagai Member Di Group Ini')
   reply('Berhasil!! Dia Sekarang Bukan Admin Di Group Ini')
   console.log(mentionUser)
   sock.groupParticipantsUpdate(from, mentionUser, "demote")
   }
  break
  case 'add':{
   if (q.includes('--help')) return reply(examlink) 
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args.length < 1) return reply('Contoh : #add +62 821-1802-2072')
   if (args[1]){
    let number = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    sock.groupParticipantsUpdate(from, [number], "add")
   } 
  else 
   {
    sock.groupParticipantsUpdate(from, mentionUser, "add")
   }
   }
  break
  case 'kick':{
   if (q.includes('--help')) return reply(examlink)
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args.length < 1) return reply('Contoh : #kick @6282118022072')
   console.log(mentionUser)
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
   }
  break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`Mau jual apa?\nExample : ${prefix + order} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
 if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'owner': case 'creator': {
   for (let x of Options.info.arielspkece) {
   sock.sendContact(from, x.split('@s.whatsapp.net')[0], Options.info.ownerName, m)
	}			    
   }
  break
  case 'artinama':{
if (q.includes('--help')) return reply(examquery) 
  if (!q) return reply('Contoh : #artinama Ariel Sandy Permana')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  break
  
  case 'inventori': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)} \n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)} \n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)} \n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)} \n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)} \n`
     teksehmazeh += `*♂️Potion Kamu* : ${getPotion(m.sender)} \n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${Options.info.botName}*_`
  
  reply(teksehmazeh)
  }
  break
  case 'mancing':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 10)
  reply('success✔️')
  }
  break
  case 'menu':{  
   let button = [{
     index: 1, 
      quickReplyButton: {
       displayText: 'Klick Ini Kak', 
       id: '.arielsandypermana'
      } 
    },]
      m.templateButon5IMG(from, MenuList2, Options.info.botName, thumb, button, m)
   }
   break
   case 'menu2':
   let buttonss = [{
     index: 1, 
      urlButton: {
       displayText: 'YOUTUBE', 
       url: `${Options.info.youtubeLu}`
       } 
     },     
     {
      index: 1, 
       urlButton: {
       displayText: 'SAWERIA', 
       url: `${Options.info.duituntukowner}`
       }
       }, 
       {
     index: 2, 
      quickReplyButton: {
       displayText: '🌀 SPEED', 
       id: '#speed'
      } 
    },
    { 
     index: 3, 
      quickReplyButton: {
       displayText: '⚜️ RUNTIME', 
       id: '#runtime'
        } 
     },
      {
      index: 4, 
      quickReplyButton: {
       displayText: 'MENU SIMPLE', 
       id: '#arielsandypermana'
      } 
    },
     ]
    await m.sendButton(
    from, 
    MenuList,
    `Bot Hasil ${Options.info.ownerName} Gabut 🏹`, 
    buttonss, 
    thumb, 
    await m.createMsg(
     from, 
     {
     image: {
      url: './storage/image/ArielGantengBangetWowOmaygatEpribadihTeetewtwtetwArielSPnihbostengtengteng.jpg', 
      thumbnail : thumb, 
      }, 
      gifPlayback: true
     }, 
     )
    )
   break
   case 'tes':{
     m.reply(from, 'hallo', { quoted : m } )
   }
   break
   case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'YOUTUBE', 
       url: `${Options.info.youtubeLu}`
      } },
     {
     index: 2, 
     callButton: {
      displayText: 'Owner', 
       phoneNumber: '6281394014824'
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  sock.sendMessage(
    from, 
    templateMessage
    )
   }
  break  
  case 'runtime':{
    const templateMessage = {
    text: "BOT Aktif Selama",
    footer: `${runtime(process.uptime())}`,
    templateButtons: [
     {
     index: 1,
      quickReplyButton: {
       displayText: '🐥 Kembali Ke Menu', 
       id: '#arielsandypermana'
       } },
     {
     index: 2, 
      urlButton: {
       displayText: 'DONASI KAK', 
       url: `${Options.info.duituntukowner}`
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  case 'listsection1':{
  // send a list message!
   const sections = [
    {
	title: "Section",
	rows: [
	   {
	    title: "List1", 
	    rowId: "option"
	   },	    
     ]
    }    
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break
  case 'listsection2':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
      from, 
      listMessage
    )

  }
  break
  
  case 'detiknews': case 'detik':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
  case 'anime': {
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return m.reply(from, 'Nama anime?', { quoted : m } )
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animee ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵",
       footer: Options.info.botName,
       title: "[ Wibu² Bau Bawang ]",
       buttonText: "Klick Ini Kak",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animee':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
sock.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
  
  case 'reply':{
  let textz = q || 'undefined'
  m.reply(from, textz, { quoted : m } )
  }
  break

  case 'play': case 'lagu': case 'musik': case 'yts': case 'ytsearch': 
function _0x40d5(_0x445370,_0x3f8e5f){const _0x68ebb7=_0x68eb();return _0x40d5=function(_0x40d5eb,_0x5bca3a){_0x40d5eb=_0x40d5eb-0x9e;let _0x17bdbe=_0x68ebb7[_0x40d5eb];return _0x17bdbe;},_0x40d5(_0x445370,_0x3f8e5f);}function _0x68eb(){const _0x109d2a=['1395522BogHDp','2891hgNGbx','url','#youtubemp3\x20','[\x20🎵\x20]\x20MP3','👤Artist\x20:\x20','lagu\x20apa?','6966756qRhbno','log','\x0a\x0aℹ️Id\x20:\x20','\x0a\x0a💽Album\x20:\x20','#youtubemp4\x20','duration','Klik\x20Ini\x20Kak\x20Melihat\x20Hasil','[\x20🏓\x20]\x20LINK','--help','YouTube\x20Music','info','sendMessage','push','isYtMusic','title','\x0a\x0a🔎Source\x20:\x20','YouTube','label','album','length','31GKDeOC','reply','includes','4616rWWNZo','1077363oTWjLq','[\x20YouTube\x20Music\x20Search🔎\x20]','1076272WyisJq','\x0a\x0a📊Duration\x20:\x20','483855wvzNxF','14502AXDrHH','artist','join','#reply\x20'];_0x68eb=function(){return _0x109d2a;};return _0x68eb();}const _0xe392fe=_0x40d5;(function(_0x24ceb8,_0x17ff33){const _0x1fea26=_0x40d5,_0x472ac8=_0x24ceb8();while(!![]){try{const _0x397b7d=-parseInt(_0x1fea26(0xbc))/0x1*(-parseInt(_0x1fea26(0xc5))/0x2)+-parseInt(_0x1fea26(0xc0))/0x3+-parseInt(_0x1fea26(0xc2))/0x4+-parseInt(_0x1fea26(0xc4))/0x5+parseInt(_0x1fea26(0xa1))/0x6+parseInt(_0x1fea26(0xa2))/0x7*(-parseInt(_0x1fea26(0xbf))/0x8)+parseInt(_0x1fea26(0xa8))/0x9;if(_0x397b7d===_0x17ff33)break;else _0x472ac8['push'](_0x472ac8['shift']());}catch(_0x3ccc13){_0x472ac8['push'](_0x472ac8['shift']());}}}(_0x68eb,0x4179f));{if(q[_0xe392fe(0xbe)](_0xe392fe(0xb0)))return reply(examquery);if(args[_0xe392fe(0xbb)]<0x1)return m[_0xe392fe(0xbd)](from,_0xe392fe(0xa7),{'quoted':m});const fresh=await searchResult(args[_0xe392fe(0x9f)]('\x20'));console[_0xe392fe(0xa9)](fresh);let sections=[];for(let i=0x0;i<fresh[_0xe392fe(0xbb)];i++){const list={'title':i+0x1+'.\x20'+fresh[i][_0xe392fe(0xb6)],'rows':[{'title':_0xe392fe(0xa5),'rowId':_0xe392fe(0xa4)+fresh[i]['url'],'description':_0xe392fe(0xa6)+fresh[i]['artist']+_0xe392fe(0xab)+fresh[i][_0xe392fe(0xba)]+_0xe392fe(0xc3)+fresh[i][_0xe392fe(0xad)][_0xe392fe(0xb9)]+'\x0a\x0a🔎Source\x20:\x20'+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):'YouTube')+_0xe392fe(0xaa)+fresh[i]['id']},{'title':'[\x20▶️\x20]\x20MP4','rowId':_0xe392fe(0xac)+fresh[i][_0xe392fe(0xa3)],'description':_0xe392fe(0xa6)+fresh[i][_0xe392fe(0x9e)]+_0xe392fe(0xab)+fresh[i]['album']+_0xe392fe(0xc3)+fresh[i]['duration'][_0xe392fe(0xb9)]+_0xe392fe(0xb7)+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):_0xe392fe(0xb8))+_0xe392fe(0xaa)+fresh[i]['id']},{'title':_0xe392fe(0xaf),'rowId':_0xe392fe(0xa0)+fresh[i]['url'],'description':_0xe392fe(0xa6)+fresh[i][_0xe392fe(0x9e)]+_0xe392fe(0xab)+fresh[i][_0xe392fe(0xba)]+_0xe392fe(0xc3)+fresh[i][_0xe392fe(0xad)][_0xe392fe(0xb9)]+_0xe392fe(0xb7)+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):_0xe392fe(0xb8))+_0xe392fe(0xaa)+fresh[i]['id']}]};sections[_0xe392fe(0xb4)](list);}const sendm=sock[_0xe392fe(0xb3)](from,{'text':'Silahkan\x20Di Pilih\x20Ya Kak\x20Semua\x20File\x20Ada Disini\x20Ada mp3/mp4✔️','footer':Options[_0xe392fe(0xb2)]['botName'],'title':_0xe392fe(0xc1),'buttonText':_0xe392fe(0xae),'sections':sections},{'quoted':m});}
  break
  case 'ytmp3':
  case 'youtubemp3':{
if (q.includes('--help')) return reply(examlink) 
  if (args.length < 1) return reply('linknya?')
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Tidak Bisa Mendownload Silahkan Periksa Link Nya`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
if (q.includes('--help')) return reply(examlink) 
  if (args.length < 1) return reply('linknya?')
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { video: { url: dl_link }, caption: `Makasih Udah Pake ${Options.info.botName}` }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  
  
  case 'p':
   sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
  break 
  

  case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': case 'stikergif': case 'stikgif':{			   			   
if (q.includes('--help')) return reply(examplyme) 
   try{
   if (m.isQuotedImage) {
    var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
   
    let ran = '666.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${ran} -o ./${ran}`, async (error) => {
      sock.sendMessage(
          from, 
          { 
         sticker: fs.readFileSync(`./${ran}`) 
         })
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)
	 
    } 
    
   else 
   
  if (m.isQuotedVideo) {
   var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
	  buffer = Buffer.concat([buffer, chunk])
	 }
   var rand2 = '777.webp'
	fs.writeFileSync(`./${rand2}`, buffer)
     ffmpeg(`./${rand2}`)
	 .on("error", console.error)
	 .on("end", () => {
	 exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
	 sock.sendMessage(
	  from, 
	    { 
	     sticker: fs.readFileSync(`./${rand2}`) 
	     }, 
	    { 
	     quoted: m 
        })
    	fs.unlinkSync(`./${rand2}`)
	  })
	})
   .addOutputOptions([
     "-vcodec", 
     "libwebp", 
     "-vf", 
     "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
    ])
   .toFormat('webp')
   .save(`${rand2}`)
   
    } 
    
   else 
   
    {
    
      m.reply(
        from, 
        `Balas Pesan Foto Dengan caption : ${prefix + order}`, 
        { 
         quoted : m 
         } 
       )
      }
     } catch (e){ 
     sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
    }
   }
  break
  case 'sound1':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://l.top4top.io/m_23268bsoq0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
    case 'sound2':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://l.top4top.io/m_23269i60f0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'sound3':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://a.top4top.io/m_2353wssxf0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'sound4':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://b.top4top.io/m_23266l2s00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'sound5':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://i.top4top.io/m_23266hn860.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'sound6':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://f.top4top.io/m_2326z7znw0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound7':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2353nnowu0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound8':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://e.top4top.io/m_23533o1ju0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound9':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://h.top4top.io/m_2353xuwlp0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound10':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://f.top4top.io/m_2353y4qv70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound11':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://j.top4top.io/m_23534642l0.mp4`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound12':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://h.top4top.io/m_235991jjn0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound13':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://j.top4top.io/m_23594d72t1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound14':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://k.top4top.io/m_23595i6io2.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound15':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://a.top4top.io/m_2359x5g8j4.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound16':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2359l01x13.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound17':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://b.top4top.io/m_2359ola665.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound18':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://c.top4top.io/m_2359n6agj6.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound19':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2359fok3u7.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound20':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://e.top4top.io/m_2359q1yyh8.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
case 'sound21':{
if (q.includes('--help')) return reply(examkosong) 
reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   sock.sendMessage(from, { audio: {url : `https://f.top4top.io/m_2359l8lje9.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{
if (q.includes('--help')) return reply(examkosong) 
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   let za = await fetchJson(`https:/\/\waifu.pics/api/sfw/${order}`)
            
  
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: za.url },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
  }
 break

  case 'hapus': case 'delete': case 'del': case 'd':{
if (q.includes('--help')) return reply(examply) 
      if (!m.quoted) return  m.reply(from, 'Reply pesanya!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!', { quoted : m })
          sock.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
  case 'wallpaperaccess':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, 'Cari gambar apa?', { quoted : m } )
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
  try{
  const aku_biji = await wallpaperaccess(q)
  let jsonData = aku_biji
  let kamu_telor = Math.floor(Math.random() * jsonData.length);
  let anunya = jsonData[kamu_telor];
 
  console.log(anunya.link)
  let buttons = [
      {
       buttonId: `#wallpaperaccess ${q}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: anunya.link },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
    } catch (e) { e = String(e)
      m.reply(from, 'Tidak ditemukan!', { quoted : m } )
   }
  }
  break  
  case 'sci_fi':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, `Contoh : ${prefix+order} ${Options.info.ownerName}`, { quoted : m } )
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
  let link46 = `${textproo.sci_fi}`
  let anu46 = await textpro(link46, q)
  console.log(anu46)
   sock.sendMessage(
   from, 
   { 
    image: {
     url : anu46
    }, 
    caption: `Nih Ngab, Nanti Donasi Woy Nih Link\n ${Options.info.duituntukowner}`   
    }, 
    {
    quoted: m
   }
   )
  }
  break

  case 'tiktokmp3':{
if (q.includes('--help')) return reply(examlink) 
  if (!q) return reply('Contoh : #tiktokmp3 Link Video Tiktok *Untuk Menjadikan Video Tersebut Menjadi Musik*')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktoknowm':{
if (q.includes('--help')) return reply(examlink) 
  if (!q) return reply('Contoh : #tiktoknowm Link Video Tiktok')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  reply(`*Tunggu Otey... ( ꈍᴗꈍ)*`)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { video: { url: musim_duren_v }, caption: `Nih Hasil Ngab\nNanti Donasi Ya, ${Options.info.duituntukowner}😊` }, { quoted: m })
   }
  break
  case 'afk':{
if (q.includes('--help')) return reply(examquery) 
  let date = + new Date
  const alasan = q ? q : 'Gatau ngapain.'
  afk.addAfkUser(m.sender, date, alasan, time, _afk)
  reply(`*@${m.sender.split("@")[0]}* Sekarang Sedang AFK Jangan Di Ganggu🤫\n*Alasan* : ${alasan}`)
  }
  break
  default:
  
  if (isCmd) {
   
m.reply(
    from, 
    '_Fitur Tidak Ada, Carilah Fitur Yang Ada Di Bot Ini_', 
    { 
     quoted : m 
    }
   )
  } 
   
  } } catch(e) { e = String(e) 
  if (e.includes("rate-overlimit")) {return}
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
   console.log(color(e, 'cyan')) 
  } }
  
  const ArielSP = require.resolve(__filename)
  fs.watchFile(ArielSP, () => {
  fs.unwatchFile(ArielSP)
  console.log(color(`New! >`, 'cyan'), color(`${__filename}`, 'gray'))
  delete require.cache[ArielSP]
  require(ArielSP)
  } )