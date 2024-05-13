class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    products: Product[];

    constructor() {
        this.products = [];
    }

    
    createProduct(name: string, price: number): Product {
        const newProduct = new Product(this.products.length + 1, name, price);
        this.products.push(newProduct);
        return newProduct;
    }

    
    getProduct(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

   
    updateProduct(id: number, newName: string, newPrice: number): boolean {
        const product = this.getProduct(id);
        if (product) {
            product.name = newName;
            product.price = newPrice;
            return true;
        }
        return false;
    }

    
    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

    
    listProducts(): Product[] {
        return this.products;
    }
}



