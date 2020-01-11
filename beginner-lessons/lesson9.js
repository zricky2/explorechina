let les = [
    {english: "zhōngyào; Chinese medicine" ,chinese: "中药"},
    {english: "dé; to get, to obtain" ,chinese: "得"},
    {english: "bìng; disease" ,chinese: "病"},
    {english: "děi; to have to, must" ,chinese: "得"},
    {english: "xīyào; Western medicine" ,chinese: "西药"},
    {english: "kànshàngqù; to seem" ,chinese: "看上去"},
    {english: "cǎogēn; grass roots" ,chinese: "草根"},
    {english: "shùyè; leaf" ,chinese: "树叶"},
    {english: "shuǐguǒ; fruit" ,chinese: "水果"},
    {english: "pí; skin" ,chinese: "皮"},
    {english: "ya; soft tone marker" ,chinese: "呀"},
    {english: "chóngzi; insect" ,chinese: "虫子"},
    {english: "yàoshì; if" ,chinese: "要是"},
    {english: "yěxǔ; maybe" ,chinese: "也许"},
    {english: "zhìbìng; to treat a disease" ,chinese: "治病"},
    {english: "shì; to try" ,chinese: "试"},
    {english: "qiú; to beg, to pray" ,chinese: "求"},
    {english: "bǎoyòu; to bless, to protect (by God)" ,chinese: "保佑"},
    {english: "chàbuduō; about, almost" ,chinese: "差不多"},
    {english: "yàoburán; otherwise" ,chinese: "要不然"},
    {english: "děng; to wait" ,chinese: "等"},
    {english: "jiāng; ginger" ,chinese: "姜"},
    {english: "shǒuxiān...hòulái; first...then" ,chinese: "首先。。。后来"},
    {english: "jiāo; to teach" ,chinese: "教"},
    {english: "zhòngdì; to farm" ,chinese: "种地"},
    {english: "qīnzì; personally" ,chinese: "亲自"},
    {english: "cháng; to taste, to try (food)" ,chinese: "尝"},
    {english: "dú; poison" ,chinese: "毒"},
    {english: "tù; to vomit" ,chinese: "吐"},
    {english: "xiè(dùzi); to have diarrhea" ,chinese: "泻（肚子）"},
    {english: "chayìdiǎn; almost" ,chinese: "差一点"},
    {english: "dàjiā; everyone" ,chinese: "大家"},
    {english: "jiànkāng; health, healthy" ,chinese: "健康"},
    {english: "wēixiǎn; danger, dangerous" ,chinese: "危险"},
    {english: "xǔduō; many" ,chinese: "许多"},
    {english: "pǔtōngrén; ordinary people" ,chinese: "普通人"},
    {english: "gǎnxiè; to thank" ,chinese: "感谢"},
    {english: "huó; to live" ,chinese: "活"},
    {english: "suì; years (of age)" ,chinese: "岁"},
    {english: "jìxiàlái; to record" ,chinese: "记下来"},
    {english: "nánchī; bad-tasting" ,chinese: "难吃"},
    {english: "wèidao; taste" ,chinese: "味道"},
    {english: "yǒuxiào; effective" ,chinese: "有效"},
    {english: "zhǒng; kind, type" ,chinese: "种"},
    {english: "guǒpí; fruit skin" ,chinese: "果皮"},
    {english: "xiǎokàn; too look down upon" ,chinese: "小看"},
    {english: "yīshēng; doctor" ,chinese: "医生"},
    {english: "gāng; moment ago, just" ,chinese: "刚"},
    {english: "shénnóng; Chinese agriculture god" ,chinese: "神农"},
    {english: "sūn sīmiǎo; famous Chinese herbalist" ,chinese: "孙思邈"},
    {english: "lǐ shízhēn; famous Chinese herbalist" ,chinese: "李时珍"}
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