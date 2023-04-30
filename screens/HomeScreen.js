import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, View, Text, ScrollView } from 'react-native'
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import { TextInput } from 'react-native'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
      <SafeAreaView className='bg-white pt-5'>
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
          <Image
            source={{
              uri: 'https://cdn.leonardo.ai/users/fee216ae-7a80-4f0a-8403-1ef1ae06efd3/generations/b37d43ab-9ffd-42f0-969b-3c341ea2e254/variations/Default_hackercat_using_a_black_hoodie_white_background_roarin_1_b37d43ab-9ffd-42f0-969b-3c341ea2e254_1.jpg',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className='flex-1'>
            <Text className='text-gray-400 font-bold text-xs'>
              Deliver now!
            </Text>
            <Text className='font-bold text-xl'>
              Current location
              <ChevronDownIcon size={20} color='#00ccbb' />
            </Text>
          </View>
          <UserIcon size={35} color='#00ccbb' />
        </View>

        <View className='flex-row items-center space-x-2 pb-2 px-4'>
          <View className='flex-1 flex-row space-x-2 bg-gray-200 p-3 items-center rounded-sm'>
            <MagnifyingGlassIcon color='#00ccbb' size={20} />
            <TextInput
              placeholder='Restaurants and cousins'
              keyboardType='default'
            />
          </View>
          <AdjustmentsVerticalIcon color='#00ccbb' />
        </View>
      </SafeAreaView>

      <ScrollView>
        <Categories />
        <FeaturedRow
          id='123'
          title='Summer Savings'
          description='Cool off with these hot summer discounts!'
          featuredCategory='Savings'
        />
        <FeaturedRow
          id='124'
          title='Healthy Habits'
          description='Make healthy living a habit with these discounts!'
          featuredCategory='Health'
        />
        <FeaturedRow
          id='125'
          title='Tech Deals'
          description='Upgrade your tech game with these amazing deals!'
          featuredCategory='Technology'
        />
        <FeaturedRow
          id='126'
          title='Fashion Frenzy'
          description='Get your fashion fix with these unbeatable discounts!'
          featuredCategory='Fashion'
        />
        <FeaturedRow
          id='127'
          title='Gourmet Delights'
          description='Indulge in these gourmet treats at a discount!'
          featuredCategory='Food'
        />
      </ScrollView>
    </>
  )
}

export default HomeScreen
