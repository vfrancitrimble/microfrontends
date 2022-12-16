import { faker } from '@faker-js/faker';

let drivers = '';

for (let i = 0; i < 5; i++) {
    const name = faker.name.fullName();
    drivers += `<li>${name}</li>`;
}

document.querySelector('#list-drivers').innerHTML = `<ul>${drivers}</ul>`

