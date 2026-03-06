// inventory array
let inventory = [];

// findProductIndex function
function findProductIndex(productName) {
    const lowerName = productName.toLowerCase();

    return inventory.findIndex(function (product) {
        return product.name === lowerName;
    });
}

// addProduct function
function addProduct(product) {
    const lowerName = product.name.toLowerCase();
    const index = findProductIndex(lowerName);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(lowerName + " quantity updated");
    } else {
        inventory.push({
            name: lowerName,
            quantity: product.quantity,
        });
        console.log(lowerName + " added to inventory");
    }
}



// removeProduct function
function removeProduct(productName, quantity) {
    const lowerName = productName.toLowerCase();
    const index = findProductIndex(lowerName);
    //Product not present
    if (index === -1) {
        console.log(lowerName + " not found");
        return;
    }

    const currentQuantity = inventory[index].quantity;
    // Not enough quantity
    if (currentQuantity < quantity) {
        console.log(
            "Not enough " +
                lowerName +
                " available, remaining pieces: " +
                currentQuantity,
        );
        return;
    }
    //Subtract quantity
    inventory[index].quantity -= quantity;

    console.log(
        "Remaining " + lowerName + " pieces: " + inventory[index].quantity,
    );
    //Remove if zero
    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    }
} 
