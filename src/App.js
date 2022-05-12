import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/pages/AddProduct/AddProduct';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login/Login';
import ManageProducts from './components/pages/ManageProducts/ManageProducts';
import MyProducts from './components/pages/MyProducts/MyProducts';
import Footer from './components/pages/shared/Footer/Footer';
import Header from './components/pages/shared/Header/Header';
import NotFound from './components/pages/shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={< Home />} />
        <Route path="/manageproducts" element={< ManageProducts />} />
        <Route path="/addproduct" element={< AddProduct />} />
        <Route path="/myproducts" element={< MyProducts />} />
        <Route path="/login" element={< Login />} />

        <Route path="*" element={< NotFound />} />
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
