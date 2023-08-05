import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const isAuthentcated = false;
const user = {
  role:'admin'
}


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
      <Button onClick={onClose} variant={'ghost'}>{title}</Button>
    </Link>
)
  const logoutHandler = ()=>{
    onClose()
    console.log("Logout");
  }
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(5px)'} />
        <DrawerContent>
          {/* <DrawerCloseButton onClose={onClose}/> */}
          <DrawerHeader borderBottomWidth={'1px'}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={'flex-start'}>
                <LinkButton onClose={onClose} url='/' title='Home'/>
                <LinkButton onClose={onClose} url='/courses' title='Browse all Courses'/>
                <LinkButton onClose={onClose} url='/request' title='Request a course'/>
                <LinkButton onClose={onClose} url='/contact' title='Contact Us'/>
            </VStack>
            <HStack
             width={'80%'} 
             justifyContent={'space-evenly'}
             position={'absolute'}
             bottom={'2rem'}
             >
              {isAuthentcated ? (<>
              <VStack>
                <HStack>
                <Link onClick={onClose} to='/profile'>
                    <Button variant={'ghost'} onClick={onClose} colorScheme='yellow'>Profile</Button>
                </Link>
                <Button variant={'ghost'} onClick={logoutHandler}>
                <RiLogoutBoxLine />
                  Logout
                  </Button>
                </HStack>

                {user && user.role === 'admin' && <Link onClick={onClose} to='/admin/dashboard'>
                  <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <RiDashboardFill style={{margin:"4px"}}/>
                    Dashboard
                  </Button>
                  </Link>}
              </VStack>
              </> ): (<>
                <Link onClick={onClose} to='/login'>
                    <Button onClick={onClose} colorScheme='yellow'>Login</Button>
                </Link>
                <p>OR</p>
                <Link onClick={onClose} to='/register'>
                    <Button onClick={onClose} colorScheme='yellow'>Sign Up</Button>
                </Link>
              </>)}
              
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer> 
    </>
  );
};

export default Header;