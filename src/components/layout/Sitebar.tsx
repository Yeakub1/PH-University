import { Layout, Menu } from "antd";
import { sitebarItemGenarator } from "../../utils/sitebarItemGenarator";
import { adminPath } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const Sitebar = () => {

  const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
  }

  const role = "student"
  let sitebarItems;

  switch (role) {
    case userRole.ADMIN:
     sitebarItems= sitebarItemGenarator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
     sitebarItems= sitebarItemGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
     sitebarItems= sitebarItemGenarator(studentPaths, userRole.STUDENT);
      break;
  
    default:
      break;
  }


    return (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
       
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>PH Uni</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sitebarItems}
          />
        </Sider>
    );
};
export default Sitebar;