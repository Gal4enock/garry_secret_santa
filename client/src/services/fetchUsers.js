import axios from 'axios';

const URL = 'http://localhost:5000/';

class FetchUsers {
  getUsers(name) {
    const users = axios.post(URL, name).then(resp => resp)
    return users
  }

  addUser(username) {
    const user = axios.post(URL, username).then(resp => resp);
    return user;
  }
}

export default new FetchUsers();
