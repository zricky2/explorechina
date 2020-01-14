let les = [
    {english: "silkworm (cán)", chinese:" 蚕"},
    {english: "poor (qióngkǔ)", chinese:" 穷苦"},
    {english: "to depend on each other for survival (xiāngyīwéimìng)", chinese:" 相依为命"},
    {english: "filial piety; to give present to (elders); to respect an elder (xiàojìng)", chinese:" 孝敬"},
    {english: "to raise (yǎng)", chinese:" 养"},
    {english: "mulberry tree (sāngshù)", chinese:" 桑树"},
    {english: "to feed (wèi)", chinese:" 喂"},
    {english: "sensible; intelligent (dǒngshì)", chinese:" 懂事"},
    {english: "work; manual labor (huór)", chinese:" 活儿"},
    {english: "to rely on (kào)", chinese:" 靠"},
    {english: "to cry; to yell (hǎn)", chinese:" 喊"},
    {english: "to vow; to promise someone a reward; to make a wish (xǔyuàn)", chinese:" 许愿"},
    {english: "to marry (of a woman) (jià)", chinese:" 嫁"},
    {english: "gentle and soft; tender (wēnróu)", chinese:" 温柔"},
    {english: "to nod (diǎntóu)", chinese:" 点头"},
    {english: "to get lost; to lose one's way (mílù)", chinese:" 迷路"},
    {english: "to carry on the back (bēi)", chinese:" 背"},
    {english: "deep feeling; with deep love (shēnqíng)", chinese:" 深情"},
    {english: "sad; sorrow (bēi'āi)", chinese:" 悲哀"},
    {english: "to follow (gēnsuí)", chinese:" 跟随"},
    {english: "to cry; to shed tears (liúlèi)", chinese:" 流泪"},
    {english: "to shell; to peel; to skin (bāo/bō)", chinese:" 剥"},
    {english: "yard (yuànzi)", chinese:" 院子"},
    {english: "to caress; to fondle (fǔmō)", chinese:" 抚摸"},
    {english: "to moisten; to soak (zhānshī)", chinese:" 沾湿"},
    {english: "to roll up (juǎn)", chinese:" 卷"},
    {english: "to regret (hòuhuǐ)", chinese:" 后悔"},
    {english: "to spin silk (tǔsī)", chinese:" 吐丝"},
    {english: "pants; trousers (kùzi)", chinese:" 裤子"},
    {english: "cloth (bù)", chinese:" 布"},
    {english: "blue (lán)", chinese:" 蓝"},
    {english: "old (jiù)", chinese:" 旧"},
    {english: "like...; as if... (xiàng...sìde)", chinese:" 像。。。似的"},
    {english: "number; size (of clothing)", chinese:" 号"},
    {english: "popular; fashionable (liúxíng)", chinese:" 流行"},
    {english: "stiff; rough; hard (yìng)", chinese:" 硬"},
    {english: "(the latest) fashion (shízhuāng)", chinese:" 时装"}
]
var table = document.getElementsByClassName("table");
generateTable(table, les);
    
function generateTable(table, data) { // require a table element and data
    for (let element of data) { //access each array
        let row = table[0].insertRow();
        for (key in element) { //access info in each array
            let cell = row.insertCell();
            cell.className = "col"
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
    }
}