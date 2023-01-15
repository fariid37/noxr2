exports.run = {
   usage: ['tagme'],
   category: 'group only',
   async: async (m, {
      client
   }) => {
      client.reply(m.chat, `@${m.sender.split`@`[0]}`, m)
   },
   group: true
}