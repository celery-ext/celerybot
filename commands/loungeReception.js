const { loungeAnswer,resetAnsers, trueFlag, changeFlag} = require('../js/lounge.js');
const { SlashCommandBuilder } = require('discord.js');
const wait = require('util').promisify(setTimeout);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('reqest')
		.setDescription('回答の受付を開始するぞい！')
		.addIntegerOption(option =>
			option.setName('member')
				.setDescription('受付人数を指定するのじゃ！')
				.setRequired(true)
		),
	execute: async function (interaction) {
		//await interaction.deferReply();
		const member = interaction.options.getInteger('member');
		if(member<2) {
			await interaction.reply('一人以下ではできぬぞ t_t');
			return;
		}
		await changeFlag(true);
		await resetAnsers();
		await interaction.reply('受付を開始したのじゃ！');
		for (let i = 0; i < 15*60*10; i++) {
			if (loungeAnswer.length == member) {
				await interaction.editReply('回答を受け付けているのじゃ → 終了したのじゃ');
				await interaction.followUp('みなの回答が完了したのじゃ');
				return;
			} else {
				await interaction.editReply('回答を受け付けているのじゃ(' + loungeAnswer.length + '/' + member + ')');
				await wait(100);
			}
		}
		await interaction.editReply('回答を受け付けているのじゃ → 終了したのじゃ');
		await interaction.followUp('そこまでじゃ!\n回答が完了したのは(' + loungeAnswer.length + '/' + member + ')人じゃ！\n');
		return;
	}
};