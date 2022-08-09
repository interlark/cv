import { Tag, TagLabel } from '@chakra-ui/react'
import { getIcon } from '../icons/TechStacks'

export default function TechStackTag({ name, children, ...props }) {
  return (
    <Tag
      size="md"
      colorScheme="blue"
      variant="outline"
      minHeight="1.3rem"
      {...props}
    >
      {getIcon({ name, props: { verticalAlign: 'top', marginEnd: '0.5rem' } })}
      <TagLabel>{name}</TagLabel>
    </Tag>
  )
}
