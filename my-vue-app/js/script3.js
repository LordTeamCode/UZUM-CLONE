let product = [
    {
        id: Math.random(),
        name: "Oshxona anjomlari to'plami Kukmara, Granit Ultra liniyasi AP",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cnemuk125kub33f5f2m0/t_product_540_high.jpg#1709015652203"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq",
        description: "5.0 (2624 sharh)",
        price: "5 180 so'm/oyiga",
        realprice: "57 000 so'm",
        sale: "43 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ck1descvutvccfo27mn0/t_product_540_high.jpg#1709015652203"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Qahva Carte Noire, sublimatsiyalangan, 95 g",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ccv6he35a95unf121g5g/t_product_540_high.jpg#1709015652203"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq",
        description: "5.0 (2624 sharh)",
        price: "5 180 so'm/oyiga",
        realprice: "57 000 so'm",
        sale: "43 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ck1descvutvccfo27mn0/t_product_540_high.jpg#1709015652203"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Qahva Carte Noire, sublimatsiyalangan, 95 g",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ccv6he35a95unf121g5g/t_product_540_high.jpg#1709015652203"],
        category: 1,
    },
]

const container = document.querySelector(".grid");

product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "rounded-lg", "overflow-hidden", "hover:shadow-md", "mt-4");

    const images = product.images
        .map((image) => `<img src='${image}' alt='${product.name}' class='w-full h-84 object-cover rounded-lg'/>`)
        .join("");

    card.innerHTML = `
      <div class='overflow-hidden p-2'>
          <div class="absolute">
            <h1 class="text-white bg-red-500 rounded-[5px] w-[50px] h-[22px] pt-[1px] pl-[6px] mt-[296px] ml-[1px]">Savdo</h1>
          </div>
       <div>${images}
       <label class="like-container">
    <input type="checkbox">
    <div class="checkmark">
      <svg viewBox="0 0 256 256">
      <rect fill="none" height="256" width="256"></rect>
      <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#FFF" fill="none"></path></svg>
    </div>
  </label></div>
       <h2 class="text-sm text-slate-600">${product.name}</h2>
        <div class="flex items-center"
         <!-- Rating -->
    <div class="flex flex-row-reverse justify-end items-center">
      <input id="hs-ratings-readonly-1" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1">
      <label for="hs-ratings-readonly-1" class="text-yellow-400 pointer-events-none ">
        <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </label>
    </div>
    <p class="ml-2 text-xs text-gray-500">${product.description}</p>
  </div>
  <!-- End Rating -->
       <p class="price mt-2 w-32">${product.price}</p>
       <p class="mt-6 line-through text-xs text-slate-400">${product.realprice}</p>
       <p>${product.sale}</p>
       <div class="border h-8 w-8 rounded-full flex center
       items-center ml-52">
    <div data-v-1a3a46a8="" class="slot default"><svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
  <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
  <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
  </svg></div>
  </div>
      </div>
     `;

    container.appendChild(card);
});


const container2 = document.querySelector(".okey");

product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "rounded-lg", "overflow-hidden", "hover:shadow-md", "mt-4");

    const images = product.images
        .map((image) => `<img src='${image}' alt='${product.name}' class='w-full h-84 object-cover rounded-lg'/>`)
        .join("");

    card.innerHTML = `
      <div class='overflow-hidden p-2'>
          <div class="absolute">
            <h1 class="text-white bg-red-500 rounded-[5px] w-[50px] h-[22px] pt-[1px] pl-[6px] mt-[296px] ml-[1px]">Savdo</h1>
          </div>
       <div>${images}
       <label class="like-container">
    <input type="checkbox">
    <div class="checkmark">
      <svg viewBox="0 0 256 256">
      <rect fill="none" height="256" width="256"></rect>
      <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#FFF" fill="none"></path></svg>
    </div>
  </label></div>
       <h2 class="text-sm text-slate-600">${product.name}</h2>
        <div class="flex items-center"
         <!-- Rating -->
    <div class="flex flex-row-reverse justify-end items-center">
      <input id="hs-ratings-readonly-1" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1">
      <label for="hs-ratings-readonly-1" class="text-yellow-400 pointer-events-none ">
        <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </label>
    </div>
    <p class="ml-2 text-xs text-gray-500">${product.description}</p>
  </div>
  <!-- End Rating -->
       <p class="price mt-2 w-32">${product.price}</p>
       <p class="mt-6 line-through text-xs text-slate-400">${product.realprice}</p>
       <p>${product.sale}</p>
       <div class="border h-8 w-8 rounded-full flex center
       items-center ml-52">
    <div data-v-1a3a46a8="" class="slot default"><svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
  <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
  <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
  </svg></div>
  </div>
      </div>
     `;

    container2.appendChild(card);
});

// Button to open modal
document.getElementById("openModalButton").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
});

// Button to close modal
document.getElementById("closeModalButton").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
});

// Search Products
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function displayProducts(products) {
    searchInput.innerHTML = "";

    if (product.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No Product";
        noResultsMessage.classList.add("text-lg");
        searchResults.appendChild(noResultsMessage);
        return;
    }

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("bg-white", "p-4", "rounded-md");

        const name = document.createElement("h2");
        name.textContent = product.name;
        name.classList.add("text-lg");
        card.appendChild(name);

        const price = document.createElement("p");
        price.textContent = `Price ${product.price}`;
        card.appendChild(price);

        searchResults.appendChild(card);
    });
}

function searchProducts(query) {
    if (query.length < 3) {
        searchResults.innerHTML = "";
        return;
    }

    const results = product.filter((product) => product.name.toLocaleLowerCase().includes(query.toLowerCase()));
    displayProducts(results);
}

searchInput.addEventListener("input", () => {
    searchProducts(searchInput.value.trim());
});

