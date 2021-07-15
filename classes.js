let classes = [];

classes[0] = {
    name: 'Calculus 1',
    start: '8:30',
    end: '9:45',
    days: 'TR',
    building: 'McEniry',
    room: '125',
    color: 'red'
}

classes[1] = {
    name: 'Marching Band',
    start: '16:15',
    end: '18:15',
    days: 'MWF',
    building: 'Rowe',
    room: '140',
    color: 'indigo'
}

classes[2] = {
    name: 'FLC Seminar',
    start: '14:30',
    end: '15:45',
    days: 'T',
    building: 'Storrs',
    room: '110',
    color: 'purple'
}

classes[3] = {
    name: 'Intro to Eng.',
    start: '11:30',
    end: '12:45',
    days: 'TR',
    building: 'Smith',
    room: '269',
    color: 'blue'
}

classes[4] = {
    name: 'Physical Geology',
    start: '10:00',
    end: '11:15',
    days: 'TR',
    building: 'McEniry',
    room: '124',
    color: '#3fe075'
}

classes[5] = {
    name: 'Arts & Society',
    start: '10:00',
    end: '11:15',
    days: 'MWF',
    building: 'Storrs',
    room: '110',
    color: 'orange'
}

classes[6] = {
    name: 'Eng. Foundation',
    start: '8:00',
    end: '9:55',
    days: 'MWF',
    building: 'Storrs',
    room: '110',
    color: 'gray'
}

for (let i = 0; i < classes.length; i++) {
    let current = hmsToSecondsOnly(classes[i].start);
    classes[i].realTime = current;
}

console.log(classes);

classes.sort(function (a, b) {
    return a.realTime - b.realTime;
  });

function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}