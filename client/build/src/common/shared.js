import { useLocation } from '../../web_modules/react-router-dom.js';
import axios from '../../web_modules/axios.js';
import { SERVER_URL } from './constants.js';
// Custom hook to obtain the  query param (usually the storyId)

export const useQuery = () =>
  Object.fromEntries(new URLSearchParams(useLocation().search)); // Default preferences for axios

const instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;
