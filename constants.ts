import { FacebookIcon, InstagramIcon, XIcon } from "./components/shared/icons";

// ============================
// NAVIGATION ITEMS
// ============================
export const NAV_ITEMS = [
  { label: "Онцлох брэндүүд", href: "/" },
  { label: "Бүтээгдэхүүн", href: "/products" },
  { label: "Бидний тухай", href: "/about" },
];
export interface SocialItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ============================
// SOCIALS
// ============================
export const SOCIALS: SocialItem[] = [
  { label: "Khalifa Mongolia", href: "fb.com", icon: FacebookIcon },
  { label: "khalifamongolia", href: "fb.com", icon: InstagramIcon },
  { label: "Khalifa Mongolia", href: "fb.com", icon: XIcon },
];

// ============================
// FOOTER ITEMS
// ============================
export interface FooterItem {
  label: string;
  href: string;
}

export const FOOTER_ITEMS: FooterItem[] = [
  { label: "Түгээмэл асуулт, хариулт", href: "/faq" },
  { label: "Нээлттэй ажлын байр", href: "https://docs.google.com/forms/d/e/1FAIpQLSeA9dSYVFCcR9LzDHdSuVadQpuBCIl1glI-G6wpazdpreYq5w/viewform?fbclid=IwY2xjawFeEJNleHRuA2FlbQIxMAABHUUbjBRCjOMKOTP8oH5HmgUbAR0bDEvqU7_8G-8GQ6HhxXmBV39WdsI0pA_aem_bS5s7qA0AX2Xeg-HNNSoQw" },
  { label: "Нууцлалын бодлого", href: "/privacy-policy" },
];

export interface FeaturedProduct {
  id: number;
  title: string;
  description?: string;
  image: string;
  url: string;
}

export interface FeaturedBrand {
  id: number;
  banner: {
    image: string;
    logo: string;
  };
  title: string;
  description: string;
  products: FeaturedProduct[];
}

export const FEATURED_BRAND: FeaturedBrand[] = [
  {
    id: 1,
    banner: {
      image: "/banner/banner-1.png",
      logo: "/banner/banner-logo.png",
    },
    title: "Laurent - Perrier Champagne",
    description: `1812 оноос эхэлсэн түүхтэй Лоран-Перриер оргилуун дарс нь оргилуун дарсны хамгийн том брэндүүдийн нэг юм. Гэр бүлийн бизнес болох Лоран-Перриерийн үйлдвэр нь Бернард де Нонанкурын хүсэл тэмүүлэл, алсын харааны ачаар өнөөдрийн оргилуун дарсны зах зээлд томоохон байр суурийг эзэлж байна. Төгс төгөлдөр байдал, дэгжин байдал, бие даасан байдал нь Лоран-Перриер үйлдвэрийн хамгийн чухал гурван үнэт зүйл юм. Энэхүү оргилуун дарс нь өөрийн өвөрмөц өнгө төрх, амт чанар, бэлгэ тэмдэг бүхий өнгө төрхөө өнөөдрийг хүртэл хадгалж ирсэн нь хамгийн алдартай тансаг гэх тодотголыг авсан байна.`,
    products: [
      {
        id: 1,
        title: "Laurent Perrier La Cuvee Brut",
        description: "L’équilibre Parfait",
        image: "/wine/wine-1.png",
        url: "#",
      },
      {
        id: 2,
        title: "Laurent Perrier Rose",
        description: "L’équilibre Parfait",
        image: "/wine/wine-1.png",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    banner: {
      image: "/banner/banner-1.png",
      logo: "/banner/banner-logo.png",
    },
    title: "Glenfiddich Whisky",
    description: `Гленфиддич нь Гали хэлээр "бугын хөндий" гэсэн утгатай ба Гленфиддичийн нэрэх үйлдвэрийг 1886 онд Уильям Грант анх үүсгэн байгуулжээ. Өдгөө Гленфиддич бол виски ертөнцийн томоохон брэндүүдийн нэг юм. Дэлхийн хамгийн алдартай нэг амууны Шотланд вискиний брэнд бөгөөд тус нэрэх үйлдвэр нь "Өндөр уулсын зүрх" гэж нэрлэгддэг Даффтаун хотод байрладаг байна. Энэхүү брэндийн үүсгэн байгуулагч Уильям Грант нь “хөндий дэх хамгийн сайн виски" хийх алсын хараатай байсан бө өнөөдөр Гленфиддич дэлхийн 180 гаруй оронд худалдаалагдаж байгаа нь түүний хүлээлтээс ч давсан байна. Glenfiddich нэг амууны Шотланд вискины хувилбар бүр нь өөрийн зан чанараараа ялгаатай бөгөөд амт тус бүр нь өөр өөрийн хэв маягт тохирсон байдаг. Алдарт гурвалжин хэлбэртэй лонхыг нь 1957 онд зохион бүтээсэн ба энэ загвар нь ус, агаар, соёолж гурвын ач холбогдлыг илтгэн харуулжээ.`,
    products: [
      {
        id: 3,
        title: "Glenfiddich 12 years",
        description: "Single malt Scotch whisky",
        image: "/wine/wine-1.png",
        url: "#",
      },
      {
        id: 4,
        title: "Glenfiddich 15 years",
        description: "Solera Single malt Scotch whisky",
        image: "/wine/wine-1.png",
        url: "#",
      },
      {
        id: 5,
        title: "Glenfiddich 18 years",
        description: "Small batch Reserve",
        image: "/wine/wine-1.png",
        url: "#",
      },
    ],
  },
];

// ============================
// PRODUCTS
// ============================
export interface Product {
  id: number;
  name: string;
  category_id: number;
  description: string;
  quantity: number;
  price?: number;
  image: string;
  url: string;
}

export const PRODUCTS_LIST: Product[] = [
  {
    id: 6,
    name: "Signature Candle",
    category_id: 1,
    description: "",
    quantity: 2,
    price: 55000,
    image: "/wine/wine-2.png",
    url: "#",
  },
  {
    id: 7,
    name: "Glen Talloch Blended Whisky Rare & Old",
    category_id: 5,
    description: "",
    quantity: 0,
    price: 95000,
    image: "/wine/wine-2.png",
    url: "#",
  },
  {
    id: 8,
    name: "Sierra Silver",
    category_id: 7,
    description: "",
    quantity: 0,
    price: 82000,
    image: "/wine/wine-2.png",
    url: "#",
  },
  {
    id: 9,
    name: "Grand Marnier Gordon Rouge",
    category_id: 4,
    description: "",
    quantity: 2,
    price: 138000,
    image: "/wine/wine-2.png",
    url: "#",
  },
];

// ============================
// CATEGORIES
// ============================
export interface Category {
  id: number;
  title: string;
}

export const CATEGORIES: Category[] = [
  { id: 1, title: "gift set" },
  { id: 2, title: "gin" },
  { id: 3, title: "rum" },
  { id: 4, title: "liqueur" },
  { id: 5, title: "whiskey" },
  { id: 6, title: "champagne" },
  { id: 7, title: "tequila" },
];

export const ABOUT = [
  {
    id: 1,
    title: 'Эрхэм зорилго',
    description: 'Дэлхийн тансаг зэрэглэлийн шингэн бүтээгдэхүүнийг Монголдоо хямд үнээр, албан ёсны баталгаат үйлдвэрээс нь худалдан борлуулж үйлчлүүлэгч хэрэглэгч нартаа хамгийн хялбар үйлчилгээг санал болгох юм.'
  },
  {
    id: 2,
    title: 'Алсын хараа',
    description: 'Бараа бүтээгдэхүүнийхээ төрлийн нэмэгдүүлж илүү хялбар аргаар бусдаас хямд үнээр премиум зэрэглэлийн бараа бүтээгдэхүүнийг хэрэглэгчдэд нийлүүлэх болон шингэн хүнсийг зохистой хэрэглэх соёлыг дэлгэрүүлэхэд оршино.'
  },
  {
    id: 3,
    title: 'Үнэт зүйл',
    description: 'Чанарыг эрхэмлэж, соёлыг түгээж, ёс зүйг баримтална.'
  },
]