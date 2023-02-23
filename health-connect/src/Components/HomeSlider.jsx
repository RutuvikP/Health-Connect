import React from 'react';
import {
    Box,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function HomeSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            image:
                'https://onemg.gumlet.io/de5537c1-0e32-425a-ada2-f25a4003ab86_1673006267.jpg?w=1013&h=250&format=auto',
        },
        {
            image:
                'https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/912f861c-6250-47b6-b643-92e3b5e1fce0.png',
        },
        {
            image:
                'https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/56d71eb8-f343-417c-b3ea-7a9717e7303f.png',
        },
        {
            image:
                'https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png',
        },
        {
            image:
                'https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/04f86c00-b46d-436d-9e49-52ad2c0d12b4.png',
        },
        {
            image:'https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/49a3b635-a507-45a4-a54b-0b791e19e536.png'
        }
    ];

    return (
        <Box
            position={'relative'}
            height={['160px','260px','360px']}
            width={'100%'}
            m={'auto'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        width={'auto'}
                        height={['100px','200px','300px']}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="contain"
                        backgroundImage={`url(${card.image})`}>
                        {/* This is the block you need to change, to customize the caption */}
                    </Box>
                ))}
            </Slider>
            <Text p={'15px'} fontSize={'20px'} margin={'auto'} align={'center'}>Health Connect: India's Leading Online Pharmacy & Healthcare Platform</Text>
        </Box>
    );
}