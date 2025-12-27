import {
  Box,
  Flex,
  Heading,
  IconButton,
  useBoolean,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import LocaleSwitcher from '../components/LocaleSwitcher'
import { CloseIcon, HamburgerIcon } from '../icons/Others'
import LogoIcon from '../icons/Sections/Header'

export default function Header(props) {
  const { t } = useTranslation()
  const title = t('title')
  const [menuOpened, setMenuOpened] = useBoolean(false)

  return (
    <Box
      as="header"
      bg={useColorModeValue('blue.500', 'blue.700')}
      roundedBottom="xl"
      boxShadow="xl"
      px={5}
      py={4}
      {...props}
    >
      <Flex
        justify="space-between"
        align="center"
        gap={5}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex align="center" gap={3}>
          <LogoIcon w="25px" h="25px" color="whiteAlpha.900" />
          <Heading
            as="h1"
            fontSize="2xl"
            fontWeight={600}
            color="whiteAlpha.900"
          >
            {title}
          </Heading>
          <IconButton
            aria-label="Show menu"
            icon={menuOpened ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: 'block', sm: 'none' }}
            onClick={setMenuOpened.toggle}
          />
        </Flex>

        <Flex
          align="center"
          gap={5}
          display={{ base: menuOpened ? 'flex' : 'none', sm: 'flex' }}
          // width={{ base: '100%', sm: 'unset' }}
          // justifyContent={{ base: 'space-evenly', sm: 'unset' }}
        >
          <LocaleSwitcher />
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  )
}
