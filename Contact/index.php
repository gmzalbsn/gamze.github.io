<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İletişim Formu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- İletişim Bölümü -->
    <section id="contact" class="contact-section">
        <div class="contact-container">
            <div class="contact-image">
                <img src="Assets/contact-image.png" alt="İletişim">
            </div>
            <div class="contact-form">
                <form action="send-email.php" method="POST">
                    <div class="form-group">
                        <label for="name"><i class="fas fa-user"></i> Adınız</label>
                        <input type="text" id="name" name="name" placeholder="Adınız" required>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> E-posta</label>
                        <input type="email" id="email" name="email" placeholder="E-posta adresiniz" required>
                    </div>
                    <div class="form-group">
                        <label for="phone"><i class="fas fa-phone"></i> Telefon</label>
                        <input type="text" id="phone" name="phone" placeholder="Telefon numaranız" required>
                    </div>
                    <div class="form-group">
                        <label for="message"><i class="fas fa-comment"></i> Mesajınız</label>
                        <textarea id="message" name="message" placeholder="Mesajınızı buraya yazın..." required></textarea>
                    </div>
                    <button type="submit" class="btn submit-btn">Gönder <i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </section>
</body>
</html>