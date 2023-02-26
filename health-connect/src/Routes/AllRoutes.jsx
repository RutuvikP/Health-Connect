import {Routes, Route} from 'react-router-dom'
import Ashwagandha from '../Pages/Ashwagandha';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home'
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Signup from '../Pages/Signup';
import SingleAshwagandhaPage from '../Pages/SingleAshwagandhaPage';
import SingleVitaminsPage from '../Pages/SingleVitaminsPage';
import Vitamins from '../Pages/Vitamins';
import PrivateRoute from './PrivateRoute'

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/vitamins' element={<Vitamins/>}></Route>
            <Route path='/ashwagandha' element={<Ashwagandha/>}></Route>
            <Route path='/vitamins/:id' element={<SingleVitaminsPage/>}></Route>
            <Route path='/ashwagandha/:id' element={<SingleAshwagandhaPage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    )
}

export default AllRoutes;