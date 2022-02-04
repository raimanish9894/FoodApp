const PRODUCTS = [
    {
        id: 100,
        name: "Pizza",
        price: 149,
        image: require('../assets/products/pizza.jpg'),
        description: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."
    },
    {
        id: 101,
        name: "Momo's",
        price: 99,
        image: require('../assets/products/momo-2.jpg'),
        description: "Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan"
    },
    {
        id: 102,
        name: 'Burger',
        price: 89,
        image: require('../assets/products/burger.jpg'),
        description: "The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch. The patty needs to be juicy, the bun soft but sturdy, and you want the meat/bun/accompaniment ratio to be even from first to last bite."
    },
    
    
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

