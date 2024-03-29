import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import { useNavigation } from '@react-navigation/native';

const ALL = 'All';

const Home = () => {   //({navigation})  props
    const navigation = useNavigation(); //hooks
    const [selectedCategory, setSelectedCategory] = useState(ALL)

    const [data, setData] = useState([]);

    useEffect(() => {
      console.log('jsonData :>>', jsonData);
      setData(jsonData);
      
      console.log('Home', Home)
    }, []);

    useEffect(() => {
      if (selectedCategory === ALL) {
          setData(jsonData)
      } else{
        const filterData = jsonData?.filter(item => item?.categories?.includes(selectedCategory))
        setData(filterData);
      }
    }, [selectedCategory])
    
  
  return (
    <SafeAreaView style={styles.container}>    
            <FlatList
                data={data}
                numColumns={2}
                style={{flexGrow:1}}
                ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                ListHeaderComponent={(
                    <>
                    <View style={{margin:32 }}>
                      <Title text='Where do' style={{fontWeight:'normal'}}/>
                      <Title text='you want to go'/>

                      <Title text='Explore Attraction' style={styles.subtitle}/>
                    </View>

                      <Categories  
                          selectedCategory={selectedCategory} 
                          onCategoryPress = {setSelectedCategory} 
                          categories={[ALL, ... categories]}
                      />
                    </>
                )}
                keyExtractor={(item) => String(item?.id)}
                renderItem={({item, index}) => (
                  <AttractionCard
                  key={item.id}
                  title={item.name}
                  subtitle={item.city}
                  imgSrc={item.images?.length ? item.images[0] : null}
                  onPress={() => navigation.navigate('AttractionDetails', {item})}
                  style={index % 2 === 0 
                    ? {marginRight: 12 , marginLeft: 32} 
                    : {marginRight:32}}
                  /> 
                )}

            />

    </SafeAreaView>
  )
}

export default React.memo(Home);


          {/* 
            <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={styles.row} >
              {[...data,...data]?.map((item,index) => (
                <AttractionCard
                key={item.id}
                title={item.name}
                subtitle={item.city}
                imgSrc={item.images?.length ? item.images[0] : null}
                style={index % 2 === 0 ? {marginRight: 12 } : {}}
                />  
              ))}
            </ScrollView> */}



            {/* <View style={styles.row}>  
            <AttractionCard
              title="Taj mahal" 
              subtitle='Rome'
              imgSrc='https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg' 
            />
            <AttractionCard
              title="Taj mahal" 
              subtitle='Rome'
              imgSrc='https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg' 
            />
            </View> */}
  