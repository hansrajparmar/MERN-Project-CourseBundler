import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from "../../assets/videos/bb.mp4";
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"} >

        <VStack>
            <Avatar boxSize={["40", "48"]} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
            <Heading children="Hansraj Parmar" size={["md", "xl"]} />
            <Text 
            textAlign={["center", "left"]}
            children={`Hi, I am a Full-Stack developer and a Teacher 
                    our mission is to provide quality content at reasonoable price. `} 
                />

        </VStack>
    </Stack>
)

const VideoPlayer = () => (
    <Box>
        <video 
            src={introVideo}
            muted
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            >
            </video>
    </Box>
)

const TandC = (termsAndCondition) => (
    <Box>
        <Heading 
            size={"md"} 
            children="Terms & Conditions" 
            textAlign={["center", "left"]} 
            my="4" 
        />

        <Box h="sm" p="4">
            <Text 
                fontFamily={"heading"} 
                letterSpacing={"widest"} 
                textAlign={["center", "left"]} 
            >
                {termsAndCondition}
            </Text>
            <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days." />

        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}  >
        <Heading children="About Us" textAlign={["center", "left"]} />

        <Founder/>

        <Stack m="8" direction={["column", "row"]} alignItems="center" >
            <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]} >
                we are a video streaming platform with some premium courses available.
            </Text>

            <Link to="/subscribe">
                <Button variant={"ghost"} colorScheme='yellow'>
                    Checkout Our Plan
                </Button>
            </Link>

        </Stack>
        <VideoPlayer/>

        <TandC termsAndCondition={"termsAndCondition"} />

        <HStack my="4" p={"4"} >
            <RiSecurePaymentFill/>
            <Heading 
                size={"xs"} 
                fontFamily="sans-serif" 
                textTransform={"uppercase"}
                children={"Payment is Secured by RazorPay"} 
            />
        </HStack>
    </Container>
  )
}

export default About