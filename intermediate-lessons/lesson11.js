let les = [
{english: "Any of the twelve animals used to symbolize the year in which a person is born (shēngxiào)" ,chinese: "生肖"},
{english: "Shǔxiàng" ,chinese: "属相"},
{english: "To record; to remember (jì)" ,chinese: "记"},
{english: "to include (Bāokuò)" ,chinese: "包括"},
{english: "passive marker (bèi)" ,chinese: "被"},
{english: "Order;sequence (shùnxù)" ,chinese: "顺序"},
{english: "Respectively; separately (Fēnbié)" ,chinese: "分别"},
{english: "mouse; rat (lǎoshǔ）" ,chinese: "老鼠"},
{english: "tiger （lǎohǔ）" ,chinese: "老虎"},
{english: "hare; rabbit （tù zi）" ,chinese: "兔子"},
{english: "dragon （lóng）" ,chinese: "龙"},
{english: "sheep （yáng）" ,chinese: "羊"},
{english: "monkey （hóuzi）" ,chinese: "猴子"},
{english: "chicken （jī）" ,chinese: "鸡"},
{english: "Dog （gǒu）" ,chinese: "狗"},
{english: "pig; hog; swine （zhū）" ,chinese: "猪"},
{english: "to list; to line up （pái）" ,chinese: "排"},
{english: "to be born in the year of (one of the twelve animals) （shǔ）" ,chinese: "属"},
{english: "for example （bǐrúshuō）" ,chinese: "比如说"},
{english: "to select; to choose （xuǎn）" ,chinese: "选"},
{english: "common, ordinary （pǔtōng）" ,chinese: "普通"},
{english: "cat （māo）" ,chinese: "猫"},
{english: "to answer; to reply; answer; reply （huídá）" ,chinese: "回答"},
{english: "however; but （búguò）" ,chinese: "不过"},
{english: "among the people; folk （mínjiān）" ,chinese: "民间"},
{english: "to remember; to bear in mind （jìzhù）" ,chinese: "记住"},
{english: "to suggest; suggestion （jiànyì）" ,chinese: "建议"},
{english: "to name (something) （mìngmíng）" ,chinese: "命名"},
{english: "day; date （rìzi）" ,chinese: "日子"},
{english: "all (as a modifier only) （suǒyǒu）" ,chinese: "所有"},
{english: "to assign; to appoint （zhǐdìng）" ,chinese: "指定"},
{english: "to enter one's name; to sign up （bàomíng）" ,chinese: "报名"},
{english: "next door （gébì）" ,chinese: "隔壁"},
{english: "neighbor （línjū）" ,chinese: "邻居"},
{english: "to make an appointment; to arrange （yuē）" ,chinese: "约"},
{english: "the other side; the other party （duìfāng）" ,chinese: "对方"},
{english: "bright; shiny （liàng）" ,chinese: "亮"},
{english: "to jump; to leap （tiào）" ,chinese: "跳"},
{english: "to represent; representative （dàibiǎo）" ,chinese: "代表"},
{english: "power; authority （quánlì）" ,chinese: "权力"},
{english: "except(for); besides （chúl。。。yǐwài）" ,chinese: "除了。。。以外"},
{english: "to think; to consider （rènwéi）" ,chinese: "认为"},
{english: "if...then; in case （rúguǒ。。。jiù）" ,chinese: "如果。。。就"},
{english: "to name; name （qǐmíngzi）" ,chinese: "起名字"},
{english: "television （diànshì）" ,chinese: "电视"},
{english: "hello;hey （wéi/wèi）" ,chinese: "喂"},
{english: "to remember （jìde）" ,chinese: "记得"},
{english: "to give (as a present) (sòng）" ,chinese: "送"},
{english: "T-shirt （tīxùshān）" ,chinese: "T恤衫"}
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