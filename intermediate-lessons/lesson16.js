let les = [
    {english: "mèng a surname", chinese: "孟"}, 
    {english: "qiān to move", chinese: "迁"}, 
    {english: "mèng kē Mencius", chinese: "孟轲"}, 
    {english: "gōngyuánqián BCE", chinese: "公元前"}, 
    {english: "zuǒyòu around", chinese: "左右"}, 
    {english: "mùdì graveyard", chinese: "墓地"}, 
    {english: "jǔxíng to hold/stage", chinese: "举行"}, 
    {english: "zànglǐ funeral", chinese: "葬礼"}, 
    {english: "měi dāng whenever; everytime", chinese: "每当"}, 
    {english: "yíshì ceremonies", chinese: "仪式"}, 
    {english: "mófǎng to imitate", chinese: "模仿"}, 
    {english: "bùjiǔ not long", chinese: "不久"}, 
    {english: "zhěngtiān the whole day", chinese: "整天"}, 
    {english: "yóuxì game", chinese: "游戏"}, 
    {english: "fùjìn nearby", chinese: "附近"}, 
    {english: "shìchǎng market", chinese: "市场"}, 
    {english: "láiláiwǎngwǎng coming and going in great number", chinese: "来来往往"}, 
    {english: "zìcóng since", chinese: "自从"}, 
    {english: "yóuqí especially", chinese: "尤其"}, 
    {english: "shāngrén merchant", chinese: "商人"}, 
    {english: "jiàomài to peddle", chinese: "叫卖"}, 
    {english: "zǒngshì always", chinese: "总是"}, 
    {english: "huánjìng environment; cirumstances", chinese: "环境"}, 
    {english: "lǐyí rite; etiquette", chinese: "礼仪"}, 
    {english: "jìng quiet", chinese: "静"}, 
    {english: "gēn.. yǒuguān to relate to", chinese: "跟。。。。。。有关"}, 
    {english: "máfan trouble; troublesome; to trouble someone", chinese: "麻烦"}, 
    {english: "héshì appropriate; suitable", chinese: "合适"}, 
    {english: "hòurén later generation", chinese: "后人"}, 
    {english: "diǎnfàn model example", chinese: "典范"}, 
    {english: "lin ju － neighbor", chinese: "邻居"}, 
    {english: "ge bi -- next door", chinese: "隔壁"}, 
    {english: "yingxiang - affect", chinese: "影响"}, 
    {english: "shēngyi business; trade", chinese: "生意"}, 
    {english: "shàngbān to go to work", chinese: "上班"}, 
    {english: "hǎojiǔ bùjiàn long time no see", chinese: "好久不见"}, 
    {english: "guānxīn to care for; to be be concerned with", chinese: "关心"}, 
    {english: "shōushi to put in order; to tidy up", chinese: "收拾"}, 
    {english: "èr zhōng high school number two", chinese: "二中"}, 
    {english: "jiǔbā bar", chinese: "酒吧"}, 
    {english: "yóuxì jī game machine", chinese: "游戏机"}, 
    {english: "kǎlāOK karaoke", chinese: "卡拉OK"}, 
    {english: "gāozhōng high school", chinese: "高中"}, 
    {english: "huàn to change; to switch", chinese: "换"}, 
    {english: "yònggōng hard working; to study hard", chinese: "用功"}, 
    {english: "shāngyè commerce; trade", chinese: "商业"}, 
    {english: "qū district", chinese: "区"}, 
    {english: "huā to spend; to expend", chinese: "花"}, 
    {english: "xīnsi care; concern; ideas", chinese: "心思"}, 
    {english: "báifèi to spend in vain; to waste", chinese: "白费"}
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