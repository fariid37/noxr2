exports.run = {
   usage: ['contact'],
   use: 'mention or reply',
   category: 'group only',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 Mention or Reply chat target.`), m)
      if (isNaN(number)) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
      if (number.length > 15) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid format.`), m)
      try {
         if (text) {
            var user = number + '@s.whatsapp.net'
         } else if (m.quoted.sender) {
            var user = m.quoted.sender
         } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
         }
      } catch (e) {} finally {
         let ap = await client.fetchStatus(user)
         let afa = ap.status ? ap.status : 'no about'
         client.sendContact(m.chat, 'Saved!', user.split`@` [0], m)
         client.sendContact(m.chat, [{
         name: await client.getName(user),
         number: `${user.split(`@`)[0]}`,
         about: afa
      }], m)
      }
   },
   error: false,
   group: true
}