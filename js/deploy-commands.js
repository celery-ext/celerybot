const { REST, Routes } = require('discord.js');
const { applicationId, guildId, token } = require('../config.json'); // ルートから取得
// ../commands ディレクトリからコマンドを読み込む
const { loadCommandsArray } = require('./load-commands');

async function deploy() {
	try {
		const commands = loadCommandsArray('../commands'); // ここはそのままでOK！

		const rest = new REST({ version: '10' }).setToken(token);

		await rest.put(
			Routes.applicationGuildCommands(applicationId, guildId),
			{ body: commands },
		);
		console.log('サーバー固有のコマンドが登録されました！');
	} catch (error) {
		console.error('コマンドの登録中にエラーが発生しました:', error);

	}
}

module.exports = { deploy };
