import { useMediaQuery } from '@chakra-ui/react'
import DesktopLayout from './layouts/Desktop'
import TabletLayout from './layouts/Tablet'
import MobileLayout from './layouts/Mobile'

export default function App() {
  const [isMiddleScreen, isLargeScreen] = useMediaQuery(
    ['(min-width: 768px)', '(min-width: 1280px)'],
    { ssr: false }
  )

  if (isLargeScreen) return <DesktopLayout />
  if (isMiddleScreen) return <TabletLayout />
  return <MobileLayout />
}
