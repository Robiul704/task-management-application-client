/* eslint-disable no-unused-vars */
import React, { useState } from "react";


import Swal from "sweetalert2";
import UseAxiosPublic from "./UseAxiosPublic";
import useTask from "./useTask";

const CreateTask = () => {
    const AxiosPublic=UseAxiosPublic()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [task,refetch]=useTask()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("priority:", priority);
    console.log("category:", category);

    const taskInfo = { title, description,category,priority};
    console.log(taskInfo);

    AxiosPublic.post('/task',taskInfo)
    .then(res=>{
        refetch()
      console.log(res.data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "task has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
    refetch()
    // Reset the form
    setTitle("");
    setDescription("");
    setCategory("")
    setPriority("")

  };

  return (
    <div className="text-white py-5 bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] flex items-start pt-5 justify-center  overflow-x-hidden">
      <div className="bg-[#031321] p-8 rounded-lg shadow-xl w-[900px]">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <div className="flex justify-between  items-center gap-5">
        <div className="w-full">
        <label htmlFor="title" className="block font-bold mb-1">
          Category
          </label>
          <select

          value={category}
          onChange={(e) => setCategory(e.target.value)}

          className="select select-bordered w-full max-w-xs">
              <option>Choose</option>
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

          value={priority}
          onChange={(e) => setPriority(e.target.value)}

          className="select select-bordered w-full max-w-xs">
              <option >Choose</option>
                 <option>Low</option>
                    <option>Medium</option>
                    <option>Heigh</option>
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
    </div>
  );
};

export default CreateTask;
