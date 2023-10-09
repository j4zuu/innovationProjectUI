import config from "../../../tailwind.config";

const topBarStyle = {
    background: 'bg-mainOrange',
}

export default function TopBar() {
    return (
        <div className={topBarStyle.background}>
            here is topBar
        </div>
    )
}