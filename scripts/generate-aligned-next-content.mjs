import fs from "node:fs";
import path from "node:path";
import { pinyin } from "pinyin-pro";

const root = process.cwd();
const sourceNote = "Textbook alignment candidate batch 2 - needs human PDF/OCR verification";

const levels = {
  HSK3: [
    {
      id: "hsk3-l6",
      no: 6,
      titleZh: "怎么突然找不到了",
      titleVi: "Sao đột nhiên lại không tìm thấy nữa",
      words: [
        ["突然", "adv", "đột nhiên"],
        ["找", "verb", "tìm"],
        ["发现", "verb", "phát hiện"],
        ["重要", "adj", "quan trọng"],
        ["东西", "noun", "đồ vật"],
        ["地方", "noun", "nơi, chỗ"],
        ["忘记", "verb", "quên"],
        ["可能", "adv", "có thể"],
        ["旁边", "noun", "bên cạnh"],
        ["着急", "adj", "sốt ruột, vội"],
      ],
      phrases: [
        ["突然找不到", "đột nhiên không tìm thấy", ["突然", "找"]],
        ["重要的东西", "đồ quan trọng", ["重要", "东西"]],
        ["忘记地方", "quên chỗ", ["忘记", "地方"]],
        ["别着急", "đừng sốt ruột", ["着急"]],
      ],
      sentences: [
        ["我突然找不到手机了", "Tôi đột nhiên không tìm thấy điện thoại nữa.", ["突然", "找"]],
        ["这么重要的东西不能忘记", "Đồ quan trọng như vậy thì không thể quên.", ["重要", "东西", "忘记"]],
        ["你看看桌子旁边有没有", "Bạn xem bên cạnh bàn có không.", ["旁边"]],
        ["别着急我们一起找", "Đừng vội, chúng ta cùng tìm.", ["着急", "找"]],
      ],
      mixed: [
        ["怎么突然找不到了", "Sao đột nhiên lại không tìm thấy nữa?", ["突然", "找"]],
        ["重要的东西可能在旁边", "Đồ quan trọng có thể ở bên cạnh.", ["重要", "东西", "可能", "旁边"]],
      ],
    },
    {
      id: "hsk3-l7",
      no: 7,
      titleZh: "我跟她都认识五年了",
      titleVi: "Tôi và cô ấy quen nhau đã năm năm rồi",
      words: [
        ["认识", "verb", "quen, biết"],
        ["朋友", "noun", "bạn bè"],
        ["五年", "noun", "năm năm"],
        ["一起", "adv", "cùng nhau"],
        ["关系", "noun", "mối quan hệ"],
        ["了解", "verb", "hiểu, biết rõ"],
        ["同学", "noun", "bạn học"],
        ["联系", "verb", "liên lạc"],
        ["经常", "adv", "thường xuyên"],
        ["记得", "verb", "nhớ"],
      ],
      phrases: [
        ["认识五年", "quen nhau năm năm", ["认识", "五年"]],
        ["一起学习", "cùng nhau học", ["一起"]],
        ["关系很好", "quan hệ rất tốt", ["关系"]],
        ["经常联系", "thường xuyên liên lạc", ["经常", "联系"]],
      ],
      sentences: [
        ["我跟她都认识五年了", "Tôi và cô ấy quen nhau đã năm năm rồi.", ["认识", "五年"]],
        ["我们以前是同学", "Trước đây chúng tôi là bạn học.", ["同学"]],
        ["好朋友应该互相了解", "Bạn tốt nên hiểu nhau.", ["朋友", "了解"]],
        ["虽然很忙我们还经常联系", "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc.", ["经常", "联系"]],
      ],
      mixed: [
        ["我跟她都认识五年了", "Tôi và cô ấy quen nhau đã năm năm rồi.", ["认识", "五年"]],
        ["朋友之间要经常联系", "Bạn bè nên thường xuyên liên lạc.", ["朋友", "经常", "联系"]],
      ],
    },
    {
      id: "hsk3-l8",
      no: 8,
      titleZh: "你去哪儿我就去哪儿",
      titleVi: "Bạn đi đâu thì tôi đi đó",
      words: [
        ["哪儿", "noun", "đâu, chỗ nào"],
        ["跟", "prep", "theo, cùng với"],
        ["就", "adv", "thì, liền"],
        ["决定", "verb", "quyết định"],
        ["旅行", "verb", "du lịch"],
        ["方向", "noun", "phương hướng"],
        ["出发", "verb", "xuất phát"],
        ["回来", "verb", "quay về"],
        ["愿意", "verb", "sẵn lòng"],
        ["选择", "verb", "lựa chọn"],
      ],
      phrases: [
        ["去哪儿", "đi đâu", ["哪儿"]],
        ["跟你一起", "đi cùng bạn", ["跟"]],
        ["马上出发", "xuất phát ngay", ["出发"]],
        ["愿意选择", "sẵn lòng lựa chọn", ["愿意", "选择"]],
      ],
      sentences: [
        ["你去哪儿我就去哪儿", "Bạn đi đâu thì tôi đi đó.", ["哪儿", "就"]],
        ["我愿意跟你一起旅行", "Tôi sẵn lòng đi du lịch cùng bạn.", ["愿意", "跟", "旅行"]],
        ["我们决定明天出发", "Chúng tôi quyết định ngày mai xuất phát.", ["决定", "出发"]],
        ["回来以后再告诉我方向", "Sau khi quay về rồi nói cho tôi phương hướng.", ["回来", "方向"]],
      ],
      mixed: [
        ["你去哪儿我就去哪儿", "Bạn đi đâu thì tôi đi đó.", ["哪儿", "就"]],
        ["我愿意跟你一起出发", "Tôi sẵn lòng xuất phát cùng bạn.", ["愿意", "跟", "出发"]],
      ],
    },
    {
      id: "hsk3-l9",
      no: 9,
      titleZh: "她的汉语说得跟中国人一样好",
      titleVi: "Tiếng Trung của cô ấy nói hay như người Trung Quốc",
      words: [
        ["汉语", "noun", "tiếng Trung"],
        ["中国人", "noun", "người Trung Quốc"],
        ["一样", "adj", "giống nhau, như nhau"],
        ["流利", "adj", "lưu loát"],
        ["发音", "noun", "phát âm"],
        ["进步", "verb", "tiến bộ"],
        ["练习", "verb", "luyện tập"],
        ["语法", "noun", "ngữ pháp"],
        ["认真", "adj", "nghiêm túc"],
        ["水平", "noun", "trình độ"],
      ],
      phrases: [
        ["说汉语", "nói tiếng Trung", ["汉语"]],
        ["发音很好", "phát âm rất tốt", ["发音"]],
        ["认真练习", "luyện tập nghiêm túc", ["认真", "练习"]],
        ["水平提高", "trình độ nâng cao", ["水平"]],
      ],
      sentences: [
        ["她的汉语说得跟中国人一样好", "Tiếng Trung của cô ấy nói hay như người Trung Quốc.", ["汉语", "中国人", "一样"]],
        ["她的发音很流利", "Phát âm của cô ấy rất lưu loát.", ["发音", "流利"]],
        ["每天认真练习就会进步", "Mỗi ngày luyện tập nghiêm túc thì sẽ tiến bộ.", ["认真", "练习", "进步"]],
        ["语法和发音都很重要", "Ngữ pháp và phát âm đều rất quan trọng.", ["语法", "发音"]],
      ],
      mixed: [
        ["她的汉语说得跟中国人一样好", "Tiếng Trung của cô ấy nói hay như người Trung Quốc.", ["汉语", "中国人", "一样"]],
        ["认真练习可以提高水平", "Luyện tập nghiêm túc có thể nâng cao trình độ.", ["认真", "练习", "水平"]],
      ],
    },
    {
      id: "hsk3-l10",
      no: 10,
      titleZh: "数学比历史难多了",
      titleVi: "Toán khó hơn lịch sử nhiều",
      words: [
        ["数学", "noun", "toán học"],
        ["历史", "noun", "lịch sử"],
        ["难", "adj", "khó"],
        ["容易", "adj", "dễ"],
        ["比", "prep", "so với"],
        ["多了", "adv", "hơn nhiều"],
        ["成绩", "noun", "thành tích, điểm số"],
        ["考试", "noun", "kỳ thi"],
        ["复习", "verb", "ôn tập"],
        ["觉得", "verb", "cảm thấy, cho rằng"],
      ],
      phrases: [
        ["比历史难", "khó hơn lịch sử", ["比", "历史", "难"]],
        ["数学成绩", "điểm toán", ["数学", "成绩"]],
        ["准备考试", "chuẩn bị thi", ["考试"]],
        ["认真复习", "ôn tập nghiêm túc", ["复习"]],
      ],
      sentences: [
        ["数学比历史难多了", "Toán khó hơn lịch sử nhiều.", ["数学", "比", "历史", "难", "多了"]],
        ["我觉得历史比较容易", "Tôi thấy lịch sử tương đối dễ.", ["觉得", "历史", "容易"]],
        ["考试以前要认真复习", "Trước kỳ thi phải ôn tập nghiêm túc.", ["考试", "复习"]],
        ["他的数学成绩越来越好", "Điểm toán của anh ấy ngày càng tốt.", ["数学", "成绩"]],
      ],
      mixed: [
        ["数学比历史难多了", "Toán khó hơn lịch sử nhiều.", ["数学", "比", "历史", "难"]],
        ["考试以前要复习数学", "Trước kỳ thi phải ôn toán.", ["考试", "复习", "数学"]],
      ],
    },
  ],
  HSK4: [
    {
      id: "hsk4-l6",
      no: 6,
      titleZh: "一分钱一分货",
      titleVi: "Tiền nào của nấy",
      words: [
        ["质量", "noun", "chất lượng"],
        ["价格", "noun", "giá cả"],
        ["商品", "noun", "hàng hóa, sản phẩm"],
        ["服务", "noun", "dịch vụ"],
        ["值得", "verb", "đáng"],
        ["便宜", "adj", "rẻ"],
        ["贵", "adj", "đắt"],
        ["比较", "verb", "so sánh"],
        ["选择", "verb", "lựa chọn"],
        ["满意", "adj", "hài lòng"],
      ],
      phrases: [
        ["一分钱一分货", "tiền nào của nấy", ["质量", "价格"]],
        ["质量不错", "chất lượng khá tốt", ["质量"]],
        ["价格便宜", "giá rẻ", ["价格", "便宜"]],
        ["值得选择", "đáng lựa chọn", ["值得", "选择"]],
        ["服务满意", "hài lòng về dịch vụ", ["服务", "满意"]],
      ],
      sentences: [
        ["买东西常常是一分钱一分货", "Khi mua đồ, thường là tiền nào của nấy.", ["质量", "价格"]],
        ["这个商品虽然贵但是质量很好", "Sản phẩm này tuy đắt nhưng chất lượng rất tốt.", ["商品", "贵", "质量"]],
        ["你可以先比较价格和服务", "Bạn có thể so sánh giá cả và dịch vụ trước.", ["比较", "价格", "服务"]],
        ["选择合适的商品才会满意", "Chọn sản phẩm phù hợp thì mới hài lòng.", ["选择", "商品", "满意"]],
      ],
      mixed: [["一分钱一分货", "Tiền nào của nấy.", ["质量", "价格"]]],
    },
    {
      id: "hsk4-l7",
      no: 7,
      titleZh: "最好的医生是自己",
      titleVi: "Bác sĩ tốt nhất là chính mình",
      words: [
        ["医生", "noun", "bác sĩ"],
        ["自己", "noun", "bản thân"],
        ["健康", "adj", "khỏe mạnh"],
        ["身体", "noun", "cơ thể, sức khỏe"],
        ["预防", "verb", "phòng ngừa"],
        ["锻炼", "verb", "rèn luyện, tập luyện"],
        ["饮食", "noun", "ăn uống"],
        ["休息", "verb", "nghỉ ngơi"],
        ["习惯", "noun", "thói quen"],
        ["重要", "adj", "quan trọng"],
      ],
      phrases: [
        ["最好的医生", "bác sĩ tốt nhất", ["医生"]],
        ["照顾自己", "chăm sóc bản thân", ["自己"]],
        ["保持健康", "giữ sức khỏe", ["健康"]],
        ["注意饮食", "chú ý ăn uống", ["饮食"]],
        ["坚持锻炼", "kiên trì tập luyện", ["锻炼"]],
      ],
      sentences: [
        ["最好的医生是自己", "Bác sĩ tốt nhất là chính bản thân mình.", ["医生", "自己"]],
        ["健康的身体需要好习惯", "Cơ thể khỏe mạnh cần thói quen tốt.", ["健康", "身体", "习惯"]],
        ["每天锻炼也要注意休息", "Tập luyện mỗi ngày cũng phải chú ý nghỉ ngơi.", ["锻炼", "休息"]],
        ["预防比生病以后看医生更重要", "Phòng ngừa quan trọng hơn đi khám sau khi bị bệnh.", ["预防", "医生", "重要"]],
      ],
      mixed: [["健康的身体需要好习惯", "Cơ thể khỏe mạnh cần thói quen tốt.", ["健康", "身体", "习惯"]]],
    },
    {
      id: "hsk4-l8",
      no: 8,
      titleZh: "生活中不缺少美",
      titleVi: "Trong cuộc sống không thiếu cái đẹp",
      words: [
        ["生活", "noun", "cuộc sống"],
        ["缺少", "verb", "thiếu"],
        ["美", "adj", "đẹp"],
        ["发现", "verb", "phát hiện"],
        ["自然", "noun", "thiên nhiên"],
        ["风景", "noun", "phong cảnh"],
        ["心情", "noun", "tâm trạng"],
        ["普通", "adj", "bình thường"],
        ["眼睛", "noun", "đôi mắt"],
        ["感受", "verb", "cảm nhận"],
      ],
      phrases: [
        ["不缺少美", "không thiếu cái đẹp", ["缺少", "美"]],
        ["发现风景", "phát hiện phong cảnh", ["发现", "风景"]],
        ["普通生活", "cuộc sống bình thường", ["普通", "生活"]],
        ["感受自然", "cảm nhận thiên nhiên", ["感受", "自然"]],
        ["心情很好", "tâm trạng rất tốt", ["心情"]],
      ],
      sentences: [
        ["生活中不缺少美", "Trong cuộc sống không thiếu cái đẹp.", ["生活", "缺少", "美"]],
        ["我们需要发现美的眼睛", "Chúng ta cần đôi mắt biết phát hiện cái đẹp.", ["发现", "美", "眼睛"]],
        ["普通生活里也有很多风景", "Trong cuộc sống bình thường cũng có nhiều phong cảnh đẹp.", ["普通", "生活", "风景"]],
        ["感受自然会让心情变好", "Cảm nhận thiên nhiên sẽ làm tâm trạng tốt hơn.", ["感受", "自然", "心情"]],
      ],
      mixed: [["生活中不缺少美", "Trong cuộc sống không thiếu cái đẹp.", ["生活", "缺少", "美"]]],
    },
    {
      id: "hsk4-l9",
      no: 9,
      titleZh: "阳光总在风雨后",
      titleVi: "Ánh nắng luôn đến sau mưa gió",
      words: [
        ["阳光", "noun", "ánh nắng"],
        ["风雨", "noun", "mưa gió, khó khăn"],
        ["困难", "noun", "khó khăn"],
        ["坚持", "verb", "kiên trì"],
        ["希望", "noun", "hy vọng"],
        ["成功", "noun", "thành công"],
        ["失败", "verb", "thất bại"],
        ["经历", "verb", "trải qua"],
        ["勇敢", "adj", "dũng cảm"],
        ["相信", "verb", "tin tưởng"],
      ],
      phrases: [
        ["风雨以后", "sau mưa gió", ["风雨"]],
        ["看到阳光", "nhìn thấy ánh nắng", ["阳光"]],
        ["坚持希望", "kiên trì hy vọng", ["坚持", "希望"]],
        ["经历困难", "trải qua khó khăn", ["经历", "困难"]],
        ["勇敢相信", "dũng cảm tin tưởng", ["勇敢", "相信"]],
      ],
      sentences: [
        ["阳光总在风雨后", "Ánh nắng luôn đến sau mưa gió.", ["阳光", "风雨"]],
        ["经历困难以后人会更勇敢", "Sau khi trải qua khó khăn, con người sẽ dũng cảm hơn.", ["经历", "困难", "勇敢"]],
        ["失败以后也要坚持希望", "Sau thất bại vẫn phải giữ hy vọng.", ["失败", "坚持", "希望"]],
        ["我相信努力以后会成功", "Tôi tin rằng sau nỗ lực sẽ thành công.", ["相信", "成功"]],
      ],
      mixed: [["阳光总在风雨后", "Ánh nắng luôn đến sau mưa gió.", ["阳光", "风雨"]]],
    },
    {
      id: "hsk4-l10",
      no: 10,
      titleZh: "幸福的标准",
      titleVi: "Tiêu chuẩn của hạnh phúc",
      words: [
        ["幸福", "noun", "hạnh phúc"],
        ["标准", "noun", "tiêu chuẩn"],
        ["家庭", "noun", "gia đình"],
        ["工作", "noun", "công việc"],
        ["健康", "adj", "khỏe mạnh"],
        ["满足", "adj", "mãn nguyện, thỏa mãn"],
        ["目标", "noun", "mục tiêu"],
        ["金钱", "noun", "tiền bạc"],
        ["自由", "noun", "tự do"],
        ["态度", "noun", "thái độ"],
      ],
      phrases: [
        ["幸福的标准", "tiêu chuẩn của hạnh phúc", ["幸福", "标准"]],
        ["家庭健康", "gia đình khỏe mạnh", ["家庭", "健康"]],
        ["工作目标", "mục tiêu công việc", ["工作", "目标"]],
        ["金钱和自由", "tiền bạc và tự do", ["金钱", "自由"]],
        ["满足的态度", "thái độ biết đủ", ["满足", "态度"]],
      ],
      sentences: [
        ["每个人幸福的标准不一样", "Tiêu chuẩn hạnh phúc của mỗi người không giống nhau.", ["幸福", "标准"]],
        ["有人觉得健康的家庭最重要", "Có người cho rằng một gia đình khỏe mạnh là quan trọng nhất.", ["健康", "家庭"]],
        ["金钱不是唯一的目标", "Tiền bạc không phải mục tiêu duy nhất.", ["金钱", "目标"]],
        ["懂得满足也是一种生活态度", "Biết hài lòng cũng là một thái độ sống.", ["满足", "态度"]],
      ],
      mixed: [["每个人幸福的标准不一样", "Tiêu chuẩn hạnh phúc của mỗi người không giống nhau.", ["幸福", "标准"]]],
    },
  ],
  HSK5: [
    {
      id: "hsk5-l7",
      no: 7,
      titleZh: "成语故事两则",
      titleVi: "Hai câu chuyện thành ngữ",
      words: [
        ["成语", "noun", "thành ngữ"],
        ["故事", "noun", "câu chuyện"],
        ["道理", "noun", "đạo lý"],
        ["语言", "noun", "ngôn ngữ"],
        ["文化", "noun", "văn hóa"],
        ["解释", "verb", "giải thích"],
        ["记住", "verb", "ghi nhớ"],
        ["使用", "verb", "sử dụng"],
        ["古代", "noun", "thời cổ đại"],
        ["意思", "noun", "ý nghĩa"],
        ["学习", "verb", "học"],
        ["智慧", "noun", "trí tuệ"],
      ],
      phrases: [
        ["成语故事", "câu chuyện thành ngữ", ["成语", "故事"]],
        ["解释意思", "giải thích ý nghĩa", ["解释", "意思"]],
        ["学习文化", "học văn hóa", ["学习", "文化"]],
        ["古代智慧", "trí tuệ cổ đại", ["古代", "智慧"]],
        ["正确使用", "sử dụng đúng", ["使用"]],
      ],
      sentences: [
        ["成语故事里常常有深刻的道理", "Trong chuyện thành ngữ thường có đạo lý sâu sắc.", ["成语", "故事", "道理"]],
        ["学习成语也能了解中国文化", "Học thành ngữ cũng có thể hiểu văn hóa Trung Quốc.", ["学习", "成语", "文化"]],
        ["老师先解释意思再让我们使用", "Giáo viên giải thích ý nghĩa trước rồi mới để chúng tôi sử dụng.", ["解释", "意思", "使用"]],
        ["古代故事中有很多智慧", "Trong các câu chuyện cổ đại có rất nhiều trí tuệ.", ["古代", "故事", "智慧"]],
      ],
      mixed: [["成语故事里有道理", "Trong chuyện thành ngữ có đạo lý.", ["成语", "故事", "道理"]]],
    },
    {
      id: "hsk5-l8",
      no: 8,
      titleZh: "朝三暮四的古今义",
      titleVi: "Nghĩa xưa và nay của 'triều tam mộ tứ'",
      words: [
        ["朝三暮四", "noun", "thành ngữ triều tam mộ tứ"],
        ["古代", "noun", "thời cổ đại"],
        ["现代", "noun", "hiện đại"],
        ["意义", "noun", "ý nghĩa"],
        ["改变", "verb", "thay đổi"],
        ["词语", "noun", "từ ngữ"],
        ["猴子", "noun", "con khỉ"],
        ["选择", "verb", "lựa chọn"],
        ["表面", "noun", "bề ngoài"],
        ["本质", "noun", "bản chất"],
        ["误解", "verb", "hiểu lầm"],
        ["习惯", "noun", "thói quen"],
      ],
      phrases: [
        ["古今意义", "ý nghĩa xưa và nay", ["古代", "现代", "意义"]],
        ["词语改变", "từ ngữ thay đổi", ["词语", "改变"]],
        ["表面不同", "bề ngoài khác nhau", ["表面"]],
        ["本质一样", "bản chất giống nhau", ["本质"]],
        ["容易误解", "dễ hiểu lầm", ["误解"]],
      ],
      sentences: [
        ["朝三暮四在古代和现代意义不完全一样", "Ý nghĩa của 'triều tam mộ tứ' trong cổ đại và hiện đại không hoàn toàn giống nhau.", ["朝三暮四", "古代", "现代", "意义"]],
        ["词语的意义会随着时代改变", "Ý nghĩa của từ ngữ sẽ thay đổi theo thời đại.", ["词语", "意义", "改变"]],
        ["猴子只看到了表面的选择", "Con khỉ chỉ nhìn thấy lựa chọn bề ngoài.", ["猴子", "表面", "选择"]],
        ["理解本质才能避免误解", "Hiểu bản chất mới có thể tránh hiểu lầm.", ["本质", "误解"]],
      ],
      mixed: [["词语的意义会改变", "Ý nghĩa của từ ngữ có thể thay đổi.", ["词语", "意义", "改变"]]],
    },
    {
      id: "hsk5-l9",
      no: 9,
      titleZh: "别样鲁迅",
      titleVi: "Một Lỗ Tấn khác",
      words: [
        ["鲁迅", "noun", "Lỗ Tấn"],
        ["作家", "noun", "nhà văn"],
        ["文章", "noun", "bài viết"],
        ["形象", "noun", "hình tượng"],
        ["了解", "verb", "hiểu, tìm hiểu"],
        ["研究", "verb", "nghiên cứu"],
        ["时代", "noun", "thời đại"],
        ["思想", "noun", "tư tưởng"],
        ["幽默", "adj", "hài hước"],
        ["严肃", "adj", "nghiêm túc"],
        ["作品", "noun", "tác phẩm"],
        ["评价", "verb", "đánh giá"],
      ],
      phrases: [
        ["别样鲁迅", "một Lỗ Tấn khác", ["鲁迅"]],
        ["研究作品", "nghiên cứu tác phẩm", ["研究", "作品"]],
        ["了解时代", "hiểu thời đại", ["了解", "时代"]],
        ["幽默形象", "hình tượng hài hước", ["幽默", "形象"]],
        ["评价文章", "đánh giá bài viết", ["评价", "文章"]],
      ],
      sentences: [
        ["鲁迅是一位重要的作家", "Lỗ Tấn là một nhà văn quan trọng.", ["鲁迅", "作家"]],
        ["读他的文章可以了解那个时代", "Đọc bài viết của ông có thể hiểu thời đại đó.", ["文章", "了解", "时代"]],
        ["有些作品表现了他幽默的一面", "Một số tác phẩm thể hiện mặt hài hước của ông.", ["作品", "幽默"]],
        ["评价一个作家需要认真研究", "Đánh giá một nhà văn cần nghiên cứu nghiêm túc.", ["评价", "作家", "研究"]],
      ],
      mixed: [["读鲁迅的文章可以了解时代", "Đọc bài viết của Lỗ Tấn có thể hiểu thời đại.", ["鲁迅", "文章", "了解", "时代"]]],
    },
    {
      id: "hsk5-l10",
      no: 10,
      titleZh: "争论的奇迹",
      titleVi: "Kỳ tích của tranh luận",
      words: [
        ["争论", "verb", "tranh luận"],
        ["奇迹", "noun", "kỳ tích"],
        ["观点", "noun", "quan điểm"],
        ["同意", "verb", "đồng ý"],
        ["反对", "verb", "phản đối"],
        ["讨论", "verb", "thảo luận"],
        ["解决", "verb", "giải quyết"],
        ["问题", "noun", "vấn đề"],
        ["创造", "verb", "sáng tạo"],
        ["团队", "noun", "đội nhóm"],
        ["证明", "verb", "chứng minh"],
        ["结果", "noun", "kết quả"],
      ],
      phrases: [
        ["不同观点", "quan điểm khác nhau", ["观点"]],
        ["同意反对", "đồng ý và phản đối", ["同意", "反对"]],
        ["讨论问题", "thảo luận vấn đề", ["讨论", "问题"]],
        ["创造奇迹", "tạo ra kỳ tích", ["创造", "奇迹"]],
        ["证明结果", "chứng minh kết quả", ["证明", "结果"]],
      ],
      sentences: [
        ["争论不一定是坏事", "Tranh luận không nhất thiết là chuyện xấu.", ["争论"]],
        ["不同观点可以帮助团队解决问题", "Các quan điểm khác nhau có thể giúp đội nhóm giải quyết vấn đề.", ["观点", "团队", "解决", "问题"]],
        ["有人同意也有人反对", "Có người đồng ý và cũng có người phản đối.", ["同意", "反对"]],
        ["好的讨论有时能创造奇迹", "Một cuộc thảo luận tốt đôi khi có thể tạo ra kỳ tích.", ["讨论", "创造", "奇迹"]],
      ],
      mixed: [["不同观点可以帮助解决问题", "Các quan điểm khác nhau có thể giúp giải quyết vấn đề.", ["观点", "解决", "问题"]]],
    },
    {
      id: "hsk5-l11",
      no: 11,
      titleZh: "闹钟的危害",
      titleVi: "Tác hại của đồng hồ báo thức",
      words: [
        ["闹钟", "noun", "đồng hồ báo thức"],
        ["危害", "noun", "tác hại"],
        ["睡眠", "noun", "giấc ngủ"],
        ["起床", "verb", "thức dậy"],
        ["影响", "verb", "ảnh hưởng"],
        ["健康", "adj", "khỏe mạnh"],
        ["压力", "noun", "áp lực"],
        ["习惯", "noun", "thói quen"],
        ["自然", "noun", "tự nhiên"],
        ["时间", "noun", "thời gian"],
        ["休息", "verb", "nghỉ ngơi"],
        ["调整", "verb", "điều chỉnh"],
      ],
      phrases: [
        ["闹钟的危害", "tác hại của đồng hồ báo thức", ["闹钟", "危害"]],
        ["影响睡眠", "ảnh hưởng giấc ngủ", ["影响", "睡眠"]],
        ["自然起床", "thức dậy tự nhiên", ["自然", "起床"]],
        ["调整时间", "điều chỉnh thời gian", ["调整", "时间"]],
        ["注意休息", "chú ý nghỉ ngơi", ["休息"]],
      ],
      sentences: [
        ["闹钟可能会影响睡眠", "Đồng hồ báo thức có thể ảnh hưởng đến giấc ngủ.", ["闹钟", "影响", "睡眠"]],
        ["睡眠不好会给身体带来压力", "Giấc ngủ không tốt sẽ tạo áp lực cho cơ thể.", ["睡眠", "压力"]],
        ["我们应该调整休息时间", "Chúng ta nên điều chỉnh thời gian nghỉ ngơi.", ["调整", "休息", "时间"]],
        ["好的习惯对健康很重要", "Thói quen tốt rất quan trọng đối với sức khỏe.", ["习惯", "健康"]],
      ],
      mixed: [["闹钟可能影响睡眠", "Đồng hồ báo thức có thể ảnh hưởng giấc ngủ.", ["闹钟", "影响", "睡眠"]]],
    },
    {
      id: "hsk5-l12",
      no: 12,
      titleZh: "海外用户玩儿微信",
      titleVi: "Người dùng ở nước ngoài dùng WeChat",
      words: [
        ["海外", "noun", "nước ngoài, hải ngoại"],
        ["用户", "noun", "người dùng"],
        ["微信", "noun", "WeChat"],
        ["软件", "noun", "phần mềm"],
        ["交流", "verb", "giao tiếp, trao đổi"],
        ["信息", "noun", "thông tin"],
        ["分享", "verb", "chia sẻ"],
        ["朋友", "noun", "bạn bè"],
        ["功能", "noun", "chức năng"],
        ["方便", "adj", "thuận tiện"],
        ["网络", "noun", "mạng internet"],
        ["使用", "verb", "sử dụng"],
      ],
      phrases: [
        ["海外用户", "người dùng ở nước ngoài", ["海外", "用户"]],
        ["使用微信", "sử dụng WeChat", ["使用", "微信"]],
        ["分享信息", "chia sẻ thông tin", ["分享", "信息"]],
        ["网络交流", "giao tiếp qua mạng", ["网络", "交流"]],
        ["功能方便", "chức năng thuận tiện", ["功能", "方便"]],
      ],
      sentences: [
        ["很多海外用户喜欢使用微信", "Nhiều người dùng ở nước ngoài thích sử dụng WeChat.", ["海外", "用户", "使用", "微信"]],
        ["这个软件让朋友之间交流更方便", "Phần mềm này giúp bạn bè giao tiếp thuận tiện hơn.", ["软件", "朋友", "交流", "方便"]],
        ["用户可以在网络上分享信息", "Người dùng có thể chia sẻ thông tin trên mạng.", ["用户", "网络", "分享", "信息"]],
        ["微信的功能越来越多", "Các chức năng của WeChat ngày càng nhiều.", ["微信", "功能"]],
      ],
      mixed: [["海外用户喜欢使用微信", "Người dùng ở nước ngoài thích sử dụng WeChat.", ["海外", "用户", "使用", "微信"]]],
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

fs.writeFileSync(path.join(root, "public", "lesson-hsk345-aligned-next.js"), output, "utf8");
