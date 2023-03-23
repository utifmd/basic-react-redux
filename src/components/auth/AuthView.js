import PropTypes from "prop-types"
import { useState } from "react"
import { Navigate } from "react-router-dom"

const AuthView = ({ auth, login }) => {
    const { loading, error, profile } = auth
    const [ formState, setFormState ] = useState({})
    const onSignIn = () => {
        const { username, password } = formState
        
        login(username, password)
    }
    const onFieldChange = e => {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }
    if (profile !== null) {
        return <Navigate to="/posts" replace />
    }
    return (<>
        <section>
            <table>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td>:</td>
                        <td><input 
                            placeholder="Enter username" 
                            name="username" 
                            type="text" 
                            onChange={onFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>:</td>
                        <td><input 
                            placeholder="Enter password" 
                            name="password" 
                            type="password" 
                            onChange={onFieldChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            { error && <p style={{color: 'red'}}><span>{error}</span></p> }
            <button 
                disabled={loading} 
                onClick={onSignIn}>{ 
                    loading ? 'Loading..' : 'Sign in' }</button>
        </section>
    </>)
}
AuthView.prototype = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
}
export default AuthView