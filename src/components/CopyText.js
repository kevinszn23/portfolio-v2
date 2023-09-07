import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CopyButtonText() {

    function emailCopy() {
        navigator.clipboard.writeText("kevinwng23@gmail.com")
        toast.success("You've copied my email!")

    }

    return (
        <div>
            <button onClick={emailCopy}>
                <img className="hero-socials-icon" src="./images/email-icon.png" alt="email" />
            </button>
                <ToastContainer theme="dark"/>
                
        </div>
    )
}