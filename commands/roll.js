const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('ndm形式でダイスロール（例: 3d6）')
		.addStringOption(option =>
			option.setName('formula')
				.setDescription('n d m)')
				.setRequired(true)
		),
	execute: async function (interaction) {
		const input = interaction.options.getString('formula');
		try {
			const { results, total } = rollNdM(input);
			await interaction.reply(`結果: [${results.join(', ')}] → 合計: ${total}`);
		} catch (err) {
			await interaction.reply({ content: ` ${err.message}`, ephemeral: true });
		}
	},
};

function rollNdM(input) {
	const match = input.match(/^(\d+)d(\d+)$/i);
	if (!match) {
		throw new Error('ndm 形式で!!');
	}
	const n = parseInt(match[1], 10);
	const m = parseInt(match[2], 10);
	if (n <= 0 || m <= 0) {
		throw new Error('n と m は自然数で。');
	}

	const results = Array.from({ length: n }, () => Math.floor(Math.random() * m) + 1);
	const total = results.reduce((a, b) => a + b, 0);
	return { results, total };
}
