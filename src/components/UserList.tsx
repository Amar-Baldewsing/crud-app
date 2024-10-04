import Users from '../db/Users.json';

function UserList() {
    return(
        <main className="px-10 py-5">
            <div id="container-main" className="flex flex-col tems-center= shadow-md border-2 rounded-lg p-4">
                {Users.users.map((user) => {
                    return (<div className='' key={user.id}>{user.id}| {user.naam}({user.leeftijd})</div>)
                })}
            </div>
        </main>
    )
}

export default UserList;