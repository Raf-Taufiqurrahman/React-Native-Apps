import React from 'react';
import AppLayout from '@/components/layouts/app-layout';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import {
    Icon,
    SearchIcon,
  } from "@/components/ui/icon"
import { ScrollView, View } from 'react-native';
import { CardItem } from '@/components/ui/card-item';
export default function index() {

    const users = [
            {
            "name": "angko",
            "email": "email@team.com",
            "gender": "MALE",
            "departement": "I",
            "image": "https://pixlr.com/image-generator/",
            },
            {
            "name": "angko",
            "email": "email@angko.com",
            "gender": "MALE",
            "departement": "IT",
            "image": "https://pixlr.com/image-generator/",
            },
            {
            "name": "mesias",
            "email": "email@angko.com",
            "gender": "MALE",
            "departement": "IT",
            "image": "https://pixlr.com/image-generator/",
            },
    ]
    return (
        <AppLayout>
            <Input className='bg-white rounded-lg border-gray-200'>
                <InputField placeholder='Search users by name'/>
                <InputSlot>
                    <Icon as={SearchIcon} className="text-typography-500 m-2 w-4 h-4"/>
                </InputSlot>
            </Input>
            <ScrollView className='py-6'>
                <View className='flex flex-col gap-4'>
                    {users.map((user, index) => (
                        <CardItem data={user} key={index}/>
                    ))}
                </View>
            </ScrollView>
        </AppLayout>
    );
}