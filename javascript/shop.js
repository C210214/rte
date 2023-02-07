var navBar = document.getElementById("navBar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };



$(document).ready(function(){
    $("h1, p").delay("1000").fadeIn();
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
    
        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    });

    $('input.input-qty').each(function() {
        var $this = $(this),
          qty = $this.parent().find('.is-form'),
          min = Number($this.attr('min')),
          max = Number($this.attr('max'))
        if (min == 0) {
          var d = 0
        } else d = min
        $(qty).on('click', function() {
          if ($(this).hasClass('minus')) {
            if (d > min) d += -1
          } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
          }
          $this.attr('value', d).val(d)
        })
      })

      const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");

function changeImage(e) {
  activeImage.src = e.target.src;
}
productImages.forEach(image => image.addEventListener("click", changeImage));


let cartBtn =document.querySelectorAll('.add');
let products = [
  {
    name:'竹歯ブラシ｜BAMBOO TOOTHBRUSH',
    tag:'pro1',
    img:'itemimg/item1-1.png',
    price:'300',
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
  }
];


for (let i = 0;i < cartBtn.length; i++) {
  cartBtn[i].addEventListener('click',(e) => {
    e.preventDefault();
    //console.log('add to cart');
    cartNumbers(products[i]);
  })
}

const onLoadCartNumbers =()=>{
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.item-number').innerHTML = productNumbers;
  }
}

const cartNumbers = (product)=>{
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers=parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
   document.querySelector('.item-number').innerHTML=productNumbers + 1; 
  }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.item-number').innerHTML = 1;
  }
  setItems(product)
}
let setItems = (product)=>{
  let cartItems = localStorage.getItem('productInCart');
  cartItems =JSON.parse(cartItems);
  if (cartItems!=null) {
    if (cartItems[product.tag]==undefined){
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].incart += 1;
  }else{
    product.incart=1;
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem('productInCart'.JSON.stringify(cartItems))
}
 
onLoadCartNumbers();