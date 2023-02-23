import { Box, Card, SimpleGrid, Image, Text } from "@chakra-ui/react";

const popularCategories=[
    {
        "id":1,
        "title":"Best Saving Deals",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/59679e26-2765-49ba-b8da-80e8344b55fe.png"
    },
    {
        "id":2,
        "title":"Vitamins",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4bffbf6d-6d75-45f2-8b3c-962e3a7aec56.png"
    },
    {
        "id":3,
        "title":"Nutrional Drinks",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/da88ee85-1f00-46ce-a038-eb60066daba8.png"
    },
    {
        "id":4,
        "title":"Personal Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/13157c75-c076-4dd2-8c8c-75abb32d37ff.png"
    },
    {
        "id":5,
        "title":"Skin Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/12e794d8-bca4-4895-aae6-a12b0aa17f54.png"
    },
    {
        "id":6,
        "title":"Sexual Wellness",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a2bd4b8d-999a-4154-a2ea-1a9a415250c9.png"
    },
    {
        "id":7,
        "title":"Ayurveda",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6bc4ff83-521f-463f-93a1-f482ebf5b870.png"
    }
]

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Text fontSize={'20px'} mt={'20px'} ml={'5%'} align={'left'}>Popular Categories</Text>
        <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} m={'auto'} p={'25px'} mt={'30px'}>
        <Slider {...settings}>
        {
                    popularCategories.map((el)=>(
                        <Card key={el.id} p={'10px'} m={'15px'}>
                            <Image m={'auto'} src={el.img} w={'120px'} h={'120px'}></Image>
                            <Text>{el.title}</Text>
                        </Card>
                    ))
                }
        </Slider>
        </Box>
      </div>
    );
  }
}