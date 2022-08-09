import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import LogoIcon, { getIcon } from '../icons/Sections/Interests'

export default function Interests(props) {
  const { t } = useTranslation()
  const { title, details } = t('interests', { returnObjects: true })

  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <Flex wrap="wrap" gap={5} justify="center">
        {details.map((obj, idx) => (
          <Flex
            key={idx}
            px={4}
            py={2}
            borderRadius="md"
            _hover={{
              transform: 'translateY(-0.5em)'
            }}
            align="center"
            bg={useColorModeValue('gray.200', 'gray.600')}
            boxShadow="md"
            transition="transform 0.4s"
            gap={2}
          >
            {getIcon({
              name: obj.icon,
              props: {
                w: '25px',
                h: '25px'
              }
            })}
            <Text>{obj.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  )
}
