import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          imgUrl='https://cdn.leonardo.ai/users/3eb5e832-b283-458b-9ffb-43de268d72af/generations/b57fa4aa-c8ff-4318-8aae-d4156fd9e8de/Food_Advertising_Photography_food_photography_photo_of_rounde_5.jpg'
          title='Cat #1'
        />
        <CategoryCard
          imgUrl='https://cdn.leonardo.ai/users/0baf2b2b-b04c-4aa4-a44f-71bc52375cb1/generations/5b916f58-22b7-4081-be27-666d114841a7/Leonardo_Diffusion_Food_Photography_of_a_Coffee_with_coconut_c_2.jpg'
          title='Cat #2'
        />
        <CategoryCard
          imgUrl='https://cdn.leonardo.ai/users/0df0ce4f-f381-41fc-9525-40f7d0669820/generations/61d7a4bd-3e82-4252-8605-10695ef1e21f/Leonardo_Diffusion_Food_Photography_of_a_salad_only_Studio_Lig_0.jpg'
          title='Cat #3'
        />
        <CategoryCard
          imgUrl='https://cdn.leonardo.ai/users/dd5770f8-9558-460a-a91a-690c55774775/generations/83d398d7-d1e2-451c-b95a-679d7172eeb4/variations/Default_food_photography_photo_of_cheese_cake_8k_mint_leaves_c_0_83d398d7-d1e2-451c-b95a-679d7172eeb4_1.jpg?w=512'
          title='Cat #4'
        />
        <CategoryCard
          imgUrl='https://cdn.leonardo.ai/users/0baf2b2b-b04c-4aa4-a44f-71bc52375cb1/generations/5052cb50-fc1f-4b87-9b55-64cc9ba9fdb3/Leonardo_Diffusion_Food_Photography_of_a_Coconut_smoothie_with_0.jpg'
          title='Cat #5'
        />
      </ScrollView>
    )
  }
}

export default Categories
