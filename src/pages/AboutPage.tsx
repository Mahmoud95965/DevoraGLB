import React from 'react';
import { Target, Eye, Code2, Brain, Zap, Sparkles, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {

  const values = [
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي',
      description: 'نستخدم أحدث تقنيات الذكاء الاصطناعي لبناء مواقع ذكية ومتطورة'
    },
    {
      icon: Code2,
      title: 'التطوير الاحترافي',
      description: 'نبني مواقع إلكترونية احترافية بأعلى معايير الجودة'
    },
    {
      icon: Zap,
      title: 'الأداء العالي',
      description: 'نضمن سرعة وكفاءة عالية في جميع مواقعنا'
    },
    {
      icon: Sparkles,
      title: 'الإبداع والتميز',
      description: 'نقدم حلول مبتكرة تتجاوز توقعات عملائنا'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'محمود محمد موسي',
      position: 'مؤسس ومطور رئيسي',
      bio: 'مطور full-stack متخصص في تطوير المنصات التقنية الحديثة، مع خبرة واسعة في React وNode.js وتطوير تطبيقات الويب المتقدمة',
      image: '/images/team/mahmoud.jpg'
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
            <Brain className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            من نحن؟
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed"
          >
            نحن DevoraGLB، شركة رائدة في مجال تطوير المواقع الإلكترونية المزودة بالذكاء الاصطناعي. نحول أفكارك إلى مواقع احترافية مدعومة بأحدث التقنيات لتحقيق نجاح عملك.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-200 dark:border-emerald-800"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                رسالتنا
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                رسالتنا هي تمكين الشركات والأفراد من التواجد الرقمي الفعال من خلال مواقع إلكترونية مدعومة بالذكاء الاصطناعي. نسعى لتقديم حلول ويب مبتكرة تجمع بين التصميم العصري والتقنيات المتقدمة لتحقيق أهداف عملائنا وتجاوز توقعاتهم.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                رؤيتنا
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                نطمح لأن نكون الشركة الرائدة في العالم العربي في تطوير المواقع الإلكترونية المدعومة بالذكاء الاصطناعي. نسعى لتقديم حلول ويب مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي، وأن نكون الخيار الأول لكل من يبحث عن موقع إلكتروني احترافي ومتطور.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل الحلول لعملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              فريق العمل
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              تعرف على الفريق المتخصص الذي يقود رؤية المنصة ويعمل على تطويرها
            </p>
          </motion.div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover animate-fadeIn max-w-md w-full"
              >
                <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-emerald-400/20 animate-pulse-custom"></div>
                  <div className="w-32 h-32 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center glass relative z-10">
                    <User className="w-16 h-16 text-white animate-bounce-custom" />
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse-custom"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse-custom" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="p-8 text-center">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-2 animate-slideIn"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-slideIn"
                  >
                    {member.position}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fadeIn"
                  >
                    {member.bio}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-6 flex justify-center space-x-3 space-x-reverse"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center btn-hover-lift cursor-pointer">
                      <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center btn-hover-lift cursor-pointer">
                      <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-emerald-100 text-lg">
              أرقام تعكس نمو وتطور مجتمع المطورين على منصتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'مشروع برمجي' },
              { number: '5K+', label: 'مطور عربي' },
              { number: '50+', label: 'لغة برمجة' },
              { number: '24/7', label: 'دعم مستمر' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;