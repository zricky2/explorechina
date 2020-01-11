let les = [
    {english: "zhúzi bamboo", chinese: "竹子"}, 
    {english: "lǜ green", chinese: "绿"}, 
    {english: "shēngmìnglì vitality", chinese: "生命力"}, 
    {english: "qiáng strong", chinese: "强"}, 
    {english: "xìxīn careful, attentive", chinese: "细心"}, 
    {english: "shēngzhǎng to grow/grow up", chinese: "生长"}, 
    {english: "shíjìshàng in fact; in reality; actually", chinese: "实际上"}, 
    {english: "jiānqiáng strong; firm", chinese: "坚强"}, 
    {english: "chuī to blow", chinese: "吹"}, 
    {english: "wān curved; to bend", chinese: "弯"}, 
    {english: "duàn break", chinese: "断"}, 
    {english: "zànměi to admire; to praise", chinese: "赞美"}, 
    {english: "wánqiáng indomitable; staunch", chinese: "顽强"}, 
    {english: "qiānxū modest", chinese: "谦虚"}, 
    {english: "zhèng exactly", chinese: "正"}, 
    {english: "pǐngé character and morals", chinese: "品格"}, 
    {english: "zhījié branches; minor matters", chinese: "枝节"}, 
    {english: "kōng empty; for nothing; in vain", chinese: "空"}, 
    {english: "yōuxiù excellent; distinguished", chinese: "优秀"}, 
    {english: "gài to cover", chinese: "盖"}, 
    {english: "jiājù furniture", chinese: "家具"}, 
    {english: "zào to make; to create", chinese: "造"}, 
    {english: "yuèqì musical instrument", chinese: "乐器"}, 
    {english: "sǔn bamboo shoot", chinese: "笋"}, 
    {english: "shíwù food", chinese: "食物"}, 
    {english: "dúshūrén scholar; intellectual", chinese: "读书人"}, 
    {english: "huàjiā painter; artist", chinese: "画家"}, 
    {english: "gēsòng to sing the praises of; to extol", chinese: "歌颂"}, 
    {english: "Sūdōngpō famous poet and writer in Song dynasty", chinese: "苏东坡"}, 
    {english: "xīnqíng mood; frame of mind", chinese: "心情"}, 
    {english: "yìyì meaning", chinese: "意义"}, 
    {english: "yīng eagle", chinese: "鹰"}, 
    {english: "yóupiào stamp", chinese: "邮票"}, 
    {english: "tǐxiàn to embody; to reflect", chinese: "体现"}, 
    {english: "sōngshù pine tree", chinese: "松树"}, 
    {english: "qiángzhuàng strong; sturdy", chinese: "强壮"}, 
    {english: "chángshòu longevity", chinese: "长寿"}, 
    {english: "yù jade", chinese: "玉"}, 
    {english: "chúnjié pure; chaste", chinese: "纯洁"}, 
    {english: "jīchǔ foundation; base", chinese: "基础"}
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