import { Container, Flex } from '@chakra-ui/react'
import AboutMe from '../sections/AboutMe'
import Certificates from '../sections/Certificates'
import Contacts from '../sections/Contacts'
import Education from '../sections/Education'
import Header from '../sections/Header'
import Interests from '../sections/Interests'
import Languages from '../sections/Languages'
import Profile from '../sections/Profile'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Tools from '../sections/Tools'
import WorkExperience from '../sections/WorkExperience'

export default function Layout() {
  return (
    <Container maxW="container.xl">
      <Header />
      <Flex pt={10} pb={5} gap={10} as="main">
        <Flex
          direction="column"
          gap={10}
          flex="1"
          justifyContent="space-between"
        >
          <Profile />
          <Skills />
          <Tools />
          <Languages />
          <Interests />
          <Contacts />
        </Flex>

        <Flex
          direction="column"
          gap={10}
          flex="2.25"
          justifyContent="space-between"
        >
          <AboutMe />
          <Education />
          <WorkExperience />
          <Projects />
          <Certificates />
        </Flex>
      </Flex>
    </Container>
  )
}
