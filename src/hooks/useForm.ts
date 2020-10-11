import { ChangeEvent, useState } from "react";

const useForm = <T>(
  initialState: T
): [T, ({ target }: ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};

export default useForm;
