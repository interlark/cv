import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import TechStackTag from '../components/TechStackTag'
import LogoIcon, { getIcon } from '../icons/Sections/Projects'

export default function Projects(props) {
  const { t } = useTranslation()
  const { title, details } = t('projects', {
    returnObjects: true
  })

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
            <Flex direction="column" gap={2} w="100%">
              <Heading as="h3" fontSize="xl" mb={2}>
                <LinkOverlay href={obj.link} isExternal>
                  <Text as="span" mr={2}>
                    {obj.title}
                  </Text>
                </LinkOverlay>
                <br />
                {obj.stack.map((name) => (
                  <TechStackTag
                    mr={2}
                    mt={1}
                    key={name}
                    name={name}
                    verticalAlign="baseline"
                  />
                ))}
              </Heading>
              <Text>{obj.description}</Text>
              <Text>
                <Text as="span" fontWeight={600}>
                  {obj.features_title}
                  {': '}
                </Text>
                <Text as="span" fontStyle="italic">
                  {obj.features.join(' • ')}
                </Text>
              </Text>
            </Flex>
          </Flex>
        </LinkBox>
      ))}
    </Card>
  )
}
