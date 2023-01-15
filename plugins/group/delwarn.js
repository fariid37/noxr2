exports.run = {
   usage: ['delwarn'],
   category: 'group only',
   async: async (m, {
      client,
      groupSet
   }) => {
            try {        
            let user = global.db.users[m.sender]
            if (user.warning == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Kamu tidak memiliki point peringatan.`), m)
            let forPoint = 120
            let jem = 10
            let forLimit = 50
            if (user.point < forPoint || user.quota < forLimit || user.limit < jem) return client.reply(m.chat, Func.texted('bold', `🚩 Aset yang kamu miliki tidak cukup untuk menghapus 1 point peringatan.`), m)
            user.point -= forPoint
            user.quota -= forLimit
            user.limit -= jem
            user.warning -= 1
            let teks = '- ' + Func2.h2k(Func.formatNumber(forPoint)) + ' Point (-100%)\n'
            teks += '- ' + Func.formatNumber(forLimit) + ' Limit (-50%)\n'
            teks += '- ' + Func.formatNumber(jem) + ' Quota (-10%)\n'
            teks += '🚩 *Berhasil menghapus 1 point peringatan.*'
            return client.reply(m.chat, teks, m)
           } catch (e) {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   group: true
}