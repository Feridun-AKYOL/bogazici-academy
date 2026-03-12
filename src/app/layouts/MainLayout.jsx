import { Outlet } from 'react-router-dom'
import { Navbar } from '../../features/navbar/components/Navbar'
import { Footer } from '../../components/common/Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'

export default function MainLayout() {
  useScrollToTop()

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
