const nav = document.querySelector('#nav');
nav.classList = 'py-4 px-2 bg-green-500 flex items-center justify-around';
console.log(nav);
console.log(nav.children);

for (let i = 0; i < nav.children.length; i++) {
    const el = nav.children[i];
    el.classList = 'text-4xl';
}

const app = document.querySelector('#app');
app.classList = 'container mx-auto my-6 px-3';
