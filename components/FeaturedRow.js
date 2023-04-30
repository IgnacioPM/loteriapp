import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color='#00ccbb' />
      </View>
      <Text className='text-xs px-4 text-gray-500'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id='12345'
          imgUrl='https://cdn.leonardo.ai/users/e1cd8a8b-d9fb-45eb-9cd5-82ed8b6e915a/generations/f0c70729-99b8-417a-b648-80eafc89beb5/Leonardo_Diffusion_Modern_mix_betwen_Venezuela_and_Italy_color_3.jpg'
          title='La Trattoria'
          rating={4.5}
          genre='Italian'
          address='123 Main St, Anytown, USA'
          short_description='Authentic Italian cuisine with a modern twist.'
          dishes={
            ([
              (names = 'Spaghetti Carbonara'),
              (price = '$16.99'),
              (description = 'Pasta with eggs, bacon, and Parmesan cheese.'),
            ],
            [
              (names = 'Margherita Pizza'),
              (price = '$12.99'),
              (description = 'Pizza with tomato sauce, mozzarella, and basil.'),
            ],
            [
              (names = 'Tiramisu'),
              (price = '$8.99'),
              (description =
                'Classic Italian dessert made with mascarpone cheese and ladyfingers.'),
            ])
          }
          long={-122.4194}
          lat={37.7749}
        />
        <RestaurantCard
          id='67890'
          imgUrl='https://cdn.leonardo.ai/users/d781d012-d243-4e44-8404-b6e8316f82ee/generations/ce661623-b445-4df5-ae28-38840e17b959/Leonardo_Diffusion_Perspective_view_of_a_delicious_Sushi_on_wo_0.jpg'
          title='Sushi Spot'
          rating={4.9}
          genre='Japanese'
          address='456 Oak St, Anytown, USA'
          short_description='Fresh and authentic sushi rolls, sashimi, and more.'
          dishes={
            ([
              (names = 'Dragon Roll'),
              (price = '$12.99'),
              (description = 'Shrimp tempura, avocado, and eel sauce.'),
            ],
            [
              (names = 'Spicy Tuna Roll'),
              (price = '$9.99'),
              (description = 'Tuna, spicy mayo, and cucumber.'),
            ],
            [
              (names = 'Miso Soup'),
              (price = '$3.99'),
              (description =
                'Traditional Japanese soup made with miso paste and tofu.'),
            ])
          }
          long={-122.4194}
          lat={37.7749}
        />

        <RestaurantCard
          id='56789'
          imgUrl='https://cdn.leonardo.ai/users/8a452e5e-3a9a-4985-b2f3-3340c502e5cd/generations/4abe8975-7e9b-4efc-952b-9b397c1bf27e/Leonardo_Diffusion_coffee_shop_photography_features_a_cozy_roo_1.jpg'
          title='The Ritz-Carlton'
          rating={4.8}
          type='Luxury Hotel'
          address='1234 Park Ave, New York, NY'
          short_description='Experience ultimate luxury in the heart of the city.'
          rooms={
            ([
              (names = 'Deluxe King Room'),
              (price = '$499'),
              (description =
                'Spacious room with a king-sized bed and a city view.'),
            ],
            [
              (names = 'Executive Suite'),
              (price = '$799'),
              (description =
                'Elegant suite with a separate living area and a park view.'),
            ],
            [
              (names = 'Presidential Suite'),
              (price = '$2,500'),
              (description =
                'The ultimate in luxury accommodations with multiple bedrooms, a private terrace, and panoramic city views.'),
            ])
          }
          long={-73.9654}
          lat={40.7829}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
