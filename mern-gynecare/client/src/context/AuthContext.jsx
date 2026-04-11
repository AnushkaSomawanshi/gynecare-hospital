import React, { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
}

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem('gynecare_token')
    const userStr = localStorage.getItem('gynecare_user')
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        dispatch({ type: 'LOGIN', payload: { user, token } })
      } catch {
        localStorage.removeItem('gynecare_token')
        localStorage.removeItem('gynecare_user')
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [])

  const login = async (email, password, role = 'patient') => {
    const res = await axios.post('/api/auth/login', { email, password, role })
    const { token, user } = res.data
    localStorage.setItem('gynecare_token', token)
    localStorage.setItem('gynecare_user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    dispatch({ type: 'LOGIN', payload: { user, token } })
    return user
  }

  const loginWithOTP = async (phone, otp) => {
    const res = await axios.post('/api/auth/login/otp', { phone, otp })
    const { token, user } = res.data
    localStorage.setItem('gynecare_token', token)
    localStorage.setItem('gynecare_user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    dispatch({ type: 'LOGIN', payload: { user, token } })
    return user
  }

  const register = async (data) => {
    const res = await axios.post('/api/auth/register', data)
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('gynecare_token')
    localStorage.removeItem('gynecare_user')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: 'LOGOUT' })
  }

  const updateUser = (data) => {
    const updated = { ...state.user, ...data }
    localStorage.setItem('gynecare_user', JSON.stringify(updated))
    dispatch({ type: 'UPDATE_USER', payload: data })
  }

  return (
    <AuthContext.Provider value={{ ...state, login, loginWithOTP, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
