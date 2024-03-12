import "./App.css";
import { useState } from "react";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        // Implement this function
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.value.length > 8
    };

    const clearForm = () => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword({ value: "", isTouched: false });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input placeholder="First name" value={firstName} onChange={e => { setFirstName(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>Last name</label>
                        <input placeholder="Last name" value={lastName} onChange={e => { setLastName(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input placeholder="Email address" value={email} onChange={e => { setEmail(e.target.value) }} />
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input placeholder="Password" value={password.value} onChange={e => { setPassword({ value: e.target.value, isTouched: e.target.value.length }) }} />
                        {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role} onChange={e => { setRole(e.target.value) }}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
