const fs = require('fs');
const path = require('path');

function loadCommands(commandsDirRelative) {
	const commandsDir = path.resolve(__dirname, commandsDirRelative); // 絶対パス化
	const commands = new Map();
	const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(path.join(commandsDir, file));

		if (!command || !command.data || !command.execute) {
			console.warn(`[警告] ${file} は正しい形式ではありません。スキップします。`);
			continue;
		}

		commands.set(command.data.name, command);
	}

	console.log('読み込んだコマンド:');
	for (const [name, cmd] of commands) {
		console.log(`- ${name}`);
	}

	return commands;
}

function loadCommandsArray(commandsDirRelative) {
	const commandsDir = path.resolve(__dirname, commandsDirRelative);
	const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js'));

	return commandFiles.map(file => {
		const command = require(path.join(commandsDir, file));
		return command.data.toJSON();
	});
}

module.exports = {
	loadCommands,
	loadCommandsArray,
};