exports.run = {
   usage: ['menglimit', 'mengowner', 'premiuum', 'argument'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
      if (command == 'menglimit') {       
      hu = `https://telegra.ph/file/7cf94319b2aad620e17a0.jpg`
	ho = `➠ *Point* adalah reward yang bisa di tukarkan dengan quota atau limit, terdapat 3 cara untuk mendapatkan point yaitu dari hasil claim, bermain game dan menggunakan fitur.\n\n➠ *Quota* adalah jatah penggunaan bot,biasanya terdapat pada fitur downloader dan converter. User gratis diberikan 20 quota dan reset setiap 24 jam sekali, apabila quota belum ter-reset fitur yang menggunakan quota tidak akan merespon sama sekali.\n\n➠ *Limit* adalah jatah untuk bermain game dan limit ini tidak akan direset seperti quota.\n\n➠ *Level* adalah rank dari seluruh pengguna bot, level ini tergantung jumlah point bisa naik dan bisa turun.\n\n➠ *Guard* adalah pelindung point dari fitur game barbar, guard bisa di dapatkan dengan cara membelinya menggunakan point.`
         client.sendMessageModify(m.chat, ho, m, {
            thumbnail: hu,
            largeThumb: true
         })
        } else if (command == 'argument') {
        system = global.db.setting
        boih = `https://telegra.ph/file/8f04a9e22420bc011b708.jpg`
	men = `➠ *Prefix*, simbol diawal command setiap bot memiliki prefix yang berbeda beda, khusus bot ini memakai sistem multi prefix yang menggunakan 4 prefix umum yaitu : [ ${Func.texted('bold', system.multiprefix ? system.prefix.map(v => v).join(' ') : system.onlyprefix)} ]\n\n➠ *Command*, perintah untuk bot melakuan sesuatu, contoh pada skema diatas untuk mendownload video dari tiktok maka command yang digunakan adalah *tiktok*, perlu di ingat *1 command hanya untuk melakuan 1 tugas*, jadi command tiktok tidak bisa untuk mendownload video instagram.\n\n➠ *Argumen*, sesuatu yang diberikan setelah command, dari skema diatas command tiktok diberi argumen berupa URL postingan video tiktok, argumen ditentukan oleh command itu sendiri ataupun keterangan pada menu utama.`
client.sendMessageModify(m.chat, men, m, {
            thumbnail: boih,
            largeThumb: true
         })
         } else if (command == 'mengowner') {
         yah = `pemilik bot tentu bukan bot jadi jangan mengirim chat command ke nomor owner, usahakan ketika chat owner hanya untuk hal penting saja seperti membeli / upgrade ke prem atau melaporkan fitur bot yang error.\nOwner/Admin hanya menerima prmbahasan seputar bot ini, untuk pertanyaan di luar bot ini maka tidak akan di respon`
haa = `https://telegra.ph/file/f567244d8925b59d9a300.jpg`
client.sendMessageModify(m.chat, yah, m, {
            thumbnail: haa,
            largeThumb: true
         })
         } else if (command == 'premiuum') {
         names = 'https://telegra.ph/file/6bf5c89b55abfb4b470a6.jpg'
piyeh = `*── 「 UPGRADE PREMIUM 」 ──*\n\n*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*\n\n*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = 085815700875*
*Qris pada gambar diatas*\n\n*Info Lebih Lengkap Chat Owner, Ketik ${isPrefix}owner*
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*`
client.sendMessageModify(m.chat, piyeh, m, {
            thumbnail: names,
            largeThumb: true
         })
       }
      } catch {
      client.reply(m.chat, global.status.error, m)
    }
   },
   error: false,
   cache: true,
   location: __filename
}
