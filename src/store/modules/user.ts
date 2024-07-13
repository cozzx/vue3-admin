import { defineStore } from "pinia";
import AuthAPI from "@/api/auth";
import { store } from "@/store";

import { LoginData } from "@/api/auth";

export const useUserStore = defineStore("user", () => {
  /**
   * 登录
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>(() => {
      AuthAPI.login(loginData)
        .then(() => {
          console.log("then");
        })
        .catch(() => {
          console.log("error");
        });
    });
  }

  return {
    login,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
