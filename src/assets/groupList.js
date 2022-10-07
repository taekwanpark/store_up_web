import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";

export const navigation = [
  {
    page: "베스트",
    to: process.env.STORE_PRODUCTS_BEST,
  },
  {
    page: "신상품",
    to: process.env.STORE_PRODUCTS_NEWEST,
  },
  {
    page: "떨이할인",
    to: process.env.STORE_PRODUCTS_DISCOUNT,
  },
  {
    page: "정기구독",
    to: process.env.STORE_PRODUCTS_SUBSCRIPTION,
  },
  {
    page: "이벤트",
    to: process.env.STORE_PROMOTION,
  },
];

export const groupList = [
  {
    id: "001",
    title: "농산물",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: ChartBarIcon,
    childGroupList: [
      { name: "백미/현미" },
      { name: "찹쌀/잡곡/곡류" },
      { name: "김치" },
      { name: "과일/견과" },
      { name: "채소/나물" },
      { name: "농산 가공식품" },
      { name: "기타 농산품" },
    ],
  },
  {
    id: "002",
    title: "수산물",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: CursorArrowRaysIcon,
    childGroupList: [
      { name: "생선류" },
      { name: "해산물" },
      { name: "건어물" },
    ],
  },
  {
    id: "003",
    title: "축산물",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: ShieldCheckIcon,
    childGroupList: [
      { name: "소고기(한우)" },
      { name: "돼지고기(한돈)" },
      { name: "닭/오리" },
      { name: "축산가공육" },
    ],
  },
  {
    id: "004",
    title: "임산물",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: Squares2X2Icon,
    childGroupList: [
      { name: "백미/현미" },
      { name: "찹쌀/잡곡/곡류" },
      { name: "김치" },
      { name: "과일/견과" },
      { name: "채소/나물" },
      { name: "농산 가공식품" },
      { name: "기타 농산품" },
    ],
  },
  {
    id: "005",
    title: "가공식품",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: ArrowPathIcon,
    childGroupList: [
      { name: "백미/현미" },
      { name: "찹쌀/잡곡/곡류" },
      { name: "김치" },
      { name: "과일/견과" },
      { name: "채소/나물" },
      { name: "농산 가공식품" },
      { name: "기타 농산품" },
    ],
  },
  {
    id: "006",
    title: "공산품",
    to: process.env.STORE_PRODUCTS_CATEGORY,
    icon: ArrowPathIcon,
    childGroupList: [
      { name: "백미/현미" },
      { name: "찹쌀/잡곡/곡류" },
      { name: "김치" },
      { name: "과일/견과" },
      { name: "채소/나물" },
      { name: "농산 가공식품" },
      { name: "기타 농산품" },
    ],
  },
];
