let fs = require('fs')
exports.run = {
   usage: ['whoami'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {     
      
      client.whoami = client.whoami ? client.whoami : {}
      let id = m.chat,
         times = 120000,
         poin = 0
      if (id in client.whoami) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!*', client.whoami[id][0])
      let _whoami = JSON.parse(fs.readFileSync('./media/whoami.json'))
      let json = _whoami[Math.floor(Math.random() * _whoami.length)]
      let teks = `乂  *W H O A M I*\n\n${json.pertanyaan}\n\n`
      teks += `Timeout : [ *${((times / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}who* untuk bantuan dan *${isPrefix}whoskip* untuk menghapus sesi.`
      client.whoami[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.whoami[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${json.jawaban}*`, client.whoami[id][0])
            delete client.whoami[id]
         }, times)
      ]
   },
  
   quota: true
}