import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            AdminLayout this is navbar
            <Outlet/>
        </div>
    );
};
export default AdminLayout;