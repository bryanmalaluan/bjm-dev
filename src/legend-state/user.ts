import { observable } from "@legendapp/state";
import { User } from "@src/api/types";

export const userState$ = observable({
  user: null as User | null,
});
