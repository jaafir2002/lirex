import { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/layout/Loader'
import { PageShell } from './components/layout/PageShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import CaseStudyIndex from './pages/CaseStudyIndex'
import CaseStudyDetail from './pages/CaseStudyDetail'
import NewsIndex from './pages/NewsIndex'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'

const LOADER_KEY = 'lirex-loader-seen'

export default function App() {
  const alreadySeen = typeof window !== 'undefined' && sessionStorage.getItem(LOADER_KEY) === '1'
  const [ready, setReady] = useState(alreadySeen)

  const handleDone = useCallback(() => {
    try {
      sessionStorage.setItem(LOADER_KEY, '1')
    } catch {
      /* ignore */
    }
    setReady(true)
  }, [])

  return (
    <>
      {!ready ? <Loader onDone={handleDone} /> : null}
      <div
        className={ready ? 'opacity-100 transition-opacity duration-500' : 'pointer-events-none opacity-0'}
        aria-hidden={!ready}
      >
        <PageShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/case-study" element={<CaseStudyIndex />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            <Route path="/news" element={<NewsIndex />} />
            <Route path="/news/:slug" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-of-service" element={<LegalPage />} />
            <Route path="/cookie-policy" element={<LegalPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageShell>
      </div>
    </>
  )
}
