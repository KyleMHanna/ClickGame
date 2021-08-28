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
let price = 5
let total = 0
let multiplier = 0
let upgrade = 0

let newItem1 = 0
let price1 = 10
let total1 = 0
let multiplier1 = 0
let upgrade1 = 0

let passive01 = 0
let total2 = 0
let price2 = 15
let multiplier2 = 0

let passive02 = 0
let total3 = 0
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
                price += 5;
                multiplier +=2;
                upgrade += multiplier * total}
                else     Swal.fire({
                    toast: true,
                    text: 'You broke!',
                    position: 'center',
                    timer: 4000,
                    timerProgressBar: true,
                    imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
                  });{   
        
                document.getElementById('multi').innerText = item1.toString()
                document.getElementById('clickItem1').innerText = upgrade.toString()
                console.log(clicks)
                update()
            }
        }
    
    function addItem2(){
        if(clicks >= 10) {
            item2 += 1;
            clicks -=10;
            total1 += 1;
            price1+= 10
            multiplier1 +=1;
            upgrade1 += multiplier1 * total1}
            else     Swal.fire({
                toast: true,
                text: 'You broke!',
                position: 'center',
                timer: 4000,
                timerProgressBar: true,
                imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
              });{   
    
            document.getElementById('multi1').innerText = item2.toString()
            document.getElementById('clickItem2').innerHTML = upgrade1;
            update()
    }
}
    function passive1(){
        if (clicks >= 15) {
        item3 += 1;
        clicks -=15;
        total2 += 1;
        multiplier2 += .5;
        price2 += 15
        passive01 += multiplier2 * total2  }
        else     Swal.fire({
            toast: true,
            text: 'You broke!',
            position: 'center',
            timer: 4000,
            timerProgressBar: true,
            imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
          });{   

        document.getElementById("pass1").innerHTML = item3.toString();
        document.getElementById('clickpass1').innerHTML = passive01.toString()
        document.getElementById('passTotal').innerHTML = price2.toString()
        update()
    }
}
    function passive2(){
        if (clicks >= 20) {
        item4 += 1;
        clicks -=20;
        total3 += 1;
        multiplier3 += .5;
        price3 += 20
        passive02 += multiplier3 * total3  }
        else     Swal.fire({
            toast: true,
            text: 'You broke!',
            position: 'center',
            timer: 4000,
            timerProgressBar: true,
            imageUrl: 'https://i.ytimg.com/vi/_NQ3mWcbiBA/maxresdefault.jpg'
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
    document.getElementById('clickCount').innerText = clicks.toString()
    }


      
     




 function update(){
 document.getElementById("clickCount").innerText = clicks.toString()
 document.getElementById('multi').innerText = item1.toString()
 document.getElementById('multi1').innerText = item2.toString()
 document.getElementById("pass1").innerHTML = item3.toString()
 document.getElementById("pass2").innerHTML = item4.toString()
 }

 autoInterval()
 update()

     
  