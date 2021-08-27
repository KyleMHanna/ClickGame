
let clicks =0;
let item1 =0;
let item2 =0;
let item3 =0;

// dictionary
let clickUpgrades = {
    Upgrade1:  {
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    Upgrade2: {
        price: 10,
        quantity: 0,
        multiplier: 1
      }
  };
  
  let automaticUpgrades = {
    passive1: {
      price: 20,
      quantity: 0,
      multiplier: 2
    },
    passive2: {
        price: 25,
        quantity: 0,
        multiplier: 5
    }
  };

  

  
  
  
  // clicker count function and upgrade funtions
  function onClick(){
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
    };
    
    function addItem1(){
        item1 += 1;
        document.getElementById("additem1").innerHTML = item1;
    };
    function addItem2(){
        item2 += 1;
        document.getElementById("addItem2").innerHTML = item2;
    };
    function passive1(){
        item3 += 1;
        document.getElementById("passive1").innerHTML = item3;
    };
    function passive2(){
        automaticUpgrades.passive2.price - clicks;
        document.getElementById("passive2").innerHTML = item3;
    };
    function startInterval() {
        collectionInterval = setInterval(collectAutoUpgrades, 3000);
      }
    
      
    startInterval()