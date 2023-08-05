import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from "react-icons/ti";
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"100vh"} >
        <Stack direction={["column", "row"]} >
            <VStack alignItems={["center", "flex-start"]} width="full" >
                <Heading children="All Rights Reserved" color={"white"} />
                <Heading fontFamily={"body"} size="sm" children="All Rights Reserved" color={"white"} />
            </VStack>

            <HStack 
                    spacing={["2", "10"]} 
                    justifyContent="center"
                    color={"white"}
                    fontSize="50"
                >

                <a href="https://youtube.com" target={'_blank'} >
                    <TiSocialYoutubeCircular/>
                </a>

                <a href="https://www.instagram.com/hansraj_parmar7/" target={'_blank'} >
                    <TiSocialInstagramCircular/>
                </a>

                <a href="https://github.com/hansrajparmar" target={'_blank'} >
                    <DiGithub/>
                </a>

            </HStack>
        </Stack>
        
    </Box>
  )
}

export default Footer