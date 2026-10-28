
import React, { useState } from 'react'
import '../../App.css'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [status, setStatus] = useState('')
    const [isSending, setIsSending] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        setIsSending(true)
        setStatus('')

        try {
            await emailjs.sendForm(
                'service_rg4fufv',
                'template_gnrxjbn',
                e.target,
                {
                    publicKey: 'ochNGVXiLGDlZQWDJ',
                }
            )

            setStatus('Message sent successfully!')
            e.target.reset()
        } catch (error) {
            console.error('EmailJS error:', error)
            setStatus('Failed to send message. Please try again.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="contact__container">
                    <h2>Contact Me</h2>

                    <p>
                        Feel free to reach out to me for any inquiries or
                        collaborations. I'm always open to discussing new
                        projects, creative ideas, or opportunities to be
                        part of your visions.
                    </p>

                    <div className="contact_form">
                        <form onSubmit={sendEmail}>
                            <div className="form_group">
                                <label htmlFor="user_name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="user_email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                />
                            </div>

                            <button type="submit" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>

                            {status && (
                                <p role="status" aria-live="polite">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
