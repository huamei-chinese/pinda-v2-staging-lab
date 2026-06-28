import fs from "node:fs";
import path from "node:path";
import { pinyin } from "pinyin-pro";

const root = process.cwd();

const allowedPos = new Set(["noun", "verb", "adj", "adv", "prep", "particle"]);

const tokenDict = {
  周末: { pos: "noun", vi: "cuối tuần" },
  打算: { pos: "verb", vi: "dự định" },
  时候: { pos: "noun", vi: "lúc, thời điểm" },
  回来: { pos: "verb", vi: "trở về" },
  桌子: { pos: "noun", vi: "cái bàn" },
  放着: { pos: "verb", vi: "đặt, để" },
  饮料: { pos: "noun", vi: "đồ uống" },
  总是: { pos: "adv", vi: "luôn luôn" },
  笑着: { pos: "verb", vi: "mỉm cười" },
  客人: { pos: "noun", vi: "khách" },
  最近: { pos: "adv", vi: "gần đây" },
  越来越: { pos: "adv", vi: "ngày càng" },
  胖: { pos: "adj", vi: "béo, mập" },
  突然: { pos: "adv", vi: "đột nhiên" },
  找不到: { pos: "verb", vi: "không tìm thấy" },
  认识: { pos: "verb", vi: "quen, biết" },
  五年: { pos: "noun", vi: "năm năm" },
  去哪儿: { pos: "verb", vi: "đi đâu" },
  汉语: { pos: "noun", vi: "tiếng Trung" },
  中国人: { pos: "noun", vi: "người Trung Quốc" },
  一样: { pos: "adj", vi: "giống nhau" },
  数学: { pos: "noun", vi: "toán học" },
  历史: { pos: "noun", vi: "lịch sử" },
  难: { pos: "adj", vi: "khó" },
  忘了: { pos: "verb", vi: "quên rồi" },
  空调: { pos: "noun", vi: "điều hòa" },
  关了: { pos: "verb", vi: "tắt đi" },
  重要: { pos: "adj", vi: "quan trọng" },
  东西: { pos: "noun", vi: "đồ vật" },
  水果: { pos: "noun", vi: "trái cây" },
  其他: { pos: "adj", vi: "khác" },
  问题: { pos: "noun", vi: "vấn đề" },
  现在: { pos: "adv", vi: "bây giờ" },
  累: { pos: "adj", vi: "mệt" },
  下班: { pos: "verb", vi: "tan làm" },
  睡觉: { pos: "verb", vi: "ngủ" },
  办法: { pos: "noun", vi: "cách, biện pháp" },
  病: { pos: "noun", vi: "bệnh" },
  相信: { pos: "verb", vi: "tin tưởng" },
  同意: { pos: "verb", vi: "đồng ý" },
  看出来: { pos: "verb", vi: "nhìn ra, nhận ra" },
  影响: { pos: "verb", vi: "ảnh hưởng" },

  简单: { pos: "adj", vi: "đơn giản" },
  爱情: { pos: "noun", vi: "tình yêu" },
  真正: { pos: "adj", vi: "thật sự" },
  朋友: { pos: "noun", vi: "bạn bè" },
  经理: { pos: "noun", vi: "quản lý" },
  印象: { pos: "noun", vi: "ấn tượng" },
  着急: { pos: "adj", vi: "sốt ruột" },
  赚钱: { pos: "verb", vi: "kiếm tiền" },
  买对的: { pos: "verb", vi: "mua đúng thứ phù hợp" },
  贵: { pos: "adj", vi: "đắt" },
  一分钱一分货: { pos: "noun", vi: "tiền nào của nấy" },
  医生: { pos: "noun", vi: "bác sĩ" },
  自己: { pos: "noun", vi: "bản thân" },
  生活: { pos: "noun", vi: "cuộc sống" },
  缺少: { pos: "verb", vi: "thiếu" },
  美: { pos: "adj", vi: "đẹp" },
  阳光: { pos: "noun", vi: "ánh nắng" },
  风雨: { pos: "noun", vi: "gió mưa" },
  幸福: { pos: "noun", vi: "hạnh phúc" },
  标准: { pos: "noun", vi: "tiêu chuẩn" },
  读书: { pos: "verb", vi: "đọc sách, học hành" },
  发现: { pos: "verb", vi: "phát hiện" },
  世界: { pos: "noun", vi: "thế giới" },
  茶: { pos: "noun", vi: "trà" },
  京剧: { pos: "noun", vi: "kinh kịch" },
  北京: { pos: "noun", vi: "Bắc Kinh" },
  四合院: { pos: "noun", vi: "tứ hợp viện" },
  保护地球: { pos: "verb", vi: "bảo vệ Trái Đất" },
  地球母亲: { pos: "noun", vi: "Mẹ Trái Đất" },
  教育: { pos: "verb", vi: "giáo dục" },
  孩子: { pos: "noun", vi: "trẻ em" },
  纸上谈兵: { pos: "verb", vi: "bàn binh trên giấy" },
  体重: { pos: "noun", vi: "cân nặng" },
  节食: { pos: "verb", vi: "ăn kiêng" },
  美好的时刻: { pos: "noun", vi: "khoảnh khắc đẹp nhất" },
  离开: { pos: "verb", vi: "rời đi" },
  抽象艺术: { pos: "noun", vi: "nghệ thuật trừu tượng" },
  艺术: { pos: "noun", vi: "nghệ thuật" },
  人与自然: { pos: "noun", vi: "con người và thiên nhiên" },
  科技: { pos: "noun", vi: "khoa học công nghệ" },
  世界: { pos: "noun", vi: "thế giới" },
  生活的味道: { pos: "noun", vi: "hương vị cuộc sống" },
  路上: { pos: "noun", vi: "trên đường" },
  风景: { pos: "noun", vi: "phong cảnh" },
  满意: { pos: "adj", vi: "hài lòng" },
  误会: { pos: "noun", vi: "hiểu lầm" },

  爱的细节: { pos: "noun", vi: "chi tiết của tình yêu" },
  钥匙: { pos: "noun", vi: "chìa khóa" },
  父母: { pos: "noun", vi: "cha mẹ" },
  选择: { pos: "verb", vi: "lựa chọn" },
  改变: { pos: "verb", vi: "thay đổi" },
  子路: { pos: "noun", vi: "Tử Lộ" },
  背米: { pos: "verb", vi: "cõng gạo" },
  济南: { pos: "noun", vi: "Tế Nam" },
  泉水: { pos: "noun", vi: "nước suối" },
  除夕: { pos: "noun", vi: "đêm giao thừa" },
  由来: { pos: "noun", vi: "nguồn gốc" },
  成语故事: { pos: "noun", vi: "câu chuyện thành ngữ" },
  朝三暮四: { pos: "noun", vi: "triều tam mộ tứ" },
  古今义: { pos: "noun", vi: "nghĩa xưa và nay" },
  鲁迅: { pos: "noun", vi: "Lỗ Tấn" },
  争论: { pos: "verb", vi: "tranh luận" },
  奇迹: { pos: "noun", vi: "kỳ tích" },
  闹钟: { pos: "noun", vi: "đồng hồ báo thức" },
  危害: { pos: "noun", vi: "tác hại" },
  海外用户: { pos: "noun", vi: "người dùng ở nước ngoài" },
  微信: { pos: "noun", vi: "WeChat" },
  锯掉: { pos: "verb", vi: "cưa bỏ" },
  生活: { pos: "noun", vi: "cuộc sống" },
  筐底: { pos: "noun", vi: "đáy giỏ" },
  萝卜饼: { pos: "noun", vi: "bánh củ cải" },
  家乡: { pos: "noun", vi: "quê hương" },
  小人书摊: { pos: "noun", vi: "sạp truyện tranh cũ" },
  汉字叔叔: { pos: "noun", vi: "Chú Hán tự" },
  情缘: { pos: "noun", vi: "duyên tình, duyên gắn bó" },
  阅读: { pos: "verb", vi: "đọc" },
  思考: { pos: "verb", vi: "suy nghĩ" },
  放手: { pos: "verb", vi: "buông tay" },
  支教: { pos: "verb", vi: "đi dạy tình nguyện" },
  行动: { pos: "noun", vi: "hành động" },
  加满水: { pos: "verb", vi: "đổ đầy nước" },
  属于: { pos: "verb", vi: "thuộc về" },
  忙: { pos: "adj", vi: "bận" },
  下棋: { pos: "verb", vi: "chơi cờ" },
  毕业生: { pos: "noun", vi: "sinh viên tốt nghiệp" },
  受欢迎: { pos: "adj", vi: "được yêu thích" },
  培养: { pos: "verb", vi: "bồi dưỡng" },
  对手: { pos: "noun", vi: "đối thủ" },
  竞争: { pos: "noun", vi: "cạnh tranh" },
  市场: { pos: "noun", vi: "thị trường" },
  高效: { pos: "adj", vi: "hiệu quả cao" },
  门槛效应: { pos: "noun", vi: "hiệu ứng ngưỡng cửa" },
  环保: { pos: "noun", vi: "bảo vệ môi trường" },
  身边: { pos: "noun", vi: "xung quanh" },
  以堵治堵: { pos: "verb", vi: "lấy tắc trị tắc" },
  缓解: { pos: "verb", vi: "giảm bớt" },
  交通: { pos: "noun", vi: "giao thông" },
  妙招: { pos: "noun", vi: "mẹo hay" },
  鸟儿: { pos: "noun", vi: "chim chóc" },
  护肤术: { pos: "noun", vi: "bí quyết chăm sóc da" },
  植物: { pos: "noun", vi: "thực vật" },
  出汗: { pos: "verb", vi: "đổ mồ hôi" },
  老舍: { pos: "noun", vi: "Lão Xá" },
  养花: { pos: "verb", vi: "trồng hoa" },

  学习: { pos: "verb", vi: "học" },
  工作: { pos: "noun", vi: "công việc" },
  交流: { pos: "verb", vi: "giao tiếp" },
  文化: { pos: "noun", vi: "văn hóa" },
  方式: { pos: "noun", vi: "cách thức" },
  继续: { pos: "verb", vi: "tiếp tục" },
  认真: { pos: "adj", vi: "nghiêm túc" },
  结果: { pos: "noun", vi: "kết quả" },
  内容: { pos: "noun", vi: "nội dung" },
  观点: { pos: "noun", vi: "quan điểm" },
  判断: { pos: "verb", vi: "phán đoán" },
  调查: { pos: "noun", vi: "điều tra" },
  传统: { pos: "noun", vi: "truyền thống" },
  保护: { pos: "verb", vi: "bảo vệ" },
  计划: { pos: "noun", vi: "kế hoạch" },
  习惯: { pos: "noun", vi: "thói quen" },
  经验: { pos: "noun", vi: "kinh nghiệm" },
  方便: { pos: "adj", vi: "thuận tiện" },
  已经: { pos: "adv", vi: "đã" },
  非常: { pos: "adv", vi: "rất" },
  因为: { pos: "prep", vi: "bởi vì" },
  的: { pos: "particle", vi: "của" },
};

const commonByLevel = {
  HSK3: ["学习", "工作", "交流", "计划", "已经", "非常", "方便", "认真", "结果", "文化"],
  HSK4: ["学习", "工作", "交流", "文化", "方式", "继续", "认真", "结果", "内容", "经验"],
  HSK5: ["观点", "判断", "调查", "传统", "保护", "文化", "方式", "结果", "内容", "竞争", "经验", "交流"],
};

const levelConfigs = {
  HSK3: { counts: { word: 10, phrase: 4, sentence: 4, mixed: 2 }, batches: [[1, 5], [6, 10], [11, 15], [16, 20]] },
  HSK4: { counts: { word: 10, phrase: 5, sentence: 4, mixed: 1 }, batches: [[1, 5], [6, 10], [11, 15], [16, 20]] },
  HSK5: { counts: { word: 12, phrase: 5, sentence: 4, mixed: 1 }, batches: [[1, 6], [7, 12], [13, 18], [19, 24], [25, 30], [31, 36]] },
};

const levels = {
  HSK3: [
    [1, "周末你有什么打算", "Cuối tuần bạn có dự định gì", ["周末", "打算", "学习"]],
    [2, "他什么时候回来", "Khi nào anh ấy quay về", ["时候", "回来", "工作"]],
    [3, "桌子上放着很多饮料", "Trên bàn có rất nhiều đồ uống", ["桌子", "放着", "饮料"]],
    [4, "她总是笑着跟客人说话", "Cô ấy luôn mỉm cười nói chuyện với khách", ["总是", "笑着", "客人"]],
    [5, "我最近越来越胖了", "Dạo này tôi ngày càng béo hơn", ["最近", "越来越", "胖"]],
    [6, "怎么突然找不到了", "Sao đột nhiên lại không tìm thấy nữa", ["突然", "找不到", "东西"]],
    [7, "我跟她都认识五年了", "Tôi và cô ấy quen nhau đã năm năm rồi", ["认识", "五年", "朋友"]],
    [8, "你去哪儿我就去哪儿", "Bạn đi đâu tôi đi đó", ["去哪儿", "回来", "计划"]],
    [9, "她的汉语说得跟中国人一样好", "Tiếng Trung của cô ấy nói hay như người Trung Quốc", ["汉语", "中国人", "一样"]],
    [10, "数学比历史难多了", "Toán khó hơn lịch sử nhiều", ["数学", "历史", "难"]],
    [11, "别忘了把空调关了", "Đừng quên tắt điều hòa", ["忘了", "空调", "关了"]],
    [12, "把重要的东西放在我这儿吧", "Hãy để đồ quan trọng ở chỗ tôi", ["重要", "东西", "放着"]],
    [13, "我是走回来的", "Tôi đi bộ về", ["回来", "现在", "工作"]],
    [14, "你把水果拿过来", "Bạn cầm trái cây mang qua đây", ["水果", "回来", "东西"]],
    [15, "其他都没什么问题", "Những cái khác đều không có vấn đề gì", ["其他", "问题", "结果"]],
    [16, "我现在累得下了班就想睡觉", "Bây giờ tôi mệt đến mức tan làm là chỉ muốn ngủ", ["现在", "累", "睡觉"]],
    [17, "谁都有办法看好你的病", "Ai cũng có cách chữa tốt bệnh của bạn", ["办法", "病", "保护"]],
    [18, "我相信他们会同意的", "Tôi tin rằng họ sẽ đồng ý", ["相信", "同意", "结果"]],
    [19, "你没看出来吗", "Bạn không nhìn ra sao", ["看出来", "问题", "判断"]],
    [20, "我被他影响了", "Tôi đã bị anh ấy ảnh hưởng", ["影响", "朋友", "结果"]],
  ],
  HSK4: [
    [1, "简单的爱情", "Tình yêu giản dị", ["简单", "爱情", "生活"]],
    [2, "真正的朋友", "Người bạn thật sự", ["真正", "朋友", "生活"]],
    [3, "经理对我印象不错", "Người quản lý có ấn tượng tốt với tôi", ["经理", "印象", "工作"]],
    [4, "不要太着急赚钱", "Đừng quá vội kiếm tiền", ["着急", "赚钱", "生活"]],
    [5, "只买对的，不买贵的", "Chỉ mua thứ phù hợp, không mua thứ đắt", ["买对的", "贵", "方式"]],
    [6, "一分钱一分货", "Tiền nào của nấy", ["一分钱一分货", "生活", "判断"]],
    [7, "最好的医生是自己", "Bác sĩ tốt nhất là chính mình", ["医生", "自己", "保护"]],
    [8, "生活中不缺少美", "Trong cuộc sống không thiếu cái đẹp", ["生活", "缺少", "美"]],
    [9, "阳光总在风雨后", "Ánh nắng luôn đến sau mưa gió", ["阳光", "风雨", "生活"]],
    [10, "幸福的标准", "Tiêu chuẩn của hạnh phúc", ["幸福", "标准", "观点"]],
    [11, "读书好，读好书，好读书", "Đọc sách có ích, đọc sách hay, yêu đọc sách", ["读书", "方式", "习惯"]],
    [12, "用心发现世界", "Dùng trái tim để khám phá thế giới", ["发现", "世界", "认真"]],
    [13, "喝着茶看京剧", "Vừa uống trà vừa xem kinh kịch", ["茶", "京剧", "文化"]],
    [14, "保护地球母亲", "Bảo vệ Mẹ Trái Đất", ["保护地球", "地球母亲", "文化"]],
    [15, "教育孩子的艺术", "Nghệ thuật giáo dục trẻ em", ["教育", "孩子", "艺术"]],
    [16, "生活可以更美好", "Cuộc sống có thể tốt đẹp hơn", ["生活", "美", "方式"]],
    [17, "人与自然", "Con người và thiên nhiên", ["人与自然", "保护", "观点"]],
    [18, "科技与世界", "Khoa học công nghệ và thế giới", ["科技", "世界", "文化"]],
    [19, "生活的味道", "Hương vị cuộc sống", ["生活的味道", "生活", "观点"]],
    [20, "路上的风景", "Phong cảnh trên đường", ["路上", "风景", "世界"]],
  ],
  HSK5: [
    [1, "爱的细节", "Những chi tiết của tình yêu", ["爱的细节", "爱情", "生活"]],
    [2, "留串钥匙给父母", "Để lại một chùm chìa khóa cho cha mẹ", ["钥匙", "父母", "生活"]],
    [3, "人生有选择，一切可改变", "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi", ["选择", "改变", "观点"]],
    [4, "子路背米", "Tử Lộ cõng gạo", ["子路", "背米", "传统"]],
    [5, "济南的泉水", "Nước suối ở Tế Nam", ["济南", "泉水", "文化"]],
    [6, "除夕的由来", "Nguồn gốc của đêm giao thừa", ["除夕", "由来", "传统"]],
    [7, "成语故事两则", "Hai câu chuyện thành ngữ", ["成语故事", "传统", "文化"]],
    [8, "朝三暮四的古今义", "Nghĩa xưa và nay của 'triều tam mộ tứ'", ["朝三暮四", "古今义", "观点"]],
    [9, "别样鲁迅", "Một Lỗ Tấn khác", ["鲁迅", "文化", "观点"]],
    [10, "争论的奇迹", "Kỳ tích của tranh luận", ["争论", "奇迹", "交流"]],
    [11, "闹钟的危害", "Tác hại của đồng hồ báo thức", ["闹钟", "危害", "生活"]],
    [12, "海外用户玩儿微信", "Người dùng ở nước ngoài dùng WeChat", ["海外用户", "微信", "交流"]],
    [13, "锯掉生活的筐底", "Cưa bỏ đáy chiếc giỏ của cuộc sống", ["锯掉", "生活", "筐底"]],
    [14, "北京的四合院", "Tứ hợp viện ở Bắc Kinh", ["北京", "四合院", "文化"]],
    [15, "纸上谈兵", "Bàn binh trên giấy", ["纸上谈兵", "判断", "方式"]],
    [16, "体重与节食", "Cân nặng và việc ăn kiêng", ["体重", "节食", "生活"]],
    [17, "在最美好的时刻离开", "Rời đi vào khoảnh khắc đẹp nhất", ["美好的时刻", "离开", "生活"]],
    [18, "抽象艺术美不美", "Nghệ thuật trừu tượng có đẹp không", ["抽象艺术", "艺术", "观点"]],
    [19, "家乡的萝卜饼", "Bánh củ cải quê hương", ["家乡", "萝卜饼", "传统"]],
    [20, "小人书摊", "Sạp truyện tranh cũ", ["小人书摊", "文化", "生活"]],
    [21, "汉字叔叔：一个美国人的汉字情缘", "Chú Hán tự: duyên với chữ Hán của một người Mỹ", ["汉字叔叔", "中国人", "情缘"]],
    [22, "阅读与思考", "Đọc và suy nghĩ", ["阅读", "思考", "观点"]],
    [23, "放手", "Buông tay", ["放手", "爱情", "生活"]],
    [24, "支教行动", "Hoạt động đi dạy tình nguyện", ["支教", "行动", "文化"]],
    [25, "给自己加满水", "Tiếp đầy năng lượng cho bản thân", ["加满水", "自己", "生活"]],
    [26, "你属于哪一种“忙”", "Bạn thuộc kiểu bận nào", ["属于", "忙", "工作"]],
    [27, "下棋", "Chơi cờ", ["下棋", "方式", "思考"]],
    [28, "最受欢迎的毕业生", "Sinh viên tốt nghiệp được yêu thích nhất", ["毕业生", "受欢迎", "工作"]],
    [29, "培养对手", "Bồi dưỡng đối thủ", ["培养", "对手", "竞争"]],
    [30, "竞争让市场更高效", "Cạnh tranh làm thị trường hiệu quả hơn", ["竞争", "市场", "高效"]],
    [31, "登门槛效应", "Hiệu ứng ngưỡng cửa", ["门槛效应", "方式", "判断"]],
    [32, "身边的环保", "Bảo vệ môi trường quanh ta", ["身边", "环保", "保护"]],
    [33, "以堵治堵—缓解交通有妙招", "Lấy tắc trị tắc - có mẹo giảm ùn tắc giao thông", ["以堵治堵", "缓解", "交通"]],
    [34, "鸟儿的护肤术", "Bí quyết chăm sóc da của loài chim", ["鸟儿", "护肤术", "保护"]],
    [35, "植物会出汗", "Thực vật biết đổ mồ hôi", ["植物", "出汗", "自然"]],
    [36, "老舍与养花", "Lão Xá và việc trồng hoa", ["老舍", "养花", "文化"]],
  ],
};

const fallbackTokens = {
  自然: { pos: "noun", vi: "tự nhiên" },
  思考: { pos: "verb", vi: "suy nghĩ" },
};

Object.assign(tokenDict, fallbackTokens);

function escapeJs(value) {
  return JSON.stringify(value);
}

function toPinyin(text, toneType) {
  return pinyin(text, { toneType, type: "array", nonZh: "consecutive" })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueWords(words) {
  const seen = new Set();
  return words.filter((word) => {
    if (seen.has(word.text)) return false;
    seen.add(word.text);
    return true;
  });
}

function tokenToWord(token) {
  const meta = tokenDict[token];
  if (!meta) {
    throw new Error(`Missing token metadata for: ${token}`);
  }
  if (!allowedPos.has(meta.pos)) {
    throw new Error(`Unsupported part of speech for ${token}: ${meta.pos}`);
  }
  return {
    text: token,
    pinyin: toPinyin(token, "none"),
    tone: toPinyin(token, "symbol"),
    pos: meta.pos,
    vi: meta.vi,
  };
}

function lessonWordPool(level, lessonNo, focusTokens, targetCount) {
  const focusWords = focusTokens.map(tokenToWord);
  const commonWords = commonByLevel[level]
    .map(tokenToWord)
    .filter((word) => !focusTokens.includes(word.text));

  const offset = (lessonNo - 1) % commonWords.length;
  const rotated = commonWords.slice(offset).concat(commonWords.slice(0, offset));
  return uniqueWords(focusWords.concat(rotated)).slice(0, targetCount);
}

function makeItem(stage, vi, hanzi, words, source) {
  return {
    stage,
    vi,
    hanzi,
    words,
    source,
    pinyin: words.map((entry) => entry.pinyin).join(" "),
    tone: words.map((entry) => entry.tone).join(" "),
  };
}

function contentWords(words) {
  return words.filter((word) => !["prep", "particle"].includes(word.pos) && !["因为", "的"].includes(word.text));
}

function phraseFrom(words, index) {
  const usable = contentWords(words);
  const a = usable[index % usable.length];
  const b = usable[(index + 1) % usable.length];
  return {
    hanzi: `${a.text}${b.text}`,
    vi: `${a.vi} và ${b.vi}`,
    words: [a, b],
  };
}

function sentenceFrom(titleZh, titleVi, words, index) {
  const usable = contentWords(words);
  const a = usable[index % usable.length];
  const b = usable[(index + 1) % usable.length];
  const c = usable[(index + 2) % usable.length];
  const templates = [
    { hanzi: `${a.text}${b.text}。`, vi: `${a.vi} ${b.vi}.`, words: [a, b] },
    { hanzi: `${a.text}和${b.text}有关。`, vi: `${a.vi} có liên quan đến ${b.vi}.`, words: [a, b] },
    { hanzi: `${a.text}${b.text}${c.text}。`, vi: `${a.vi}, ${b.vi}, ${c.vi}.`, words: [a, b, c] },
    { hanzi: `${b.text}${c.text}很重要。`, vi: `${b.vi} và ${c.vi} rất quan trọng.`, words: [b, c, tokenToWord("重要")] },
  ];
  const chosen = templates[index % templates.length];
  return { hanzi: chosen.hanzi, vi: chosen.vi, words: uniqueWords(chosen.words) };
}

function mixedFrom(titleZh, titleVi, words, index) {
  const usable = contentWords(words);
  const a = usable[index % usable.length];
  const b = usable[(index + 1) % usable.length];
  return {
    hanzi: `${a.text}${b.text}${tokenToWord("观点").text}。`,
    vi: `Quan điểm về ${a.vi} và ${b.vi}.`,
    words: uniqueWords([a, b, tokenToWord("观点")]),
  };
}

function buildLesson(level, lessonMeta) {
  const [no, titleZh, titleVi, focusTokens] = lessonMeta;
  const counts = levelConfigs[level].counts;
  const source = `${level} generated prototype - Lesson ${no}`;
  const pool = lessonWordPool(level, no, focusTokens, counts.word);
  const items = [];

  for (const word of pool) {
    items.push(makeItem("word", word.vi, word.text, [word], source));
  }
  for (let i = 0; i < counts.phrase; i += 1) {
    const phrase = phraseFrom(pool, i);
    items.push(makeItem("phrase", phrase.vi, phrase.hanzi, phrase.words, source));
  }
  for (let i = 0; i < counts.sentence; i += 1) {
    const sentence = sentenceFrom(titleZh, titleVi, pool, i);
    items.push(makeItem("sentence", sentence.vi, sentence.hanzi, sentence.words, source));
  }
  for (let i = 0; i < counts.mixed; i += 1) {
    const mixed = mixedFrom(titleZh, titleVi, pool, i);
    items.push(makeItem("mixed", mixed.vi, mixed.hanzi, mixed.words, source));
  }

  return {
    id: `${level.toLowerCase()}-l${no}`,
    no,
    titleZh,
    titleVi,
    items,
  };
}

function writeLessonBatch(level, start, end, lessons) {
  const selected = lessons.filter((lesson) => lesson.no >= start && lesson.no <= end);
  const fileName = `lesson-${level.toLowerCase()}-batch-${start}-${end}.js`;
  const outPath = path.join(root, "public", fileName);

  const body = `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  root.lessonContent[data.level] = root.lessonContent[data.level] || {};
  for (const lesson of data.lessons) {
    root.lessonContent[data.level][lesson.id] = {
      id: lesson.id,
      no: lesson.no,
      title: lesson.titleZh,
      titleZh: lesson.titleZh,
      titleVi: lesson.titleVi,
      items: lesson.items,
    };
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify({ level, lessons: selected }, null, 2)};
});
`;
  fs.writeFileSync(outPath, body, "utf8");
}

function writeTest(level, start, end, lessons) {
  const selected = lessons.filter((lesson) => lesson.no >= start && lesson.no <= end);
  const counts = levelConfigs[level].counts;
  const expectedStages = [
    ...Array(counts.word).fill("word"),
    ...Array(counts.phrase).fill("phrase"),
    ...Array(counts.sentence).fill("sentence"),
    ...Array(counts.mixed).fill("mixed"),
  ];
  const totalItems = expectedStages.length;
  const ids = selected.map((lesson) => lesson.id);
  const fileName = `tests/lesson-${level.toLowerCase()}-batch-${start}-${end}.test.js`;
  const outPath = path.join(root, fileName);

  const body = `const test = require('node:test');
const assert = require('node:assert/strict');

test('${level} lessons ${start}-${end} content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../public/lesson-${level.toLowerCase()}-batch-${start}-${end}.js');

  assert.equal(batch.level, '${level}');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, ${selected.length});
  assert.deepEqual(batch.lessons.map((lesson) => lesson.id), ${JSON.stringify(ids)});

  for (const lesson of batch.lessons) {
    assert.equal(typeof lesson.titleZh, 'string');
    assert.equal(typeof lesson.titleVi, 'string');
    assert.equal(Array.isArray(lesson.items), true);
    assert.equal(lesson.items.length, ${totalItems});
    assert.ok(lesson.titleZh.length > 0);
    assert.ok(lesson.titleVi.length > 0);
    assert.deepEqual(lesson.items.map((item) => item.stage), ${JSON.stringify(expectedStages)});
  }
});
`;
  fs.writeFileSync(outPath, body, "utf8");
}

function writeSummaryTest(allGenerated) {
  const outPath = path.join(root, "tests", "hsk345-generated-content.test.js");
  const levelCounts = Object.fromEntries(Object.entries(levels).map(([level, lessonList]) => [level, lessonList.length]));

  const body = `const test = require('node:test');
const assert = require('node:assert/strict');

const files = [
  'lesson-hsk3-batch-1-5.js',
  'lesson-hsk3-batch-6-10.js',
  'lesson-hsk3-batch-11-15.js',
  'lesson-hsk3-batch-16-20.js',
  'lesson-hsk4-batch-1-5.js',
  'lesson-hsk4-batch-6-10.js',
  'lesson-hsk4-batch-11-15.js',
  'lesson-hsk4-batch-16-20.js',
  'lesson-hsk5-batch-1-6.js',
  'lesson-hsk5-batch-7-12.js',
  'lesson-hsk5-batch-13-18.js',
  'lesson-hsk5-batch-19-24.js',
  'lesson-hsk5-batch-25-30.js',
  'lesson-hsk5-batch-31-36.js',
];

function allLessons() {
  return files.flatMap((file) => require('../public/' + file).lessons);
}

test('generated HSK3/4/5 packs cover every approved lesson count', async () => {
  const grouped = {};
  for (const lesson of allLessons()) {
    const level = lesson.id.startsWith('hsk3') ? 'HSK3' : lesson.id.startsWith('hsk4') ? 'HSK4' : 'HSK5';
    grouped[level] = grouped[level] || [];
    grouped[level].push(lesson);
  }

  assert.deepEqual(
    Object.fromEntries(Object.entries(grouped).map(([level, lessons]) => [level, lessons.length])),
    ${JSON.stringify(levelCounts)},
  );
});

test('generated HSK3/4/5 content only uses supported beginner teaching labels', async () => {
  for (const lesson of allLessons()) {
    for (const item of lesson.items) {
      for (const word of item.words) {
        assert.ok(${JSON.stringify(Array.from(allowedPos))}.includes(word.pos), \`\${lesson.id} has unsupported pos: \${word.pos}\`);
      }
    }
  }
});
`;
  fs.writeFileSync(outPath, body, "utf8");
}

function writeProductionReport() {
  const outPath = path.join(root, "docs", "hsk345-production-report.md");
  const lines = [
    "# HSK3/4/5 Production Report",
    "",
    "This report records the approved V2 production rule for lesson generation.",
    "",
    "- HSK3: 10 words / 4 phrases / 4 sentences / 2 mixed review items",
    "- HSK4: 10 words / 5 phrases / 4 sentences / 1 mixed review item",
    "- HSK5: 12 words / 5 phrases / 4 sentences / 1 mixed review item",
    "",
    "Why this structure:",
    "- Keep progression from small unit to larger unit.",
    "- Preserve the user's approved lesson rhythm: word -> phrase -> sentence -> mixed review.",
    "- Keep all displayed grammar labels inside the six beginner-friendly categories only.",
    "",
    "Current generation note:",
    "- The lesson tree and stage counts are now fully generated for HSK3/4/5.",
    "- Vietnamese wording should still be audited lesson-by-lesson against the source textbooks before final production release.",
  ];
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
}

function main() {
  const allGenerated = {};
  for (const [level, lessonMeta] of Object.entries(levels)) {
    allGenerated[level] = lessonMeta.map((meta) => buildLesson(level, meta));
    for (const [start, end] of levelConfigs[level].batches) {
      writeLessonBatch(level, start, end, allGenerated[level]);
      writeTest(level, start, end, allGenerated[level]);
    }
  }
  writeSummaryTest(allGenerated);
  writeProductionReport();
}

main();
