let les = [
    {english: "egg (dàn)" ,chinese: "蛋"},
    {english: "verb suffix indicating a static state or action in progress (zhe)" ,chinese: "着"},
    {english: "The name of the god who, according to legend, created the heaven and the earth (Pángǔ）" ,chinese: "盘古"},
    {english: "to wake up (xǐng)" ,chinese: "醒"},
    {english: "to open (one's eyes) (zhēngkāi)" ,chinese: "睁开"},
    {english: "eye (yǎnjing)" ,chinese: "眼睛"},
    {english: "The world (shìjiè)" ,chinese: "世界"},
    {english: "black (hēi)" ,chinese: "黑"},
    {english: "To kick (tī)" ,chinese: "踢"},
    {english: "To come out/to emerge (chūlái)" ,chinese: "出来"},
    {english: "light (qīng)" ,chinese: "轻"},
    {english: "heavy (zhòng)" ,chinese: "重"},
    {english: "thick (hòu)" ,chinese: "厚"},
    {english: "clean (gānjìng)" ,chinese: "干净"},
    {english: "To be standing (zhànzhe)" ,chinese: "站着"},
    {english: "To separate; to part (fēnkāi)" ,chinese: "分开"},
    {english: "slow (màn)" ,chinese: "慢"},
    {english: "To sink (xiàchén)" ,chinese: "下沉"},
    {english: "To become; to change into" ,chinese: "变成"},
    {english: "Adverbial marker (de)" ,chinese: "地"},
    {english: "To rise (shàngshēng)" ,chinese: "上升"},
    {english: "Body (shēntǐ）" ,chinese: "身体"},
    {english: "To pass; to spend (time)" ,chinese: "过"},
    {english: "Again (yòu)" ,chinese: "又"},
    {english: "breath; air; gas (qì)" ,chinese: "气"},
    {english: "wind (fēng)" ,chinese: "风"},
    {english: "cloud (yún)" ,chinese: "云"},
    {english: "Voice; sound (shēngyīn)" ,chinese: "声音"},
    {english: "new (xīn)" ,chinese: "新"},
    {english: "Thunder (léi)" ,chinese: "雷"},
    {english: "Sweat; perspiration (hàn)" ,chinese: "汗"},
    {english: "Moon (yuèliang)" ,chinese: "月亮"},
    {english: "Blood (xiě, xuè)" ,chinese: "血"},
    {english: "Hand (shǒu)" ,chinese: "手"},
    {english: "Foot (jiǎo）" ,chinese: "脚"},
    {english: "hair (tóu fa)" ,chinese: "头发"},
    {english: "Tree (shùmù)" ,chinese: "树木"},
    {english: "Long (time) jiǔ）" ,chinese: "久"},
    {english: "Recent (zuìjìn)" ,chinese: "最近"},
    {english: "intelligent; bright (cōngming)" ,chinese: "聪明"},
    {english: "How are things? How about ...? (Zěnmeyàng)" ,chinese: "怎么样"},
    {english: "pretty good (búcuò)" ,chinese: "不错"},
    {english: "other alternative (biéde)" ,chinese: "别的"},
    {english: "Okay (xíng)" ,chinese: "行"}
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