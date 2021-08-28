let clicks = 0
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let itemnum = 0
// dictionary
// let clickUpgrades = {
//     Upgrade1:  {
//       price: 5,
//       item1: 1,
//       multiplier: 2
//     },
//     Upgrade2: {
//         price: 10,
//         item2: 0,
//         multiplier: 3
//       }
//   }

// clickUpgrades 
let newItem = 0
let price = 20
let total = 0
let multiplier = 0
let upgrade = 0

let newItem1 = 0
let price1 = 50
let total1 = 0
let multiplier1 = 0
let upgrade1 = 0

let passive01 = 0
let total2 = 20
let price2 = 20
let multiplier2 = 0

let passive02 = 0
let total3 = 20
let price3 = 20
let multiplier3 = 0


  
//   let automaticUpgrades = {
//     passive1: {
//       price: 20,
//       quantity: 0,
//       multiplier: 4
//     },
//     passive2: {
//         price: 25,
//         quantity: 0,
//         multiplier: 5
//     }
//   };

  
  
        
    
  


  


//   function onClick(){
//       clicks ++
//       for (let key in clickUpgrades){
//     clicks += clickUpgrades[key].item1 * clickUpgrades[key].multiplier
        
//     document.getElementById("clickCount").innerHTML = clicks.toString()
//    console.log(clicks)
// }
//   }
function onClick(){
    clicks += 1
    clicks += total * multiplier
    document.getElementById("clickCount").innerHTML = clicks.toString()
    console.log(clicks)

    }

    
    // function addItem1(key){
    //     if (clicks >= 5)  { 
    //         clicks -=5
    //         item1 += 1
    //         clickUpgrades[key].item1 += 1
    //         clickUpgrades[key].multiplier += 2
    //         document.getElementById("itemz").innerHTML = item1.toString()
    //         // document.getElementById("clickItem1").innerText = upgrade.toString()
    //       }   else    
    //       window.alert("nah")
    //       update()
    //         // Swal.fire
    //         // toast: true,
    //         // text: 'You broke',
    //         // position: 'center',
    //         // timer: 4000,
    //         // timerProgressBar: true,
    //         // imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
          
        function addItem1(){
            if(clicks >= 5) {
                item1 += 1;
                clicks -=5;
                total += 1;
                multiplier +=2;
                upgrade += multiplier * total
                document.getElementById('multi').innerText = item1.toString()
                document.getElementById('clickItem1').innerText = upgrade.toString()
                console.log(clicks)
                update()
            }
        }
    
    function addItem2(){
        if(clicks >= 5) {
            item2 += 1;
            clicks -=5;
            total1 += 1;
            multiplier1 +=2;
            upgrade1 += multiplier1 * total1
            document.getElementById('multi1').innerText = item2.toString()
            document.getElementById('clickItem2').innerHTML = upgrade1;
            update()
    }
}
    function passive1(){
        if (clicks >= 20) {
        item3 += 1;
        clicks -=20;
        total2 += 1;
        multiplier2 += 1.5;
        price2 += 10
        passive01 += multiplier2 * total2  
        document.getElementById("pass1").innerHTML = item3.toString();
        document.getElementById('clickpass1').innerHTML = passive01; 
        document.getElementById('passTotal').innerHTML = price2.toString()
        update()
    }
}
    function passive2(){
        if (clicks >= 20) {
        item4 += 1;
        clicks -=20;
        total3 += 1;
        multiplier3 += 1.75;
        price3 += 30
        passive02 += multiplier3 * total3    
        document.getElementById("pass2").innerHTML = item4;
        document.getElementById('clickpass2').innerHTML = passive02;
        document.getElementById('passtotal1').innerHTML = price3;  
        
    }
}
    update()
    function collectAutoUpgrades(){
     let multitot = 0
     let passtot = 0
     multitot += multiplier2 + multiplier3
    passtot += passive01  + passive02
    clicks += multitot * passtot
      
    console.log(clicks)
    document.getElementById('clickCount').innerText = clicks.toString()
      }

    function autoInterval(collectionInterval){
        collectionInterval = setInterval(collectAutoUpgrades, 3000);
      }
      autoInterval()

      
     




 function update(){
 document.getElementById("clickCount").innerText = clicks.toString()
 }
 autoInterval()
     update()

     
  