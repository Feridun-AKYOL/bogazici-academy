import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const supportedLanguages = ['tr', 'en', 'nl']

function getInitialLanguage() {
  const stored = localStorage.getItem('ba_language')
  if (stored && supportedLanguages.includes(stored)) return stored
  const browser = navigator.language?.slice(0, 2)
  if (browser && supportedLanguages.includes(browser)) return browser
  return 'tr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next) => {
        if (!supportedLanguages.includes(next)) return
        setLanguage(next)
        localStorage.setItem('ba_language', next)
      },
      supportedLanguages,
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function AppProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
