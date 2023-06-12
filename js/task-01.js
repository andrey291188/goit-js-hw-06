

const catEl = document.querySelector('#categories');
const catChidEl = [...catEl.children];

console.log("Number of categories:", catChidEl.length);

catChidEl.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:",item.lastElementChild.children.length);
});