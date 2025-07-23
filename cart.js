let CartData = JSON.parse(localStorage.getItem("CartData"));


console.log(CartData)

function showData(data) {
    let productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    if (data.length === 0) {
        productsContainer.innerHTML = "<h2>Amazon Cart is empty</h2>";
        
        return;
    }
    data.forEach((ele, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";
        
        let heading = document.createElement("h2");
        heading.innerText = ele.brand;

        let img = document.createElement("img");
        img.src = ele.image;
        img.style.width = "200px";
        img.style.height = "200px";

        let p1 = document.createElement("p");
        p1.innerText = `price :${ele.price} discount:${ele.discount}`;

        let p2 = document.createElement("p");
        p2.innerText = ele.title;

        let p3 = document.createElement("p");
        p3.innerText = `model :${ele.model} color:${ele.color}`;
 
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            deleteFun(ele, index);
        });

         productBox.append(heading, img, p1, p2, p3, button);
        productsContainer.append(productBox);

    });
}

showData(CartData)
function deleteFun(ele, index) {
    deletedCartData=CartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("CartData", JSON.stringify(CartData));
    showData(CartData);
}