
// var balance=+prompt("Enter your Balance");



function balanceSubmit(){
    let inpBudget = document.querySelector('#input-budget').value;
    console.log(inpBudget);
    document.querySelector('#bal').innerHTML = inpBudget;
}

var prApple=15;
var qnApple=0;
var totalPrice; 
let quantityOfApple = 0; 
let appleTotalcost = 0;

// function addInputApple(){
//     let num = document.querySelector("#show-number");
//     console.log(num);
//      num.innerHTML  = ++quantityOfApple ;
//      appleTotalcost = quantityOfApple * prApple;
//      console.log("apple cost " + appleTotalcost);  
//     //   totalElement(); 
//     //   balanceAmount();
//  }
function addApple(){
    qnApple=qnApple + 1;
    document.querySelector('#show-number').value = qnApple;
    alert(document.querySelector('#show-number').value);


    // totalPrice = prApple*qnApple; 
    
    // if(totalPrice>balance){
    //     alert("Sorry You have insufficient Balnce",balance);
    // }
    // else{
    //     console.log("Total Price ", totalPrice);
    //     // document.querySelector('#total-price').innerHTML = totalPrice;
    // }
}

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
