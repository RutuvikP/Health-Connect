import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Vitamins from '../Pages/Vitamins'

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/vitamins' element={<Vitamins/>}></Route>
        </Routes>
    )
}

export default AllRoutes;