const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/decrypt', (req, res) => {
    const text = req.body.text;
    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    // Mocking ciphey since it's not available in the environment
    // In a real scenario, this would call the ciphey binary
    console.log(`Received text to decrypt: ${text}`);
    
    let decrypted = text; // Default to input
    
    // Advanced mock logic for common encodings
    const trimmedText = text.trim();
    
    // 1. Base64 Detection & Decoding
    if (/^[A-Za-z0-9+/]*={0,2}$/.test(trimmedText) && trimmedText.length % 4 === 0) {
        try {
            const decoded = Buffer.from(trimmedText, 'base64').toString('utf8');
            // Check if it's printable text
            if (/^[\x20-\x7E\s]*$/.test(decoded)) {
                decrypted = decoded;
            }
        } catch (e) {}
    } 
    
    // 2. Hexadecimal Detection & Decoding
    if (decrypted === text && /^[0-9a-fA-F]+$/.test(trimmedText) && trimmedText.length % 2 === 0) {
        try {
            const decoded = Buffer.from(trimmedText, 'hex').toString('utf8');
            if (/^[\x20-\x7E\s]*$/.test(decoded)) {
                decrypted = decoded;
            }
        } catch (e) {}
    }

    // 3. ROT13 (Simple implementation)
    if (decrypted === text && trimmedText.toLowerCase().includes('rot13:')) {
        const actualText = trimmedText.split(':')[1];
        decrypted = actualText.replace(/[a-zA-Z]/g, (c) => 
            String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
        );
    }

    // 4. Fallback for demonstration
    if (decrypted === text) {
        decrypted = `Decrypted: ${text} (Mocked)`;
    }

    res.json({
        input: text,
        decrypted: decrypted
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
