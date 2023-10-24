import config from "../../../tailwind.config";
import "../styles.css";
import LoginForm from "./Login";

const mainAreaStyle:React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'rgb(235, 228, 209)',
    marginTop: '72px',
    alignItems: 'center',
    flexDirection: 'column'
}

export default function MainArea() {
    return (
        <div >
            <div style={mainAreaStyle}>
            <LoginForm/>
            </div>
        </div>
    )
}