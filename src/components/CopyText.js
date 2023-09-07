import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CopyButtonText() {
    // const [copyButtonText, setcopyButtonText] = useState("")
    // const handlecopyButtonText = () => {
    //     navigator.clipboard.writeText(copyButtonText)
    // }

    function emailCopy() {
        navigator.clipboard.writeText("kevinwng23@gmail.com")
        toast("BVAN TEH GOAT")

    }

    return (
        <div>
            <button onClick={emailCopy}>
                <img className="hero-socials-icon" src="./images/email-icon.png" alt="email" />
            </button>
                <ToastContainer />
        </div>
    )
}