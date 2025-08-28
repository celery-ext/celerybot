let tank = "tank";
let damage = "damage";
let support = "support";
const tankIndex = {
    "tank0":["ロードホッグ",tank],
    "tank1":["D.VA",tank],
    "tank2":["ウィンストン",tank],
    "tank3":["オリーサ",tank],
    "tank4":["ザリア",tank],
    "tank5":["シグマ",tank],
    "tank6":["ジャンカー・クイーン",tank],
    "tank7":["ドゥームフィスト",tank],
    "tank8":["ハザード",tank],
    "tank9":["マウガ",tank],
    "tank10":["ラインハルト",tank],
    "tank11":["ラマットラ",tank],
    "tank12":["レッキング・ボール",tank]
}

const damageIndex = {
    "damage0":["リーパー",damage],
    "damage1":["アッシュ",damage],
    "damage2":["ウィドウメイカー",damage],
    "damage3":["エコー",damage],
    "damage4":["キャスディ",damage],
    "damage5":["ゲンジ",damage],
    "damage6":["シンメトラ",damage],
    "damage7":["ジャンクラット",damage],
    "damage8":["ソジョーン",damage],
    "damage9":["ソルジャー76",damage],
    "damage10":["ソンブラ",damage],
    "damage11":["トールビョーン",damage],
    "damage12":["トレーサー",damage],
    "damage13":["ハンゾー",damage],
    "damage14":["バスティオン",damage],
    "damage15":["ファラ",damage],
    "damage16":["フレイヤ",damage],
    "damage17":["ベンチャー",damage],
    "damage18":["メイ",damage]
};

const supportIndex = {
    "support0":["ルシオ",support],
    "support1":["アナ",support],
    "support2":["イラリー",support],
    "support3":["キリコ",support],
    "support4":["ジュノ",support],
    "support5":["ゼニヤッタ",support],
    "support6":["バティスト",support],
    "support7":["ブリギッテ",support],
    "support8":["マーシー",support],
    "support9":["モイラ",support],
    "support10":["ライフウィーバー",support]
};
const charIndex= {};
let len = 0;
for (let i = 0; i < Object.keys(tankIndex).length; i++,len++) {
    charIndex[len] = tankIndex[tank + len];
}
for (let i = 0; i < Object.keys(damageIndex).length; i++,len++) {
    charIndex[len] = damageIndex[damage + i];
}
for (let i = 0; i < Object.keys(supportIndex).length; i++,len++) {
    charIndex[len] = supportIndex[support + i];
}
//console.log(charIndex)
module.exports = {tankIndex,damageIndex,supportIndex,charIndex};