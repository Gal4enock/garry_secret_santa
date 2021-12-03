import style from './UserList.module.css'

const UserList = function ({ list, handleChange }) {
  console.log("list", list);
  return (
    <select onChange={handleChange} className={style.startSelect}>
      <option >Choose your name from the list</option>
      {list.map(el =>  <option key={el._id} value={el.username} >{el.username}</option>)}
    </select>
  )
}

export default UserList