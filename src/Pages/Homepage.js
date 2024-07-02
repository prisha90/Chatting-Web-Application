import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
  
  const Homepage = () => {
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="110px 0 15px 0"
          borderRadius="lg"
        >
          <Text textAlign="center" fontSize="4xl" fontFamily="Times New Roman" fontWeight="bold" color="black">
            Sarang - Chat App
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" >
            <Tab >Login</Tab>
            <Tab >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Container>
    );
  }
  
  export default Homepage;