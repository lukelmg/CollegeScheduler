let blockHolder = document.getElementById('block-holder')

let daysArray = ['M', 'T', 'W', 'R', 'F'];
let dayNamesArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

let classes = [];

classes[0] = {
    name: 'Math',
    start: '9:00',
    end: '10:00',
    days: 'MWF',
    building: 'Smith',
    room: '111'
}

for (let i = 0; i < daysArray.length; i++) {
    let dayDiv = document.createElement('div');
    dayDiv.id = daysArray[i];
    dayDiv.className = 'day-div';
    let dayHeader = document.createElement('h1');
    dayHeader.innerHTML = dayNamesArray[i];
    dayDiv.appendChild(dayHeader);
    for (let e = 0; e < classes.length; e++) {
        let currentDay = daysArray[i].toString();
        if ((classes[e].days).includes(currentDay)) {
            let classDiv = document.createElement('div');
            classDiv.id = classes[e].name;

            let header = document.createElement('h2');
            header.innerHTML = classes[e].name;
            classDiv.appendChild(header);
            dayDiv.appendChild(classDiv);
        }
    }
    blockHolder.appendChild(dayDiv);
}