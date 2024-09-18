import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface IconButtonProps {
    onPress: () => void
    icon?: number
    text?: string
    tintColor?: string
}

const IconButton = ({icon, text, tintColor, onPress} : IconButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    className='items-center flex gap-2'
    >
        <Image
          source={icon}
            style={{ tintColor: tintColor }}
          className='w-8 h-8'
        />
        {text && <Text className='text-14 font-sansBold'>{text}</Text>}
    </TouchableOpacity>
  )
}

export default IconButton