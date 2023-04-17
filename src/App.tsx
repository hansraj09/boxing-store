import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Classes from './components/Classes';
import Contact from './components/Contact';
import Store from './components/Store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="classes" element={<Classes />} />
      <Route path="contact" element={<Contact />} />
      <Route path="Store" element={<Store />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
