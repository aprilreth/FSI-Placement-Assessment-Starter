let yourName = "April Reth"
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Gingerbread Quantity
const gbPlusBtn = document.querySelector('#add-gb')
function changeQuantityGb(displayQuantity) {
    let gbQty = document.getElementById('qty-gb')
}

gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    changeQuantityGb(gb)
    qtyTotal.textContent = gb + cc + sugar
})

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    if(gb > 0) {
        gb = gb - 1
        changeQuantityGb(gb)
        qtyTotal.textContent = gb + cc + sugar
    }
})

