class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        console.log (this.products);
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Por favor complete todos los campos");
        }
        this.products.forEach(product => {

            if (product.code === code) {
                console.error("el code ingresado ya existe");
            }
        })

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
    }
    getProductById = (id) => {
        const buscado = this.products.find(item => item.id === id);
        if (buscado === undefined) {
            console.log("not found");
        }
        console.log(buscado, typeof buscado);
        return buscado
    }
}
const productos = new ProductManager;
productos.getProducts();
productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productos.getProducts();
productos.addProduct("producto prueba", "Este es un producto prueba", 300, "Sin imagen", "abc123", 25);
productos.getProductById(1)
//productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc124", 25);
productos.getProductById(2)