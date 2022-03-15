

const sales = [ 
    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    ];

 

function showSales() {
    // document.getElementById('consoleSales').innerHTML=sales;
    Object.values(sales).forEach(val => {
        // document.getElementById('consoleSales').innerHTML += val.item + '<br />';
        // document.getElementById('consoleSales').innerHTML += val.stock + '<br />';

        item = val.item;
        stock=val.stock;
        original=val.original;
        discount=val.discount || 0;
    
        calcValue = (stock*original) * (1-discount);
        document.getElementById('consoleSales').innerHTML += stock + ' of ' + item + ' : ($' + original + " ea %" + (discount*100).toFixed(0) + " discount) ";
        document.getElementById('consoleSales').innerHTML += '$' + calcValue.toFixed(2) + '<br />';

        
    })
}
