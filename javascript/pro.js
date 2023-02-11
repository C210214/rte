let carts = document.querySelectorAll('.add');
let products = [
  {
    name:'竹歯ブラシ｜BAMBOO TOOTHBRUSH',
    tag:'item1',
    img:'itemimg/item1-1.png',
    price:300,
    incart:0
  },
  {
    name:'へちまスポンジ｜LOOFAH SPONGE',
    tag:'pro2',
    img:'itemimg/item2-1.png',
    price:'400',
    incart:0
  },
  {
    name:'折り畳みストロー｜FOLDABLE STRAW',
    tag:'pro3',
    img:'itemimg/item3-1.png',
    price:'600',
    incart:0
  },
  {
    name:'竹綿棒｜BAMBOO ORGANIC COTTON SWABS',
    tag:'pro4',
    img:'itemimg/item4-1.png',
    price:'350',
    incart:0
  },
  {
    name:'オーガニックコットン巾着（大）｜LARGE ORGANIC COTTON PRODUCE BAG',
    tag:'pro5',
    img:'itemimg/item5-1.png',
    price:'900',
    incart:0
  },
  {
    name:'竹カトラリーセット｜BAMBOO CUTLERY SETS',
    tag:'pro6',
    img:'itemimg/item6-1.png',
    price:'1500',
    incart:0
  },
  {
    name:'草ストロー｜GRASS STRAW',
    tag:'pro7',
    img:'itemimg/item7-1.png',
    price:'400',
    incart:0
  },
  {
    name:'スタッシャーシリコーンバッグ　スタンドアップ ミディアム｜STASHER STAND-UP MEDIUM',
    tag:'pro8',
    img:'itemimg/item8-1.png',
    price:'1000',
    incart:0
  },
  {
    name:'ME TIME SET',
    tag:'pro9',
    img:'itemimg/item9-1.png',
    price:'1500',
    incart:0
  },
  {
    name:'エスプレッソボディショット ｜ESPRESSO BODY SCRUB',
    tag:'pro10',
    img:'itemimg/item10-1.png',
    price:'1200',
    incart:0
  },
  {
    name:'【TGTW】バンブー歯ブラシスタンド｜BAMBOO TOOTHBRUSH STAND',
    tag:'pro11',
    img:'itemimg/item11-1.png',
    price:'300',
    incart:0
  },
  {
    name:'パロサント｜PALO SANTO WOOD',
    tag:'pro12',
    img:'itemimg/item12-1.png',
    price:'800',
    incart:0
  },
  {
    name:'ディッシュブラシ(長)｜LONG DISH BRUSH',
    tag:'pro13',
    img:'itemimg/item13-1.png',
    price:'1100',
    incart:0
  },
  {
    name:'ポーチ付 天然猪毛のトラベルミニヘアブラシ｜PIG-HAIR TRAVEL MINI BRUSH',
    tag:'pro14',
    img:'itemimg/item14-1.png',
    price:'2000',
    incart:0
  },
  {
    name:'ヴィーガンソイキャンドルツリー｜ VEGAN SOY WAX CANDLE TREE',
    tag:'pro15',
    img:'itemimg/item15-1.png',
    price:'1200',
    incart:0
  },
  {
    name:'セルフケアセット ｜SELF CARE SET',
    tag:'pro16',
    img:'itemimg/item16-1.png',
    price:'3000',
    incart:0
  },
  {
    name:'オーガニックヴィーガンワックスバー ｜ORGANIC AROMA VEGAN WAX BAR',
    tag:'pro17',
    img:'itemimg/item17-1.png',
    price:'1300',
    incart:0
  },
  {
    name:'ヴィーガン食器用洗剤ブロック｜VEGAN DISH WASH BLOCK',
    tag:'pro18',
    img:'itemimg/item18-1.png',
    price:'800',
    incart:0
  },
  {
    name:'スタッシャーシリコーンバッグ　ゴーバッグ｜STASHER GO BAG',
    tag:'pro19',
    img:'itemimg/item19-1.png',
    price:'1200',
    incart:0
  },
  {
    name:'アップサイクルコルクコースター｜UPCYCLED SANDAL SOLE & CORK COASTER',
    tag:'pro20',
    img:'itemimg/item20-1.png',
    price:'1600',
    incart:0
  },
];


for (let i=0; i<carts.length; i++){
  carts[i].addEventListener('click', ()=>{
    cartsNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers =localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.item-number').textContent = productNumbers;
  }
}

function cartsNumbers(product) {
 
  let productNumbers =localStorage.getItem('cartNumbers');
  let x = Number(document.getElementById("mySelect").value);

  productNumbers =parseInt(productNumbers);
  
  if (productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + x);
    document.querySelector('.item-number').textContent = productNumbers + x;
  }else{
  localStorage.setItem('cartNumbers', x);
  document.querySelector('.item-number').textContent = x;
  }

  setItem(product);
}

function setItem(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let x = Number(document.getElementById("mySelect").value);

  if(cartItems != null){

    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].incart += x;
  } else {
    product.incart = x;
    cartItems = {
      [product.tag]: product
    }
  }
  
  localStorage.setItem("productsInCart", JSON.stringify
  (cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  let x = Number(document.getElementById("mySelect").value);

  console.log("my cartcost is", cartCost);
  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price*x);
  }else{
    localStorage.setItem("totalCost", product.price*x);
  }
}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector
  (".products");
  
  let cartCost = localStorage.getItem('totalCost');
  

  console.log(cartItems);
  if( cartItems && productContainer ){
    productContainer.innerHTML ='';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product" id="pro">
        <div class="ich">
        <ion-icon name="close-outline"></ion-icon>
        </div>
        <div class="anh">
        <img src="./itemimg/${item.tag}-1.png">
        </div>
        <div class="ten">
        <h2>${item.name}</h2>
        </div>
        <div class="quantity">
          <h3><i class="fa fa-chevron-left" aria-hidden="true"></i> ${item.incart}  <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </h3>
        </div>
        <div class="price"><h3>${cartCost}¥</h3></div>
      </div>
      `;
    });

    productContainer.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">TOTAL: ${cartCost}¥</h4>
    </div>
    <div class="form-row">
      <label class="check"><input type="checkbox" class="preferences">I READ AND AGREE WITH RTE'S TERMS AND CONDITIONS.<span class="checkbox"></span></label>
    </div>
    <div class="btn">
    <button class="btn btn-block">CHECKOUT</button>
    </div>
    `;
  }

}

onLoadCartNumbers();
displayCart();