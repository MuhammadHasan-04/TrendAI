import axios from "axios";

const baseurl = "http://localhost:3000/api";
const token = localStorage.getItem("token");

export const fetchData = async () => {
  const res = await axios.get(`${baseurl}/trends`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// export const fetchYoutube = async ()=>{

//}
