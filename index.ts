import inquirer from "inquirer";

class Student {
    name:string 
    constructor(n:string) {
        this.name=n
    }
}

class Person {
    students:Student[] = []
    addStudent(obj:Student) {
        this.students.push(obj)
    }
}

const persons = new Person ()

const ProgramStart = async(persons:Person)=> {

    do {
    console.log("Welcome to the OOP");
    const answer = await inquirer.prompt({  
        name: "select",
        type: "list",
        message: "What you wanted to do here?",
        choices: ["Staff" ,"student", "Exit"]
})      

if (answer.select === "Staff") {
    console.log("You are redirecting to staff. Feel free to ask any question.");
}

else if (answer.select === "student") {
    const answer = await inquirer.prompt({
        name: "student",
        type: "input",
        message: "Please enter the student's name to proceed."
    })

    const student = persons.students.find(val => val.name === answer.student)

    if (!student) {
        const name = new Student (answer.student)
        persons.addStudent(name)
        console.log(`Hello ${name.name}.`);
        console.log("New student added");
        console.log("students lists are as follows:");
        console.log(persons.students);
    } else {
        console.log(`Hello ${student.name}`);
        console.log("change of the students list are as follows");
        console.log(persons.students);
    }
} else if (answer.select === "Exit") { 
    console.log("Exiting. Please wait");
    process.exit()
}

}while(true)

}    






ProgramStart (persons)