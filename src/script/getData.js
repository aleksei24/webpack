const currentUrl = `https://inshorts.deta.dev/news?category=world`;
const displayData = document.querySelector('#displayData');
const dataList = document.createElement('ul');

fetch(currentUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length / 2; i++) {
      const elemTitle = data[i].author;
      const elemLink = data[i].content;
      dataList.innerHTML += `
        <li class='my-2'>
          <a href='${elemLink}' target='blank'>
            <span>${elemTitle}</span>    
          </a> 
        </li>
      `;
      dataList.classList = 'text-2xl text-gray-500';
    }
    displayData.append(dataList);
  });
