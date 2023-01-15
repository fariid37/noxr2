let fs = require('fs')
exports.run = {
   usage: ['fortune'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {           
      client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.tebaktebakan) return client.reply(m.chat, '^ pertanyaan ini belum dijawab!!', client.tebaktebakan[id][0])
      let _tebaktebakan = JSON.parse(fs.readFileSync('./media/tebaktebakan.json'))
      let json = _tebaktebakan[Math.floor(Math.random() * _tebaktebakan.length)]
      let teks = `乂  F O R T U N E\n\n${json.soal}\n\n`
      teks += `Timeout : [ ${((timeout / 1000) / 60)} minutes ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik ${isPrefix}apatuh untuk bantuan`
      client.tebaktebakan[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.tebaktebakan[id]) client.reply(m.chat, `Waktunya habis!\nJawabannya adalah : ${json.jawaban}`, client.tebaktebakan[id][0])
            delete client.tebaktebakan[id]
         }, timeout)
      ]
   },
   
   limit: true
}