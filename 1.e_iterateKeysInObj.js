
let keys = [];

function iterateKeysInObj(obj) {

    for (var k in obj) {
        keys.push(k)
        typeof obj[k] === 'object' && iterateKeysInObj(obj[k]);
    }
    return keys
};




const students = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
            { skill: 'BootStrap', level: 8 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
            { skill: 'SQL', level: 8 }
        ],
        dataScience: ['Python', 'R', 'D3.js', 'SQL']
    }
}

console.log(iterateKeysInObj(students))