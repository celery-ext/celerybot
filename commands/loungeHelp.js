const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loungehelp')
		.setDescription('わらわがラウンジでの遊び方を教えてやるぞい！'),
	execute: async function (interaction) {
        await interaction.reply(
            'ラウンジでは、みんなでお題に対して回答を出し合う遊びができるのじゃ！\n'
            + '一つのお題に対してみなで同じ答えを出すことが目標なのじゃ！\n\n'
            + '1. `/title` コマンドでランダムなお題を出すのじゃ。\n'
            + '    ※このお題は自分たちで決めても構わんぞい。\n'
            + '2. `/request` コマンドで回答の受付を開始するのじゃ。\n'
            + '3. 参加者は `/answer` コマンドで自分の回答を送るのじゃ。\n'
            + '4. 全員の回答が集まったら、 `/check` コマンドで回答を公開するのじゃ。\n\n'
            + '以上がラウンジでの遊び方じゃ！\nもしもっと詳しく知りたい場合はgithubのREADMEで確認するのじゃ！\n');
	}
};