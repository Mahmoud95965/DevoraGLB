import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ContactForm } from '../types';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'infodevoraglb@gmail.com',
      href: 'mailto:infodevoraglb@gmail.com'
    },
    {
      icon: Phone,
      title: 'واتساب',
      value: '+201026795965',
      href: 'https://wa.me/201026795965'
    },
    {
      icon: MessageCircle,
      title: 'الدعم الفني',
      value: 'متاح 24/7',
      href: 'https://wa.me/201026795965'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'مصر',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <MessageCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            تواصل معنا
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
          >
            نحن هنا لمساعدتك في تحويل أفكارك إلى مواقع إلكترونية احترافية. تواصل معنا للحصول على استشارة مجانية أو لمناقشة مشروعك القادم.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                أرسل لنا رسالة
              </h2>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    تم إرسال الرسالة بنجاح!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all duration-200"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  معلومات التواصل
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  نحن متاحون للإجابة على جميع استفساراتك ومساعدتك في بناء موقعك الإلكتروني. فريقنا جاهز لتقديم الاستشارات والدعم الفني على مدار الساعة.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl p-4">
                        <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Working Hours */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-3xl p-8 border border-emerald-200 dark:border-emerald-800"
              >
                <div className="text-center">
                  <Clock className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    ساعات العمل
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    نحن متاحون لخدمتك على مدار الساعة
                  </p>
                  <div className="space-y-3 text-right">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">السبت - الخميس</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">9:00 ص - 10:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">الجمعة</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">2:00 م - 10:00 م</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-emerald-200 dark:border-emerald-700">
                      <span className="text-gray-600 dark:text-gray-300">الدعم الفني</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">24/7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'ما هي الخدمات التي تقدمونها؟',
                answer: 'نقدم خدمات تطوير المواقع الإلكترونية المدعومة بالذكاء الاصطناعي، تصميم واجهات المستخدم UI/UX، وتطوير تطبيقات الويب المخصصة بأحدث التقنيات.'
              },
              {
                question: 'كم تستغرق مدة تطوير الموقع؟',
                answer: 'تختلف المدة حسب حجم وتعقيد المشروع. عادةً ما تستغرق المواقع البسيطة من 2-4 أسابيع، بينما المشاريع المعقدة قد تستغرق من 6-12 أسبوع.'
              },
              {
                question: 'هل تقدمون خدمات الصيانة والدعم؟',
                answer: 'نعم، نقدم خدمات صيانة ودعم فني مستمر لجميع مشاريعنا. فريقنا متاح على مدار الساعة لضمان عمل موقعك بكفاءة عالية.'
              },
              {
                question: 'كيف يمكنني الحصول على عرض سعر؟',
                answer: 'يمكنك التواصل معنا عبر نموذج الاتصال أو الواتساب، وسنقوم بدراسة متطلباتك وتقديم عرض سعر مفصل خلال 24 ساعة.'
              },
              {
                question: 'هل تدعمون التكامل مع الذكاء الاصطناعي؟',
                answer: 'نعم، نحن متخصصون في دمج تقنيات الذكاء الاصطناعي في المواقع، مثل روبوتات المحادثة الذكية، التوصيات المخصصة، وتحليل البيانات المتقدم.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
