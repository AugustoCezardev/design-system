import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@symple-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quos nemo ducimus architecto repudiandae vitae libero omnis, corrupti ea ipsum sunt quidem quo, corporis, nostrum quod est blanditiis voluptates.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
