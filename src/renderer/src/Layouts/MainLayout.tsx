import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-9">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
