import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function AppLayout({ children } : { children: React.ReactNode }) {
  return (
    <View className="w-full py-8 px-6 min-h-screen">
        <View className='flex-1'>
            <View className='flex flex-row w-full'>
                <Link href='/(tabs)/users/create' className='flex-1 px-4 py-2 bg-white rounded-lg rounded-r-none text-center border border-gray-200'>
                    <Text>Create</Text>
                </Link>
                <Link href="/(tabs)/users" className='flex-1 px-4 py-2 bg-white rounded-lg rounded-l-none border-l-0 text-center border border-gray-200'>
                    <Text>Lists</Text>
                </Link>
            </View>
            <View className='py-6'>
                {children}
            </View>
        </View>
    </View>
  )
}