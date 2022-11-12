import NavBar from './NavBar'

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
)

export default Layout
