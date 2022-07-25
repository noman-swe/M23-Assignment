const products = [
    { name: 'iPhone', price: 70000 },
    { name: 'Sumsung galaxy 14', price: 60000 },
    { name: 'Dell laptop', price: 50000 },
    { name: 'Lenovo Yoga laptop ', price: 56000 },
    { name: 'Asus afsus laptop', price: 35000 },
    { name: 'smart watch Sansung', price: 7000 },
    { name: 'Apple watch', price: 20000 },
    { name: 'OnePlus mobile', price: 17000 }
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
            //console.log(product.name);
        }       
    }
    return result;
}

const matched = searchProducts(products, 'watch');
console.log(matched);