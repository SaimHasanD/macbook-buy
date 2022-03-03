// get product price
function getProductPrice(id) {
    if (id == 'freeMemory') {
        document.getElementById('memoryPrice').innerText = 0;
    }
    if (id == 'extraMemory') {
        document.getElementById('memoryPrice').innerText = 180;
    }
    if (id == 'freeStorage') {
        document.getElementById('storagePrice').innerText = 0;
    }
    if (id == 'extraStorage') {
        document.getElementById('storagePrice').innerText = 100;
    }
    if (id == 'extraLargeStorage') {
        document.getElementById('storagePrice').innerText = 180;
    }
    if (id == 'freeDelivery') {
        document.getElementById('deliveryCost').innerText = 0;
    }
    if (id == 'fastDelivery') {
        document.getElementById('deliveryCost').innerText = 20;
    }
    calculate();
    promoCode();
}

// calculate total price
function calculate() {
    const macBookPrice = getInputValue('macBookPrice');
    const memoryPrice = getInputValue('memoryPrice');
    const storagePrice = getInputValue('storagePrice');
    const deliveryCost = getInputValue('deliveryCost');

    const totalPrice = macBookPrice + memoryPrice + storagePrice + deliveryCost;
    document.getElementById('totalPrice').innerText = totalPrice;

   
}

// Promo code 
function promoCode() {
    const input = document.getElementById('promoCode');
    const promoCode =(input.value);
    console.log(promoCode);
    let totalCost = document.getElementById('totalPrice').innerText;
    if (promoCode == 'stevekaku') {
        totalCost = Math.round(totalCost*.8);
        document.getElementById('totalCost').innerText = totalCost;
    }if (promoCode == '') {
        document.getElementById('totalCost').innerText = totalCost; 
    }
    else {
        document.getElementById('totalCost').innerText = totalCost; 
    }
}


// get input value
function getInputValue(id) {
    const input = document.getElementById(id);
    const price = parseInt(input.innerText);
    return price;
}
