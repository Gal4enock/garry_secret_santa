import axios from 'axios';

const URL = 'http://localhost:4000/';

class FetchUsers {
  getUsers(name) {
    const users = axios.post(URL, {name}).then(resp => resp.data)
    return users
  };

  addUser(username, wishes) {
    const user = axios.post(`${URL}user`, {username, wishes}).then(resp => resp);
    return user;
  };

  deleteUser(id) {
      axios.delete(`${URL}user/${id}`).then(resp => resp);
  }

  async createPair(fromUser, toUser, wishes) {
    const resp = await axios.post(`${URL}pair`, { fromUser, toUser, wishes });
    return resp;
  }
}

export default new FetchUsers();
