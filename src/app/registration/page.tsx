import Login from "@/app/components/Login";
//import MainArea from "@/app/components/MainArea";
import TopBar from "@/app/components/TopBar";
import RegistrationForm from "../components/Registration";

const Page = () => {
    return (
        <div className="mainArea">
            <TopBar/>
            <RegistrationForm/>
        </div>
    )
}

export default Page