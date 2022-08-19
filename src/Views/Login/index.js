import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
// import { useRoutes } from "react-router";
import { toast } from "react-toastify";


const LoginStyles = createGlobalStyle`
.login {
    display: flex;
    justify-content: center;
    padding: 60px 120px;
}
input.form-control {
    border: none;
    padding: 10px;
    width: 250px;
}

`;

const ModLogin = () => {
    // const router = useRoutes();
    const [password, setPassword] = useState({
        pass: "",
    })

    const handleInputChange = (e) => {
        let traget = e.target.id;
        setPassword({...password, [traget]: e.target.value});
    }
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            if(!password.pass) {
                toast("Password cannot be empty", { type: "error" });
            }
            else if(password.pass === "memechathq") {
                // router.push({
                //     pathname: '/'
                // })
                window.location.pathname = "/";
                toast("Login Successful!", { type: "success" });
            }
        } catch(error) {
            console.log(error);
        }
    }
    return (
           <div>
                <LoginStyles />
                <div className="login">
                    <input value={password.pass} onChange={e => handleInputChange(e)} type='password' id="password" className="form-control" placeholder="password" />
                </div>
                <div className="submit">
                    <input onClick={e => handleLogin(e)} id="login" value="Login" readOnly={true} className="submit-btn" />
                </div>
           </div> 
        )
};

export default ModLogin;