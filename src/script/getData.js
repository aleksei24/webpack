const currentUrl = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}`;
const displayData = document.querySelector('#displayData');
const dataList = document.createElement('ul');

fetch(currentUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.articles.length / 2; i++) {
            const elemTitle = data.articles[i].title;
            const elemLink = data.articles[i].url;
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
