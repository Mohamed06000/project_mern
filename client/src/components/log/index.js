import React, {useState} from 'react';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

class SignIpForm extends React.Component {
    render() {
        return null;
    }
}

const Index = () => {
    const [signUpModal, setSignUpModal] = useState(true)
    const [signIpModal, setSignIpModal] = useState(false)

    const handleModal = (e) => {
        if (e.target.id === "register") {
            setSignIpModal(false)
            setSignUpModal(true)
        } else if (e.target.id === "login"){
            setSignIpModal(true)
            setSignUpModal(false)
        }

    }
    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModal} id="register">S'inscrire</li>
                    <li onClick={handleModal} id="login">Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signIpModal && <SignInForm />}
            </div>
        </div>
    );
};

export default Index;