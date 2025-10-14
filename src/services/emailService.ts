// Email service for sending welcome emails to new users
// This service integrates with EmailJS to send emails from infodevoraglb@gmail.com

import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_devoraglb'; // You'll need to configure this in EmailJS
const EMAILJS_TEMPLATE_ID = 'template_welcome'; // You'll need to create this template
const EMAILJS_PUBLIC_KEY = 'your_emailjs_public_key'; // You'll need to get this from EmailJS

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface WelcomeEmailData {
  userEmail: string;
  userName: string;
  registrationDate: string;
}

export const sendWelcomeEmail = async (data: WelcomeEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: data.userEmail,
      to_name: data.userName,
      from_name: 'فريق منصة DevoraGLB',
      from_email: 'infodevoraglb@gmail.com',
      registration_date: data.registrationDate,
      platform_name: 'DevoraGLB',
      platform_url: 'https://devoraglb.com',
      message: `مرحباً ${data.userName}،

نرحب بك في منصة DevoraGLB - المنصة العربية الرائدة لمشاركة المشاريع البرمجية!

🎉 تم إنشاء حسابك بنجاح في ${data.registrationDate}

ماذا يمكنك فعله الآن؟
• 🚀 رفع مشاريعك البرمجية ومشاركتها مع المجتمع
• 💡 استكشاف مشاريع المطورين العرب الآخرين
• 🏆 المشاركة في المسابقات والفوز بجوائز قيمة
• 📚 الاستفادة من الكورسات المجانية القادمة قريباً
• 🤝 التواصل مع مجتمع المطورين العرب النشط

نصائح للبداية:
1. أكمل ملفك الشخصي لتعريف المجتمع بك
2. ارفع مشروعك الأول واحصل على تقييمات وتعليقات
3. تابع المطورين الآخرين وتفاعل مع مشاريعهم
4. انضم إلى المسابقات الشهرية

إذا كان لديك أي استفسار، لا تتردد في التواصل معنا على:
📧 infodevoraglb@gmail.com

مرة أخرى، أهلاً وسهلاً بك في عائلة DevoraGLB!

مع أطيب التحيات،
فريق منصة DevoraGLB
المنصة العربية لمشاركة المشاريع البرمجية`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Welcome email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
};

// Alternative method using a simple HTTP service (if EmailJS is not preferred)
export const sendWelcomeEmailAlternative = async (data: WelcomeEmailData): Promise<boolean> => {
  try {
    // This would typically call your backend API endpoint
    const response = await fetch('/api/send-welcome-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: data.userEmail,
        subject: 'مرحباً بك في منصة DevoraGLB! 🎉',
        from: 'infodevoraglb@gmail.com',
        userName: data.userName,
        registrationDate: data.registrationDate,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending welcome email via API:', error);
    return false;
  }
};

// Email template for welcome message (HTML version)
export const getWelcomeEmailTemplate = (userName: string, registrationDate: string): string => {
  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>مرحباً بك في منصة DevoraGLB</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .welcome-icon { font-size: 48px; margin-bottom: 10px; }
        .features { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .feature-item { margin: 10px 0; display: flex; align-items: center; }
        .feature-icon { margin-left: 10px; font-size: 18px; }
        .footer { background: #1e293b; color: white; padding: 20px; text-align: center; }
        .btn { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="welcome-icon">🎉</div>
          <h1>مرحباً بك في منصة DevoraGLB</h1>
          <p>المنصة العربية الرائدة لمشاركة المشاريع البرمجية</p>
        </div>
        
        <div class="content">
          <h2>أهلاً وسهلاً ${userName}!</h2>
          <p>تم إنشاء حسابك بنجاح في ${registrationDate}</p>
          
          <div class="features">
            <h3>ماذا يمكنك فعله الآن؟</h3>
            <div class="feature-item">
              <span class="feature-icon">🚀</span>
              <span>رفع مشاريعك البرمجية ومشاركتها مع المجتمع</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💡</span>
              <span>استكشاف مشاريع المطورين العرب الآخرين</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🏆</span>
              <span>المشاركة في المسابقات والفوز بجوائز قيمة</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📚</span>
              <span>الاستفادة من الكورسات المجانية القادمة قريباً</span>
            </div>
          </div>
          
          <a href="https://devoraglb.com" class="btn">ابدأ الآن</a>
        </div>
        
        <div class="footer">
          <p>إذا كان لديك أي استفسار، تواصل معنا على:</p>
          <p>📧 infodevoraglb@gmail.com</p>
          <p>© 2024 منصة DevoraGLB - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
