const courses = [
    {
        name : "React JS Course",
        price : "3"
    },
    {
        name: "Python Course",
        price: "5"
    },
    {
        name: "Node Js Course",
        price: "9"
    },
    {
        name: "TypeScript Course",
        price: "8"
    },
]

function coursesList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode(" $" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}


// Descending Order
const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    window.addEventListener("load", coursesList());

})

// Ascending Order

const buttonTwo = document.querySelector(".sorttwo-btn");

buttonTwo.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    window.addEventListener("load", coursesList());

})
