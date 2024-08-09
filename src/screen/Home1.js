import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'



const home1 = () => {



  const [city, setcity] = useState('Lahore');
  const [data, setdata] = useState([]);

  useEffect(() => {
    currentweather()
  }, [])


  const API_KEY = '95d830dc7c078a39ce96b687abe044dc'
  const currentweather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    setdata(json)
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#0044A4', padding: 20 }}>



      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ gap: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../img/map.png')} />
          <Text style={{ fontSize: 20, color: 'white' }}>Fortaleza</Text>
          <Image source={require('../img/downArrow.png')} />
        </View>

        <View>
          <Image source={require('../img/bell.png')} />
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'lightblue',
        marginTop: 20,
        borderRadius: 20,
        padding: 5,
        shadowOpacity: 10,
        elevation: 5,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between'



      }}>
        <TextInput
          style={{ width: '90%' }}
          placeholder=''
          value={city}
          onChangeText={(text) => setcity(text)}
        />
        <TouchableOpacity
          style={{ marginRight: 10, }}
          onPress={currentweather}
        >
          <AntDesign
            name='search1'
            size={30}

          />
        </TouchableOpacity>
      </View >
      <ScrollView>


        <View style={{ alignItems: 'center' }}>
          <Image source={require('../img/rainsunCloud.png')} />
        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
          <FlatList
            data={[data]}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 10, color: 'white', alignSelf: 'center' }}> {parseInt(item?.main?.temp)}°C
                  </Text>
                </View>
              )
            }
            }
          />
        </View>


        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white' }} >Precipitations</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white' }} > Max.: 31º   Min.: 25º</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 15,
          alignSelf: 'center',
          paddingHorizontal: '5%',
          backgroundColor: '#016393',
          borderRadius: 25,
          padding: 10,
          justifyContent: 'space-evenly',
          gap: 10

        }}>
          <View
            style={{
              paddingHorizontal: '5%',
              backgroundColor: '#00A2D3',
              borderRadius: 15,
              padding: 5,
              flexDirection: 'row',
              gap: 5
            }}>
            <Image source={require('../img/rain.png')} />
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold', }}>6%</Text>

          </View >
          <View
            style={{
              paddingHorizontal: '5%',
              backgroundColor: '#00A2D3',
              borderRadius: 15,
              padding: 5,
              flexDirection: 'row',
              gap: 5
            }} >
            <Image source={require('../img/temp.png')} />
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold', }}>19%</Text>
          </View>
          <View
            style={{
              paddingHorizontal: '2%',
              backgroundColor: '#00A2D3',
              borderRadius: 15,
              padding: 5,
              flexDirection: 'row',
              gap: 5,
              shadowOpacity: 10,
              elevation: 10,
            }} >
            <Image source={require('../img/air.png')} />
            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold', }}>19 km/h</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            width: '90%',
            height: '20%',
            backgroundColor: '#005FE5',
            alignSelf: 'center',
            borderRadius: 25,
            padding: 10,
            shadowOpacity: 20,
            elevation: 10,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>Today</Text>
            <Text style={{ color: 'white', fontSize: 20, }}>Mar,19</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            alignSelf: 'center',
            gap: 20

          }}>


            <View style={{
              height: '70%',
              width: '19%',
              // backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 5

            }}>
              <Text style={{ color: 'white', fontSize: 17, }}>29°C</Text>
              <View>
                <Image source={require('../img/sunCloud.png')} />
              </View>
              <Text style={{ color: 'white', fontSize: 17, }}>17:00</Text>

            </View>
            <View style={{
              height: '70%',
              width: '19%',
              // backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 5

            }}>
              <Text style={{ color: 'white', fontSize: 17, }}>26°C</Text>
              <View>
                <Image source={require('../img/sunCloud.png')} />
              </View>
              <Text style={{ color: 'white', fontSize: 17, }}>16:00</Text>

            </View>
            <View style={{
              height: '70%',
              width: '19%',
              // backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 5

            }}>
              <Text style={{ color: 'white', fontSize: 17, }}>24°C</Text>
              <View>
                <Image source={require('../img/sunCloud.png')} />
              </View>
              <Text style={{ color: 'white', fontSize: 17, }}>17:00</Text>

            </View>
            <View style={{
              height: '70%',
              width: '19%',
              // backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 5

            }}>
              <Text style={{ color: 'white', fontSize: 17, }}>23°C</Text>
              <View>
                <Image source={require('../img/sunCloud.png')} />
              </View>
              <Text style={{ color: 'white', fontSize: 17, }}>18:00</Text>

            </View>


          </View>


        </View>


        <View
          style={{
            marginTop: 15,
            width: '90%',
            height: '28%',
            backgroundColor: '#005FE5',
            alignSelf: 'center',
            borderRadius: 25,
            padding: 15,
            shadowOpacity: 20,
            elevation: 10,
          }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, }}>Next Forecast</Text>
            <Image source={require('../img/calender.png')} />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center'
          }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>Monday</Text>
            <Image source={require('../img/rainbig.png')} />
            <Text style={{ color: 'white', fontSize: 15, }}>13°C  10°C</Text>

          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center'
          }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>Tuesday</Text>
            <Image source={require('../img/thunder.png')} />
            <Text style={{ color: 'white', fontSize: 15, }}>17°C  12°C</Text>

          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center'
          }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>Wednesday</Text>
            <Image source={require('../img/rainbig.png')} />
            <Text style={{ color: 'white', fontSize: 15, }}>15°C  11°C</Text>

          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center'
          }} >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>Thursday</Text>
            <Image source={require('../img/rainbig.png')} />
            <Text style={{ color: 'white', fontSize: 15, }}>19°C  14°C</Text>

          </View>



        </View>
      </ScrollView>


    </View >
  )
}

export default home1