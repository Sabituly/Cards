import {NavLink} from "react-router-dom";

function Registration (){

    return (

        <div style={{width:'300px', marginTop:'100px'}}>
             <h1>Registration</h1>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>Sign up</button>
                <NavLink to="/login">login</NavLink>
            </div>
        </div>
    )

}

export default Registration;