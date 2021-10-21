export default function (token) {
    console.log(token); console.log("tokenheaders" );
    return {headers: {
        "Content": "application/json",
        "Authorization": `Bearer ${token}`,
        token,
        }
    }
}