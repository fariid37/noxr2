exports.run = {
   usage: ['premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
linkz1 = global.db.setting.link
let sectionsv33 = [
{
title: "Daftar Paket",
rows: [            
{title: "Minimize", rowId: `${isPrefix}owner`, description: `[ Harga : Rp  10,00 | Quota : 2.000 | Limit : 3.000 ]`},
{title: "Marvest", rowId: `${isPrefix}owner`, description: `[ Harga : Rp  15,00 | Quota : 5.000 | Limit : 4.500 ]`},
{title: "Free (Refferal)", rowId: `${isPrefix}premiuum`, description: `[ Harga : 10,00 | Quota : 10.000 | Limit : 10.000 ]`},
{title: "Apa itu Point, Quota, Limit, Level & Guard ?", rowId: `${isPrefix}menglimit`, description: `[ penjelasan terkait point, quota, limit, level & guard ]`}
]
},
]
client.reply(m.chat, `🍟 Syarat & Ketentuan (S&K)\n\n➠ Paket premium tidak ada batasan waktu bulanan, tapi sampai limit & quota kamu habis atau sampai owner pensiun.\n\n➠ Pembayaran saat ini hanya tersedia via dana, ovo, gopay dan qris.\n\n➠ Proses transaksi seperti pada umumnya, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.\n\n➠ *Penting!* Simpan nomor owner dan gabung kedalam grup official : (${linkz1}), untuk mengetahui update nomor bot terbaru apabila ter-banned oleh pihak whatsapp.`, '', '', `Tap!`, sectionsv33, m)
   },
   error: false,
   cache: true,
   location: __filename
}