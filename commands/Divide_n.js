// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
const { SlashCommandBuilder } = require('discord.js');

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
	data: new SlashCommandBuilder()
		.setName('divide')
		.setDescription('vc同一のVCにいるメンバーを任意の数に分けます')
		.addIntegerOption(option =>
	option.setName('int')
		.setDescription('分けたいチーム数')
		.setRequired(true)),
	execute: async function (interaction) {
		const N = interaction.options.getInteger('int');

		const user = interaction.member;
		const channel = user.voice.channel;
        if (!channel) {
            return await interaction.reply("ボイスチャンネルに参加していません。");
        };

		const members = [...channel.members.values()];
		const shuffle = [...members];

        for (let i = members.length-1 ; i > 0; i--) {
			const m = Math.floor(Math.random() * (i+1));
			[shuffle[i], shuffle[m]] = [shuffle[m], shuffle[i]];
        };
		
		const team = Array.from({ length:N }, () => []);
		shuffle.forEach((member,index)=> {
			team[index % N].push(member.displayName);
		});

		let result='';
		team.forEach((team, i) => {
			result += `**チーム ${i + 1}**: ${team.join(', ')}\n`;
		});
		await interaction.reply(result);
	},
};