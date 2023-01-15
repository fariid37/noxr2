const anime = require('lib/nime') 
const fetch = require('node-fetch')
const { extract } = require('zs-extract')
exports.run = {
usage: ['anime'],
hidden: ['animeeps', 'animedl', 'animegas360', 'animegas480', 'animegas720'],
use: 'judul',
category: 'downloader',
async: async (m, { 
client,
text,
args,
isPrefix,
command
}) => {
try {
if (command == 'anime') {
if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'digimon'), m)
client.sendReact(m.chat, '🕒', m.key)
let result = await anime.otakudesu.search(text)

let row = []
result.result.map((v, i) => row.push ({
title: `${i + 1}. ${v.title}`,
rowId: `${isPrefix}animeeps ${v.url}`,
description: ''
}))
return client.sendListv2(m.chat, '', 'Silahkan pilih anime yang ingin kamu download', '', `Tap Here`, row, m)
} else if (command == 'animeeps') {
if (!args[0]) return
client.sendReact(m.chat, '🕒', m.key)
let anim = await anime.otakudesu.getData(args[0])
 
let info = `
Judul: ${anim.judul}
Japanese: ${anim.japanese}
Produser: ${anim.produser}:
Tipe: ${anim.tipe}
Total Episode: ${anim.total_episode}
Durasi: ${anim.durasi}
Tanggal Rilis: ${anim.tanggal_rilis}
Studio: ${anim.studio}
Rating: ${anim.skor}
Genre: ${anim.genre}
Status: ${anim.status}
\n_Silahkan pilih salah satu dari episode yang telah disediakan!_`
 
let row = []
anim.episode.map((v, i) => row.push ({
title: `${v.title}`,
rowId: `${isPrefix}animedl ${v.url}`,
description: ''
}))
return client.sendListv2(m.chat, '', info, '', 'Episode', row, m)
} else if (command == 'animedl') {
//if (!args[0]) return
//client.sendReact(m.chat, '🕒', m.key)
 
let row = [{
title: "360p",
rowId: `animegas360 ${args[0]}`,
description: ''
}, {
title: "480p",
rowId: `animegas480 ${args[0]}`,
description: ''
}, {
title: "720p",
rowId: `animegas720 ${args[0]}`,
description: ''
}]
 
client.sendListv2(m.chat, '', 'Silahkan pilih kualitas video yang kamu mau', '', 'Pilih', row, m)
} else if (command == 'animegas360') {
client.sendReact(m.chat, '🕒', m.key)
 
let hasil = await anime.otakudesu.download(args[0])
let d = await hasil.download.q_360p.zippy
    let dw = await hasil.download.q_360p.zippyshare
    let res = await fetch(d ? d : dw)
    let zs = res.url
    let result = await extract(zs)
 
return client.sendFile(m.chat, result.download, result.filename, '', m, { document: true })
} else if (command == 'animegas480') {
client.sendReact(m.chat, '🕒', m.key)
 
let hasil = await anime.otakudesu.download(args[0])
let d = await hasil.download.q_480p.zippy
    let dw = await hasil.download.q_480p.zippyshare
    let res = await fetch(d ? d : dw)
    let zs = res.url
    let result = await extract(zs)
 
return client.sendFile(m.chat, result.download, result.filename, '', m, { document: true })
} else if (command == 'animegas720') {
client.sendReact(m.chat, '🕒', m.key)

let hasil = await anime.otakudesu.download(args[0])
let d = await hasil.download.q_720p.zippy
    let dw = await hasil.download.q_720p.zippyshare
    let res = await fetch(d ? d : dw)
    let zs = res.url
    let result = await extract(zs)
 
return client.sendFile(m.chat, result.download, result.filename, '', m, { document: true })
}
} catch (e) { 
console.log(e)
return client.reply(m.chat, global.status.fail, m)
}
},
error: false,
limit: true,
restrict: true,
}