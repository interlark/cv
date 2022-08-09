import { createIcon } from '@chakra-ui/react'

/** Flags icons */

export const RussiaFlagIcon = createIcon({
  path: (
    <g>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#0039a6" d="M0 160h640v320H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />
    </g>
  ),
  viewBox: '0 0 640 480',
  displayName: 'Russia Flag Icon'
})

export const GreatBritainFlagIcon = createIcon({
  path: (
    <g>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </g>
  ),
  viewBox: '0 0 640 480',
  displayName: 'Great Britain Flag Icon'
})
