var les1 =
    [
    { chinese : "中国", english : "zhōng guó - China"},
    { chinese : "人", english : "rén - person" },
    { chinese : "的", english : "de" },
    { chinese: "姓名", english : " xìng míng - full name" },
    { chinese: "前面", english : " (qiánmian) fore; front" },
    { chinese: "后面", english : " hòu miàn - behind" },
    { chinese: "是", english : " to be" },
    { chinese: "很多", english : " hěn duō-many" },
    { chinese: "常用", english : " chángyòng - in common usage" },
    { chinese: "有", english : " yǒu - to have, there is/are" },
    { chinese: "百", english : " bǎi - hundred" },
    { chinese: "个", english : " gè - measure word" },
    { chinese: "都", english : " dōu - Both; all" },
    { chinese: "来源", english : " source; originate (láiyuán, 來源)" },
    { chinese: "比方说", english : " bǐfāngshuō - for instance" },
    { chinese: "以前", english : " yǐ qián - before" },
    { chinese: "地名", english : " name of place" },
    { chinese: "动物", english : " dòng wù - animal" },
    { chinese: "名字", english : " míng zi - name " },
    { chinese: "一定", english : " yídìng － certainly; surely" },
    { chinese: "意思", english : " yìsi - meaning " },
    { chinese: "有的", english : " (yǒude) some" },
    { chinese: "父母", english : " fùmǔ - father and mother；parents" },
    { chinese: "希望", english : " xī wàng - to hope, wish " },
    { chinese: "男", english : " (nán) male" },
    { chinese: "女", english : " (nǚ) female" },
    { chinese: "孩（子）", english : " child, children" },
    { chinese: "叫", english : " jiào - to be called, to call" },
    { chinese: "出生", english : " chū shēng - to be born" },
    { chinese: "地方", english : " dì fang - place" },
    { chinese: "北京", english : " běi jīng - Beijing" },
    { chinese: "可能", english : " kě néng - possible, maybe" },
    { chinese: "美国", english : " Měiguó - America" },
    { chinese: "也", english : " yě - also, too" },
    { chinese: "时间", english : " shí jiān - time" },
    { chinese: "您", english : " (nín) You (polite, as opposed to informal 你 nǐ)" },
    { chinese: "好", english : " (hǎo) good" },
    { chinese: "请", english : " (qǐng) please" },
    { chinese: "问", english : " wèn - to ask" },
    { chinese: "贵", english : " guì - expensive" },
    { chinese: "我", english : " wǒ - I, me" },
    { chinese: "先生", english : " (xiānsheng) Mr.; husband; teacher" },
    { chinese: "小姐", english : " Miss (xiǎojiě)" },
    { chinese: "什么", english : " (shénme) what" },
    { chinese: "上海", english : " Shànghǎi - Shanghai" },
    { chinese: "这", english : " zhè - this" },
    { chinese: "太太", english : " taì tai married woman; Mrs.; Madam; wife; CL:個|个[gè],位[wèi]" },
    { chinese: "高兴", english : "gāoxìng - happy" },
    { chinese: "认识", english : "rèn shi - understanding, to know, to recognise" },
    { chinese: "你", english : "nǐ - you (singular)" },
    { chinese: "不", english : "bù - no, not" },
    { chinese: "那", english : "nà - that" },
    { chinese : "位", english : "wèi - polite measure word for people" }
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



