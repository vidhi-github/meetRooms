
// import axios from "axios";
// import httpStatus from "http-status";
// import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext({});

// const client = axios.create({
//     baseURL: `${process.env.REACT_APP_API_URL || "http://localhost:8000"}/api/v1/users`,
// });

// export const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState({}); // Initialize with an empty object
//     const router = useNavigate();

//     const getToken = () => {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("Token missing or expired");
//         return token;
//     };

//     const handleRegister = async (name, username, password) => {
//         try {
//             const request = await client.post("/register", { name, username, password });
//             if (request.status === httpStatus.CREATED) {
//                 return request.data.message;
//             }
//         } catch (err) {
//             console.error("Registration error:", err.response?.data || err.message);
//             throw err;
//         }
//     };

//     const handleLogin = async (username, password) => {
//         try {
//             const request = await client.post("/login", { username, password });
//             if (request.status === httpStatus.OK) {
//                 localStorage.setItem("token", request.data.token);
//                 router("/home");
//             }
//         } catch (err) {
//             console.error("Login error:", err.response?.data || err.message);
//             throw err;
//         }
//     };

//     const getHistoryOfUser = async () => {
//         try {
//             const token = getToken();
//             const request = await client.get("/get_all_activity", { params: { token } });
//             return request.data;
//         } catch (err) {
//             console.error("Error fetching history:", err);
//             throw err;
//         }
//     };

//     const addToUserHistory = async (meetingCode) => {
//         try {
//             const token = getToken();
//             const request = await client.post("/add_to_activity", { token, meeting_code: meetingCode });
//             return request.data;
//         } catch (err) {
//             console.error("Error adding to history:", err);
//             throw err;
//         }
//     };

//     const data = {
//         userData,
//         setUserData,
//         addToUserHistory,
//         getHistoryOfUser,
//         handleRegister,
//         handleLogin,
//     };

//     return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
// };

// export { AuthContext, client };




import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `${server}/api/v1/users`
})


export const AuthProvider = ({ children }) => {

    const authContext = useContext(AuthContext);


    const [userData, setUserData] = useState(authContext);


    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            })


            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    }

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username: username,
                password: password
            });

            console.log(username, password)
            console.log(request.data)

            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                router("/home")
            }
        } catch (err) {
            throw err;
        }
    }

    const getHistoryOfUser = async () => {
        try {
            let request = await client.get("/get_all_activity", {
                params: {
                    token: localStorage.getItem("token")
                }
            });
            return request.data
        } catch
         (err) {
            throw err;
        }
    }

    const addToUserHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request
        } catch (e) {
            throw e;
        }
    }


    const data = {
        userData, setUserData, addToUserHistory, getHistoryOfUser, handleRegister, handleLogin
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}