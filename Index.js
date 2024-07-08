<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <link rel="manifest" href="manifest.json">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        input {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
        }
        button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>
        <input type="text" id="text-input" placeholder="Enter text or URL">
        <button onclick="generateQRCode()">Generate QR Code</button>
        <div id="qrcode"></div>
    </div>

    <script>
        function generateQRCode() {
            const text = document.getElementById('text-input').value;
            const qrcodeContainer = document.getElementById('qrcode');
            qrcodeContainer.innerHTML = '';
            
            if (text) {
                new QRCode(qrcodeContainer, {
                    text: text,
                    width: 256,
                    height: 256,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            }
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then((reg) => console.log('Service worker registered.', reg))
                .catch((err) => console.log('Service worker registration failed:', err));
        }
    </script>
</body>
</html>
