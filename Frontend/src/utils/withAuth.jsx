import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const navigate = useNavigate();
        const [loading, setLoading] = useState(true); // State to handle loading
        const [error, setError] = useState(null); // State to handle errors

        const isAuthenticated = () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    // Decode JWT (Base64 decoding of payload)
                    const [, payloadBase64] = token.split(".");
                    if (!payloadBase64) {
                        console.error("Invalid token structure");
                        return false;
                    }

                    const decodedPayload = JSON.parse(atob(payloadBase64));

                    // Validate token expiration
                    if (decodedPayload.exp * 1000 > Date.now()) {
                        return true;
                    } else {
                        console.warn("Token expired");
                        return false;
                    }
                } catch (error) {
                    console.error("Error decoding token:", error);
                    setError("Failed to validate token.");
                    return false;
                }
            }
            return false;
        };

        useEffect(() => {
            const checkAuth = async () => {
                if (!isAuthenticated()) {
                    navigate("/auth");
                } else {
                    setLoading(false); // Proceed only if authenticated
                }
            };
            checkAuth();
        }, [navigate]);

        if (loading) {
            return (
                <div>
                    Loading... {/* You can replace this with a spinner or loading animation */}
                </div>
            );
        }

        if (error) {
            return (
                <div>
                    <p>{error}</p>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default withAuth;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const withAuth = (WrappedComponent) => {
//     const AuthComponent = (props) => {
//         const navigate = useNavigate();
//         const [loading, setLoading] = useState(true); // State to handle loading

//         const isAuthenticated = () => {
//             const token = localStorage.getItem("token");
//             if (token) {
//                 try {
//                     // Decode JWT (Base64 decoding of payload)
//                     const [, payloadBase64] = token.split(".");
//                     if (!payloadBase64) {
//                         console.error("Invalid token structure");
//                         return false;
//                     }

//                     const decodedPayload = JSON.parse(atob(payloadBase64));

//                     // Validate token expiration
//                     if (decodedPayload.exp * 1000 > Date.now()) {
//                         return true;
//                     } else {
//                         console.warn("Token expired");
//                         return false;
//                     }
//                 } catch (error) {
//                     console.error("Error decoding token:", error);
//                     return false;
//                 }
//             }
//             return false;
//         };

//         useEffect(() => {
//             if (!isAuthenticated()) {
//                 navigate("/auth");
//             } else {
//                 setLoading(false); // Proceed only if authenticated
//             }
//         }, [navigate]);

//         if (loading) {
//             return <div>Loading...</div>; // Placeholder while checking auth
//         }

//         return <WrappedComponent {...props} />;
//     };

//     return AuthComponent;
// };

// export default withAuth;



// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"

// const withAuth = (WrappedComponent ) => {
//     const AuthComponent = (props) => {
//         const router = useNavigate();

//         const isAuthenticated = () => {
//             if(localStorage.getItem("token")) {
//                 return true;
//             } 
//             return false;
//         }

//         useEffect(() => {
//             if(!isAuthenticated()) {
//                 router("/auth")
//             }
//         }, [])

//         return <WrappedComponent {...props} />
//     }

//     return AuthComponent;
// }

// export default withAuth;