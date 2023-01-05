const cartArray = [];

function display(cartProducts) {
    const tableBody = document.getElementById("cart-products");
    tableBody.innerHTML = "";
    for (const cartProduct of cartProducts) {
        console.log(cartProduct.productName, cartProduct.productPrice);
        const name = cartProduct.productName;
        const price = cartProduct.productPrice;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        `;
        tableBody.appendChild(tr)
    }


}


function addToCart(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseInt(productPrice)
    }
    cartArray.push(productObj)
    document.getElementById("total-added-products").innerText = cartArray.length;
    display(cartArray);

}