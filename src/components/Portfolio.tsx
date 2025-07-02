import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      category: 'web',
      image: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg',
      description: 'Modern e-ticaret web sitesi tasarımı'
    },
    {
      id: 2,
      title: 'Kurumsal Kimlik',
      category: 'brand',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kapsamlı kurumsal kimlik tasarımı'
    },
    {
      id: 3,
      title: 'Mobil Uygulama UI',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kullanıcı dostu mobil uygulama arayüzü'
    },
    {
      id: 4,
      title: 'Sosyal Medya Kampanyası',
      category: 'social',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Etkili sosyal medya reklam kampanyası'
    },
    {
      id: 5,
      title: 'Kurumsal Web Sitesi',
      category: 'web',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Profesyonel kurumsal web sitesi'
    },
    {
      id: 6,
      title: 'Logo Tasarımı',
      category: 'brand',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Özgün ve modern logo tasarımı'
    }
  ];

  const filters = [
    { key: 'all', label: 'Tümü' },
    { key: 'web', label: 'Web Tasarım' },
    { key: 'brand', label: 'Marka Kimliği' },
    { key: 'mobile', label: 'Mobil' },
    { key: 'social', label: 'Sosyal Medya' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Portföyümüz
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Gerçekleştirdiğimiz projelerle müşterilerimizin dijital başarı hikayelerine 
            ortak olmanın gururunu yaşıyoruz
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl glass-effect hover:shadow-2xl transition-all duration-300 card-3d"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Eye className="h-6 w-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;