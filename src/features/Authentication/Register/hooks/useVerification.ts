import { useMutation } from "react-query";

function useVerificationMutation() {
  const mutation = useMutation((data: number) => {
    //return fetch("/verify", JSON.stringify(data));
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  });

  return mutation;
}

export default useVerificationMutation;
