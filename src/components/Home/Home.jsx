import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import '../Home/home.css'
import {CgGoogle,CgYoutube} from 'react-icons/cg';
import {SiCoursera,SiUdemy} from 'react-icons/si';
import {DiAws} from 'react-icons/di';
import vg from '../../assets/images/vg.png'
import introVideo from '../../assets/videos/bb.mp4'

const Home = () => {
  return (
    <section className='home'>
        <div className="container">
            <Stack direction={['column','row']}
            height='100%'
            justifyContent={['center','space-between']}
            alignItems='center'
            spacing={['16','56']}
            >
                <VStack 
                width={'full'} 
                alignItems={['center','flex-end']}
                spacing="8"
                >
                    <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
                    <Text 
                    fontSize={'2xl'}
                    fontFamily='cursive'
                    textAlign={['center','left']}
                    children="Find Valuale content at reasonable price"/>
                    <Link to='/courses'>
                        <Button size={'lg'} colorScheme='yellow'>
                            Enroll Now
                        </Button>
                    </Link>
                </VStack>
                <Image className='homeImg' boxSize={'md'} src={vg} objectFit='contain'/>
            </Stack>
        </div>
        <Box padding={'8'} bg={'blackAlpha.800'} >
            <Heading children="OUR PARTNERS"
            textAlign='center'
            fontFamily={'body'}
            color={'yellow.400'}
            />
            <HStack className='brandsBanner'
            justifyContent={'space-evenly'}
            marginTop='4'
            >
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
            </HStack>
        </Box>
        <div className="container2">
            <video 
            src={introVideo}
            // autoPlay
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            >
            </video>
        </div>
    </section>
  )
}
















export default Home

