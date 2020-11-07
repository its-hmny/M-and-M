import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Custom hook to obtain the  query param (usually the storyId)
export const useQuery = () =>
  Object.fromEntries(new URLSearchParams(useLocation().search));

// Default preferences for axios
const baseURL = 'http://localhost:8000/';
const instance = axios.create({
  baseURL,
});
export default instance;
