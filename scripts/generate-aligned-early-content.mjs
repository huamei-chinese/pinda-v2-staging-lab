import fs from "node:fs";
import path from "node:path";
import { pinyin } from "pinyin-pro";

const root = process.cwd();
const sourceNote = "Textbook alignment candidate - needs human PDF/OCR verification";

const levels = {
  HSK3: [
    {
      id: "hsk3-l1",
      no: 1,
      titleZh: "周末你有什么打算",
      titleVi: "Cuối tuần bạn có dự định gì",
      words: [
        ["周末", "noun", "cuối tuần"],
        ["打算", "verb", "dự định, định"],
        ["玩儿", "verb", "chơi"],
        ["电影", "noun", "phim"],
        ["饮料", "noun", "đồ uống"],
        ["啤酒", "noun", "bia"],
        ["参加", "verb", "tham gia"],
        ["带", "verb", "mang theo"],
        ["作业", "noun", "bài tập"],
        ["复习", "verb", "ôn tập"],
      ],
      phrases: [
        ["这个周末", "cuối tuần này", ["周末"]],
        ["有什么打算", "có dự định gì", ["打算"]],
        ["去看电影", "đi xem phim", ["电影"]],
        ["带点儿饮料", "mang một ít đồ uống", ["带", "饮料"]],
      ],
      sentences: [
        ["周末你有什么打算", "Cuối tuần bạn có dự định gì?", ["周末", "打算"]],
        ["我打算去看电影", "Tôi định đi xem phim.", ["打算", "电影"]],
        ["你带点儿饮料来吧", "Bạn mang một ít đồ uống đến nhé.", ["带", "饮料"]],
        ["我写完作业以后复习汉语", "Sau khi làm xong bài tập, tôi ôn tiếng Trung.", ["作业", "复习"]],
      ],
      mixed: [
        ["我这个周末想去看电影", "Cuối tuần này tôi muốn đi xem phim.", ["周末", "电影"]],
        ["你周末有什么打算", "Cuối tuần bạn có dự định gì?", ["周末", "打算"]],
      ],
    },
    {
      id: "hsk3-l2",
      no: 2,
      titleZh: "他什么时候回来",
      titleVi: "Khi nào anh ấy quay về",
      words: [
        ["时候", "noun", "lúc, thời điểm"],
        ["回来", "verb", "quay lại, trở về"],
        ["机场", "noun", "sân bay"],
        ["接", "verb", "đón"],
        ["等", "verb", "đợi"],
        ["迟到", "verb", "đến muộn"],
        ["会议", "noun", "cuộc họp"],
        ["结束", "verb", "kết thúc"],
        ["刚才", "adv", "vừa nãy"],
        ["一会儿", "noun", "một lát"],
      ],
      phrases: [
        ["什么时候回来", "khi nào quay lại", ["时候", "回来"]],
        ["去机场接人", "đi sân bay đón người", ["机场", "接"]],
        ["会议结束以后", "sau khi cuộc họp kết thúc", ["会议", "结束"]],
        ["等一会儿", "đợi một lát", ["等", "一会儿"]],
      ],
      sentences: [
        ["他什么时候回来", "Khi nào anh ấy quay lại?", ["时候", "回来"]],
        ["我去机场接他", "Tôi đi sân bay đón anh ấy.", ["机场", "接"]],
        ["会议结束以后他就回来", "Sau khi cuộc họp kết thúc, anh ấy sẽ quay lại.", ["会议", "结束", "回来"]],
        ["刚才他给我打电话了", "Vừa nãy anh ấy gọi điện cho tôi.", ["刚才"]],
      ],
      mixed: [
        ["他什么时候回来", "Khi nào anh ấy quay lại?", ["时候", "回来"]],
        ["我在机场等你", "Tôi đang đợi bạn ở sân bay.", ["机场", "等"]],
      ],
    },
    {
      id: "hsk3-l3",
      no: 3,
      titleZh: "桌子上放着很多饮料",
      titleVi: "Trên bàn có rất nhiều đồ uống",
      words: [
        ["桌子", "noun", "cái bàn"],
        ["上", "noun", "phía trên, trên"],
        ["放", "verb", "đặt, để"],
        ["着", "particle", "trợ từ chỉ trạng thái tiếp diễn"],
        ["饮料", "noun", "đồ uống"],
        ["杯子", "noun", "cái cốc"],
        ["牛奶", "noun", "sữa bò"],
        ["水果", "noun", "trái cây"],
        ["旁边", "noun", "bên cạnh"],
        ["干净", "adj", "sạch sẽ"],
      ],
      phrases: [
        ["桌子上", "trên bàn", ["桌子", "上"]],
        ["放着饮料", "đang để đồ uống", ["放", "着", "饮料"]],
        ["很多杯子", "rất nhiều cốc", ["杯子"]],
        ["在旁边", "ở bên cạnh", ["旁边"]],
      ],
      sentences: [
        ["桌子上放着很多饮料", "Trên bàn có để rất nhiều đồ uống.", ["桌子", "上", "放", "着", "饮料"]],
        ["杯子在牛奶旁边", "Cái cốc ở bên cạnh sữa.", ["杯子", "牛奶", "旁边"]],
        ["这里有水果和饮料", "Ở đây có trái cây và đồ uống.", ["水果", "饮料"]],
        ["桌子很干净", "Cái bàn rất sạch.", ["桌子", "干净"]],
      ],
      mixed: [
        ["桌子上放着很多饮料", "Trên bàn có để rất nhiều đồ uống.", ["桌子", "放", "着", "饮料"]],
        ["杯子在牛奶旁边", "Cái cốc ở bên cạnh sữa.", ["杯子", "牛奶", "旁边"]],
      ],
    },
    {
      id: "hsk3-l4",
      no: 4,
      titleZh: "她总是笑着跟客人说话",
      titleVi: "Cô ấy luôn mỉm cười nói chuyện với khách",
      words: [
        ["总是", "adv", "luôn luôn"],
        ["笑", "verb", "cười"],
        ["着", "particle", "trợ từ chỉ trạng thái"],
        ["跟", "prep", "với, cùng"],
        ["客人", "noun", "khách"],
        ["说话", "verb", "nói chuyện"],
        ["服务", "verb", "phục vụ"],
        ["热情", "adj", "nhiệt tình"],
        ["认真", "adj", "nghiêm túc, cẩn thận"],
        ["经理", "noun", "quản lý, giám đốc"],
      ],
      phrases: [
        ["总是笑着", "luôn mỉm cười", ["总是", "笑", "着"]],
        ["跟客人说话", "nói chuyện với khách", ["跟", "客人", "说话"]],
        ["服务很热情", "phục vụ rất nhiệt tình", ["服务", "热情"]],
        ["工作很认真", "làm việc rất nghiêm túc", ["认真"]],
      ],
      sentences: [
        ["她总是笑着跟客人说话", "Cô ấy luôn mỉm cười nói chuyện với khách.", ["总是", "笑", "着", "跟", "客人", "说话"]],
        ["这个服务员很热情", "Nhân viên phục vụ này rất nhiệt tình.", ["服务", "热情"]],
        ["经理说她工作很认真", "Quản lý nói cô ấy làm việc rất nghiêm túc.", ["经理", "认真"]],
        ["客人喜欢跟她说话", "Khách thích nói chuyện với cô ấy.", ["客人", "跟", "说话"]],
      ],
      mixed: [
        ["她总是笑着跟客人说话", "Cô ấy luôn mỉm cười nói chuyện với khách.", ["总是", "笑", "着", "客人"]],
        ["笑着说话", "vừa cười vừa nói chuyện", ["笑", "着", "说话"]],
      ],
    },
    {
      id: "hsk3-l5",
      no: 5,
      titleZh: "我最近越来越胖了",
      titleVi: "Dạo này tôi ngày càng béo hơn",
      words: [
        ["最近", "adv", "gần đây, dạo này"],
        ["越来越", "adv", "càng ngày càng"],
        ["胖", "adj", "béo, mập"],
        ["运动", "verb", "vận động, tập thể thao"],
        ["锻炼", "verb", "rèn luyện, tập luyện"],
        ["健康", "adj", "khỏe mạnh"],
        ["甜", "adj", "ngọt"],
        ["瘦", "adj", "gầy"],
        ["习惯", "noun", "thói quen"],
        ["米饭", "noun", "cơm"],
      ],
      phrases: [
        ["最近很忙", "dạo này rất bận", ["最近"]],
        ["越来越胖", "càng ngày càng béo", ["越来越", "胖"]],
        ["多运动", "vận động nhiều hơn", ["运动"]],
        ["健康的习惯", "thói quen lành mạnh", ["健康", "习惯"]],
      ],
      sentences: [
        ["我最近越来越胖了", "Dạo này tôi càng ngày càng béo.", ["最近", "越来越", "胖"]],
        ["你应该多运动", "Bạn nên vận động nhiều hơn.", ["运动"]],
        ["我晚上不想吃太多米饭", "Buổi tối tôi không muốn ăn quá nhiều cơm.", ["米饭"]],
        ["健康的习惯很重要", "Thói quen lành mạnh rất quan trọng.", ["健康", "习惯"]],
      ],
      mixed: [
        ["我最近越来越胖了", "Dạo này tôi càng ngày càng béo.", ["最近", "越来越", "胖"]],
        ["你应该多运动", "Bạn nên vận động nhiều hơn.", ["运动"]],
      ],
    },
  ],
  HSK4: [
    {
      id: "hsk4-l1",
      no: 1,
      titleZh: "简单的爱情",
      titleVi: "Tình yêu giản dị",
      words: [
        ["简单", "adj", "đơn giản"],
        ["爱情", "noun", "tình yêu"],
        ["浪漫", "adj", "lãng mạn"],
        ["感动", "verb", "cảm động, làm cảm động"],
        ["表示", "verb", "bày tỏ, biểu thị"],
        ["陪", "verb", "ở bên, đi cùng"],
        ["关心", "verb", "quan tâm"],
        ["信任", "verb", "tin tưởng"],
        ["共同", "adj", "chung, cùng nhau"],
        ["幸福", "noun", "hạnh phúc"],
      ],
      phrases: [
        ["简单的爱情", "tình yêu giản dị", ["简单", "爱情"]],
        ["表示关心", "bày tỏ sự quan tâm", ["表示", "关心"]],
        ["陪他一起", "ở bên anh ấy", ["陪"]],
        ["互相信任", "tin tưởng lẫn nhau", ["信任"]],
        ["共同生活", "cùng nhau sống", ["共同"]],
      ],
      sentences: [
        ["爱情可以很简单", "Tình yêu có thể rất giản dị.", ["爱情", "简单"]],
        ["他每天都关心她", "Anh ấy quan tâm cô ấy mỗi ngày.", ["关心"]],
        ["真正的爱情需要信任", "Tình yêu thật sự cần sự tin tưởng.", ["爱情", "信任"]],
        ["他们一起面对生活中的问题", "Họ cùng nhau đối mặt với những vấn đề trong cuộc sống.", ["共同"]],
      ],
      mixed: [["爱情可以很简单", "Tình yêu có thể rất giản dị.", ["爱情", "简单"]]],
    },
    {
      id: "hsk4-l2",
      no: 2,
      titleZh: "真正的朋友",
      titleVi: "Người bạn thật sự",
      words: [
        ["真正", "adj", "thật sự"],
        ["朋友", "noun", "bạn bè"],
        ["帮助", "verb", "giúp đỡ"],
        ["诚实", "adj", "thành thật"],
        ["理解", "verb", "hiểu, thông cảm"],
        ["鼓励", "verb", "động viên"],
        ["困难", "noun", "khó khăn"],
        ["分享", "verb", "chia sẻ"],
        ["联系", "verb", "liên lạc"],
        ["友谊", "noun", "tình bạn"],
      ],
      phrases: [
        ["真正的朋友", "người bạn thật sự", ["真正", "朋友"]],
        ["互相帮助", "giúp đỡ lẫn nhau", ["帮助"]],
        ["遇到困难", "gặp khó khăn", ["困难"]],
        ["分享快乐", "chia sẻ niềm vui", ["分享"]],
        ["保持联系", "giữ liên lạc", ["联系"]],
      ],
      sentences: [
        ["真正的朋友会互相帮助", "Người bạn thật sự sẽ giúp đỡ lẫn nhau.", ["真正", "朋友", "帮助"]],
        ["朋友之间应该诚实", "Giữa bạn bè nên thành thật.", ["朋友", "诚实"]],
        ["他遇到困难时我鼓励了他", "Khi anh ấy gặp khó khăn, tôi đã động viên anh ấy.", ["困难", "鼓励"]],
        ["即使很忙我们也经常联系", "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc.", ["联系"]],
      ],
      mixed: [["真正的朋友会互相帮助", "Người bạn thật sự sẽ giúp đỡ lẫn nhau.", ["真正", "朋友", "帮助"]]],
    },
    {
      id: "hsk4-l3",
      no: 3,
      titleZh: "经理对我印象不错",
      titleVi: "Người quản lý có ấn tượng tốt với tôi",
      words: [
        ["经理", "noun", "quản lý, giám đốc"],
        ["印象", "noun", "ấn tượng"],
        ["面试", "noun", "phỏng vấn"],
        ["紧张", "adj", "căng thẳng"],
        ["准备", "verb", "chuẩn bị"],
        ["经验", "noun", "kinh nghiệm"],
        ["负责", "verb", "phụ trách, có trách nhiệm"],
        ["能力", "noun", "năng lực"],
        ["表现", "noun", "biểu hiện, thể hiện"],
        ["机会", "noun", "cơ hội"],
      ],
      phrases: [
        ["留下印象", "để lại ấn tượng", ["印象"]],
        ["准备面试", "chuẩn bị phỏng vấn", ["准备", "面试"]],
        ["工作经验", "kinh nghiệm làm việc", ["经验"]],
        ["认真负责", "nghiêm túc và có trách nhiệm", ["负责"]],
        ["表现不错", "thể hiện khá tốt", ["表现"]],
      ],
      sentences: [
        ["经理对我的印象不错", "Người quản lý có ấn tượng tốt với tôi.", ["经理", "印象"]],
        ["面试前我有点儿紧张", "Trước buổi phỏng vấn tôi hơi căng thẳng.", ["面试", "紧张"]],
        ["他工作认真也很负责", "Anh ấy làm việc nghiêm túc và rất có trách nhiệm.", ["负责"]],
        ["这次面试给了我一个好机会", "Buổi phỏng vấn lần này cho tôi một cơ hội tốt.", ["面试", "机会"]],
      ],
      mixed: [["经理对我的印象不错", "Người quản lý có ấn tượng tốt với tôi.", ["经理", "印象"]]],
    },
    {
      id: "hsk4-l4",
      no: 4,
      titleZh: "不要太着急赚钱",
      titleVi: "Đừng quá vội kiếm tiền",
      words: [
        ["着急", "adj", "sốt ruột, vội vàng"],
        ["赚钱", "verb", "kiếm tiền"],
        ["成功", "noun", "thành công"],
        ["重要", "adj", "quan trọng"],
        ["努力", "verb", "nỗ lực"],
        ["机会", "noun", "cơ hội"],
        ["计划", "noun", "kế hoạch"],
        ["经验", "noun", "kinh nghiệm"],
        ["压力", "noun", "áp lực"],
        ["冷静", "adj", "bình tĩnh"],
      ],
      phrases: [
        ["太着急", "quá vội vàng", ["着急"]],
        ["急着赚钱", "vội kiếm tiền", ["赚钱"]],
        ["积累经验", "tích lũy kinh nghiệm", ["经验"]],
        ["制定计划", "lập kế hoạch", ["计划"]],
        ["保持冷静", "giữ bình tĩnh", ["冷静"]],
      ],
      sentences: [
        ["年轻人不要太着急赚钱", "Người trẻ đừng quá vội kiếm tiền.", ["着急", "赚钱"]],
        ["成功需要时间和努力", "Thành công cần thời gian và nỗ lực.", ["成功", "努力"]],
        ["没有经验时压力会比较大", "Khi chưa có kinh nghiệm, áp lực sẽ khá lớn.", ["经验", "压力"]],
        ["做事以前最好先有计划", "Trước khi làm việc gì, tốt nhất nên có kế hoạch.", ["计划"]],
      ],
      mixed: [["年轻人不要太着急赚钱", "Người trẻ đừng quá vội kiếm tiền.", ["着急", "赚钱"]]],
    },
    {
      id: "hsk4-l5",
      no: 5,
      titleZh: "只买对的，不买贵的",
      titleVi: "Chỉ mua thứ phù hợp, không mua thứ đắt",
      words: [
        ["买", "verb", "mua"],
        ["贵", "adj", "đắt"],
        ["便宜", "adj", "rẻ"],
        ["合适", "adj", "phù hợp"],
        ["质量", "noun", "chất lượng"],
        ["价格", "noun", "giá cả"],
        ["选择", "verb", "lựa chọn"],
        ["比较", "verb", "so sánh"],
        ["浪费", "verb", "lãng phí"],
        ["实用", "adj", "thiết thực, hữu dụng"],
      ],
      phrases: [
        ["买对的", "mua thứ phù hợp", ["买"]],
        ["不买贵的", "không mua thứ đắt", ["贵"]],
        ["价格合适", "giá cả phù hợp", ["价格", "合适"]],
        ["质量不错", "chất lượng khá tốt", ["质量"]],
        ["比较一下", "so sánh thử", ["比较"]],
      ],
      sentences: [
        ["买东西不能只看价格", "Mua đồ không thể chỉ nhìn vào giá.", ["买", "价格"]],
        ["贵的不一定最合适", "Đắt chưa chắc là phù hợp nhất.", ["贵", "合适"]],
        ["我想先比较一下质量", "Tôi muốn so sánh chất lượng trước.", ["比较", "质量"]],
        ["只买对的才不会浪费钱", "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.", ["买", "浪费"]],
      ],
      mixed: [["只买对的才不会浪费钱", "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.", ["买", "浪费"]]],
    },
  ],
  HSK5: [
    {
      id: "hsk5-l1",
      no: 1,
      titleZh: "爱的细节",
      titleVi: "Những chi tiết của tình yêu",
      words: [
        ["爱情", "noun", "tình yêu"],
        ["细节", "noun", "chi tiết"],
        ["生活", "noun", "cuộc sống"],
        ["关心", "verb", "quan tâm"],
        ["照顾", "verb", "chăm sóc"],
        ["表达", "verb", "bày tỏ"],
        ["珍惜", "verb", "trân trọng"],
        ["陪", "verb", "ở bên, đi cùng"],
        ["责任", "noun", "trách nhiệm"],
        ["幸福", "adj", "hạnh phúc"],
        ["真正", "adj", "thật sự"],
        ["普通", "adj", "bình thường"],
      ],
      phrases: [
        ["爱的细节", "chi tiết của tình yêu", ["爱情", "细节"]],
        ["关心家人", "quan tâm người nhà", ["关心"]],
        ["表达感谢", "bày tỏ lời cảm ơn", ["表达"]],
        ["珍惜生活", "trân trọng cuộc sống", ["珍惜", "生活"]],
        ["真正的幸福", "hạnh phúc thật sự", ["真正", "幸福"]],
      ],
      sentences: [
        ["爱常常藏在很小的细节里", "Tình yêu thường ẩn trong những chi tiết rất nhỏ.", ["细节"]],
        ["他每天照顾父母从不觉得麻烦", "Anh ấy chăm sóc cha mẹ mỗi ngày và không hề thấy phiền.", ["照顾"]],
        ["一句普通的话也可以表达真正的关心", "Một câu nói bình thường cũng có thể thể hiện sự quan tâm thật lòng.", ["普通", "表达", "真正", "关心"]],
        ["懂得珍惜的人更容易感到幸福", "Người biết trân trọng thì dễ cảm thấy hạnh phúc hơn.", ["珍惜", "幸福"]],
      ],
      mixed: [["细节照顾珍惜幸福", "Chi tiết, chăm sóc, trân trọng và hạnh phúc.", ["细节", "照顾", "珍惜", "幸福"]]],
    },
    {
      id: "hsk5-l2",
      no: 2,
      titleZh: "留串钥匙给父母",
      titleVi: "Để lại một chùm chìa khóa cho cha mẹ",
      words: [
        ["钥匙", "noun", "chìa khóa"],
        ["父母", "noun", "cha mẹ"],
        ["老人", "noun", "người già"],
        ["邻居", "noun", "hàng xóm"],
        ["家门", "noun", "cửa nhà"],
        ["安全", "adj", "an toàn"],
        ["方便", "adj", "thuận tiện"],
        ["担心", "verb", "lo lắng"],
        ["联系", "verb", "liên lạc"],
        ["留下", "verb", "để lại"],
        ["照顾", "verb", "chăm sóc"],
        ["习惯", "noun", "thói quen"],
      ],
      phrases: [
        ["留一串钥匙", "để lại một chùm chìa khóa", ["留下", "钥匙"]],
        ["方便父母", "tiện cho cha mẹ", ["方便", "父母"]],
        ["联系邻居", "liên lạc với hàng xóm", ["联系", "邻居"]],
        ["担心安全", "lo về an toàn", ["担心", "安全"]],
        ["照顾老人", "chăm sóc người già", ["照顾", "老人"]],
      ],
      sentences: [
        ["我给父母留了一串钥匙", "Tôi để lại cho cha mẹ một chùm chìa khóa.", ["父母", "留下", "钥匙"]],
        ["这样做是为了方便他们进门", "Làm vậy là để họ vào nhà thuận tiện hơn.", ["方便", "家门"]],
        ["如果老人身体不舒服可以马上联系邻居", "Nếu người già thấy không khỏe, có thể liên lạc ngay với hàng xóm.", ["老人", "联系", "邻居"]],
        ["很多关心最后都会变成生活里的习惯", "Nhiều sự quan tâm cuối cùng sẽ trở thành thói quen trong đời sống.", ["关心", "生活", "习惯"]],
      ],
      mixed: [["方便安全担心联系", "Thuận tiện, an toàn, lo lắng và liên lạc.", ["方便", "安全", "担心", "联系"]]],
    },
    {
      id: "hsk5-l3",
      no: 3,
      titleZh: "人生有选择，一切可改变",
      titleVi: "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi",
      words: [
        ["人生", "noun", "cuộc đời"],
        ["选择", "verb", "lựa chọn"],
        ["改变", "verb", "thay đổi"],
        ["机会", "noun", "cơ hội"],
        ["决定", "verb", "quyết định"],
        ["态度", "noun", "thái độ"],
        ["努力", "verb", "nỗ lực"],
        ["坚持", "verb", "kiên trì"],
        ["失败", "verb", "thất bại"],
        ["成功", "verb", "thành công"],
        ["勇敢", "adj", "dũng cảm"],
        ["适合", "adj", "phù hợp"],
      ],
      phrases: [
        ["人生的选择", "lựa chọn trong cuộc đời", ["人生", "选择"]],
        ["改变命运", "thay đổi số phận", ["改变"]],
        ["抓住机会", "nắm bắt cơ hội", ["机会"]],
        ["坚持努力", "kiên trì nỗ lực", ["坚持", "努力"]],
        ["勇敢决定", "quyết định dũng cảm", ["勇敢", "决定"]],
      ],
      sentences: [
        ["人生有很多选择", "Cuộc đời có rất nhiều lựa chọn.", ["人生", "选择"]],
        ["一次决定可能会改变一个人的方向", "Một quyết định có thể thay đổi hướng đi của một người.", ["决定", "改变"]],
        ["失败并不可怕可怕的是不再努力", "Thất bại không đáng sợ, điều đáng sợ là không còn cố gắng.", ["失败", "努力"]],
        ["只要坚持就可能找到适合自己的路", "Chỉ cần kiên trì, ta có thể tìm được con đường phù hợp với mình.", ["坚持", "适合"]],
      ],
      mixed: [["选择改变机会坚持", "Lựa chọn, thay đổi, cơ hội và kiên trì.", ["选择", "改变", "机会", "坚持"]]],
    },
    {
      id: "hsk5-l4",
      no: 4,
      titleZh: "子路背米",
      titleVi: "Tử Lộ cõng gạo",
      words: [
        ["子路", "noun", "Tử Lộ"],
        ["孔子", "noun", "Khổng Tử"],
        ["父母", "noun", "cha mẹ"],
        ["米", "noun", "gạo"],
        ["传统", "noun", "truyền thống"],
        ["背", "verb", "cõng, vác"],
        ["照顾", "verb", "chăm sóc"],
        ["尊敬", "verb", "kính trọng"],
        ["感恩", "verb", "biết ơn"],
        ["孝顺", "adj", "hiếu thảo"],
        ["贫穷", "adj", "nghèo khó"],
        ["辛苦", "adj", "vất vả"],
      ],
      phrases: [
        ["背米回家", "cõng gạo về nhà", ["背", "米"]],
        ["照顾父母", "chăm sóc cha mẹ", ["照顾", "父母"]],
        ["尊敬老人", "kính trọng người già", ["尊敬", "老人"]],
        ["传统故事", "câu chuyện truyền thống", ["传统"]],
        ["懂得感恩", "biết ơn", ["感恩"]],
      ],
      sentences: [
        ["子路年轻时家里很贫穷", "Khi còn trẻ, nhà Tử Lộ rất nghèo.", ["子路", "贫穷"]],
        ["他常常背米回家照顾父母", "Ông thường cõng gạo về nhà chăm sóc cha mẹ.", ["背", "米", "照顾", "父母"]],
        ["这个故事表现了中国传统中的孝顺", "Câu chuyện này thể hiện lòng hiếu thảo trong truyền thống Trung Quốc.", ["传统", "孝顺"]],
        ["真正懂得感恩的人不会忘记父母的辛苦", "Người thật sự biết ơn sẽ không quên sự vất vả của cha mẹ.", ["真正", "感恩", "父母", "辛苦"]],
      ],
      mixed: [["传统孝顺照顾感恩", "Truyền thống, hiếu thảo, chăm sóc và biết ơn.", ["传统", "孝顺", "照顾", "感恩"]]],
    },
    {
      id: "hsk5-l5",
      no: 5,
      titleZh: "济南的泉水",
      titleVi: "Nước suối ở Tế Nam",
      words: [
        ["济南", "noun", "Tế Nam"],
        ["泉水", "noun", "nước suối"],
        ["城市", "noun", "thành phố"],
        ["风景", "noun", "phong cảnh"],
        ["游客", "noun", "du khách"],
        ["自然", "noun", "thiên nhiên"],
        ["环境", "noun", "môi trường"],
        ["文化", "noun", "văn hóa"],
        ["形成", "verb", "hình thành"],
        ["保护", "verb", "bảo vệ"],
        ["著名", "adj", "nổi tiếng"],
        ["清澈", "adj", "trong vắt"],
      ],
      phrases: [
        ["济南的泉水", "suối nước ở Tế Nam", ["济南", "泉水"]],
        ["清澈的泉水", "nước suối trong vắt", ["清澈", "泉水"]],
        ["著名城市", "thành phố nổi tiếng", ["著名", "城市"]],
        ["保护环境", "bảo vệ môi trường", ["保护", "环境"]],
        ["自然风景", "phong cảnh thiên nhiên", ["自然", "风景"]],
      ],
      sentences: [
        ["济南因为泉水而著名", "Tế Nam nổi tiếng nhờ các dòng suối.", ["济南", "泉水", "著名"]],
        ["清澈的泉水吸引了很多游客", "Nước suối trong vắt thu hút rất nhiều du khách.", ["清澈", "泉水", "游客"]],
        ["泉水不仅是自然风景也是城市文化的一部分", "Suối nước không chỉ là cảnh thiên nhiên mà còn là một phần văn hóa đô thị.", ["泉水", "自然", "风景", "城市", "文化"]],
        ["保护泉水就是保护这座城市的环境", "Bảo vệ suối nước chính là bảo vệ môi trường của thành phố này.", ["保护", "泉水", "城市", "环境"]],
      ],
      mixed: [["泉水著名游客保护", "Suối nước, nổi tiếng, du khách và bảo vệ.", ["泉水", "著名", "游客", "保护"]]],
    },
    {
      id: "hsk5-l6",
      no: 6,
      titleZh: "除夕的由来",
      titleVi: "Nguồn gốc của đêm giao thừa",
      words: [
        ["除夕", "noun", "đêm giao thừa"],
        ["春节", "noun", "Tết Nguyên đán"],
        ["由来", "noun", "nguồn gốc"],
        ["传说", "noun", "truyền thuyết"],
        ["年兽", "noun", "quái vật Niên"],
        ["鞭炮", "noun", "pháo"],
        ["习俗", "noun", "phong tục"],
        ["传统", "noun", "truyền thống"],
        ["害怕", "verb", "sợ"],
        ["庆祝", "verb", "chúc mừng, ăn mừng"],
        ["热闹", "adj", "náo nhiệt"],
        ["团圆", "adj", "sum họp"],
      ],
      phrases: [
        ["除夕的由来", "nguồn gốc đêm giao thừa", ["除夕", "由来"]],
        ["春节习俗", "phong tục Tết Nguyên đán", ["春节", "习俗"]],
        ["放鞭炮", "đốt pháo", ["鞭炮"]],
        ["害怕红色", "sợ màu đỏ", ["害怕"]],
        ["全家团圆", "cả nhà sum họp", ["团圆"]],
      ],
      sentences: [
        ["除夕是春节前最重要的晚上", "Đêm giao thừa là buổi tối quan trọng nhất trước Tết Nguyên đán.", ["除夕", "春节"]],
        ["关于除夕的由来有一个有趣的传说", "Về nguồn gốc đêm giao thừa có một truyền thuyết thú vị.", ["除夕", "由来", "传说"]],
        ["人们用红色和鞭炮赶走年兽", "Người ta dùng màu đỏ và pháo để xua đuổi quái vật Niên.", ["鞭炮", "年兽"]],
        ["今天除夕更重要的意义是全家团圆", "Ngày nay, ý nghĩa quan trọng hơn của đêm giao thừa là cả nhà sum họp.", ["除夕", "团圆"]],
      ],
      mixed: [["传说习俗今天的意义", "Truyền thuyết, phong tục và ý nghĩa ngày nay.", ["传说", "习俗"]]],
    },
  ],
};

function py(text, toneType) {
  return pinyin(text, { toneType, type: "array", nonZh: "consecutive" }).join(" ").replace(/\s+/g, " ").trim();
}

function word([text, pos, vi]) {
  return { text, pinyin: py(text, "none"), tone: py(text, "symbol"), pos, vi };
}

function buildItem(stage, [hanzi, vi, tokenTexts], wordMap) {
  const words = tokenTexts.map((token) => wordMap.get(token)).filter(Boolean);
  return {
    stage,
    vi,
    hanzi,
    words,
    source: sourceNote,
    pinyin: words.map((entry) => entry.pinyin).join(" "),
    tone: words.map((entry) => entry.tone).join(" "),
  };
}

function buildLesson(lesson) {
  const words = lesson.words.map(word);
  const wordMap = new Map(words.map((entry) => [entry.text, entry]));
  const items = [
    ...words.map((entry) => ({
      stage: "word",
      vi: entry.vi,
      hanzi: entry.text,
      words: [entry],
      source: sourceNote,
      pinyin: entry.pinyin,
      tone: entry.tone,
    })),
    ...lesson.phrases.map((entry) => buildItem("phrase", entry, wordMap)),
    ...lesson.sentences.map((entry) => buildItem("sentence", entry, wordMap)),
    ...lesson.mixed.map((entry) => buildItem("mixed", entry, wordMap)),
  ];
  return { id: lesson.id, no: lesson.no, titleZh: lesson.titleZh, titleVi: lesson.titleVi, items };
}

const aligned = Object.fromEntries(
  Object.entries(levels).map(([level, lessons]) => [level, lessons.map(buildLesson)]),
);

const output = `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  for (const [level, lessons] of Object.entries(data.levels)) {
    root.lessonContent[level] = root.lessonContent[level] || {};
    for (const lesson of lessons) {
      root.lessonContent[level][lesson.id] = {
        id: lesson.id,
        no: lesson.no,
        title: lesson.titleZh,
        titleZh: lesson.titleZh,
        titleVi: lesson.titleVi,
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify({ source: sourceNote, levels: aligned }, null, 2)};
});
`;

fs.writeFileSync(path.join(root, "public", "lesson-hsk345-aligned-early.js"), output, "utf8");
