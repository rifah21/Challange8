// import Image from 'next/image';
import Link from 'next/link';
import AdminNavbar from './AdminNavbar';
import AdminTable from './AdminTable';
import PaginationTable from './PaginationTable';
import AdminContent from './AdminContent';

const AdminSidebar = () => {
    return(
        <>
        <div className="divide-side d-flex w-100">
            <div className="left-side d-flex">
                <div className="nav-icon d-flex flex-column">
                    <div className="sidebar-logo d-flex justify-content-center">
                        <p className="icon-sidebar"></p>
                    </div>	
                    <Link  href="/"><button className="items-sidebar-menu-active"><p className="text-icon-dashboard"><img src="/assets/icon_home.svg" alt="icon home" className="icon-sidebar-menu"/>Dashboard</p></button></Link>
                    <Link href="/listCars"><button className="items-sidebar-menu" ><p className="text-icon-cars"><img src="/assets/icon_truck.svg" alt="icon cars" className="icon-sidebar-menu"/>Cars</p></button></Link>
                </div>
                
                <div className="white-sidebar">
                    <div className="top-sidebar">
                        <p className="longer-logo"></p>
                    </div>
                    <div className="bottom-sidebar">
                        <div className="title-main-menu">
                            <p>DASHBOARD</p>
                        </div>
                        <div className="title-main-sec">
                            <p>Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side w-100">
                <AdminNavbar/>
                <div className="container-fluid">
                    <AdminContent/>
                    <AdminTable/>
                    <PaginationTable/>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminSidebar;