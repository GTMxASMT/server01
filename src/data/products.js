const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL600_SR600,600_.jpg",
    "rating": { "rate": 4.1, "count": 259 }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Great outerwear jackets for Spring/Autumn/Winter.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": { "rate": 4.7, "count": 500 }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": { "rate": 3.9, "count": 70 }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Ring.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71ya6A-+q8L._AC_UL640_QL65_ML3_.jpg",
    "rating": { "rate": 3.0, "count": 400 }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": { "rate": 1.9, "count": 100 }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility. Fast data transfers.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD",
    "price": 109,
    "description": "Easy upgrade for faster boot-up, shutdown, and app response.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": { "rate": 2.9, "count": 470 }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55",
    "price": 109,
    "description": "High transfer speed and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+GmL._AC_SX679_.jpg",
    "rating": { "rate": 4.8, "count": 319 }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4",
    "price": 114,
    "description": "Expand your PS4 gaming experience.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": { "rate": 4.8, "count": 400 }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD",
    "price": 599,
    "description": "21.5 inches Full HD (1920 x 1080) widescreen monitor.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": { "rate": 2.9, "count": 250 }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": { "rate": 2.2, "count": 140 }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "3-in-1 jacket with waterproof coating and fleece lining.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": { "rate": 2.6, "count": 235 }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "Faux leather jacket with removable hood.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": { "rate": 2.9, "count": 340 }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight waterproof rain jacket for women.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": { "rate": 3.8, "count": 679 }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V",
    "price": 9.85,
    "description": "Short-sleeve boat neck tee for casual wear.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": { "rate": 4.7, "count": 130 }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "Moisture-wicking fabric keeps you cool and dry.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": { "rate": 4.5, "count": 146 }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "Cotton casual t-shirt for women with stylish print.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": { "rate": 3.6, "count": 145 }
  }
]

export default products;