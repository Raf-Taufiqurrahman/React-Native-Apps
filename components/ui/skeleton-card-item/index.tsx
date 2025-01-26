import React from 'react';
import { View } from 'react-native';
import { Skeleton, SkeletonText } from '../skeleton'

const CardItemSkeleton = () => {
  return (
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' }}>
      {/* Bagian Kiri: Gambar dan Teks */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        {/* Skeleton untuk Gambar */}
        <Skeleton
            style={{ width: 48, height: 48, borderRadius: 8 }}
            startColor="bg-background-200"
            isLoaded={false}
        />

        {/* Skeleton untuk Teks */}
        <View style={{ flexDirection: 'column', gap: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <SkeletonText
                style={{ width: 100, height: 14 }}
                startColor="bg-background-200"
                isLoaded={false}
            />
            <SkeletonText
                style={{ width: 80, height: 14 }}
                startColor="bg-background-200"
                isLoaded={false}
            />
          </View>
            <SkeletonText
                style={{ width: 120, height: 12 }}
                startColor="bg-background-200"
                isLoaded={false}
            />
        </View>
      </View>

      {/* Bagian Kanan: Ikon Edit dan Hapus */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Skeleton
          style={{ width: 24, height: 24, borderRadius: 12 }}
          startColor="bg-background-200"
          isLoaded={false}
        />
        <Skeleton
          style={{ width: 24, height: 24, borderRadius: 12 }}
          startColor="bg-background-200"
          isLoaded={false}
        />
      </View>
    </View>
  );
};

export default CardItemSkeleton;