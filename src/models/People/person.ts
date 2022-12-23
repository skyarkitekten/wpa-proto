type Person = {
    employeeId: number;
    name: string;
    age: number;
    manager: Person;
};

export default Person;