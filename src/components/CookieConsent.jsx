import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';
const STORAGE_VALUE = 'accepted';

function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== STORAGE_VALUE) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, STORAGE_VALUE);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent" role="dialog" aria-label="Cookie 同意" aria-live="polite">
            <div className="cookie-consent__inner container">
                <p className="cookie-consent__text">
                    我們使用 Cookie 以改善您的體驗。繼續使用即表示您同意我們使用 Cookie。
                </p>
                <div className="cookie-consent__actions">
                    <a href="/privacy" className="cookie-consent__link">
                        了解更多
                    </a>
                    <button
                        type="button"
                        className="btn btn--primary btn--sm cookie-consent__accept"
                        onClick={handleAccept}
                    >
                        接受
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
