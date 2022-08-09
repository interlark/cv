import { ListItem, UnorderedList } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import LogoIcon from '../icons/Sections/AboutMe'

export default function AboutMe(props) {
  const { t } = useTranslation()
  const { title, details } = t('about_me', { returnObjects: true })

  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <UnorderedList spacing={2}>
        {details.map((str, idx) => (
          <ListItem key={idx}>{str}</ListItem>
        ))}
      </UnorderedList>
    </Card>
  )
}
