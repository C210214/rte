let carts = document.querySelectorAll('.add');
let products = [
  {
    name:'オーガニックヴィーガンワックスバー ｜ORGANIC AROMA VEGAN WAX BAR',
    tag:'item17',
    img:'itemimg/item17-1.png',
    price:1300,
    incart:0
  }
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
          <button onclick="deleteItemFromCart(${item.tag})">
          <ion-icon name="close-outline"></ion-icon>
          </button>
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
          <div class="price"><h3>${item.price*(item.incart)}¥</h3></div>
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
  
  
  function removeID(){ 
    var pro = document.getElementById('pro')
    var e=document.getElementById('isempty');
    if(pro) e.remove();
  }
  removeID( "myElement" );
  
  
  function deleteItemFromCart(){
    let cartItems = JSON.parse (localStorage.getItem('productsInCart'));
  
    let newcart = cartItems.filter((item) => item.tag);
  
    localStorage.setItem('productsInCart', JSON.stringify(newcart));
  
    displayCart();
    onLoadCartNumbers();
  }
  
  
  
  
  function clickBtn1(){
    var tb = document.getElementById('added');
    tb.style.display = 'flex';
    setTimeout(()=>{
      tb.style.display = 'none';
    }, 3500)
  }