import { User } from "../models/user";

const API_URL = "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing"

export class AuthService {
  login = async (data: User) => {
    try {
        await fetch( API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });
    } catch (e) {}
  }
}
