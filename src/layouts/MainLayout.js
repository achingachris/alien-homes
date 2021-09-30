import HeadLayout from './HeadLayout'
import FooterLayout from './FooterLayout'
import NavigationBar from '../components/globals/NavigationBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <HeadLayout />
      <header>
        <h1 className='site-heading text-center text-faded d-none d-lg-block'>
          <span className='site-heading-upper text-primary mb-3 text-uppercase'>
            the mombasa trendsetter
          </span>
          <span className='site-heading-lower'>trending as usual</span>
        </h1>
      </header>
      <NavigationBar />
      <main>{children}</main>
      <FooterLayout />
    </>
  )
}

export default MainLayout
