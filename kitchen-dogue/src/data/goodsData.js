const categoryData = [
  { label: 'JERKY', link: '/goods/catalog?category=jerky&sorting=ranking' },
  { label: 'BAR', link: '/goods/catalog?category=bar&sorting=ranking' },
  { label: 'PORRIDGE', link: '/goods/catalog?category=porridge&sorting=ranking' }
];

const sortingData = [
  { label: '랭킹순', searchParamKey: 'sorting', searchParamValue: 'ranking' },
  { label: '낮은가격순', searchParamKey: 'sorting', searchParamValue: 'low-price' },
  { label: '높은가격순', searchParamKey: 'sorting', searchParamValue: 'high-price' },
]

export { categoryData, sortingData };