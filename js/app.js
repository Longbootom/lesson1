const productApi = "https://60ae0d5e80a61f00173324bc.mockapi.io/products"
function app() {
    getProducts(renderProducts);
}
app();
function getProducts(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}
function renderProducts(products) {
    let defaultImg = "https://lh3.googleusercontent.com/C9h0wTjyE87-02b7RdbwpZvcLJwRDXoZBCtKXtwhB3TcAbffp7RQSHbihoEzf06PpgVp5peewwR-829KY7oMgoBuqxuKj7N-hw=w500-rw"
    let listProducts = document.querySelector('#root')
    let htmls = products.map(function(product) {
        return  `
        <div class="products">
        <img src="${product.image || defaultImg}"
             alt="${product.name}">
        <h3><b>Name</b>: ${product.name}</h3>
        <p><b>Error</b>: ${product.errorDescription}</p>
        <p><b>SKU</b>: ${product.sku}</p>
        <p><b>ID</b>: ${product.id}</p>
        <p><b>Color</b>: ${product.color || 0}</p>
        </div>
        </div>
        `
    })
    listProducts.innerHTML = htmls.join('')
}
