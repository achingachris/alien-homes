import MainLayout from '../src/layouts/MainLayout'
import IntroSection from '../src/components/pages/home/IntroSection'
import CtaSection from '../src/components/pages/home/CtaSection'

const Home = () => {
  return (
    <MainLayout>
      <IntroSection />
      <CtaSection />
    </MainLayout>
  )
}

export default Home
