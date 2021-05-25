// function to count clicks
// the file linked in the head oh html (it doesn't manipulate any DOM element)

function createAnalytic() {
    let counter = 0;
    let isDestroyed = false;

    const listener = () => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },

        getClick() {
            if (isDestroyed) {
                return `Analytic is destroyed. Total amount of clicks = ${counter} `;
            }
            return counter;
        },
    };
}

window.analytic = createAnalytic();
