import Form from '../component/Form';
import './SignIn.css';


export default function SignIn() {

    return (
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form firstInput="Username" secondInput="Password" checkbox="Remember me" button="Sign In" />
                </section>
            </main>
        </>
    )
}