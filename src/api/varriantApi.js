import axios from 'axios';

export const fetchVarriants = async () => {
  const response = await axios.get('http://localhost:8080/api/varriants'); // chỉnh lại URL theo backend của bạn
  return response.data;
};
