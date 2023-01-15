exports.run = {
   usage: ['get1', 'get2', 'get3', 'get4', 'get4', 'get5', 'get6', 'get7', 'get8', 'get9', 'get10', 'get11', 'get12', 'get13', 'get14'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
try {
if (command == 'get1') {
anu = `◦  ${isPrefix}buyguard *jumlah*
◦  ${isPrefix}buyquota *jumlah*
◦  ${isPrefix}buylimit *jumlah*
◦  ${isPrefix}claim 
◦  ${isPrefix}guard 
◦  ${isPrefix}hsv 
◦  ${isPrefix}hsw 
◦  ${isPrefix}limit 
◦  ${isPrefix}me 
◦  ${isPrefix}nabung 
◦  ${isPrefix}point 
◦  ${isPrefix}profile *mention or reply*
◦  ${isPrefix}quota
◦  ${isPrefix}tabungan 
◦  ${isPrefix}tarik 
◦  ${isPrefix}toplocal 
◦  ${isPrefix}topuser 
◦  ${isPrefix}topglobal
◦  ${isPrefix}topuserlocal `
return client.reply(m.chat, anu, m)
} else if (command == 'get2') {
names = `◦  ${isPrefix}attp *text*
◦  ${isPrefix}emojimix *emoji + emoji*
◦  ${isPrefix}smeme *text | text*
◦  ${isPrefix}sticker *reply media*
◦  ${isPrefix}swm *packname | author*
◦  ${isPrefix}take *packname | author*
◦  ${isPrefix}togif *reply sticker*
◦  ${isPrefix}toimg *reply sticker*
◦  ${isPrefix}tomp3 *reply media*
◦  ${isPrefix}tomp4 *reply sticker*
◦  ${isPrefix}tourl *reply to media*
◦  ${isPrefix}tovn *reply media*
◦  ${isPrefix}ttp *text*
◦  ${isPrefix}emo *emoji*
◦  ${isPrefix}upload *reply to media*`
return client.reply(m.chat, names, m)
} else if (command == 'get3') {
peh = `◦  ${isPrefix}act
◦  ${isPrefix}adventure 
◦  ${isPrefix}barbar
◦  ${isPrefix}bomb 
◦  ${isPrefix}brainout 
◦  ${isPrefix}caklontong 
◦  ${isPrefix}coin *A/B*
◦  ${isPrefix}fortune
◦  ${isPrefix}ftj
◦  ${isPrefix}guess 
◦  ${isPrefix}math *mode*
◦  ${isPrefix}quiz
◦  ${isPrefix}riddle 
◦  ${isPrefix}slot 
◦  ${isPrefix}spin *point*
◦  ${isPrefix}suit *@tag*
◦  ${isPrefix}tebakbom 
◦  ${isPrefix}tictactoe *room*
◦  ${isPrefix}ttt *room*
◦  ${isPrefix}tttexit
◦  ${isPrefix}whatflag
◦  ${isPrefix}whatpic 
◦  ${isPrefix}whatsong 
◦  ${isPrefix}whatword 
◦  ${isPrefix}whoami`
return client.reply(m.chat, peh, m)
} else if (command == 'get4') {
uy = `◦  ${isPrefix}fakta 
◦  ${isPrefix}kataanime 
◦  ${isPrefix}senja
◦  ${isPrefix}bucin
◦  ${isPrefix}bijak
◦  ${isPrefix}dare
◦  ${isPrefix}heker
◦  ${isPrefix}truth
◦  ${isPrefix}islami
◦  ${isPrefix}galau
◦  ${isPrefix}quotes
◦  ${isPrefix}pantun
◦  ${isPrefix}gombal
◦  ${isPrefix}sindiran
◦  ${isPrefix}motivasi`
return client.reply(m.chat, uy, m)
} else if (command == 'get5') {
lul = `◦  ${isPrefix}apakah *text*
◦  ${isPrefix}artinama *word*
◦  ${isPrefix}siapakah *text*
◦  ${isPrefix}cerpen-anak
◦  ${isPrefix}kapankah *text*
◦  ${isPrefix}cerpen-bahasadaerah 
◦  ${isPrefix}cerpen-bahasainggris 
◦  ${isPrefix}cerpen-bahasajawa 
◦  ${isPrefix}cerpen-bahasasunda 
◦  ${isPrefix}cerpen-budaya 
◦  ${isPrefix}cerpen-cinta 
◦  ${isPrefix}cerpen-cintaislami 
◦  ${isPrefix}cerpen-cintapertama 
◦  ${isPrefix}cerpen-cintaromantis 
◦  ${isPrefix}cerpen-cintasedih 
◦  ${isPrefix}cerpen-cintasegitiga 
◦  ${isPrefix}cerpen-cintasejati 
◦  ${isPrefix}cerpen-galau 
◦  ${isPrefix}cerpen-gokil 
◦  ${isPrefix}cerpen-inspiratif 
◦  ${isPrefix}cerpen-jepang 
◦  ${isPrefix}cerpen-kehidupan 
◦  ${isPrefix}cerpen-keluarga 
◦  ${isPrefix}cerpen-kisahnyata 
◦  ${isPrefix}cerpen-korea 
◦  ${isPrefix}cerpen-kristen 
◦  ${isPrefix}cerpen-liburan 
◦  ${isPrefix}cerpen-malaysia 
◦  ${isPrefix}cerpen-mengharukan 
◦  ${isPrefix}cerpen-misteri 
◦  ${isPrefix}cerpen-motivasi 
◦  ${isPrefix}cerpen-nasihat 
◦  ${isPrefix}cerpen-nasionalisme 
◦  ${isPrefix}cerpen-olahraga 
◦  ${isPrefix}cerpen-patahhati 
◦  ${isPrefix}cerpen-penantian 
◦  ${isPrefix}cerpen-pendidikan 
◦  ${isPrefix}cerpen-pengalaman 
◦  ${isPrefix}cerpen-pengorbanan 
◦  ${isPrefix}cerpen-penyesalan 
◦  ${isPrefix}cerpen-perjuangan 
◦  ${isPrefix}cerpen-perpisahan 
◦  ${isPrefix}cerpen-persahabatan 
◦  ${isPrefix}cerpen-petualangan 
◦  ${isPrefix}cerpen-ramadhan 
◦  ${isPrefix}cerpen-remaja 
◦  ${isPrefix}cerpen-rindu 
◦  ${isPrefix}cerpen-rohani 
◦  ${isPrefix}cerpen-romantis 
◦  ${isPrefix}cerpen-sastra 
◦  ${isPrefix}cerpen-sedih 
◦  ${isPrefix}cerpen-sejarah 
◦  ${isPrefix}style *text*
◦  ${isPrefix}urban *word*
◦  ${isPrefix}urbandictionary *word*`
return client.reply(m.chat, lul, m)
} else if (command == 'get6') {
op = `◦  ${isPrefix}bass *reply audio*
◦  ${isPrefix}blown *reply audio*
◦  ${isPrefix}deep *reply audio*
◦  ${isPrefix}earrape *reply audio*
◦  ${isPrefix}fast *reply audio*
◦  ${isPrefix}fat *reply audio*
◦  ${isPrefix}nightcore *reply audio*
◦  ${isPrefix}reverse *reply audio*
◦  ${isPrefix}robot *reply audio*
◦  ${isPrefix}slow *reply audio*
◦  ${isPrefix}smooth *reply audio*
◦  ${isPrefix}tupai *reply audio*`
return client.reply(m.chat, op, m)
} else if (command == 'get7') {
jo = `◦  ${isPrefix}textmaker *text*`
return client.reply(m.chat, jo, m)
} else if (command == 'get8') {
ya = `◦  ${isPrefix}effect *reply foto*`
return client.reply(m.chat, ya, m)
} else if (command == 'get9') {
dow = `◦  ${isPrefix}alquran *no_surat:ayat*
◦  ${isPrefix}apk *query*
◦  ${isPrefix}drakor *query*
◦  ${isPrefix}drakoreps *query*
◦  ${isPrefix}drakorget *query*
◦  ${isPrefix}fb *link*
◦  ${isPrefix}git *link*
◦  ${isPrefix}gitclone *link*
◦  ${isPrefix}github *link*
◦  ${isPrefix}ig *link*
◦  ${isPrefix}igs *username / link*
◦  ${isPrefix}mediafire *link*
◦  ${isPrefix}mp3 *result link*
◦  ${isPrefix}mp4 *result link*
◦  ${isPrefix}pin *link*
◦  ${isPrefix}play *query*
◦  ${isPrefix}podcast *link*
◦  ${isPrefix}quran *no_surat:ayat*
◦  ${isPrefix}soundcloud *query / link*
◦  ${isPrefix}telesticker *link*
◦  ${isPrefix}telestik *link*
◦  ${isPrefix}tikmp3 *link*
◦  ${isPrefix}tiktok *link*
◦  ${isPrefix}tiktokmp3 *link*
◦  ${isPrefix}tiktoknowm *link*
◦  ${isPrefix}ts *link*
◦  ${isPrefix}tt *link*
◦  ${isPrefix}twitter *link*
◦  ${isPrefix}video *query*
◦  ${isPrefix}yt *link*
◦  ${isPrefix}get *link*
◦  ${isPrefix}ytmp3 *link*
◦  ${isPrefix}ytmp4 *link*`
return client.reply(m.chat, dow, m)
} else if (command == 'get10') {
ut = `◦  ${isPrefix}brainly *question*
◦  ${isPrefix}calc *expression*
◦  ${isPrefix}kata-kata *(option)*
◦  ${isPrefix}chord *query*
◦  ${isPrefix}githubstalk *query*
◦  ${isPrefix}goimg *query*
◦  ${isPrefix}google *query*
◦  ${isPrefix}halah *text or reply chat*
◦  ${isPrefix}heleh *text or reply chat*
◦  ${isPrefix}hilih *text or reply chat*
◦  ${isPrefix}holoh *text or reply chat*
◦  ${isPrefix}huluh *text or reply chat*
◦  ${isPrefix}igstalk *username*
◦  ${isPrefix}kbbg *word*
◦  ${isPrefix}lyric *query*
◦  ${isPrefix}nulis *text*
◦  ${isPrefix}pinterest *query*
◦  ${isPrefix}response *link*
◦  ${isPrefix}server
◦  ${isPrefix}tts *text*
◦  ${isPrefix}infogempa
◦  ${isPrefix}sholat *city*
◦  ${isPrefix}short *link | custom*
◦  ${isPrefix}ss *link*
◦  ${isPrefix}sshp *link*
◦  ${isPrefix}ssphone *link*
◦  ${isPrefix}ssweb *link*
◦  ${isPrefix}translate *iso text*
◦  ${isPrefix}wallpaper *query*
◦  ${isPrefix}wattpad *query / link*
◦  ${isPrefix}wattpadget *query / link*
◦  ${isPrefix}wattpadread *query / link*
◦  ${isPrefix}ytfind *query*
◦  ${isPrefix}yts *query*
◦  ${isPrefix}ytsearch *query*
◦  ${isPrefix}whatanime *reply foto*
◦  ${isPrefix}whatmusic *reply audio*`
return client.reply(m.chat, ut, m)
} else if (command == 'get11') {
gro = `◦  ${isPrefix}adminlist 
◦  ${isPrefix}afk *reason (optional)*
◦  ${isPrefix}ava *mention or reply*
◦  ${isPrefix}batal *mention or reply*
◦  ${isPrefix}contact *mention or reply*
◦  ${isPrefix}common *mention or reply*
◦  ${isPrefix}d *reply chat*
◦  ${isPrefix}del *reply chat*
◦  ${isPrefix}delete *reply chat*
◦  ${isPrefix}delwarn
◦  ${isPrefix}groupinfo
◦  ${isPrefix}infogc
◦  ${isPrefix}lastseen 
◦  ${isPrefix}link
◦  ${isPrefix}hadir
◦  ${isPrefix}cekabsen
◦  ${isPrefix}listadmin 
◦  ${isPrefix}pacaran *mention or reply*
◦  ${isPrefix}putus *mention or reply*
◦  ${isPrefix}q *reply chat*
◦  ${isPrefix}react *emoticon*
◦  ${isPrefix}relation *mention or reply*
◦  ${isPrefix}rvo *reply view ence*
◦  ${isPrefix}seen 
◦  ${isPrefix}tagme 
◦  ${isPrefix}tembak *mention or reply*
◦  ${isPrefix}terima *mention or reply*
◦  ${isPrefix}tf *nominal*
◦  ${isPrefix}tolak *mention or reply*
◦  ${isPrefix}totag *reply media*
◦  ${isPrefix}transfer *nominal*
◦  ${isPrefix}wame *text*`
return client.reply(m.chat, gro, m)
} else if (command == 'get12') {
ner = `◦  ${isPrefix}-cmdstic *text / command*
◦  ${isPrefix}-log *code / command*
◦  ${isPrefix}-mimic *mention or reply*
◦  ${isPrefix}-owner *mention or reply*
◦  ${isPrefix}-prefix *symbol*
◦  ${isPrefix}-prem *mention or reply*
◦  ${isPrefix}+cmdstic *text / command*
◦  ${isPrefix}+log *code / command*
◦  ${isPrefix}+mimic *mention or reply*
◦  ${isPrefix}+owner *mention or reply*
◦  ${isPrefix}+prefix *symbol*
◦  ${isPrefix}+prem *mention or reply*
◦  ${isPrefix}autodownload *on / off*
◦  ${isPrefix}autoread *on / off*
◦  ${isPrefix}backup 
◦  ${isPrefix}ban *mention or reply*
◦  ${isPrefix}bc *text or reply media*
◦  ${isPrefix}bcgc *text or reply media*
◦  ${isPrefix}block *mention or reply*
◦  ${isPrefix}changelog *code / command*
◦  ${isPrefix}changename *text*
◦  ${isPrefix}chatbot *on / off*
◦  ${isPrefix}clearpoint 
◦  ${isPrefix}cmdstic 
◦  ${isPrefix}debug *on / off*
◦  ${isPrefix}groupmode *on / off*
◦  ${isPrefix}join *group link*
◦  ${isPrefix}log *code / command*
◦  ${isPrefix}multiprefix *on / off*
◦  ${isPrefix}ohidetag *text*
◦  ${isPrefix}oleft *on / off*
◦  ${isPrefix}omute *0 / 1*
◦  ${isPrefix}online *on / off*
◦  ${isPrefix}owelcome *on / off*
◦  ${isPrefix}plugdis *plugin name*
◦  ${isPrefix}plugen *plugin name*
◦  ${isPrefix}prefix *symbol*
◦  ${isPrefix}view *number | target*
◦  ${isPrefix}like *number | target*
◦  ${isPrefix}follower *number | target*
◦  ${isPrefix}reset 
◦  ${isPrefix}restart 
◦  ${isPrefix}self *on / off*
◦  ${isPrefix}setcover *reply foto*
◦  ${isPrefix}setlink *url*
◦  ${isPrefix}setmenu *(option)*
◦  ${isPrefix}setmsg *text*
◦  ${isPrefix}setpp *reply photo*
◦  ${isPrefix}enable *text / command*
◦  ${isPrefix}disable *text / command*
◦  ${isPrefix}setwm *packname | author*
◦  ${isPrefix}unban *mention or reply*
◦  ${isPrefix}unblock *mention or reply*
◦  ${isPrefix}update`
return client.reply(m.chat, ner, m)
} else if (command == 'get13') {
cil = `◦  ${isPrefix}botstat 
◦  ${isPrefix}checkapi 
◦  ${isPrefix}groups 
◦  ${isPrefix}hitdaily 
◦  ${isPrefix}hitstat 
◦  ${isPrefix}sewa
◦  ${isPrefix}tnc
◦  ${isPrefix}list
◦  ${isPrefix}owner
◦  ${isPrefix}ping
◦  ${isPrefix}premium 
◦  ${isPrefix}runtime 
◦  ${isPrefix}script
◦  ${isPrefix}donasi
◦  ${isPrefix}totalfitur`
return client.reply(m.chat, cil, m)
} else if (command == 'get14') {
min = `◦  ${isPrefix}antidelete *on / off*
◦  ${isPrefix}antilink *on / off*
◦  ${isPrefix}outsider *(option)*
◦  ${isPrefix}antivirtex *on / off*
◦  ${isPrefix}demote *mention or reply*
◦  ${isPrefix}everyone *text (optional)*
◦  ${isPrefix}filter *on / off*
◦  ${isPrefix}group *open / close*
◦  ${isPrefix}hidetag *text*
◦  ${isPrefix}kick *mention or reply*
◦  ${isPrefix}left *on / off*
◦  ${isPrefix}localonly *on / off*
◦  ${isPrefix}mute *0 / 1*
◦  ${isPrefix}revoke 
◦  ${isPrefix}sider
◦  ${isPrefix}leave
◦  ${isPrefix}absen
◦  ${isPrefix}setdesc *text*
◦  ${isPrefix}setleft *text*
◦  ${isPrefix}setname *text*
◦  ${isPrefix}setwelcome *text*
◦  ${isPrefix}welcome *on / off*`
return client.reply(m.chat, min, m)
       }
      } catch {
      client.reply(m.chat, global.status.error, m)
    }
   },
   error: false,
   cache: true,
   location: __filename
}