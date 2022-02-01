let yourName = "April Reth"
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

var qtyTotal = document.getElementById('qty-total')
qtyTotal.setAttribute('id', 'qty-total')
qtyTotal.textContent = 0 // this will not change since its in the beginning so you need to add the total inside each cookie code

// Gingerbread Quantity
const gbPlusBtn = document.querySelector('#add-gb')
function changeQuantityGb(displayQuantity) {
    let gbQty = document.getElementById('qty-gb')
    gbQty.textContent = displayQuantity
}

gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    changeQuantityGb(gb)
    qtyTotal.textContent = gb + cc + sugar
})

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
    if(gb > 0) {
        gb = gb - 1
        changeQuantityGb(gb)
        qtyTotal.textContent = gb + cc + sugar
    }
})

//CC Quantity
const ccPlusBtn = document.querySelector('#add-cc')
function changeQuantityCc(displayQuantity) {
    let ccQty = document.getElementById('qty-cc')
    ccQty.textContent = displayQuantity
}
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    changeQuantityCc(cc)
    qtyTotal.textContent = gb + cc + sugar
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
    if(cc > 0) {
        cc = cc - 1
        changeQuantityCc(cc)
        qtyTotal.textContent = gb + cc + sugar
    }
})

//Sugar Quantity
const sugarPlusBtn = document.querySelector('#add-sugar')
function changeQuantitySugar(displayQuantity) {
    let sugarQty = document.getElementById('qty-sugar')
    sugarQty.textContent = displayQuantity
}
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    changeQuantitySugar(sugar)
    qtyTotal.textContent = gb + cc + sugar
})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0) {
        sugar = sugar - 1
        changeQuantitySugar(sugar)
        qtyTotal.textContent = gb + cc + sugar
    }
})

