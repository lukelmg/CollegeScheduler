let blockHolder = $('block-holder');

let daysArray = ['M', 'T', 'W', 'R', 'F'];

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
    for (let e = 0; e < classes.length; e++) {
        let currentDay = daysArray[i].toString();
        if ((classes[e].days).includes(currentDay)) {
            console.log(classes[e])
        }
    }
}