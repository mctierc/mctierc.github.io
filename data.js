// ================================================================
// data.js - 玩家数据文件（在这里修改成绩）
// ================================================================

// 1. 等级计分规则
const LEVEL_SCORES = {
    'S+': 15, 'S': 14, 'S-': 13,
    'A+': 12, 'A': 11, 'A-': 10,
    'B+': 9, 'B': 8, 'B-': 7,
    'C+': 6, 'C': 5, 'C-': 4,
    'D+': 3, 'D': 2, 'D-': 1
};

// 2. 模式列表
const MODES = ['Sword', 'Axe', 'Mace', 'Vanilla', 'NethPot', 'NoDebuff', 'UHC', 'SMP', 'BedWars'];

// 3. 模式介绍数据
const MODE_INFO = {
    'Sword': { icon: '🗡️', desc: '高版本，单刀', place: '房间' },
    'Axe': { icon: '🛡️', desc: '高版本，盾斧', place: '房间' },
    'Mace': { icon: '🔨', desc: '低版本，重锤', place: '房间' },
    'Vanilla': { icon: '💎', desc: '高版本，水晶', place: '布吉岛' },
    'NethPot': { icon: '⚙️', desc: '高版本，NethPot', place: '房间' },
    'NoDebuff': { icon: '🧪', desc: '低版本，药水', place: '房间' },
    'UHC': { icon: '🕸️', desc: '高版本，UHC', place: '房间' },
    'SMP': { icon: '🏕️', desc: '高版本，合金SMP', place: '房间' },
    'BedWars': { icon: '🛏️', desc: '低版本，起床战争', place: '布吉岛' }
};

// 4. 评分配置
const RATING_CONFIG = {
    'Sword': { special: ['连击', '控距', '走位'] },
    'Axe': { special: ['破盾', '弓弩切换', '控距/走位'] },
    'Mace': { special: ['点击', '起飞', '风弹珍珠'] },
    'Vanilla': { special: ['水晶', '点锚', '反应速度'] },
    'NethPot': { special: ['连击', '控距', '走位'] },
    'NoDebuff': { special: ['连击', '控距', '走位'] },
    'UHC': { special: ['道具', '控距', '反应速度'] },
    'SMP': { special: ['道具', '控局', '走位'] },
    'BedWars': { special: ['搭路', '挖床', '自救'] }
};
const COMMON_RATINGS = ['策略', '瞄准', '战况'];

// 5. 模式图标配置
const MODE_ICONS = {
    'Sword': 'https://pic1.imgdb.cn/i/0341cIes77bcklCTE8wqKP.png',
    'Axe': 'https://pic1.imgdb.cn/i/0341cIdstYHpfWiklTAtmc.png',
    'Mace': 'https://pic1.imgdb.cn/i/0341cIeiMXoLOVCZdV5hqD.png',
    'Vanilla': 'https://pic1.imgdb.cn/i/0341cIfgVR2sBrdP55kZcJ.png',
    'NethPot': 'https://pic1.imgdb.cn/i/0341cIduqPIDvFTYI8wEGS.png',
    'NoDebuff': 'https://pic1.imgdb.cn/i/0341cIdsbGqgJgkj9mucSR.png',
    'UHC': 'https://pic1.imgdb.cn/i/0341cIeuXv4DiupE82XjQX.png',
    'SMP': 'https://pic1.imgdb.cn/i/0341cIek1RnD2PBtEm8h10.png',
    'BedWars': 'https://pic1.imgdb.cn/i/0341c5udFCoKHxzOMf0ALM.png'
};

// 6. Overral 图标
const OVERALL_ICON = 'https://pic1.imgdb.cn/i/0341tQLnNzAClsUctf2WLz.png';

// ================================================================
// 👇 玩家数据（id/name/tag换行，模式放一行）
// ================================================================
const PLAYERS_DATA = [
    {
        id: "2577262529",
        name: "可爱的盐8",
        tag: ["管理员","Vanilla", "Mace"],
        modes: { "Sword": "C", "Axe": "B-", "Mace": "A+", "Vanilla": "A-", "NethPot": "B", "NoDebuff": "B-", "UHC": "B+", "SMP": "A", "BedWars": "B" }
    },
    {
        id: "2843650621",
        name: "树_彡_叶",
        modes: { "Sword": "B", "Axe": "A-", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "C+", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "VRL16",
        modes: { "Sword": "C-", "Axe": "D+", "Mace": "D", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "D+", "BedWars": "" }
    },
    {
        id: "",
        name: "StrikeRay",
        modes: { "Sword": "A", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "C", "UHC": "", "SMP": "", "BedWars": "C-" }
    },
    {
        id: "",
        name: "ice drdrdragon",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "B", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "ICE_clear_",
        modes: { "Sword": "A-", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "C-", "SMP": "", "BedWars": "C" }
    },
    {
        id: "",
        name: "lost_迷失自我",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "C", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "曲园子哒小号",
        tag: ["Mace"],
        modes: { "Sword": "C+", "Axe": "B+", "Mace": "A+", "Vanilla": "", "NethPot": "B", "NoDebuff": "", "UHC": "C+", "SMP": "B-", "BedWars": "" }
    },
    {
        id: "",
        name: "apex_cool",
        modes: { "Sword": "C+", "Axe": "C-", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "Minecraft晓睦",
        tag: ["Mace"],
        modes: { "Sword": "", "Axe": "", "Mace": "S", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "爱玩MC的红星",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "C+", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "C-", "BedWars": "" }
    },
    {
        id: "",
        name: "抖音_幻境龙",
        modes: { "Sword": "", "Axe": "", "Mace": "D", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "老王不是个菜鸟",
        tag: ["Mace"],
        modes: { "Sword": "B+", "Axe": "B+", "Mace": "S-", "Vanilla": "B", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "B", "BedWars": "" }
    },
    {
        id: "",
        name: "杂牌手柄爱91",
        modes: { "Sword": "B", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "哈H克K_MC",
        modes: { "Sword": "B+", "Axe": "B+", "Mace": "B-", "Vanilla": "C+", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "C", "BedWars": "" }
    },
    {
        id: "",
        name: "不爱吃面苹果",
        modes: { "Sword": "", "Axe": "", "Mace": "D", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "勇猛的史蒂夫重锤",
        modes: { "Sword": "", "Axe": "", "Mace": "C", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "亿万钻虚",
        modes: { "Sword": "B", "Axe": "", "Mace": "C-", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "_SMPwemmbu",
        tag: ["Sword"],
        modes: { "Sword": "B+", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "木脂箱是我配的",
        modes: { "Sword": "C-", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "冷冻xin",
        modes: { "Sword": "C-", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "D", "BedWars": "" }
    },
    {
        id: "",
        name: "狂笑的小g玩起床",
        modes: { "Sword": "D+", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "D", "BedWars": "" }
    },
    {
        id: "",
        name: "我叫抹布不叫温布",
        modes: { "Sword": "A", "Axe": "", "Mace": "S-", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    },
    {
        id: "",
        name: "",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "", "BedWars": "" }
    }
];

// ================================================================
// 导出数据
// ================================================================
window.__DATA = {
    LEVEL_SCORES: LEVEL_SCORES,
    MODES: MODES,
    MODE_INFO: MODE_INFO,
    RATING_CONFIG: RATING_CONFIG,
    COMMON_RATINGS: COMMON_RATINGS,
    MODE_ICONS: MODE_ICONS,
    OVERALL_ICON: OVERALL_ICON,
    PLAYERS: PLAYERS_DATA
};