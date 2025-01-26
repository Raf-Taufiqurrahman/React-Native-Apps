import React, { useState } from 'react';
import AppLayout from '@/components/layouts/app-layout';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Icon, SearchIcon } from "@/components/ui/icon";
import { ScrollView, View, Text } from 'react-native';
import { CardItem } from '@/components/ui/card-item';
import { useGetUsersQuery } from '@/services/api';
import CardItemSkeleton from '@/components/ui/skeleton-card-item';
import { User } from '@/types/user';

export default function Index() {
    const [search, setSearch] = useState('');

    const { data, error, isLoading, isFetching } = useGetUsersQuery(
        { name: search },
        { refetchOnFocus: true }
    );

    console.log(error);

    return (
        <AppLayout>
            <Input className='bg-white rounded-lg border-gray-200'>
                <InputField
                    placeholder='Search users by name'
                    value={search}
                    onChangeText={(text) => setSearch(text)} // Update state saat mengetik
                />
                <InputSlot>
                    <Icon as={SearchIcon} className="text-typography-500 m-2 w-4 h-4" />
                </InputSlot>
            </Input>

            <ScrollView className='py-6'>
                <View className='flex flex-col gap-4'>
                    {isLoading || isFetching ? (
                        // Tampilkan beberapa skeleton saat loading
                        Array.from({ length: 5 }).map((_, index) => (
                            <CardItemSkeleton key={index} />
                        ))
                    ) : error ? (
                        <Text className='text-red-500 text-center'>Something went wrong</Text>
                    ) : data?.data?.length > 0 ? (
                        // Tampilkan data yang diterima dari server
                        data.data.map((user: User, index: number) => (
                            <CardItem data={user} key={index} />
                        ))
                    ) : (
                        // Tampilkan pesan jika tidak ada data
                        <Text className='text-gray-500 text-center'>No users found.</Text>
                    )}
                </View>
            </ScrollView>
        </AppLayout>
    );
}