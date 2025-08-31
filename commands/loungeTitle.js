const { SlashCommandBuilder } = require('discord.js');
const {titels} = require('../js/lounge.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('title')
		.setDescription('ラウンジのお題をランダムで出してやるぞい！'),
	execute: async function (interaction) {
        const randomIndex = Math.floor(Math.random() * titels.length);
        const selectedTitle = titels[randomIndex];
        await interaction.reply('今回のお題は「' + selectedTitle + '」じゃ！\n※/request で受付を開始じゃぞ！');
	}
};