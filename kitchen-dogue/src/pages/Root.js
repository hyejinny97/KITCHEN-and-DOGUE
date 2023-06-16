import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Root() {
  return <div>
    <Navbar />
    <Sidebar />
    <Outlet />
    <Footer />
  </div>
}

export default Root;