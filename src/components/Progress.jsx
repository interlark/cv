import { Progress, useColorModeValue } from '@chakra-ui/react'

export default function Progress(props) {
  return (
    <Progress
      rounded="md"
      boxShadow={`1px 1px 1px ${useColorModeValue('#00000025', '#00000050')}`}
      sx={{
        '& > div:first-of-type': {
          backgroundColor: useColorModeValue(
            '#3182ce',
            'rgba(144, 205, 244, 0.8)'
          )
        }
      }}
      {...props}
    />
  )
}
