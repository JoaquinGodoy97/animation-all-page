




        
        // if($(textLabel1).is(":hover")){
        //     text1.opacity("0");
        // }
    // textLabel1.onmouseover = function() {
    //     // do something like for example change the class of a div to change its color :
    //     text1.style.opacity = "0";
    //     if(textLabel1.onmouseover == false){
    //     text1.style.opacity = "1";
    //     }
 
    // };

    // let hiddenLabelTrigger = document.getElementById('hiddenLabelTrigger');

    //  function mousehoverOn(){ 
    // let hiddenLabelOn = document.getElementById('hiddenLabelOn');
    // let cotainer = document.getElementsByClassName('img-container');
    // // let hiddenLabelTrigger.x = hiddenLabelTrigger.x
    // // let hiddenLabelTrigger.y = 
    

    //     if (hiddenLabelTrigger.onmouseover < hiddenLabelTrigger.x){
    //         // hiddenLabelOn.style.opacity = "1";
    //         // hiddenLabelOn.style.zIndex = '1';
    //         alert('dentro del circulo');
    //           }
    //         else if(hiddenLabelTrigger.onmouseover > hiddenLabelTrigger.x || hiddenLabelTrigger.onmouseover > hiddenLabelTrigger.y ){
    //         // hiddenLabelOn.style.opacity = "0";
    //         // hiddenLabelOn.style.zIndex = '-1';
    //         alert('fuera del circulo');

    //         }
    //         else {
    //             // hiddenLabelOn.style.opacity = "0";
    //             // hiddenLabelOn.style.zIndex = '1';
    //         alert('fuera del circulo');
    //         }
      
    
    // }

    let hiddenLabelTrigger = document.getElementById('hiddenLabelTrigger');

    //I'm using "click" but it works with any event
    document.addEventListener('mouseover', function(event) {
      var isClickInside = hiddenLabelTrigger.contains(event.target);

      let hiddenLabelOn = document.getElementById('hiddenLabelOn');
    
      if (isClickInside) {
        //the click was outside the specifiedElement, do something
        hiddenLabelOn.style.opacity = 1;
        hiddenLabelOn.style.zIndex = '1';
        // alert('inside element');
      }
      else{
        hiddenLabelOn.style.opacity = "0";
        hiddenLabelOn.style.zIndex = '0';
        hiddenLabelOn.style.pointerEvents = "none";
        // alert('outside element')
      }
    });

// jQuery 'Temporary mouseevents'

// $('#textLabel1').bind
// ({
//     onmouseover:
//         function ()
//         {
//             let text1 = document.getElementById('text1');
//             if(text1.onmouseover) {
//             text1.style.opacity = "0";
//             alert("hello");
//             }
//         },
//     onmouseout:
//         function ()
//         {
//             let text1 = document.getElementById('text1');
//             text1.style.opacity = "1";
//             alert("hello");
//         }
// });

// $('#text1').unbind('mouseover mouseout');

    // document.getElementById("mylink").onmouseout  = function() { alert("Out!"); }
