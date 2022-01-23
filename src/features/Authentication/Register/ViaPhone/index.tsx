import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
import { FormControl, FormLabel, Input, NumberInput } from "@chakra-ui/react";
import ContinueButton from "../../../../flat/ContinueButton";
import { setRegisterType, setRegisterPhoneValue } from "../../authenticationSlice";
import { RootState } from "../../../../store";

function RegisterViaPhone() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {registerValue} = useSelector((state: RootState)=>state.authentication);

  function onPhoneChange(event: React.FormEvent<HTMLInputElement>) {
    dispatch(setRegisterPhoneValue(event.currentTarget.value));
  }

  function onContinueClick(){
    dispatch(setRegisterType('phone'));
    router.push("/verification");
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
      <ContinueButton isDisabled={!registerValue.phone} onClick={onContinueClick}>
        Continue
      </ContinueButton>
    </FormControl>
  );
}

export default RegisterViaPhone;
