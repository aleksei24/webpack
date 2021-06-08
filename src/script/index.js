const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const testDiv = document.createElement('div');

    testDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');

    return testDiv;
}

mainWrapper.appendChild(testFunction());
