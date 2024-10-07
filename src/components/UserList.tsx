import Users from '../db/Users.json';

function UserList() {

    return(
        <main className="px-10 py-5">
            <h1 className='font-mono font-medium text-lg'>Alle Gebruikers</h1>
            <div id="container-main" className="flex flex-col tems-center= shadow-md border-2 rounded-lg">
                {Users.users.map((users) => {
                    return (
                        <div className="flex justify-between items-center p-3 border-solid border-2 border-slate-100">
                            <p>{users.id}| {users.naam}</p>
                            {/* <button className="font-sans text-sm rounded-lg bg-slate-600 font-normal text-white p-2">More info</button> */}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default UserList;