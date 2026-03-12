import emailjs from '@emailjs/browser'
import { env } from '../config/env'

export async function submitContactForm(payload) {
  const { serviceId, templateNotify, templateAutoReply, publicKey } = env.emailjs

  // Notify template (template_c4c1ql5): sana gelen bildirim
  const notifyParams = {
    from_name: payload.name,
    from_email: payload.email,
    phone: payload.phone || '—',
    goal: payload.goal || '—',
  }

  // Auto-reply template (template_ilxm6yi): başvuru sahibine onay maili
  const autoReplyParams = {
    name: payload.name,
    email: payload.email,
    goal: payload.goal || '—',
  }

  await Promise.all([
    emailjs.send(serviceId, templateNotify, notifyParams, publicKey),
    emailjs.send(serviceId, templateAutoReply, autoReplyParams, publicKey),
  ])
}
