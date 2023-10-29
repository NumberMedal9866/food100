const product = {
    plainBurger: {
        name: 'plain Burger',
        price: 10000,
        url: 'images/product2.jpg',
        amount: 0,
        kcal: 295,
        topping: 0,
        toppingPrice: 0,
        get totalSum() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        },
        get totalKcal() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        }
    },
    freshBurger: {
        name: 'fresh Burger',
        price: 20500,
        url: 'images/product1.jpg',
        amount: 0,
        kcal: 500,
        topping: 0,
        toppingPrice: 0,
        get totalSum() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        },
        get totalKcal() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        }
    },
    freshCombo: {
        name: 'fresh Combo',
        price: 31900,
        url: 'images/product3.jpg',
        amount: 0,
        kcal: 700,
        topping: 0,
        toppingPrice: 0,
        get totalSum() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        },
        get totalKcal() {
            return (this.price * this.amount) + (this.toppingPrice * this.amount)
        }
    },
}
const productBtns = document.querySelectorAll('.main__product-btn'),
      checkbox    = document.querySelectorAll('.main__product-checkbox'),
      closeCart   = document.querySelector('.exit-btn span'),
      cart        = document.querySelector('.addCart'),
      checkList   = document.querySelector('.receipt__window-out'),
      receipt     = document.querySelector('.receipt'),
      receiptBtn  = document.querySelector('.receipt__window-btn');
      checkbox.forEach(checked => {
          checked.addEventListener('change', function () {
              box(this)
            })
        })
        productBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                plusOrMinus(this)
        })
       cart.addEventListener('click', function () {
        receipt.classList.toggle('active')
        receipt.style.display = 'flex'
        receipt.style.opacity = '1'
        })
       closeCart.addEventListener('click', function () {
        receipt.classList.toggle('active')
        receipt.style.display = 'none'
        receipt.style.opacity = '0'
        })
})
function plusOrMinus(btn) {
    let   parent             = btn.closest('.main__product'),
          parentId           = parent.getAttribute('id')
    const totalPrice         = parent.querySelector('.main__product-price span'),
          totalCal           = parent.querySelector('.main__product-call span'),
          productNumSelector = btn.closest('.main__product-number'),
          productPrice       = productNumSelector.querySelector('.main__product-num')
    if (btn.getAttribute('data-symbol') === '+' && product[parentId].amount < 10) {
        product[parentId].amount++
        productPrice.innerHTML = product[parentId].amount
        totalCal.innerHTML = product[parentId].totalKcal
        totalPrice.innerHTML = product[parentId].totalSum
    } else if (btn.getAttribute('data-symbol') === '-' && product[parentId].amount > 0) {
        product[parentId].amount--
        productPrice.innerHTML = product[parentId].amount
        totalCal.innerHTML = product[parentId].totalKcal
        totalPrice.innerHTML = product[parentId].totalSum
    } else {
        alert('do not cross the limit!')
    }
        const productArray = []
    for (const key in product) {
        const po = product[key]
        console.log(po);
        if (po.amount) {
            productArray.push(po)
            // totalCount += po.amount
        }
        checkList.innerHTML = ''
    }
    for (let i = 0; i < productArray.length; i++) {
        checkList.innerHTML += cartList(productArray[i])
    }
}
function cartList(array) {
    const {
        url,
        name,
        totalSum,
        totalKcal,
        amount
    } = array
    return `
    <div class="receipt__window-info">
    <div class="receipt__window-text">
    <img src="${url}" alt="">
    <div>
    <p>${name}</p>
    <span>Сумма: ${totalSum}</span>
    <span>Калорий: ${totalKcal}</span>
    </div>
    </div>
    <div class="receipt__window-plusOrMinus">
    <output class="border">${amount}</output>
    </div>
    </div>
    `
}

function box(checked) {
    let parent = checked.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        totalCal = parent.querySelector('.main__product-call span'),
        totalPrice = parent.querySelector('.main__product-price span')
    if (checked.checked == true) {
        product[parentId].toppingPrice += 2000
        product[parentId].topping += 100
        totalCal.innerHTML = product[parentId].totalKcal
        totalPrice.innerHTML = product[parentId].totalSum
    } else if (checked.checked == false) {
        // console.log('asdfsadfasd');
        product[parentId].toppingPrice -= 2000
        product[parentId].topping -= 100
        totalCal.innerHTML = product[parentId].totalKcal
        totalPrice.innerHTML = product[parentId].totalSum
    }
}

receiptBtn.addEventListener('click', function () {
    alert('THANK YOU FOR YOUR ORDER!')
    receipt.classList.toggle('active')
    receipt.style.opacity = '0'
    receipt.style.display = 'none'
})



// function basket() {
//     const productArray = []
//     for (const key in product) {
//         // console.log(product[key]);
//         // let totalCount = 0
//         const po = product[key]
//         // const productCard = document.querySelector(`#${po.name.toLowerCase()}`)
//         if (po.amount) {
//             productArray.push(po)
//             // totalCount += po.amount
//         }
//         checkbox.innerHTML = ''
//     }
//     for (let i = 0; i < productArray.length; i++) {
//         check.innerHTML += cartList(productArray[i])
//     }
// }