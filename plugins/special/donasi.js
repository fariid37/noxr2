exports.run = {
   usage: ['donasi'],
   category: 'special',
   async: async (m, {
      client
   }) => {
            var pesan_donasi = `Dengan donasi kamu bisa mendapatkan Premium secara cuma cuma berapapun donasinya!

Metode Pembayaran:
DANA/GOPAY/SHOPEEPAY: [088803617785] (Nizaar)
Saweria: https://saweria.co/NataaZ
Trakteer: https://trakteer.id/nataaz

Terimakasih, berkat berkah dari mu membuat owner semakin bersemangat untuk mengerjakan bot ini.
${global.botname} !`
   client.sendMessageModify(m.chat, pesan_donasi, m, {
   title: global.botname,
   ads: false,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer(global.db.setting.cover),
   url: global.db.setting.link
})
   },
   error: false
}