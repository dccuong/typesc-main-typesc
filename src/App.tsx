import { useEffect, useState } from 'react'
import './App.css'
import 'antd/dist/antd.css';
// import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './components/web/Home'
import C_layout from './components/web/C_layout';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/main/Dashboard';
import Products from './components/admin/main/Product';
import { add, edit, getAPrd, list, remove } from './api/prd';
import PrdPage from './components/web/page/PrdPage';
import AddProduct from './components/admin/main/Add';
import { IProduct } from './type/product';
import EditProduct from './components/admin/main/Edit';
import Signin from './components/web/page/Signin';
import Signup from './components/web/page/Signup';
import PrvRouter from './components/PrvRouter';
import { TypeUser } from './type/user';
import { signin, signup } from './api/user';
import { TypeCate } from './type/cate';
import { getCate } from './api/cate';
import DetailPrd from './components/web/page/DetailPrd';
import PrvRouterUser from './components/PrvRouterUser';
import UserA from './components/web/page/User/UserA';
import UserC from './components/web/page/User/UserC';
import Search from './components/web/page/Search';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])
  const [users, setUser] = useState<TypeUser[]>([])
  const [category, setCategory] = useState<TypeCate[]>([])
  const [data, setdata] = useState([])
  useEffect(() => {

    const getProducts = async () => {
      const { data } = await list();
      console.log(data)
      setProducts(data)
    };
    const getCategory = async () => {
      const { data } = await getCate();

      console.log(data)
      setCategory(data)
    }
    getProducts();
    getCategory();
  }, [])
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleRemove = (_id: string) => {
    remove(_id);
    setProducts(products.filter(item => item._id != _id))
  }
  const onHandleUpdate = async (product: IProduct) => {
    const { data } = await edit(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }
  const onHandleSignUp = async (user: TypeUser) => {
    const { data } = await signup(user);
    setUser([...users, data]);
  }
  const onHandleSignIn = async (user: TypeUser) => {
    const { data } = await signin(user);
    console.log(data)
    localStorage.setItem("user", JSON.stringify(data))

  }

  return (<div>
    <main>
      <Routes>
        <Route path="/" element={<C_layout categorys={category} />} >
          <Route index element={<Home products={products} />} />
          <Route path="/search" element={<PrdPage />} />
          <Route path="product/:id" element={<DetailPrd />} />
          <Route path="AccA" element={<PrvRouterUser><UserA /></PrvRouterUser>} />
          <Route path="AccC" element={<PrvRouterUser><UserC /></PrvRouterUser>} />
          <Route path="signin" element={<Signin onSignIn={onHandleSignIn} />} />
          <Route path="signup" element={<Signup onSignUp={onHandleSignUp} />} />
          <Route path="products/search" element={<Search />} />
        </Route>
        <Route path="admin" element={<PrvRouter><AdminLayout /></PrvRouter>} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd} category={category} />} />
            <Route path=":id/edit" element={<EditProduct onUpdate={onHandleUpdate} category={category} />} />
          </Route>
        </Route>
      </Routes>
    </main >
  </div >

  )
}

export default App
