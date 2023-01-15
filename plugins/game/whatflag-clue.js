exports.run = {
   usage: ['flagclue'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.whatflag = client.whatflag ? client.whatflag : {}
      let id = m.chat
      if (!(id in client.whatflag)) return
      let json = client.whatflag[id][1]
      let nya = json.name.replace(/[AIUEO]/gi, '_')
      client.reply(m.chat, '```' + nya + '```', m)
   },
   
}