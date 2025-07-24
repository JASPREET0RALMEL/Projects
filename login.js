const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email, password
    };

    // console.log(data);
    // localStorage.setItem("token", res.token)

    const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body:JSON.stringify(data)
    });

    // console.log(response);
    const res = await response.json();
    console.log(res);

    localStorage.setItem("token", res.token)
})