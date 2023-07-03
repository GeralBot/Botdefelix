let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐟𝐞𝐥𝐢𝐱𝐱_𝐩𝐞𝐫𝐚𝐥𝐭𝐚: ${pesan}`
let teks = `🔱 𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 🔱 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙❖➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👑 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐁𝐨𝐭 𝐃𝐞 𝐅𝐞𝐥𝐢𝐢𝐱    `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
