import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGetUserByIdQuery } from "@/services/api";
import { Link } from "expo-router";
import { Icon, ArrowLeftIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import UserDetailSkeleton from "@/components/ui/skeleton-user-detail"; 

export default function UserDetail() {
  const { id } = useLocalSearchParams();

  const { data: user, error, isLoading, isFetching } = useGetUserByIdQuery(id);

  return (
    <SafeAreaView>
      <View className="w-full flex flex-row justify-between gap-2 bg-white border-t border-b border-gray-200 px-6 py-4 items-center">
        <Link href="/" className="rounded-full bg-rose-500 p-2">
          <Text>
            <Icon as={ArrowLeftIcon} className="text-white" />
          </Text>
        </Link>
        <Text className="text-xl font-bold text-center">Detail User</Text>
      </View>

      {isLoading || isFetching ? (
        <UserDetailSkeleton />
      ) : error ? (
        <Text className='text-red-500 text-center'>Something went wrong</Text>
      ) : (
        <View className="py-6 px-4 w-full flex items-center justify-center bg-white">
          <Image
            size="xl"
            source={{
              uri: user.data.image,
            }}
            className="rounded-full border border-gray-200 p-4 bg-gray-50"
            alt="image"
          />
          <View className="flex flex-col w-full py-6">
            <View className="flex flex-row justify-between border-b border-gray-200 p-4">
              <Text className="text-md font-semibold text-gray-500">Name</Text>
              <Text className="text-md font-semibold text-gray-500">{user.data.name}</Text>
            </View>
            <View className="flex flex-row justify-between border-b border-gray-200 p-4">
              <Text className="text-md font-semibold text-gray-500">Email</Text>
              <Text className="text-md font-semibold text-gray-500">{user.data.email}</Text>
            </View>
            <View className="flex flex-row justify-between border-b border-gray-200 p-4">
              <Text className="text-md font-semibold text-gray-500">Gender</Text>
              <Text className="text-md font-semibold text-gray-500">{user.data.gender}</Text>
            </View>
            <View className="flex flex-row justify-between border-b border-gray-200 p-4">
              <Text className="text-md font-semibold text-gray-500">Department</Text>
              <Text className="text-md font-semibold text-gray-500">{user.data.departement}</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}