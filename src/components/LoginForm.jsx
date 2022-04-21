import { useState } from "react"
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async(e) =>{

        e.preventDefault();

        const authObject = { 'Access-Control-Allow-Origin': '*','Project-ID': "a0cd1785-3f6f-4dc6-94ce-1eb4ffac2051", 'User-Name': username, 'User-Secret': password};
        try{
            await axios.get("http://api.chatengine.io/chats", { headers: authObject});
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        }catch(error){

        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    chatApplication
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>start chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;

