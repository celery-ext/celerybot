let { loungeAnswer,resetAnsers,changeFlag} = require('../js/lounge.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('check')
		.setDescription('ラウンジの解答を公開するのじゃ！'),
	execute: async function (interaction) {
        if(loungeAnswer.length == 0) {
            await interaction.reply('まだ回答がないのじゃ！');
            return;
        }
        let answer = '回答は以下の通りじゃ！\n';
        for(let i=0;i<loungeAnswer.length;i++){
            answer += loungeAnswer[i][1] + ' → ' + loungeAnswer[i][0] + '\n';
        }
		await interaction.reply(answer);
        await resetAnsers();
        await changeFlag(false);
	}
};