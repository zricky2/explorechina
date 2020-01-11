let les = [
{english: "sīxiǎng thought; thinking - ", chinese: "思想"}, 
{english: "jiā -er; -ist; -ian - ", chinese: "家"}, 
{english: "jiàoyù to educate - ", chinese: "教育"}, 
{english: "yóuyú because of; due to - ", chinese: "由于"}, 
{english: "wǎngwǎng often - ", chinese: "往往"}, 
{english: "chēnghu to call; the form of addressing subject - ", chinese: "称呼"}, 
{english: "shòu to get; to receive - ", chinese: "受"}, 
{english: "zūnjìng to respect - ", chinese: "尊敬"}, 
{english: "jīngcháng often; frequently - ", chinese: "经常"}, 
{english: "dǎzhàng to fight a battle - ", chinese: "打仗"}, 
{english: "luàn chaotic - ", chinese: "乱"}, 
{english: "lǎobǎixìng commoners; ordinary people - ", chinese: "老百姓"}, 
{english: "kùnnan difficult - ", chinese: "困难"}, 
{english: "qíngkuàng situation - ", chinese: "情况"}, 
{english: "àihù to protect - ", chinese: "爱护"}, 
{english: "tiānxià the world - ", chinese: "天下"}, 
{english: "bàn to establish; to manage - ", chinese: "办"}, 
{english: "niánqīngrén youth - ", chinese: "年轻人"}, 
{english: "jījí active; actively - ", chinese: "积极"}, 
{english: "shèhuì society - ", chinese: "社会"}, 
{english: "guǎnlǐ to manage - ", chinese: "管理"}, 
{english: "gǎibiàn to change - ", chinese: "改变"}, 
{english: "zhǔzhāng to advocate; opinion - ", chinese: "主张"}, 
{english: "jiāo to pay - ", chinese: "交"}, 
{english: "xuéfèi tuition - ", chinese: "学费"}, 
{english: "jīhuì opportunity - ", chinese: "机会"}, 
{english: "gān/gàn ròu dried meat - ", chinese: "干肉"}, 
{english: "tèbié special - ", chinese: "特别"}, 
{english: "jiāo shū to teach - ", chinese: "教书"}, 
{english: "bùduàn continuously - ", chinese: "不断"}, 
{english: "nàixīn patient - ", chinese: "耐心"}, 
{english: "gǔlì to encourage - ", chinese: "鼓励"}, 
{english: "zhēnzhèng truly - ", chinese: "真正"}, 
{english: "jīngyàn experience - ", chinese: "经验"}, 
{english: "fùxí to review - ", chinese: "复习"}, 
{english: "shǐyòng to make use of; to apply - ", chinese: "使用"}, 
{english: "tàidù attitude - ", chinese: "态度"}, 
{english: "chéngshí honest - ", chinese: "诚实"}, 
{english: "zǐnǚ children - ", chinese: "子女"}, 
{english: "lùguò to pass by - ", chinese: "路过"}, 
{english: "bān to move - ", chinese: "搬"}, 
{english: "kě however - ", chinese: "可"}, 
{english: "fǎzi means; ways - ", chinese: "法子"}, 
{english: "kěpà frightening; dreadful - ", chinese: "可怕"}, 
{english: "shúxī familiar - ", chinese: "熟悉"}, 
{english: "bān class - ", chinese: "班"}, 
{english: "tóngxué classmate; schoolmate - ", chinese: "同学"}, 
{english: "hāi hey - ", chinese: "嗨"}, 
{english: "kǒngzǐ （ qiū ） Confucius - ", chinese: "孔子（丘）"}
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