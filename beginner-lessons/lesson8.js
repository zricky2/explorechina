let les = [
    {english: "xuéxí; to study, to learn" ,chinese: "学习"},
    {english: "lìshǐ; history" ,chinese: "历史"},
    {english: "shī; poetry, verse" ,chinese: "诗"},
    {english: "shīren; poet" ,chinese: "诗人"},
    {english: "tángcháo; Tang Dynasty" ,chinese: "唐朝"},
    {english: "yìzhí; always, all along" ,chinese: "一直"},
    {english: "dú; to read" ,chinese: "读"},
    {english: "fānyì; to translate, translation" ,chinese: "翻译"},
    {english: "wàiyǔ; foreign language" ,chinese: "外语"},
    {english: "wàiguórén; foreigner" ,chinese: "外国人"},
    {english: "nǔlì; to try hard" ,chinese: "努力"},
    {english: "jìxing; memory" ,chinese: "记性"},
    {english: "xiàgōngfu; to put in time and energy" ,chinese: "下工夫"},
    {english: "róngyì; easy" ,chinese: "容易"},
    {english: "jiāoào; arrogant, proud" ,chinese: "骄傲"},
    {english: "kèkǔ; hardworking" ,chinese: "刻苦"},
    {english: "gēn; measure word" ,chinese: "根"},
    {english: "tiě; iron" ,chinese: "铁"},
    {english: "bàng; stick, club" ,chinese: "棒"},
    {english: "shítou; stone, rock" ,chinese: "石头"},
    {english: "mó; to grint" ,chinese: "磨"},
    {english: "qíguài; strange, surprising" ,chinese: "奇怪"},
    {english: "gàn; to do" ,chinese: "干"},
    {english: "zhēn; needle" ,chinese: "针"},
    {english: "gǎn; to dare" ,chinese: "敢"},
    {english: "xiāngxìn; to believe in" ,chinese: "相信"},
    {english: "ěrduo; ear" ,chinese: "耳朵"},
    {english: "cū; thick" ,chinese: "粗"},
    {english: "yuèláiyuè; more and more" ,chinese: "越来越"},
    {english: "xì; thin" ,chinese: "细"},
    {english: "zǒng; sooner or later, eventually" ,chinese: "总"},
    {english: "bǎ; grammatical particle" ,chinese: "把"},
    {english: "gǎndòng; to move, to touch, touching" ,chinese: "感动"},
    {english: "zhīshi; knowledge" ,chinese: "知识"},
    {english: "jìnbù; to improve, improvement" ,chinese: "进步"},
    {english: "zhōngyú; finally" ,chinese: "终于"},
    {english: "chéng; to become" ,chinese: "成"},
    {english: "shēn; deep" ,chinese: "深"},
    {english: "chéngwéi; to become" ,chinese: "成为"},
    {english: "jiàoyù; to educate, education" ,chinese: "教育"},
    {english: "héngxīn; perseverance" ,chinese: "恒心"},
    {english: "wàngle; forget" ,chinese: "忘了"},
    {english: "gāngcái; just now, a moment ago" ,chinese: "刚才"},
    {english: "nóngfū; farmer" ,chinese: "农夫"},
    {english: "dòng; to freeze" ,chinese: "冻"},
    {english: "jiùhuó; to save (a life)" ,chinese: "救活"},
    {english: "kělián; pitiful, to take pity on" ,chinese: "可怜"},
    {english: "xiōngkǒu; chest" ,chinese: "胸口"},
    {english: "nuǎnhuo; warm" ,chinese: "暖和"},
    {english: "gǎnjī; to feel grateful" ,chinese: "感激"},
    {english: "yǎo; to bite" ,chinese: "咬"},
    {english: "tiānxìng; natural instincts" ,chinese: "天性"},
    {english: "huàirén; evildoer" ,chinese: "坏人"}
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