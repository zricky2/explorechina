let les = [
    {english: "yǐnliào drink; beverages", chinese: "饮料"}, 
    {english: "gùxiāng hometwon; native place", chinese: "故乡"}, 
    {english: "yōujiǔ long-standing; age- old", chinese: "悠久"}, 
    {english: "rìcháng shēnghuó daily life, everyday life", chinese: "日常生活"}, 
    {english: "bùfèn part", chinese: "部分"}, 
    {english: "chái fireword", chinese: "柴"}, 
    {english: "yóu cooking oil", chinese: "油"}, 
    {english: "yán salt", chinese: "盐"}, 
    {english: "jiàng cooking sauce", chinese: "酱"}, 
    {english: "yuǎngǔ remote antiquity", chinese: "远古"}, 
    {english: "cháyè tea; tea leaves", chinese: "茶叶"}, 
    {english: "jiànjiàn gradually", chinese: "渐渐"}, 
    {english: "yǐn chá drink tea", chinese: "饮茶"}, 
    {english: "xìnyǎng belief", chinese: "信仰"}, 
    {english: "fójiào Buddhism", chinese: "佛教"}, 
    {english: "yǒuguānxi related", chinese: "有关系"}, 
    {english: "xiū háng/xíng/xìng practice Buddhism or Taoism", chinese: "修行"}, 
    {english: "niànjīng recite/ chant scriptures", chinese: "念经"}, 
    {english: "dǎzuò meditate", chinese: "打坐"}, 
    {english: "miào temple", chinese: "庙"}, 
    {english: "sīkǎo to think; thought", chinese: "思考"}, 
    {english: "xiāohuà digest; digestion", chinese: "消化"}, 
    {english: "huānyíng welcome", chinese: "欢迎"}, 
    {english: "biānqū border area", chinese: "边区"}, 
    {english: "shǎoshùmínzú ethnic minority", chinese: "少数民族"}, 
    {english: "suízhe follwing; accompanying ; along with", chinese: "随着"}, 
    {english: "shènzhì even", chinese: "甚至"}, 
    {english: "qítā other", chinese: "其他"}, 
    {english: "jiāoliú to exchange; an exchange", chinese: "交流"}, 
    {english: "chuánbō to spread, to disseminate", chinese: "传播"}, 
    {english: "rú like; as", chinese: "如"}, 
    {english: "yǐjí and", chinese: "以及"}, 
    {english: "chá dào tea ceremony", chinese: "茶道"}, 
    {english: "chūchǎn to produce; manufacture", chinese: "出产"}, 
    {english: "gāojí - high level; senior", chinese: "高级"}, 
    {english: "jīn zì - gold", chinese: "金子"}, 
    {english: "dàzhì- roughly ; approximately", chinese: "大致"}, 
    {english: "lǜchá green tea", chinese: "绿茶"}, 
    {english: "hóngchá black tea", chinese: "红茶"}, 
    {english: "huāchá scented tea", chinese: "花茶"}, 
    {english: "wūlóngchá Oolong tea", chinese: "乌龙茶"}, 
    {english: "běnshēn oneself; itself", chinese: "本身"}, 
    {english: "zhìliàng quality", chinese: "质量"}, 
    {english: "yòngjù tool; applicance; implement", chinese: "用具"}, 
    {english: "mén measure tool for subject/ field", chinese: "门"}, 
    {english: "jìng chá serve tea respectfully", chinese: "敬茶"}, 
    {english: "dāi/dài kè treat guest; entertain guest", chinese: "待客"}, 
    {english: "fāngshì way; fashion", chinese: "方式"}, 
    {english: "dìqū district; area", chinese: "地区"}, 
    {english: "diǎnxin snack; refreshment", chinese: "点心"}, 
    {english: "chá diǎn tea + pastries; refinement", chinese: "茶点"}, 
    {english: "zǎo chá breakfast tea", chinese: "早茶"}, 
    {english: "zhùmíng famous; well known", chinese: "著名"}, 
    {english: "guǎngdōng Canton", chinese: "广东"}, 
    {english: "chuàngzào create/ produce", chinese: "创造"}, 
    {english: "yǔ/yú/yù and; with", chinese: "与"}, 
    {english: "niúnǎi cow's milk", chinese: "牛奶"}, 
    {english: "bào newspaper", chinese: "报"}, 
    {english: "xiāngwèi r/ér sweet smell; fragrance", chinese: "香味儿"}, 
    {english: "kòngr free time", chinese: "空儿"}, 
    {english: "kāfēi coffee", chinese: "咖啡"}, 
    {english: "guǒzhī juice", chinese: "果汁"}, 
    {english: "jīhū almost", chinese: "几乎"}, 
    {english: "kěkǒukělè Coca-Cola", chinese: "可口可乐"}, 
    {english: "rénkǒu population", chinese: "人口"}
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