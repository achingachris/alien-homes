import Link from 'next/link'

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark py-lg-4' id='mainNav'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand text-uppercase fw-bold d-lg-none'>
            Mombasa Trendsetter
          </a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item px-lg-4'>
              <Link href='/'>
                <a className='nav-link text-uppercase'>Home</a>
              </Link>
            </li>
            <li className='nav-item px-lg-4'>
              <Link href='/about'>
                <a className='nav-link text-uppercase'>About</a>
              </Link>
            </li>
            <li className='nav-item px-lg-4'>
              <Link href='/trends'>
                <a className='nav-link text-uppercase'>Trends</a>
              </Link>
            </li>
            <li className='nav-item px-lg-4'>
              <Link href='/content'>
                <a className='nav-link text-uppercase'>content</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
