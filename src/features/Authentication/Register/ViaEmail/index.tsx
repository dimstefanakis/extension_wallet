import { useDispatch, useSelector } from "react-redux";
import { FormControl, Input } from "@chakra-ui/react";
import ContinueButton from "../../../../flat/ContinueButton";
import { setRegisterType, setRegisterValue } from "../../authenticationSlice";
import { RootState } from "../../../../store";

function RegisterViaEmail() {
  const dispatch = useDispatch();
  const { registerValue } = useSelector(
    (state: RootState) => state.authentication
  );

  function onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    dispatch(setRegisterValue(event.currentTarget.value));
  }

  function onContinueClick() {
    dispatch(setRegisterType("email"));
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
      <ContinueButton isDisabled={!registerValue} onClick={onContinueClick}>
        Continue
      </ContinueButton>
    </FormControl>
  );
}

export default RegisterViaEmail;
