let blockHolder = document.getElementById('block-holder')

let daysArray = ['M', 'T', 'W', 'R', 'F'];
let dayNamesArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

for (let i = 0; i < daysArray.length; i++) {
    let dayDiv = document.createElement('div');
    dayDiv.id = daysArray[i];
    dayDiv.className = 'day-div';
    let dayHeader = document.createElement('h1');
    dayHeader.innerHTML = dayNamesArray[i];
    dayHeader.id = daysArray[i] + 'header';
    dayDiv.appendChild(dayHeader);
    for (let e = 0; e < classes.length; e++) {
        let currentDay = daysArray[i].toString();
        if ((classes[e].days).includes(currentDay)) {
            let classDiv = document.createElement('div');
            classDiv.id = classes[e].name;
            classDiv.className = 'class-div';
            classDiv.style.backgroundColor = classes[e].color;

            let header = document.createElement('h2');
            header.innerHTML = classes[e].name;
            classDiv.appendChild(header);

            let timer = document.createElement('h3');
            timer.innerHTML = '00:00';
            timer.className = 'time-until ' + daysArray[i];
            classDiv.appendChild(timer);

            let buildingRoom = document.createElement('h5');
            buildingRoom.innerHTML = classes[e].building + ' ' + classes[e].room;
            classDiv.appendChild(buildingRoom);

            let startTime = document.createElement('h5');
            startTime.innerHTML = classes[e].start + ' to ' + classes[e].end;
            classDiv.appendChild(startTime);

            dayDiv.appendChild(classDiv);
        }
    }
    blockHolder.appendChild(dayDiv);
}

let classesToday = [];
let theDay = '';

function setCurrentDayColor() {
    var d = new Date();
    var n = d.getDay() + 1;
    if (n < 0) {
      n = 6;
    }
    theDay = n;
    console.log(daysArray);
    let thisDay = document.getElementById(daysArray[n]);
    thisDay.style.backgroundColor = '#26282e';
    let thisDayHeader = document.getElementById(daysArray[n] + 'header');
    thisDayHeader.style.backgroundColor = '#26282e';
    
    let timers = document.getElementsByClassName('time-until');
    for (let i = 0; i < timers.length; i++) {
        timers[i].style.display = 'none'; 
    }

    let currentTimer = document.getElementsByClassName('time-until ' + daysArray[n]);
    for (let i = 0; i < currentTimer.length; i++) {
        currentTimer[i].style.display = 'block';
        currentTimer[i].id = 'T' + i;
    }

    for (let i = 0; i < classes.length; i++) {
        if ((classes[i].days).includes(daysArray[n])) {
            classesToday.push(classes[i]);
        }
    }

    console.log(classesToday);

    setTimeout(setCurrentDayColor, 60*1000);
  }
  
  setCurrentDayColor();

  let starts = [];
  let ends = [];

  let startsSeconds = [];
  let endsSeconds = [];

  (function() {

    var start = new Date;
  
    function startTick() {
      for (var i = 0; i < classesToday.length; i++) {
        start.setHours(classesToday[i].start.substring(0, 2), classesToday[i].start.substring(3, 5), 0);
  
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
          start.setDate(start.getDate() + 1);
        }
  
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
  
        if (hh >= 24) {
          hh = hh - 24;
        }
  
        if (hh.toString().length == 1) {
          hh = '0' + hh;
        }

        starts[i] = hh + ':' + mm + ':' + ss;

        let a = starts[i].split(':'); // split it at the colons   
        startsSeconds[i] = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
      }
      setTimeout(startTick, 100);
    }


    var start = new Date;
  
    function endTick() {
      for (var i = 0; i < classesToday.length; i++) {
        start.setHours(classesToday[i].end.substring(0, 2), classesToday[i].end.substring(3, 5), 0);
  
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
          start.setDate(start.getDate() + 1);
        }
  
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
  
        if (hh >= 24) {
          hh = hh - 24;
        }
  
        if (hh.toString().length == 1) {
          hh = '0' + hh;
        }
        ends[i] = hh + ':' + mm + ':' + ss;
      
        let a = ends[i].split(':'); // split it at the colons   
        endsSeconds[i] = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

        if (endsSeconds[i] <= startsSeconds[i]) {
            document.getElementById('T'  + i).innerHTML = ends[i];
        } else if (startsSeconds[i] <= (9*60*60)){
            document.getElementById('T'  + i).innerHTML = starts[i];
        } else {
            document.getElementById('T'  + i).innerHTML = '---';
        }
      }
      setTimeout(endTick, 100);
    }
    document.addEventListener('DOMContentLoaded', startTick);
    document.addEventListener('DOMContentLoaded', endTick);
  })();

  

  function pad(num) {
    return ('0' + parseInt(num)).substr(-2);
  }