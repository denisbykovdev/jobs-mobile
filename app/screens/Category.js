import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    View,
    AsyncStorage
} from "react-native";
import Header from "../components/Header";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect, useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const Category = ({navigation}) => {

    const [respData, setRespData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            // const token = await getUserToken();
            const token = await AsyncStorage.getItem('token');
            const url = `${JobUrl}/api/libraries/categories`;
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {

                console.log("categories", response.data && response.data.data);
                setRespData(response.data && response.data.data)


            }).catch(error => console.log("categories", error));
        }
        fetchData().then()
    }, [])


    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Header navigation={navigation}/>
            <ScrollView style={{flex: 1, algorithm: "center",}}>
                <View style={{paddingHorizontal: 32}}>
                    <View style={styles.textBoxUp}>
                        <Image source={icons.testUp} style={{width: 100, height: 80}}/>
                        <Text style={styles.boxUpText}>קטלוג תחומים</Text>
                        <Image source={icons.testupRight2} style={{width: 106, height: 76}}/>
                    </View>
                    {respData &&
                    <View style={styles.boxDown}>
                        {
                            respData && respData.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={()=>navigation.navigate("Organization",{id:item.id})}>
                                        <ImageBackground source={images.CatalogueBox} style={styles.CatalogueBox}>
                                            <Text style={{color: "#fff", fontWeight: "bold"}}>{item.name}</Text>
                                            <Image  source={{
                                                uri: item.icon,
                                            }} style={{width:"20%",height: "25%"}}/>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                )

                            })
                        }


                    </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textBoxUp: {
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between"
    },

    boxUpText: {
        position: "absolute",
        color: "#172c60",
        fontSize: 30,
        marginLeft: "15%",
        fontWeight: "bold"
    },

    CatalogueBox: {
        width: 155,
        height: 123,
        alignItems: 'center',
        justifyContent: "space-around",
        marginBottom:21
    },

    boxDown: {
        flexDirection: "row-reverse",
        marginTop: 25,
        flexWrap:"wrap",
        justifyContent:"space-around",
    }


})

export default Category
