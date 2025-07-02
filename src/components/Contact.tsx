import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form gönderildi:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      content: 'destek@tulparmedia.com',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (531) 777 72 30',
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Bartın, Türkiye',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: '09:00 - 18:00 (Pazartesi-Cuma)',
      gradient: 'from-green-500 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            İletişim
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Projenizi hayata geçirmek için bugün bizimle iletişime geçin. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Bizimle İletişime Geçin
            </h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="E-posta adresiniz"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Hizmet Seçin
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Hizmet seçin</option>
                  <option value="web">Web Site Yapımı</option>
                  <option value="graphic">Grafik Tasarım</option>
                  <option value="uiux">UI/UX Tasarım</option>
                  <option value="social">Sosyal Medya Yönetimi</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Mesaj Gönder</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;