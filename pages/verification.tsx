import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Text, HStack } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { CloseIcon } from "@chakra-ui/icons";
import Header from "../src/flat/Header";
import ContinueButton from "../src/flat/ContinueButton";
import Divider from "../src/flat/Divider";
import useVerificationMutation from "../src/features/Authentication/Register/hooks/useVerification";
import useNavigateToMainPageIfLoggedIn from "../src/features/Authentication/Register/hooks/useNavigateToMainPageIfLoggedIn";
import { RootState } from "../src/store";

function Verification() {
  useNavigateToMainPageIfLoggedIn();
  const router = useRouter();
  const verify = useVerificationMutation();
  const [pinValue, setPinValue] = useState("");
  const [pinValueComplete, setPinValueComplete] = useState(false);

  const { registerType, registerValue } = useSelector(
    (state: RootState) => state.authentication
  );

  function onPinChange(value: string) {
    setPinValue(value);
    if (value.length == 6) {
      setPinValueComplete(true);
      verify.mutate(parseInt(value));
    } else {
      setPinValueComplete(false);
    }
  }

  function onContinueClick() {
    verify.mutate(parseInt(pinValue));
  }

  useEffect(()=>{
    if(verify.isSuccess){
      router.push('/create_account');
    }
  }, [verify.status])

  return (
    <>
      <Header title="Verification" rightAddon={<CloseIcon h="10px"/>}/>
      <Flex flexFlow="column" justifyContent="center" mt={6}>
        <Text fontSize="14px" textAlign="center">
          We&apos;ve sent a 6-digit verification code to{" "}
          {registerType == "email" ? "the email address" : "your phone"}
        </Text>
        <Text textAlign="center" mt={2} color="#2196f3" fontSize="16px">
          {registerType == "email" ? registerValue.email : registerValue.phone}
        </Text>

        <Flex flexFlow="column" alignItems="center" mt={6}>
          <Text fontSize="12px" color="gray">
            Enter verification code
          </Text>
          <HStack mt={2}>
            <PinInput focusBorderColor="brand.100" onChange={onPinChange}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <ContinueButton
            mt={8}
            isDisabled={!pinValueComplete}
            isLoading={verify.isLoading}
            onClick={onContinueClick}
          />
          <Divider />
          <Flex flexFlow="column" alignItems="center" fontSize="14px">
            <Text>Didn&apos;t receive your code?</Text>
            <Text mt={7} textAlign="center" color="#2196f3">
              <Link href="#">
                <a>Send to a different email address</a>
              </Link>
            </Text>
            <Text mt={7} textAlign="center" color="#2196f3">
              <Link href="#">
                <a>Resend your code</a>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Verification;
