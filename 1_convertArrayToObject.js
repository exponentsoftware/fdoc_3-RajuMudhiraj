function convertArrayToObject(arr) {

    const arrOfObj = [];

    for (let i = 0; i < arr.length; i++) {

        const obj = {};

        obj.name = arr[i][0]
        obj.skills = arr[i][1]
        obj.scores = arr[i][2]

        arrOfObj.push(obj)
    }

    return arrOfObj;
};




const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))