let bagItems = [];
onLoad();
function onLoad() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  displayBagItem();
}

function addtobag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagItem();
}
function displayBagItem() {
  let bagItemsCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemsCountElement.style.visibility = "visible";
    bagItemsCountElement.innerText = bagItems.length;
  } else {
    bagItemsCountElement.style.visibility = "hidden";
  }
}
function displayItemsOnHomePage() {
  let ItemsCotainerElement = document.querySelector(".items_container");
  if (!ItemsCotainerElement == undefined) {
    return;
  }
  // <------for individual items------->
  // let item ={
  //     item_img:'/images/1.jpg',
  //     rating:{
  //         stars:4.5  ,
  //         noOfReviws:1400,
  //     },
  //     company_name: 'Carton Londan',
  //     item_name:'Rodium-Plated CZ Floral Studs',
  //     current_price:606,
  //     original_price:1045,
  //     discount_price:42,
  // }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
    <div class="item_container">
                    <img class="item-img" src="${item.image}" alt=" item images">
                    <div class="raing">
                       ${item.rating.stars} ⭐ | ${item.rating.count};
                    </div>
                    <div class="company_name">
                        ${item.company}
                    </div>
                    <div class="item_name">${item.item_name}</div>
                    <div class="price">
                        <span class="current_price">${item.current_price}</span>
                        <span class="orignal_price">${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% Off)</span>
                        </div>
                        <button class="btn-add-bag" onclick="addtobag(${item.id})"> Add to Bag</button>
    
                </div>`;
  });
  ItemsCotainerElement.innerHTML = innerHTML;
}
