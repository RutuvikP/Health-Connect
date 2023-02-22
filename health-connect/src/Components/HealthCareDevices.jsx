import { Box, Card, SimpleGrid, Image, Text } from "@chakra-ui/react";

const healthcareDevices=[
    {
        "id":1,
        "title":"Dr Morepen",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/25832f67-b59e-4c68-81a0-6b67ce0b1a6e.webp"
    },
    {
        "id":2,
        "title":"Accu Check",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5b24fd4f-ddbe-4b53-b1d3-97107c44762b.webp"
    },
    {
        "id":3,
        "title":"Omron",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c3015a12-3ac7-48d2-92c9-072bc9113010.webp"
    },
    {
        "id":4,
        "title":"Contour",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c932de9c-ee8b-4edf-ae6b-8b9c882bcb79.webp"
    },
    {
        "id":5,
        "title":"One Touch",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/751cc51d-a84e-499e-afe6-7f2197684471.webp"
    },
    {
        "id":6,
        "title":"Dr Trust",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d6f2e4a2-1dd8-43fe-ae99-fe61777f478d.webp"
    },
    {
        "id":7,
        "title":"Tynor",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/32571bdc-487c-4ebe-98f9-9aa91464fd76.webp"
    }
]

function HealthCareDevices(){
    return (
        <div>
            <Text fontSize={'20px'} mt={'20px'} ml={'5%'} align={'left'}>Health Care Devices</Text>
            <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} m={'auto'} p={'20px'} mt={'30px'}>
            <SimpleGrid className="healthConcerns" m={'auto'} w={'90%'} columns={[1,3,4,7]} gap={5}>
                {
                    healthcareDevices.map((el)=>(
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

export default HealthCareDevices;