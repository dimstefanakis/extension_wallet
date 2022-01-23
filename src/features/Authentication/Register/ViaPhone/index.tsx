import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { FormControl, FormLabel, Input, NumberInput } from "@chakra-ui/react";
import ContinueButton from "../../../../flat/ContinueButton";
import { setRegisterType, setRegisterValue } from "../../authenticationSlice";
import { RootState } from "../../../../store";

function RegisterViaPhone() {
  const dispatch = useDispatch();
  const {registerValue} = useSelector((state: RootState)=>state.authentication);

  function onPhoneChange(event: React.FormEvent<HTMLInputElement>) {
    dispatch(setRegisterValue(event.currentTarget.value))
  }

  function onContinueClick(){
    dispatch(setRegisterType('phone'));
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
      <ContinueButton isDisabled={!registerValue} onClick={onContinueClick}>
        Continue
      </ContinueButton>
    </FormControl>
  );
}

export default RegisterViaPhone;
