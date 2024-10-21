<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables from .env
require '../vendor/autoload.php';  // composer autoload (if you're using composer)
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// PHPMailer dosyalarını dahil edin
require 'Contact/PHPMailer/src/Exception.php';
require 'Contact/PHPMailer/src/PHPMailer.php';
require 'Contact/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri alın
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP ayarları
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';          // Gmail SMTP sunucusu
        $mail->SMTPAuth = true;                  // SMTP kimlik doğrulaması
        $mail->Username = $_ENV['GMAIL_USERNAME'];  // .env dosyasından Gmail adresi
        $mail->Password = $_ENV['GMAIL_PASSWORD'];  // .env dosyasından Gmail şifresi (uygulama şifresi)
        $mail->SMTPSecure = 'tls';               // TLS şifrelemesi
        $mail->Port = 587;                       // Gmail'in SMTP portu

        // Gönderici ve alıcı ayarları
        $mail->setFrom($_ENV['GMAIL_USERNAME'], 'Contact Form'); // Gönderen adres
        $mail->addAddress($_ENV['GMAIL_USERNAME']);              // Alıcı adresi

        // E-posta içeriği
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Message';
        $mail->Body = "
        <strong>Name:</strong> $name <br>
        <strong>Email:</strong> $email <br>
        <strong>Phone:</strong> $phone <br>
        <strong>Message:</strong> $message
        ";

        // E-postayı gönder
        $mail->send();
        echo 'Your message was successfully sent!';
    } catch (Exception $e) {
        echo "There was an issue sending your message. Error: {$mail->ErrorInfo}";
    }
}
?>
