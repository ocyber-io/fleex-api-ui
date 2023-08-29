import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import Protocols from '../components/Protocols'
import Table from '../components/Table'

const MainRoutes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Table />} />
            <Route path="/create-output" element={<Protocols />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoutes
