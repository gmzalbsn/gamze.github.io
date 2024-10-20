<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';  
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];        
    $email = $_POST['email'];      
    $phone = $_POST['phone'];     
    $message = $_POST['message'];  

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';        
        $mail->SMTPAuth = true;                 
        $mail->Username = $_ENV['GMAIL_USERNAME'];  
        $mail->Password = $_ENV['GMAIL_PASSWORD'];  
        $mail->SMTPSecure = 'tls';             
        $mail->Port = 587;                    

        $mail->setFrom($_ENV['GMAIL_USERNAME'], 'Web Formu'); 
        $mail->addAddress($_ENV['GMAIL_USERNAME']);          
        $mail->isHTML(true);                                
        $mail->Subject = 'Yeni İletişim Formu Mesajı';       
        $mail->Body = "Ad: $name<br>E-posta: $email<br>Telefon: $phone<br>Mesaj: $message"; 

        $mail->send();
        echo 'Mesaj başarıyla gönderildi!';
    } catch (Exception $e) {
        echo "Mesaj gönderilemedi. Hata: {$mail->ErrorInfo}";
    }
}

?>