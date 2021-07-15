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
            startTime.innerHTML = classes[e].start + ' to ' +classes[e].end;
            classDiv.appendChild(startTime);

            dayDiv.appendChild(classDiv);
        }
    }
    blockHolder.appendChild(dayDiv);
}

function setCurrentDayColor() {
    var d = new Date();
    var n = d.getDay() - 1;
    let thisDay = document.getElementById(daysArray[n]);
    thisDay.style.backgroundColor = 'white';
    let thisDayHeader = document.getElementById(daysArray[n] + 'header');
    thisDayHeader.style.backgroundColor = 'white';
    
    let timers = document.getElementsByClassName('time-until');
    for (let i = 0; i < timers.length; i++) {
        timers[i].style.display = 'none'; 
    }

    console.log('time-until ' + daysArray[n])

    let currentTimer = document.getElementsByClassName('time-until ' + daysArray[n]);
    console.log(currentTimer);
    for (let i = 0; i < currentTimer.length; i++) {
        currentTimer[i].style.display = 'block';
    }
    setTimeout(setCurrentDayColor, 60*1000);
  }
  
  setCurrentDayColor();