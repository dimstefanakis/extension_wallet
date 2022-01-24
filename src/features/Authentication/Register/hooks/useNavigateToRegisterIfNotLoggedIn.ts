import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

function useNavigateToRegisterIfNotLoggedIn() {
  const router = useRouter();
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.authentication
  );

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/register");
    }
  }, [isLoggedIn]);
}

export default useNavigateToRegisterIfNotLoggedIn;
