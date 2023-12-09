import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap';

function Login() {
    const [Password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    return (
        <div>
            <h1>Login</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Username</label>
                        </td>
                        <td>
                            <input type="text" id="username" name="username" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <div>
                                <input
                                    type={
                                        passwordVisible ? "text" : "password"
                                    } id="password" name="password"
                                    value={Password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    } />
                                <span>
                                    {
                                        <FontAwesomeIcon
                                            icon={passwordVisible ? faEye : faEyeSlash}
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        />
                                    }
                                </span>
                            </div>
                        
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input
                                type="button"
                                value="Einloggen"
                                />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Login;