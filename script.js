// ===== DATA - K Food Sri Lanka Products (from WON MART price list) =====
const CATEGORIES = [
    { id: 'all', ko: '전체', en: 'All', icon: '🍽️' },
    { id: 'noodle', ko: '면류', en: 'Noodles', icon: '🍜' },
    { id: 'cup', ko: '컵라면', en: 'Cup Noodles', icon: '🥤' },
    { id: 'snack', ko: '간식', en: 'Snacks', icon: '🍿' },
    { id: 'meal', ko: '즉석식품', en: 'Meal Kits', icon: '🍲' },
    { id: 'drink', ko: '음료', en: 'Drinks', icon: '🧃' },
];

const PRODUCTS = [
    {
        id: 'p1', cat: 'noodle', en: 'Shin Ramyun', ko: '신라면',
        price: 540, weight: '120g', emoji: '🍜', color: '#E53E3E',
        badge: 'Bestseller', brand: 'NONGSHIM',
        desc: "Korea's classic — rich beef broth with a warm, savoury kick.",
        image:"Shin Ramyun.jpg"            },
    {
        id: 'p2', cat: 'noodle', en: 'Shin Ramyun Stir Fry Cheese', ko: '신라면 볶음면 스터',
        price: 640, weight: '136g', emoji: '🧀', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Stir-fried noodles with a creamy, cheesy spicy sauce.",
        image:"Shin Ramyun Stir Fry Cheese.jpg"            },
    {
        id: 'p3', cat: 'noodle', en: 'Shin Ramyun Toomba', ko: '신라면 툼바',
        price: 640, weight: '137g', emoji: '🍲', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Creamy tomato-cream style spicy noodle soup.",
        image:"Shin Ramyun Toomba.jpg"
    },
    {
        id: 'p4', cat: 'noodle', en: 'Shin Red Super Spicy', ko: '신 레드 슈퍼 스파이시',
        price: 640, weight: '120g', emoji: '🌶️', color: '#C53030',
        badge: '🔥 Extra Spicy', brand: 'NONGSHIM',
        desc: "An even hotter take on the Shin classic — for heat seekers.",
        image:"Shin Red Super Spicy.jpg"},
    {
        id: 'p5', cat: 'noodle', en: 'Shin Ramyun Spicy Chicken', ko: '신라면 매운치킨',
        price: 640, weight: '120g', emoji: '🐔', color: '#E53E3E',
        brand: 'NONGSHIM',
        desc: "Shin's signature broth with a spicy chicken twist.",
        image:"Shin Ramyun Spicy Chicken.jpeg"},
    {
        id: 'p6', cat: 'noodle', en: 'Ansungtangmyun', ko: '안성탕면',
        price: 640, weight: '125g', emoji: '🍜', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "A milder, hearty Korean noodle soup with deep savoury flavour.",
        image:"Ansungtangmyun.jpg"},
    {
        id: 'p7', cat: 'noodle', en: 'Shin Ramyun Black', ko: '신라면 블랙',
        price: 795, weight: '130g', emoji: '🍜', color: '#1A202C',
        badge: 'New / Premium', brand: 'NONGSHIM',
        desc: "Premium edition with a richer, deeper beef bone broth.",
        image:"Shin Ramyun Black.jpg"},
    {
        id: 'p8', cat: 'cup', en: 'Shin Ramyun Toomba Bowl', ko: '신라면 툼바 보울',
        price: 795, weight: '113g', emoji: '🥣', color: '#D69E2E',
        badge: 'New', brand: 'NONGSHIM',
        desc: "Creamy Toomba flavour in a convenient grab-and-go bowl.",
        image:"Shin Ramyun Toomba Bowl.jpg"},
    {
        id: 'p9', cat: 'cup', en: 'Shin Ramyun Cup', ko: '신컵',
        price: 560, weight: '68g', emoji: '🥤', color: '#E53E3E',
        brand: 'NONGSHIM',
        desc: "The same gourmet-spicy broth, in a quick grab-and-go cup.",
        image:"Shin Ramyun Cup.jpg"},
    {
        id: 'p10', cat: 'noodle', en: 'Shin Ramyun Stir Fry', ko: '신라면 볶음면',
        price: 640, weight: '131g', emoji: '🍝', color: '#E53E3E',
        brand: 'NONGSHIM',
        desc: "Stir-fried version of the Shin classic — bold and saucy.",
        image:"Shin Ramyun Stir Fry.png"},
    {
        id: 'p11', cat: 'noodle', en: 'Cham Pong', ko: '참퐁',
        price: 640, weight: '124g', emoji: '🦐', color: '#C53030',
        brand: 'NONGSHIM',
        desc: "Spicy seafood-style noodle soup, Korean-Chinese favourite.",
        image:"Cham Pong.png"},
    {
        id: 'p12', cat: 'noodle', en: 'Hotdak Original', ko: '핫닭 오리지널',
        price: 640, weight: '140g', emoji: '🔥', color: '#C53030',
        brand: 'NONGSHIM',
        desc: "Fiery hot chicken flavour noodles with serious heat.",
        image:"Hotdak Original.jpg"},
    {
        id: 'p13', cat: 'noodle', en: 'Hotdak Cheese', ko: '핫닭 치즈',
        price: 640, weight: '150g', emoji: '🧀', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Spicy hot chicken noodles balanced with creamy cheese.",
        image:"Hotdak Cheese.jpg"},
    {
        id: 'p14', cat: 'noodle', en: 'Hotdak Carbo', ko: '핫닭 카르보',
        price: 640, weight: '140g', emoji: '🍝', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Creamy carbonara-style spicy hot chicken noodles.",
        image:"Hotdak Carbo.jpg"},
    {
        id: 'p15', cat: 'snack', en: 'Yopokki Cheese Topokki', ko: '요뽀끼 치즈 떡볶이',
        price: 950, weight: '120g', emoji: '🧀', color: '#D69E2E',
        brand: 'YOPOKKI',
        desc: "Chewy Korean rice cakes in a creamy cheese sauce.",
        image:"Yopokki Cheese Topokki.jpg"            
    },
    {
        id: 'p16', cat: 'snack', en: 'Yopokki Hot & Spicy Topokki', ko: '요뽀끼 매운맛 떡볶이',
        price: 950, weight: '120g', emoji: '🌶️', color: '#E53E3E',
        brand: 'YOPOKKI',
        desc: "Chewy rice cakes in a fiery, sweet-spicy sauce.",
        image:"Yopokki Hot & Spicy Topokki.jpg"},
    {
        id: 'p17', cat: 'snack', en: 'Seasoned Seaweed Dosirak', ko: '조미 김 도시락',
        price: 570, weight: '15g (3x24)', emoji: '🍙', color: '#38A169',
        brand: 'DOSIRAK',
        desc: "Crispy roasted seaweed with olive oil and green tea powder.",
        image:"Seasoned Seaweed Dosirak.jpg"},
    {
        id: 'p18', cat: 'snack', en: "O'Star Kimchi", ko: '오스타 김치맛',
        price: 490, weight: '30g', emoji: '🍟', color: '#E53E3E',
        brand: "O'STAR",
        desc: "Crunchy corn snack with tangy Korean kimchi flavour.",
        image:"O'Star Kimchi.JPG"            },
    {
        id: 'p19', cat: 'snack', en: "O'Star Chicken BBQ", ko: '오스타 치킨 바베큐',
        price: 490, weight: '30g', emoji: '🍗', color: '#D69E2E',
        brand: "O'STAR",
        desc: "Smoky chicken BBQ flavoured corn snack.",
        image:"O'Star Chicken BBQ.jpg"            },
    {
        id: 'p20', cat: 'snack', en: "O'Star New York Beef Steak", ko: '오스타 뉴욕 스테이크',
        price: 490, weight: '30g', emoji: '🥩', color: '#744210',
        brand: "O'STAR",
        desc: "Savoury New York style beef steak flavoured corn snack.",
        image:"O'Star New York Beef Steak.jpg"            },
    {
        id: 'p21', cat: 'snack', en: 'Chocopie', ko: '초코파이',
        price: 1350, weight: '180g', emoji: '🍫', color: '#744210',
        badge: 'Classic', brand: 'ORION',
        desc: "Marshmallow-filled chocolate snack, a Korean childhood favourite.",
        image:"Chocopie.png"            },
    {
        id: 'p22', cat: 'snack', en: 'Chocopie Dark', ko: '초코파이 다크',
        price: 1650, weight: '180g', emoji: '🍫', color: '#1A202C',
        brand: 'ORION',
        desc: "The classic Chocopie with rich dark chocolate coating.",
        image:"Chocopie Dark.png"            },
    {
        id: 'p23', cat: 'snack', en: 'Chocopie Fluffy (Big Box)', ko: '초코파이 플러피',
        price: 2900, weight: '468g', emoji: '🍫', color: '#744210',
        badge: 'Family Size', brand: 'ORION',
        desc: "The big family-size box of marshmallow Chocopies.",
        image:"Chocopie Fluffy (Big Box).jpg"               },
    {
        id: 'p24', cat: 'snack', en: "Welch's Drink", ko: '웰치스 음료',
        price: 490, weight: '355ml', emoji: '🥤', color: '#805AD5',
        badge: 'New', brand: "WELCH'S",
        desc: "Refreshing fruit-flavoured soft drink, straight from Korea.",
        image:"Welch's Drink.jpg"          
    },
    {
        id: 'p25', cat: 'meal', en: 'Braised Spicy Chicken', ko: '닭볶음탕',
        price: 0, comingSoon: true, weight: '', emoji: '🍗', color: '#8B1A1A',
        badge: 'Coming Soon', brand: 'MAMICOOK',
        desc: "Ready-to-heat Korean braised chicken in a rich, spicy red sauce.",
        image:"Braised Spicy Chicken.png"
    },
    {
        id: 'p26', cat: 'meal', en: 'Galbitang (Short Rib Soup)', ko: '갈비탕',
        price: 0, comingSoon: true, weight: '', emoji: '🍲', color: '#8B1A1A',
        badge: 'Coming Soon', brand: 'MAMICOOK',
        desc: "Comforting Korean beef short rib soup, ready to heat and serve.",
        image:"Galbitang.png"
    },
    {
        id: 'p27', cat: 'snack', en: "O'Star Premium Beef Steak Chips", ko: '오스타 프리미엄 뉴욕 스테이크',
        price: 0, weight: '60g', emoji: '🥩', color: '#556B2F',
        badge: 'Premium', brand: "O'STAR",
        desc: "Ridged premium potato chips with a savoury New York steak flavour.",
        image:"O'Star Premium Beef Steak.png"
    },
    {
        id: 'p28', cat: 'snack', en: "O'Star Premium Chicken BBQ Chips", ko: '오스타 프리미엄 치킨 바베큐',
        price: 0, weight: '60g', emoji: '🍗', color: '#D2691E',
        brand: "O'STAR",
        desc: "Ridged premium potato chips with a smoky chicken BBQ flavour.",
        image:"O'Star Premium Chicken BBQ.png"
    },
    {
        id: 'p29', cat: 'snack', en: "O'Star Premium Kimchi Chips", ko: '오스타 프리미엄 김치맛',
        price: 0, weight: '60g', emoji: '🌶️', color: '#C53030',
        brand: "O'STAR",
        desc: "Ridged premium potato chips with a tangy Korean kimchi flavour.",
        image:"O'Star Premium Kimchi.png"
    },
    {
        id: 'p30', cat: 'snack', en: "Welch's Zero Cherry Strawberry", ko: '웰치스 제로 체리스트로베리',
        price: 0, weight: '355ml', emoji: '🍒', color: '#D53F8C',
        badge: 'Zero Sugar', brand: "WELCH'S",
        desc: "Sugar-free sparkling soda with cherry-strawberry flavour.",
        image:"Welchs Zero Cherry Strawberry.png"
    },
    {
        id: 'p31', cat: 'snack', en: "Welch's Zero Shine Muscat", ko: '웰치스 제로 샤인머스캣',
        price: 0, weight: '355ml', emoji: '🍈', color: '#38A169',
        badge: 'Zero Sugar', brand: "WELCH'S",
        desc: "Sugar-free sparkling soda with sweet shine muscat grape flavour.",
        image:"Welchs Zero Shine Muscat.png"
    },
    {
        id: 'p32', cat: 'snack', en: "Welch's Grape Soda", ko: '웰치스 포도 음료',
        price: 0, weight: '355ml', emoji: '🍇', color: '#6B21A8',
        brand: "WELCH'S",
        desc: "Classic sparkling grape soda, sweet and fruity.",
        image:"Welchs Grape.png"
    },
    {
        id: 'p33', cat: 'snack', en: "Kwang Cheon Kim Seasoned Seaweed", ko: '광천김 조미김',
        price: 0, weight: '5g x 3', emoji: '🍙', color: '#38A169',
        brand: 'KWANG CHEON KIM',
        desc: "Crispy roasted seaweed brushed with olive oil and green tea, 3-pack.",
        image:"Kwang Cheon Kim Seasoned Seaweed.png"
    },

    // ===== NEW ITEMS ADDED FROM AGENT PRICE LIST =====
    {
        id: 'p34', cat: 'noodle', en: 'Shin Ramyun Kimchi', ko: '신라면 김치',
        price: 640, weight: '120g', emoji: '🍜', color: '#C53030',
        brand: 'NONGSHIM',
        desc: "Shin Ramyun's classic broth with a tangy kimchi twist.",
    },
    {
        id: 'p35', cat: 'noodle', en: 'Shin Ramyun Chapagetti', ko: '신라면 짜파게티',
        price: 640, weight: '140g', emoji: '🍝', color: '#744210',
        brand: 'NONGSHIM',
        desc: "Savoury black bean sauce noodles, a Korean-Chinese favourite.",
    },
    {
        id: 'p36', cat: 'noodle', en: 'Neoguri Spicy', ko: '너구리 매운맛',
        price: 640, weight: '120g', emoji: '🦑', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Thick, chewy udon-style noodles in a spicy seafood broth.",
    },
    {
        id: 'p37', cat: 'meal', en: 'Pork Kimchi Stew', ko: '돼지고기 김치찜',
        price: 1800, weight: '400g', emoji: '🍲', color: '#8B1A1A',
        desc: "Ready-to-heat spicy pork and kimchi stew.",
    },
    {
        id: 'p38', cat: 'cup', en: 'Lazo Cup', ko: '라조 컵',
        price: 170, emoji: '🥤', color: '#718096',
        brand: 'LAZO',
        desc: "Compact instant cup noodle — quick and convenient.",
    },
    {
        id: 'p39', cat: 'drink', en: 'Onecup Peach Iced Tea', ko: '원컵 복숭아 아이스티',
        price: 630, weight: '230ml', emoji: '🍑', color: '#F6AD55',
        brand: 'ONECUP',
        desc: "Refreshing peach-flavoured iced tea.",
    },
    {
        id: 'p40', cat: 'drink', en: 'Onecup Bluelemon Ade', ko: '원컵 블루레몬에이드',
        price: 630, weight: '230ml', emoji: '🍋', color: '#3182CE',
        brand: 'ONECUP',
        desc: "Zesty blue lemon ade, sweet and citrusy.",
    },
    {
        id: 'p41', cat: 'drink', en: 'Onecup Blueberry Ade', ko: '원컵 블루베리에이드',
        price: 630, weight: '230ml', emoji: '🫐', color: '#5A67D8',
        brand: 'ONECUP',
        desc: "Fruity blueberry ade, cool and refreshing.",
    },
    {
        id: 'p42', cat: 'drink', en: 'Onecup Watermelon Ade', ko: '원컵 수박에이드',
        price: 630, weight: '230ml', emoji: '🍉', color: '#38A169',
        brand: 'ONECUP',
        desc: "Sweet watermelon ade, perfect for a hot day.",
    },
    {
        id: 'p43', cat: 'drink', en: 'Onecup Green Grape Ade', ko: '원컵 청포도에이드',
        price: 630, weight: '230ml', emoji: '🍏', color: '#68A063',
        brand: 'ONECUP',
        desc: "Crisp green grape ade with a light, sweet flavour.",
    },
    {
        id: 'p44', cat: 'drink', en: 'Onecup Mango Ade', ko: '원컵 망고에이드',
        price: 630, weight: '230ml', emoji: '🥭', color: '#ED8936',
        brand: 'ONECUP',
        desc: "Tropical mango ade, sweet and smooth.",
    },
    {
        id: 'p45', cat: 'drink', en: 'Melon Flavored Milk Drink', ko: '메론맛 우유음료',
        price: 590, weight: '200ml', emoji: '🍈', color: '#9AE6B4',
        desc: "Creamy melon-flavoured milk drink.",
    },
    {
        id: 'p46', cat: 'drink', en: 'Strawberry Flavoured Milk Drink', ko: '딸기맛 우유음료',
        price: 590, weight: '200ml', emoji: '🍓', color: '#F687B3',
        desc: "Creamy strawberry-flavoured milk drink.",
    },
    {
        id: 'p47', cat: 'drink', en: 'Banana Flavoured Milk Drink', ko: '바나나맛 우유음료',
        price: 590, weight: '200ml', emoji: '🍌', color: '#ECC94B',
        desc: "Creamy banana-flavoured milk drink.",
    },
    {
        id: 'p48', cat: 'drink', en: 'Olatte Strawberry', ko: '올라떼 딸기',
        price: 590, weight: '240ml', emoji: '🍓', color: '#D53F8C',
        brand: 'OLATTE',
        desc: "Smooth strawberry latte-style milk drink.",
    },
    {
        id: 'p49', cat: 'drink', en: 'Olatte Pear', ko: '올라떼 배',
        price: 590, weight: '240ml', emoji: '🍐', color: '#68A063',
        brand: 'OLATTE',
        desc: "Smooth pear latte-style milk drink.",
    },
    {
        id: 'p50', cat: 'drink', en: 'Olatte Peach', ko: '올라떼 복숭아',
        price: 590, weight: '240ml', emoji: '🍑', color: '#ED8936',
        brand: 'OLATTE',
        desc: "Smooth peach latte-style milk drink.",
    },
    {
        id: 'p51', cat: 'drink', en: 'Aloe Vera Drink (Small)', ko: '알로에 음료 (소)',
        price: 690, weight: '500ml', emoji: '🌵', color: '#38A169',
        desc: "Refreshing aloe vera drink with real aloe pulp.",
    },
    {
        id: 'p52', cat: 'snack', en: 'Onion Rings', ko: '어니언 링',
        price: 590, weight: '45g', emoji: '🧅', color: '#D69E2E',
        brand: 'NONGSHIM',
        desc: "Crispy onion-flavoured ring snack.",
    },
    {
        id: 'p53', cat: 'snack', en: 'Banana Kick Snack', ko: '바나나킥',
        price: 590, weight: '45g', emoji: '🍌', color: '#ECC94B',
        desc: "Crunchy corn snack with sweet banana flavour.",
    },
    {
        id: 'p54', cat: 'snack', en: 'Shrimp Cracker', ko: '새우깡',
        price: 650, weight: '75g', emoji: '🍤', color: '#E53E3E',
        desc: "Crispy cracker snack with savoury shrimp flavour.",
    },
    {
        id: 'p55', cat: 'drink', en: 'Energy Bacchus', ko: '박카스',
        price: 690, weight: '250ml', emoji: '⚡', color: '#2B6CB0',
        brand: 'BACCHUS',
        desc: "Energising Korean tonic drink.",
    },

    // ===== COMING SOON ITEMS (from latest WON MART price list) =====
    {
        id: 'p56', cat: 'noodle', en: 'Shin Kimchi Stir Fry', ko: '신 김치 볶음면',
        price: 0, comingSoon: true, weight: '', emoji: '🍜', color: '#C53030',
        badge: 'Coming Soon', brand: 'NONGSHIM',
        desc: "Stir-fried noodles with a bold, tangy kimchi kick.",
    },
    {
        id: 'p57', cat: 'noodle', en: 'Tomyum Stir Fry', ko: '똠얌 볶음면',
        price: 0, comingSoon: true, weight: '', emoji: '🍜', color: '#805AD5',
        badge: 'Coming Soon', brand: 'NONGSHIM',
        desc: "Stir-fried noodles with a zesty, aromatic tom yum flavour.",
    },
    {
        id: 'p58', cat: 'noodle', en: 'Yukgaejang', ko: '육개장 라면',
        price: 0, comingSoon: true, weight: '', emoji: '🍲', color: '#8B1A1A',
        badge: 'Coming Soon', brand: 'NONGSHIM',
        desc: "Spicy Korean shredded beef soup noodles, hearty and warming.",
    },
    {
        id: 'p59', cat: 'meal', en: 'Black Goat Tang', ko: '흑염소탕',
        price: 0, comingSoon: true, weight: '', emoji: '🍲', color: '#8B1A1A',
        badge: 'Coming Soon', brand: 'MAMICOOK',
        desc: "Ready-to-heat traditional Korean black goat soup.",
    },
    {
        id: 'p60', cat: 'drink', en: 'Americano Hazelnut Flavor', ko: '아메리카노 헤이즐넛향',
        price: 0, comingSoon: true, weight: '', emoji: '☕', color: '#744210',
        badge: 'Coming Soon', brand: 'ONECUP',
        desc: "Smooth iced americano with a warm hazelnut aroma.",
    },
    {
        id: 'p61', cat: 'snack', en: 'Potato Chips', ko: '포테토칩',
        price: 0, comingSoon: true, weight: '', emoji: '🥔', color: '#D69E2E',
        badge: 'Coming Soon',
        desc: "Classic crispy potato chips.",
    },
];

const HERO_DISHES = [
    { emoji: '🍜', color: '#E53E3E', size: 108, top: 6, left: 4, rot: -6 },
    { emoji: '🌶️', color: '#C53030', size: 76, top: 2, left: 34, rot: 4 },
    { emoji: '🥤', color: '#D69E2E', size: 84, top: 20, left: 56, rot: -3 },
    { emoji: '🔥', color: '#E53E3E', size: 96, top: 58, left: 8, rot: 5 },
    { emoji: '🍟', color: '#D69E2E', size: 70, top: 62, left: 66, rot: -5 },
    { emoji: '🍫', color: '#744210', size: 64, top: 4, left: 82, rot: 8 },
    { emoji: '🍙', color: '#38A169', size: 72, top: 66, left: 40, rot: 3 },
];

// ===== OFFER POPUP CONFIG =====
// Set to false to turn the popup off completely, or set OFFER_START / OFFER_END
// (format 'YYYY-MM-DD') to auto-hide it once the offer period ends.
const OFFER_ACTIVE = true;
const OFFER_START = null; // e.g. '2026-07-24'
const OFFER_END = null;   // e.g. '2026-08-03'

function isOfferLive() {
    if (!OFFER_ACTIVE) return false;
    const now = new Date();
    if (OFFER_START && now < new Date(OFFER_START)) return false;
    if (OFFER_END && now > new Date(OFFER_END + 'T23:59:59')) return false;
    return true;
}

// ===== STATE =====
let state = {
    category: 'all',
    query: '',
    cart: {},
    wishlist: {},
    cartOpen: false,
    step: 0,
    shipping: { name: '', phone: '', address: '', city: '', zip: '' },
    orderNo: null,
    toast: null,
    toastTimer: null,
    mobileOpen: false,
};

// ===== HELPERS =====
function money(n) { return 'Rs. ' + n.toFixed(2); }

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }

function getCartItems() {
    return Object.entries(state.cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ ...getProduct(id), qty }));
}

function getItemCount() {
    return getCartItems().reduce((s, i) => s + i.qty, 0);
}

function getSubtotal() {
    return getCartItems().reduce((s, i) => s + i.price * i.qty, 0);
}

function getShipping() {
    const sub = getSubtotal();
    // Free shipping over Rs. 5,000
    return sub > 5000 || sub === 0 ? 0 : 550;
}

function getTotal() {
    return getSubtotal() + getShipping();
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    state.mobileOpen = !state.mobileOpen;
    document.getElementById('mobileNav').classList.toggle('open', state.mobileOpen);
}

function closeMobileMenu() {
    state.mobileOpen = false;
    document.getElementById('mobileNav').classList.remove('open');
}

// ===== OFFER BANNER =====
function showOfferBanner() {
    document.getElementById('offerBanner').style.display = 'flex';
}

// ===== RENDER FUNCTIONS =====

function renderHero() {
    const container = document.getElementById('heroTable');
    const isMobile = window.innerWidth <= 600;
    const scale = isMobile ? 0.6 : 1;
    
    container.innerHTML = HERO_DISHES.map((d, i) => {
        const size = Math.round(d.size * scale);
        return `<div class="up-dish" style="--rot:${d.rot}deg;width:${size}px;height:${size}px;top:${d.top}%;left:${d.left}%;background:radial-gradient(circle at 35% 30%, ${d.color}dd, ${d.color});font-size:${size*0.4}px;transform:rotate(${d.rot}deg)">${d.emoji}</div>`;
    }).join('');
}

function renderCategories() {
    const container = document.getElementById('categoryStrip');
    const chips = CATEGORIES.map(c =>
        `<button class="up-cat-chip ${state.category === c.id ? 'active' : ''}" onclick="setCategory('${c.id}')">
            <span class="up-chip-icon">${c.icon}</span>
            ${c.en} <span class="up-chip-ko">${c.ko}</span>
        </button>`
    ).join('');
    const searchWrap = container.querySelector('.up-searchwrap');
    container.innerHTML = chips + searchWrap.outerHTML;
    const newSearch = container.querySelector('.up-searchwrap');
    newSearch.innerHTML = `
        <span class="up-search-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input type="text" id="searchInput" placeholder="Search" oninput="handleSearch(this.value)" value="${state.query}" />
    `;
}

function renderProducts() {
    const container = document.getElementById('productGrid');
    const filtered = PRODUCTS.filter(p => {
        const matchesCat = state.category === 'all' || p.cat === state.category;
        const q = state.query.trim().toLowerCase();
        const matchesQuery = q === '' || p.en.toLowerCase().includes(q) || p.ko.includes(q);
        return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="up-empty">No products match that search — try another category.</div>`;
        return;
    }

    container.innerHTML = filtered.map(p => {
        const inWishlist = state.wishlist[p.id] || false;
        const badgeHtml = p.badge ? `<span class="up-card-badge"${p.comingSoon ? ' style="background:var(--gray-500);"' : ''}>${p.badge}</span>` : '';
        const descHtml = p.desc ? `<div class="up-card-desc">${p.desc}</div>` : '';
        const brandHtml = p.brand ? `<div class="up-card-brand">${p.brand}</div>` : '';
        const weightHtml = p.weight ? `<div class="up-card-weight">${p.weight}</div>` : '';

        const imageHtml = p.image ? `
            <div class="up-product-image">
                <img src="${p.image}" alt="${p.en}" loading="lazy" />
            </div>
        ` : `
            <div class="up-product-image">
                <div class="up-image-placeholder">
                    <span class="up-emoji-big">${p.emoji}</span>
                    <span class="up-brand-tag">${p.brand || ''}</span>
                </div>
            </div>
        `;

        const priceHtml = p.comingSoon
            ? `<div class="up-card-price" style="color:var(--gray-400);font-size:15px;">Coming Soon</div>`
            : `<div class="up-card-price">${money(p.price)}</div>`;

        const actionHtml = p.comingSoon
            ? `<button class="up-add-btn" disabled style="background:var(--gray-300);color:var(--gray-500);cursor:not-allowed;">Coming Soon</button>`
            : `<button class="up-add-btn" onclick="addToCart('${p.id}')">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add to Cart
                </button>`;
        
        return `
            <div class="up-card">
                ${badgeHtml}
                <button class="up-wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist('${p.id}')">
                    ${inWishlist ? '❤️' : '🤍'}
                </button>
                ${imageHtml}
                ${brandHtml}
                <div class="up-card-en">${p.en}</div>
                <div class="up-card-ko">${p.ko}</div>
                ${descHtml}
                ${weightHtml}
                ${priceHtml}
                ${actionHtml}
            </div>
        `;
    }).join('');
}

function renderCart() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const emptyMsg = document.getElementById('emptyCartMsg');
    const countEl = document.getElementById('cartCount');

    const items = getCartItems();
    countEl.textContent = getItemCount();

    if (items.length === 0) {
        body.innerHTML = '';
        footer.style.display = 'none';
        emptyMsg.style.display = 'block';
        return;
    }

    emptyMsg.style.display = 'none';
    footer.style.display = 'block';

    body.innerHTML = items.map(item => {
        const imageHtml = item.image ? `
            <img src="${item.image}" alt="${item.en}" loading="lazy" />
        ` : `
            <span class="up-emoji-sm">${item.emoji}</span>
        `;
        
        return `
            <div class="up-line">
                <div class="up-line-image">
                    ${imageHtml}
                </div>
                <div class="up-line-info">
                    <div class="up-line-en">${item.en}</div>
                    <div class="up-line-price">${money(item.price)} each</div>
                </div>
                <div class="up-qty">
                    <button onclick="changeQty('${item.id}', -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </div>
        `;
    }).join('');

    const sub = getSubtotal();
    const ship = getShipping();
    const total = getTotal();
    document.getElementById('subtotalDisplay').textContent = money(sub);
    document.getElementById('shippingDisplay').textContent = ship === 0 ? 'Free' : money(ship);
    document.getElementById('totalDisplay').textContent = money(total);
}

function renderCheckout() {
    const container = document.getElementById('checkoutContent');
    const { step, shipping, orderNo } = state;

    if (step === 0) {
        document.getElementById('checkoutModal').style.display = 'none';
        return;
    }

    document.getElementById('checkoutModal').style.display = 'flex';

    if (step === 1) {
        container.innerHTML = `
            <button class="up-modal-close" onclick="closeCheckout()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="up-steps">
                <div class="up-step-dot done"></div>
                <div class="up-step-dot"></div>
                <div class="up-step-dot"></div>
            </div>
            <h2 class="up-display" style="font-size:20px;margin-bottom:4px;">Shipping details</h2>
            <p style="font-size:12px;opacity:0.6;margin-bottom:16px;">Where should we send your order?</p>
            <form onsubmit="submitShipping(event)">
                <div class="up-field">
                    <label>Full name</label>
                    <input required id="shipName" value="${shipping.name}" placeholder="Jane Kim" />
                </div>
                <div class="up-field">
                    <label>Mobile number</label>
                    <input required id="shipPhone" type="tel" value="${shipping.phone}" placeholder="07X XXX XXXX" />
                </div>
                <div class="up-field">
                    <label>Street address</label>
                    <input required id="shipAddress" value="${shipping.address}" placeholder="123 Maple Street" />
                </div>
                <div class="up-field-row">
                    <div class="up-field">
                        <label>City</label>
                        <input required id="shipCity" value="${shipping.city}" placeholder="Colombo" />
                    </div>
                    <div class="up-field">
                        <label>ZIP</label>
                        <input required id="shipZip" value="${shipping.zip}" placeholder="10000" />
                    </div>
                </div>
                <button class="up-modal-submit" type="submit">
                    Continue
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
            </form>
        `;
    

        

    } else if (step === 2) {
        container.innerHTML = `
            <button class="up-modal-close" onclick="newOrder()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div style="text-align:center;">
                <div class="up-confirm-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 class="up-display" style="font-size:20px;margin-bottom:4px;">Order placed!</h2>
                <p style="font-size:12px;opacity:0.7;margin-bottom:4px;">Order number</p>
                <p style="font-weight:900;font-size:16px;margin-bottom:16px;">${orderNo}</p>
                <p style="font-size:12px;opacity:0.7;margin-bottom:18px;">
                    Confirmation sent to ${shipping.name || 'your order'} at ${shipping.address ? `${shipping.address}, ${shipping.city} ${shipping.zip}` : 'your address'}.
                    Total: ${money(getTotal())}.
                </p>
                <button class="up-modal-submit" onclick="newOrder()">Continue shopping</button>
            </div>
        `;
    }
}

// Builds the order message and opens WhatsApp with delivery + order details pre-filled
function sendOrderToWhatsApp() {
    const phone = "94704845611"; // Your WhatsApp number

    let message = "🛒 *NEW ORDER - K FOOD SRI LANKA*\n\n";

    message += "Customer\n";
    message += "Name: " + state.shipping.name + "\n";
    message += "Mobile: " + state.shipping.phone + "\n";
    message += "Address: " + state.shipping.address + "\n";
    message += "City: " + state.shipping.city + "\n";
    message += "ZIP: " + state.shipping.zip + "\n\n";

    message += "Products\n";

    getCartItems().forEach(item => {
        message += "- " + item.en + " x" + item.qty + " = Rs." + (item.price * item.qty) + "\n";
    });

    message += "\nTotal: Rs." + getTotal();

    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

function renderAll() {
    renderProducts();
    renderCart();
    renderCheckout();
}

// ===== ACTIONS =====

function setCategory(cat) {
    state.category = cat;
    renderCategories();
    renderProducts();
    closeMobileMenu();
}

function handleSearch(value) {
    state.query = value;
    renderProducts();
}

function resetShop() {
    state.category = 'all';
    state.query = '';
    document.getElementById('searchInput').value = '';
    renderCategories();
    renderProducts();
    closeMobileMenu();
}

function addToCart(id) {
    const p = getProduct(id);
    if (!p || p.comingSoon) return;
    state.cart[id] = (state.cart[id] || 0) + 1;
    showToast(`✨ ${p.en} added`);
    renderCart();
}

function changeQty(id, delta) {
    const current = state.cart[id] || 0;
    const next = Math.max(0, current + delta);
    if (next === 0) {
        delete state.cart[id];
    } else {
        state.cart[id] = next;
    }
    renderCart();
}

function toggleWishlist(id) {
    state.wishlist[id] = !state.wishlist[id];
    renderProducts();
}

function toggleCart() {
    state.cartOpen = !state.cartOpen;
    document.getElementById('cartDrawer').style.display = state.cartOpen ? 'flex' : 'none';
    document.getElementById('cartOverlay').style.display = state.cartOpen ? 'block' : 'none';
    if (state.cartOpen) renderCart();
}

function beginCheckout() {
    state.cartOpen = false;
    document.getElementById('cartDrawer').style.display = 'none';
    document.getElementById('cartOverlay').style.display = 'none';
    state.step = 1;
    renderCheckout();
}

function submitShipping(e) {
    e.preventDefault();
    state.shipping.name = document.getElementById('shipName').value;
    state.shipping.phone = document.getElementById('shipPhone').value;
    state.shipping.address = document.getElementById('shipAddress').value;
    state.shipping.city = document.getElementById('shipCity').value;
    state.shipping.zip = document.getElementById('shipZip').value;

    const no = 'KF-' + String(Math.floor(100000 + Math.random() * 899999));
    state.orderNo = no;

    // Send delivery details + order summary straight to WhatsApp
    sendOrderToWhatsApp();

    state.step = 2;
    renderCheckout();
}

function setStep(step) {
    state.step = step;
    renderCheckout();
}

function closeCheckout() {
    state.step = 0;
    renderCheckout();
}

function newOrder() {
    state.cart = {};
    state.shipping = { name: '', address: '', city: '', zip: '' };
    state.orderNo = null;
    state.step = 0;
    renderCart();
    renderCheckout();
    showToast('🎉 Order complete! Thank you!');
}

function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.style.display = 'block';
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
        el.style.display = 'none';
    }, 2000);
}

// ===== WINDOW RESIZE =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderHero();
    }, 250);
});

// ===== INIT =====
renderHero();
renderCategories();
renderProducts();
renderCart();
if (isOfferLive()) {
    showOfferBanner();
}
