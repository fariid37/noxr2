exports.run = {
   usage: ['flagskip'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.whatflag = client.whatflag ? client.whatflag : {}
      let id = m.chat
      if (!(id in client.whatflag)) return
      clearTimeout(client.whatflag[id][3])
      delete client.whatflag[id]
      client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatflag telah dihapus.`), m)
   },
  
}