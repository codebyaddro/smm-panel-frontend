import TopNav from '../components/TopNav'
import { Outlet } from 'react-router'
import BottomNav from '../components/BottomNav'

const MainLayout = () => {
  return (
    <div>
        <TopNav />
        <Outlet />
        <BottomNav />
    </div>
  )
}

export default MainLayout
