import { Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import LogoIcon, { getIcon } from '../icons/Sections/Contacts'

export default function Contacts(props) {
  const { t } = useTranslation()
  const { title, details } = t('contacts', { returnObjects: true })

  const listIconStyles = {
    width: '1em',
    height: '1em',
    display: 'inline',
    lineHeight: '1em',
    flexShrink: '0',
    color: useColorModeValue('#3182ce', 'rgba(144, 205, 244, 0.8)'),
    marginInlineEnd: '0.5rem',
    verticalAlign: 'text-bottom',
    fontSize: 'xl'
  }

  return (
    <Card title={title} icon={<LogoIcon />} {...props}>
      <List spacing={2}>
        {details.map((obj, idx) => (
          <ListItem key={idx} display="flex" align="center">
            {getIcon({ name: obj.icon, props: listIconStyles })}
            <Link ml={1} href={obj.href} isExternal={obj.is_external}>
              {obj.address}
            </Link>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
