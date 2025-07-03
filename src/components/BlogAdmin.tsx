import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  Image as ImageIcon,
  ArrowLeft
} from 'lucide-react';
import { BlogPost } from '../types/blog';
import { blogPosts as initialBlogPosts, blogCategories } from '../data/blogData';

const BlogAdmin = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    image: '',
    readTime: 5,
    featured: false,
    author: {
      name: 'Selçuk Can',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'UI/UX Designer'
    }
  });

  const handleCreate = () => {
    setIsCreating(true);
    setIsEditing(true);
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      image: '',
      readTime: 5,
      featured: false,
      author: {
        name: 'Selçuk Can',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        role: 'UI/UX Designer'
      }
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(true);
    setIsCreating(false);
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(', '),
      image: post.image,
      readTime: post.readTime,
      featured: post.featured,
      author: post.author
    });
  };

  const handleSave = () => {
    const slug = formData.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');

    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: formData.title,
      slug,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      image: formData.image,
      readTime: formData.readTime,
      featured: formData.featured,
      author: formData.author,
      publishedAt: editingPost?.publishedAt || new Date().toISOString().split('T')[0]
    };

    if (isCreating) {
      setBlogPosts([postData, ...blogPosts]);
    } else {
      setBlogPosts(blogPosts.map(post => 
        post.id === editingPost?.id ? postData : post
      ));
    }

    handleCancel();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      image: '',
      readTime: 5,
      featured: false,
      author: {
        name: 'Selçuk Can',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        role: 'UI/UX Designer'
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Geri Dön</span>
              </button>
              <h1 className="text-3xl font-bold text-gradient">
                {isCreating ? 'Yeni Blog Yazısı' : 'Blog Yazısını Düzenle'}
              </h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleCancel}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors flex items-center space-x-2"
              >
                <X className="h-5 w-5" />
                <span>İptal</span>
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all flex items-center space-x-2"
              >
                <Save className="h-5 w-5" />
                <span>Kaydet</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                  <Edit className="h-5 w-5" />
                  <span>İçerik</span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Başlık
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Blog yazısının başlığı"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Özet
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      placeholder="Blog yazısının kısa özeti"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      İçerik (HTML)
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={15}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none font-mono text-sm"
                      placeholder="Blog yazısının HTML içeriği"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Yayın Ayarları */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Yayın Ayarları</span>
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Kategori
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Kategori seçin</option>
                      {blogCategories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Okuma Süresi (dakika)
                    </label>
                    <input
                      type="number"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      min="1"
                      max="60"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-500"
                    />
                    <label className="text-sm font-medium text-gray-300">
                      Öne Çıkan Yazı
                    </label>
                  </div>
                </div>
              </div>

              {/* Medya */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <ImageIcon className="h-5 w-5" />
                  <span>Medya</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Kapak Görseli URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.image && (
                    <div className="mt-4">
                      <img
                        src={formData.image}
                        alt="Önizleme"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Etiketler */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span>Etiketler</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Etiketler (virgülle ayırın)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="web tasarım, ui/ux, teknoloji"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gradient">Blog Yönetimi</h1>
          <button
            onClick={handleCreate}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg transition-all flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Yeni Yazı</span>
          </button>
        </div>

        <div className="glass-effect rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Başlık</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Kategori</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Yazar</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Tarih</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Durum</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {blogPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-white">{post.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-1">{post.excerpt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                        blogCategories.find(cat => cat.name === post.category)?.color || 'from-gray-500 to-gray-600'
                      } text-white`}>
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">{post.author.name}</div>
                          <div className="text-xs text-gray-400">{post.author.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                            Öne Çıkan
                          </span>
                        )}
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          Yayında
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded-lg transition-colors"
                          title="Düzenle"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                          title="Sil"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">Henüz blog yazısı bulunmuyor</div>
            <button
              onClick={handleCreate}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg transition-all flex items-center space-x-2 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>İlk Yazıyı Oluştur</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;