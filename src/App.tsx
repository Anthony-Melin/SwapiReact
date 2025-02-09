import { Suspense, use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type UserType = {
    id: string
    firstName: string
    lastName: string
}

const fetchUser = async () => {
    const response = await fetch('/api/user')
    return (await response.json()) as UserType
}

const User = ({ promise }: { promise: ReturnType<typeof fetchUser> }) => {
    const user = use(promise)
    return (
        <strong data-testid="user-text">
            You are {user.firstName} {user.lastName}
        </strong>
    )
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>
                <Suspense fallback={'waiting for user data...'}>
                    <User promise={fetchUser()} />
                </Suspense>
            </p>
        </>
    )
}

export default App
