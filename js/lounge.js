const loungeAnswer = [];
const startFalg = [false];
const titels = [
    '今日の出来事',
    '最近のニュース',
    'おすすめの映画',
    '好きな音楽',
    '趣味について',
    '旅行の思い出',
    '好きな食べ物',
    '最近読んだ本',
    '好きなゲーム',
    '将来の夢',
    '好きなスポーツ',
    '最近の出来事',
    'おすすめのレストラン',
    '好きな季節'
];

function resetAnsers() {
    if(loungeAnswer.length < 1) {
        return;
    }
    for (let i = 0; loungeAnswer.length > 0 ; i++) {
        loungeAnswer.shift();
    }
}
function changeFlag(flag){
    startFalg.shift();
    startFalg.push(flag);
}
module.exports = {loungeAnswer,startFalg,titels,resetAnsers,changeFlag};