'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Burada form gönderimi yapılır (EmailJS, Netlify Forms vs.)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simülasyon
    
    alert('Mesajınız gönderildi! En kısa sürede dönüş yapacağım.')
    setFormData({ name: '', email: '', subject: '', message: '', projectType: 'web' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'berater@example.com',
      href: 'mailto:berater@example.com',
      description: 'Projeler ve işbirliği için'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 5XX XXX XX XX',
      href: 'tel:+905xxxxxxxxx',
      description: 'Acil durumlar için'
    },
    {
      icon: MapPin,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      href: '#',
      description: 'Remote çalışmaya uygun'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/beratergun',
      description: 'Kodlarımı inceleyin'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/beratergun',
      description: 'Profesyonel ağım'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Yeni projeler, işbirliği fırsatları veya sadece merhaba demek için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            {/* İletişim Kartları */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 card-hover group"
                  >
                    <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {contact.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {contact.description}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Sosyal Medya */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sosyal Medya
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 card-hover group"
                    >
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Çalışma Durumu */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Freelance Projelere Açık
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Şu anda yeni projeler için uygun durumdayım. Web siteleri, mobil uygulamalar 
                veya mevcut projelerin geliştirilmesi konularında yardımcı olabilirim.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  24-48 saat içinde yanıt
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Türkçe & İngilizce
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Formu */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Proje Hakkında Konuşalım
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* İsim ve Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder="email@ornek.com"
                  />
                </div>
              </div>

              {/* Proje Tipi */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Proje Tipi
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="web">Web Sitesi (Next.js/React)</option>
                  <option value="mobile">Mobil Uygulama (Flutter)</option>
                  <option value="update">Mevcut Proje Güncellemesi</option>
                  <option value="consultation">Danışmanlık</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              {/* Konu */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Konu *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Projenizin kısa açıklaması"
                />
              </div>

              {/* Mesaj */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white resize-none"
                  placeholder="Projeniz hakkında detaylı bilgi verebilir misiniz? Hangi özellikler olsun, ne zaman tamamlanması gerekiyor, bütçeniz nedir?"
                />
              </div>

              {/* Gönder Butonu */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Mesajı Gönder
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Genellikle <strong>24-48 saat</strong> içinde geri dönüş yapıyorum. 
                Acil durumlar için telefon numaramı kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}