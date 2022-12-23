import { Person } from '../../../../src/models/People';

describe('Person', () => {
    it('should be defined', () => {
        const person: Person = {
            employeeId: 1,
            name: 'John',
        };
        expect(person).toBeDefined();
    });
});