let les = [
    {english: "táocí pottery and porcelain", chinese: "陶瓷"}, 
    {english: "shēnghuó life; daily life", chinese: "生活"}, 
    {english: "yòngpǐn articles for use", chinese: "用品"}, 
    {english: "láilì origin; source", chinese: "来历"}, 
    {english: "fāmíng to invent; invention", chinese: "发明"}, 
    {english: "táoqì pottery; earthenware", chinese: "陶器"}, 
    {english: "guō pot; pan", chinese: "锅"}, 
    {english: "rìcháng daily", chinese: "日常"}, 
    {english: "nítǔ clay; earth; soil", chinese: "泥土"}, 
    {english: "zhì to make; to manufacture", chinese: "制"}, 
    {english: "pén basin; tub", chinese: "盆"}, 
    {english: "pán plate; dish", chinese: "盘"}, 
    {english: "guàn jar; pot", chinese: "罐"}, 
    {english: "shàigān to dry in the sun", chinese: "晒干"}, 
    {english: "jiēshi solid; strong; durable", chinese: "结实"}, 
    {english: "ǒurán unexpectedly; accidentally", chinese: "偶然"}, 
    {english: "yǒuyìshi purposely; on purpose", chinese: "有意识"}, 
    {english: "bènzhòng heavy; cumbersome", chinese: "笨重"}, 
    {english: "wēndù temperature", chinese: "温度"}, 
    {english: "měilì beautiful", chinese: "美丽"}, 
    {english: "zhuāngshìpǐn decoration; ornament", chinese: "装饰品"}, 
    {english: "shíyòng practical; pragmatic", chinese: "实用"}, 
    {english: "gōngyìpǐn handicraft; article", chinese: "工艺品"}, 
    {english: "shěde to be willing to part with", chinese: "舍得"}, 
    {english: "míngshēng reputation", chinese: "名声"}, 
    {english: "yùn to transport", chinese: "运"}, 
    {english: "lùtúyáoyuǎn a long way to go; far away", chinese: "路途遥远"}, 
    {english: "áng'guì expensive; costly", chinese: "昂贵"}, 
    {english: "zhēn'guì valuable; precious", chinese: "珍贵"}, 
    {english: "jiāoào proud", chinese: "骄傲"}, 
    {english: "guìzhòng precious; rare; highly treasured", chinese: "贵重"}, 
    {english: "zhèngfú government", chinese: "政府"}, 
    {english: "qǐchū in the beginning", chinese: "起初"}, 
    {english: "zūnguì honorable; respectable", chinese: "尊贵"}, 
    {english: "línjìn near; close to; adjacent", chinese: "邻近"}, 
    {english: "Ōuzhōu Europe", chinese: "欧洲"}, 
    {english: "Měizhōu America", chinese: "美洲"}, 
    {english: "biàn complete", chinese: "遍"}, 
    {english: "shuāi to drop; to smash", chinese: "摔"}, 
    {english: "suì broken", chinese: "碎"}, 
    {english: "liú to save; to keep", chinese: "留"}, 
    {english: "zhǐ paper", chinese: "纸"}, 
    {english: "bāo to wrap", chinese: "包"}, 
    {english: "céng layer", chinese: "层"}, 
    {english: "zhǒngzi seed", chinese: "种子"}, 
    {english: "jiāo to pour; to irrigate; to water", chinese: "浇"}, 
    {english: "sìzhōu all around", chinese: "四周"}, 
    {english: "jǐnjǐn tightly", chinese: "紧紧"}, 
    {english: "pèng to bump against", chinese: "碰"}, 
    {english: "dàduōshù great majority; most", chinese: "大多数"}
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