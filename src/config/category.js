const stationery = [
  {
    link: 'writing',
    name: '筆記具',
    child: [
      { link: 'pencil', name: '鉛筆' },
      { link: 'mechanical-pencil', name: '自動鉛筆' },
      { link: 'pen', name: '原子筆/中性筆' },
      { link: 'fountain-pen', name: '鋼筆' },
      {
        link: 'not-pen',
        name: '筆類周邊',
        child: [
          { link: 'ink', name: '墨水' },
          { link: 'eraser', name: '橡皮擦' },
          { link: 'pencil-sharpener', name: '削鉛筆器' },
        ],
      },
    ],
  },
  {
    link: 'paper',
    name: '紙製品',
    child: [
      { link: 'notebook', name: '筆記本' },
      { link: 'diary', name: '手帳/日記' },
      { link: 'loose-leaf', name: '活頁紙' },
    ],
  },
  {
    link: 'office',
    name: '事務用品',
    child: [
      { link: 'ruler', name: '尺' },
      { link: 'scissors', name: '剪刀' },
    ],
  },
  {
    link: 'storage',
    name: '收納',
    child: [
      { link: 'folder', name: '資料夾/活頁夾' },
      { link: 'pencil-case', name: '筆袋/筆盒' },
      { link: 'desk', name: '桌上收納' },
    ],
  },
];

export default stationery;
