import { useState } from 'react'
// https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
// pretty cool no?

export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e,v) => {
    // not very clean, i'll admit. fucking js i want my types backkk
    if (e && v){
      setInput({
        ...input,
        [e] : v
      })
    }
    else {
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
        });
      }
  }

  return [input, handleInputChange]
}
