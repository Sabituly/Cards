import './Login.css';
import {NavLink} from "react-router-dom";
const  Login = () => {

    return (
        <div style={{width:'300px'}}>
            <h1>Login</h1>
            <div style={{display:'flex', flexDirection: 'column'}}>
                <input type="text"/>
                <input type="text"/>
                <input type="checkbox"/>
                <button>Sign in</button>

                <NavLink to="/registration">register</NavLink>

            </div>

        </div>


    )

}

export default Login;