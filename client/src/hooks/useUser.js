import { useEffect, useState } from "react"
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const useUser=()=>{
const [user, setUser] = useState(null)
const[isLoading, setIsLoading] = useState(true)
}