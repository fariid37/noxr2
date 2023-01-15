let fs = require('fs')
exports.run = {
   usage: ['tebakgambar'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {     
   	
      client.whatpic = client.whatpic ? client.whatpic : {}
      let id = m.chat,
      timeout2 = 120000,
      poin = 0
      if (id in client.whatpic) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!!*', client.whatpic[id][0])
      let _brainout = await Func.fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json`)
      let json = _brainout[Math.floor(Math.random() * _brainout.length)]
      let teks = `乂  *W H A T P I C*\n\n${json.deskripsi}\n\n`
      teks += `Timeout : [ *${((timeout2 / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}picclue* untuk bantuan dan *${isPrefix}picskip* untuk menghapus sesi.`
      client.whatpic[id] = [
         await client.sendMessageModify(m.chat, teks, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(json.img),
               url: global.db.setting.link
            }),
         json, poin,
         setTimeout(() => {
            if (client.whatpic[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabanya adalah : *${json.jawaban}*`, client.whatpic[id][0])
            delete client.whatpic[id]
         }, timeout2)
      ]
   },
   
   quota: true
}