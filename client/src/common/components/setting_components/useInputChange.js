import { useState, useCallback } from 'react'
// https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
// pretty cool no?

export const useInputChange = () => {
  const [input, setInput] = useState({})

  // handleInputChange can safely be added to arrays of dependencies
  // thanks to useCallback. Nice!
  const handleInputChange = useCallback((e, v) => {
    // not very clean, i'll admit. fucking js i want my types backkk
    if (v) {
      setInput(prevState => {
        return {
          ...prevState,
          [e]: v
        }
      });
    }
    else {
      setInput(prevState => {
        return {
          ...prevState,
          [e.currentTarget.name]: e.currentTarget.value
        }
      });
    }
  }, []);

  return [input, handleInputChange]
}
