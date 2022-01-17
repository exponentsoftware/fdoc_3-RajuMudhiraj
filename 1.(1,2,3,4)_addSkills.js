

function addSkills(student, newSkills) {

    student.skills.frontEnd = student.skills.frontEnd.concat(newSkills.skills.frontEnd);
    student.skills.backEnd = student.skills.backEnd.concat(newSkills.skills.backEnd);
    student.skills.dataBase = student.skills.dataBase.concat(newSkills.skills.dataBase);
    student.skills.dataScience = student.skills.dataScience.concat(newSkills.skills.dataScience);

    return student;

}

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newSkills = {
    skills: {
        frontEnd: [
            {skill: 'BootStrap',level: 8}
        ],
        backEnd: [
            {skill: 'Express',level: 9}
        ],
        dataBase: [
            { skill: 'SQL',level: 8}
        ],
        dataScience: ['SQL']
    }
}

console.log(addSkills(student, newSkills))


