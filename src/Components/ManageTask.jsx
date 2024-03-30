import useTask from "./useTask";
import { FaAngleRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import Swal from "sweetalert2";

const ManageTask = () => {
    const [task,refetch]=useTask()
      const [searchQuery, setSearchQuery] = useState("");
      const [selectedCategory, setSelectedCategory] = useState("");
      const filteredItems = task.filter((item) =>
        item.priority.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const filteredByCategory = selectedCategory
        ? filteredItems.filter(
            (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
          )
        : filteredItems;
const AxiosPublic=UseAxiosPublic()
        const handleDelete = (id) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this task!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete task",
          }).then((result) => {
            if (result.isConfirmed) {
              AxiosPublic.delete(`/task/${id}`)
              .then((res) => {
                refetch();
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success",
                  });
                }
              });
            }
          });
        };
    return (

       <div>
        <div className="flex justify-center gap-5 items-center">
            <div>
            <h6 className="text-[#828282] text-center text-sm font-bold ">Search by Priority</h6>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="Search by priority"
                  className="w-3/5 rounded-l-lg placeholder-[#828282] p-2 sm:w-2/3 text-sm bg-[#ff9f0d1a]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="w-3/5 p-2 font-semibold rounded-r-lg sm:w-1/3 bg-[#FF9F0D] dark:bg-[#FF9F0D] text-white"
                >
                  <IoIosSearch className="mx-auto font-bold w-6 h-6" />
                </button>
              </div>
            </div>
           
            <div className=" ">
            <h6 className="text-[#828282] text-center text-sm font-bold">Filter by Category</h6>

              <select
                className="text-[#828282] border p-2 rounded-lg mt-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              > 
              <option disabled selected>Choose</option>
                <option>Financial</option>
                    <option>Travel</option>
                    <option>Administrative</option>
                    <option>Health</option>
                    <option>Education</option>
              </select>
            </div>
          </div>
         <div className=" ">
          <div className=" grid lg:grid-cols-4 gap-3 h-max py-10">

            {filteredByCategory.map((allItem, index) => (
              <div className="h-[300px]" key={allItem._id}>
                <div className=" h-[300px] bg-base-100  shadow-lg">
                  
                  
                  <div className=" p-4">
                  <article key={allItem._id}
                    className="hover:animate-background rounded-xl  p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                  >
                    <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                      <a href="#">
                        <h1 className="text-black font-bold">{allItem.title}</h1>
                      </a>
                  <h1>Category: {allItem.category}</h1>
                  <h1>Priority: {allItem.priority}</h1>
                      <div className="mt-4 flex flex-wrap gap-1">
                        <Link to={`/task/${allItem._id}`}>
                        <span
                         className="bg-blue-500 mt-5 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                         Update
                        </span>
                        </Link>
                        
                  <button onClick={() => handleDelete(allItem._id)}>
                  <span
                         className="bg-blue-500 mt-5 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                          Delete
                        </span>
                  </button>
                       
                      </div>
                    </div>
                  </article>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
             
     
       </div>
    );
};

export default ManageTask;