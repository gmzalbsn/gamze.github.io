<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // The email address to send to
    $to = "gamzealbsn@gmail.com";  // Replace with your email address
    $subject = "New Contact Form Message";

    // Email content
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Message: $message\n";
    
    // Email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo 'Your message was successfully sent!';
    } else {
        echo 'There was an issue sending your message. Please try again.';
    }
}
?>