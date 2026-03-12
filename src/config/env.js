export const env = {
  moodleUrl: import.meta.env.VITE_MOODLE_URL || 'https://moodle.bogaziciacademy.be',
  ixlUrl: import.meta.env.VITE_IXL_URL || 'https://www.ixl.com',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'info@bogaziciacademy.be',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+32 000 00 00',
  address: import.meta.env.VITE_CONTACT_ADDRESS || 'Brussels, Belgium',
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateNotify: import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY || '',
    templateAutoReply: import.meta.env.VITE_EMAILJS_TEMPLATE_AUTO_REPLY || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
}
