import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Text, Flex, Box } from "@chakra-ui/layout";
import { CloseIcon, InfoIcon } from "@chakra-ui/icons";
import Header from "../src/flat/Header";
import ContinueButton from "../src/flat/ContinueButton";
import Divider from "../src/flat/Divider";
import AlreadyHaveAnAccount from "../src/flat/AlreadyHaveAnAccount";
import { setAccount } from "../src/features/Authentication/authenticationSlice";
import useRegisterMutation from "../src/features/Authentication/Register/hooks/useRegister";
import useCheckAccountIdExistsMutation from "../src/features/Authentication/Register/hooks/useCheckAccountIdExists";
import useNavigateToMainPageIfLoggedIn from "../src/features/Authentication/Register/hooks/useNavigateToMainPageIfLoggedIn";
import { RootState } from "../src/store";
import accounts from "../mockdata/accounts.json";
interface Errors {
  accountId: string[];
}

// Error handling would be much cleaner with a library like formik
// but for the sake of the exercise and since there is only one input that
// needs to be validated I do it manually
function CreateAccount() {
  useNavigateToMainPageIfLoggedIn();
  const dispatch = useDispatch();
  const register = useRegisterMutation();
  const checkIfAccountIdExists = useCheckAccountIdExistsMutation();
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
    checkIfAccountIdExists.mutate(accountId);
  }, [accountId]);

  useEffect(()=>{
    if (checkIfAccountIdExists.data) {
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
  }, [checkIfAccountIdExists.data])

  useEffect(()=>{
    if(register.isSuccess){
      dispatch(setAccount(register.data));
    }
  },[register, dispatch]);

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
      <Header title="Create NEAR account" rightAddon={<CloseIcon h="10px" />}/>
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
            <FormLabel htmlFor="account_id" color="#808080" mt={3} alignItems="center" display="flex">
              Account ID <InfoIcon ml={2}/>
            </FormLabel>
            <InputGroup>
              <Input
                onChange={onAccountIdChange}
                id="account_id"
                placeholder="yourname"
              />
              <InputRightAddon>.near</InputRightAddon>
            </InputGroup>
            {/* I am assuming for scalability purposes there could be multiple errors here */}
            {errors.accountId?.map((err) => (
              <React.Fragment key={err}>
                <FormErrorMessage>{err}</FormErrorMessage>
              </React.Fragment>
            ))}
          </FormControl>
          <Flex width="100%" justifyContent="center" alignItems="center">
            <ContinueButton
              isLoading={register.isLoading || checkIfAccountIdExists.isLoading}
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
