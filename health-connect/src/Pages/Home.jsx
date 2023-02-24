import { Box,Image} from "@chakra-ui/react";
import Babycare from "../Components/Home/Babycare";
import FeaturedBrands from "../Components/Home/FeaturedBrands";
import HealthCareDevices from "../Components/Home/HealthCareDevices";
import HealthConcerns from "../Components/Home/HealthConcerns";
import HomeSlider from "../Components/Home/HomeSlider";
import PopularCategories from "../Components/Home/PopularCategories";






function Home(){
    return (
        <Box>
            <HomeSlider/>
            <Image w={'90%'} m={'auto'} mt={'30px'} src={'https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png'}></Image>
            {/* Health Concerns Here */}
            <HealthConcerns/>
            {/* Featured Brands here */}
            <FeaturedBrands/>
            {/* Popular categories here */}
            <PopularCategories/>
            {/* Health Care Devices */}
            <HealthCareDevices/>
            {/* baby care here */}
            <Babycare/>
        </Box>
    )
}

export default Home;