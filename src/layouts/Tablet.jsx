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
      <Flex pt={10} pb={5} as="main">
        <Flex direction="column" gap={5}>
          <Flex gap={5}>
            <Profile flex="1" />
            <AboutMe flex="2.25" />
          </Flex>
          <Education />

          <Flex gap={5}>
            <Flex
              direction="column"
              gap={5}
              flex="1"
              justifyContent="space-between"
            >
              <Skills flexGrow="1" />
              <Languages flexGrow="1" />
            </Flex>
            <Tools flex="1" />
          </Flex>

          <WorkExperience />
          <Projects />
          <Certificates />
          <Interests />

          <Contacts />
        </Flex>
      </Flex>
    </Container>
  )
}
