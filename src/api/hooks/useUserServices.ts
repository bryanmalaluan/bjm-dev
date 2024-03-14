import { userState$ } from "@src/legend-state/user";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getUser } from "../users";

const useUserServices = () => {
  const { data: result, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  React.useEffect(() => {
    if (result?.data) {
      userState$.user.set(result?.data);
    }
  }, [result]);

  return { user: result?.data, isLoading };
};

export default useUserServices;
