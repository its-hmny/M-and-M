import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { SERVER_URL } from './constants';

// Custom hook to obtain the  query param (usually the storyId)
export const useQuery = () =>
  Object.fromEntries(new URLSearchParams(useLocation().search));

// Default preferences for axios
const instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;
