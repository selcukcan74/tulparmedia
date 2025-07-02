import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61565388451846', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/selcukcan95', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/selcukcan95/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/selcukcan95/', label: 'LinkedIn' }
  ];

  const footerLinks = [
    {
      title: 'Hizmetler',
      links: [
        'Web Tasarım',
        'Grafik Tasarım',
        'UI/UX Tasarım',
        'Sosyal Medya'
      ]
    },
    {
      title: 'Şirket',
      links: [
        'Hakkımızda',
        'Ekibimiz',
        'Kariyer',
        'İletişim'
      ]
    },
    {
      title: 'Destek',
      links: [
        'Yardım Merkezi',
        'Sıkça Sorulan Sorular',
        'Gizlilik Politikası',
        'Kullanım Şartları'
      ]
    }
  ];

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/beyaz logo.png" 
                alt="Tulpar Media Logo" 
                className="h-10 w-auto object-contain filter brightness-110 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dijital dünyada markanızın hikayesini yaratıyoruz. 
              Yaratıcı çözümlerle başarıya ulaşın.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tulpar Media. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="h-4 w-4" />
              <span>destek@tulparmedia.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;