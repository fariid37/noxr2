exports.run = {
   usage: ['apakah', 'kapankah', 'siapakah'],
   use: 'text',
   category: 'kerang',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      if (command == 'apakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Saya pedofil'), m)
      	let random = Func.random(['Iya', 'Mungkin Iya', 'Yo Ndak Tau', 'Kepo Bat Luwh', 'Mungkin Tidak', 'Jelas Tidak Dong', 'Jelas Iya Dong', 'Gak Mau Jawab Soalnya Lu Jelek'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${random}`
      	client.reply(m.chat, teks, m)
      } else if (command == 'kapankah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Saya menemukan loli tersesat'), m)
      	let time = Func.randomInt(1, 30)
      	let unit = Func.random(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${time} ${unit} lagi . . .`
      	client.reply(m.chat, teks, m)
      } else if (command == 'siapakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Pedofil disini'), m)
      	let member = participants.map(v => v.id)
      	let who = Func.random(member)
      	let teks = `*Pertanyaan* : ${command} ${text}?\n`
      	teks += `*Jawaban*: @${who.replace(/@.+/, '')}`
    	  client.reply(m.chat, teks, m)
      }
   },
   error: false,
   group: true,
   limit: 1,
   cache: true,
   location: __filename
}