import { AxiosResponse } from "axios";
import client from "../helpers/axiosClient";
import { UserRaw } from "./types/user";

function getUsers() {
  return client.get("").then((response: AxiosResponse<UserRaw[]>) => response);
}

function createUser() {
  return client.post("", {});
}

function updateUser() {
  return client.put("");
}

export { getUsers, createUser, updateUser };
