import { use } from "react"

export default function User ({usersPromise}){
    const users = use(usersPromise)
    console.log(users)
    return(
        <div className="count">
            <h2>User Info</h2>
            
        </div>
    )
}