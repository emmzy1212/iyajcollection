// add a pop that says to confirm if you are ready to purchase product, if yes its should pop up this javascript function and if no its should take us back to the home page
// function showProductInfo(productName, price) {

//     // Construct the message for the pop-up
//     var message = "Selected Product: " + productName + "\n";
//     message += "Price: $" + price.toFixed(2);
//     // message += "Pay this bank account";
//     // Display the pop-up
//     alert(message);
//     alert("pay to this bank account: 0000000 fcmb Ajoke");
//     alert("send payment receipt");
//     location.href = "https://wa.me/2349163861035?text?";
// }

function showProductInfo(productName, price) {
    // Construct the message for the pop-up
    var message = "Selected Product: " + productName + "\n";
    message += "Price: $" + price.toFixed(2) + "\n\n";
    message += "Are you sure you want to purchase this product?";

    // Display the confirmation pop-up
    var confirmPurchase = confirm(message);

    // If user confirms, proceed with purchase
    if (confirmPurchase) {
        alert("Talk to a representative & Make enquiry");
        alert("Tel: +2349163861035 | Whatsapp: +2349163861035");
        location.href = "https://wa.me/2349163861035?text?";
    } else {
        // If user cancels, redirect to home page
        location.href = "index.html"; // Adjust the URL based on your home page
    }
}
