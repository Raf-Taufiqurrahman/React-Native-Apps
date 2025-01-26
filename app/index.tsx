import React, { useState } from 'react';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Icon, SearchIcon, AddIcon  } from "@/components/ui/icon";
import { ScrollView, View, Text } from 'react-native';
import { CardItem } from '@/components/ui/card-item';
import { useGetUsersQuery } from '@/services/api';
import CardItemSkeleton from '@/components/ui/skeleton-card-item';
import { User } from '@/types/user';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const [search, setSearch] = useState('');

    const { data, error, isLoading, isFetching } = useGetUsersQuery(
        { name: search },
        { refetchOnFocus: true }
    );

    return (
      <SafeAreaView>
        <ScrollView>
          
        </ScrollView>
         <View className="w-full flex flex-row justify-between gap-2 bg-white border-t border-b border-gray-200 px-6 py-4 items-center">
          <Text className="text-xl font-bold text-center">Lists User</Text>
          <Link href="/create" className="rounded-full bg-rose-500 p-2">
            <Text>
              <Icon as={AddIcon} className="text-white" />
            </Text>
          </Link>
        </View>
        <ScrollView className='px-6 mb-20'>
            <View className='py-6'>
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
            </View>
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
      </SafeAreaView>
    );
}