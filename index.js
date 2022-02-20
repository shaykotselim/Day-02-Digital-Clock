function myTime (){
     let myDate = new Date();
     let hr,min =(myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
            sec = (myDate.getSeconds() < 10 ) ? "0" + myDate.getSeconds(): myDate.getSeconds(),
            M = (myDate.getHours() >= 12 ) ? "PM" : "AM";
           
         if(myDate.getHours() == 0){
                hr = 12;
         }   else if(myDate.getHours() > 12){
             hr = myDate.getHours() -12;
         }
         else{
             hr = myDate.getHours();
         }
         let currentTime = hr + ":" + min + ":" + sec + ":";
         document.getElementsByClassName("hour")[0].innerHTML = currentTime;
         document.getElementsByClassName("min")[0].innerHTML = M

         let myDay = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

         let myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

         let day = myDate.getDate();
         
         let currentDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + day;
         document.getElementsByClassName('date')[0].innerHTML= currentDate;
        }
        myTime();
        setInterval(function(){
            myTime()
        },1000);