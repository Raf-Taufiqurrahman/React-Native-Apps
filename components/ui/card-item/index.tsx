import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import {
    EditIcon,
    Icon,
    TrashIcon,
    ThreeDotsIcon
  } from "@/components/ui/icon"
import { Menu, MenuItem, MenuItemLabel } from '../menu';
interface CardProps {
    data : {
        name: string;
        email: string;
        gender: string;
        image: string;
        departement: string;
    },
    modalDelete: () => void;
}

const CardItem = ({ data, modalDelete }: CardProps) => {
    return (
        <View className='w-full flex flex-row items-center justify-between p-4 bg-white rounded-lg border border-gray-200'>
            {/* Bagian Kiri : Gambar dan Teks */}
            <View className='flex flex-row items-center gap-4'>
                {/* Gambar */}
                <Image
                    size="sm"
                    source={{
                        uri: data.image,
                    }}
                    className='rounded-full'
                    alt="image"
                />

                {/* Teks */}
                <View className='flex flex-col gap-1'>
                    <View className='flex flex-row items-center gap-1'>
                        <Text className='font-semibold text-sm'>{data.name}</Text>
                        <Text className='text-sm text-gray-500'>({data.email})</Text>
                    </View>
                    <Text className='text-xs text-gray-400'>{data.departement} - {data.gender}</Text>
                </View>
            </View>
            
            {/* Bagian Kanan : Edit dan Hapus */}
            <View className='flex flex-row items-center gap-2'>
            <Menu
                placement="bottom right"
                offset={0}
                trigger={({ ...triggerProps }) => {
                    return (
                    <Button {...triggerProps} variant='outline'>
                        <Icon as={ThreeDotsIcon}/>
                    </Button>
                    )
                }}
            >
                <MenuItem key="edit" textValue='Edit'>
                    <Icon as={EditIcon} size='sm' className='mr-2'/>
                    <MenuItemLabel size='sm'>
                        Edit
                    </MenuItemLabel>
                </MenuItem>
                <MenuItem key="delete" textValue='delete' onPress={modalDelete}>
                    <Icon as={TrashIcon} size='sm' className='mr-2'/>
                    <MenuItemLabel size='sm'>
                        Delete
                    </MenuItemLabel>
                </MenuItem>
            </Menu>
            </View>
        </View>
    );
};

CardItem.displayName = 'CardItem';

export { CardItem };