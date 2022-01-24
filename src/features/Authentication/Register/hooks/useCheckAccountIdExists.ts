import { useMutation } from "react-query";
import { AccountInterface } from "../../interface";
import accounts from "../../../../../mockdata/accounts.json";

// this probably pings the server to check if a user with this id exists
// it could either be a mutation or a query
// I'm doing a mutation since last time I did this was a POST request instead of a GET
function useCheckAccountIdExists() {
  const mutation = useMutation((data: string) => {
    //return fetch("/{accountId}", JSON.stringify(data));
    return new Promise(function (resolve) {
      setTimeout(() => {
        let exists = accounts.some(
          (account: AccountInterface) => account.account_id === data
        );
        resolve(exists);
      }, 1000);
    });
  });

  return mutation;
}

export default useCheckAccountIdExists;
