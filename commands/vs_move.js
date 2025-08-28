const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('divide2')
        .setDescription('同じvcのメンバーをランダムに2つに分けます'),
    execute: async (interaction) => {
        const member = interaction.member;
        const voiceChannel = member.voice.channel;

        if (!voiceChannel) {
            return await interaction.reply("ボイスチャンネルに参加していません。");
        };

        const joinmember = [...voiceChannel.members.values()];

        const memberlist = {};
        joinmember.forEach((member, index) => {
            memberlist[index] = {
                name: member.displayName,
            };
        });

        const shuffle = [];
        for (i = 0; i < joinmember.length; i++) {
            shuffle.push(i);
        };

        const team1 = [];
        const team2 = [];

        for (i = joinmember.length-1 ; i > 0; i--) {
            const m = Math.floor(Math.random() * i);
            const work = shuffle[i - 1];
            shuffle[i - 1] = shuffle[m];
            shuffle[m] = work;
        };

        shuffle.forEach((member,index) => {
            if ( index % 2 === 0) {
                team1.push(memberlist[index].name);
            }
            else {
                team2.push(memberlist[index].name);
            }
        });

        console.log(memberlist);
        console.log(shuffle);
        console.log(team1);
        console.log(team2);

        return await interaction.reply(
        `チーム1\n${team1.join('\n')}\n\nチーム2\n${team2.join(`\n`)}`
        );
    },
};
