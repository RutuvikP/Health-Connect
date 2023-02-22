import { Box, Card, SimpleGrid, Image, Text } from "@chakra-ui/react";

const featuredBrands=[
    {
        "id":1,
        "title":"Complan",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d0616fcf-6d6d-47ca-b538-1cf18b400e7e.png"
    },
    {
        "id":2,
        "title":"Zandu",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a9535d82-1e1f-49bb-8f18-602d2a1be172.png"
    },
    {
        "id":3,
        "title":"Dabur",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/42799828-7310-4dbb-a97d-8b0455d2026c.png"
    },
    {
        "id":4,
        "title":"Dr Wilmar Schwabe India",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d76b9aef-549c-469b-90ef-703f01da71f4.png"
    },
    {
        "id":5,
        "title":"Protinex",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21dcb5bd-a5d1-4ce6-932a-f5bb376a23fe.png"
    },
    {
        "id":6,
        "title":"One Touch",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f68ca832-4952-4389-b1bd-b32f41830b12.png"
    },
    {
        "id":7,
        "title":"Baidyanath",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7b82e3fa-43e9-4718-8d5d-18d226bdcdf5.png"
    }
]

function FeaturedBrands(){
    return (
        <div>
            <Text fontSize={'20px'} mt={'20px'} ml={'5%'} align={'left'}>Featured Brands</Text>
            <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} m={'auto'} p={'20px'} mt={'30px'}>
            <SimpleGrid className="healthConcerns" m={'auto'} w={'90%'} columns={[1,3,4,7]} gap={5}>
                {
                    featuredBrands.map((el)=>(
                        <Card key={el.id} p={'10px'}>
                            <Image m={'auto'} src={el.img} w={'120px'} h={'120px'}></Image>
                            <Text>{el.title}</Text>
                        </Card>
                    ))
                }
            </SimpleGrid>
            </Box>
        </div>
    )
}

export default FeaturedBrands;