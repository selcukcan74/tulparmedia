import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'Mutlu Müşteri', icon: Users },
    { number: '300+', label: 'Tamamlanan Proje', icon: Award },
    { number: '10+', label: 'Yıl Deneyim', icon: Target },
    { number: '24/7', label: 'Destek', icon: Lightbulb }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Hakkımızda
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Tulpar Media olarak, dijital dünyada markaların hikayelerini anlatmak ve 
                hedef kitlelerine ulaşmalarını sağlamak için yaratıcı çözümler üretiyoruz.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Uzman ekibimiz ile web tasarım, grafik tasarım, UI/UX, sosyal medya yönetimi 
                ve daha birçok alanda profesyonel hizmet sunarak müşterilerimizin dijital 
                varlıklarını güçlendiriyoruz.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Her projede yaratıcılık, yenilik ve mükemmellik ilkelerimizi benimseyerek, 
                müşterilerimizin beklentilerini aşmayı hedefliyoruz.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;