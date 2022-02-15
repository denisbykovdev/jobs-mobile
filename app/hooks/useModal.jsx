import React, { useState } from "react";
import colors from "../utils/colors";
import layout, { responsiveWidth } from "../utils/layout";
import { StyleSheet, ScrollView } from "react-native";
import Modal from "react-native-modal";
// import AvoidingView from "../common/AvoidingView";
import { useCallback } from "react";
import AvoidingView from "../commons/AvoidingView";

const useModal = () => {
    const [isVisible, setVisible] = useState(false);

    const modalClose = useCallback(() => setVisible(false), []);

    const modalOpen = () => setVisible(true);

    const ModalContent = ({
        children,
        fullWidth = false,
        modalContainerStyle,
        modalContentStyle
    }) => (

        <Modal
            isVisible={isVisible}
            backdropColor={colors.whiteTwo}
            children
            onBackdropPress={() => modalClose()}
            deviceWidth={layout.width}
            deviceHeight={layout.height}
            // onSwipeComplete={() => modalClose()}
            // swipeDirection={"down"}
            supportedOrientations={["portrait", "landscape"]}
            style={[
                styles.modalContainer,
                {
                    // alignItems: layout.width > 600 ? "center" : 'stretch'
                },
                modalContainerStyle
            ]}
            propagateSwipe={true}
            scrollVertical={true}
        // useNativeDriver={true}
        >
            <AvoidingView>
                <ScrollView
                    contentContainerStyle={[
                        styles.modalScrollContainer,
                        {
                            width: '100%'
                        },
                        modalContentStyle
                    ]}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled
                >

                    {children}

                </ScrollView>
            </AvoidingView>
        </Modal >

    );

    return [modalOpen, modalClose, ModalContent];
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        // paddingHorizontal: responsiveWidth(17.5)
    },
    modalScrollContainer: {
        // paddingTop: responsiveWidth(124.5),
    }
});

export default useModal;
