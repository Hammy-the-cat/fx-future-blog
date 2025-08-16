'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信の処理（実際の実装では適切なバックエンドAPIに送信）
    console.log('Contact form submitted:', formData)
    alert('お問い合わせありがとうございます。確認次第ご連絡いたします。')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
        <header style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '1px solid #00ffff',
          borderRadius: '15px',
          margin: '20px',
          padding: '30px'
        }}>
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontFamily: 'Orbitron, monospace',
                fontSize: '1rem',
                marginBottom: '20px',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                transition: 'all 0.3s ease'
              }}
            >
              ← BACK TO ARCHIVES
            </Link>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              marginBottom: '0',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              CONTACT US
            </h1>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #ff00ff',
            borderRadius: '15px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            
            <div style={{
              color: '#e0e0e0',
              lineHeight: '1.8',
              fontSize: '1rem',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              marginBottom: '30px'
            }}>
              <p style={{ marginBottom: '20px' }}>
                FX Future Archivesに関するご質問、ご意見、ご要望などがございましたら、以下のフォームよりお気軽にお問い合わせください。
              </p>
              <p style={{ marginBottom: '20px' }}>
                ※投資に関する個別のアドバイスは提供しておりません。
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.8)'
                }}>
                  お名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid #00ffff',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '1rem',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.4)'
                    e.target.style.borderColor = '#ff00ff'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)'
                    e.target.style.borderColor = '#00ffff'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.8)'
                }}>
                  メールアドレス *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid #00ffff',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '1rem',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.4)'
                    e.target.style.borderColor = '#ff00ff'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)'
                    e.target.style.borderColor = '#00ffff'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.8)'
                }}>
                  件名 *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid #00ffff',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '1rem',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.4)'
                    e.target.style.borderColor = '#ff00ff'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)'
                    e.target.style.borderColor = '#00ffff'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'Orbitron, monospace',
                  color: '#00ffff',
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.8)'
                }}>
                  メッセージ *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid #00ffff',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '1rem',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.4)'
                    e.target.style.borderColor = '#ff00ff'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)'
                    e.target.style.borderColor = '#00ffff'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '15px 40px',
                  color: '#000',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                🚀 SEND MESSAGE
              </button>
            </form>

            <div style={{
              marginTop: '40px',
              padding: '20px',
              background: 'rgba(255, 255, 0, 0.1)',
              border: '1px solid #ffff00',
              borderRadius: '10px'
            }}>
              <h3 style={{
                fontFamily: 'Orbitron, monospace',
                color: '#ffff00',
                marginBottom: '15px',
                fontSize: '1.1rem',
                textShadow: '0 0 8px rgba(255, 255, 0, 0.8)'
              }}>
                📋 お問い合わせについて
              </h3>
              <ul style={{ color: '#e0e0e0', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>通常、2-3営業日以内にご返信いたします</li>
                <li style={{ marginBottom: '8px' }}>投資に関する個別のアドバイスは提供しておりません</li>
                <li style={{ marginBottom: '8px' }}>記載内容に不備がある場合、返信が遅れる場合があります</li>
                <li style={{ marginBottom: '8px' }}>迷惑メールフィルターをご確認ください</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}