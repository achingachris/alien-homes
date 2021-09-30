import HeadLayout from './HeadLayout'
import BlogNavBar from '../components/globals/BlogNavBar'

const BlogLayout = ({ children }) => {
  return (
    <>
      <HeadLayout title='The Mombasa Trendsetter Contents, Blogs and Articles' />
      <BlogNavBar />
      <main>{children}</main>
      <footer className='py-5 bg-dark'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </>
  )
}

export default BlogLayout
