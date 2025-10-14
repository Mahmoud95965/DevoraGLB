import React from 'react';
import { 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'مشاريعنا', href: '/portfolio' },
    { label: 'من نحن', href: '/about' },
    { label: 'تواصل معنا', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devoraglb', label: 'GitHub' },
    { icon: Facebook, href: 'https://facebook.com/devoraglb', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/devoraglb', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/devoraglb', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/devoraglb', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Platform Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-blue-400">DevoraGLB</span>
            </Link>
            <p className="text-gray-400 text-sm">
              شركة متخصصة في تطوير المواقع الإلكترونية المزودة بالذكاء الاصطناعي
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">روابط سريعة</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.slice(0, 6).map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">تواصل معنا</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm mb-2">
                <Mail className="w-3 h-3 text-blue-400" />
                <a href="mailto:infodevoraglb@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  infodevoraglb@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/201026795965" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                  +201026795965
                </a>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse pt-2">
                {socialLinks.slice(0, 4).map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                      title={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2024 منصة DevoraGLB. جميع الحقوق محفوظة.</p>
          <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2 sm:mt-0">
            <span>تطوير</span>
            <a 
              href="https://www.facebook.com/Mahmoud5310" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              محمود موسى
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;