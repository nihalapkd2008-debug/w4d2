// ===============================
// 1. FILTER - Passed Students
// ===============================

const students = [
    { name: "Nihala", mark: 95},
    { name: "Rahul", mark: 35 },
    { name: "Rukiya", mark:95 },
    { name: "Arjun", mark: 48 },
    { name: "Rana", mark: 96 },
    { name: "Sulthana", mark: 96 },
]

const studentBtn = document.getElementById("showStudents");
const studentList = document.getElementById("studentList");

studentBtn.addEventListener("click", () => {

    studentList.innerHTML = "";

    const passedStudents = students.filter(student => student.mark >= 50);

    passedStudents.forEach(student => {

        const li = document.createElement("li");

        li.textContent = `${student.name} - ${student.mark}`;

        studentList.appendChild(li);

    });

});

// ===============================
// 2. REDUCE - Shopping Cart Total
// ===============================

const cart = [
    { item: "Mouse", price: 500 },
    { item: "Keyboard", price: 1200 },
    { item: "Monitor", price: 9000 },
    { item: "USB", price: 300 }
];

const cartBtn = document.getElementById("cartBtn");
const cartTotal = document.getElementById("cartTotal");

cartBtn.addEventListener("click", () => {

    const total = cart.reduce((sum, product) => {

        return sum + product.price;

    }, 0);

    cartTotal.textContent = `Total Amount : ₹${total}`;

});

// ===============================
// 3. SORT - Products
// ===============================

const products = [

    { name: "Laptop", price: 55000 },

    { name: "Phone", price: 22000 },

    { name: "Tablet", price: 18000 },

    { name: "Smart Watch", price: 7000 }

];

const productContainer = document.getElementById("productContainer");

function displayProducts(productArray){

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        productContainer.innerHTML += `

        <div class="product">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

        </div>

        `;

    });

}

displayProducts(products);

document.getElementById("sortAsc").addEventListener("click", () => {

    products.sort((a,b)=>a.price-b.price);

    displayProducts(products);

});

document.getElementById("sortDesc").addEventListener("click", () => {

    products.sort((a,b)=>b.price-a.price);

    displayProducts(products);

});

// ===============================
// 4. METHOD CHAINING DASHBOARD
// ===============================

const employees = [

    {name:"Ali",salary:20000},

    {name:"Sara",salary:45000},

    {name:"John",salary:30000},

    {name:"Amina",salary:60000},

    {name:"David",salary:25000}

];

const dashboard=document.getElementById("dashboard");

document.getElementById("dashboardBtn").addEventListener("click",()=>{

    const highSalary=employees

    .filter(emp=>emp.salary>=30000)

    .map(emp=>emp.salary)

    .sort((a,b)=>a-b);

    const totalSalary=highSalary.reduce((sum,salary)=>sum+salary,0);

    dashboard.innerHTML=`

    <p><strong>High Salary Employees :</strong> ${highSalary.length}</p>

    <p><strong>Salaries :</strong> ${highSalary.join(", ")}</p>

    <p><strong>Total Salary :</strong> ₹${totalSalary}</p>

    `;

});