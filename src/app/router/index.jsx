import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { HomePage } from '../../pages/home/HomePage'
import { AboutPage } from '../../pages/about/AboutPage'
import { CoursesPage } from '../../pages/courses/CoursesPage'
import { ContactPage } from '../../pages/contact/ContactPage'
import { NotFoundPage } from '../../pages/not-found/NotFoundPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
