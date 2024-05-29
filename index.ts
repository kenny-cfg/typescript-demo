const ageCheck = (student: CfgStudent) => {
  if (!student.age) {
    console.log('Don\'t know')
    return
  }
  if (student.age > 18) {
    console.log('Have a pint')
    return
  }
  console.log('Have a lemonade')
}

interface CfgStudent {
  firstName: string;
  age?: number;
  cohortYear: number;
}

const cat: CfgStudent = {
  firstName: 'cat',
  cohortYear: 2024
}

const lucia: CfgStudent = {
  firstName: 'lucia',
  cohortYear: 2024,
  age: 503
}

// Won't work because we're missing cohortYear and firstName
// const frank: CfgStudent = {
//   age: 3003
// }

ageCheck(cat)
ageCheck({
  firstName: 'Ursula',
  age: 20,
  cohortYear: 2020
})