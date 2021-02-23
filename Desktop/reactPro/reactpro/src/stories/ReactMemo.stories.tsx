import React, {useState} from 'react';

export default {
  title: 'reactMemoDemo',
}

const NewMessagesCounter = (props: {count: number}) => {
  return <div>{props.count}</div>
}
const UsersSec = (props: {users: Array<string>}) => {
  console.log('render');
  return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSec);

export const Example1 = () => {
  const [count, setCounter] = useState(0);
  const [users, setUsers] = useState(['Rolya', 'Nick', 'Olua', 'Gikz'])

  const increaseCount = () => {
    setCounter(count+1);
  }
  const addUser = () => {
    setUsers([...users, 'Moola']);
  }
  return <>
    <button onClick={increaseCount}>+</button>
    <button onClick={addUser}>+</button>
    <NewMessagesCounter count={count} />
    <Users users={users}/>
  </>
}

