//依對照返回繁體中文的名稱

const conversionTable = {
  stationery: '所有文具',
  writing: '筆記具',
  pencel: '鉛筆',
  'mechanical-pencil': '自動鉛筆',
  pen: '原子筆/中性筆',
  'fountain-pen': '鋼筆',
  'not-pen': '筆類周邊',
  ink: '墨水',
  eraser: '橡皮擦',
  'pencil-sharpener': '削鉛筆器',
  paper: '紙製品',
  notebook: '筆記本',
  diary: '手帳/日記',
  'loose-leaf': '活頁紙',
  office: '事務用品',
  ruler: '尺',
  storage: '收納',
  folder: '資料夾/活頁夾',
  'pencil-case': '筆袋/筆盒',
  desk: '桌面收納',
};

const getCHTName = (ENGName) => {
  return conversionTable[ENGName] ? conversionTable[ENGName] : ENGName;
};

export default getCHTName;
