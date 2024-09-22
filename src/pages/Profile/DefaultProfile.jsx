import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarProfile from "./SidebarProfile";

function DefaultProfile({ children }) {
    return (
        <>
            <Header />
            <div className="md:p-6 bg-bgMain">
                <div className="lg:mx-12 pt-2 px-4 md:pt-0 md:flex">
                    <SidebarProfile />
                    <div className="w-full md:w-4/5 px-1">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DefaultProfile;