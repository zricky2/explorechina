let les = [
    {english: "Idiom; set phrase (chéngyǔ）" ,chinese: "成语"},
    {english: "Gùshi (story)" ,chinese: "故事"},
    {english: "Duì (toward;to)" ,chinese: "对"},
    {english: "Tánqín (play the zither)" ,chinese: "弹琴"},
    {english: "Yīnyuè (music)" ,chinese: "音乐"},
    {english: "Yīnyuèjiā (musician)" ,chinese: "音乐家"},
    {english: "de (verb complement marker)" ,chinese: "得"},
    {english: "Dài (to bring)" ,chinese: "带"},
    {english: "head/measure word for animals (tóu)" ,chinese: "头"},
    {english: "it (tā)" ,chinese: "它"},
    {english: "Tune; melody (qǔzi)" ,chinese: "曲子"},
    {english: "as if; seemingly (hǎoxiàng)" ,chinese: "好像"},
    {english: "The more...the more (yuè...yuè)" ,chinese: "越...越"},
    {english: "a little (yìdiǎnr)" ,chinese: "一点（儿）"},
    {english: "To add (tiān)" ,chinese: "添"},
    {english: "interest (xìngqù)" ,chinese: "兴趣"},
    {english: "Snake; serpent (shé)" ,chinese: "蛇"},
    {english: "To draw; to paint; painting; picture (huà)" ,chinese: "画"},
    {english: "To understand; to comprehend (dǒng）" ,chinese: "懂"},
    {english: "Stupid (bèn)" ,chinese: "笨"},
    {english: "other people; others (biéren)" ,chinese: "别人"},
    {english: "foot (zú)" ,chinese: "足"},
    {english: "To drink (hē)" ,chinese: "喝"},
    {english: "wine; alcohol; liquor (jiǔ）" ,chinese: "酒"},
    {english: "To get; to obtain; to gain (dédào)" ,chinese: "得到"},
    {english: "bottle (píng)" ,chinese: "瓶"},
    {english: "of course (dāngrán)" ,chinese: "当然"},
    {english: "Extremely; terribly; awfully (bùdéliǎo)" ,chinese: "不得了"},
    {english: "enough (gòu)" ,chinese: "够"},
    {english: "fast; quick (kuài)" ,chinese: "快"},
    {english: "extremely (jíle)" ,chinese: "极了"},
    {english: "originally, essentially (běnlái)" ,chinese: "本来"},
    {english: "even (lián...dōu)" ,chinese: "连..。都"},
    {english: "Although, though (suīrán)" ,chinese: "虽然"},
    {english: "To illustrate; to show; to indicate (shuōmíng)" ,chinese: "说明"},
    {english: "Necessary; necessity (bìyào)" ,chinese: "必要"},
    {english: "Good; benefit;advantage (hǎochù)" ,chinese: "好处"},
    {english: "young (niánqīng)" ,chinese: "年轻"},
    {english: "a respectful address for an elderly man (lǎodàye）" ,chinese: "老大爷"},
    {english: "Urgent (jí)" ,chinese: "急"},
    {english: "One of the Warring States (770-256 BC) (Chǔguó)" ,chinese: "楚国"},
    {english: "Hey! (éi)" ,chinese: "诶"},
    {english: "To stop (tíng)" ,chinese: "停"},
    {english: "road (lù)" ,chinese: "路"},
    {english: "To drive (a horse or chariot) (gǎn)" ,chinese: "赶"},
    {english: "Horse (mǎ）" ,chinese: "马"},
    {english: "Chariot; (horse-drawn) carriage" ,chinese: "马车"},
    {english: "Vehicle, car (chē)" ,chinese: "车"},
    {english: "It doesn't matter; Never mind (búyàojǐn)" ,chinese: "不要紧"},
    {english: "to run (pǎo)" ,chinese: "跑"},
    {english: "Expressing complaint or impatience (āiyā)" ,chinese: "哎呀"},
    {english: "simply (jiǎnzhí)" ,chinese: "简直"},
    {english: "Muddled; confused; bewildered (hútu)" ,chinese: "糊涂"},
    {english: "Reason (dàolǐ)" ,chinese: "道理"},
    {english: "Away from (lí)" ,chinese: "离"},
    {english: "Far; distant (yuǎn)" ,chinese: "远"},
    {english: "Duì nú tán qín" ,chinese: "对牛弹琴"},
    {english: "self-contradictory (zì xiāng máo dùn)" ,chinese: "自姐矛盾"}
]

var table = document.getElementsByClassName("chars");
generateTable(table, les);
    
function generateTable(table, data) { // require a table element and data
    for (let element of data) { //access each array
        let row = table[0].insertRow();
        for (key in element) { //access info in each array
            let cell = row.insertCell();
            cell.className = "char"
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
    }
}