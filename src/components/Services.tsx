import React from 'react';
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Megaphone, 
  Workflow, 
  Zap, 
  Building, 
  Eye 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Site Yapımı',
      description: 'Modern, responsive ve SEO optimized web siteleri',
      gradient: 'from-blue-500 to-purple-600',
      delay: '0ms'
    },
    {
      icon: Palette,
      title: 'Grafik Tasarım',
      description: 'Yaratıcı ve etkileyici görsel tasarım çözümleri',
      gradient: 'from-purple-500 to-pink-600',
      delay: '100ms'
    },
    {
      icon: Smartphone,
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı dostu arayüz ve deneyim tasarımı',
      gradient: 'from-teal-500 to-blue-600',
      delay: '200ms'
    },
    {
      icon: Megaphone,
      title: 'Sosyal Medya Reklam',
      description: 'Etkili sosyal medya reklam kampanyası yönetimi',
      gradient: 'from-pink-500 to-red-600',
      delay: '300ms'
    },
    {
      icon: Workflow,
      title: 'Funnel Sistemleri',
      description: 'Satış hunisi sistemleri kurulumu ve optimizasyonu',
      gradient: 'from-green-500 to-teal-600',
      delay: '400ms'
    },
    {
      icon: Zap,
      title: 'Logo Tasarımı',
      description: 'Özgün ve profesyonel logo tasarım hizmetleri',
      gradient: 'from-orange-500 to-red-600',
      delay: '500ms'
    },
    {
      icon: Eye,
      title: 'Açık Hava Reklam Tasarımları',
      description: 'Outdoor reklam tasarımları ve görsel çözümler',
      gradient: 'from-indigo-500 to-purple-600',
      delay: '600ms'
    },
    {
      icon: Building,
      title: 'Cephe Modelleme',
      description: 'Fabrika ve bina cephe 3D modelleme hizmetleri',
      gradient: 'from-gray-500 to-blue-600',
      delay: '700ms'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetleri 
            tek çatı altında sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card rounded-xl p-6 card-3d group"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;