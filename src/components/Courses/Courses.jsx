import React, { useState } from 'react'
import {Button, Container, HStack, Heading, Image, Input, Link, Stack, Text, VStack} from "@chakra-ui/react";


const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description,
   lectureCount}) => {
    return(
      <VStack className='course' alignItems={["center", "flex-start"]} >
        <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
        <Heading textAlign={["center", "left"]} maxw="200px" fontFamily={"sans-serif"} 
        noOfLines={3} children={title} />
        <Text noOfLines={2} children={description} />

        <HStack>
          <Text fontWeight={"bold"} textTransform="uppercase" children={"Creator"} />
          <Text fontFamily={"body"} textTransform="uppercase" children={creator} />
        </HStack>

        <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`} />

        <Heading textTransform="uppercase" size="xs" children={`Views - ${views}`} />

        <Stack direction={["column", "row"]} alignItems="center" >
          <Link to={`/courses/${id}`} >
            <Button colorScheme={"yellow"}>Watch Now</Button>
          </Link>

            <Button variant={"ghost"} colorScheme={"yellow"} onClick={()=> addToPlaylistHandler(id)} >
              Add To Playlist
            </Button>

        </Stack>


      </VStack>
    )
   }



const Courses = () => {

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = () => {
    console.log("Added To Playlist");
  }

  const categories = [
    "Web Development", "Artificial Intelligence", "Data Structures And Algorithm", 
    "App Development", "Data Science", "Game Development"
  ]

  return (
      <Container minH={"95vh"} maxW="container.lg" paddingY={"8"} >
        <Heading children="All Courses" m={"8"} />

        <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} 
               placeholder='Search a course' type={"text"} focusBorderColor='yellow.500' />

               <HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{
                display:"none"
               }}} >  
                 {
                  categories.map((item, index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minW={"60"} >
                      <Text children= {item} />
                    </Button>
                  ))
                 }
               </HStack>

               <Stack direction={["column", "row"]} 
                      flexWrap="wrap"
                      justifyContent={["flex-start", "space-evenly"]}
                      alignItems={["center", "flex-start"]}
                      >

              <Course
                    title={"sampel"}
                    description={"sampel"}
                    views={23}
                    imageSrc={"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
                    id={"sampel"}
                    creator={"sampel boy"}
                    lectureCount={2}
                    addToPlaylistHandler={addToPlaylistHandler}
              />

               </Stack>

      </Container>
  )
}

export default Courses