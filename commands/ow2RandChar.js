const { SlashCommandBuilder } = require('discord.js');
const { tankIndex, damageIndex, supportIndex, charIndex } = require('../js/ow2CharList.js');

let len;
let randomIndex;
let key;
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randcharow2')
        .setDescription('Overwatch 2のキャラをランダムで出すぞい！')
        .addIntegerOption(option =>
            option.setName('roll')
                .setDescription('null or 0 :全キャラ, 1 :タンク, 2 :ダメージ, 3 :サポート')
                .setRequired(false)
        ),
    execute: async function (interaction) {
        let roll = interaction.options.getInteger('roll');
        if (roll === 1) {
            roll = tankIndex;
            key = 'tank';
        } else if (roll === 2) {
            roll = damageIndex;
            key = 'damage';
        } else if (roll === 3) {
            roll = supportIndex;
            key = 'support';
        } else {
            roll = charIndex;
            key = '';
        }
        await interaction.reply('キャラを検索中じゃ...');
        for (let i = 0; i < 3; i++) {
            await interaction.editReply('キャラを検索中じゃ.');
            await wait(30);
            await interaction.editReply('キャラを検索中じゃ..');
            await wait(30);
            await interaction.editReply('キャラを検索中じゃ...');
            await wait(30);
        }
        console.log(roll);
        await interaction.editReply("選ばれたのは " + await getRandomChar(roll, key) + ' じゃ！\n')
    }
};

function getRandomChar(roll, key) {
    len = Object.keys(roll).length;
    randomIndex = Math.floor(Math.random() * len);
    return roll[key + randomIndex][0];
}