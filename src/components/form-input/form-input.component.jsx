//import "./form-input.styles.scss";
import { FormInputlable, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputlable shrink={otherProps.value.length}>
          {label}
        </FormInputlable>
      )}
    </Group>
  );
};

export default FormInput;
