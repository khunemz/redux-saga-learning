import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './../redux/actions/users'
import {Card} from './Card'
export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  useEffect(() => {
    const users =[
      {
        id: 1,
        name: 'chutipong roobklom',
        company: {
          name: 'Chutipong Enterprise',
          catchPhrase: 'Do the right thing'
        }
      }
    ];
    dispatch(getUsers(users))
  }, [])
  return (
    <>
      {
        users.length > 0 && users.map((user) => (
            <Card user={user} key={user.id} />
          )
        )
      }

      { users.length === 0 && <p>No user available!!</p>}
    </>
  )
}
