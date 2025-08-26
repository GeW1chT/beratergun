'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, MessageCircle, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web',
    budget: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simülasyon - gerçek projede EmailJS, Netlify Forms vs. kullan
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '', projectType: 'web', budget: '', timeline: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'berat@example.com',
      href: 'mailto:berat@example.com',
      description: 'Projeler ve iş teklifleri için',
      availability: '24 saat içinde yanıt'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 5XX XXX XX XX',
      href: 'tel:+905xxxxxxxxx',
      description: 'Acil durumlar ve görüşme için',
      availability: '09:00 - 18:00 arası'
    },
    {
      icon: MapPin,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      href: '#',
      description: 'Remote çalışmaya uygun',
      availability: 'Tüm zaman dilimleri'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/beratergun',
      description: 'Kodlarımı ve projelerimi inceleyin',
      followers: '50+'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/beratergun',
      description: 'Profesyonel ağım ve deneyimlerim',
      followers: '200+'
    }
  ]

  const workingStyle = [
    {
      title: 'Remote Çalışma',
      description: 'Dünyanın her yerinden projeler alabiliyorum'
    },
    {
      title: 'Esnek Saatler',
      description: 'Projenizin gereksinimine göre çalışma saatleri'
    },
    {
      title: 'Hızlı İletişim',
      description: '24-48 saat içinde geri dönüş garantisi'
    },
    {
      title: 'Şeffaf Süreç',
      description: 'Proje ilerleyişi hakkında düzenli güncellemeler'
    }
  ]

  const services = [
    {
      title: 'Web Geliştirme',
      description: 'Next.js, React, TypeScript ile modern web siteleri',
      startingPrice: '₺5.000',
      timeline: '2-4 hafta'
    },
    {
      title: 'Mobil Uygulama',
      description: 'Flutter ile iOS ve Android uygulamaları',
      startingPrice: '₺8.000',
      timeline: '4-8 hafta'
    },
    {
      title: 'Mevcut Proje Güncellemesi',
      description: 'Var olan projelerin geliştirilmesi ve bakımı',
      startingPrice: '₺2.000',
      timeline: '1-2 hafta'
    },
    {
      title: 'Teknik Danışmanlık',
      description: 'Teknoloji seçimi ve proje planlama danışmanlığı',
      startingPrice: '₺1.000',
      timeline: '1 hafta'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mesajınız Gönderildi!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              En kısa sürede size geri dönüş yapacağım. Genellikle 24 saat içinde yanıtlıyorum.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Projeniz hakkında konuşmak ve size nasıl yardımcı olabileceğimi öğrenmek için benimle iletişime geçin
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Freelance projelere açık</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Clock className="w-4 h-4" />
              <span>24-48 saat yanıt süresi</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            {/* İletişim Yöntemleri */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 card-hover group"
                    >
                      <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {method.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          {method.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {method.availability}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Sosyal Medya
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 card-hover group"
                    >
                      <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {social.followers} takipçi
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Çalışma Tarzı */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Çalışma Tarzım
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {workingStyle.map((style, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      {style.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {style.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Formu */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Proje Teklif Formu
            </h2>

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
                    className="input-field"
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
                    className="input-field"
                    placeholder="email@ornek.com"
                  />
                </div>
              </div>

              {/* Proje Tipi ve Bütçe */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Proje Tipi *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="web">Web Sitesi</option>
                    <option value="mobile">Mobil Uygulama</option>
                    <option value="update">Mevcut Proje Güncellemesi</option>
                    <option value="consultation">Teknik Danışmanlık</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tahmini Bütçe
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Bütçe Seçin</option>
                    <option value="0-5000">₺0 - ₺5.000</option>
                    <option value="5000-10000">₺5.000 - ₺10.000</option>
                    <option value="10000-25000">₺10.000 - ₺25.000</option>
                    <option value="25000+">₺25.000+</option>
                    <option value="discuss">Görüşülür</option>
                  </select>
                </div>
              </div>

              {/* Konu ve Zaman */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Proje Başlığı *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Projenizin kısa açıklaması"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Teslim Tarihi
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Zaman Seçin</option>
                    <option value="1-2-weeks">1-2 hafta</option>
                    <option value="1-month">1 ay</option>
                    <option value="2-3-months">2-3 ay</option>
                    <option value="flexible">Esnek</option>
                  </select>
                </div>
              </div>

              {/* Mesaj */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Proje Detayları *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Projeniz hakkında detaylı bilgi verin:&#10;- Hangi özellikler olmalı?&#10;- Hedef kitle kimdir?&#10;- Var olan bir tasarımınız var mı?&#10;- Özel gereksinimleriniz nelerdir?"
                />
              </div>

              {/* Gönder Butonu */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Proje Teklifini Gönder
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Genellikle <strong>24-48 saat</strong> içinde detaylı teklif ile geri dönüş yapıyorum.
              </p>
            </div>
          </div>
        </div>

        {/* Hizmetler Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Hizmetler ve Fiyatlar
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {service.startingPrice}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {service.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
            * Fiyatlar proje kapsamına göre değişiklik gösterebilir. Detaylı teklif için iletişime geçin.
          </p>
        </div>
      </div>
    </div>
  )
}