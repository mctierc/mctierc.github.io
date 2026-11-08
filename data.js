const LEVEL_SCORES = {
    'HT1': 60, 'LT1': 45,
    'HT2': 30, 'LT2': 20,
    'HT3': 10, 'LT3': 6,
    'HT4': 4, 'LT4': 3,
    'HT5': 2, 'LT5': 1
};

const MODES = ['Sword', 'Axe', 'Mace', 'Vanilla', 'NethPot', 'NoDebuff', 'UHC', 'SMP'];

const MODE_INFO = {
    'Sword': { icon: '🗡️', desc: '高版本，单刀', place: '房间' },
    'Axe': { icon: '🛡️', desc: '高版本，盾斧', place: '房间' },
    'Mace': { icon: '🔨', desc: '低版本，重锤', place: '房间' },
    'Vanilla': { icon: '💎', desc: '高版本，水晶', place: '布吉岛' },
    'NethPot': { icon: '⚙️', desc: '高版本，NethPot', place: '房间' },
    'NoDebuff': { icon: '🧪', desc: '低版本，药水', place: '房间' },
    'UHC': { icon: '🕸️', desc: '高版本，UHC', place: '房间' },
    'SMP': { icon: '🏕️', desc: '高版本，合金SMP', place: '房间' }
};

const RATING_CONFIG = {
    'Sword': { special: ['连击', '控距', '走位'] },
    'Axe': { special: ['破盾', '弓弩切换', '控距/走位'] },
    'Mace': { special: ['点击', '起飞', '风弹珍珠'] },
    'Vanilla': { special: ['水晶', '点锚', '反应速度'] },
    'NethPot': { special: ['连击', '控距', '走位'] },
    'NoDebuff': { special: ['连击', '控距', '走位'] },
    'UHC': { special: ['道具', '控距', '反应速度'] },
    'SMP': { special: ['道具', '控局', '走位'] }
};
const COMMON_RATINGS = ['策略', '瞄准', '战况'];

const MODE_ICONS = {
    'Sword': 'https://pic1.imgdb.cn/i/0341cIes77bcklCTE8wqKP.png',
    'Axe': 'https://pic1.imgdb.cn/i/0341cIdstYHpfWiklTAtmc.png',
    'Mace': 'https://pic1.imgdb.cn/i/0341cIeiMXoLOVCZdV5hqD.png',
    'Vanilla': 'https://pic1.imgdb.cn/i/0341cIfgVR2sBrdP55kZcJ.png',
    'NethPot': 'https://pic1.imgdb.cn/i/0341cIduqPIDvFTYI8wEGS.png',
    'NoDebuff': 'https://pic1.imgdb.cn/i/0341cIdsbGqgJgkj9mucSR.png',
    'UHC': 'https://pic1.imgdb.cn/i/0341cIeuXv4DiupE82XjQX.png',
    'SMP': 'https://pic1.imgdb.cn/i/0341cIek1RnD2PBtEm8h10.png'
};

const OVERALL_ICON = 'https://pic1.imgdb.cn/i/0341tQLnNzAClsUctf2WLz.png';

const PLAYERS_DATA = [
    {
        id: "2577262529",
        name: "可爱的盐8",
        tag: ["管理员", "Mace"],
        modes: { "Sword": "LT5", "Axe": "HT5", "Mace": "HT3", "Vanilla": "HT4", "NethPot": "LT4", "NoDebuff": "LT5", "UHC": "LT4", "SMP": "LT4" }
    },
    {
        id: "2843650621",
        name: "树_彡_叶",
        modes: { "Sword": "LT4", "Axe": "HT4", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "LT5", "SMP": "" }
    },
    {
        id: "",
        name: "StrikeRay",
        modes: { "Sword": "LT3", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "LT5", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "ice drdrdragon",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT4", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "ICE_clear_",
        modes: { "Sword": "HT4", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "lost_迷失自我",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT5", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "曲园子哒小号",
        tag: ["Mace"],
        modes: { "Sword": "LT5", "Axe": "LT4", "Mace": "LT3", "Vanilla": "", "NethPot": "LT4", "NoDebuff": "", "UHC": "LT5", "SMP": "HT5" }
    },
    {
        id: "",
        name: "apex_cool",
        modes: { "Sword": "LT5", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "Minecraft晓睦",
        tag: ["Mace"],
        modes: { "Sword": "", "Axe": "", "Mace": "LT2", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "爱玩MC的红星",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT5", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "老王不是个菜鸟",
        tag: ["Mace"],
        modes: { "Sword": "LT4", "Axe": "LT4", "Mace": "HT3", "Vanilla": "LT4", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "LT4" }
    },
    {
        id: "",
        name: "杂牌手柄爱91",
        modes: { "Sword": "LT4", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "哈H克K_MC",
        modes: { "Sword": "LT4", "Axe": "LT4", "Mace": "HT5", "Vanilla": "LT5", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "LT5" }
    },
    {
        id: "",
        name: "勇猛的史蒂夫重锤",
        modes: { "Sword": "", "Axe": "", "Mace": "LT5", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "亿万钻虚",
        modes: { "Sword": "LT4", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "_SMPwemmbu",
        tag: ["Sword"],
        modes: { "Sword": "HT4", "Axe": "", "Mace": "", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "我叫抹布不叫温布",
        modes: { "Sword": "LT3", "Axe": "", "Mace": "LT3", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "i_fu91ckyou",
        modes: { "Sword": "", "Axe": "", "Mace": "LT4", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "august_讪凤炎",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT3", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "世尽神將乄学生",
        modes: { "Sword": "LT3", "Axe": "LT4", "Mace": "LT3", "Vanilla": "LT5", "NethPot": "LT3", "NoDebuff": "LT3", "UHC": "LT4", "SMP": "LT4" }
    },
    {
        id: "",
        name: "溯深渊",
        modes: { "Sword": "", "Axe": "", "Mace": "LT2", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "小琳Skyfall",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT3", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "不残不会玩的牛哥",
        modes: { "Sword": "", "Axe": "", "Mace": "LT5", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "刹白QuQ",
        modes: { "Sword": "", "Axe": "LT4", "Mace": "", "Vanilla": "", "NethPot": "LT5", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "回响",
        modes: { "Sword": "", "Axe": "", "Mace": "LT4", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "云寒11",
        modes: { "Sword": "", "Axe": "", "Mace": "", "Vanilla": "LT4", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "幼年快乐划划水",
        modes: { "Sword": "", "Axe": "", "Mace": "HT4", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "薄荷味易爆苦力怕",
        modes: { "Sword": "", "Axe": "", "Mace": "LT3", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "造梦人_苍狼",
        modes: { "Sword": "", "Axe": "", "Mace": "HT4", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "是杰克逊吖",
        modes: { "Sword": "", "Axe": "", "Mace": "HT5", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    },
    {
        id: "",
        name: "渝羽h",
        modes: { "Sword": "", "Axe": "", "Mace": "HT5", "Vanilla": "", "NethPot": "", "NoDebuff": "", "UHC": "", "SMP": "" }
    }
];

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