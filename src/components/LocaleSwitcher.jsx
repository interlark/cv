import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { GreatBritainFlagIcon, RussiaFlagIcon } from '../icons/Flags'
import { ChevronDownIcon } from '../icons/Others'

export default function LocaleSwitcher(props) {
  const { t, i18n } = useTranslation()
  const SwitchIcon =
    i18n.language == 'en' ? GreatBritainFlagIcon : RussiaFlagIcon

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('user-lang', lang)
  }

  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={IconButton}
        aria-label="Change language"
        icon={<SwitchIcon w="24px" h="18px" />}
        rightIcon={<ChevronDownIcon color="whiteAlpha.900" />}
        tabIndex="0"
        w="70px"
        size="sm"
        variant="outline"
        borderColor={useColorModeValue('whiteAlpha.400', 'whiteAlpha.300')}
        _hover={{
          background: 'whiteAlpha.300'
        }}
        _active={{
          background: 'whiteAlpha.300'
        }}
        {...props}
      />
      <MenuList>
        <MenuOptionGroup
          defaultValue={i18n.language}
          title={t('language')}
          type="radio"
        >
          <MenuItemOption value="ru" onClick={() => changeLanguage('ru')}>
            <RussiaFlagIcon boxSize="1.5rem" mr="12px" />
            <Text display="inline-block">Русский</Text>
          </MenuItemOption>
          <MenuItemOption value="en" onClick={() => changeLanguage('en')}>
            <GreatBritainFlagIcon boxSize="1.5rem" mr="12px" />
            <Text display="inline-block">English</Text>
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
