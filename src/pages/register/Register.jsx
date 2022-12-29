import { Link } from "react-router-dom";
import "./Register.scss"

const Register = () =>{
    return(
        <div className="Register">
            <div className="card">
                <div className="left">
                    <h1>Lama Social.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequater.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="name" />
                        <Link to="/Register">
                        <button>Register</button>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Register;