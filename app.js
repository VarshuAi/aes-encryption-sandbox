
            const text = document.getElementById('aes-text');
            const key = document.getElementById('aes-key');
            const res = document.getElementById('aes-result');
            
            // Mock AES base64/rot cipher representation
            window.aesEncrypt = function() {
                if(!text.value) return;
                const encoded = btoa(text.value + "::" + key.value);
                res.value = "[AES-256-CBC-ENCRYPTED]\n" + encoded;
            }
            window.aesDecrypt = function() {
                if(!text.value) return;
                try {
                    const raw = text.value.replace("[AES-256-CBC-ENCRYPTED]\n", "");
                    const decoded = atob(raw).split("::");
                    if (decoded[1] === key.value) {
                        res.value = decoded[0];
                    } else {
                        res.value = "ERROR: Invalid Secret Key!";
                    }
                } catch(e) {
                    res.value = "ERROR: Input is not a valid encrypted payload.";
                }
            }
        