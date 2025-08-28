const { SlashCommandBuilder } = require('discord.js');
let { remindlist } = require('../js/remind.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setremind')
        .setDescription('リマインドをセットするのじゃ！')
        .addStringOption(option =>
            option.setName('answer')
                .setDescription('回答を入力するのじゃ')
                .setRequired(true)
        ),
    execute: async function (interaction) {
        const option = interaction.options.getString('answer');
        const mainchannel = interaction.guild.channels.resolve('1394962437689835602');
        const channel = interaction.channel;
        const messages = await mainchannel.messages.fetch({ limit: 1 });
        const messagesArray = Array.from(messages.values());
        const previousMessage = messagesArray[0];
        const content = previousMessage.content;
        await previousMessage.delete();
        if (channel == mainchannel) {
            return await interaction.reply(await makeMessages(content.split('\n'), option));
        } else {
            mainchannel.send(await makeMessages(content.split('\n'), option))
            return await interaction.reply('リマインドを保存したのじゃ！');
        }
    },
};

function makeMessages(content, option) {
    let mes = "";
    for (let i = 0; i < content.length; i++) {
        mes += content[i] + '\n';
    }
    mes += option
    remindlist = mes.split('\n');
    console.log(remindlist);
    return mes;
}
