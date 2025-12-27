import {
  Flex,
  Heading,
  Image,
  Skeleton,
  useBoolean,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import profile_image from '../images/profile.jpg'

export default function Profile(props) {
  const { t } = useTranslation()
  const [imageLoading, setImageLoading] = useBoolean(true)

  return (
    <Flex
      bg={useColorModeValue('white', 'gray.700')}
      rounded="xl"
      boxShadow="xl"
      direction="column"
      overflow="hidden"
      p={5}
      gap={5}
      {...props}
    >
      {imageLoading ? (
        <Skeleton sx={{ aspectRatio: '1' }} rounded="lg"></Skeleton>
      ) : null}
      <Image
        src={profile_image}
        rounded="lg"
        height={imageLoading ? 0 : 'unset'}
        position={imageLoading ? 'absolute' : 'unset'}
        alt="Profile picture"
        onLoad={setImageLoading.off}
      />

      <Flex justifyContent="center" alignItems="center">
        <Heading as="h2" fontSize="2xl" textAlign="center">
          {t('profile_name')}
        </Heading>
      </Flex>
    </Flex>
  )
}
