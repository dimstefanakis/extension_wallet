import { useMutation } from "react-query";
import { AccountInterface } from "../../interface";

function useRegisterMutation() {
  const mutation = useMutation((data: AccountInterface) => {
    //return fetch("/api", JSON.stringify(data));
    return new Promise(function (resolve) {
      setTimeout(()=>{
        resolve(data);
      }, 1000)
    });
  });

  return mutation;
}

export default useRegisterMutation;
