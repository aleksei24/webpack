const nav = document.querySelector('#nav');
nav.classList = 'py-4 px-2 bg-green-500 flex items-center justify-around';

// for (let i = 0; i < nav.children.length; i++) {
//     const el = nav.children[i];
//     el.classList = 'text-4xl';
// }

const navLinks = nav.children;
// console.log(navLinks);
[...navLinks].forEach((el) => {
    el.classList = 'text-4xl font-bold';
});

const app = document.querySelector('#app');
app.classList = 'container mx-auto my-6 px-3';

const showPage = document.querySelector('#show-page');
showPage.classList = 'px-2 py-4';
