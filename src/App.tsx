import { NavigateOptions, Route, Routes, useNavigate } from 'react-router'
import { Home } from './pages/home'
import { SignUp } from './pages/sign-up'
import { RouterProvider } from 'react-aria-components'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

function App() {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </RouterProvider>
  )
}

export default App
