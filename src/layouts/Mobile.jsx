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
    <Container maxW="container.sm">
      <Header />
      <Flex pt={10} pb={5} gap={5} direction="column" as="main">
        <Profile />
        <AboutMe />

        <Education />

        <Skills />
        <Tools />
        <Languages />

        <WorkExperience />
        <Projects />
        <Certificates />
        <Interests />

        <Contacts />
      </Flex>
    </Container>
  )
}
