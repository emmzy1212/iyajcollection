// let the html file work with the javascript function making sure when any img is clicked its should bring an alert the price of this item 


// document.addEventListener("DOMContentLoaded", function() {
//     // Get the image element
//     var img = document.getElementById('game');

//     // Add click event listener to the image
//     img.addEventListener('click', function() {
//         // Check if the image ID is 'game'
//         if (img.id === 'game') {
//             // Alert the item price
//             alert("This item's price is $10,000.");
//             // Alert to pay to the bank account
//             alert("Please pay to the bank account.");
//         }
//     });
// });


// let the html file work with the javascript function making sure when any img is clicked in this section  its should bring an alert("This item's price is $10,000."); amd another Alert to pay to the bank account alert("Please pay to the bank account.");



// document.addEventListener("DOMContentLoaded", function() {
//     // Get all images in the section
//     var images = document.querySelectorAll('.media__img img');

//     // Add click event listener to each image
//     images.forEach(function(img) {
//         img.addEventListener('click', function() {
//             // Alert the item price
//             alert("This item's price is $10,000.");
//             // Alert to pay to the bank account
//             alert("Please pay to the bank account.");
//         });
//     });
// });

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
        alert("Pay to this bank account: 0000000 FCMB Ajoke");
        alert("Send payment receipt");
        location.href = "https://wa.me/2349163861035?text?";
    } else {
        // If user cancels, redirect to home page
        location.href = "index.html"; // Adjust the URL based on your home page
    }
}
