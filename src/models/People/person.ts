export type Person = {
    employeeId: number;
    name: string;
    manager?: Person;
};