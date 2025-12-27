import { List, ListItem } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import Progress from '../components/Progress'
import LogoIcon from '../icons/Sections/Languages'

export default function Languages(props) {
  const { t } = useTranslation()
  const { title, details } = t('languages', { returnObjects: true })

  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <List spacing={2}>
        {details.map((obj, idx) => (
          <ListItem key={idx}>
            {`${obj.name}`}
            <Progress value={obj.value} />
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
