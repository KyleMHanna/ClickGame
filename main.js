let clicks = 0
let item1 = 0
let item2 = 0
let item3 = 0
let item4 = 0
let itemnum = 0
let autoClick = 0

let clickX = 0;
let clickX2 =1;
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
let price = 50
let total = 0
let multiplier = 0
let upgrade = 0

let newItem1 = 0
let price1 = 30
let total1 = 0
let multiplier1 = 0
let upgrade1 = 0

let passive01 = 0
let total2 = 0
let price2 = 60
let multiplier2 = 0

let passive02 = 0
let total3 = 0
let price3 = 35
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
function autoClicks(){
if(autoClick < 1) {
    clicks += 1 * Math.round(clickX);
}
document.getElementById('clickCount').innerText = clicks.toString();
}
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
            if(clicks >= 50) {
                item1 += 1;
                clicks -=50;
                total += 1;
                price += 50;
                multiplier +=2;
                upgrade += multiplier * total}
                else if (item1 >= 10)
                Swal.fire({
                  toast: true,
                  text: 'You broke!',
                  position: 'center',
                  timer: 4000,
                  timerProgressBar: true,
                  imageUrl: 'https://lh3.googleusercontent.com/proxy/Hpj1tO5kRZkbDgJ02BXMXb0wnT0ALTgJbcppRIHLQkwFu5TpitHmfWBfzyaroYK19Qo1hsTgSPNiGWGrpbIf6Bgajde7Y__C1G2RNysHowG1MQdGWdBQBjCAm1HG8Vr6jJp9rJeMg8YAo-FHGsgmIXPHdqLMsfMFbkc'
                })
                else   Swal.fire({
                    toast: true,
                    text: 'Not enough click faster!',
                    position: 'center',
                    timer: 4000,
                    timerProgressBar: true,
                    imageUrl: 'https://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg'
                  });
            
                  document.getElementById('multi').innerText = item1.toString()
                  document.getElementById('clickpass1').innerText = upgrade.toString()
                  document.getElementById('clickItem1').innerHTML = price.toString()
                  console.log(clicks)
                  update()

                    }
        
            
    
    
    function addItem2(){
        if(clicks >= 30) {
            item2 += 1;
            clicks -=30;
            total1 += 1;
            price1+= 30
            multiplier1 +=1;
            upgrade1 += multiplier1 * total1}
            else     Swal.fire({
                toast: true,
                text: 'Not enough click faster!',
                position: 'center',
                timer: 4000,
                timerProgressBar: true,
                imageUrl: 'https://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg'
              });{   
    
                document.getElementById('multi1').innerText = item2.toString()
                document.getElementById('clickpass2').innerHTML = upgrade1.toString()
                document.getElementById('clickItem2').innerHTML = price1.toString()
            update()
    }
}
    function passive1(){
        if (clicks >= 60) {
        item3 += 1;
        clicks -=60;
        total2 += 1;
        multiplier2 += 3;
        price2 += 60
        passive01 += multiplier2 * total2  
    }
        else     Swal.fire({
            toast: true,
            text: 'Not enough click faster broke!',
            position: 'center',
            timer: 4000,
            timerProgressBar: true,
            imageUrl: 'https://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg'
          });{   

        document.getElementById("pass1").innerHTML = item3.toString()
        document.getElementById('clickpass1').innerHTML = passive01.toString()
        document.getElementById('passTotal').innerHTML = price2.toString()
        update()
    }
}
    function passive2(){
        if (clicks >= 35) {
        item4 += 1;
        clicks -=35;
        total3 += 1;
        multiplier3 += 2;
        price3 += 35
        passive02 += multiplier3 * total3  }
        else     Swal.fire({
            toast: true,
            text: 'Not enough click faster',
            position: 'center',
            timer: 4000,
            timerProgressBar: true,
            imageUrl: 'https://www.thewrap.com/wp-content/uploads/2016/09/1200.jpg'
          });{   
  
        document.getElementById("pass2").innerHTML = item4.toString()
        document.getElementById('clickpass2').innerHTML = passive02.toString()
        document.getElementById('passTotal1').innerText = price3.toString()
      
    }
}
update()
function autoInterval(collectionInterval){
    collectionInterval = setInterval(collectAutoUpgrades, 6000)
  }
  
    function collectAutoUpgrades(){
    let multitot = 0
    let passtot = 0
    multitot += multiplier2 + multiplier3
    passtot += passive01  + passive02
    clicks += multitot * passtot
    console.log(clicks)
   
    update()
    }


      
    function startInterval() {
        collectionInterval = setInterval(autoClicks, 6000);
      }




function update(){
document.getElementById("clickCount").innerText = clicks.toString()
document.getElementById('multi').innerText = item1.toString()
document.getElementById('multi1').innerText = item2.toString()
document.getElementById("pass1").innerHTML = item3.toString()
document.getElementById("pass2").innerHTML = item4.toString()

}

autoInterval()
startInterval()
update()