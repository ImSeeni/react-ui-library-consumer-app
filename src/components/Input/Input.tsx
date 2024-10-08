import { FormInputType } from '../../types/form';
import { ControllerRenderProps, FieldValues, UseFormRegister } from 'react-hook-form';

type InputProps<IFormValues extends FieldValues> = {
  field: ControllerRenderProps<FieldValues, string>
} & FormInputType<IFormValues>;

const Input = <IFormValues extends Record<string, unknown>>({
    field,
    type,
    error,
    children
}: InputProps<IFormValues>) => {
  return (
    <fieldset>
        <label htmlFor=""></label>
        <input type={type} {...field} />
        {error && <p className="error">{error.message}</p>}
        {children}
    </fieldset>
  )
}

export default Input;