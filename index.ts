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
