// Function to open WhatsApp with a predefined message
function openWhatsApp() {
    // Get the user's phone number (replace with your own)
    var phoneNumber = "+918055125512";

    // Get the message you want to send (replace with your own)
    var message = "Hi, Safar car rental, Need some help to book a Car.";

    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp link with the phone number and message
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Set the href attribute of the WhatsApp link
    document.getElementById("whatsapp-link").href = whatsappLink;
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", openWhatsApp);