import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '@/components/ui/skeleton';

const UserDetailSkeleton = () => {
  return (
    <View className="py-6 px-4 w-full flex items-center justify-center bg-white">
      {/* Skeleton untuk gambar */}
      <Skeleton className="w-32 h-32 rounded-full border border-gray-200 p-4 bg-gray-50" />

      {/* Skeleton untuk detail user */}
      <View className="flex flex-col w-full py-6">
        <View className="flex flex-row justify-between border-b border-gray-200 p-4">
          <Skeleton className="w-20 h-4 bg-gray-200" />
          <Skeleton className="w-32 h-4 bg-gray-200" />
        </View>
        <View className="flex flex-row justify-between border-b border-gray-200 p-4">
          <Skeleton className="w-20 h-4 bg-gray-200" />
          <Skeleton className="w-32 h-4 bg-gray-200" />
        </View>
        <View className="flex flex-row justify-between border-b border-gray-200 p-4">
          <Skeleton className="w-20 h-4 bg-gray-200" />
          <Skeleton className="w-32 h-4 bg-gray-200" />
        </View>
        <View className="flex flex-row justify-between border-b border-gray-200 p-4">
          <Skeleton className="w-20 h-4 bg-gray-200" />
          <Skeleton className="w-32 h-4 bg-gray-200" />
        </View>
      </View>
    </View>
  );
};

export default UserDetailSkeleton;