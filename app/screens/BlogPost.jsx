import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { watchGetPost, watchLikeUnlikePost } from '../actions/blogsActions';
import CommonFrame from '../commons/CommonFrame';
import useSecure from '../hooks/useSecure';
import Header from "../components/Header";
import DotsTitle from '../commons/DotsTitle';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { url } from '../utils/api';
import layout, { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import stringSlicer from '../helpers/stringSlicer';
import VideoPlayer from '../commons/VideoPlayer';
import Carousel from 'react-native-snap-carousel';
import ArrowL13 from '../icons/ArrowL13';
import ArrowR13 from '../icons/ArrowR13';
import { MaterialIcons } from '@expo/vector-icons';
import ScrollToTopButton from '../commons/ScrollToTopButton';
import Like from '../icons/Like';
import LikeButton from '../commons/LikeButton';
import ShareButton from '../commons/ShareButton';
import useStatusBar from '../hooks/useStatusBar';

export default function BlogPost() {
    useStatusBar('dark-content', colors.white)

    const carouselRef = useRef()

    const [selectedPost, setSelectedPost] = useState(null)

    const { secure: secureToken } = useSecure(`token`)

    const blogsSelector = useSelector(state => state.blogs.blogs)

    const route = useRoute()

    const { post_id } = route.params

    const dispatch = useDispatch()

    const postSelector = useSelector(state => state.blogs.post)

    console.log(
        `--- BlogPost:image:${url}${postSelector?.image}`
    )

    useEffect(() => {
        selectedPost !== null && dispatch(
            watchGetPost(
                secureToken,
                selectedPost
            )
        )
    }, [selectedPost])

    useEffect(() => {
        dispatch(
            watchGetPost(
                secureToken,
                post_id
            )
        )
    }, [post_id])

    const likeUnlike = () => {
        dispatch(
            watchLikeUnlikePost(
                secureToken,
                selectedPost !== null ? selectedPost : post_id
            )
        )
    }

    return (
        <CommonFrame
            withArrow
        >
            <Header
            />
            <DotsTitle>
                <View
                    style={styles.postTitlesContainer}
                >
                    <View
                        style={styles.circleOrganizationLogoContainer}
                    >
                        <Image
                            style={styles.organizationLogo}
                            source={{ uri: `${url}${postSelector?.organization_logo}` }}
                        />
                    </View>
                    <Text
                        style={styles.postTitle}
                    >
                        {postSelector?.title}
                    </Text>
                    <Text
                        style={styles.postCategoryTitle}
                    >
                        {stringSlicer(
                            `${postSelector?.category}`,
                            35
                        )}
                    </Text>
                </View>
            </DotsTitle>

            <View
                style={styles.dateLineContainer}
            >
                <View style={styles.dateLine}></View>
                <Text style={styles.dateLineDate}>
                    {postSelector?.date}
                </Text>
                <View style={styles.dateLine}></View>
            </View>

            {
                postSelector?.image
                &&
                <Image
                    source={{ uri: `${url}${postSelector?.image}`}}
                    style={styles.postImageContainer}
                />
            }

            <Text
                style={styles.postSubTitle}
            >
                {postSelector?.subTitle}
            </Text>

            <Text
                style={styles.postText}
            >
                {postSelector?.description}
            </Text>

            {
                postSelector?.video_url
                &&
                <VideoPlayer
                    videoId={postSelector?.video_url}
                    // videoId={`xOktP0ZD15U`}
                />
            }


            <View
                style={styles.twoLinesContainer}
            >
                <View style={styles.line}></View>
                <View
                    style={styles.twoLinesTitles}
                >
                    <Text
                        style={styles.twoLinesTitle}
                    >
                        {postSelector?.author}
                    </Text>
                    <Text
                        style={styles.twoLinesTitle}
                    >
                        {postSelector?.organization}
                    </Text>
                </View>
                <View style={styles.line}></View>
            </View>

            <View
                style={styles.postActionButtons}
            >

                <LikeButton
                    likes={postSelector?.like_count}
                    onPress={likeUnlike}
                />
                <ShareButton
                    title={`${postSelector?.title}`}
                    message={`${url}`}
                />
            </View>

            <Text
                style={styles.carouselTitle}
            >
                עוד בנושא
            </Text>

            <Carousel
                loop
                ref={carouselRef}
                layout='default'
                data={blogsSelector}
                sliderWidth={layout.width - responsiveWidth(35)}
                itemWidth={layout.width - responsiveWidth(35)}
                itemHeight={responsiveWidth(93)}
                sliderHeight={responsiveWidth(93)}
                firstItem={blogsSelector.length - 1}
                onSnapToItem={(index) => {
                    setSelectedPost(index + 1)
                }}
                containerCustomStyle={{
                    marginVertical: responsiveWidth(12)
                }}
                renderItem={({ item, index }) => (
                    <>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: '45%',
                                right: - responsiveWidth(7),
                                width: responsiveWidth(18),
                                height: responsiveWidth(18),
                                backgroundColor: colors.whiteTwo,
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                borderRadius: responsiveWidth(50)
                            }}
                            onPress={() => carouselRef.current.snapToNext()}
                        >
                            {/* <ArrowR13 /> */}
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={responsiveWidth(10)}
                                color={colors.tealishTwo}
                            />
                        </TouchableOpacity>
                        <View
                            key={index}
                            style={{
                                borderRadius: responsiveWidth(10),
                                overflow: 'hidden',
                                height: responsiveWidth(111),
                                width: layout.width - responsiveWidth(35),
                                position: 'relative'
                            }}
                        >

                            <ImageBackground
                                source={{ uri: `${url}${item?.image}` }}
                                resizeMode="cover"
                                style={{
                                    height: responsiveWidth(111),
                                    width: '100%'
                                }}
                            >
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: colors.imageFilter,
                                        top: 0,
                                        botton: 0,
                                        right: 0,
                                        left: 0,
                                        height: responsiveWidth(111),
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View
                                        style={styles.circleOrganizationLogoContainer}
                                    >
                                        <Image
                                            style={styles.organizationLogo}
                                            source={{ uri: `${url}${item?.organization_logo}` }}
                                        />
                                    </View>

                                    <Text
                                        style={styles.carouselPostTitle}
                                    >
                                        {item.title}
                                    </Text>

                                    <Text
                                        style={styles.postCategoryTitle}
                                    >
                                        {stringSlicer(
                                            `${item?.category}`,
                                            35
                                        )}
                                    </Text>

                                    <View style={styles.shortLine}></View>

                                    <Text
                                        style={styles.carouselPostDate}
                                    >
                                        {item?.date}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: '45%',
                                left: - responsiveWidth(7),
                                width: responsiveWidth(18),
                                height: responsiveWidth(18),
                                backgroundColor: colors.whiteTwo,
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                                borderRadius: responsiveWidth(50)
                            }}
                            onPress={() => carouselRef.current.snapToPrev()}
                        >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={responsiveWidth(10)}
                                color={colors.tealishTwo}
                            />
                        </TouchableOpacity>
                    </>
                )}
            />

            <View
                style={{
                    paddingBottom: responsiveWidth(25)
                }}
            >
            </View>
        </CommonFrame>
    )
}

const styles = StyleSheet.create({
    postTitlesContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleOrganizationLogoContainer: {
        width: responsiveWidth(23.5),
        height: responsiveWidth(23.5),
        borderRadius: responsiveWidth(50),
        borderColor: colors.whiteTwo,
        borderWidth: responsiveWidth(1),
        marginBottom: responsiveWidth(6),
        backgroundColor: colors.whiteTwo,
        shadowColor: colors.BLACK_20,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4.5,
        shadowOpacity: 1,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    organizationLogo: {
        width: responsiveWidth(17),
        height: responsiveWidth(17)
    },
    postTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xlarge,
        fontWeight: weights.bold,
        marginBottom: responsiveWidth(6)
    },
    postCategoryTitle: {
        color: colors.tealishTwo,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin
    },
    dateLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: responsiveWidth(6)
    },
    dateLine: {
        borderTopColor: colors.darkGreyBlue,
        borderTopWidth: responsiveWidth(1),
        height: responsiveWidth(1),
        width: '35%',
        opacity: 0.2
    },
    dateLineDate: {
        color: colors.darkGreyBlue,
        opacity: 0.5,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin
    },
    postImageContainer: {
        resizeMode: "cover",
        height: responsiveWidth(93),
        marginBottom: responsiveWidth(12)
    },
    postSubTitle: {
        fontSize: fonts.small,
        fontWeight: weights.bold,
        color: colors.darkGreyBlue,
        marginBottom: responsiveWidth(8)
    },
    postText: {
        color: colors.darkSlateBlue,
        textAlign: "right",
        fontSize: fonts.small,
        fontWeight: weights.thin
    },
    twoLinesContainer: {},
    line: {
        borderTopColor: colors.darkGreyBlue,
        borderTopWidth: responsiveWidth(1),
        height: responsiveWidth(1),
        width: '100%',
        opacity: 0.2
    },
    twoLinesTitles: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: responsiveWidth(12)
    },
    twoLinesTitle: {
        color: colors.darkGreyBlue,
        opacity: 0.5,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin
    },
    carouselTitle: {
        textAlign: 'center',
        color: colors.darkSlateBlue,
        fontSize: fonts.xlarge,
        fontWeight: weights.bold
        // marginVertical: responsiveWidth(12)
    },
    carouselPostTitle: {
        color: colors.whiteTwo,
        fontSize: fonts.medium,
        fontWeight: weights.bold,
        marginVertical: responsiveWidth(4)
    },
    shortLine: {
        borderTopColor: colors.tealishTwo,
        borderTopWidth: responsiveWidth(1),
        height: responsiveWidth(1.5),
        width: responsiveWidth(22),
        marginTop: responsiveWidth(8),
        marginBottom: responsiveWidth(2)
    },
    carouselPostDate: {
        color: colors.paleLavender,
        fontSize: fonts.xxxsmall,
        fontWeight: weights.bold,
    },
    postActionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})