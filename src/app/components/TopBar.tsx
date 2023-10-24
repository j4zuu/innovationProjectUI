import config from "../../../tailwind.config";

const topBarStyle:React.CSSProperties = {
    backgroundColor: 'rgb(229, 86, 4)',
    textAlign: 'center',
        padding: 24,
        top: 0,
        position: 'fixed',
        width: '100%'
}

export default function TopBar() {
    return (
        <div style={topBarStyle}>
            SenSec
        </div>
    )
}