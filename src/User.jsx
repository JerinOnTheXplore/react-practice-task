export default function User({user}){
    console.log(user)
    return(
        <div className="count">
            <h3>Name: {user.name}</h3>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
            <p>Company: {user.company.name}</p>
            <p>Company Status: {user.company.catchPhrase
            }</p>
            <p>BS: {user.company.bs}</p>
        </div>
    )
}