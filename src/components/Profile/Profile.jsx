import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = {
        name:"Hansraj", 
        email:"hansraj.oct77@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "admin",
        subscription: {
            status: "active"
        },
        playlist:[
            {
                course:"asdfas",
                poster:"https://avatars.githubusercontent.com/u/110182495?v=4"
            }
        ]
    }


  return (
    <Container minH={"95vh"} maxW={"container.lg"} py="8" >
        <Heading children="Profile" m="8" textTransform={"uppercase"} />

        <Stack 
            justifyContent={"flex-start"}
            direction={["column", "row"]}
            alignItems={"center"}
            spacing={["8", "16"]}
            padding="8"
            >
            
            <VStack>
                <Avatar boxSize={"48"} />
                <Button colorScheme={"yellow"} variant="ghost" >
                    Change Photo
                </Button>
            </VStack>

            <VStack spacing={"4"} alignItems={["center", "flex-start"]} >
                <HStack>
                    <Text children="Name" fontWeight={"bold"} />
                    <Text children={user.name} fontWeight={"bold"} />
                </HStack>

                <HStack>
                    <Text children="Email" fontWeight={"bold"} />
                    <Text children={user.email} fontWeight={"bold"} />
                </HStack>

                <HStack>
                    <Text children="CreatedAt" fontWeight={"bold"} />
                    <Text children={user.createdAt.split("T")[0]} fontWeight={"bold"} />
                </HStack>

                {
                    user.role !== "admin" && (
                        <HStack>
                            <Text children="Subscription" fontWeight={"bold"} />
                            {user.subscription.status === "active"?(
                                <Button color={"yellow.500"} variant="unstyled" > Cancel Subscription </Button>
                            ):(
                                <Link to="/subscribe">
                                    <Button colorScheme={"yellow"}> Subscribe </Button>
                                </Link>
                            )}
                        </HStack>
                    )}
                    <Stack direction={["column", "row"]} alignItems={"center"} >
                        <Link to="/updateprofile" >
                          <Button>
                            Update Profile
                          </Button>
                        </Link>

                        <Link to="/changepassword" >
                          <Button>
                            Change Password
                          </Button>
                        </Link>
                    </Stack>

            </VStack>
        </Stack>


        <Heading children="Playlist" size={"md"} my="8" />

        {
            user.playlist.length > 0 && (
                <Stack 
                    Stack 
                    direction={["column", "row"]} 
                    alignItems={"center"} 
                    flexWrap="wrap"
                    p="4"    
                >
                    {
                        user.playlist.map((element, index)=>(
                            <VStack w="48" m="2" key={element.course} >
                                <Image boxSize={"full"}
                                       objectFit={"contain"}
                                       src={element.poster}  
                                 />
                                 <HStack>
                                    <Link to={`/course/${element.course}`} >
                                      <Button variant={"ghost"} colorScheme='yellow' >Watch Now</Button>
                                    </Link>
                                 </HStack>

                            </VStack>
                        ))
                    }
                </Stack>
            )
        }

    </Container>
  )
}

export default Profile