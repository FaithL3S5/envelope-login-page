import { atom } from "recoil";

export interface AuthLoginState {
  view: LoginView;
}

export type LoginView = "login" | "signup" | "resetPassword";

const defaultLoginState: AuthLoginState = {
  view: "login",
};

export const authLoginState = atom<AuthLoginState>({
  key: "authLoginState",
  default: defaultLoginState,
});

export const fadeTransitionState = atom<any>({
  key: "fadeTransitionState",
  default: {
    isOpenLogin: true,
    isOpenSignup: false,
    isOpenReset: false,
    isOpenAuth: false,
  },
});

// export const errorHandlerState = atom<any>({
//   key: "errorState",
//   default: {
//     status: false,
//     message: ""
//   },
// });
