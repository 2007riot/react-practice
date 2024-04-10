import { useEffect, useState } from "react"
import User from "./user"
import './styles.css'




export default function GitHubProfileFinder () {

    const [userName, setUsername] = useState("2007riot")
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)

    function handleSubmit() {
        fettchGithubUserData()
    }

    async function fettchGithubUserData () {

        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()

            if (data) {
                setUserData(data)
                setLoading(false)
                setUsername("")
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fettchGithubUserData()
    }, [])

    if (loading) return (<h3>Data is loading. Please wait...</h3>)

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text" 
                placeholder="Search Github Username..."
                value={userName}
                onChange={(event)=> setUsername(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData}/>
                : null
            }
        </div>
    )
}