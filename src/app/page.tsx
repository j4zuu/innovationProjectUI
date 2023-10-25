import TopBar from "./components/TopBar"
import MainArea from "./components/MainArea"
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


export default function Home() {
    // Check if we have authorization token saved
    const token = cookies().get('token')?.value
    if (typeof token !== 'string'){
        redirect("/login")
    }
    return (
        <main>
            <TopBar/>
        </main>
    )
}