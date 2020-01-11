let les = [
    {english: "jǐ to squeeze, crowded", chinese: "挤"}, 
    {english: "mǎn full", chinese: "满"}, 
    {english: "gǎn to rush", chinese: "赶"}, 
    {english: "quán whole", chinese: "全"}, 
    {english: "tuánjù to hold a reunion; to get together", chinese: "团聚"}, 
    {english: "jiā jiā hù hù every family", chinese: "家家户户"}, 
    {english: "xiào to laugh/smile", chinese: "笑"}, 
    {english: "zhōng bell; clock", chinese: "钟"}, 
    {english: "shēng sound", chinese: "声"}, 
    {english: "guǐ ghost", chinese: "鬼"}, 
    {english: "qījiān period", chinese: "期间"}, 
    {english: "bàinián to pay New Year's tribute", chinese: "拜年"}, 
    {english: "zhǎngbèi elders", chinese: "长辈"}, 
    {english: "qīnqi relatives", chinese: "亲戚"}, 
    {english: "zhǎng to grow", chinese: "长"}, 
    {english: "zuǐ mouth", chinese: "嘴"}, 
    {english: "zhǐhǎo have to; be forced to", chinese: "只好"}, 
    {english: "ránhòu afterward", chinese: "然后"}, 
    {english: "guān shàng to close (door); to turn off (light)", chinese: "关上"}, 
    {english: "dǎkāi to open", chinese: "打开"}, 
    {english: "zhùhè to congratulate", chinese: "祝贺"}, 
    {english: "chī diào to eat up", chinese: "吃掉"}, 
    {english: "dàjiē street", chinese: "大街"}, 
    {english: "qìngzhù celebrate", chinese: "庆祝"}, 
    {english: "xià pǎo to scare away", chinese: "吓跑"}, 
    {english: "nónglì lunar calendar", chinese: "农历"}, 
    {english: "jiérì holiday; festival", chinese: "节日"}, 
    {english: "xīnnián the New Year", chinese: "新年"}, 
    {english: "qiánhòu front & back; around (a certain time)", chinese: "前后"}, 
    {english: "yīncǐ therefore", chinese: "因此"}, 
    {english: "chūnjié Spring Festival", chinese: "春节"}, 
    {english: "jùshuō it is said that...", chinese: "据说"}, 
    {english: "guònián to observe the New Year", chinese: "过年"}, 
    {english: "zhènghǎo just", chinese: "正好"}, 
    {english: "mò end", chinese: "末"}, 
    {english: "chū beginning", chinese: "初"}, 
    {english: "rènao busy; festive", chinese: "热闹"}, 
    {english: "huódòng activity; to exercise", chinese: "活动"}, 
    {english: "bǎoliú to keep; to maintain", chinese: "保留"}, 
    {english: "guà to hang up", chinese: "挂"}, 
    {english: "jiǎn to cut", chinese: "剪"}, 
    {english: "tiē to paste", chinese: "贴"}, 
    {english: "dàochù everywhere", chinese: "到处"}, 
    {english: "shífēn very", chinese: "十分"}, 
    {english: "shāngdiàn store; shop", chinese: "商店"}, 
    {english: "chē vehicle", chinese: "车"}, 
    {english: "chuán boat; ship", chinese: "船"}, 
    {english: "fēijī airplane", chinese: "飞机"}, 
    {english: "lǎo lao maternal grandmother", chinese: "姥姥"}
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