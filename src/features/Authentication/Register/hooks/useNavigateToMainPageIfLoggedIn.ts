import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";

function useNavigateToMainPageIfLoggedIn() {
  const router = useRouter();
  const { isLoggedIn, registerType, registerValue } = useSelector(
    (state: RootState) => state.authentication
  );

  // navigate user to main screen if he is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [router, isLoggedIn]);
}

export default useNavigateToMainPageIfLoggedIn;
