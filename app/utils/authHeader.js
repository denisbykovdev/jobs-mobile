export default function (token) {
    console.log(token); console.log("tokenheaders" );
    return {headers: {
        "Content": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`,
        token,
        }
    }
}