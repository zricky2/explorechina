let les = [
    {english: "ancient (gǔ）" ,chinese: "古"},
    {english: "time; when... (shíhou)" ,chinese: "时候"},
    {english: "sky, heaven (tiān)" ,chinese: "天"},
    {english: "sun (tāiyáng)" ,chinese: "太阳"},
    {english: "To grow up to look like... (zhǎngde）" ,chinese: "长得"},
    {english: "Completely; entirely; absolutely (wánquán)" ,chinese: "完全"},
    {english: "every (měi)" ,chinese: "每"},
    {english: "To arrive; to reach; to (dào)" ,chinese: "到"},
    {english: "To go (qù)" ,chinese: "去"},
    {english: "The east (dōngfāng)" ,chinese: "东方"},
    {english: "Finally; the last (zuìhòu)" ,chinese: "最后"},
    {english: "To fly (fēi)" ,chinese: "飞"},
    {english: "The west (xīfāng)" ,chinese: "西方"},
    {english: "To return; to go back (huí)" ,chinese: "回"},
    {english: "Namely; to be no other than (jiùshì)" ,chinese: "就是"},
    {english: "To know; to realize; to be aware of (zhīdào)" ,chinese: "知道"},
    {english: "To sense; to feel (juéde)" ,chinese: "觉得"},
    {english: "interesting (yǒuyìsi)" ,chinese: "有意思"},
    {english: "Ordinal number prefix (dí)" ,chinese: "第"},
    {english: "If; in case (rúguǒ）" ,chinese: "如果"},
    {english: "To see (kànjiàn)" ,chinese: "看见"},
    {english: "then, therefore (nàme)" ,chinese: "那么"},
    {english: "will; would; to know how to... (Huì)" ,chinese: "会"},
    {english: "extremely; unusually; extraordinarily (fēicháng)" ,chinese: "非常"},
    {english: "On the ground; on the earth (dìshang)" ,chinese: "地上"},
    {english: "immediately (mǎshàng)" ,chinese: "马上"},
    {english: "To become (biànde)" ,chinese: "变得"},
    {english: "To die (sǐ）" ,chinese: "死"},
    {english: "God; spiritual being (shén)" ,chinese: "神"},
    {english: "Matter; event; thing; business (shìqing)" ,chinese: "事情"},
    {english: "To get angry; to take offense; angry (shēngqì)" ,chinese: "生气"},
    {english: "To ask; to order; to call; to shout (jiào)" ,chinese: "叫"},
    {english: "Physical strength; effort (lìqi)" ,chinese: "力气"},
    {english: "To shoot (shè)" ,chinese: "射"},
    {english: "Arrow (jiàn)" ,chinese: "箭"},
    {english: "The name of the god who, according to legend, shot down nine suns (Yì)" ,chinese: "羿"},
    {english: "Sad; aggrieved (nánguò)" ,chinese: "难过"},
    {english: "Run (pǎo）" ,chinese: "跑"},
    {english: "to live (one's life) (guò rìzi)" ,chinese: "过日子"},
    {english: "yesterday (zuótiān)" ,chinese: "昨天"},
    {english: "Evening (wǎnshang)" ,chinese: "晚上"},
    {english: "weather (tiānqì)" ,chinese: "天气"},
    {english: "To eat (a meal); to have a meal (chīfàn)" ,chinese: "吃饭"},
    {english: "To be afraid; fear (pà)" ,chinese: "怕"},
    {english: "Finally; at last (zǒngsuàn)" ,chinese: "总算"},
    {english: "Comfortable (shūfu)" ,chinese: "舒服"},
    {english: "To sleep (shuì)" ,chinese: "睡"},
    {english: "Season (of the year) (jìjié)" ,chinese: "季节"},
    {english: "Wind (fēng)" ,chinese: "风"},
    {english: "Together (yíkuàir)" ,chinese: "一块儿"}
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