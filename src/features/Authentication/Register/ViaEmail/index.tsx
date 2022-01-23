import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FormControl, Input } from "@chakra-ui/react";
import ContinueButton from "../../../../flat/ContinueButton";
import {
  setRegisterType,
  setRegisterEmailValue,
} from "../../authenticationSlice";
import { RootState } from "../../../../store";

function RegisterViaEmail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { registerValue } = useSelector(
    (state: RootState) => state.authentication
  );

  function onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    dispatch(setRegisterEmailValue(event.currentTarget.value));
  }

  function onContinueClick() {
    dispatch(setRegisterType("email"));
    router.push('/verification');
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
        onChange={onEmailChange}
        width="80%"
        placeholder="johndoe@gmail.com"
      />
      <ContinueButton isDisabled={!registerValue.email} onClick={onContinueClick}>
        Continue
      </ContinueButton>
    </FormControl>
  );
}

export default RegisterViaEmail;
