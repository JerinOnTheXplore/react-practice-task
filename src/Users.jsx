import { use } from "react"
import User from "./User"
export default function Users ({usersPromise}){
    const users = use(usersPromise)
    console.log(users)
    return(
        <div className="count">
            <h2>User Info:{users.length}</h2>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    )
}