exports.run = {
   usage: ['confirmorderkunci'],
   use: 'number | target',
   category: 'owner tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
try {      	
let q = text
let jumlah = q.split('|')[0] ? q.split('|')[0]: ''
let targ = q.split('|')[1] ? q.split('|')[1]: ''
let idny = q.split('|')[2] ? q.split('|')[2]: ''
var feta = await Func.fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
if (feta.status == false) {
  m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
let idpes = feta.data.order_id
let cap = `Hai Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n${feta.data.order_id}\n\n*Target :*\n${targ}\n\n*Jumlah Order :* ${jumlah}\n*Total Harga :* Rp${Func2.h2k(Func.formatNumber(feta.data.amount))}\n*Status Orderan :* ${feta.data.status}\n\n*info lebih lanjut?*\n*dan sudah berhasil.*`
client.sendFile(m.chat, feta.data.qris, '', cap, m)
}
console.log(feta)
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
   owner: true
}