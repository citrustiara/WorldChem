// Prosty system cookies
        function checkCookies() {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setTimeout(() => {
                    document.getElementById('cookieBanner').classList.add('show');
                }, 500);
            }
        }

        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'accepted');
            document.getElementById('cookieBanner').classList.remove('show');
        }

        function rejectCookies() {
            localStorage.setItem('cookieConsent', 'rejected');
            document.getElementById('cookieBanner').classList.remove('show');
        }

        window.addEventListener('load', checkCookies);