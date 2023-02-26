import {Routes, Route} from 'react-router-dom'
import Ashwagandha from '../Pages/Ashwagandha';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home'
import SingleAshwagandhaPage from '../Pages/SingleAshwagandhaPage';
import SingleVitaminsPage from '../Pages/SingleVitaminsPage';
import Vitamins from '../Pages/Vitamins'

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/vitamins' element={<Vitamins/>}></Route>
            <Route path='/ashwagandha' element={<Ashwagandha/>}></Route>
            <Route path='/vitamins/:id' element={<SingleVitaminsPage/>}></Route>
            <Route path='/ashwagandha/:id' element={<SingleAshwagandhaPage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    )
}

export default AllRoutes;