import Footer from '@/common/components/footer/footer'
import Header from '@/common/components/header/header'

export default function MainLayout({ children }) {
  return (
    <main>
        <Header />
            {children}
        <Footer />
    </main>
  )
}