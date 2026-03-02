import { useState } from 'react';

const FAQ_ITEMS = [
    {
        id: 1,
        question: '各方案之間有什麼差異？',
        answer: 'Starter 適合個人或小團隊，涵蓋基本管線與報表；Professional 增加自動化工作流、進階報表與 API 存取；Enterprise 則提供專屬支援、SSO 與 SLA 保證，並可依需求客製功能。',
    },
    {
        id: 2,
        question: '可以免費試用嗎？試用期多長？',
        answer: '可以。所有方案均提供 14 天免費試用，不需綁定信用卡。試用期間可完整使用所選方案功能，試用結束後可選擇升級或暫停，不會自動扣款。',
    },
    {
        id: 3,
        question: '資料安全與隱私如何保障？',
        answer: '我們採用業界標準加密（TLS 1.3、資料庫加密），資料存放於通過認證的雲端機房，並符合 GDPR 等規範。您可隨時匯出或刪除資料，我們不將客戶資料用於廣告或第三方。',
    },
    {
        id: 4,
        question: '是否支援 API 或與其他工具整合？',
        answer: 'Professional 與 Enterprise 方案提供完整 REST API 與 webhook，可與 CRM、行銷自動化、Slack、Teams 等整合。我們也提供 Zapier 與預建整合範本，方便快速串接。',
    },
    {
        id: 5,
        question: '合約長度與付款方式？',
        answer: '可選擇月付或年付，年付享約 2 個月折扣。合約無綁約限制，月付可隨時取消；年付於到期前 30 天內可選擇續約或降級，不會自動續約扣款。',
    },
    {
        id: 6,
        question: '試用期結束後若未升級會怎樣？',
        answer: '試用結束後帳號會轉為唯讀模式，您仍可檢視既有資料與報表，但無法新增或編輯。只要在計費頁面選擇方案並完成付款，即可立即恢復完整功能，無需重新匯入資料。',
    },
];

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 id="faq-title" className="section-header__title">
                        常見問題
                    </h2>
                    <p className="section-header__desc">
                        關於方案、試用、資料安全與整合的常見問答，一次解答。
                    </p>
                </div>

                <div className="faq__list" role="list">
                    {FAQ_ITEMS.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                                role="listitem"
                            >
                                <button
                                    type="button"
                                    className="faq__question"
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${item.id}`}
                                    id={`faq-question-${item.id}`}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq__icon" aria-hidden="true">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${item.id}`}
                                    className="faq__answer"
                                    role="region"
                                    aria-labelledby={`faq-question-${item.id}`}
                                    aria-hidden={!isOpen}
                                >
                                    <div className="faq__answer-inner">{item.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
