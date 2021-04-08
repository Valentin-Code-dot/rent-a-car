
const vehicles = [{
  id: 01,
  type: 'car',
  model: 'Toyota Aygo',
  price: 53,
  transmission: 'manual',
  passengers: 4,
  img: "ToyotaAygo"
},
{
  id: 02,
  type: 'car',
  model: 'Ford Focus',
  price: 64,
  transmission: 'automatic',
  passengers: 5,
  img: "FordFocusFilter"
},
{
  id: 03,
  type: 'car',
  model: 'Citroen 2CV',
  price: 30,
  transmission: 'manual',
  passengers: 2,
  img: "Citroen2CV"
},
{
  id: 04,
  type: 'car',
  model: 'Lamborghini Huracan',
  price: 2400,
  transmission: 'manual',
  passengers: 2,
  img: "LamborghiniHuracanFilter"
},
{
  id: 05,
  type: 'suv',
  model: 'Volvo XC60',
  price: 185,
  transmission: 'manual',
  passengers: 5,
  img: "Volvoxc60Filter"
},
{
  id: 06,
  type: 'suv',
  model: 'Ford Kuga',
  price: 92,
  transmission: 'automatic',
  passengers: 5,
  img: "FordKugaGrid"
},
{
  id: 07,
  type: 'suv',
  model: 'Range Rover Sport',
  price: 240,
  transmission: 'automatic',
  passengers: 5,
  img: "RangeRoverGrid"
},
{
  id: 08,
  type: 'van',
  model: 'Vauxhall Vivaro',
  price: 60,
  transmission: 'manual',
  passengers: 3,
  img: "VauxhallVivaroGrid"
},
{
  id: 09,
  type: 'van',
  model: 'Renault Kangoo',
  price: 50,
  transmission: 'manual',
  passengers: 2,
  img: "RenaultKangooGrid"
},
{
  id: 10,
  type: 'carrier',
  model: 'Seat Alhambra',
  price: 200,
  transmission: 'automatic',
  passengers: 7,
  img: "SeatAlhambraGrid"
}
]

// When user makes a choice it calls the filter function
const filterTrigger = document.querySelectorAll('.filterTriger')

for (let i = 0; i < filterTrigger.length; i++) {
  filterTrigger[i].addEventListener('change', function () {
    filter();
  })
}

// const triggerBtn = document.getElementById('filter')

// triggerBtn.addEventListener('click',function(){
//   filter()
// })

// Resets the user choice 
const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function(){
  clearCars()
  renderCars(vehicles)
})



function processForm() {

  // Object we use for filtering, it returns and dislays user's choice on the screen
  const returnObj = {
    type: null,
    transmission: null,
    passengers: null,
    price: null
  }

  // Get all checked elements (checkboxes and radio buttons)
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
  const checkedRadios = document.querySelectorAll("input[type='radio']:checked");

  //  Create an array of checked elements 
  const allCheckedElms = [...checkedBoxes, ...checkedRadios]

  // Loop the array of checked elements and create the object using data we got from them
  allCheckedElms.forEach((item) => {
    // Get the type of the input 
    let itemType = item.getAttribute("data-type");
    // Stock values by type and return it as a object
    if (itemType === "type") {
      returnObj.type = item.value;
    } else if (itemType === "transmission") {
      returnObj.transmission = item.value;
    } else if (itemType === "passNum"){
      returnObj.passengers = item.value;
    } else{
      returnObj.price = item.value;
    }
  })
  return returnObj;
}

// Transforms the string input into a node we can append to our DOM
function stringToHTML(str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstChild;
};
function returnCardEle(item) {
  // Dinamically create our elements with the data we get
  const { model, img, transmission, passengers, type, price } = item;
  return stringToHTML(`<div >
                          <div class="post-img">
                              <img class="category_img" src="img/${img}.jpg" alt="${model}">
                              <span class="category_name ${type}">${type}</span>
                          </div>

                          <div class="post-content">
                              <div class="post-content-top">
                                  <span><i class="fa fa-car"><em>${model}</em></i></span>
                                  <span><i class="fas fa-pound-sign"></i><em>${price}</em></span>
                              </div>
                              <hr>
                              <div class="post-content-bottom">
                                  <span><i class="fas fa-car"></i><strong>${type}</strong></span>
                                  <span><i class="fas fa-cog"></i><strong>${transmission}</strong></span>
                                  <span><i class="fas fa-user-friends"></i><strong>${passengers}</strong></span>
                              </div>
                          </div>
                        </div>`);
}
function clearCars() {
  // Clear all elements 
  const mainCon = document.querySelector("#main-card-container");
  mainCon.innerHTML = "";
}
function renderCars(vehiclesParm) {
  // Reders HTML
  const mainCon = document.querySelector("#main-card-container");

  vehiclesParm.forEach((item) => {
    mainCon.appendChild(returnCardEle(item))
  })
}
function filter() {
  let somethingToFilterBy = false;
  // Call procesForm function that returns our object we need to filter with
  const filterObj = processForm()
  // When no checkbox is checked it renders the whole vehicles object
  Object.keys(filterObj).forEach((key) => {
    if (filterObj[key] != undefined)
      somethingToFilterBy = true;
  })
  if (!somethingToFilterBy) {
    clearCars();
    renderCars(vehicles);
    return;
  }
  //loop through the cars and apply the filter
  const filteredCars = vehicles.filter(
    function (item) {
      if ((!filterObj.type ||  filterObj.type === "all" || filterObj.type === item.type ) &&
        (!filterObj.transmission || filterObj.transmission === item.transmission) &&
        (!filterObj.passengers || filterObj.passengers == item.passengers) && 
        (!filterObj.price || filterObj.price >= item.price)) {
        return true;
      }
      return false;
    }
  )

  clearCars();
  renderCars(filteredCars);
}

// Renders 
renderCars(vehicles);

/* Type of checkbox */

const checkBoxAny = document.querySelector('#all')
const topCheckBoxes = document.querySelectorAll('[data-type="type"]')
const passangerCheckBoxes = document.querySelectorAll('[data-type="passNum"]')
const priceCheckBoxes = document.querySelectorAll('[data-type="price"]')
/* Click on All will remove the active class for all buttons  */

checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topCheckBoxes.forEach(function (item) {
            item.checked = false
        })
    }
})

//these two remove the need for the triggerFilter class(excpet the all button on type of car)
/* Click on button that is not equal with All will remove the active class for ALL */
topCheckBoxes.forEach(function (item) {
    item.addEventListener('change', function (e) {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false
        }
        //clear all unchecked boxes and then call filter
        topCheckBoxes.forEach((item) => {
             item.checked = false;
        });
        e.target.checked = true;
        filter();

    })
})
//check and uncheck and call filter for passanger checkboxes
passangerCheckBoxes.forEach(function(item){
    item.addEventListener('change', function (e) {
        //clear all unchecked boxes and then call filter
        passangerCheckBoxes.forEach((item) => {
             item.checked = false;
        });
        e.target.checked = true;
        filter();
    })
});

priceCheckBoxes.forEach(function(item){
    item.addEventListener('change', function (e) {
        //clear all unchecked boxes and then call filter
        priceCheckBoxes.forEach((item) => {
             item.checked = false;
        });
        e.target.checked = true;
        filter();
    })
});



