import React from 'react';
import { ChevronRight, Sparkles, Zap, Globe, ArrowRight, CheckCircle, Code, Palette, Rocket, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Newsletter from '../components/UI/Newsletter';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Globe,
      number: '200+',
      label: 'موقع مكتمل'
    },
    {
      icon: Sparkles,
      number: '100%',
      label: 'رضا العملاء'
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'دعم فني'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-300/10 rounded-full animate-bounce" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/8 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
          
          {/* Small floating dots */}
          <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-200/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-green-200/25 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-16 right-1/4 w-8 h-8 bg-white/10 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-6 h-6 bg-blue-200/15 transform rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-right space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                نبني مواقع ذكية بتقنية الذكاء الاصطناعي
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                شركة متخصصة في إنشاء وبيع المواقع الإلكترونية المزودة بالذكاء الاصطناعي
              </motion.p>
              <motion.p 
                className="text-lg text-blue-50"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                نحول أفكارك إلى مواقع احترافية مدعومة بأحدث تقنيات الذكاء الاصطناعي
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>اطلب موقعك الآن</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>تعرف علينا</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.img
                  src="/images/isav-hero.svg"
                  alt="DevoraGLB Platform"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                {/* Enhanced Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-400/40 rounded-full"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="bg-white dark:bg-gray-700 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 mx-auto mb-3 lg:mb-4" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                background: 'linear-gradient(45deg, #3B82F6, #10B981, #8B5CF6, #3B82F6)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              خدماتنا المتميزة
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              نقدم حلول ويب متكاملة مدعومة بالذكاء الاصطناعي لتلبية احتياجات عملك
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Service 1: AI-Powered Websites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                مواقع مدعومة بالذكاء الاصطناعي
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                نبني مواقع ذكية تتفاعل مع المستخدمين باستخدام أحدث تقنيات الذكاء الاصطناعي والتعلم الآلي
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>روبوتات محادثة ذكية</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>توصيات مخصصة</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>تحليل بيانات متقدم</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2: Custom Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                تطوير مواقع مخصصة
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                نصمم ونطور مواقع إلكترونية احترافية مخصصة تماماً لتلبية احتياجات عملك الفريدة
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>تصميم متجاوب</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>أداء عالي السرعة</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>تحسين محركات البحث</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3: UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                تصميم واجهات مستخدم
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                نصمم واجهات مستخدم جذابة وسهلة الاستخدام توفر تجربة مستخدم استثنائية
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>تصميم عصري وجذاب</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>تجربة مستخدم محسّنة</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>هوية بصرية متكاملة</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <span>تصفح مشاريعنا</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <span>اطلب استشارة مجانية</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                لماذا تختارنا؟
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                نحن شركة رائدة في مجال تطوير المواقع الإلكترونية المدعومة بالذكاء الاصطناعي ✨<br/>
                نجمع بين الخبرة التقنية والإبداع لتقديم حلول ويب متكاملة تساعد عملك على النمو والتطور. نستخدم أحدث التقنيات والأدوات لضمان حصولك على موقع احترافي عالي الجودة يلبي احتياجاتك ويتجاوز توقعاتك.
              </p>

              {/* Visual Effect - Features */}
              <div className="relative mb-8 overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Rocket className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">سرعة عالية</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-lg shadow-lg"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Brain className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">ذكاء اصطناعي</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg shadow-lg"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Palette className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">تصميم احترافي</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4 rounded-lg shadow-lg"
                    animate={{
                      y: [0, 12, 0],
                      rotate: [0, -1, 0]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">أداء متميز</p>
                  </motion.div>
                </div>
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20 blur-3xl -z-10 animate-pulse"></div>
              </div>

              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                <span>اعرف المزيد</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl text-green-100 mb-8">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في بناء موقعك الإلكتروني
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default HomePage;