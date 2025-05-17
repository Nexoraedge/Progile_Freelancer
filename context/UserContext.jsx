// context/UserContext.jsx
"use client"
import { createContext, useState, useEffect } from "react"
import loadUser from "@/app/actions/Util"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await loadUser()
        if (user) {
          setUserData(user)
        }
      } catch (error) {
        console.error('Error loading user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [])

  return (
    <UserContext.Provider value={{ userData, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}