let inpBalance = 0;
let prApple = 15;
let qnApple = 0;
let totalPriceOfApple = 0;
let prMango = 20;
let qnMango = 0;
let totalPriceOfMango = 0;
let prCherry = 25;
let qnCherry = 0;
let totalPriceOfCherry = 0;
let totalPurchingAmount = 0;
let remainingBalance = 0;


function addApple() {
    inpBalance = document.getElementById("input-budget").value;
    // checkBalance();
    if (inpBalance > 0) {
        if (remainingBalance >= totalPurchingAmount) {
            document.getElementById("display-quantity-apple").value = ++qnApple; //here we use pre increment add quantity and show on display input as well.
            totalPriceOfApple = prApple * qnApple;
            console.log(totalPriceOfApple);
            totalBill();
        }
        else {
            alert("Sorry! You have not required balance to purchase it :(")
        }
    }
    else {
        alert('Please add balance in your account')
    }
}

function subApple() {
    if (qnApple > 0) {
        inpBalance = document.getElementById("input-budget").value;
        document.getElementById("display-quantity-apple").value = --qnApple;
        totalPriceOfApple = prApple * qnApple;
        console.log(totalPriceOfApple);
        totalBill();
    }
    else {
        alert("No of Items are 0 now!!!");
    }
}

function addMango() {
    inpBalance = document.getElementById("input-budget").value;
    // checkBalance();
    if (inpBalance > 0) {
        if (remainingBalance >= totalPurchingAmount) {
            document.getElementById("display-quantity-mango").value = ++qnMango;
            totalPriceOfMango = prMango * qnMango;
            console.log(totalPriceOfMango);
            totalBill();
        }
        else {
            alert("Sorry! You have not required balance to purchase it :(")
        }
    }
    else {
        alert('Please add balance in your account')
    }

}

function subMango() {
    if (qnMango > 0) {
        inpBalance = document.getElementById("input-budget").value;
        document.getElementById("display-quantity-mango").value = --qnMango;
        totalPriceOfMango = prMango * qnMango;
        console.log(totalPriceOfMango);
        totalBill();
    }
    else {
        alert("No of Items are 0 now!!!");
    }
}

function addCherry() {
    inpBalance = document.getElementById("input-budget").value;
    // checkBalance();
    if (inpBalance > 0) {
        if (remainingBalance >= totalPurchingAmount) {
            document.getElementById("display-quantity-cherry").value = ++qnCherry;
            totalPriceOfCherry = prCherry * qnCherry;
            console.log(totalPriceOfCherry);
            totalBill();
        }
        else {
            alert("Sorry! You have not required balance to purchase it :(")
        }
    }
    else {
        alert('Please add balance in your account')
    }

}

function subCherry() {
    if (qnCherry > 0) {
        inpBalance = document.getElementById("input-budget").value;
        document.getElementById("display-quantity-cherry").value = --qnCherry;
        totalPriceOfCherry = prCherry * qnCherry;
        console.log(totalPriceOfCherry);
        totalBill();
    }
    else {
        alert("No of Items are 0 now!!!");
    }
}

// function checkBalance(){
//     inpBalance = document.getElementById("input-budget").value;
//     remainingBalance = inpBalance - totalPurchingAmount;
//     document.getElementById("remain-balance").innerHTML = remainingBalance;
// }

function totalBill() {
    totalPurchingAmount = totalPriceOfApple + totalPriceOfMango + totalPriceOfCherry;
    document.getElementById("tot-purch-amount").innerHTML = totalPurchingAmount;
    remainingBalance = inpBalance - totalPurchingAmount;
    document.getElementById("remain-balance").innerHTML = remainingBalance;

}
// function add(quantity,price,total,id){
//     if (totalPurchingAmount <= inpBalance) {
//         inpBalance = document.getElementById("input-budget").value;
//         quantity++;
//         document.getElementById(id).value = quantity;
//         total = price * quantity;
//         console.log(total);
//         totalBill(total);
//     }
//     else {
//         alert("Total Amount is exceed from the from the Budget!!!")
//     }
// }
