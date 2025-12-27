import {
  Box,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import LogoIcon, { CertificateIcon } from '../icons/Sections/Certificates'

export default function Certificates(props) {
  const { t } = useTranslation()
  const { title, details } = t('certificates', { returnObjects: true })
  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <Flex
        justify="space-between"
        align="center"
        gap={5}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Box>
          <UnorderedList spacing={2}>
            {details.map((obj, idx) => (
              <ListItem key={idx}>
                <Link href={obj.url} isExternal>
                  {obj.name}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <CertificateIcon
          h="120px"
          w="auto"
          opacity={useColorModeValue('0.8', '0.7')}
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
        />
      </Flex>
    </Card>
  )
}
