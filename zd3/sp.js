let arr = [
    { label: 'Виктор' },
    { label: 'Михаил' },
    { label: 'Антон' },
    { label: 'Даниил' },
    { label: 'Владимир' }
]
let array2 = [1, "два", "три", 4, 5];
let object = {
    value1: 'Значение 1',
    value2: 'Значение 2',
    value3: 'Значение 3', 
    value4: 'Значение 4',
    value5: 'Значение 5'
};

function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let e of arr) {
                let value = e.value;
                let isSelected = str === value;
                let option = new Option(e.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    }
    else {
        for (let e of Object.entries(arr)) {
            let value = e[0];
            let isSelected = str === value;
            let option = new Option(e[1], value, isSelected, isSelected);
            select.options.add(option);
        }
    }
    return select;
}

document.body.append(createSelect(arr));
document.body.append(createSelect(array2));
document.body.append(createSelect(object));