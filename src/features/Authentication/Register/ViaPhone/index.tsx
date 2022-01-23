import { useState } from "react";
import InputMask from "react-input-mask";
import { FormControl, FormLabel, Input, NumberInput } from "@chakra-ui/react";
import ContinueButton from "../../../../flat/ContinueButton";

function LoginViaPhone() {
  const [phone, setPhone] = useState('');

  function onPhoneChange(event: React.FormEvent<HTMLInputElement>) {
    setPhone(event.currentTarget.value);
  }

  return (
    <FormControl
      width="100%"
      display="flex"
      flexFlow="column"
      alignItems="center"
      justifyContent="center"
    >
      <Input
        as={InputMask}
        type="tel"
        onChange={onPhoneChange}
        width="80%"
        mask="*** *********"
        placeholder="Ex (337) 378 8383"
        // @ts-ignore:next-line
        // this prop is not documented in the latest react-input-mask types package
        // so just ignore it
        maskChar=""
      />
      <ContinueButton isDisabled={!phone}>Continue</ContinueButton>
    </FormControl>
  );
}

export default LoginViaPhone;
