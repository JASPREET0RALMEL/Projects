const form = document.getElementById("form");

function login() {
    window.location.href="login.html";
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;
    const role = document.getElementById("role").value;
    

    const data = {
        name, email, password, phoneNumber, age, role
    };

    console.log(data);

    const response = await fetch("http://localhost:8080/api/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    // console.log(response);
    const res = await response.json();
    console.log(res);
    Toastify({
        text: `${res.msg}`,
        className: "info",
        duration: 5000,
        gravity: "bottom",
        position: "left",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
})