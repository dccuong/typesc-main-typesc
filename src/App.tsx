import { useEffect, useState } from 'react'
import './App.css'
import ShowInfo from './components/web/page/ShowInfo'
// import "bootstrap/dist/css/bootstrap.min.css";


import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './components/web/Home'
import C_layout from './components/web/C_layout';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/main/Dashboard';


import Products from './components/admin/main/Product';
import { add, get, list, remove } from './api/prd';
import PrdPage from './components/web/page/PrdPage';
import AddProduct from './components/admin/main/Add';
import { IProduct } from './type/product';
import EditProduct from './components/admin/main/Edit';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])
  const [data, setdata] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data)
      setProducts(data)
    }
    getProducts();


  }, [])
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleRemove = (_id: string) => {
    remove(_id);
    setProducts(products.filter(item => item._id != _id))
  }
  return (
    // <div className="App">
    //   <ShowInfo name="abc" age={10} />

    //   {products.map((item, index) => <div key={index}>{item.id}</div>)}
    <div>
      <main>
        <Routes>
          <Route path="/" element={<C_layout />} >
            <Route index element={<Home />} />
            <Route path="product" element={<PrdPage />} />
            <Route path="about" element={<ShowInfo name="abc" age={10} />} />

          </Route>
          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
              <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
              <Route path="edit" element={<EditProduct onAdd={onHandleAdd} />} />
            </Route>
          </Route>
        </Routes>
      </main >
    </div >

  )
}

export default App
