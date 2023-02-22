import { Box, Card, SimpleGrid, Image, Text } from "@chakra-ui/react";

const healthConcerns=[
    {
        "id":1,
        "title":"Diabets Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png"
    },
    {
        "id":2,
        "title":"Cardiac Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png"  
    },
    {
        "id":3,
        "title":"Stomach Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png"  
    },
    {
        "id":4,
        "title":"Liver Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png"  
    },
    {
        "id":5,
        "title":"Bone, joint Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"  
    },
    {
        "id":6,
        "title":"Kidney Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png"  
    },
    {
        "id":7,
        "title":"Derma Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png"  
    }
]

function HealthConcerns(){
    return (
        <div>
            <Text fontSize={'20px'} mt={'20px'} ml={'5%'} align={'left'}>Shop by health concerns</Text>
            <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} m={'auto'} p={'20px'} mt={'30px'}>
            <SimpleGrid className="healthConcerns" m={'auto'} w={'90%'} columns={[1,3,4,7]} gap={5}>
                {
                    healthConcerns.map((el)=>(
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

export default HealthConcerns;