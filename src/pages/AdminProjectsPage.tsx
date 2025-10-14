import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  X,
  Upload,
  Save,
  Settings
} from 'lucide-react';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

interface Project {
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  features: string[];
  technologies: string[];
  demoUrl: string;
  createdAt?: any;
}

const AdminProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [uploading, setUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const ADMIN_PASSWORD = 'Mahmoud159208@#$';

  const [formData, setFormData] = useState<Project>({
    title: '',
    description: '',
    longDescription: '',
    category: 'ecommerce',
    price: 0,
    image: '',
    features: [''],
    technologies: [''],
    demoUrl: ''
  });

  useEffect(() => {
    // Check if already authenticated in session
    const savedAuth = sessionStorage.getItem('adminAuth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      fetchProjects();
    } else {
      setLoading(false);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setPasswordError('');
      fetchProjects();
    } else {
      setPasswordError('كلمة المرور غير صحيحة');
      setPassword('');
    }
  };

  const fetchProjects = async () => {
    try {
      const projectsQuery = query(
        collection(db, 'projects'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(projectsQuery);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setFormData({ ...formData, image: downloadURL });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('فشل رفع الصورة');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const projectData = {
        ...formData,
        features: formData.features.filter(f => f.trim() !== ''),
        technologies: formData.technologies.filter(t => t.trim() !== ''),
        price: Number(formData.price),
        createdAt: editingProject ? editingProject.createdAt : serverTimestamp()
      };

      if (editingProject && editingProject.id) {
        await updateDoc(doc(db, 'projects', editingProject.id), projectData);
        alert('تم تحديث المشروع بنجاح');
      } else {
        await addDoc(collection(db, 'projects'), projectData);
        alert('تم إضافة المشروع بنجاح');
      }

      setShowModal(false);
      setEditingProject(null);
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('حدث خطأ أثناء حفظ المشروع');
    }
  };

  const handleDelete = async (projectId: string) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) return;

    try {
      await deleteDoc(doc(db, 'projects', projectId));
      alert('تم حذف المشروع بنجاح');
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('حدث خطأ أثناء حذف المشروع');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      longDescription: '',
      category: 'ecommerce',
      price: 0,
      image: '',
      features: [''],
      technologies: [''],
      demoUrl: ''
    });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  const addTechnology = () => {
    setFormData({ ...formData, technologies: [...formData.technologies, ''] });
  };

  const updateTechnology = (index: number, value: string) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = value;
    setFormData({ ...formData, technologies: newTechnologies });
  };

  const removeTechnology = (index: number) => {
    setFormData({ ...formData, technologies: formData.technologies.filter((_, i) => i !== index) });
  };

  // Password Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              لوحة تحكم المشاريع
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              الرجاء إدخال كلمة المرور للمتابعة
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل كلمة المرور"
                required
              />
              {passwordError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              دخول
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              العودة للرئيسية
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة المشاريع
          </h1>
          <button
            onClick={() => {
              resetForm();
              setEditingProject(null);
              setShowModal(true);
            }}
            className="flex items-center space-x-2 rtl:space-x-reverse bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>إضافة مشروع جديد</span>
          </button>
        </div>

        {/* Projects Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الصورة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  العنوان
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الفئة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  السعر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                      {project.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {project.price.toLocaleString()} ج.م
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <button
                        onClick={() => navigate(`/portfolio/${project.id}`)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-green-600 hover:text-green-900 dark:text-green-400"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id!)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                لا توجد مشاريع بعد. قم بإضافة مشروع جديد
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full my-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingProject(null);
                  resetForm();
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    عنوان المشروع
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الفئة
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="ecommerce">متاجر إلكترونية</option>
                    <option value="corporate">مواقع شركات</option>
                    <option value="portfolio">معرض أعمال</option>
                    <option value="blog">مدونات</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الوصف المختصر
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الوصف التفصيلي
                </label>
                <textarea
                  rows={4}
                  value={formData.longDescription}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    السعر (ج.م)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    رابط المعاينة
                  </label>
                  <input
                    type="url"
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  صورة المشروع
                </label>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <Upload className="w-5 h-5" />
                    <span>{uploading ? 'جاري الرفع...' : 'رفع صورة'}</span>
                  </label>
                  {formData.image && (
                    <img src={formData.image} alt="Preview" className="h-16 w-16 rounded-lg object-cover" />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  المميزات
                </label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="ميزة المشروع"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + إضافة ميزة
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  التقنيات المستخدمة
                </label>
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => updateTechnology(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="تقنية"
                    />
                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTechnology}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  + إضافة تقنية
                </button>
              </div>

              <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingProject(null);
                    resetForm();
                  }}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  <span>{editingProject ? 'تحديث' : 'حفظ'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminProjectsPage;
