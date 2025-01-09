import { useState } from "react";

const useHandleChange = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return { handleChange, values, setValues };
};

export default useHandleChange;
