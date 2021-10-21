import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import React from "react";
import {icons} from "../configs/imagesAndIconsUrl"


const MessagesBlock = ({item}) => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.messagesRow}>
                    <View style={[styles.messageIconBlock, {backgroundColor: item.seen ? "#c3c8d3" : "#2b3e6e"}]}>
                        <Image source={icons.messagesWhiteBlue} style={styles.messageIcon}/>
                        {item.messagesCount ?
                            <View style={styles.messagesCount}>
                                <Text style={styles.countText}>{item && item.messagesCount}</Text>
                            </View>
                            :
                            <View/>
                        }
                    </View>
                    <View style={styles.userInfoBlock}>
                        <View style={{paddingRight: 18}}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.smallTitle}>{item.smallTitle}</Text>
                        </View>
                        <View>
                            <Image source={icons.noPhoto} style={styles.userImage}/>
                        </View>
                    </View>
                </View>
                {/*<TouchableOpacity>*/}
                {/*    <View style={styles.saveBtn}>*/}
                {/*        <Image source={icons.arrowLeft} style={styles.arrowIcon}/>*/}
                {/*        <Text style={{paddingHorizontal: 7}}/>*/}
                {/*        <Text style={styles.saveBtnText}>כניסה להתכתבות</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
            </View>
            <View style={styles.borderBottom}/>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        paddingTop: 33,
        paddingBottom:37
    },

    messageIconBlock: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },

    userInfoBlock: {
        flexDirection: "row",
    },

    messageIcon: {
        width: 21,
        height: 14
    },

    messagesRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title: {
        color: "#172c60",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right"
    },

    smallTitle: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
    },

    userImage: {
        width: 50,
        height: 50
    },

    saveBtn: {
        alignItems: "center",
        backgroundColor: "#30b8b2",
        borderRadius: 4,
        marginTop: 27,
        marginBottom: 33,
        flexDirection: "row",
        justifyContent: "center"
    },

    saveBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 20
    },

    borderBottom: {
        borderBottomColor: "#2b3e6e",
        borderBottomWidth: 1,
    },

    arrowIcon: {
        width: 15,
        height: 15
    },

    messagesCount: {
        position: "absolute",
        top: 30,
        left: 30,
        backgroundColor: "#52c4bf",
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    countText: {
        color: "white",
        fontWeight: "800"
    }

});


export default MessagesBlock
