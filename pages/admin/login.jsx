// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import styles from '../../styles/Login.module.css'

// const Login = () => {
//     const [username, setUsername] = useState(null)
//     const [password, setPassword] = useState(null)
//     const [error, setError] = useState(null)
//     const router = useRouter()

//     const handleClick = async () => {
//         try {
//             await axios.post('http://localhost:3000/api/Login', { username, password })
//             router.push('/admin')
//         } catch (error) {
//             setError(true)
//         }

//     }
//     return (
//         <div className={styles.auth}>
//             <h1>Login</h1>
//             <form>
//                 <input type='text' placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)} />
//                 <input type='password' placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
//                 <button onClick={handleClick}>Login</button>
//                 {error && <p>Wrong Credentials</p>}
//             </form>
//         </div>
//     )
// }

// export default Login