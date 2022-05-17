import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import AddProduct from './components/pages/AddProduct/AddProduct';
import Blogs from './components/pages/Blogs/Blogs';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import PrivetRoute from './components/pages/Login/PrivetRoute/PrivetRoute';
import Register from './components/pages/Login/Register/Register';
import ManageProducts from './components/pages/ManageProducts/ManageProducts';
import MyProducts from './components/pages/MyProducts/MyProducts';
import Header from './components/pages/shared/Header/Header';
import NotFound from './components/pages/shared/NotFound/NotFound';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={< Home />} />
        <Route path="/manageproducts" element={
          <PrivetRoute>
            < ManageProducts />
          </PrivetRoute>
        } />
        <Route path="/inventory/:id" element={
          <PrivetRoute>
            < UpdateProduct />
          </PrivetRoute>
        } />
        <Route path="/addproduct" element={
          <PrivetRoute>
            < AddProduct />
          </PrivetRoute>
        } />
        <Route path="/myproducts" element={
          <PrivetRoute>
            < MyProducts />
          </PrivetRoute>
        } />
        <Route path="/blogs" element={< Blogs />} />
        <Route path="/about" element={< About />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />

        <Route path="*" element={< NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
