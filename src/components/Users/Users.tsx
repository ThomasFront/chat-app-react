import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers, usersSelector } from '../../slices/chatSlice'
import { AppDispatch } from '../../store'
import { Wrapper } from './Users.styles'
import { TbUserSearch } from 'react-icons/tb'

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(usersSelector)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Wrapper>
      <div>
        <TbUserSearch />
        <h2>Lista użytkowników:</h2>
      </div>
      <ol>
        {users?.map(user => {
          return <li key={user.uid}>{user.name}</li>
        })}
      </ol>
    </Wrapper>
  )
}
