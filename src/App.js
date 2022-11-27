import React, { useDebugValue } from 'react'
import AppContainer from './pages/AppContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from './components/UserLayout';
import Category from './pages/Category';
import Detail from './pages/ProductDetail/Detail';
import Cart from './pages/Cart';
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <div className='container'>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<UserLayout />}>
              <Route index element={<AppContainer />} />
              <Route path={"/category/:categoryId"} element={<Category />} />
              <Route path={"/product/:productId"} element={<Detail />} />
              <Route path={"/cart"} element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App