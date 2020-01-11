let les = [
    {english: "high, tall (gāo)" ,chinese: "高"},
    {english: "mountain (shān)" ,chinese: "山"},
    {english: "river (hé)" ,chinese: "河"},
    {english: "most (used to form superlative) (zuì)" ,chinese: "最"},
    {english: "Measure word for river and various long, narrow things (tiáo)" ,chinese: "条"},
    {english: "Part, section (bù)" ,chinese: "部"},
    {english: "Yangtze River (Cháng Jiāng)" ,chinese: "长江"},
    {english: "south (nán)" ,chinese: "南"},
    {english: "side (biān)" ,chinese: "边"},
    {english: "the south (nánfāng)" ,chinese: "南方"},
    {english: "summer (xiàtiān)" ,chinese: "夏天"},
    {english: "hot (rè)" ,chinese: "热"},
    {english: "to rain (xiàyǔ)" ,chinese: "下雨"},
    {english: "there (nàlǐ)" ,chinese: "那里"},
    {english: "lake (hú)" ,chinese: "湖"},
    {english: "tree (shù)" ,chinese: "树"},
    {english: "love (ài)" ,chinese: "爱"},
    {english: "to eat (chī)" ,chinese: "吃"},
    {english: "fish (yú)" ,chinese: "鱼"},
    {english: "rice (uncooked rice) (dàmǐ)" ,chinese: "大米"},
    {english: "north (běi)" ,chinese: "北"},
    {english: "the north (běifāng)" ,chinese: "北方"},
    {english: "same (yíyàng)" ,chinese: "一样"},
    {english: "winter (dōngtiān)" ,chinese: "冬天"},
    {english: "cold (lěng)" ,chinese: "冷"},
    {english: "to snow (xiàxuě)" ,chinese: "下雪"},
    {english: "there (nàr)" ,chinese: "那儿"},
    {english: "because...so... (yīnwèi...suǒyǐ)" ,chinese: "因为。。。所以"},
    {english: "(wheat) flour (miàn)" ,chinese: "面"},
    {english: "west (xī)" ,chinese: "西"},
    {english: "east (dōng)" ,chinese: "东"},
    {english: "low; to lower (dī)" ,chinese: "低"},
    {english: "from (cóng)" ,chinese: "从"},
    {english: "toward (wǎng)" ,chinese: "往"},
    {english: "to flow (liú)" ,chinese: "流"},
    {english: "wide (kuān)" ,chinese: "宽"},
    {english: "narrow (zhǎi)" ,chinese: "窄"},
    {english: "both sides (liǎngbiān)" ,chinese: "两边"},
    {english: "pretty; good-looking (hǎokàn)" ,chinese: "好看"},
    {english: "city (chéngshì)" ,chinese: "城市"},
    {english: "to pass through (jīngguo)" ,chinese: "经过"},
    {english: "capital (shǒudū)" ,chinese: "首都"},
    {english: "in front (qiántou)" ,chinese: "前头"},
    {english: "house (fángzi)" ,chinese: "房子"},
    {english: "side (miàn)" ,chinese: "面"},
    {english: "left (zuǒ)" ,chinese: "左"},
    {english: "right (yòu)" ,chinese: "右"},
    {english: "middle (zhōngjiān)" ,chinese: "中间"},
    {english: "really; truly (zhēn)" ,chinese: "真"},
    {english: "behind (hòutou)" ,chinese: "后头"},
    {english: "measure word for buildings (suǒ)" ,chinese: "所"},
    {english: "outside (wài)" ,chinese: "外"},
    {english: "side (pángbiān)" ,chinese: "旁边"},
    {english: "measure word for tree, etc. (kē)" ,chinese: "棵"},
    {english: "under (xià)" ,chinese: "下"},
    {english: "tired (lèi)" ,chinese: "累"},
    {english: "where (nǎr)" ,chinese: "哪儿"},
    {english: "storied building; floor (lóu)" ,chinese: "楼"},
    {english: "to work; job (gōngzuò)" ,chinese: "工作"},
    {english: "book (shū)" ,chinese: "书"}
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