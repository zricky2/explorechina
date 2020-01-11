let les = [
{english: "qìhhòu; climate, weather" ,chinese: "气候"},
{english: "yǐnshí; food and drink, diet" ,chinese: "饮食"},
{english: "xíguàn; custom, habit, to become accustomed to" ,chinese: "习惯"},
{english: "zhǔshí; staple food" ,chinese: "主食"},
{english: "wēnhé; mild" ,chinese: "温和"},
{english: "jì; season of the year" ,chinese: "季"},
{english: "xīnxiān; fresh, new" ,chinese: "新鲜"},
{english: "pǐnzhǒng;; breed variety" ,chinese: "屏种"},
{english: "zhǔ yào; main, major" ,chinese: "主要"},
{english: "děng; etc." ,chinese: "等"},
{english: "bǐ jiāo; relatively, to compare" ,chinese: "比较"},
{english: "gè; each, every" ,chinese: "各"},
{english: "tè diàn; characteristic, distinguishing feature" ,chinese: "特点"},
{english: "zǒngdeláishuō; generally speaking" ,chinese: "总的来说"},
{english: "tián; sweet" ,chinese: "甜"},
{english: "xián; salty" ,chinese: "咸"},
{english: "là; spicy" ,chinese: "辣"},
{english: "huòzhě; either/or" ,chinese: "或者"},
{english: "suān; sour" ,chinese: "酸"},
{english: "jiǎngjiu; to be particular about, to strive for" ,chinese: "讲究"},
{english: "qiē; to cut" ,chinese: "切"},
{english: "xíngzhuàng; shape, form" ,chinese: "形状"},
{english: "fāngfǎ; method, way, means" ,chinese: "方法"},
{english: "zhòngyào; important" ,chinese: "重要"},
{english: "qǐngkè; to entertain guest" ,chinese: "请客"},
{english: "búdàn..érqiě; not only, but also" ,chinese: "不但。。。而且"},
{english: "zhǔnbèi; to prepare" ,chinese: "准备"},
{english: "bùguǎn...dōu; no matter, regardless of" ,chinese: "不管。。。都"},
{english: "wén; to smell" ,chinese: "闻"},
{english: "mínzú; ethnic group" ,chinese: "民族"},
{english: "suīrán...dànshi; although, though" ,chinese: "虽然。。。但是"},
{english: "kuàizi; chopsticks" ,chinese: "筷子"},
{english: "zhòngshì; to pay attention to, to take something seriously" ,chinese: "重视"},
{english: "zuòwèi; seat, place" ,chinese: "座位"},
{english: "jiàozuò; to be called, to be known as" ,chinese: "叫做"},
{english: "shàngzuò; the seat for the guest of honor" ,chinese: "上座"},
{english: "ànzhào; according to" ,chinese: "按照"},
{english: "chuántǒng; tradition" ,chinese: "传统"},
{english: "zhǔrén; host" ,chinese: "主人"},
{english: "ràng; to give away, to yeild" ,chinese: "让"},
{english: "kèrén; guest" ,chinese: "客人"},
{english: "búdàn...yě; not only...but also" ,chinese: "不但。。。也"},
{english: "fànguǎn; restaurant" ,chinese: "饭馆"},
{english: "rénmín; the people" ,chinese: "人民"},
{english: "měiwèi; delicious food" ,chinese: "美味"},
{english: "bóbo; uncle" ,chinese: "伯伯"},
{english: "chúshī; cook, chef" ,chinese: "厨师"},
{english: "kòng; free time" ,chinese: "空"},
{english: "liáo; to chat" ,chinese: "聊"},
{english: "xīnqī; week" ,chinese: "星期"},
{english: "lǐwù; gift" ,chinese: "礼物"}
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