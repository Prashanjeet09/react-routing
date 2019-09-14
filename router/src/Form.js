import React from 'react';


const Form = () =>{
    return(
        <div>
        <h2>Plz fill form</h2>
        <form>
            Fullname:<br />
            <input type="text"value=""/><br />
            Email:<br />
            <input type="email" value=""/><br />
            Mobile.no:<br/>
            <input type="number" value=""/><br />
            Message:<br />
            <textarea>Plz write your message</textarea>

        </form>
        </div>
    )
}


export default Form;