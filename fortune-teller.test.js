import FortuneTeller from './fortune-teller';

test('does it return a name', () => {
    const underTest = new FortuneTeller('FirstName', 'LastName', 25, '1', 'blue', '3');
    expect(typeof underTest.firstName).toMatch('string');
});

test('does it return FirstName as the name', () => {
    const underTest = new FortuneTeller('FirstName', 'LastName', 25, '1', 'blue', '3');
    expect(typeof underTest.numOfBirthMonth).toMatch('string');
});