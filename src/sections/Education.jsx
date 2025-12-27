import { Flex, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import LogoIcon from '../icons/Sections/Education'
import university_logo from '../images/university_logo.png'

export default function AboutMe(props) {
  const { t } = useTranslation()
  const { title, details, logo } = t('education', { returnObjects: true })

  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <Flex
        justify="space-between"
        align="center"
        gap={5}
        direction={{ base: 'column-reverse', sm: 'row' }}
      >
        <Flex direction="column" justify="space-evenly" gap={2}>
          {details.map((str, idx) => (
            <Text key={idx}>{str}</Text>
          ))}
        </Flex>

        <Image
          src={university_logo}
          w="120px"
          h="120px"
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
          alt="Logo of University"
        ></Image>
      </Flex>
    </Card>
  )
}
