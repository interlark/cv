import { Box, chakra, Flex, useColorMode } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '../icons/Others'

const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp
})

export default function ColorModeSwitcher(props) {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleKeyDown = (e) => {
    if (e.code == 'Space' || e.code == 'Enter') {
      toggleColorMode()
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const variants = {
    off: { left: '6px' },
    on: { left: '33px' }
  }

  return (
    <Box
      position="relative"
      bg="blackAlpha.400"
      borderRadius="full"
      p={2}
      cursor="pointer"
      role="group"
      tabIndex="0"
      aria-label="Change color theme"
      onClick={toggleColorMode}
      onKeyDown={handleKeyDown}
      _focusVisible={{
        boxShadow: 'outline',
        outline: '0'
      }}
      {...props}
    >
      <Flex w="45px" justify="space-between" align="center">
        <MoonIcon w="20px" color="#ffc024" />
        <SunIcon w="20px" color="#ffc024" />
        <MotionBox
          _groupHover={{
            boxShadow: '0 0 3px 1px var(--chakra-colors-whiteAlpha-700)'
          }}
          style={{
            position: 'absolute',
            width: '22px',
            height: '22px',
            backgroundColor: 'white',
            borderRadius: '100%'
          }}
          initial={false}
          animate={colorMode == 'dark' ? 'on' : 'off'}
          variants={variants}
        />
      </Flex>
    </Box>
  )
}
