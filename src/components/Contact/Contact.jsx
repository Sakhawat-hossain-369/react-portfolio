import React from 'react'
import '../../App.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm()
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="contact__container">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

                    <div className="contact_form">
                        <form>
                            <div className="form_group">
                                <label htmlFor="user_name">Your Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="user_email">Your Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                />
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Contact