import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import UseAxiosPublic from "./UseAxiosPublic";



const Updatetask = () => {
  const task=useLoaderData()
  console.log(task)
  const AxiosPublic=UseAxiosPublic()

const handleupdate=(e)=>{
  console.log('ihsjkafgss')
  e.preventDefault()
const title=e.target.title.value
const category=e.target.category.value
const priority=e.target.priority.value

console.log(title,priority,category)

const body={title,priority,category}

AxiosPublic.patch(`/task/${task._id}`,body)
.then(res=>{
  Swal.fire({
    title: "updated!",
    text: "This  has been updated.",
    icon: "success"
  });
  console.log(res.data)      
  })
}
    return (
        <div >
             <div className="min-h-screen text-black flex items-center justify-center p-10">
      <div className="bg-emerald-400 p-8 rounded-lg shadow-xl w-[900px]">
        <h2 className="text-2xl font-bold mb-4 text-black">Update task</h2>
        <form onSubmit={handleupdate} >
          <label className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            name="title"
            defaultValue={task.title}
            className="w-full p-2 mb-4 border rounded"
            required
          />
<div className="flex justify-between  items-center gap-5">
        <div className="w-full">
        <label htmlFor="title" className="block font-bold mb-1">
          Category
          </label>
          <select
            name="category"
              defaultValue={task.category}
          className="select select-bordered w-full text-white max-w-xs">
              <option disabled >Choose</option>
                 <option>Financial</option>
                    <option>Travel</option>
                    <option>Administrative</option>
                    <option>Health</option>
                    <option>Education</option>
           </select>
        </div>
        <div className="w-full">
        <label htmlFor="title" className="block font-bold mb-1">
          Priority
          </label>

          <select

           name="priority"
             defaultValue={task.priority}

          className="select text-white select-bordered w-full max-w-xs">
              <option disabled>Choose</option>
                 <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
           </select>

        </div>
        </div>
          <button
            type="submit"
            className="bg-blue-500 mt-5 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      
      </div>
      <Link className="bg-blue-500 ml-5 text-white py-2 px-4 rounded hover:bg-blue-700" to={'/'}>
    <button> Go Home</button>
    </Link>
    </div>
   
        </div>
    );
};

export default Updatetask;