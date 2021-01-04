import React, {useState} from 'react';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

class SignIpForm extends React.Component {
    render() {
        return null;
    }
}

const Index = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup)
    const [signIpModal, setSignInModal] = useState(props.signin)

    const handleModal = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false)
            setSignUpModal(true)
        } else if (e.target.id === "login") {
            setSignInModal(true)
            setSignUpModal(false)
        }

    }
    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModal} id="register" className={signUpModal ? "active-btn" : null}>S'inscrire
                    </li>
                    <li onClick={handleModal} id="login" className={signIpModal ? "active-btn" : null}>Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm/>}
                {signIpModal && <SignInForm/>}
            </div>
        </div>
    );
};

export default Index;