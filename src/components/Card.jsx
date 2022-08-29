import {
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';

export default function Card({ data }) {
    // console.log(data);
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem'}}
                direction={{ base: 'column', md: 'row' }}
                // bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                            data.avatar_url
                        }
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {data.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        @{data.login}
                    </Text>
                    <Text
                        textAlign={'center'}
                        // color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>

                        No.of public repos: {data.public_repos}
                        <br />
                        No.of public gists: {data.public_gists}
                    </Text>
                    <Text
                        textAlign={'center'}
                        // color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
               
                        Profile created at in time format of YYYY-MM-DD.
                        <br />
                        <span> ( {data.created_at} )</span>
                     
                    </Text>
                </Stack>
            </Stack>
        </Center>
    );
}