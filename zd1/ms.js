let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

let keys = Object.keys(objects);
let values = Object.values(objects);
let entries = Object.entries(objects);

entries.map(([index, item]) => console.log(index, item));