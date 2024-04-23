let categories = [
    {
        id: Math.random(),
        name: "Smartfon Samsung Galaxy S24 Ultra (Official), 256/512GB Dynamic AMOLED 2X, 120 H",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0ullbl7rtgkb9vicg/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1 OLED, IP68, 5G,",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst4ths99ouqbfskm70/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1 OLED, IP68, 5G",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst023ifoubkc6q22jg/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1 OLED, IP68, 5G",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst6t1s99ouqbfskmn0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Televizor Li TV 32 Smart TV, HD IPS, sovg'a sifatida Allplay-ga tekin obuna",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cm6s9o9s99ouqbfp3hn0/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Televizor QLT SmartTV 32, 43, 55 HD/Full HD/4K UHD",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno13mcu2hhlb05hln7g/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Smart televizor WellStars 43-75, ovozli qidiruv pulti",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmjnpv1s99ouqbfqugeg/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Televizor LiTV 32 Smart TV, sovg'a sifatida televizor uchun kronshteyn va Allplayga obuna",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cm6s91rifoubkc6mh2s0/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Krossovkalar erkaklar uchun, sport poyabzali",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmjtjgp25ku8ad8hpj80/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Erkaklar uchun shippaklar",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ci3c95bltlh4bk4lgc4g/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Erkaklar krossovkasi",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cloqutl6sfhsc0unljj0/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Erkaklar uchun krossovkalar, 40-45 o'lchami",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cl1qrhdennt861io8s7g/original.jpg"],
        category: 3,
    },
];

function displayProductsByCategory(category, containerId) {
    let container = document.getElementById(containerId)
    let productsHtml = "";

    categories.forEach((c) => {
        if (c.category === category) {
            productsHtml += `
			<div class="max-w-screen-xl">
			<img src="${c.images}" alt="">
            <h2 class="text-sm text-gray-700">${c.name}</h2>
			<p>${c.description}</p>
			<mark class="text-[11px]">${c.price}</mark>
		<p class="mt-6 line-through text-xs text-slate-400">${c.realprice}</p>
		<div class="flex">
			<p class="text-[15px]">${c.sale}</p>
			<div class="border h-8 w-8 rounded-full flex centeritems-center ml-[4rem] mt-[-5px] pl-[3px] pt-[3px]">
				<div data-v-1a3a46a8="" class="slot default"><svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
					<path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
					<path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
					</svg>
				</div>
			</div>
		</div>
			</div>
			`
        }
    });

    container.innerHTML = productsHtml;
}

displayProductsByCategory(1, "for_phones");
displayProductsByCategory(2, "for_tv");
displayProductsByCategory(3, "for_shoes");