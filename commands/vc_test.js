const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vc')
        .setDescription('あなたがいるVCのメンバー数を返します'),
    execute: async function (interaction) {
        const member = interaction.member;
        const userName = interaction.user.username;
        const displayName = interaction.member.displayName;

        // VCに接続しているか確認
        const voiceChannel = member.voice.channel;
        if (!voiceChannel) {
            return await interaction.reply("ボイスチャンネルに参加していません。");
        }

        // VCの人数とメンバー情報を取得
        const members = [...voiceChannel.members.values()];
        const memberIDs = members.map(member => member.id);
        const idNamePairs = members.map(member => `${member.id} : ${member.displayName}`);

        // 最初の返信（ID一覧）
        await interaction.reply(`このVCにいるメンバーのID一覧です:\n${memberIDs.join('\n')}`);

        // 追加の情報を followUp または console.log で
        await interaction.followUp(`IDと名前一覧:\n${idNamePairs.join('\n')}`);

        console.log(`ユーザー名: ${userName}\nニックネーム: ${displayName}`);
    },
};
