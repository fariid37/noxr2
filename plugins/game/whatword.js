let fs = require('fs')
exports.run = {
   usage: ['tebakkata'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {     
   
      client.whatword = client.whatword ? client.whatword : {}
      let id = m.chat,
         timeoutv = 120000,
         poin = 0
      if (id in client.whatword) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!*', client.whatword[id][0])
      let _whatword = JSON.parse(fs.readFileSync('./media/whatword.json'))
      let json = _whatword[Math.floor(Math.random() * _whatword.length)]
      let teks = `乂  *W H A T W O R D*\n\n${json.acak}\n\n`
      teks += `Timeout : [ *${((timeoutv / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}wordclue* untuk bantuan dan *${isPrefix}wordskip* untuk menghapus sesi.`
      client.whatword[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.whatword[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${json.jawaban}*`, client.whatword[id][0])
            delete client.whatword[id]
         }, timeoutv)
      ]
   },
   
   quota: true
}