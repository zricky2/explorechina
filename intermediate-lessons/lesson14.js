let les = [
    {english: "Kungfu (gōngfu)", chinese:" 功夫"},
    {english: "martial arts (wǔshù)", chinese:" 武术"},
    {english: "content; substance (nèiróng)", chinese:" 内容"},
    {english: "rich (fēngfù)", chinese:" 丰富"},
    {english: "to practice kungfu (liàn)", chinese:" 练"},
    {english: "different; not the same (bù tóng)", chinese:" 不同"},
    {english: "kind; species (zhǒnglèi)", chinese:" 种类"},
    {english: "school; sect (of teaching) (liúpài)", chinese:" 流派"},
    {english: "among (qízhōng)", chinese:" 其中"},
    {english: "to originate from (qǐyuányú)", chinese:" 起源于"},
    {english: "temple (sì)", chinese:" 寺"},
    {english: "legend; it is said (chuánshuō)", chinese:" 传说"},
    {english: "monk (sēngrén)", chinese:" 僧人"},
    {english: "to practice (liàn'gōng)", chinese:" 练功"},
    {english: "beginning years (chū'nián)", chinese:" 初年"},
    {english: "once (céngjīng)", chinese:" 曾经"},
    {english: "emperor (huángdì)", chinese:" 皇帝"},
    {english: "since then (cóngcǐ)", chinese:" 从此"},
    {english: "to become famous (chūmíng)", chinese:" 出名"},
    {english: "many (xǔduō)", chinese:" 许多"},
    {english: "to influence; impact (yǐngxiǎng)", chinese:" 影响"},
    {english: "to watch; to guard (kān)", chinese:" 看"},
    {english: "to defeat (bài)", chinese:" 败"},
    {english: "to avenge (bàochóu)", chinese:" 报仇"},
    {english: "to stand (zhàn)", chinese:" 站"},
    {english: "to push (tuī)", chinese:" 推"},
    {english: "hurriedly; hastily (gǎnkuài)", chinese:" 赶快"},
    {english: "wall (qiáng)", chinese:" 墙"},
    {english: "hole (dòng)", chinese:" 洞"},
    {english: "to climb; to crawl (pá)", chinese:" 爬"},
    {english: "flat; level (píng)", chinese:" 平"},
    {english: "to consider; to think mistakenly (yǐwéi)", chinese:" 以为"},
    {english: "to one's surprise (méixiǎngdào)", chinese:" 没想到"},
    {english: "bitter; painstakingly (kǔ)", chinese:" 苦"},
    {english: "measure word (for a Kungfu stance) (shēn)", chinese:" 身"},
    {english: "hero (yīngxióng)", chinese:" 英雄"},
    {english: "gesture; movement (dòngzuò)", chinese:" 动作"},
    {english: "movie; film (diànyǐng)", chinese:" 电影"},
    {english: "indeed; honest (shízài)", chinese:" 实在"},
    {english: "careful; carefully (zǐxì)", chinese:" 仔细"},
    {english: "for animals; vessels (zhī)", chinese:" 只"},
    {english: "monkey (hóu)", chinese:" 猴"},
    {english: "spare time; free time (kòng)", chinese:" 空"},
    {english: "thin; skinny (shòu)", chinese:" 瘦"},
    {english: "period (of time); section; paragraph (duàn)", chinese:" 段"},
    {english: "pointed (jiān", chinese:" 尖"}
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