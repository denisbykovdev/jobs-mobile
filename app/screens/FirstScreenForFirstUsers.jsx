import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Text, View, Image } from 'react-native';
import { icons, images, SH } from "../configs/imagesAndIconsUrl";
import { useNavigation, useRoute } from '@react-navigation/native';
import { LogoHorizontalWhite } from '../icons/LogoHorizontalWhite';
import IconLineWrapper from '../commons/IconLineWrapper';
import IconTest from '../icons/IconTest';
import BIGICON from '../icons/BIGICON';
import colors from '../utils/colors'
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import { responsiveWidth } from '../utils/layout';
import CommonButton from '../commons/CommonButton';

const FirstScreenForFirstUsers = () => {
    const route = useRoute()

    const navigation = useNavigation()

    console.log("--- FirstScreenForFirstUsers", route.params)

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View
                style={styles.container}
            >
                <ImageBackground
                    source={images.firstScreenBg}
                    style={styles.image}
                >
                    <View
                        style={styles.horizontalLogo}
                    >
                        <LogoHorizontalWhite />
                    </View>
                    <View style={styles.bgMainText}>
                        <IconLineWrapper>
                            <IconTest />
                        </IconLineWrapper>
                        <View style={styles.textBlock}>
                            <Text style={styles.smallTitle}>שאלון</Text>
                            <Text style={styles.bigTitle}>אישיות</Text>
                        </View>
                    </View>
                    <View style={styles.girlIcon}>
                        <BIGICON />
                    </View>
                    <View style={styles.questionTextBlock}>
                        <Text style={styles.numberStyles}>10</Text>
                        <Text style={styles.smallTitle}>שאלות</Text>
                    </View>
                </ImageBackground>
                <View style={{ paddingHorizontal: responsiveWidth(17.5) }}>
                    <View>
                        <Image source={icons.testUp} style={styles.imageBgUp} />
                        <Text style={styles.questionText}>
                            אנו רוצים להציג לך את התקנים המתאימים לך ביותר. התחילי עם .השאלון שלנו, הוא ייתן לך כיוון טוב
                        </Text>
                        <Image source={icons.testDown} style={styles.imageBgDown} />
                    </View>
                    <View>
                        <CommonButton
                            title="קדימה, לשאלון"
                            onPress={() => navigation.navigate('Quiz')}
                            buttonHeight={responsiveWidth(26.5)}
                            buttonStyle={{
                                marginTop: responsiveWidth(6.5 + 12)
                            }}
                        />
                        <CommonButton
                            title="בפעם אחרת"
                            onPress={() => navigation.navigate("User", { isBlog: true })}
                            buttonHeight={responsiveWidth(26.5)}
                            buttonColor={colors.whiteTwo}
                            titleColor={colors.darkSlateBlue}
                            borderColor={colors.tealGreen}
                            buttonStyle={{
                                marginTop: responsiveWidth(6.5)
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginBottom: responsiveWidth(40)
    },
    image: {
        flex: 1,
        height: responsiveWidth(273),
    },
    horizontalLogo: {
        alignItems: "center",
        marginTop: responsiveWidth(20),
        marginBottom: responsiveWidth(42.5)
    },
    textBlock: {
        alignItems: "center",
        marginTop: responsiveWidth(8)
    },
    smallTitle: {
        color: colors.whiteTwo,
        fontSize: fonts.xxsmall,
        fontWeight: weights.bold
    },
    bigTitle: {
        color: colors.whiteTwo,
        fontSize: fonts.xlarge,
        fontWeight: weights.bold
    },
    girlIcon: {
        position: "absolute",
        top: "63%",
        left: "33%"
    },
    questionTextBlock: {
        alignItems: "center",
        position: "absolute",
        top: "87%",
        left: "46%"
    },
    numberStyles: {
        color: colors.whiteTwo,
        fontWeight: weights.bold,
        fontSize: fonts.semilarge
    },
    imageBgUp: {
        width: 106,
        height: 86,
        position: "absolute",
        left: 0,
        top: 0
    },
    questionText: {
        color: colors.darkSlateBlue,
        marginTop: responsiveWidth(33.5),
        fontSize: fonts.small,
        fontWeight: weights.bold,
        textAlign: "center",
        paddingHorizontal: responsiveWidth(16)
    },
    imageBgDown: {
        width: 106,
        height: 86,
        position: "absolute",
        right: 0,
        top: "60%"
    }
});

export default FirstScreenForFirstUsers
