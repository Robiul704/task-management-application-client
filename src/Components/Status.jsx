import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { CgFormatLineHeight } from "react-icons/cg";
import useTask from "./useTask";
import { GiLowTide } from "react-icons/gi";
const Status = () => {
    const [task]=useTask()
    const lowfilter=task.filter(t=>t.priority==='Low')
 const mediumfilter=task.filter(t=>t.priority==='Medium')
 const heighfilter=task.filter(t=>t.priority==='High')
    console.log(task)
    return (
        <div className="">
             <div className="px-10 pt-10 flex items-center justify-center bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]  ">
      <div className=" grid lg:grid-cols-4  justify-center items-center text-center mx-auto gap-6">
        <div className=" bg-[#006f47] w-[200px] h-[120px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#dd3fe0] rounded-full flex items-center justify-center">
              <RiExchangeFundsFill className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
          <h3>All Task</h3>
            <h2>{task.length}</h2>
         
          </div>
        </div>


        <div className=" bg-[#006f47] w-[200px] h-[120px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#51bcd3] rounded-full flex items-center justify-center">
              <GiLowTide  className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
          <h3>Low Priority</h3>
            <h2>{lowfilter.length}</h2>
          
          </div>
        </div>


        <div className=" bg-[#006f47] w-[200px] h-[120px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#51dc78] rounded-full flex items-center justify-center">
            <MdOutlineBrightnessMedium className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
          <h3>Medium Priority</h3>
            <h2>{mediumfilter.length}</h2>
         
          </div>
        </div>


        <div className=" bg-[#006f47] w-[200px] h-[120px] p-5 flex items-center gap-3 rounded-lg">
        <div>
            <div className="w-12 h-12 bg-[#dba336] rounded-full flex items-center justify-center">
            <CgFormatLineHeight className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
          <h3>High Priority </h3>
            <h2>{heighfilter.length}</h2>
            
          </div>
        </div>

        
      </div>
    
    </div>
        </div>
    );
};

export default Status;