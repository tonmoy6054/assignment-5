// // 3rd-cart
// document.getElementById("calculate-3").addEventListener("click", function () {
//     // get the data from html using id
// const firstElement = document.getElementById("3rd-card-heading").innerText;
// const area = document.getElementById("area-low-3").innerText;
// const value = document.getElementById("value-3").innerText;
// console.log(firstElement, area, value);
// const container = document.getElementById("table-3-container");
// const tr = document.createElement("tr");
// tr.innerHTML=`
// <td>${1}</td>
// <td>${firstElement}</td>
// <td>${value}</td>

// `;
// container.appendChild(tr);

// });
//1st card
document.getElementById("1st-card-calculation").addEventListener("click", function(){

  //get the data from html using id

   const firstHeading = document.getElementById("1st-card-heading").innerText;
   const firstInput = document.getElementById("1st-input").value;
   const secondInput = document.getElementById("2nd-input").value;
   const total = 0.5*firstInput*secondInput;
   const conversion = total / 10000;
   console.log(firstHeading,firstInput,secondInput);

// display the data

  //  const container = document.getElementById("table-1-container");
  //  const tr = document.createElement("tr");
  //  tr.innerHTML=`
  //  <td>${1}</td>
  //  <td>${firstHeading}</td>
  //  <td>${total}</td>
  //  <td>${conversion}</td>
  //  `;
  //  container.appendChild(tr);
   // function call
   displayData(firstHeading,firstInput,secondInput,total,conversion);
   });
   
// common function to display data
   function displayData(firstHeading,firstInput,secondInput,total,conversion){
    
      const container = document.getElementById("table-1-container");
   const tr = document.createElement("tr");
   tr.innerHTML=`
   <td>${1}</td>
   <td>${firstHeading}</td>
   <td>${total}</td>
   <td>${conversion}</td>
   `;
   container.appendChild(tr);
   }

//2nd card

document.getElementById("2nd-card-calculation").addEventListener("click",function(){
  const secondHeading = document.getElementById("2nd-card-heading").innerText;
const thirdInput = document.getElementById("3rd-input").value;
const fourthInput = document.getElementById("4th-input").value;
// console.log(fourthInput);
const total = thirdInput*fourthInput;
// console.log(total);
   const conversion = total / 10000;
   console.log(secondHeading,thirdInput,fourthInput,total,conversion);
// function call
displayData(secondHeading,thirdInput,fourthInput,total,conversion);
});

function displayData(secondHeading,thirdInput,fourthInput,total,conversion){
    
  const container = document.getElementById("table-2-container");
const tr = document.createElement("tr");
tr.innerHTML=`
<td>${2}</td>
<td>${secondHeading}</td>
<td>${total}</td>
<td>${conversion}</td>
`;
container.appendChild(tr);
}

// 3rd card

document.getElementById("3rd-card-calculation").addEventListener("click",function(){
  const thirdHeading = document.getElementById("3rd-card-heading").innerText;
const fifthInput = document.getElementById("5th-input").value;
const sixthInput = document.getElementById("6th-input").value;
// console.log(fourthInput);
const total = fifthInput*sixthInput;
// console.log(total);
   const conversion = total / 10000;
   console.log(thirdHeading,fifthInput,sixthInput,total,conversion);
// function call
displayData(thirdHeading,fifthInput,sixthInput,total,conversion);
});

function displayData(thirdHeading,fifthInput,sixthInput,total,conversion){
    
  const container = document.getElementById("table-3-container");
const tr = document.createElement("tr");
tr.innerHTML=`
<td>${3}</td>
<td>${thirdHeading}</td>
<td>${total}</td>
<td>${conversion}</td>
`;
container.appendChild(tr);
}

// 4th card

document.getElementById("4th-card-calculation").addEventListener("click",function(){
  const fourthHeading = document.getElementById("4th-card-heading").innerText;
const seventhInput = document.getElementById("7th-input").value;
const eighthInput = document.getElementById("8th-input").value;
// console.log(fourthInput);
const total = 0.5*seventhInput*eighthInput;
console.log(total);
   const conversion = total / 10000;
   console.log(fourthHeading,seventhInput,eighthInput,total,conversion);
// function call
displayData(fourthHeading,seventhInput,eighthInput,total,conversion);
});

function displayData(fourthHeading,seventhInput,eighthInput,total,conversion){
    
  const container = document.getElementById("table-4-container");
const tr = document.createElement("tr");
tr.innerHTML=`
<td>${4}</td>
<td>${fourthHeading}</td>
<td>${total}</td>
<td>${conversion}</td>
`;
container.appendChild(tr);
}
//  5th card

document.getElementById("5th-card-calculation").addEventListener("click",function(){
  const fifthHeading = document.getElementById("5th-card-heading").innerText;
const ninthInput = document.getElementById("9th-input").value;
const tenthInput = document.getElementById("10th-input").value;
// console.log(fourthInput);
const total = 0.5*ninthInput*tenthInput;
console.log(total);
   const conversion = total / 10000;
   console.log(fifthHeading,ninthInput,tenthInput,total,conversion);
// function call
displayData(fifthHeading,ninthInput,tenthInput,total,conversion);
});

function displayData(fifthHeading,ninthInput,tenthInput,total,conversion){
    
  const container = document.getElementById("table-5-container");
const tr = document.createElement("tr");
tr.innerHTML=`
<td>${5}</td>
<td>${fifthHeading}</td>
<td>${total}</td>
<td>${conversion}</td>
`;
container.appendChild(tr);
}

// 6th card

document.getElementById("6th-card-calculation").addEventListener("click",function(){
  const sixthHeading = document.getElementById("6th-card-heading").innerText;
const eleventhInput = document.getElementById("11th-input").value;
const twelvethInput = document.getElementById("12th-input").value;
// console.log(fourthInput);
const total = 3.14*eleventhInput*twelvethInput;
console.log(total.toFixed(2));
   const conversion = total / 10000;
   console.log(sixthHeading,eleventhInput,twelvethInput,total,conversion);
// function call
displayData(sixthHeading,eleventhInput,twelvethInput,total,conversion);
});

function displayData(sixthHeading,eleventhInput,twelvethInput,total,conversion){
    
  const container = document.getElementById("table-6-container");
const tr = document.createElement("tr");
tr.innerHTML=`
<td>${6}</td>
<td>${sixthHeading}</td>
<td>${total}</td>
<td>${conversion}</td>
`;
container.appendChild(tr);
}
