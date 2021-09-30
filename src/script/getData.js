const currentUrl = `https://jsonplaceholder.typicode.com/users`;
const displayData = document.querySelector('#displayData');
const nameData = document.createElement('p');
const phoneData = document.createElement('p');
const companyData = document.createElement('p');
const accomData = document.createElement('p');
const infoData = [nameData, phoneData, companyData, accomData];

infoData.map((el) => {
    el.setAttribute('class', 'text-xl');
});

fetch(currentUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data),
            (nameData.textContent = `Name: ${data[4].name}`),
            (phoneData.textContent = `Phone: ${data[4].phone}`),
            (accomData.textContent = `Living in: ${data[4].address.city} City on ${data[4].address.street} Street`),
            (companyData.textContent = `Working for: ${data[4].company.name}`);
        displayData.append(nameData);
        displayData.append(phoneData);
        displayData.append(companyData);
        displayData.append(accomData);
    });
