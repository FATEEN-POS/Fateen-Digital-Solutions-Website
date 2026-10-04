# سياسة الأمان | Security Policy

## العربية

نقدّر أي شخص يبلّغنا عن ثغرة أمنية في موقع فطين للحلول الرقمية (`fateen1.me`).

### النطاق
- موقع `fateen1.me` بصفحاته العربية والإنجليزية.
- صفحة تقييم التجربة وطريقة إرسالها.
- الشات بوت داخل الموقع.

خارج النطاق: أنظمة العملاء، وبرنامج Fateen POS نفسه، والخدمات الخارجية (GitHub وCloudflare وTelegram وGoogle).

### إزاي تبلّغ
1. **الأفضل:** من GitHub عبر *Security ← Report a vulnerability* في صفحة المستودع (تبليغ خاص).
2. أو رسالة خاصة على واتساب: **+20 127 392 9303** (نرد من 10 ص إلى 6 م).

اكتب: إيه المشكلة، والصفحة أو الرابط، وخطوات تكرارها، وأثرها في رأيك. **ما تنشرش** التفاصيل قبل ما نصلّحها.

### ما نطلبه منك
- لا تدخل على بيانات أي شخص ولا تعدّل عليها، ولا تعطّل الخدمة.
- لا تستخدم هندسة اجتماعية أو هجمات حجب الخدمة.
- أعطنا وقتًا معقولًا للإصلاح قبل أي إفصاح علني.

### ما نلتزم به
- نرد على بلاغك ونؤكد استلامه.
- نبلّغك لما نصلّح المشكلة.
- نذكر اسمك في الشكر لو حبيت.

### ملاحظات عن الموقع
- الموقع ثابت (HTML وCSS وJS) على GitHub Pages، ولا يحتفظ بقاعدة بيانات.
- نموذج التقييم بيرسل البيانات لـ Cloudflare Worker، والتوكن محفوظ كسر هناك وليس في الموقع.
- مفيش حسابات مستخدمين ولا كلمات مرور على الموقع.

---

## English

We appreciate anyone who reports a security issue on the Fateen Digital Solutions website (`fateen1.me`).

### Scope
- `fateen1.me`, Arabic and English pages.
- The feedback page and the way it submits data.
- The on-site chatbot.

Out of scope: client systems, the Fateen POS software itself, and third-party services (GitHub, Cloudflare, Telegram, Google).

### How to report
1. **Preferred:** GitHub *Security ← Report a vulnerability* on this repository (private report).
2. Or a private WhatsApp message to **+20 127 392 9303** (we reply 10 AM to 6 PM Cairo time).

Include what the issue is, the page or URL, steps to reproduce, and the impact you see. **Please do not publish** details before we fix it.

### What we ask
- Do not access or change other people's data, and do not disrupt the service.
- No social engineering or denial-of-service attacks.
- Give us reasonable time to fix before any public disclosure.

### What we commit to
- We acknowledge your report.
- We tell you when it is fixed.
- We credit you if you wish.

### About this site
- It is a static site (HTML, CSS, JS) on GitHub Pages and keeps no database.
- The feedback form posts to a Cloudflare Worker. The Telegram token is stored as a Worker secret, never in the site.
- There are no user accounts or passwords.

## Supported versions

Only the live version at <https://fateen1.me> is supported.
