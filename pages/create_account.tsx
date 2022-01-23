import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Text, Flex, Box } from "@chakra-ui/layout";
import Header from "../src/flat/Header";
import ContinueButton from "../src/flat/ContinueButton";
import Divider from "../src/flat/Divider";
import AlreadyHaveAnAccount from "../src/flat/AlreadyHaveAnAccount";
import { AccountInterface } from "../src/features/Authentication/interface";
import { setAccount } from "../src/features/Authentication/authenticationSlice";
import useRegisterMutation from "../src/features/Authentication/Register/useRegister";
import { RootState } from "../src/store";
import accounts from "../mockdata/accounts.json";

interface Errors {
  accountId: string[];
}

// Error handling would be much cleaner with a library like formik
// but for the sake of the excersice and since there is only one input that
// needs to be validated I do it manually
function CreateAccount() {
  const dispatch = useDispatch();
  const register = useRegisterMutation();
  const { registerType, registerValue } = useSelector(
    (state: RootState) => state.authentication
  );
  const [name, setName] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({
    accountId: [],
  });

  function onNameChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function onAccountIdChange(event: React.FormEvent<HTMLInputElement>) {
    setAccountId(`${event.currentTarget.value}.near`);
  }

  useEffect(() => {
    if (
      accounts.some(
        (account: AccountInterface) => account.account_id === accountId
      )
    ) {
      setErrors({
        ...errors,
        accountId: [...errors.accountId, "Account ID already taken!"],
      });
    } else {
      setErrors({
        ...errors,
        accountId: [],
      });
    }
  }, [accountId]);

  useEffect(()=>{
    if(register.isSuccess){
      dispatch(setAccount(register.data));
    }
  },[register]);

  function onRegisterClick() {
    if (registerType == "email") {
      register.mutate({
        full_name: name,
        account_id: accountId,
        email: registerValue.email,
      });
    } else {
      register.mutate({
        full_name: name,
        account_id: accountId,
        phone: registerValue.phone,
      });
    }
  }

  return (
    <>
      <Header title="Create NEAR account" />
      <Box width="100%">
        <Flex flexFlow="column" width="100%" p={4}>
          <Text fontSize="14px" color="#808080">
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </Text>
          <FormControl mt={6} isInvalid={errors.accountId.length > 0}>
            <FormLabel htmlFor="full_name" color="#808080">
              Full name
            </FormLabel>
            <Input
              isInvalid={false}
              onChange={onNameChange}
              id="full_name"
              placeholder="Ex. John doe"
            />
            <FormLabel htmlFor="account_id" color="#808080" mt={3}>
              Account ID
            </FormLabel>
            <InputGroup>
              <Input
                onChange={onAccountIdChange}
                id="account_id"
                placeholder="yourname"
              />
              <InputRightAddon children=".near" />
            </InputGroup>
            {/* I am assuming for scalability purposes there could be multiple errors here */}
            {errors.accountId?.map((err) => (
              <FormErrorMessage>{err}</FormErrorMessage>
            ))}
          </FormControl>
          <Flex width="100%" justifyContent="center" alignItems="center">
            <ContinueButton
              isLoading={register.isLoading}
              onClick={onRegisterClick}
              isDisabled={
                errors.accountId.length > 0 || name == "" || accountId == ""
              }
            />
          </Flex>
          <Text textAlign="center" fontSize="12px" color="#6F6E73" mt={6}>
            By creating a NEAR account, you agree to the NEAR Wallet{" "}
            <Link href="#">
              <Text display="inline" color="brand.100">
                Terms of Service
              </Text>
            </Link>{" "}
            and{" "}
            <Link href="#">
              <Text display="inline" color="brand.100">
                Privacy Policy.
              </Text>
            </Link>
          </Text>
        </Flex>
        <Divider />
        <AlreadyHaveAnAccount />
      </Box>
    </>
  );
}

export default CreateAccount;
