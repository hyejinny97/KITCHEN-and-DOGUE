import { BsTruck, BsPerson, BsCart2 } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const utils = [
  { label: '주문조회', icon: <BsTruck />, link: '/' },
  { label: 'MY 쇼핑', icon: <BsPerson />, link: '/' },
  { label: '1:1 문의', icon: <TfiHeadphoneAlt />, link: '/' },
  { label: '장바구니', icon: <BsCart2 />, link: '/' },
];

const menus = [
  { label: 'about', link: '/company' },
  { label: 'JERKY', link: '/goods/catalog?category=jerky&sorting=ranking' },
  { label: 'NUTRIBAR', link: '/goods/catalog?category=bar&sorting=ranking' },
  { label: 'PORRIDGE', link: '/goods/catalog?category=porridge&sorting=ranking' },
  { label: 'COOKIE', link: '/' },
  { label: 'LIFEANDDOGUE', link: '/' },
  { label: 'new', link: '/' },
  { label: 'best', link: '/' },
  { label: 'event', link: '/' },
];

export { utils, menus }