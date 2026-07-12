import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles } from 'lucide-react';

const benefits = [
  'Personalized exhibition planning',
  'Corporate, trade & custom events',
  'Collaborative and client-focused approach',
  'Tailored proposals for your needs and budget',
  'Easy communication and dedicated support',
  'Expert team ready to assist globally',
  'Focus on delivering memorable business experiences',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#FCFAF5] py-20 md:py-28 relative z-10 overflow-hidden">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF3710 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0A193110 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">



        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 h-full py-4"
          >
            <div>
              <h3 className="text-[#0A1931] font-bold text-2xl md:text-3xl mb-4 leading-snug">
                Ready to get started?
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Whether you're planning a corporate trade expo, an industry conference, or a large-scale B2B networking event, our team is ready to listen, collaborate, and deliver. Reach out to explore personalized options and a custom proposal tailored specifically to your goals and budget.
              </p>
            </div>

            {/* Benefit List */}
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                >
                  <Sparkles size={30} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* Contact Details */}

          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgba(10,25,49,0.08)] border border-gray-100"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <CheckCircle size={56} className="text-green-500" />
                <h3 className="text-2xl font-bold text-[#0A1931]">Message Sent!</h3>
                <p className="text-gray-500 text-base max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0A1931]">
                    Name <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FCFAF5] text-[#0A1931] text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0A1931]">
                    Email <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FCFAF5] text-[#0A1931] text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0A1931]">
                    Phone Number <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FCFAF5] text-[#0A1931] text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0A1931]">
                    Company <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FCFAF5] text-[#0A1931] text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0A1931]">
                    Message <span className="text-yellow-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FCFAF5] text-[#0A1931] text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0A1931] hover:bg-yellow-600 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors duration-300 shadow-lg hover:shadow-yellow-500/20 mt-2"
                >
                  Send Me a Quote
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
