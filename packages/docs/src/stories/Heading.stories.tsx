import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@symple-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Tag',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Descrição da documanetaçao',
      },
    },
  },
}
