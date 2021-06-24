const mainWrapper = document.querySelector('.wrapper');

async function getComponent() {
    const innerDiv = document.createElement('div');
    const { default: _ } = await import('lodash');

    innerDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    return innerDiv;
}

getComponent().then((innerDiv) => {
    document.body.appendChild(innerDiv);
});
