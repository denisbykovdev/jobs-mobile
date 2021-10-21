import axios from "axios";

const JobUrl = "https://api.sherutbekalut.co.il"


const getToken = async () => {
    try {
        const url = `${JobUrl}/api/web/getToken`

        const data = await axios.get(url, {})
        // console.log('TOKDEM',data.data && data.data.token)
        return data.data && data.data.token
    }
    catch (error){
        console.log("getToken",error)
    }

}

let Token ="";
const getUserToken =async () => {

        if (Token.length===0){
            Token = await getToken();
            return Token;
        }else {
            return Token;
        }
}


const SocialClientId = {
    androidClientId: "85788568455-5arepkf9neqjoqn7sl1cfg7kda844f43.apps.googleusercontent.com",
    iosClientId: "85788568455-1v1f1j3rfqc33brl6lp9rb6hc62pagrv.apps.googleusercontent.com",
//    fbAppIp: "363721311347103"
    fbAppIp: "757785588252998"
}
export {JobUrl, SocialClientId, getUserToken, Token}
