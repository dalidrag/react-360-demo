let person = [];
let position = [];
let office = [];
let age = [];
let salary = [];

let yearsInCompany = [];
let email = [];
let phone1 = [];
let socialNumber = [];

let yearsInOperation = [];
let numberOfEmployees = [];
let address = [];
let phone2 = [];

person[0] = 'Name';
position[0] = 'Position';
office[0] = 'Office';
age[0] = 'Age';
salary[0] = 'Salary';

yearsInCompany[0] = 'Years in Company';
email[0] = 'Email';
phone1[0] = 'Phone';
socialNumber[0] = 'Social Number';

yearsInOperation[0] = 'Years in Operation';
numberOfEmployees[0] = 'Number of Employees';
address[0] = 'Address';
phone2[0] = 'Phone';

for (let i = 1; i < 10; ++i) {
    person[i] = chance.name();
    position[i] = chance.profession({rank: true});
    office[i] = chance.city();
    age[i] = chance.age();
    salary[i] = chance.euro({max: 7000});

    yearsInCompany[i] = chance.age();
    email[i] = chance.email();
    phone1[i] = chance.phone();
    socialNumber[i] = chance.ssn();

    yearsInOperation[i] = chance.age();
    numberOfEmployees[i] = chance.age();
    address[i] = chance.address();
    phone2[i] = chance.phone();
}

let rows1 = [], rows2 = [], rows3 = [];

for (i = 0; i < 10; ++i) {
    rows1.push([person[i], position[i], office[i], age[i], salary[i]]);
    rows2.push([person[i], yearsInCompany[i], email[i], phone1[i], socialNumber[i]]);
    rows3.push([office[i], yearsInOperation[i], numberOfEmployees[i], address[i], phone2[i]]);
}

let data = {
    basic: { rows: rows1},
    persons: { rows: rows2},
    offices: { rows: rows3}
};

console.log(data);

export default data;