const products = [
    {name: 'iPhone', price: 70000 },
    {name: 'Sumsung galaxy 14', price: 6000 },
    {name: 'Dell laptop', price: 5000 },
    {name: 'Lenovo Yoga laptop ', price: 5600 },
    {name: 'Asus afsus laptop', price: 3500 },
    {name: 'smart watch Sansung', price: 7000 },
    {name: 'Apple watch', price: 9000 },
    {name: 'OnePlus mobile', price: 17000 }
];

for(const product of products){
    if(product.price < 5000){
        break;
    }
    else if(product < 50000){
        continue;
    }
    console.log(product);
}