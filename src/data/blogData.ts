import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Web Tasarım',
    slug: 'web-tasarim',
    description: 'Modern web tasarım trendleri ve teknikleri',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: '2',
    name: 'Dijital Pazarlama',
    slug: 'dijital-pazarlama',
    description: 'Sosyal medya ve dijital reklam stratejileri',
    color: 'from-pink-500 to-red-600'
  },
  {
    id: '3',
    name: 'UI/UX',
    slug: 'ui-ux',
    description: 'Kullanıcı deneyimi ve arayüz tasarımı',
    color: 'from-teal-500 to-green-600'
  },
  {
    id: '4',
    name: 'Teknoloji',
    slug: 'teknoloji',
    description: 'Yeni teknolojiler ve trendler',
    color: 'from-purple-500 to-indigo-600'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2024 Web Tasarım Trendleri: Geleceğin Dijital Deneyimleri',
    slug: '2024-web-tasarim-trendleri',
    excerpt: 'Bu yıl web tasarım dünyasında öne çıkan trendleri ve bunların kullanıcı deneyimine etkilerini keşfedin.',
    content: `
      <h2>Giriş</h2>
      <p>2024 yılı web tasarım dünyasında devrim niteliğinde değişikliklere sahne oluyor. Yapay zeka destekli tasarımlardan mikro-animasyonlara kadar birçok yenilik, dijital deneyimleri yeniden şekillendiriyor.</p>
      
      <h2>1. Yapay Zeka Destekli Tasarım</h2>
      <p>AI araçları artık tasarımcıların en büyük yardımcısı haline geldi. Otomatik renk paleti oluşturma, layout önerileri ve içerik optimizasyonu gibi alanlarda büyük kolaylık sağlıyor.</p>
      
      <h2>2. Mikro-Animasyonlar</h2>
      <p>Kullanıcı etkileşimlerini daha anlamlı hale getiren mikro-animasyonlar, 2024'ün en önemli trendlerinden biri. Hover efektlerinden sayfa geçişlerine kadar her alanda kullanılıyor.</p>
      
      <h2>3. Dark Mode Optimizasyonu</h2>
      <p>Artık sadece dark mode sunmak yeterli değil. Kullanıcıların tercihlerine göre otomatik geçiş yapan ve her iki modda da mükemmel görünen tasarımlar öne çıkıyor.</p>
      
      <h2>Sonuç</h2>
      <p>Bu trendleri takip ederek, kullanıcılarınıza daha iyi bir deneyim sunabilir ve rekabette öne geçebilirsiniz.</p>
    `,
    author: {
      name: 'Selçuk Can',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'UI/UX Designer'
    },
    category: 'Web Tasarım',
    tags: ['web tasarım', 'trendler', '2024', 'ui/ux'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Sosyal Medya Reklamlarında ROI Nasıl Artırılır?',
    slug: 'sosyal-medya-reklamlari-roi',
    excerpt: 'Sosyal medya reklam kampanyalarınızdan maksimum verim almak için uygulayabileceğiniz stratejiler.',
    content: `
      <h2>ROI Nedir?</h2>
      <p>Return on Investment (ROI), yatırımınızın geri dönüşünü ölçen en önemli metriklerden biridir. Sosyal medya reklamlarında ROI hesaplama ve artırma yöntemlerini inceleyelim.</p>
      
      <h2>Hedef Kitle Analizi</h2>
      <p>Doğru hedef kitleye ulaşmak, ROI artırmanın en etkili yollarından biridir. Demografik veriler, ilgi alanları ve davranış kalıpları analiz edilmelidir.</p>
      
      <h2>A/B Test Stratejileri</h2>
      <p>Farklı reklam formatları, görseller ve metinleri test ederek en etkili kombinasyonu bulabilirsiniz.</p>
      
      <h2>Retargeting Kampanyaları</h2>
      <p>Web sitenizi ziyaret eden ancak dönüşüm gerçekleştirmeyen kullanıcılara yeniden ulaşmak, ROI artırmanın en etkili yöntemlerinden biridir.</p>
    `,
    author: {
      name: 'Ayşe Demir',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Dijital Pazarlama Uzmanı'
    },
    category: 'Dijital Pazarlama',
    tags: ['sosyal medya', 'reklam', 'roi', 'pazarlama'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-10',
    readTime: 6,
    featured: false
  },
  {
    id: '3',
    title: 'Kullanıcı Deneyimi Tasarımında Psikoloji',
    slug: 'ux-tasarim-psikoloji',
    excerpt: 'İnsan psikolojisini anlayarak daha etkili kullanıcı deneyimleri nasıl tasarlanır?',
    content: `
      <h2>UX ve Psikoloji İlişkisi</h2>
      <p>Kullanıcı deneyimi tasarımı, temelde insan davranışlarını anlamak ve bu davranışlara uygun çözümler üretmekle ilgilidir.</p>
      
      <h2>Bilişsel Yük Teorisi</h2>
      <p>Kullanıcıların aynı anda işleyebileceği bilgi miktarı sınırlıdır. Bu nedenle arayüzlerin basit ve anlaşılır olması kritiktir.</p>
      
      <h2>Renk Psikolojisi</h2>
      <p>Renkler kullanıcıların duygusal tepkilerini etkiler. Doğru renk seçimi, kullanıcı davranışlarını yönlendirebilir.</p>
      
      <h2>Gestalt Prensipleri</h2>
      <p>İnsanların görsel bilgiyi nasıl algıladığını anlatan Gestalt prensipleri, etkili arayüz tasarımının temelidir.</p>
    `,
    author: {
      name: 'Mehmet Kaya',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'UX Researcher'
    },
    category: 'UI/UX',
    tags: ['ux', 'psikoloji', 'tasarım', 'kullanıcı deneyimi'],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-08',
    readTime: 10,
    featured: true
  },
  {
    id: '4',
    title: 'Yapay Zeka ve Grafik Tasarım: Geleceğin Araçları',
    slug: 'yapay-zeka-grafik-tasarim',
    excerpt: 'AI araçlarının grafik tasarım dünyasına getirdiği yenilikler ve tasarımcılar için fırsatlar.',
    content: `
      <h2>AI Devrimi</h2>
      <p>Yapay zeka, grafik tasarım sektöründe köklü değişikliklere neden oluyor. Bu değişim tasarımcılar için tehdit mi, yoksa fırsat mı?</p>
      
      <h2>Popüler AI Tasarım Araçları</h2>
      <p>Midjourney, DALL-E, Adobe Firefly gibi araçlar tasarımcıların iş akışlarını hızlandırıyor ve yaratıcılığı artırıyor.</p>
      
      <h2>İnsan vs AI</h2>
      <p>AI araçları hızlı ve etkili olsa da, yaratıcılık, empati ve stratejik düşünce hala insana özgü yeteneklerdir.</p>
      
      <h2>Gelecek Öngörüleri</h2>
      <p>AI ve insan tasarımcıların işbirliği yapacağı hibrit bir gelecek bizi bekliyor.</p>
    `,
    author: {
      name: 'Zeynep Özkan',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Grafik Tasarımcı'
    },
    category: 'Teknoloji',
    tags: ['ai', 'yapay zeka', 'grafik tasarım', 'teknoloji'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-05',
    readTime: 7,
    featured: false
  },
  {
    id: '5',
    title: 'E-Ticaret Sitelerinde Dönüşüm Optimizasyonu',
    slug: 'e-ticaret-donusum-optimizasyonu',
    excerpt: 'E-ticaret sitenizin dönüşüm oranlarını artırmak için uygulayabileceğiniz kanıtlanmış yöntemler.',
    content: `
      <h2>Dönüşüm Optimizasyonu Nedir?</h2>
      <p>Conversion Rate Optimization (CRO), web sitenizi ziyaret eden kullanıcıların müşteriye dönüşüm oranını artırma sürecidir.</p>
      
      <h2>Ürün Sayfası Optimizasyonu</h2>
      <p>Yüksek kaliteli görseller, detaylı açıklamalar ve kullanıcı yorumları dönüşüm oranlarını önemli ölçüde artırır.</p>
      
      <h2>Checkout Süreci</h2>
      <p>Karmaşık ödeme süreçleri sepet terk oranlarını artırır. Basit ve güvenli ödeme seçenekleri sunmak kritiktir.</p>
      
      <h2>Sosyal Kanıt</h2>
      <p>Müşteri yorumları, değerlendirmeler ve güven rozetleri kullanıcıların satın alma kararlarını olumlu etkiler.</p>
    `,
    author: {
      name: 'Can Yılmaz',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'E-Ticaret Uzmanı'
    },
    category: 'Dijital Pazarlama',
    tags: ['e-ticaret', 'cro', 'optimizasyon', 'dönüşüm'],
    image: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-03',
    readTime: 9,
    featured: false
  },
  {
    id: '6',
    title: 'Mobil-First Tasarım: Neden Bu Kadar Önemli?',
    slug: 'mobil-first-tasarim',
    excerpt: 'Mobil cihazların dominantlığında, mobil-first yaklaşımının önemi ve uygulama yöntemleri.',
    content: `
      <h2>Mobil Kullanım İstatistikleri</h2>
      <p>Günümüzde internet trafiğinin %60'ından fazlası mobil cihazlardan geliyor. Bu durum tasarım yaklaşımımızı değiştirmemizi gerektiriyor.</p>
      
      <h2>Mobil-First vs Desktop-First</h2>
      <p>Geleneksel desktop-first yaklaşımın aksine, mobil-first tasarım küçük ekranlardan başlayarak büyük ekranlara doğru genişler.</p>
      
      <h2>Performans Optimizasyonu</h2>
      <p>Mobil cihazlarda yavaş internet bağlantıları ve sınırlı işlem gücü göz önünde bulundurulmalıdır.</p>
      
      <h2>Touch-Friendly Arayüzler</h2>
      <p>Dokunmatik ekranlar için optimize edilmiş butonlar, menüler ve etkileşim alanları tasarlanmalıdır.</p>
    `,
    author: {
      name: 'Selçuk Can',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'UI/UX Designer'
    },
    category: 'Web Tasarım',
    tags: ['mobil', 'responsive', 'tasarım', 'ux'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-01',
    readTime: 6,
    featured: true
  }
];