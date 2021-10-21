import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";

const SortQuiz = () => {
    const [answer, setAnswer] = useState(1);
    return (
        <View style={{marginVertical: "14%"}}>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 1 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(1)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 1 ? "#172C60" : "white"}]}>
                        {answer === 1 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{color: answer === 1 ? "white" : "black"}}>TEsxTextText</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 2 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(2)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 2 ? "#172C60" : "white"}]}>
                        {answer === 2 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{color: answer === 2 ? "white" : "black"}}>TEsxTextText</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 3 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(3)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 3 ? "#172C60" : "white"}]}>
                        {answer === 3 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{color: answer === 3 ? "white" : "black"}}>TEsxTextText</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 4 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(4)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 4 ? "#172C60" : "white"}]}>
                        {answer === 4 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{color: answer === 4 ? "white" : "black"}}>TEsxTextText</Text>
            </LinearGradient>

            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 5 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(5)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 5 ? "#172C60" : "white"}]}>
                        {answer === 5 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{color: answer === 5 ? "white" : "black"}}>TEsxTextText</Text>
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        borderColor: "#30B8B2",
        borderWidth: 2,
        justifyContent: 'center',
    },

    checkBox_image: {
        width: 15,
        height: 11,
        alignSelf: "center",
    },

    checkBoxBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 16,
        borderColor: "#30B8B2",
        borderRadius: 4,
        borderWidth: 2,
        paddingVertical: "3%",
    }

});


export default SortQuiz
