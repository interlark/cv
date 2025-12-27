import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import TechStackTag from '../components/TechStackTag'
import LogoIcon, { getIcon } from '../icons/Sections/WorkExperience'

export default function WorkExperience(props) {
  const { t } = useTranslation()
  const { title, details } = t('work_experience', { returnObjects: true })

  return (
    <Card title={title} icon={<LogoIcon />} spacing={0}>
      {details.map((obj, idx) => (
        <LinkBox key={idx}>
          <Flex
            _hover={{
              bg: useColorModeValue('blue.50', '#63b3ed18')
            }}
            p={5}
            gap={5}
            align="center"
            borderBottom="solid"
            borderBottomColor={useColorModeValue(
              'blackAlpha.300',
              'whiteAlpha.300'
            )}
            borderBottomWidth={idx < details.length - 1 ? '1px' : '0'}
            direction={{ base: 'column', md: 'row' }}
            {...props}
          >
            {getIcon({
              name: obj.icon,
              props: {
                w: 20,
                h: 20,
                filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
              }
            })}
            <Box w="100%">
              <Heading as="h3" fontSize="xl">
                <LinkOverlay href={obj.link} isExternal>
                  {obj.title}
                </LinkOverlay>
              </Heading>

              <Text
                color={useColorModeValue('gray.600', 'gray.400')}
                fontSize="md"
              >
                {obj.period}
              </Text>

              <UnorderedList mt={2} spacing={2}>
                {obj.jobs.map((job, idx) => (
                  <ListItem key={idx}>
                    <Text as="span" mr={2}>
                      {job.title}
                    </Text>
                    <br />
                    {job.stack.map((name) => (
                      <TechStackTag
                        mr={2}
                        mt={1}
                        key={name}
                        name={name}
                        verticalAlign="baseline"
                      />
                    ))}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Flex>
        </LinkBox>
      ))}
    </Card>
  )
}
