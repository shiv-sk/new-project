/* eslint-disable react/prop-types */
import { AuthProvider } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthProvideWrap({children}){
    const navigate = useNavigate();
    return (
        <AuthProvider navigate={navigate}>
            {children}
        </AuthProvider>
    )
}