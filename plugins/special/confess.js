exports.run = {
   usage: ['confess'],
   hidden: ['gamau', 'mau', 'stopconfess'],
   use: 'nomor | text',
   category: 'special',
   async: async (m, {
      client,
      text,
      args,
      isOwner,
      isPrefix,
      command
   }) => {    
     try {
     if (command == 'confess') {
     client.menfes = client.menfes ? client.menfes : {}		
		if(!text) return m.reply(`Example : ${isPrefix + command} 62895xxxxx|I Love You`)		
		const to = `${text.split('|')[0].replace(/\D/g, '')}@s.whatsapp.net`
		const onWa =  await client.onWhatsApp(to)
		if(!onWa) return m.reply('Number not registered on whatsapp')
		client.menfes[m.sender] = {
			id: m.sender,
			to: to,
			chatting: false
		}
		// await db.write()
		const teks = `Halo ${await client.getName(to)} 👋🏻\n Kamu mendapat pesan dari seseorang\n\n"${text.split('|')[1]}"`		
		await client.reply(to, teks + ` Ingin chatting bersama dia? ketik .mau / .gamau dan kirim .stopconfess untuk berhenti chat`, null)
		await m.reply('Pesan sudah dikirim ke target\n\nSilahkan tunggu jawaban dari dia:')
            }
            if (command == 'stopconfess'){
			const find = Object.values(client.menfes).find(id => [id.to, id.id].includes(m.sender))
			if(!find) return m.reply('Room tidak ditemukan/anda tidak berada didalam room')
			if(m.sender != find.id) return m.reply('Fitur ini hanya untuk pengirim pesan!')
			m.reply('*MENFES*\nBerhasil meninggalkan obrolan')
			await client.sendMessage(find.to, {text: '*MENFES*\nPengirim telah meninggalkan obrolan'})
			delete client.menfes[find.id]
			// await db.write()
			return
		}
     if (command == 'mau') {
			const find = Object.values(client.menfes).find(t => t.to == m.sender)
			client.menfes[find.id].chatting = true
			// await db.write()
			await m.reply('Anda menerima ajakan chatting dari dia\n\nGood Luck!')			
			return await client.reply(find.id, 'Dia telah menerima ajakan chatting denganmu\n\nGood Luck Bro & Sis, Ingin stop chat? Silahkan ketik *stopconfess*', null)
		}
		else if (command == 'gamau') {
			const find = Object.values(client.menfes).find(t => t.to == m.sender)
			await m.reply('Anda menolak ajakan chatting dari dia!')
			await client.sendMessage(find.id, {text: `@${find.to.split('@')[0]} Menolak ajakan untuk chatting\n\nNT dan Tetap semangat bro & Sis:)`, withTag: true})
			delete client.menfes[find.id]
			// await db.write()
		}
     } catch (e) {
        console.log(e)
     }
   },
   cache: true,
   private: true,
   restrict: true,
   location: __filename
}