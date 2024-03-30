import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "https://server-omega-cyan.vercel.app",
 

});
const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;


