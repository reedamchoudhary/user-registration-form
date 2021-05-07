import React,{useState} from 'react'

const MultipleInputs = () => {

    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({...userRegistration, [name] : value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration, id: new Date().getTime().toString()}
        setRecords([...records, newRecord])
        console.log(records)

        setuserRegistration({username:"", email:"",phone:"", password:"" })
    }

    return (
        <>
            <form action ="" onSubmit={handleSubmit}>
                <div>
                
                    <label htmlFor = "username">Fullname</label>
                    <input type = "test" autoComplete="off" value = {userRegistration.username} onChange = {handleInput} name = "username" id = "username" /><br/>
                    <label htmlFor = "email">email</label>
                    <input type = "test" autoComplete="off" value = {userRegistration.email} onChange = {handleInput} name = "email" id = "email" /><br/>
                    <label htmlFor = "phone">phone</label>
                    <input type = "test" autoComplete="off" value = {userRegistration.phone} onChange = {handleInput} name = "phone" id = "phone" /><br/>
                    <label htmlFor = "password">password</label>
                    <input type = "password" autoComplete="off" value = {userRegistration.password} onChange = {handleInput} name = "password" id = "password" />
                </div>
                <button typw="submit">Register</button>
            </form>
            <div>
                {
                    records.map((currentElem)=>{
                        return(
                            <div className = "showDataStyle" key={currentElem.id}>
                                <p>{currentElem.username}</p>
                                <p>{currentElem.email}</p>
                                <p>{currentElem.phone}</p>
                                <p>{currentElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultipleInputs