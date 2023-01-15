exports.run = {
   usage: ['drakor', 'drakorget', 'drakoreps'],
   use: 'query',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (command == 'drakor') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'The K2'), m)
            let json = await scrap.drakor(text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let rows = []
            json.data.map(v => rows.push({
               title: v.title,
               rowId: `${isPrefix}drakorget ${v.url}`,
               description: `[ Episode : ${v.episode} Eps | Release : ${v.release} | Genre : ${v.genre.map(v => v).join(', ')} ]`
            }))
            client.sendListv2(m.chat, '', `Menampilkan hasil dari pencarian untuk : “${text}“, Pilih drama yang kamu ingin download. Batch artinya download sekaligus, jadi tidak perlu download satu per satu episode 🍟`, '', 'Tap!', rows, m)
         } else if (command == 'drakorget') {
            if (!args || !args[0]) return
            let json = await scrap.drakor(args[0])
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let caption = `乂  *D R A K O R*\n\n`
            caption += '	◦  *Title* : ' + json.data.title + '\n'
            caption += '	◦  *Episode* : ' + json.data.episode + '\n'
            caption += '	◦  *Release* : ' + json.data.release + '\n'
            caption += '	◦  *Genre* : ' + json.data.genre.map(v => v).join(', ') + '\n'
            caption += '	◦  *Channel* : ' + json.data.channel + '\n'
            caption += '	◦  *Duration* : ' + json.data.duration + '\n'
            caption += '	◦  *Artist* : ' + json.data.cast.map(v => v).join(', ') + '\n\n'
            caption += global.footer
            client.sendFile(m.chat, json.data.thumbnail, '', caption, m).then(async () => {
               let rows = []
               json.data.episodes.map((v, i) => rows.push({
                  title: v.episode,
                  rowId: `${isPrefix}drakoreps ${args[0]} ${i}`,
                  description: ``
               }))
               client.sendListv2(m.chat, '', `*Sinopsis* : “${json.data.sinopsis}”`, '', 'Episode', rows, m)
            })
         } else if (command == 'drakoreps') {
            let json = await (await scrap.drakor(args[0])).data.episodes[args[1]]
            if (json.length == 0) return client.reply(m.chat, global.status.fail, m)
            client.reply(m.chat, json.urls.map(v => `◦ *${v.provider}* : ${v.url}`).join('\n'), m)
         }
      } catch (e) {
         console.log(e)
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true
}