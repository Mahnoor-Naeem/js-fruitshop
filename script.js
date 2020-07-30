
// var balance=+prompt("Enter your Balance");
var inpBalance = 0;
var prApple = 15;
var qnApple = 0;
var totalPriceOfApple = 0;
var prMango = 20;
var qnMango = 0;
var totalPriceOfMango = 0;
var prCherry = 25;
var qnCherry = 0;
var totalPriceOfCherry = 0;
var totalPurchingAmount = 0;
var remainingBalance = 0;

function balanceSubmit() {

    inpBalance = document.querySelector('#input-budget').value;
    console.log("You have ", inpBalance, "Rs");
    document.querySelector('#init-balance').innerHTML = inpBalance;

    // if (totalPurchingAmount < inpBalance) {
    //     document.querySelector("#add-item").disabled = false;
    // }
}




function addApple() {
    qnApple = qnApple + 1;
    console.log("Quantity of Apple ", qnApple);
    document.querySelector('#display-quantity-apple').value = qnApple;
    console.log("print value from display quantity ", document.querySelector('#display-quantity-apple').value);




    // function work


    if (totalPurchingAmount > inpBalance) {
        alert("SORRY NOT ENOUGH MONEY YOU HAVE :(");
        document.querySelector("#add-item-apple").disabled = true;
        qnApple--;
        document.querySelector('#display-quantity-apple').value = qnApple;
    }
    else {
        totalPriceOfApple = prApple * qnApple;
        console.log("Total Price of Apple ", totalPriceOfApple);

        totalPurchingAmount = totalPriceOfApple + totalPriceOfMango + totalPriceOfCherry;
        remainingBalance = inpBalance - totalPurchingAmount;

        document.querySelector('#tot-purch-amount').innerHTML = totalPurchingAmount;
        console.log("Your Total Amount ", totalPurchingAmount);
        document.querySelector('#remain-balance').innerHTML = remainingBalance;
        console.log("Your Remaining Balance ", remainingBalance);
    }

    // totalElement();
}
function subApple() {
    qnApple = qnApple - 1;
    console.log("Quantity of Apple ", qnApple);
    document.querySelector('#display-quantity-apple').value = qnApple;
    console.log("print value from display quantity ", document.querySelector('#display-quantity-apple').value);

    totalPriceOfApple = prApple * qnApple;
    console.log("Total Price of Apple ", totalPriceOfApple);

    if (qnCherry == 0) {
        alert("Please add item in to the cart");
    }
    else {
        document.querySelector('#tot-purch-amount').innerHTML = totalPurchingAmount;
        console.log("Your Total Amount ", totalPurchingAmount);
        document.querySelector('#remain-balance').innerHTML = remainingBalance;
        console.log("Your Remaining Balance ", remainingBalance);
    }

    // totalElement();

}


function addMango() {
    qnMango = qnMango + 1;
    console.log("Quantity of Mango ", qnMango);
    document.querySelector('#display-quantity-mango').value = qnMango;
    console.log("print value from display quantity ", document.querySelector('#display-quantity-mango').value);

    totalPriceOfMango = prMango * qnMango;
    console.log("Total Price of Mango ", totalPriceOfMango);

    // function work
    totalPurchingAmount = totalPriceOfApple + totalPriceOfMango + totalPriceOfCherry;
    remainingBalance = inpBalance - totalPurchingAmount;

    if (totalPurchingAmount > inpBalance) {
        alert("SORRY NOT ENOUGH MONEY YOU HAVE :(");
        document.querySelector("#add-item-mango").disabled = true;
        qnCherry--;
        document.querySelector('#display-quantity-mango').value = qnMango;
    }
    else {
        document.querySelector('#tot-purch-amount').innerHTML = totalPurchingAmount;
        console.log("Your Total Amount ", totalPurchingAmount);
        document.querySelector('#remain-balance').innerHTML = remainingBalance;
        console.log("Your Remaining Balance ", remainingBalance);
    }

    // totalElement();
}

function addCherry() {
    qnCherry = qnCherry + 1;
    console.log("Quantity of Cherry ", qnCherry);
    document.querySelector('#display-quantity-cherry').value = qnCherry;
    console.log("print value from display quantity ", document.querySelector('#display-quantity-cherry').value);

    totalPriceOfCherry = prCherry * qnCherry;
    console.log("Total Price of Mango ", totalPriceOfCherry);

    // function work
    totalPurchingAmount = totalPriceOfApple + totalPriceOfMango + totalPriceOfCherry;
    remainingBalance = inpBalance - totalPurchingAmount;

    if (totalPurchingAmount > inpBalance) {
        alert("SORRY NOT ENOUGH MONEY YOU HAVE :(");
        document.querySelector("#add-item-cherry").disabled = true;
        qnCherry--;
        document.querySelector('#display-quantity-cherry').value = qnCherry;
    }
    else {
        document.querySelector('#tot-purch-amount').innerHTML = totalPurchingAmount;
        console.log("Your Total Amount ", totalPurchingAmount);
        document.querySelector('#remain-balance').innerHTML = remainingBalance;
        console.log("Your Remaining Balance ", remainingBalance);
    }

    // totalElement();
}

// function totalElement() {

//     totalPurchingAmount = totalPriceOfApple + totalPriceOfMango + totalPriceOfCherry;
//     remainingBalance = inpBalance - totalPurchingAmount;

//     if (totalPurchingAmount > inpBalance) {
//         alert("SORRY NOT ENOUGH MONEY YOU HAVE :(");
//         // document.querySelector(".add-item").disabled = true;
//     }
//     else {
//         document.querySelector('#tot-purch-amount').innerHTML = totalPurchingAmount;
//         console.log("Your Total Amount ", totalPurchingAmount);
//         document.querySelector('#remain-balance').innerHTML = remainingBalance;
//         console.log("Your Remaining Balance ", remainingBalance);
//     }
// }












//------------------------------------------------------console screen for 1 item---------------------------------------
// function quantityAdd(){
//         qnApple=qnApple+1;
//     console.log("Quantity ",qnApple);

//     totalPrice = prApple*qnApple;    

//     if(totalPrice>balance){
//         alert("Sorry You have insufficient Balnce",balance);
//     }
//     else{
//         console.log("Total Price ", totalPrice);
//         // document.querySelector('#total-price').innerHTML = totalPrice;
//     }
// }

// function quantitySub(){
//     qnApple=qnApple-1;
//     console.log("Quantity ",qnApple);

//     totalPrice = prApple*qnApple; 

//     if(totalPrice < 0){
//         alert("Please add item in to the cart");
//     }
//     else{
//         console.log("Total Price ", totalPrice);
//     }    
// }

// function addToCart(){
//     totalPrice = prApple*qnApple;

//     if(totalPrice>balance){
//         alert("Sorry You have insufficient Balnce",balance);
//     }
//     else{
//         console.log("Total Price ", totalPrice);
//     }
// }



// -------------------------------------------------------------------------------------------------------------------------------------------

// function userInput(){
//     let inputElement = document.querySelector("input").value;
//     console.log(inputElement);
//     var inputItem = document.querySelector("#input-item");
//     inputItem.innerHTML = "Your Price: " +  inputElement;
// }
// let pApple = 10;
// let pBanana = 12;
// let pMango = 15;
// let totalAmount =  0;
// let quantityOfApple = 0; 
// let quantityOfBanana = 0;
// let quantityOfMango = 0;
// let appleTotalcost = 0;
// let bananaTotalcost = 0;
// let mangoTotalcost = 0;


// function addInputApple(){
//    let num = document.querySelector("#num1");
//    console.log(num);
//     num.innerHTML  = ++quantityOfApple ;
//     appleTotalcost = quantityOfApple * pApple;
//     console.log("apple cost " + appleTotalcost);  
//      totalElement(); 
//      balanceAmount();
// }

// function SubtractInputApple(){

//     let num = document.querySelector("#num1");
//    console.log(num);
//     num.innerHTML  = --quantityOfApple ;
//     appleTotalcost= quantityOfApple * pApple;
//     console.log(appleTotalcost);
//     totalElement(); 
//     balanceAmount();
//     if(quantityOfApple == 0){
//         alert("quantity is zero");
//     } 
// }


// function addInputBanana(){
//     let num2 = document.querySelector("#num2");
//     console.log(num2);
//      num2.innerHTML  = ++quantityOfBanana ;
//      bananaTotalcost = quantityOfBanana * pBanana;
//      console.log(bananaTotalcost);
//      totalElement(); 
//      balanceAmount();
//  }

// function SubtractInputBanana(){

//     let num2 = document.querySelector("#num2");
//     console.log(num2);
//     num2.innerHTML  = --quantityOfBanana ;
//     bananaTotalcost = quantityOfBanana * pBanana;
//     console.log(bananaTotalcost); 
//     totalElement(); 
//     balanceAmount();
//     if(quantityOfBanana == 0){
//          alert("quantity is zero");
//     } 
// }


//  function addInputMango(){
//     let num3 = document.querySelector("#num3");
//     console.log(num3);
//      num3.innerHTML  = ++quantityOfMango ;
//      mangoTotalcost = quantityOfMango * pMango;
//      console.log(mangoTotalcost);
//      totalElement();
//      balanceAmount(); 

//  }


//  function SubtractInputMango(){

//      let num3 = document.querySelector("#num3");
//     console.log(num3);
//      num3.innerHTML  = --quantityOfMango ;
//      mangoTotalcost = quantityOfMango * pMango;
//      console.log(mangoTotalcost);
//      totalElement(); 
//      balanceAmount();
//      if(quantityOfMango == 0){
//          alert("quantity is zero");
//      } 
//  }

//  function totalElement(){ 
//    let totalNumber = document.querySelector("#total");
//    console.log(totalNumber);

//    totalAmount = appleTotalcost+ bananaTotalcost + mangoTotalcost; 
//    totalNumber.innerHTML ="Total: " + totalAmount;
//    console.log(total);

//    let inputElement = document.querySelector("input").value;

//    if(totalAmount > inputElement){
//         alert("you can't select more than your amount");
//     }
//     else{
//         console.log("you can select");
//     }
// }

// function balanceAmount(){
//     let inputElement = document.querySelector("input").value;
//    let balance = document.querySelector("#balance");
//    balance.innerHTML ="Balance: " + (inputElement - totalAmount);
//    console.log(balance);
// }