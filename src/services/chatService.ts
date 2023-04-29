const API_URL = "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?"

export class ChatService {
  getAll = async () => {
    try {
      const response = await fetch( API_URL + new URLSearchParams({
        user: 'admin',
        password: 'admin',
    }))
      return response.json();
    } catch (e) {}
  }
}
