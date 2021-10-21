import {
    CheckBox,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    View
} from "react-native";

import React, {useState, useEffect} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";
import {textInput, checkButton,checkButton2} from "../configs/FakeData";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import DropDownSelect from "../components/DropDownSelect";
import DropDownSelectPlace from "../components/DropDownSelectPlace";
import axios from "axios";

import CreatingPicker from "../components/CreatingTheOppertunitiesHR/CreatingPicker";
import * as ImagePicker from "expo-image-picker";


const CreatingTheOppertunitiesHR = ({navigation}) => {

    const [uploadedImage, setUploadedImage] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false);

    const [filterData, setFilterData] = useState("");

    const [checkedAreas, setCheckedAreas] = useState();

    const [checkedCity, setCheckedCity] = useState();
    const [cities, setCities] = useState([]);
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    const [checkedCategory, setCheckedCategory] = useState("");

    const [subCategories, setSubCategories] = useState([]);
    const [checkedSubCategory, setCheckedSubCategory] = useState([]);

    const [checkedOrganizations, setCheckedOrganizations] = useState([]);

    const [jobName, setJobName] = useState("");
    const [organization, setOrganization] = useState("");
    const [typeJob, setTypeJob] = useState("");
    const [genderType, setGenderType] = useState("");
    const [about, setAbout] = useState("");
    const [address, setAddress] = useState("");
    const [place, setPlace] = useState("");
    const [count, setCount] = useState("");
    const [hrName, setHrName] = useState("");
    const [hrPhone, setHrPhone] = useState("");
    const [hrMail, setHrMail] = useState("");
    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
            loadFilterData().then();
    }, []);


    useEffect(() => {
        getSubcategories(checkedCategory).then();
    }, [checkedCategory]);

    useEffect(() => {
        getCities(checkedAreas).then();
    }, [checkedAreas]);

    const getSubcategories = async(id) => {
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/libraries/category/${id}`;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

//            console.log("subcategories", response.data);
            setSubCategories(response.data);
        }).catch(error => console.log("subcategories", error));
    }


    const getCities = async(id) => {
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/libraries/cities/${id}`;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

//            console.log("subcategories", response.data);
            setCities(response.data);
        }).catch(error => console.log("subcategories", error));
    }

    const loadFilterData = async() => {
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/jobs/filter/getData`;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

//            console.log("GetData", response.data);
            setFilterData(response.data);
        }).catch(error => console.log("areasError", error));
    }


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult.uri);
        setUploadedImage(pickerResult.uri)
        setImageUploaded(true)
    }



    const createOpportunity = async () => {
            const url = `${JobUrl}/api/opportunity/2/store`
            // const token = await getUserToken()
            const token = await AsyncStorage.getItem('token') ;
            axios.post(url,
                {
                title: jobName,
                category_id: checkedCategory,
                subcategory_id: checkedSubCategory,
                organization_id: checkedOrganizations,
                route_id : [13,14,15],
                job_for: 'מיועד לבנים בלבד',
                description: about,
                area_id: checkedAreas,
                city_id: checkedCity,
                address: address,
                place: 'home',
                nucleus: 'כן',
                count: Number(count),
                how_to_sort: 'מיונים מוקדמים',
                images: '',
                video_url: '',
                last_date_for_registration: year + '-' + month + '-' + day,
                other_hr_name: hrName,
                other_hr_phone: hrPhone,
                },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`,
                    },
                }).then(response => {
                 console.log("createOpportunity", response);
            }).catch(error => console.log("createOpportunityError", error));

        }

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView>

                <View style={{paddingHorizontal: 32}}>

                    <View>
                        <LinearGradient colors={['#3CD0BD', '#219BA5']}
                                        style={styles.image}>

                        </LinearGradient>

                        <View style={[styles.buttonBoxMain]}>

                            <View style={[styles.buttonsBox]}>

                                <Text style={styles.topButtonUpText}>יצירת תקן</Text>
                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder = 'שם התקן '
                                        onChangeText={(text) => setJobName(text)}
                                    />
                                </View>
                                <DropDownSelect
                                    items = {filterData.categories}
                                    name = {'תחום שירות'}
                                    func = {setCheckedCategory}
                                />
                                <DropDownSelect
                                    items = {subCategories}
                                    name = {'תת תחום שירות'}
                                    func = {setCheckedSubCategory}
                                />
                                <DropDownSelect
                                    items = {filterData.organizations}
                                    name = {'עמותה'}
                                    func = {setCheckedOrganizations}
                                />

                                <View style={{height:20}}/>

                                <View style={styles.largeTextInput}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"תיאור התקן"}
                                        onChangeText={text => setAbout(text)}
                                    />
                                </View>
                                <DropDownSelect
                                    items = {filterData.areas}
                                    name = {'אזור בארץ'}
                                    func = {setCheckedAreas}
                                />
                                <DropDownSelect
                                    items = {cities}
                                    name = {'יישוב'}
                                    func = {setCheckedCity}
                                />


                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"כתובת"}
                                        onChangeText={text => setAddress(text)}
                                    />
                                </View>

                                {/*<DropDownSelectPlace
                                    items = {filterData.places}
                                    name = {'יישוב'}
                                    func = {setCheckedPlace}
                                /> */}


                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"מס תקנים בתפקיד"}
                                        onChangeText={text => setCount(text)}
                                        keyboardType={"numeric"}
                                    />
                                </View>



                            </View>

                            <View style={{alignItems: "center", marginBottom: 20}}>
                                <View style={styles.boxDateMainUpText}>
                                    <Text style={{fontSize:18,color:"#172c60",fontWeight:"bold"}}>תאריך אחרון להרשמה</Text>
                                </View>
                                <View style={styles.boxDateMain}>
                                    <View style={styles.boxDate}>
                                        <TextInput
                                            style={styles.boxDateText}
                                            placeholder={"30"}
                                             onChangeText={text => setDay(text)}
                                             defaultValue={'30'}
                                             keyboardType={"numeric"}
                                        />
                                    </View>
                                    <View style={styles.boxDate}>
                                        <TextInput
                                            style={styles.boxDateText}
                                            placeholder={"09"}
                                             onChangeText={text => setMonth(text)}
                                             defaultValue={'09'}
                                             keyboardType={"numeric"}
                                        />
                                    </View>
                                    <View style={styles.boxDate}>
                                        <TextInput
                                            style={styles.boxDateText}
                                            placeholder={"2021"}
                                             onChangeText={text => setYear(text)}
                                             defaultValue={'2021'}
                                             keyboardType={"numeric"}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{alignItems: "center", marginBottom: 10}}>
                                <View style={styles.boxDateMainUpText}>
                                    <Text style={{fontSize:18,color:"#172c60",fontWeight:"bold"}}>תאריך אחרון להרשמה</Text>
                                </View>

                                <View style={[styles.topButton,{backgroundColor:"#f4f4f4",borderColor: "#f4f4f4"}]}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"אביטל הרכזת"}
                                         onChangeText={text => setHrName(text)}
                                    />
                                </View>

                                <View style={[styles.topButton,{backgroundColor:"#f4f4f4",borderColor: "#f4f4f4"}]}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"054-54545454"}
                                         onChangeText={text => setHrPhone(text)}
                                         keyboardType={"numeric"}

                                    />
                                </View>

                                <View style={[styles.topButton,{backgroundColor:"#f4f4f4",borderColor: "#f4f4f4"}]}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"avital@rakezet.com"}
                                        onChangeText={text => setHrMail(text)}
                                    />
                                </View>




                            </View>






                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"רכזת פנימין של התקן"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>
                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"טלפון רכזת פנימית"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>

                            {/*<View style={styles.imageBottom}>*/}
                            {/*    <Image source={icons.CreatingTheOppertunitiesIcon} style={styles.CreatingTheOppertunitiesIcon}/>*/}
                            {/*    <Text style={styles.imageBottomText}>הוסף תמונה</Text>*/}
                            {/*</View>*/}


                            <TouchableOpacity onPress={openImagePickerAsync}>
                                <View style={{alignItems: "center"}}>
                                    {uploadedImage ?
                                        <View style={styles.imageBottom}>
                                            <Image source={{uri: uploadedImage}} style={styles.uploadedImage}/>
                                        </View>
                                         :
                                        <View style={styles.imageBottom}>
                                            <Image source={icons.CreatingTheOppertunitiesIcon} style={styles.CreatingTheOppertunitiesIcon}/>
                                            <Text style={styles.imageBottomText}>הוסף תמונה</Text>
                                        </View>


                                    }
                                </View>
                            </TouchableOpacity>

                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"טלפון רכזת פנימית"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>


                            <TouchableOpacity style={styles.downButton} onPress={()=>createOpportunity()}>
                                <Text style={styles.downButtonText}>פרסום התקן</Text>
                            </TouchableOpacity>

                            {/*<View style={{paddingHorizontal: 10}}>*/}

                            {/*</View>*/}

                        </View>


                        <View style={styles.groupPersonLogo}>
                            <View style={styles.circleLogoMidrashot}>
                                <Image source={icons.LogoMidrashot} style={styles.LogoMidrashot}/>
                            </View>
                        </View>

                    </View>


                </View>


            </ScrollView>
            <HrFooter navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 80,
        marginTop: 33,
    },
    buttonBoxMain: {
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
        top: -30,
        paddingBottom: 10,
    },

    buttonBox: {
        flex: 1,
        flexDirection: "row",
        // alignItems:"center",
        height: "50%",
        marginBottom: 10
    },
    buttonsBox: {
        alignItems: "center",
        paddingHorizontal: 10,
    },

    topButtonUpText: {
        fontSize: 18,
        color: "#172c60",
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 20
    },

    topButton: {
        borderColor: "rgba(31, 30, 29, 0.2)",
        borderWidth: 2,
        width: "100%",
        height: 45,
        borderRadius: 4,
        paddingHorizontal: "5%",
        justifyContent: "center",
        marginBottom: 18
    },

    topButtonText: {
        color: "#39496d",
        fontSize: 14,
        fontWeight: "100",
        textAlign: "right",
    },

    buttonText: {
        color: "#39496d",
        fontSize: 14,
        //fontWeight: "100",
        //textAlign:"right",
    },

    largeTextInput: {
        borderColor: "rgba(31, 30, 29, 0.2)",
        borderWidth: 2,
        width: "100%",
        height: 173,
        borderRadius: 4,
        paddingHorizontal: "5%",
        marginBottom: 18
    },

    boxDateMainUpText: {
        marginBottom: 15
    },

    boxDateMain: {
        flexDirection: "row",
        flex: 1,
        width: "100%"
    },

    boxDate: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#39496d",
        marginHorizontal: 10,
        height: 40
    },

    boxDateText: {
        color: "#172c60"
    },

    imageBottom: {
        marginBottom:20,
        alignItems:"center",
        width: "100%",
        height: 147,
        backgroundColor: "rgba(31, 30, 29, 0.12)",
        borderRadius:10
    },

    CreatingTheOppertunitiesIcon:{
        width: 105,
        height:95,
        marginTop:10,
        marginBottom:5
    },

    imageBottomText:{
        fontSize:22,
        color:"#fff",
        fontWeight:"bold"
    },

    downButton:{

        backgroundColor:"#30b8b2",
        width: "100%",
        height: 53,
        borderRadius: 4,
        paddingHorizontal: "5%",
        alignItems:"center",
        justifyContent: "center",
        marginBottom: 18
    },

    downButtonText:{
      color:"#fefeff",
        fontSize:18,
        fontWeight:"bold",
    },


    groupPersonLogo: {
        top: 60,
        alignItems: "center",
        position: "absolute",
        width: "100%",

    },

    circleLogoMidrashot:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        elevation: 5,
    },

    checkbox: {
        borderRadius:5,
    },

    LogoMidrashot: {
        width: 36,
        height: 36
    },





})

export default CreatingTheOppertunitiesHR