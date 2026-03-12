import { env } from '../../config/env'

export const contactContent = {
  tr: {
    eyebrow: 'Iletisim',
    title: 'Ogrenciniz icin en uygun programi birlikte planlayalim',
    subtitle:
      'Ilk gorusmede hedefleri, seviyeyi ve uygun programi belirliyoruz. Moodle ve IXL uzerinden surec takibi yapilacaktir.',
    form: {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      goal: 'Hedef / Notlar',
      submit: 'Gorusme Iste',
      success: 'Tesekkurler! En kisa surede size donus yapacagiz.',
    },
    info: {
      title: 'Dogru ekip, dogru takip',
      items: [
        'Tip ve dis hekimligi sinav deneyimi',
        'Universite ve lise derslerinde birebir destek',
        'Native hocalarla Ingilizce gelisimi',
      ],
    },
    details: {
      email: env.contactEmail,
      phone: env.phone,
      address: env.address,
    },
    detailsLabels: {
      email: 'Email',
      phone: 'Telefon',
      address: 'Adres',
    },
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's design the right program for your student",
    subtitle:
      'In the first call we define goals, level, and the most suitable program. Tracking happens through Moodle and IXL.',
    form: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      goal: 'Goal / Notes',
      submit: 'Request a Call',
      success: 'Thank you! We will get back to you shortly.',
    },
    info: {
      title: 'The right team, the right tracking',
      items: [
        'Experience with medicine and dentistry exams',
        '1-on-1 support for university and high school courses',
        'English with native teachers',
      ],
    },
    details: {
      email: env.contactEmail,
      phone: env.phone,
      address: env.address,
    },
    detailsLabels: {
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
    },
  },
  nl: {
    eyebrow: 'Contact',
    title: 'Samen het juiste programma plannen',
    subtitle:
      'In het eerste gesprek bepalen we doel, niveau en programma. Opvolging via Moodle en IXL.',
    form: {
      name: 'Naam',
      email: 'E-mail',
      phone: 'Telefoon',
      goal: 'Doel / Opmerkingen',
      submit: 'Vraag Gesprek Aan',
      success: 'Bedankt! We nemen snel contact op.',
    },
    info: {
      title: 'Het juiste team, de juiste opvolging',
      items: [
        'Ervaring met geneeskunde en tandheelkunde examens',
        '1-op-1 ondersteuning voor universiteit en middelbaar',
        'Engels met native docenten',
      ],
    },
    details: {
      email: env.contactEmail,
      phone: env.phone,
      address: env.address,
    },
    detailsLabels: {
      email: 'Email',
      phone: 'Telefoon',
      address: 'Adres',
    },
  },
}

export const footerContent = {
  tr: {
    tagline: "Belcika'da hedef odakli akademik destek ve sinav hazirligi.",
    quickLinksTitle: 'Hizli Linkler',
    quickLinks: [
      { label: 'Hakkimizda', href: '/about' },
      { label: 'Kurslar', href: '/courses' },
      { label: 'Iletisim', href: '/contact' },
    ],
    platformsTitle: 'Platformlar',
    copyright: `(c) ${new Date().getFullYear()} Bogazici Academy. Tum haklari saklidir.`,
  },
  en: {
    tagline: 'Goal-driven academic support and exam preparation in Belgium.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { label: 'About', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Contact', href: '/contact' },
    ],
    platformsTitle: 'Platforms',
    copyright: `(c) ${new Date().getFullYear()} Bogazici Academy. All rights reserved.`,
  },
  nl: {
    tagline: 'Doelgerichte academische ondersteuning en examenvoorbereiding in Belgie.',
    quickLinksTitle: 'Snelle Links',
    quickLinks: [
      { label: 'Over Ons', href: '/about' },
      { label: 'Opleidingen', href: '/courses' },
      { label: 'Contact', href: '/contact' },
    ],
    platformsTitle: 'Platformen',
    copyright: `(c) ${new Date().getFullYear()} Bogazici Academy. Alle rechten voorbehouden.`,
  },
}
