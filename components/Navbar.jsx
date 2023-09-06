'use client'
import styles from '../app/page.module.css'

import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    Flex, Heading, ButtonGroup, Button, Box,Link, Spacer, Image, Text,  Show
} from '@chakra-ui/react';
import Styles from '../app/page.module.css'
import { signOut,useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const {data:session} = useSession()
    const router = useRouter()
    const handleSignOut = () =>{
        router.push('/')
        signOut() 
    }
    return (
        <div>
            {/* desktop Navigation*/}
            <Show above='md'>
            {  //User Logged In
                session?.user ? (
                    <Flex minWidth='max-content' alignItems='center' gap='2' m={3} position={'sticky'}>
                        <Box p='2'>
                            <Flex direction={'row'} >
                                <Image mr={2} alt='logo' width={30} height={30} src='/assets/icons/blueBee.png' />
                                <Text className={Styles.menu}>Quiz Bee</Text>
                            </Flex>
                        </Box>
                        <Spacer />
                        <ButtonGroup gap='2'>
                            <Button color='#776da0' _hover={{ bg: '#776da0', color: 'white' }} variant={'outline'} borderColor={'#776da0'} rounded={20} _active={{ transform: 'scale(0.98)',}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' onClick={handleSignOut}>Sign Out</Button>
                                <Image mr={2} alt='logo' width={30} height={30} mt={1} rounded={100} src={session?.user.image} />
                        </ButtonGroup>
                    </Flex>
                ) : <> {/* User Logged Out */}
                    <Flex>
                        <Box p='4'>
                            <Flex direction={'row'} >
                                <Image mr={2} alt='logo' width={30} height={30} src='/assets/icons/blueBee.png' />
                                <Text className={Styles.menu}>Quiz Bee</Text>
                            </Flex>
                        </Box>
                        <Spacer />
                        
                    </Flex>
                </>
            }
             </Show>
            {/* Mobile navigation */}
            <Show below='md'>
            {  /* User Logged Out */
                session?.user ? (
            <Flex minWidth='max-content' alignItems='center' gap='2' m={3} position={'sticky'}>
                        <Box p='2'>
                            <Flex direction={'row'} >
                                <Image mr={2} alt='logo' width={30} height={30} src='/assets/icons/blueBee.png' />
                            </Flex>
                        </Box>
                        <Spacer />
                        <ButtonGroup gap='2'>
                           
                            <Menu background={'gray.100'} >
                                
                                <MenuButton >
                                <Image mr={2} alt='logo' width={30} height={30} mt={1} rounded={100} src={session?.user.image} />
                                </MenuButton>
                                
                                <MenuList textAlign={'center'}>
                                    <Button color='#776da0' _hover={{ bg: '#776da0', color: 'white' }} variant={'outline'} borderColor={'#776da0'} rounded={20} _active={{
                                transform: 'scale(0.98)',
                            }}
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)' onClick={handleSignOut}>Sign Out</Button>
                                </MenuList>
                               
                            </Menu>

                        </ButtonGroup>
                    </Flex>
                ) : <> {/* User Logged Out */}
                    <Flex>
                        <Box p='4'>
                            <Flex direction={'row'} >
                                <Image mr={2} alt='logo' width={30} height={30} src='/assets/icons/blueBee.png' />
                            </Flex>
                        </Box>
                        <Spacer />
                        
                    </Flex>
                </>
            }
            </Show>
        </div>
    )
}

export default Navbar
