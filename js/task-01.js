const categoriesItem = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesItem.children.length}`);

const categoriesItemEl = document.querySelectorAll('.item')

categoriesItemEl.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
    }
)





