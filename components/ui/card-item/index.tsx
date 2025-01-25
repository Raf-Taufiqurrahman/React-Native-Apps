import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import {
    EditIcon,
    Icon,
    TrashIcon,
  } from "@/components/ui/icon"
interface CardProps {
    data : {
        name: string;
        email: string;
        gender: string;
        image: string;
        departement: string;
    }
}

const CardItem = ({ data }: CardProps) => {
    return (
        <View className='w-full flex flex-row items-center justify-between p-4 bg-white rounded-lg border border-gray-200'>
            <View className='flex flex-row items-center gap-4'>
                <Image
                    size="sm"
                    source={{
                        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    }}
                    className='rounded-lg'
                    alt="image"
                />
                <View className='flex flex-col gap-1'>
                    <View className='flex flex-row items-center gap-1'>
                        <Text className='font-semibold text-sm'>{data.name}</Text>
                        <Text className='text-sm text-gray-500'>({data.email})</Text>
                    </View>
                    <Text className='text-xs text-gray-400'>{data.departement} - {data.gender}</Text>
                </View>
            </View>
            <View className='flex flex-row items-center gap-2'>
                <Link href='/(tabs)/users/create'>
                    <View>
                        <Icon as={EditIcon} className='text-gray-600 hover:text-gray-800' />
                    </View>
                </Link>
                <Button variant='link' className='p-0'>
                    <ButtonText>
                        <Icon as={TrashIcon} className='text-gray-600 hover:text-gray-800' />
                    </ButtonText>
                </Button>
            </View>
        </View>
    );
};

CardItem.displayName = 'CardItem';

export { CardItem };