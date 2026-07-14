
function getListeningDetailAssetConfig() {
  return window.HUAMEI_ASSET_CONFIG && typeof window.HUAMEI_ASSET_CONFIG === "object"
    ? window.HUAMEI_ASSET_CONFIG
    : {};
}

function resolveListeningDetailAudio(path = "") {
  const value = String(path || "").trim();
  if (!value || /^(?:https?:)?\/\//i.test(value) || /^(?:data:|blob:)/i.test(value)) return value;
  const config = getListeningDetailAssetConfig();
  const audioBase = String(config.audioBaseUrl || "").trim().replace(/\/+$/, "");
  if (audioBase) return `${audioBase}/${value.replace(/^\/+/, "").replace(/^audio\//, "")}`;
  const assetBase = String(config.assetBaseUrl || "").trim().replace(/\/+$/, "");
  if (assetBase) return `${assetBase}/${value.replace(/^\/+/, "")}`;
  return value;
}

function sub(id, start, end, zh, pinyin, vi) {
  return { id, start, end, zh, pinyin, vi };
}
function vocab(hanzi, pinyin, vi, posVi, posZh, examples = []) {
  return {
    hanzi,
    pinyin,
    vi,
    posVi,
    posZh,
    audioNormal: "",
    audioSlow: "",
    examples,
  };
}



const listeningContentMap = {
  "dialogue-so-cap-topic-1": {
    id: "dialogue-so-cap-topic-1",
    vi: "Nội dung 1",
    zh: "内容 1",
    titleVi: "Một chiếc quần mới mềm mại",
    titleZh: "一条柔软的新裤子",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-1/daily-005-main.mp3"),
    audioSlow: "",
    duration: 97,
    subtitles: [
      sub("s1", 0.0, 5.269, "今天的主题是：一条柔软的新裤子。", "jīn tiān de zhǔ tí shì：yī tiáo róu ruǎn de xīn kù zi。", "Chủ đề hôm nay là: Một chiếc quần mới mềm mại."),
      sub("s2", 5.269, 10.329, "你好，欢迎回到我的慢速中文播客。", "nǐ hǎo，huān yíng huí dào wǒ de màn sù zhōng wén bō kè。", "Xin chào, chào mừng bạn quay lại với podcast tiếng Trung chậm của tôi."),
      sub("s3", 10.329, 15.697, "今天我想和大家聊聊我新买的几条裤子。", "jīn tiān wǒ xiǎng hé dà jiā liáo liáo wǒ xīn mǎi de jǐ tiáo kù zi。", "Hôm nay tôi muốn nói với mọi người về vài chiếc quần tôi mới mua."),
      sub("s4", 15.697, 20.741, "它们摸起来格外柔软，穿在身上也非常舒服。", "tā men mō qǐ lái gé wài róu ruǎn，chuān zài shēn shàng yě fēi cháng shū fú。", "Chúng sờ vào rất mềm, mặc lên người cũng vô cùng thoải mái."),
      sub("s5", 20.741, 26.927, "我是在商场购入的，在一家名叫 Oishow 的门店。", "wǒ shì zài shāng chǎng gòu rù de，zài yī jiā míng jiào Oishow de mén diàn。", "Tôi mua chúng ở trung tâm thương mại, tại một cửa hàng tên là Oishow."),
      sub("s6", 26.927, 33.01, "其实我一直很喜欢 Eichel 这个品牌的服饰。", "qí shí wǒ yì zhí hěn xǐ huān Eichel zhè ge pǐn pái de fú shì。", "Thực ra tôi vẫn luôn thích trang phục của thương hiệu Eichel."),
      sub("s7", 33.01, 41.321, "对我而言，这个牌子的衣服价格着实不便宜，但我觉得一切都物有所值。", "duì wǒ ér yán，zhè ge pái zi de yī fú jià gé zhe shí bù biàn yí，dàn wǒ jué de yī qiè dōu wù yǒu suǒ zhí。", "Với tôi, quần áo của thương hiệu này thật sự không rẻ, nhưng tôi thấy rất xứng đáng."),
      sub("s8", 41.321, 50.166, "因为他家的衣服手感柔软、弹力十足，穿起来不会有紧绷感。", "yīn wèi tā jiā de yī fú shǒu gǎn róu ruǎn、tán lì shí zú，chuān qǐ lái bú huì yǒu jǐn bēng gǎn。", "Vì quần áo của hãng này có cảm giác mềm mại, độ co giãn tốt, mặc vào không bị bó chặt."),
      sub("s9", 50.166, 59.883, "尤其是这条裤子，面料飘逸垂顺，版型宽松自然，用来练瑜伽再合适不过。", "yóu qí shì zhè tiáo kù zi，miàn liào piāo yì chuí shùn，bǎn xíng kuān sōng zì rán，yòng lái liàn yú jiā zài hé shì bù guò。", "Đặc biệt là chiếc quần này, chất vải mềm rủ và rơi đẹp, phom rộng tự nhiên, dùng để tập yoga thì rất hợp."),
      sub("s10", 59.883, 67.345, "而且我觉得它不只适合运动，也可以搭配出不同的风格。", "ér qiě wǒ jué de tā bù zhǐ shì hé yùn dòng，yě kě yǐ dā pèi chū bù tóng de fēng gé。", "Hơn nữa, tôi nghĩ nó không chỉ hợp để vận động, mà còn có thể phối thành nhiều phong cách khác nhau."),
      sub("s11", 67.345, 79.453, "比如配一件衬衫，就会显得比较精致、正式；如果搭配简单的 T 恤，又可以变成简约随性的日常造型。", "bǐ rú pèi yī jiàn chèn shān，jiù huì xiǎn de bǐ jiào jīng zhì、zhèng shì；rú guǒ dā pèi jiǎn dān de T xù，yòu kě yǐ biàn chéng jiǎn yuē suí xìng de rì cháng zào xíng。", "Ví dụ, nếu phối với áo sơ mi thì trông tinh tế và trang trọng hơn; nếu phối với áo thun đơn giản thì lại thành một kiểu mặc hàng ngày tối giản và thoải mái."),
      sub("s12", 79.453, 84.631, "以后我应该会经常穿这条裤子出门。", "yǐ hòu wǒ yīng gāi huì jīng cháng chuān zhè tiáo kù zi chū mén。", "Sau này có lẽ tôi sẽ thường xuyên mặc chiếc quần này ra ngoài."),
      sub("s13", 84.631, 92.372, "今天的中文内容里，有很多和衣服、购物、搭配有关的表达。", "jīn tiān de zhōng wén nèi róng lǐ，yǒu hěn duō hé yī fú、gòu wù、dā pèi yǒu guān de biǎo dá。", "Trong nội dung tiếng Trung hôm nay có nhiều cách diễn đạt liên quan đến quần áo, mua sắm và phối đồ."),
      sub("s14", 92.372, 97.04, "你可以一边听，一边注意这些高频生词。", "nǐ kě yǐ yī biān tīng，yī biān zhù yì zhè xiē gāo pín shēng cí。", "Bạn có thể vừa nghe vừa chú ý những từ vựng tần suất cao này."),
    ],
    vocabulary: [
      vocab("柔软", "róuruǎn", "mềm mại", "tính từ", "形容词"),
      vocab("购入", "gòurù", "mua vào, mua được", "động từ", "动词"),
      vocab("门店", "méndiàn", "cửa hàng, chi nhánh bán lẻ", "danh từ", "名词"),
      vocab("品牌", "pǐnpái", "thương hiệu", "danh từ", "名词"),
      vocab("服饰", "fúshì", "trang phục, quần áo phụ kiện", "danh từ", "名词"),
      vocab("物有所值", "wù yǒu suǒ zhí", "đáng đồng tiền", "thành ngữ", "成语"),
      vocab("搭配", "dāpèi", "phối đồ, kết hợp", "động từ", "动词"),
    ],
  },

  "dialogue-so-cap-topic-2": {
    id: "dialogue-so-cap-topic-2",
    vi: "Nội dung 2",
    zh: "内容 2",
    titleVi: "Ưu điểm và nhược điểm của làm việc tại nhà",
    titleZh: "居家办公的优点和缺点",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-2/daily-006-main.mp3"),
    audioSlow: "",
    duration: 89,
    subtitles: [
      sub("s1", 0.0, 5.213, "今天的主题是：居家办公的优点和缺点。", "jīn tiān de zhǔ tí shì：jū jiā bàn gōng de yōu diǎn hé quē diǎn。", "Chủ đề hôm nay là: Ưu điểm và nhược điểm của làm việc tại nhà."),
      sub("s2", 5.213, 9.81, "欢迎回到我的慢速中文播客。", "huān yíng huí dào wǒ de màn sù zhōng wén bō kè。", "Chào mừng bạn quay lại với podcast tiếng Trung chậm của tôi."),
      sub("s3", 9.81, 14.115, "今天我们聊聊居家办公。", "jīn tiān wǒ men liáo liáo jū jiā bàn gōng。", "Hôm nay chúng ta cùng nói về việc làm việc tại nhà."),
      sub("s4", 14.115, 20.963, "居家办公，就是坐在家里的书桌前，用电脑完成工作。", "jū jiā bàn gōng，jiù shì zuò zài jiā lǐ de shū zhuō qián，yòng diàn nǎo wán chéng gōng zuò。", "Làm việc tại nhà nghĩa là ngồi trước bàn làm việc ở nhà và dùng máy tính để hoàn thành công việc."),
      sub("s5", 20.963, 25.698, "现在很多人喜欢这种方式，为什么呢？", "xiàn zài hěn duō rén xǐ huān zhè zhǒng fāng shì，wèi shén me ne？", "Hiện nay có rất nhiều người thích cách này, vì sao vậy?"),
      sub("s6", 25.698, 35.601, "因为一整天都可以穿着舒服的衣服，不用早起挤公交，也不用在路上堵车通勤。", "yīn wèi yī zhěng tiān dōu kě yǐ chuān zhe shū fú de yī fú，bù yòng zǎo qǐ jǐ gōng jiāo，yě bù yòng zài lù shàng dǔ chē tōng qín。", "Vì cả ngày có thể mặc quần áo thoải mái, không cần dậy sớm chen xe buýt, cũng không phải kẹt xe trên đường đi làm."),
      sub("s7", 35.601, 43.11, "你可以待在家里，陪着狗狗、猫咪，也可以在休息的时候陪伴孩子。", "nǐ kě yǐ dài zài jiā lǐ，péi zhe gǒu gǒu、māo mī，yě kě yǐ zài xiū xī de shí hòu péi bàn hái zi。", "Bạn có thể ở nhà bên cạnh chó mèo, và cũng có thể chơi với con trong lúc nghỉ ngơi."),
      sub("s8", 43.11, 49.287, "对一些人来说，居家办公可以节省时间，也能提高效率。", "duì yī xiē rén lái shuō，jū jiā bàn gōng kě yǐ jié shěng shí jiān，yě néng tí gāo xiào lǜ。", "Với một số người, làm việc tại nhà giúp tiết kiệm thời gian và nâng cao hiệu suất."),
      sub("s9", 49.287, 53.406, "但它也并不总是轻松。", "dàn tā yě bìng bù zǒng shì qīng sōng。", "Nhưng nó không phải lúc nào cũng nhẹ nhàng."),
      sub("s10", 53.406, 62.577, "有时候，家里太安静，会让人觉得孤单；有时候，家里的事情太多，又容易让人分心。", "yǒu shí hòu，jiā lǐ tài ān jìng，huì ràng rén jué de gū dān；yǒu shí hòu，jiā lǐ de shì qíng tài duō，yòu róng yì ràng rén fēn xīn。", "Đôi khi nhà quá yên tĩnh khiến người ta thấy cô đơn; đôi khi việc nhà quá nhiều lại dễ làm mất tập trung."),
      sub("s11", 62.577, 68.022, "所以居家办公最重要的是自觉和安排。", "suǒ yǐ jū jiā bàn gōng zuì zhòng yào de shì zì jué hé ān pái。", "Vì vậy, điều quan trọng nhất khi làm việc tại nhà là sự tự giác và cách sắp xếp."),
      sub("s12", 68.022, 76.519, "什么时候工作，什么时候休息，什么时候和家人相处，都需要有清楚的边界。", "shén me shí hòu gōng zuò，shén me shí hòu xiū xī，shén me shí hòu hé jiā rén xiāng chǔ，dōu xū yào yǒu qīng chǔ de biān jiè。", "Khi nào làm việc, khi nào nghỉ ngơi, khi nào ở bên gia đình, tất cả đều cần có ranh giới rõ ràng."),
      sub("s13", 76.519, 79.398, "你是居家办公吗？", "nǐ shì jū jiā bàn gōng ma？", "Bạn có đang làm việc tại nhà không?"),
      sub("s14", 79.398, 82.475, "你喜欢这种方式吗？", "nǐ xǐ huān zhè zhǒng fāng shì ma？", "Bạn có thích cách làm việc này không?"),
      sub("s15", 82.475, 88.642, "在你看来，居家办公最大的优点和缺点分别是什么呢？", "zài nǐ kàn lái，jū jiā bàn gōng zuì dà de yōu diǎn hé quē diǎn fēn bié shì shén me ne？", "Theo bạn, ưu điểm và nhược điểm lớn nhất của làm việc tại nhà lần lượt là gì?"),
    ],
    vocabulary: [
      vocab("居家办公", "jūjiā bàngōng", "làm việc tại nhà", "cụm từ", "词组"),
      vocab("书桌", "shūzhuō", "bàn học, bàn làm việc", "danh từ", "名词"),
      vocab("公交", "gōngjiāo", "xe buýt, phương tiện công cộng", "danh từ", "名词"),
      vocab("堵车", "dǔchē", "kẹt xe", "động từ", "动词"),
      vocab("通勤", "tōngqín", "đi làm/đi về hằng ngày", "động từ", "动词"),
      vocab("陪伴", "péibàn", "ở bên, bầu bạn", "động từ", "动词"),
      vocab("效率", "xiàolǜ", "hiệu suất", "danh từ", "名词"),
      vocab("分心", "fēnxīn", "mất tập trung", "động từ", "动词"),
      vocab("边界", "biānjiè", "ranh giới", "danh từ", "名词"),
    ],
  },

  "dialogue-so-cap-topic-3": {
    id: "dialogue-so-cap-topic-3",
    vi: "Nội dung 3",
    zh: "内容 3",
    titleVi: "Thoải mái là chính mình",
    titleZh: "大大方方做自己",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-3/daily-007-main.mp3"),
    audioSlow: "",
    duration: 86,
    subtitles: [
      sub("s1", 0.0, 5.2, "今天的主题是：大大方方做自己。", "jīn tiān de zhǔ tí shì：dà dà fāng fāng zuò zì jǐ。", "Chủ đề hôm nay là: Thoải mái là chính mình."),
      sub("s2", 5.2, 10.053, "一定要让自己胆子大一点，脸皮厚一点。", "yí dìng yào ràng zì jǐ dǎn zi dà yī diǎn，liǎn pí hòu yì diǎn。", "Nhất định hãy để bản thân gan dạ hơn một chút, bớt ngại ngùng hơn một chút."),
      sub("s3", 10.053, 16.118, "别总是害怕得罪人，也别总是替别人考虑太多。", "bié zǒng shì hài pà dé zuì rén，yě bié zǒng shì tì bié rén kǎo lǜ tài duō。", "Đừng lúc nào cũng sợ làm mất lòng người khác, cũng đừng mãi nghĩ quá nhiều cho người khác."),
      sub("s4", 16.118, 23.861, "不想帮的忙，可以礼貌地拒绝；不想买的东西，也可以直接回绝。", "bù xiǎng bāng de máng，kě yǐ lǐ mào dì jù jué；bù xiǎng mǎi de dōng xī，yě kě yǐ zhí jiē huí jué。", "Việc không muốn giúp thì có thể lịch sự từ chối; thứ không muốn mua thì cũng có thể từ chối thẳng."),
      sub("s5", 23.861, 27.635, "千万不要让“不好意思”限制了你。", "qiān wàn bú yào ràng “bù hǎo yì sī” xiàn zhì le nǐ。", "Tuyệt đối đừng để cảm giác ngại ngùng hạn chế bạn."),
      sub("s6", 27.635, 33.876, "你要知道，很多事情其实没有你想象得那么可怕。", "nǐ yào zhī dào，hěn duō shì qíng qí shí méi yǒu nǐ xiǎng xiàng dé nà me kě pà。", "Bạn cần biết rằng rất nhiều việc thật ra không đáng sợ như bạn tưởng."),
      sub("s7", 33.876, 42.537, "你越是唯唯诺诺，别人越容易看轻你；你越是自信大胆，别人反而越容易欣赏你。", "nǐ yuè shì wéi wéi nuò nuò，bié rén yuè róng yì kàn qīng nǐ；nǐ yuè shì zì xìn dà dǎn，bié rén fǎn ér yuè róng yì xīn shǎng nǐ。", "Bạn càng rụt rè nhún nhường, người khác càng dễ xem nhẹ bạn; bạn càng tự tin và mạnh dạn, người khác lại càng dễ đánh giá cao bạn."),
      sub("s8", 42.537, 49.308, "所以，你想做什么就去做，想去哪里就出发。", "suǒ yǐ，nǐ xiǎng zuò shén me jiù qù zuò，xiǎng qù nǎ lǐ jiù chū fā。", "Vậy nên bạn muốn làm gì thì hãy làm, muốn đi đâu thì hãy xuất phát."),
      sub("s9", 49.308, 56.286, "不要一直犹犹豫豫，也不要总是被别人的看法影响自己的节奏。", "bú yào yì zhí yóu yóu yù yù，yě bú yào zǒng shì bèi bié rén de kàn fǎ yǐng xiǎng zì jǐ de jié zòu。", "Đừng mãi do dự, cũng đừng để cách nhìn của người khác ảnh hưởng đến nhịp độ của mình."),
      sub("s10", 56.286, 64.167, "你真正的目的，是让自己变得更强大，而不是一直停在原地反复纠结。", "nǐ zhēn zhèng de mù dì，shì ràng zì jǐ biàn dé gèng qiáng dà，ér bú shì yì zhí tíng zài yuán dì fǎn fù jiū jié。", "Mục đích thật sự của bạn là làm cho mình mạnh mẽ hơn, chứ không phải đứng yên một chỗ và mãi rối rắm."),
      sub("s11", 64.167, 73.746, "人生本来就是一场体验，所以你没必要活得过分敏感，也没必要太在意别人的评价。", "rén shēng běn lái jiù shì yī cháng tǐ yàn，suǒ yǐ nǐ méi bì yào huó dé guò fèn mǐn gǎn，yě méi bì yào tài zài yì bié rén de píng jià。", "Cuộc đời vốn là một trải nghiệm, nên bạn không cần sống quá nhạy cảm, cũng không cần quá để tâm đến đánh giá của người khác."),
      sub("s12", 73.746, 78.319, "放下面子，大大方方地做你自己。", "fàng xià miàn zi，dà dà fāng fāng dì zuò nǐ zì jǐ。", "Hãy bỏ bớt sĩ diện xuống và thoải mái làm chính mình."),
      sub("s13", 78.319, 86.115, "无法重来的一生，请尽可能让自己活得轻松、快乐、勇敢一点。", "wú fǎ zhòng lái de yī shēng，qǐng jǐn kě néng ràng zì jǐ huó dé qīng sōng、kuài lè、yǒng gǎn yì diǎn。", "Cuộc đời không thể bắt đầu lại, nên hãy cố gắng sống nhẹ nhàng, vui vẻ và dũng cảm hơn một chút."),
    ],
    vocabulary: [
      vocab("胆子", "dǎnzi", "sự gan dạ, lòng can đảm", "danh từ", "名词"),
      vocab("脸皮厚", "liǎnpí hòu", "bạo dạn hơn, không quá ngại", "cụm từ", "词组"),
      vocab("得罪", "dézuì", "làm mất lòng, đắc tội", "động từ", "动词"),
      vocab("拒绝", "jùjué", "từ chối", "động từ", "动词"),
      vocab("不好意思", "bù hǎoyìsi", "ngại, ái ngại", "cụm từ", "词组"),
      vocab("自信", "zìxìn", "tự tin", "tính từ", "形容词"),
      vocab("纠结", "jiūjié", "rối rắm, mắc kẹt trong suy nghĩ", "động từ", "动词"),
      vocab("敏感", "mǐngǎn", "nhạy cảm", "tính từ", "形容词"),
      vocab("大大方方", "dàdàfāngfāng", "đàng hoàng, thoải mái, tự nhiên", "tính từ", "形容词"),
    ],
  },

  "dialogue-so-cap-topic-4": {
    id: "dialogue-so-cap-topic-4",
    vi: "Nội dung 4",
    zh: "内容 4",
    titleVi: "Học cách kết thúc những mối quan hệ làm mình hao tổn",
    titleZh: "学会结束内耗的关系",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-4/daily-008-main.mp3"),
    audioSlow: "",
    duration: 83,
    subtitles: [
      sub("s1", 0.0, 5.89, "今天的主题是：学会结束内耗的关系。", "jīn tiān de zhǔ tí shì：xué huì jié shù nèi hào de guān xì。", "Chủ đề hôm nay là: Học cách kết thúc những mối quan hệ làm mình hao tổn."),
      sub("s2", 5.89, 15.747, "要勇敢地结束一段内耗严重的关系，不要一直回头，也不要把自己放在不被尊重的位置。", "yào yǒng gǎn dì jié shù yī duàn nèi hào yán zhòng de guān xì，bú yào yì zhí huí tóu，yě bú yào bǎ zì jǐ fàng zài bù bèi zūn zhòng de wèi zhì。", "Hãy dũng cảm kết thúc một mối quan hệ khiến bạn tiêu hao quá nhiều, đừng mãi quay đầu lại, cũng đừng đặt mình vào vị trí không được tôn trọng."),
      sub("s3", 15.747, 21.12, "你要记住，失去从来都是相互的。", "nǐ yào jì zhù，shī qù cóng lái dōu shì xiāng hù de。", "Bạn hãy nhớ rằng việc mất đi luôn là chuyện của cả hai phía."),
      sub("s4", 21.12, 27.712, "如果对方不怕失去你，那你也不必一直害怕失去对方。", "rú guǒ duì fāng bù pà shī qù nǐ，nà nǐ yě bù bì yì zhí hài pà shī qù duì fāng。", "Nếu đối phương không sợ mất bạn, thì bạn cũng không cần mãi sợ mất họ."),
      sub("s5", 27.712, 37.59, "所以，面对让你消耗太多的人和事，一定要做到当断则断，也要培养自己翻篇的能力。", "suǒ yǐ，miàn duì ràng nǐ xiāo hào tài duō de rén hé shì，yí dìng yào zuò dào dāng duàn zé duàn，yě yào péi yǎng zì jǐ fān piān de néng lì。", "Vậy nên trước những người và việc làm bạn kiệt sức, cần cắt đứt thì hãy cắt đứt, đồng thời rèn cho mình khả năng bước sang trang mới."),
      sub("s6", 37.59, 50.661, "无论是遇见了辜负你的伴侣，还是交到了虚伪的朋友，你都可以大大方方地承认这段经历让你受了伤，然后转身离场。", "wú lùn shì yù jiàn le gū fù nǐ de bàn lǚ，hái shì jiāo dào le xū wěi de péng yǒu，nǐ dōu kě yǐ dà dà fāng fāng dì chéng rèn zhè duàn jīng lì ràng nǐ shòu le shāng，rán hòu zhuǎn shēn lí chǎng。", "Dù gặp một người yêu phụ lòng bạn hay một người bạn giả tạo, bạn đều có thể thẳng thắn thừa nhận trải nghiệm đó đã làm mình tổn thương, rồi quay lưng rời đi."),
      sub("s7", 50.661, 57.492, "人生里有遗憾是很正常的，重要的是不要让执念一直困住自己。", "rén shēng lǐ yǒu yí hàn shì hěn zhèng cháng de，zhòng yào de shì bú yào ràng zhí niàn yì zhí kùn zhù zì jǐ。", "Trong đời có tiếc nuối là điều rất bình thường, quan trọng là đừng để chấp niệm mãi giam giữ mình."),
      sub("s8", 57.492, 64.085, "把自己的感受放在第一位，好好照顾自己的身体和心理。", "bǎ zì jǐ de gǎn shòu fàng zài dì yī wèi，hǎo hǎo zhào gù zì jǐ de shēn tǐ hé xīn lǐ。", "Hãy đặt cảm nhận của mình lên hàng đầu, chăm sóc tốt cơ thể và tinh thần của mình."),
      sub("s9", 64.085, 70.84, "你可以难过，也可以休息，但不要一直停在原地。", "nǐ kě yǐ nán guò，yě kě yǐ xiū xī，dàn bú yào yì zhí tíng zài yuán dì。", "Bạn có thể buồn, cũng có thể nghỉ ngơi, nhưng đừng mãi đứng yên tại chỗ."),
      sub("s10", 70.84, 82.994, "最后，希望你能够重振旗鼓，早点释怀，重新开始自己的生活，让自己慢慢变得开心、轻松、快乐起来。", "zuì hòu，xī wàng nǐ néng gòu chóng zhèn qí gǔ，zǎo diǎn shì huái，chóng xīn kāi shǐ zì jǐ de shēng huó，ràng zì jǐ màn màn biàn dé kāi xīn、qīng sōng、kuài lè qǐ lái。", "Cuối cùng, mong bạn có thể lấy lại tinh thần, sớm buông bỏ trong lòng, bắt đầu lại cuộc sống của mình và dần dần trở nên vui vẻ, nhẹ nhõm hơn."),
    ],
    vocabulary: [
      vocab("勇敢", "yǒnggǎn", "dũng cảm", "tính từ", "形容词"),
      vocab("内耗", "nèihào", "sự tiêu hao nội tâm, tự làm mình mệt mỏi", "danh từ", "名词"),
      vocab("关系", "guānxì", "mối quan hệ", "danh từ", "名词"),
      vocab("尊重", "zūnzhòng", "tôn trọng", "động từ", "动词"),
      vocab("消耗", "xiāohào", "tiêu hao, làm cạn năng lượng", "động từ", "动词"),
      vocab("当断则断", "dāng duàn zé duàn", "khi cần cắt đứt thì phải cắt đứt", "thành ngữ", "成语"),
      vocab("翻篇", "fānpiān", "sang trang mới, khép lại chuyện cũ", "động từ", "动词"),
      vocab("执念", "zhíniàn", "chấp niệm", "danh từ", "名词"),
      vocab("释怀", "shìhuái", "buông bỏ trong lòng, cảm thấy nhẹ nhõm", "động từ", "动词"),
    ],
  },

  "dialogue-so-cap-topic-5": {
    id: "dialogue-so-cap-topic-5",
    vi: "Nội dung 5",
    zh: "内容 5",
    titleVi: "Sức mạnh của sự lặp lại",
    titleZh: "重复的力量",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-5/daily-009-main.mp3"),
    audioSlow: "",
    duration: 79,
    subtitles: [
      sub("s1", 0.0, 4.053, "今天的主题是：重复的力量。", "jīn tiān de zhǔ tí shì：chóng fù de lì liàng。", "Chủ đề hôm nay là: Sức mạnh của sự lặp lại."),
      sub("s2", 4.053, 9.299, "学习的本质是重复，而极致的重复就是坚持。", "xué xí de běn zhì shì chóng fù，ér jí zhì de chóng fù jiù shì jiān chí。", "Bản chất của việc học là lặp lại, và lặp lại đến cùng cực chính là kiên trì."),
      sub("s3", 9.299, 20.56, "只有不断重复，才会慢慢熟能生巧；只有熟练以后，才有机会真正运用，最后练出属于自己的绝技。", "zhǐ yǒu bù duàn chóng fù，cái huì màn màn shú néng shēng qiǎo；zhǐ yǒu shú liàn yǐ hòu，cái yǒu jī huì zhēn zhèng yùn yòng，zuì hòu liàn chū shǔ yú zì jǐ de jué jì。", "Chỉ khi lặp lại không ngừng, bạn mới dần luyện nhiều thành khéo; chỉ sau khi thành thục, bạn mới có cơ hội vận dụng thật sự và cuối cùng rèn ra kỹ năng riêng của mình."),
      sub("s4", 20.56, 32.574, "请记住，复杂的事情简单做，简单的事情重复做，如果你愿意用心做，时间久了，你就会成为某个领域里的专家。", "qǐng jì zhù，fù zá de shì qíng jiǎn dān zuò，jiǎn dān de shì qíng chóng fù zuò，rú guǒ nǐ yuàn yì yòng xīn zuò，shí jiān jiǔ le，nǐ jiù huì chéng wéi mǒu gè lǐng yù lǐ de zhuān jiā。", "Hãy nhớ rằng việc phức tạp thì làm theo cách đơn giản, việc đơn giản thì lặp lại; nếu bạn sẵn lòng làm bằng cả tâm sức, lâu dần bạn sẽ trở thành chuyên gia trong một lĩnh vực nào đó."),
      sub("s5", 32.574, 39.969, "哪怕步子小一点，速度慢一点，只要还在往前走，就已经很好。", "nǎ pà bù zi xiǎo yì diǎn，sù dù màn yì diǎn，zhǐ yào hái zài wǎng qián zǒu，jiù yǐ jīng hěn hǎo。", "Dù bước chân nhỏ hơn, tốc độ chậm hơn, chỉ cần vẫn đang tiến về phía trước thì đã rất tốt rồi."),
      sub("s6", 39.969, 47.078, "如果你觉得自己没有天赋，那就继续重复，继续练习。", "rú guǒ nǐ jué de zì jǐ méi yǒu tiān fù，nà jiù jì xù chóng fù，jì xù liàn xí。", "Nếu bạn thấy mình không có năng khiếu, vậy thì hãy tiếp tục lặp lại, tiếp tục luyện tập."),
      sub("s7", 47.078, 56.956, "你要相信，那些咬牙坚持的“再来一次”，终会在某一天变成别人望尘莫及的优势。", "nǐ yào xiāng xìn，nà xiē yǎo yá jiān chí de “zài lái yī cì”，zhōng huì zài mǒu yī tiān biàn chéng bié rén wàng chén mò jí de yōu shì。", "Bạn phải tin rằng những lần nghiến răng kiên trì nói “làm lại lần nữa” một ngày nào đó sẽ trở thành lợi thế mà người khác khó theo kịp."),
      sub("s8", 56.956, 63.003, "当你看不清方向的时候，就比别人多坚持一会儿。", "dāng nǐ kàn bù qīng fāng xiàng de shí hòu，jiù bǐ bié rén duō jiān chí yī huì er。", "Khi bạn chưa nhìn rõ phương hướng, hãy kiên trì thêm một chút so với người khác."),
      sub("s9", 63.003, 70.623, "那些看似不起眼的日复一日，终将在未来的某一天，让你看见坚持的意义。", "nà xiē kàn shì bù qǐ yǎn de rì fù yí rì，zhōng jiāng zài wèi lái de mǒu yī tiān，ràng nǐ kàn jiàn jiān chí de yì yì。", "Những ngày tháng lặp đi lặp lại tưởng như không đáng chú ý, cuối cùng sẽ có một ngày trong tương lai giúp bạn nhìn thấy ý nghĩa của sự kiên trì."),
      sub("s10", 70.623, 79.036, "我们所有的努力，不是为了让别人觉得了不起，而是为了让自己从心底看得起自己。", "wǒ men suǒ yǒu de nǔ lì，bú shì wèi le ràng bié rén jué de liǎo bù qǐ，ér shì wèi le ràng zì jǐ cóng xīn dǐ kàn de qǐ zì jǐ。", "Tất cả nỗ lực của chúng ta không phải để người khác thấy mình giỏi, mà để từ trong đáy lòng mình có thể tôn trọng chính mình."),
    ],
    vocabulary: [
      vocab("本质", "běnzhì", "bản chất", "danh từ", "名词"),
      vocab("重复", "chóngfù", "lặp lại", "động từ/danh từ", "动词/名词"),
      vocab("坚持", "jiānchí", "kiên trì", "động từ", "动词"),
      vocab("熟能生巧", "shú néng shēng qiǎo", "luyện nhiều thành khéo", "thành ngữ", "成语"),
      vocab("运用", "yùnyòng", "vận dụng", "động từ", "动词"),
      vocab("领域", "lǐngyù", "lĩnh vực", "danh từ", "名词"),
      vocab("专家", "zhuānjiā", "chuyên gia", "danh từ", "名词"),
      vocab("天赋", "tiānfù", "năng khiếu, thiên phú", "danh từ", "名词"),
      vocab("望尘莫及", "wàngchén mòjí", "không thể theo kịp", "thành ngữ", "成语"),
    ],
  },

  "dialogue-so-cap-topic-6": {
    id: "dialogue-so-cap-topic-6",
    vi: "Nội dung 6",
    zh: "内容 6",
    titleVi: "Cứ từ từ nỗ lực, rồi gặp nhau trên đỉnh cao",
    titleZh: "慢慢努力，顶峰相见",
    audioNormal: resolveListeningDetailAudio("/audio/Listening/dialogue-so-cap/Topic-6/daily-010-main.mp3"),
    audioSlow: "",
    duration: 94,
    subtitles: [
      sub("s1", 0.0, 5.12, "今天的主题是：慢慢努力，顶峰相见。", "jīn tiān de zhǔ tí shì：màn màn nǔ lì，dǐng fēng xiāng jiàn。", "Chủ đề hôm nay là: Cứ từ từ nỗ lực, rồi gặp nhau trên đỉnh cao."),
      sub("s2", 5.12, 17.4, "我才十几岁，我当然知道睡觉很舒服，游戏很好玩，也知道如果一直不表白，暗恋的那个人可能会被别人追走。", "wǒ cái shí jǐ suì，wǒ dāng rán zhī dào shuì jiào hěn shū fú，yóu xì hěn hǎo wán，yě zhī dào rú guǒ yì zhí bù biǎo bái，àn liàn de nà ge rén kě néng huì bèi bié rén zhuī zǒu。", "Tôi mới mười mấy tuổi, tất nhiên tôi biết ngủ rất dễ chịu, chơi game rất vui, và cũng biết nếu mãi không tỏ tình thì người mình thầm thích có thể bị người khác theo đuổi mất."),
      sub("s3", 17.4, 23.912, "可是我更知道，今后的人生不应该只被眼前的快乐决定。", "kě shì wǒ gèng zhī dào，jīn hòu de rén shēng bù yīng gāi zhǐ bèi yǎn qián de kuài lè jué dìng。", "Nhưng tôi càng biết rằng cuộc đời sau này không nên chỉ được quyết định bởi niềm vui trước mắt."),
      sub("s4", 23.912, 36.867, "水再浑浊，只要经过长久沉淀，依然会分外清澈；人再愚钝，只要愿意努力，也一样有机会改写命运。", "shuǐ zài hún zhuó，zhǐ yào jīng guò cháng jiǔ chén diàn，yī rán huì fèn wài qīng chè；rén zài yú dùn，zhǐ yào yuàn yì nǔ lì，yě yī yàng yǒu jī huì gǎi xiě mìng yùn。", "Nước dù đục đến đâu, chỉ cần lắng đọng đủ lâu thì vẫn sẽ trong hơn hẳn; con người dù chậm hiểu đến đâu, chỉ cần sẵn lòng cố gắng thì vẫn có cơ hội thay đổi số phận."),
      sub("s5", 36.867, 41.718, "不要抱怨起点太低，那只是我们站立的原点。", "bú yào bào yuàn qǐ diǎn tài dī，nà zhǐ shì wǒ men zhàn lì de yuán diǎn。", "Đừng than phiền rằng điểm xuất phát quá thấp, đó chỉ là nơi chúng ta đang đứng lúc ban đầu."),
      sub("s6", 41.718, 49.413, "人生是一场漫长的竞赛，有些人笑在开始，有些人却赢在最后。", "rén shēng shì yī cháng màn cháng de jìng sài，yǒu xiē rén xiào zài kāi shǐ，yǒu xiē rén què yíng zài zuì hòu。", "Cuộc đời là một cuộc đua dài, có người cười ngay từ đầu, nhưng có người lại chiến thắng ở cuối cùng."),
      sub("s7", 49.413, 56.75, "努力是一件需要长期坚持的事，也需要经历孤单和不被理解的日子。", "nǔ lì shì yī jiàn xū yào cháng qī jiān chí de shì，yě xū yào jīng lì gū dān hé bù bèi lǐ jiě de rì zi。", "Nỗ lực là việc cần kiên trì lâu dài, và cũng phải trải qua những ngày cô đơn, không được thấu hiểu."),
      sub("s8", 56.75, 63.413, "累了可以休息，心情不好也可以慢一点，但不要轻易放弃。", "lèi le kě yǐ xiū xī，xīn qíng bù hǎo yě kě yǐ màn yì diǎn，dàn bú yào qīng yì fàng qì。", "Mệt thì có thể nghỉ, tâm trạng không tốt thì có thể chậm lại một chút, nhưng đừng dễ dàng bỏ cuộc."),
      sub("s9", 63.413, 68.81, "你只管努力，剩下的交给时间。", "nǐ zhǐ guǎn nǔ lì，shèng xià de jiāo gěi shí jiān。", "Bạn cứ việc cố gắng, phần còn lại hãy để thời gian trả lời."),
      sub("s10", 68.81, 72.072, "不畏将来，不念过往。", "bù wèi jiāng lái，bù niàn guò wǎng。", "Không sợ tương lai, không mãi nghĩ về quá khứ."),
      sub("s11", 72.072, 77.261, "生活再糟糕，也不妨碍你一点一点变好。", "shēng huó zài zāo gāo，yě bù fáng ài nǐ yì diǎn yì diǎn biàn hǎo。", "Cuộc sống dù tệ đến đâu cũng không cản trở bạn từng chút một trở nên tốt hơn."),
      sub("s12", 77.261, 83.633, "相信自己，你能作茧自缚，也能化茧成蝶。", "xiāng xìn zì jǐ，nǐ néng zuò jiǎn zì fù，yě néng huà jiǎn chéng dié。", "Hãy tin vào mình: bạn có thể tự trói buộc chính mình, nhưng cũng có thể phá kén hóa bướm."),
      sub("s13", 83.633, 88.753, "没有太晚的开始，只有过早的放弃。", "méi yǒu tài wǎn de kāi shǐ，zhǐ yǒu guò zǎo de fàng qì。", "Không có sự bắt đầu nào là quá muộn, chỉ có việc từ bỏ quá sớm."),
      sub("s14", 88.753, 93.558, "我们各自努力，然后顶峰相见。", "wǒ men gè zì nǔ lì，rán hòu dǐng fēng xiāng jiàn。", "Chúng ta mỗi người tự nỗ lực, rồi gặp nhau trên đỉnh cao."),
    ],
    vocabulary: [
      vocab("十几岁", "shí jǐ suì", "mười mấy tuổi", "cụm từ", "词组"),
      vocab("表白", "biǎobái", "tỏ tình, nói ra tình cảm", "động từ", "动词"),
      vocab("暗恋", "ànliàn", "thầm thích, yêu thầm", "động từ", "动词"),
      vocab("浑浊", "húnzhuó", "đục, không trong", "tính từ", "形容词"),
      vocab("沉淀", "chéndiàn", "lắng đọng, lắng xuống", "động từ", "动词"),
      vocab("清澈", "qīngchè", "trong veo", "tính từ", "形容词"),
      vocab("改写命运", "gǎixiě mìngyùn", "thay đổi số phận", "cụm từ", "词组"),
      vocab("抱怨", "bàoyuàn", "than phiền, oán trách", "động từ", "动词"),
      vocab("顶峰相见", "dǐngfēng xiāngjiàn", "gặp nhau trên đỉnh cao", "cụm từ", "词组"),
    ],
  },
};
Object.assign(state, {
  listeningLevelId: state.listeningLevelId || "",
  listeningTopicId: state.listeningTopicId || "",
  listeningContentId: state.listeningContentId || "",
  listeningSubtitleMode: state.listeningSubtitleMode || "both", // vi | zh-pinyin | both
  listeningSpeed: state.listeningSpeed || "normal", // normal | slow
  listeningCurrentSentenceIndex: state.listeningCurrentSentenceIndex || 0,
  followReadingCurrentIndex: state.followReadingCurrentIndex || 0,
  followReadingScores: state.followReadingScores || {},
  listeningIsPlaying: false,
});

/* Map generic topic-N id (from buildListeningTopics) to a real content id
   when we have one; otherwise fall back to a tiny mock item so the page
   still renders. */
function resolveListeningContentId(topicId) {
  if (listeningContentMap[topicId]) return topicId;
  return null;
}

function getListeningContent(contentId) {
  if (listeningContentMap[contentId]) return listeningContentMap[contentId];
  // mock fallback for topics we haven't filled in yet
  const isVi = state.lang === "vi";
  return {
    id: contentId,
    vi: "Nội dung",
    zh: "内容",
    titleVi: isVi ? "Nội dung đang được cập nhật" : "内容更新中",
    titleZh: "内容更新中",
    audioNormal: "",
    audioSlow: "",
    duration: 0,
    subtitles: [
      sub("s1", 0, 3, "内容正在准备中。", "nèiróng zhèngzài zhǔnbèi zhōng。", "Nội dung đang được chuẩn bị."),
    ],
    vocabulary: [],
  };
}

function getListeningLevelLabel(levelId) {
  const isVi = state.lang === "vi";
  for (const cat of listeningCategories) {
    const lvl = cat.levels.find((l) => l.id === levelId);
    if (lvl) return isVi ? lvl.vi : lvl.zh;
  }
  return levelId || "";
}

/* --------------------------- 3. AUDIO ENGINE ---------------------------- */
let listeningAudioEl = null;
let listeningTimeUpdateHandler = null;
let listeningSentenceEndHandler = null;

function getListeningAudioEl() {
  if (!listeningAudioEl) {
    listeningAudioEl = document.createElement("audio");
    listeningAudioEl.id = "listeningAudioPlayer";
    listeningAudioEl.preload = "none";
    document.body.appendChild(listeningAudioEl);
  }
  return listeningAudioEl;
}

function stopListeningAudio() {
  const audio = getListeningAudioEl();
  audio.onended = null;
  audio.ontimeupdate = null;
  audio.pause();
  audio.currentTime = 0;
  state.listeningIsPlaying = false;
  updateListeningPlayButtonUI(false);
}

function updateListeningPlayButtonUI(isPlaying) {
  const isVi = state.lang === "vi";
  document.querySelectorAll("[data-listening-play-all]").forEach((btn) => {
    btn.classList.toggle("is-playing", isPlaying);
    btn.innerHTML = isPlaying
      ? `⏸ ${isVi ? "Đang phát..." : "播放中..."}`
      : `▶ ${isVi ? "Phát toàn bài" : "整篇播放"}`;
  });
}

function playListeningAudio(contentId, mode = "normal") {
  const content = getListeningContent(contentId);
  const src = mode === "slow" && content.audioSlow ? content.audioSlow : content.audioNormal;
  const existingAudio = getListeningAudioEl();

  // Bấm lại nút Play khi đang phát cùng bài -> tạm dừng (toggle), không restart
  if (state.listeningIsPlaying && !existingAudio.paused && src && existingAudio.src.endsWith(src)) {
    existingAudio.pause();
    state.listeningIsPlaying = false;
    updateListeningPlayButtonUI(false);
    return;
  }

  stopListeningAudio();
  if (!src) {
    const isVi = state.lang === "vi";
    showToast?.(isVi ? "Chưa có audio thật, dùng giọng đọc máy." : "暂无真实音频，使用系统语音。");
    speakListeningFallback(content.subtitles.map((s) => s.zh).join(""));
    return;
  }
  const audio = getListeningAudioEl();
  audio.src = src;
  audio.playbackRate = mode === "slow" ? 0.75 : 1.0;
  audio.ontimeupdate = () => {
    const t = audio.currentTime;
    const idx = content.subtitles.findIndex((s) => t >= s.start && t < s.end);
    if (idx !== -1 && idx !== state.listeningCurrentSentenceIndex) {
      state.listeningCurrentSentenceIndex = idx;
      updateRollingSubtitleActiveRow(idx);
    }
  };
  audio.onended = () => {
    state.listeningIsPlaying = false;
    updateListeningPlayButtonUI(false);
  };
  audio
    .play()
    .then(() => {
      state.listeningIsPlaying = true;
      updateListeningPlayButtonUI(true);
    })
    .catch(() => {
      showToast?.(state.lang === "vi" ? "Không thể phát audio." : "无法播放音频。");
    });
}

function playListeningSentence(contentId, sentenceId, mode = "normal") {
  const content = getListeningContent(contentId);
  const sentence = content.subtitles.find((s) => s.id === sentenceId);
  if (!sentence) return;
  const idx = content.subtitles.findIndex((s) => s.id === sentenceId);
  state.listeningCurrentSentenceIndex = idx;
  updateRollingSubtitleActiveRow(idx);
  updateDefaultSubtitleCard(content, idx);

  const src = mode === "slow" && content.audioSlow ? content.audioSlow : content.audioNormal;
  stopListeningAudio();
  if (!src) {
    speakListeningFallback(sentence.zh);
    return;
  }
  const audio = getListeningAudioEl();
  audio.src = src;
  audio.playbackRate = mode === "slow" ? 0.75 : 1.0;
  audio.currentTime = sentence.start;
  const stopAtEnd = () => {
    if (audio.currentTime >= sentence.end) {
      audio.pause();
      audio.ontimeupdate = null;
    }
  };
  audio.ontimeupdate = stopAtEnd;
  audio.play().catch(() => {
    showToast?.(state.lang === "vi" ? "Không thể phát audio." : "无法播放音频。");
  });
}

function speakListeningFallback(text, slow = false) {
  if (typeof browserSpeakText === "function") {
    browserSpeakText(text, { slow, stage: "sentence" });
    return;
  }
  if (!window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "zh-CN";
  utter.rate = slow ? 0.72 : 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

/* --------------------- 4. RENDER: CONTENT DETAIL PAGE ------------------- */

function renderSubtitleModeControls() {
  const isVi = state.lang === "vi";
  const modes = [
    { id: "vi", label: isVi ? "Tiếng Việt" : "越南语" },
    { id: "zh-pinyin", label: isVi ? "Trung + Pinyin" : "中文+拼音" },
    { id: "both", label: isVi ? "Cả hai" : "两者都要" },
  ];
  return `
    <div class="ld-subtitle-modes" role="group" aria-label="${isVi ? "Tùy chọn phụ đề" : "字幕选项"}">
      ${modes
        .map(
          (m) => `
        <button type="button" class="ld-subtitle-mode-btn ${state.listeningSubtitleMode === m.id ? "active" : ""}" data-listening-subtitle-mode="${m.id}">${m.label}</button>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderDefaultSubtitleCard(content) {
  const sentence = content.subtitles[state.listeningCurrentSentenceIndex] || content.subtitles[0];
  return `
    <div class="ld-current-subtitle" id="ldCurrentSubtitle">
      ${renderSubtitleLinesHTML(sentence)}
    </div>
  `;
}

function renderSubtitleLinesHTML(sentence) {
  const mode = state.listeningSubtitleMode;
  const showZh = mode === "zh-pinyin" || mode === "both";
  const showVi = mode === "vi" || mode === "both";
  return `
    ${showZh ? `<p class="ld-line-zh">${escapeHtml(sentence.zh)}</p><p class="ld-line-pinyin">${escapeHtml(sentence.pinyin)}</p>` : ""}
    ${showVi ? `<p class="ld-line-vi">${escapeHtml(sentence.vi)}</p>` : ""}
  `;
}

function updateDefaultSubtitleCard(content, idx) {
  const el = document.getElementById("ldCurrentSubtitle");
  if (!el) return;
  el.innerHTML = renderSubtitleLinesHTML(content.subtitles[idx]);
}

function renderRollingSubtitles(contentId) {
  const content = getListeningContent(contentId);
  return `
    <div class="ld-rolling-subtitles" id="ldRollingSubtitles">
      ${content.subtitles
        .map(
          (s, i) => `
        <button type="button" class="ld-rolling-row ${i === state.listeningCurrentSentenceIndex ? "active" : ""}" data-listening-play-sentence="${escapeAttr(s.id)}" data-listening-content="${escapeAttr(contentId)}">
          <span class="ld-rolling-index">${i + 1}</span>
          <span class="ld-rolling-text">
            <strong>${escapeHtml(s.zh)}</strong>
            <em>${escapeHtml(s.pinyin)}</em>
            <small>${escapeHtml(s.vi)}</small>
          </span>
        </button>
      `,
        )
        .join("")}
    </div>
  `;
}

function updateRollingSubtitleActiveRow(idx) {
  const wrap = document.getElementById("ldRollingSubtitles");
  if (!wrap) return;
  wrap.querySelectorAll(".ld-rolling-row").forEach((row, i) => {
    row.classList.toggle("active", i === idx);
  });
  const activeRow = wrap.children[idx];
  activeRow?.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
}

function renderListeningContentDetail(contentId) {
  const isVi = state.lang === "vi";
  const content = getListeningContent(contentId);
  state.listeningContentId = contentId;
  state.listeningCurrentSentenceIndex = 0;

  setScreenWithDesktopShell(
    "course",
    `
    <section class="listening-detail-screen">
      <div class="listening-hero listening-hero--sub">
        <button class="listening-back-btn" data-listening-topic-back type="button" aria-label="${isVi ? "Quay lại" : "返回"}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div>
          <h1>${escapeHtml(isVi ? content.titleVi : content.titleZh)}</h1>
          <p>${escapeHtml(isVi ? content.vi : content.zh)} · ${getListeningLevelLabel(state.listeningLevelId)}</p>
        </div>
      </div>

      <div class="ld-grid">
        <div class="ld-main-col">
          <div class="ld-card ld-subtitle-card">
            <div class="ld-card-head">
              <strong>${isVi ? "Tùy chọn phụ đề" : "字幕选项"}</strong>
            </div>
            ${renderSubtitleModeControls()}
            ${renderDefaultSubtitleCard(content)}
          </div>

          <div class="ld-card ld-transport-card">
            <div class="ld-card-head"><strong>${isVi ? "Phát toàn bài / Phát từng câu" : "整篇播放 / 逐句播放"}</strong></div>
            <div class="ld-transport-row">
              <button type="button" class="ld-btn" data-listening-prev-sentence data-listening-content="${escapeAttr(contentId)}">⏮ ${isVi ? "Câu trước" : "上一句"}</button>
              <button type="button" class="ld-btn ld-btn--primary" data-listening-play-all data-listening-content="${escapeAttr(contentId)}">▶ ${isVi ? "Phát toàn bài" : "整篇播放"}</button>
              <button type="button" class="ld-btn ld-btn--stop" data-listening-stop data-listening-content="${escapeAttr(contentId)}">⏹ ${isVi ? "Dừng" : "停止"}</button>
              <button type="button" class="ld-btn" data-listening-next-sentence data-listening-content="${escapeAttr(contentId)}">${isVi ? "Câu sau" : "下一句"} ⏭</button>
            </div>
            <div class="ld-transport-row">
              <button type="button" class="ld-btn ld-speed-btn ${state.listeningSpeed === "normal" ? "active" : ""}" data-listening-speed="normal">${isVi ? "Tốc độ thường" : "正常语速"}</button>
              <button type="button" class="ld-btn ld-speed-btn ${state.listeningSpeed === "slow" ? "active" : ""}" data-listening-speed="slow">${isVi ? "Tốc độ chậm" : "慢速"}</button>
            </div>
          </div>

          <div class="ld-card ld-rolling-card">
            <div class="ld-card-head"><strong>${isVi ? "Phụ đề cuộn theo audio" : "字幕随音频滚动"}</strong></div>
            ${renderRollingSubtitles(contentId)}
          </div>
        </div>

        <aside class="ld-side-col">
          <button type="button" class="ld-function-card" data-listening-open-vocab data-listening-content="${escapeAttr(contentId)}">
            <span class="ld-function-icon">📖</span>
            <strong>${isVi ? "Từ vựng" : "词汇"}</strong>
            <small>${content.vocabulary.length} ${isVi ? "từ" : "个词"}</small>
          </button>
          <button type="button" class="ld-function-card" data-listening-open-follow data-listening-content="${escapeAttr(contentId)}">
            <span class="ld-function-icon">🗣️</span>
            <strong>${isVi ? "Nói theo" : "跟读"}</strong>
            <small>${content.subtitles.length} ${isVi ? "câu" : "句"}</small>
          </button>
        </aside>
      </div>
    </section>
  `,
    "app-desktop-shell--course",
    "listen",
  );
}

/* ----------------------- 5. RENDER: VOCABULARY PAGE ---------------------- */

function renderListeningVocabulary(contentId) {
  const isVi = state.lang === "vi";
  const content = getListeningContent(contentId);

  setScreenWithDesktopShell(
    "course",
    `
    <section class="listening-detail-screen">
      <div class="listening-hero listening-hero--sub">
        <button class="listening-back-btn" data-listening-back-to-detail data-listening-content="${escapeAttr(contentId)}" type="button" aria-label="${isVi ? "Quay lại" : "返回"}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div>
          <h1>${isVi ? "Từ vựng" : "词汇"}</h1>
          <p>${escapeHtml(isVi ? content.titleVi : content.titleZh)}</p>
        </div>
      </div>

      <div class="ld-vocab-grid">
        ${
          content.vocabulary.length === 0
            ? `<div class="ld-empty">${isVi ? "Chưa có từ vựng cho nội dung này." : "该内容暂无词汇。"}</div>`
            : content.vocabulary
                .map(
                  (v) => `
          <article class="ld-vocab-card">
            <div class="ld-vocab-head">
              <strong class="ld-vocab-hanzi">${escapeHtml(v.hanzi)}</strong>
              <span class="ld-vocab-pos">${escapeHtml(isVi ? v.posVi : v.posZh)}</span>
            </div>
            <p class="ld-vocab-pinyin">${escapeHtml(v.pinyin)}</p>
            <p class="ld-vocab-vi">${escapeHtml(v.vi)}</p>
            <div class="ld-vocab-audio-row">
              <button type="button" class="ld-btn" data-vocab-play-normal data-vocab-text="${escapeAttr(v.hanzi)}" data-vocab-audio="${escapeAttr(v.audioNormal || "")}">🔊 ${isVi ? "Nghe" : "正常"}</button>
              <button type="button" class="ld-btn" data-vocab-play-slow data-vocab-text="${escapeAttr(v.hanzi)}" data-vocab-audio="${escapeAttr(v.audioSlow || "")}">🐢 ${isVi ? "Chậm" : "慢速"}</button>
            </div>
            <div class="ld-vocab-examples">
              ${v.examples
                .map(
                  (ex) => `
                <div class="ld-vocab-example">
                  <p class="ld-example-zh">${escapeHtml(ex.zh)}</p>
                  <p class="ld-example-pinyin">${escapeHtml(ex.pinyin)}</p>
                  <p class="ld-example-vi">${escapeHtml(ex.vi)}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          </article>
        `,
                )
                .join("")
        }
      </div>
    </section>
  `,
    "app-desktop-shell--course",
    "listen",
  );
}

/* --------------------- 6. RENDER: FOLLOW-READING PAGE -------------------- */

function compareTranscript(target, spoken) {
  // simple char-level compare (mock ASR / real ASR can feed `spoken` later)
  const targetChars = String(target || "").split("");
  const spokenChars = String(spoken || "").split("");
  return targetChars.map((ch, i) => ({
    char: ch,
    correct: spokenChars[i] === ch,
  }));
}

function scoreFollowReading(target, spoken) {
  const diff = compareTranscript(target, spoken);
  const correctCount = diff.filter((d) => d.correct).length;
  const score = diff.length > 0 ? Math.round((correctCount / diff.length) * 100) : 0;
  return { score, diff };
}

function mockRecognizedTranscript(target) {
  // Mock ASR: reproduce target but randomly "mishear" ~15% of chars.
  return target
    .split("")
    .map((ch) => (Math.random() < 0.15 ? "_" : ch))
    .join("");
}

function renderFollowReadingFeedback(diff) {
  return `
    <div class="ld-follow-feedback">
      ${diff
        .map(
          (d) => `<span class="${d.correct ? "ld-char-correct" : "ld-char-wrong"}">${escapeHtml(d.char)}</span>`,
        )
        .join("")}
    </div>
  `;
}

function renderListeningFollowReading(contentId) {
  const isVi = state.lang === "vi";
  const content = getListeningContent(contentId);
  const idx = Math.max(0, Math.min(state.followReadingCurrentIndex, content.subtitles.length - 1));
  state.followReadingCurrentIndex = idx;
  const sentence = content.subtitles[idx];
  const scoreEntry = state.followReadingScores[`${contentId}:${sentence.id}`];

  setScreenWithDesktopShell(
    "course",
    `
    <section class="listening-detail-screen">
      <div class="listening-hero listening-hero--sub">
        <button class="listening-back-btn" data-listening-back-to-detail data-listening-content="${escapeAttr(contentId)}" type="button" aria-label="${isVi ? "Quay lại" : "返回"}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div>
          <h1>${isVi ? "Nói theo" : "跟读"}</h1>
          <p>${escapeHtml(isVi ? content.titleVi : content.titleZh)} · ${idx + 1}/${content.subtitles.length}</p>
        </div>
      </div>

      <div class="ld-follow-card">
        <p class="ld-follow-progress">${idx + 1}/${content.subtitles.length}</p>
        <p class="ld-line-zh ld-follow-zh">${escapeHtml(sentence.zh)}</p>
        <p class="ld-line-pinyin">${escapeHtml(sentence.pinyin)}</p>
        <p class="ld-line-vi">${escapeHtml(sentence.vi)}</p>

        <div class="ld-transport-row">
          <button type="button" class="ld-btn" data-follow-play-sentence data-listening-content="${escapeAttr(contentId)}">🔊 ${isVi ? "Nghe câu này" : "听这一句"}</button>
          <button type="button" class="ld-btn ld-btn--primary" data-follow-record data-listening-content="${escapeAttr(contentId)}">🎙️ ${isVi ? "Nói theo / Ghi âm" : "跟读 / 录音"}</button>
        </div>

        <div id="ldFollowFeedback">
          ${scoreEntry ? `<p class="ld-follow-score">${isVi ? "Điểm" : "得分"}: ${scoreEntry.score}/100</p>${renderFollowReadingFeedback(scoreEntry.diff)}` : ""}
        </div>

        <div class="ld-transport-row">
          <button type="button" class="ld-btn" data-follow-prev data-listening-content="${escapeAttr(contentId)}" ${idx === 0 ? "disabled" : ""}>⏮ ${isVi ? "Câu trước" : "上一句"}</button>
          <button type="button" class="ld-btn" data-follow-next data-listening-content="${escapeAttr(contentId)}" ${idx === content.subtitles.length - 1 ? "disabled" : ""}>${isVi ? "Câu sau" : "下一句"} ⏭</button>
        </div>
      </div>
    </section>
  `,
    "app-desktop-shell--course",
    "listen",
  );
}

/* --------------------------- 7. EVENT HANDLERS --------------------------- */

document.addEventListener("click", (event) => {
  const el = (sel) => event.target.closest(sel);

  const topicBtn = el("[data-listening-topic]");
  if (topicBtn) {
    const topicId = topicBtn.dataset.listeningTopic;
    state.listeningTopicId = topicId;
    const resolved = resolveListeningContentId(topicId) || topicId;
    renderListeningContentDetail(resolved);
    return;
  }

  if (el("[data-listening-topic-back]")) {
    if (state.listeningLevelId) renderListeningTopics(state.listeningLevelId);
    else renderListening();
    return;
  }

  if (el("[data-listening-back-to-detail]")) {
    const contentId = el("[data-listening-back-to-detail]").dataset.listeningContent;
    renderListeningContentDetail(contentId);
    return;
  }

  const subModeBtn = el("[data-listening-subtitle-mode]");
  if (subModeBtn) {
    state.listeningSubtitleMode = subModeBtn.dataset.listeningSubtitleMode;
    if (state.listeningContentId) renderListeningContentDetail(state.listeningContentId);
    return;
  }

  const speedBtn = el("[data-listening-speed]");
  if (speedBtn) {
    state.listeningSpeed = speedBtn.dataset.listeningSpeed;
    document.querySelectorAll(".ld-speed-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.listeningSpeed === state.listeningSpeed);
    });
    return;
  }

  const playAllBtn = el("[data-listening-play-all]");
  if (playAllBtn) {
    playListeningAudio(playAllBtn.dataset.listeningContent, state.listeningSpeed);
    return;
  }
    const stopBtn = el("[data-listening-stop]"); // THÊM KHỐI NÀY
  if (stopBtn) {
    stopListeningAudio();
    return;
  }

  const playSentenceBtn = el("[data-listening-play-sentence]");
  if (playSentenceBtn) {
    playListeningSentence(
      playSentenceBtn.dataset.listeningContent,
      playSentenceBtn.dataset.listeningPlaySentence,
      state.listeningSpeed,
    );
    return;
  }

  const prevSentenceBtn = el("[data-listening-prev-sentence]");
  if (prevSentenceBtn) {
    const contentId = prevSentenceBtn.dataset.listeningContent;
    const content = getListeningContent(contentId);
    const nextIdx = Math.max(0, state.listeningCurrentSentenceIndex - 1);
    playListeningSentence(contentId, content.subtitles[nextIdx].id, state.listeningSpeed);
    return;
  }

  const nextSentenceBtn = el("[data-listening-next-sentence]");
  if (nextSentenceBtn) {
    const contentId = nextSentenceBtn.dataset.listeningContent;
    const content = getListeningContent(contentId);
    const nextIdx = Math.min(content.subtitles.length - 1, state.listeningCurrentSentenceIndex + 1);
    playListeningSentence(contentId, content.subtitles[nextIdx].id, state.listeningSpeed);
    return;
  }

  const openVocabBtn = el("[data-listening-open-vocab]");
  if (openVocabBtn) {
    renderListeningVocabulary(openVocabBtn.dataset.listeningContent);
    return;
  }

  const openFollowBtn = el("[data-listening-open-follow]");
  if (openFollowBtn) {
    state.followReadingCurrentIndex = 0;
    renderListeningFollowReading(openFollowBtn.dataset.listeningContent);
    return;
  }

  const vocabPlayNormal = el("[data-vocab-play-normal]");
  if (vocabPlayNormal) {
    const src = vocabPlayNormal.dataset.vocabAudio;
    const text = vocabPlayNormal.dataset.vocabText;
    if (src) {
      const audio = new Audio(src);
      audio.play().catch(() => speakListeningFallback(text, false));
    } else {
      speakListeningFallback(text, false);
    }
    return;
  }

  const vocabPlaySlow = el("[data-vocab-play-slow]");
  if (vocabPlaySlow) {
    const src = vocabPlaySlow.dataset.vocabAudio;
    const text = vocabPlaySlow.dataset.vocabText;
    if (src) {
      const audio = new Audio(src);
      audio.playbackRate = 0.75;
      audio.play().catch(() => speakListeningFallback(text, true));
    } else {
      speakListeningFallback(text, true);
    }
    return;
  }

  const followPlayBtn = el("[data-follow-play-sentence]");
  if (followPlayBtn) {
    const contentId = followPlayBtn.dataset.listeningContent;
    const content = getListeningContent(contentId);
    const sentence = content.subtitles[state.followReadingCurrentIndex];
    playListeningSentence(contentId, sentence.id, "normal");
    return;
  }

  const followRecordBtn = el("[data-follow-record]");
  if (followRecordBtn) {
    const contentId = followRecordBtn.dataset.listeningContent;
    const content = getListeningContent(contentId);
    const sentence = content.subtitles[state.followReadingCurrentIndex];
    const isVi = state.lang === "vi";

    const runMockScoring = () => {
      const spoken = mockRecognizedTranscript(sentence.zh);
      const result = scoreFollowReading(sentence.zh, spoken);
      state.followReadingScores[`${contentId}:${sentence.id}`] = result;
      const feedbackEl = document.getElementById("ldFollowFeedback");
      if (feedbackEl) {
        feedbackEl.innerHTML = `<p class="ld-follow-score">${isVi ? "Điểm" : "得分"}: ${result.score}/100</p>${renderFollowReadingFeedback(result.diff)}`;
      }
    };

    if (navigator.mediaDevices?.getUserMedia) {
      followRecordBtn.textContent = isVi ? "🎙️ Đang ghi âm..." : "🎙️ 正在录音...";
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setTimeout(() => {
            stream.getTracks().forEach((track) => track.stop());
            followRecordBtn.textContent = isVi ? "🎙️ Nói theo / Ghi âm" : "🎙️ 跟读 / 录音";
            runMockScoring();
          }, 1500);
        })
        .catch(() => {
          followRecordBtn.textContent = isVi ? "🎙️ Nói theo / Ghi âm" : "🎙️ 跟读 / 录音";
          runMockScoring();
        });
    } else {
      runMockScoring();
    }
    return;
  }

  const followPrevBtn = el("[data-follow-prev]");
  if (followPrevBtn) {
    state.followReadingCurrentIndex = Math.max(0, state.followReadingCurrentIndex - 1);
    renderListeningFollowReading(followPrevBtn.dataset.listeningContent);
    return;
  }

  const followNextBtn = el("[data-follow-next]");
  if (followNextBtn) {
    const contentId = followNextBtn.dataset.listeningContent;
    const content = getListeningContent(contentId);
    state.followReadingCurrentIndex = Math.min(
      content.subtitles.length - 1,
      state.followReadingCurrentIndex + 1,
    );
    renderListeningFollowReading(contentId);
    return;
  }
});

/* Track selected level id (renderListeningTopics in app.js doesn't store it) */
document.addEventListener("click", (event) => {
  const levelBtn = event.target.closest("[data-listening-level]");
  if (levelBtn) state.listeningLevelId = levelBtn.dataset.listeningLevel;
});
