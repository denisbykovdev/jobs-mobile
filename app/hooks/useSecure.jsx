import React, { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export default function useSecure(key) {
    const [secure, setSecure] = useState(null);

    useEffect(() => {
        (async function getSecure() {
            const secureUserInfo = await SecureStore.getItemAsync(key);

            // console.log(
            //     `--- useSecure:`, key, JSON.parse(secureUserInfo)
            // )

            setSecure(JSON.parse(secureUserInfo));
        })()

    }, [])

    return {
        secure
    }
}
