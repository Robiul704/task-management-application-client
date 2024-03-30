import CreateTask from "./Components/CreateTask";
import ManageTask from "./Components/ManageTask";
import Status from "./Components/Status";



const Root = () => {
    return (
        <div className="bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]bg-[#031321]">
            <Status></Status>
           <CreateTask></CreateTask>
           <ManageTask></ManageTask>
        </div>
    );
};

export default Root;