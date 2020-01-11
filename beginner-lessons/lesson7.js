let les = [
    {english: "wàn (ten thousand)" ,chinese: "万"},
    {english: "lǐ (a Chinese unit of length (=1/2 km))" ,chinese: "里"},
    {english: "Chángchéng (the Great Wall)" ,chinese: "长城"},
    {english: "cháng (long)" ,chinese: "长"},
    {english: "dào (measure word for long and slender objects)" ,chinese: "道"},
    {english: "chéngqiáng (city wall)" ,chinese: "城墙"},
    {english: "wénmíng (famous; well-known)" ,chinese: "闻名"},
    {english: "jiàn (to build; to construct; to establish)" ,chinese: "建"},
    {english: "wèile (for the sake of; in order to)" ,chinese: "为了"},
    {english: "bǎohù (to protect)" ,chinese: "保护"},
    {english: "sìzhōu (all around)" ,chinese: "四周"},
    {english: "zhù (to build; to construct)" ,chinese: "筑"},
    {english: "qǐ (up)" ,chinese: "起"},
    {english: "tǒngyī (to unify; to unite; unified; united)" ,chinese: "统一"},
    {english: "guójiā (country)" ,chinese: "国家"},
    {english: "wàiguórén (foreigner)" ,chinese: "外国人"},
    {english: "liánjiē (to link; to join)" ,chinese: "连接"},
    {english: "zhèyàng (in this way)" ,chinese: "这样"},
    {english: "dāngshí (then; at that time)" ,chinese: "当时"},
    {english: "jìn - to enter; to advance" ,chinese: "进"},
    {english: "róngyi (easy)" ,chinese: "容易"},
    {english: "fāxiàn (to discover; to find)" ,chinese: "发现"},
    {english: "dírén (enemy)" ,chinese: "敌人"},
    {english: "shāo huǒ (to make a fire; to light a fire)" ,chinese: "烧火"},
    {english: "yān (smoke)" ,chinese: "烟"},
    {english: "xiāoxi (news)" ,chinese: "消息"},
    {english: "chuán (to pass on; to convey)" ,chinese: "传"},
    {english: "diànhuà (telephone)" ,chinese: "电话"},
    {english: "diànbào (telegraph)" ,chinese: "电报"},
    {english: "zhǒng (kind; sort; type)" ,chinese: "种"},
    {english: "bànfǎ (way; means; method)" ,chinese: "办法"},
    {english: "yǒuyòng (useful; effective)" ,chinese: "有用"},
    {english: "nǚzǐ (young woman)" ,chinese: "女子"},
    {english: "zhuā (to force to go; to arrest)" ,chinese: "抓"},
    {english: "zhàngfu (husband)" ,chinese: "丈夫"},
    {english: "chuāng (window)" ,chinese: "窗"},
    {english: "yīfu (clothes)" ,chinese: "衣服"},
    {english: "dāng....shí (When...)" ,chinese: "当...时"},
    {english: "zhǎodào (to find)" ,chinese: "找到"},
    {english: "kū (to cry; to weep)" ,chinese: "哭"},
    {english: "yè (night)" ,chinese: "夜"},
    {english: "dǎo (to collapse; to fall)" ,chinese: "倒"},
    {english: "gǔlǎo (ancient)" ,chinese: "古老"},
    {english: "wénhuà (culture)" ,chinese: "文化"},
    {english: "xiàngzhēng (symbol; to symbolize)" ,chinese: "象征"},
    {english: "qīnyǎn ((to see) with one's own eyes)" ,chinese: "亲眼"},
    {english: "liǎobuqǐ (excellent; amazing; remarkable)" ,chinese: "了不起"},
    {english: "lǎohuà (old saying)" ,chinese: "老话"},
    {english: "fú (to support with the hand; to hold by the arm)" ,chinese: "扶"},
    {english: "zuò (to sit)" ,chinese: "坐"},
    {english: "xiūxi (to rest; to take break)" ,chinese: "休息"},
    {english: "zhàoxiàng (to take pictures; to photograph)" ,chinese: "照相"},
    {english: "zhāng (measure word to sheets of paper, pictures)" ,chinese: "张"},
    {english: "xièxie (thank you)" ,chinese: "谢谢"}
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