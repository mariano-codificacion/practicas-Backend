class ProductManager
{
    constructor()
    {
    this.products = [];
    }
}

getProducts = () => {
    return this.products;
    }

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail, 
        code, 
        stock
    }
    this.products.forEach (product => {
    if (product.code === code){
    console.log("el code ingresado ya existe");
    }})
    if (this.products.length===0){
        product.id=1;
    }else {
        product.id = this.products[this.products.length-1].id +1;
    }
    this.products.push(product);
}

getProductById = (id) => {
    const buscado = products.find(item => item.id === id); 
    if (buscado===undefined){
    console.log("not found");
    }
}