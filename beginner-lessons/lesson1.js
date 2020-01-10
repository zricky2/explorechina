//import  generateTable  from '.generateTable';
var les =
    [
        {english: "zhōng guó - China" ,chinese: "中国"},
        {english: "rén - person" ,chinese: "人"},
        {english: "de" ,chinese: "的"},
        {english: "xìng míng - full name" ,chinese: "姓名"},
        {english: "(qiánmian) fore; front" ,chinese: "前面"},
        {english: "hòu miàn - behind" ,chinese: "后面"},
        {english: "to be" ,chinese: "是"},
        {english: "hěn duō-many" ,chinese: "很多"},
        {english: "chángyòng - in common usage" ,chinese: "常用"},
        {english: "yǒu - to have, there is/are" ,chinese: "有"},
        {english: "bǎi - hundred" ,chinese: "百"},
        {english: "gè - measure word" ,chinese: "个"},
        {english: "dōu - Both; all" ,chinese: "都"},
        {english: "source; originate (láiyuán, 來源)" ,chinese: "来源"},
        {english: "bǐfāngshuō - for instance" ,chinese: "比方说"},
        {english: "yǐ qián - before" ,chinese: "以前"},
        {english: "name of place" ,chinese: "地名"},
        {english: "dòng wù - animal" ,chinese: "动物"},
        {english: "míng zi - name" ,chinese: "名字"},
        {english: "yídìng － certainly; surely" ,chinese: "一定"},
        {english: "yìsi - meaning" ,chinese: "意思"},
        {english: "(yǒude) some" ,chinese: "有的"},
        {english: "fùmǔ - father and mother；parents" ,chinese: "父母"},
        {english: "xī wàng - to hope, wish" ,chinese: "希望"},
        {english: "(nán) male" ,chinese: "男"},
        {english: "(nǚ) female" ,chinese: "女"},
        {english: "child, children" ,chinese: "孩（子）"},
        {english: "jiào - to be called, to call" ,chinese: "叫"},
        {english: "chū shēng - to be born" ,chinese: "出生"},
        {english: "dì fang - place" ,chinese: "地方"},
        {english: "běi jīng - Beijing" ,chinese: "北京"},
        {english: "kě néng - possible, maybe" ,chinese: "可能"},
        {english: "Měiguó - America" ,chinese: "美国"},
        {english: "yě - also, too" ,chinese: "也"},
        {english: "shí jiān - time" ,chinese: "时间"},
        {english: "(nín) You (polite, as opposed to informal 你 nǐ)" ,chinese: "您"},
        {english: "(hǎo) good" ,chinese: "好"},
        {english: "(qǐng) please" ,chinese: "请"},
        {english: "wèn - to ask" ,chinese: "问"},
        {english: "guì - expensive" ,chinese: "贵"},
        {english: "wǒ - I, me" ,chinese: "我"},
        {english: "(xiānsheng) Mr.; husband; teacher" ,chinese: "先生"},
        {english: "Miss (xiǎojiě)" ,chinese: "小姐"},
        {english: "(shénme) what" ,chinese: "什么"},
        {english: "Shànghǎi - Shanghai" ,chinese: "上海"},
        {english: "zhè - this" ,chinese: "这"},
        {english: "taì tai married woman; Mrs.; Madam; wife; CL:個|个[gè],位[wèi]" ,chinese: "太太"},
        {english: "gāoxìng - happy" ,chinese: "高兴"},
        {english: "rèn shi - understanding, to know, to recognise" ,chinese: "认识"},
        {english: "nǐ - you (singular)" ,chinese: "你"},
        {english: "bù - no, not" ,chinese: "不"},
        {english: "nà - that" ,chinese: "那"},
        {english: "wèi - polite measure word for people" ,chinese: "位"}
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