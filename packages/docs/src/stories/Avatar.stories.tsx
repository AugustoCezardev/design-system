import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@symple-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/AugustoCezardev.png',
    alt: 'Avatar',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
