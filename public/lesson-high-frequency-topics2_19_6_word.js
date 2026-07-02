(function (root, factory) {
    const data = factory();
    if (typeof module === "object" && module.exports) {
        module.exports = data;
    }
    if (root.registerNewFormatHighFrequencyTopics) {
        root.registerNewFormatHighFrequencyTopics(data.topics, {
            contentType: "word",
        });
    }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
    return {
        "source": "high_frequency_topics.json",
        "topics": [
            {
                "topic_id": "time_location",
                "unit_id": "time_1",
                "unit_number": 1,
                "title": "时间（1） - ??",
                "topic": "Thời gian cơ bản (1)",
                "source": "ayen_docx",
                "id": "time-location-time-1-world",
                "type": "world",
                "items": [
                    {
                        "id": "time_1-world-001",
                        "hanzi": "时间",
                        "pinyin": "shíjiān",
                        "vietnamese": "thời gian",
                        "part_of_speech": "Danh từ",
                        "explanation": "Dùng để hỏi hoặc nói về thời gian.",
                        "normal_audio": "time_1_world_001_normal.mp3",
                        "slow_audio": "time_1_world_001_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-002",
                        "hanzi": "秒",
                        "pinyin": "miǎo",
                        "vietnamese": "giây",
                        "part_of_speech": "Danh từ / lượng từ",
                        "explanation": "Đơn vị thời gian rất ngắn.",
                        "normal_audio": "time_1_world_002_normal.mp3",
                        "slow_audio": "time_1_world_002_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-003",
                        "hanzi": "分",
                        "pinyin": "fēn",
                        "vietnamese": "phút",
                        "part_of_speech": "Danh từ / lượng từ",
                        "explanation": "Dùng khi nói số phút hoặc thời gian.",
                        "normal_audio": "time_1_world_003_normal.mp3",
                        "slow_audio": "time_1_world_003_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-004",
                        "hanzi": "一刻钟",
                        "pinyin": "yí kè zhōng",
                        "vietnamese": "mười lăm phút; một khắc",
                        "part_of_speech": "Cụm thời gian",
                        "explanation": "Dùng khi nói 15 phút.",
                        "normal_audio": "time_1_world_004_normal.mp3",
                        "slow_audio": "time_1_world_004_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-005",
                        "hanzi": "小时",
                        "pinyin": "xiǎoshí",
                        "vietnamese": "tiếng; giờ đồng hồ",
                        "part_of_speech": "Danh từ / lượng từ",
                        "explanation": "Khoảng thời gian 60 phút.",
                        "normal_audio": "time_1_world_005_normal.mp3",
                        "slow_audio": "time_1_world_005_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-006",
                        "hanzi": "钟点",
                        "pinyin": "zhōngdiǎn",
                        "vietnamese": "giờ; thời điểm",
                        "part_of_speech": "Danh từ",
                        "explanation": "Dùng khi nói giờ giấc hoặc thời điểm cụ thể.",
                        "normal_audio": "time_1_world_006_normal.mp3",
                        "slow_audio": "time_1_world_006_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-007",
                        "hanzi": "日",
                        "pinyin": "rì",
                        "vietnamese": "ngày",
                        "part_of_speech": "Danh từ",
                        "explanation": "Cách nói trang trọng hơn “号” trong ngày tháng.",
                        "normal_audio": "time_1_world_007_normal.mp3",
                        "slow_audio": "time_1_world_007_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-008",
                        "hanzi": "星期",
                        "pinyin": "xīngqī",
                        "vietnamese": "tuần; thứ",
                        "part_of_speech": "Danh từ",
                        "explanation": "Dùng để nói tuần hoặc thứ trong tuần.",
                        "normal_audio": "time_1_world_008_normal.mp3",
                        "slow_audio": "time_1_world_008_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-009",
                        "hanzi": "月",
                        "pinyin": "yuè",
                        "vietnamese": "tháng",
                        "part_of_speech": "Danh từ",
                        "explanation": "Dùng khi nói tháng trong năm.",
                        "normal_audio": "time_1_world_009_normal.mp3",
                        "slow_audio": "time_1_world_009_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-010",
                        "hanzi": "季度",
                        "pinyin": "jìdù",
                        "vietnamese": "quý; quý trong năm",
                        "part_of_speech": "Danh từ",
                        "explanation": "Một năm có bốn quý.",
                        "normal_audio": "time_1_world_010_normal.mp3",
                        "slow_audio": "time_1_world_010_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-011",
                        "hanzi": "年",
                        "pinyin": "nián",
                        "vietnamese": "năm",
                        "part_of_speech": "Danh từ",
                        "explanation": "Dùng khi nói năm hoặc khoảng thời gian một năm.",
                        "normal_audio": "time_1_world_011_normal.mp3",
                        "slow_audio": "time_1_world_011_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-012",
                        "hanzi": "十年",
                        "pinyin": "shí nián",
                        "vietnamese": "mười năm; một thập kỷ",
                        "part_of_speech": "Cụm thời gian",
                        "explanation": "Dùng để nói khoảng thời gian 10 năm.",
                        "normal_audio": "time_1_world_012_normal.mp3",
                        "slow_audio": "time_1_world_012_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-013",
                        "hanzi": "世纪",
                        "pinyin": "shìjì",
                        "vietnamese": "thế kỷ",
                        "part_of_speech": "Danh từ",
                        "explanation": "Khoảng thời gian 100 năm.",
                        "normal_audio": "time_1_world_013_normal.mp3",
                        "slow_audio": "time_1_world_013_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-014",
                        "hanzi": "千年",
                        "pinyin": "qiān nián",
                        "vietnamese": "một nghìn năm; thiên niên kỷ",
                        "part_of_speech": "Cụm thời gian",
                        "explanation": "Dùng để nói khoảng thời gian 1000 năm.",
                        "normal_audio": "time_1_world_014_normal.mp3",
                        "slow_audio": "time_1_world_014_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-015",
                        "hanzi": "日出",
                        "pinyin": "rìchū",
                        "vietnamese": "bình minh; mặt trời mọc",
                        "part_of_speech": "Danh từ",
                        "explanation": "Thời điểm mặt trời mọc.",
                        "normal_audio": "time_1_world_015_normal.mp3",
                        "slow_audio": "time_1_world_015_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-016",
                        "hanzi": "日落",
                        "pinyin": "rìluò",
                        "vietnamese": "hoàng hôn; mặt trời lặn",
                        "part_of_speech": "Danh từ",
                        "explanation": "Thời điểm mặt trời lặn.",
                        "normal_audio": "time_1_world_016_normal.mp3",
                        "slow_audio": "time_1_world_016_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-017",
                        "hanzi": "黎明",
                        "pinyin": "límíng",
                        "vietnamese": "rạng đông; bình minh",
                        "part_of_speech": "Danh từ",
                        "explanation": "Khoảng thời gian trời vừa sáng.",
                        "normal_audio": "time_1_world_017_normal.mp3",
                        "slow_audio": "time_1_world_017_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-018",
                        "hanzi": "上午",
                        "pinyin": "shàngwǔ",
                        "vietnamese": "buổi sáng",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng thời gian trước buổi trưa.",
                        "normal_audio": "time_1_world_018_normal.mp3",
                        "slow_audio": "time_1_world_018_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-019",
                        "hanzi": "中午",
                        "pinyin": "zhōngwǔ",
                        "vietnamese": "buổi trưa",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng giữa ngày.",
                        "normal_audio": "time_1_world_019_normal.mp3",
                        "slow_audio": "time_1_world_019_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_1-world-020",
                        "hanzi": "下午",
                        "pinyin": "xiàwǔ",
                        "vietnamese": "buổi chiều",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng thời gian sau buổi trưa.",
                        "normal_audio": "time_1_world_020_normal.mp3",
                        "slow_audio": "time_1_world_020_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    }
                ]
            },
            {
                "topic_id": "time_location",
                "unit_id": "time_2",
                "unit_number": 2,
                "title": "时间（2） - ??",
                "topic": "Thời gian cơ bản (2)",
                "source": "ayen_docx",
                "id": "time-location-time-2-world",
                "type": "world",
                "items": [
                    {
                        "id": "time_2-world-001",
                        "hanzi": "上午",
                        "pinyin": "shàngwǔ",
                        "vietnamese": "buổi sáng; a.m.",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Dùng cho thời gian trước 12 giờ trưa.",
                        "normal_audio": "time_2_world_001_normal.mp3",
                        "slow_audio": "time_2_world_001_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-002",
                        "hanzi": "下午",
                        "pinyin": "xiàwǔ",
                        "vietnamese": "buổi chiều; p.m.",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Dùng cho thời gian sau 12 giờ trưa.",
                        "normal_audio": "time_2_world_002_normal.mp3",
                        "slow_audio": "time_2_world_002_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-003",
                        "hanzi": "傍晚",
                        "pinyin": "bàngwǎn",
                        "vietnamese": "chiều tối; chạng vạng",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng thời gian gần tối.",
                        "normal_audio": "time_2_world_003_normal.mp3",
                        "slow_audio": "time_2_world_003_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-004",
                        "hanzi": "夜晚",
                        "pinyin": "yèwǎn",
                        "vietnamese": "ban đêm; đêm",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng thời gian trời tối.",
                        "normal_audio": "time_2_world_004_normal.mp3",
                        "slow_audio": "time_2_world_004_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-005",
                        "hanzi": "午夜",
                        "pinyin": "wǔyè",
                        "vietnamese": "nửa đêm",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Khoảng 12 giờ đêm.",
                        "normal_audio": "time_2_world_005_normal.mp3",
                        "slow_audio": "time_2_world_005_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-006",
                        "hanzi": "今晚",
                        "pinyin": "jīnwǎn",
                        "vietnamese": "tối nay",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Dùng để nói buổi tối hôm nay.",
                        "normal_audio": "time_2_world_006_normal.mp3",
                        "slow_audio": "time_2_world_006_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-007",
                        "hanzi": "过去",
                        "pinyin": "guòqù",
                        "vietnamese": "quá khứ; trước đây",
                        "part_of_speech": "Danh từ / thời gian",
                        "explanation": "Dùng để nói chuyện đã xảy ra.",
                        "normal_audio": "time_2_world_007_normal.mp3",
                        "slow_audio": "time_2_world_007_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-008",
                        "hanzi": "现在",
                        "pinyin": "xiànzài",
                        "vietnamese": "bây giờ; hiện tại",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Dùng để nói thời điểm hiện tại.",
                        "normal_audio": "time_2_world_008_normal.mp3",
                        "slow_audio": "time_2_world_008_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-009",
                        "hanzi": "未来",
                        "pinyin": "wèilái",
                        "vietnamese": "tương lai",
                        "part_of_speech": "Danh từ thời gian",
                        "explanation": "Dùng để nói thời gian sau này.",
                        "normal_audio": "time_2_world_009_normal.mp3",
                        "slow_audio": "time_2_world_009_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-010",
                        "hanzi": "昨天",
                        "pinyin": "zuótiān",
                        "vietnamese": "hôm qua",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Ngày trước hôm nay.",
                        "normal_audio": "time_2_world_010_normal.mp3",
                        "slow_audio": "time_2_world_010_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-011",
                        "hanzi": "今天",
                        "pinyin": "jīntiān",
                        "vietnamese": "hôm nay",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Ngày hiện tại.",
                        "normal_audio": "time_2_world_011_normal.mp3",
                        "slow_audio": "time_2_world_011_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-012",
                        "hanzi": "明天",
                        "pinyin": "míngtiān",
                        "vietnamese": "ngày mai",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Ngày sau hôm nay.",
                        "normal_audio": "time_2_world_012_normal.mp3",
                        "slow_audio": "time_2_world_012_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-013",
                        "hanzi": "前天",
                        "pinyin": "qiántiān",
                        "vietnamese": "hôm kia",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Hai ngày trước hôm nay.",
                        "normal_audio": "time_2_world_013_normal.mp3",
                        "slow_audio": "time_2_world_013_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-014",
                        "hanzi": "后天",
                        "pinyin": "hòutiān",
                        "vietnamese": "ngày kia",
                        "part_of_speech": "Danh từ / phó từ thời gian",
                        "explanation": "Hai ngày sau hôm nay.",
                        "normal_audio": "time_2_world_014_normal.mp3",
                        "slow_audio": "time_2_world_014_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-015",
                        "hanzi": "稍后",
                        "pinyin": "shāohòu",
                        "vietnamese": "lát nữa; sau đó một chút",
                        "part_of_speech": "Phó từ thời gian",
                        "explanation": "Dùng khi nói việc xảy ra sau một lúc.",
                        "normal_audio": "time_2_world_015_normal.mp3",
                        "slow_audio": "time_2_world_015_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-016",
                        "hanzi": "上个月",
                        "pinyin": "shàng ge yuè",
                        "vietnamese": "tháng trước",
                        "part_of_speech": "Cụm thời gian",
                        "explanation": "Tháng trước tháng hiện tại.",
                        "normal_audio": "time_2_world_016_normal.mp3",
                        "slow_audio": "time_2_world_016_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    },
                    {
                        "id": "time_2-world-017",
                        "hanzi": "下个月",
                        "pinyin": "xià ge yuè",
                        "vietnamese": "tháng sau",
                        "part_of_speech": "Cụm thời gian",
                        "explanation": "Tháng sau tháng hiện tại.",
                        "normal_audio": "time_2_world_017_normal.mp3",
                        "slow_audio": "time_2_world_017_slow_0.75.mp3",
                        "normal_speed": 1.0,
                        "slow_speed": 0.75
                    }
                ]
            }
        ]
    };
});
