import { ChangeEvent, useState } from "react";

const useForm = <FormBase,>(initialForm: FormBase) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onValueChange = (propName: keyof FormBase, value: FormBase[keyof FormBase]) => {
    setFormState({
      ...formState,
      [propName]: value,
    });
  };


  const onTextAreaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onManyValuesChange = <KeyType extends keyof FormBase>(
    valueList: { propName: KeyType; value: FormBase[KeyType] }[]
  ) => {
    const newFormState = { ...formState };

    valueList.forEach(({ propName, value }) => {
      newFormState[propName] = value;
    });

    setFormState({
      ...newFormState,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onTextAreaChange,
    onValueChange,
    onResetForm,
    onManyValuesChange,
  };
};

export default useForm;
