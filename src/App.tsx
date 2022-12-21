import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Chat } from './pages/Chat/Chat'
import { Error } from './pages/Error/Error'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Chat />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
