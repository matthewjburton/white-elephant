import Nav from './Nav/Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Body from './Body'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </div>
  )
}

export default Layout
