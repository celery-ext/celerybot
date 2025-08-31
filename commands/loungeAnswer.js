const { SlashCommandBuilder } = require('discord.js');
const { loungeAnswer, startFalg} = require('../js/lounge.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('answer')
		.setDescription('ラウンジの解答を受け付けるのじゃ！')
		.addStringOption(option =>
			option.setName('answer')
				.setDescription('回答を入力するのじゃ')
				.setRequired(true)
		),
	execute: async function (interaction) {
		if (startFalg[0]==true) {
			answer = [interaction.options.getString('answer'), interaction.member.displayName];
			loungeAnswer.push(answer);
			await interaction.reply({content:'回答「'+answer[0]+ '」を受け付けたのじゃ！',flags: 64});
		}else{
			await interaction.reply({content:'はて、まだ回答を受け付けてないのじゃが・・・',flags: 64});
		}
	}
};