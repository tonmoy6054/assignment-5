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
  const secondHeading = document.getElementById("3rd-card-heading").innerText;
const fifthInput = document.getElementById("5th-input").value;
const sixthInput = document.getElementById("6th-input").value;
// console.log(fourthInput);
const total = fifthInput*sixthInput;
// console.log(total);
   const conversion = total / 10000;
   console.log(secondHeading,thirdInput,fourthInput,total,conversion);
// function call
displayData(secondHeading,thirdInput,fourthInput,total,conversion);
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
