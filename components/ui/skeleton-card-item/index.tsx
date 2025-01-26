import React from 'react';
import { View } from 'react-native';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';

const CardItemSkeleton = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
      {/* Bagian Kiri: Gambar dan Teks */}
      <View className="flex flex-row items-center gap-4">
        {/* Skeleton untuk Gambar */}
        <Skeleton className="w-12 h-12 rounded-full bg-background-200" isLoaded={false} />

        {/* Skeleton untuk Teks */}
        <View className="flex flex-col gap-1">
          <View className="flex flex-row items-center gap-1">
            <SkeletonText className="w-24 h-3 bg-background-200" isLoaded={false} />
            <SkeletonText className="w-20 h-3 bg-background-200" isLoaded={false} />
          </View>
          <SkeletonText className="w-28 h-3 bg-background-200" isLoaded={false} />
        </View>
      </View>

      {/* Bagian Kanan: Ikon Menu */}
      <View className="flex flex-row items-center gap-2">
        <Skeleton className="w-6 h-2 bg-background-200" isLoaded={false} />
      </View>
    </View>
  );
};

export default CardItemSkeleton;
