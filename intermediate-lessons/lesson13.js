let les = [
    {english: "hónglóu red mansion", chinese: "红楼"}, 
    {english: "mèng dream", chinese: "梦"}, 
    {english: "gū'niang girl", chinese: "姑娘"}, 
    {english: "téng'ài to love; to adore", chinese: "疼爱"}, 
    {english: "qùshì to pass away; to die", chinese: "去世"}, 
    {english: "shāngxìn very sad; heartbroken", chinese: "伤心"}, 
    {english: "ruò weak", chinese: "弱"}, 
    {english: "wàipó maternal grandmother", chinese: "外婆"}, 
    {english: "jiē to pick up; to take someone to a place", chinese: "接"}, 
    {english: "jiùjiu maternal uncle", chinese: "舅舅"}, 
    {english: "dāng to undertake", chinese: "当"}, 
    {english: "guān official", chinese: "官"}, 
    {english: "héqi friendly", chinese: "和气"}, 
    {english: "kěài lovely; cute; adorable", chinese: "可爱"}, 
    {english: "dúshū to read; to study", chinese: "读书"}, 
    {english: "gǔshū ancient books, classics", chinese: "古书"}, 
    {english: "cānjiā to participate; to take part in", chinese: "参加"}, 
    {english: "kǎoshì to take an exam; test", chinese: "考试"}, 
    {english: "gèng even; more", chinese: "更"}, 
    {english: "shǐ to cause; to make", chinese: "使"}, 
    {english: "mà to scold", chinese: "骂"}, 
    {english: "bèi to recite", chinese: "背"}, 
    {english: "ràng to let; to allow", chinese: "让"}, 
    {english: "lìhai severe", chinese: "厉害"}, 
    {english: "sònggèi to give to", chinese: "送给"}, 
    {english: "quàn to exhort; to advise", chinese: "劝"}, 
    {english: "chǎng occurrence (of sickness, etc.)", chinese: "场"}, 
    {english: "chà bad", chinese: "差"}, 
    {english: "xīnfáng wedding chamber", chinese: "新房"}, 
    {english: "huānlè cheerful; happy", chinese: "欢乐"}, 
    {english: "shāo to burn", chinese: "烧"}, 
    {english: "qiāoqiāo quietly", chinese: "悄悄"}, 
    {english: "xìngfú happy", chinese: "幸福"}, 
    {english: "xiǎngniàn to miss", chinese: "想念"}, 
    {english: "líkāi to leave", chinese: "离开"}, 
    {english: "chūjiā to become a monk/nun", chinese: "出家"}, 
    {english: "héshang monk", chinese: "和尚"}, 
    {english: "huāyuán garden", chinese: "花园"}, 
    {english: "zhuānxīn focused; single-minded", chinese: "专心"}, 
    {english: "luò to fall; to drop", chinese: "落"}, 
    {english: "chuī to blow", chinese: "吹"}, 
    {english: "jiéjìng clean", chinese: "洁净"}, 
    {english: "kěxī unfortunate; it's a pity", chinese: "可惜"}, 
    {english: "āi hey", chinese: "哎"}, 
    {english: "xiǎoxīn careful", chinese: "小心"}, 
    {english: "cǎi to step on; to trample", chinese: "踩"}, 
    {english: "yǒuxīn caring; thoughtful", chinese: "有心"}, 
    {english: "nòng to make; to get", chinese: "弄"}, 
    {english: "zāng dirty", chinese: "脏"}, 
    {english: "xiū to build; to repair", chinese: "修"}, 
    {english: "zuò measure for builings, tombs, etc.", chinese: "座"}, 
    {english: "fén grave; tomb", chinese: "坟"}, 
    {english: "sǎo to sweep", chinese: "扫"}, 
    {english: "zhuāng to put in (a bag, a bottle, etc.)", chinese: "装"}, 
    {english: "dàizi bag", chinese: "袋子"}, 
    {english: "mái to bury", chinese: "埋"}, 
    {english: "huà to change into; to convert", chinese: "化"}, 
    {english: "tǔ dirt; earth", chinese: "土"}, 
    {english: "gāoguì noble", chinese: "高贵"}, 
    {english: "shēngmìng life", chinese: "生命"}, 
    {english: "chóu distress; worried", chinese: "愁"}, 
    {english: "tǐng quite", chinese: "挺"}, 
    {english: "píqi temperament", chinese: "脾气"}, 
    {english: "nándào could it be that? (rhetorical)", chinese: "难道"}, 
    {english: "tándelái to get along well", chinese: "谈得来"}, 
    {english: "xíng all right; okay", chinese: "行"}, 
    {english: "duànliàn to exercise", chinese: "锻炼"}

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