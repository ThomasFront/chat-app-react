import { useNavigate } from 'react-router-dom'
import { Wrapper } from './Navbar.styles'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import userImage from '/images/user.png'
import { useDispatch } from 'react-redux';
import { updateUsername, usernameSelector } from '../../slices/chatSlice';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const username = useSelector(usernameSelector)
  const [user] = useAuthState(auth);

  const getUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q)
      dispatch(updateUsername(docs.docs[0].data().name))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <Wrapper>
      <h2 onClick={() => navigate('/')}>Beast Chat</h2>
      <div>
        {user &&
          <>
            <p>Cześć <span>{username}</span>!</p>
            <img src={userImage} alt="Avatar użytkownika" />
          </>
        }
        <button onClick={() => { user ? handleLogout() : navigate('/login') }}>{user ? 'Wyloguj się' : 'Zaloguj się'}</button>
      </div>
    </Wrapper>
  )
}


