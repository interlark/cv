import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

export default function Card({
  title,
  icon = null,
  spacing = 5,
  children,
  ...props
}) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded="xl"
      boxShadow="xl"
      overflow="hidden"
      {...props}
    >
      <Box p={5} bg={useColorModeValue('blue.500', 'blue.700')}>
        <Heading as="h2" fontSize="2xl" fontWeight={600} color="whiteAlpha.900">
          <Flex gap={3} align="center">
            {icon ? icon : null}
            {title}
          </Flex>
        </Heading>
      </Box>
      <Box m={spacing}>{children}</Box>
    </Box>
  )
}
