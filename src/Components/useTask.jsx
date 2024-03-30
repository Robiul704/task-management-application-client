import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";



const useTask = () => {
    const AxiosPublic=UseAxiosPublic()
    const { refetch, data: task=[]}=useQuery({
        queryKey:['task'],
        queryFn: async () => {
            const res=await AxiosPublic.get(`/task`)
            return res.data
        }
    })
        console.log(task)
        return [task,refetch]
}
export default useTask;