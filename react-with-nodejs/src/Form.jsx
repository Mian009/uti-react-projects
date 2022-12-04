import { useState } from "react";
import { Link } from "react-router-dom";
function Form() {
    const [text, setText] = useState({
        name: "",
        email: "",
        phonenum: "",
        position: "",
        messageDetails: "",

    });



    const settingText = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setText({ ...text, [name]: value });

    }

    const submit = (e) => {
        e.preventDefault();
        setText({
            name: "",
            email: "",
            phonenum: "",
            position: "",
            messageDetails: "",
    
        });



        fetch("/form", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(text)
        })

            .then((result) => { console.log(result) })
            .catch((error) => { console.log(error.data) });
        alert("Submitted successfully");



    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/"><h4>Home</h4></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/list"><h4>Data List</h4></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="form-container" onSubmit={submit}>
                <h1>Form</h1>
                Name : 
                <input type="text" placeholder="Name" name="name" value={text.name} onChange={settingText} required /><br/><br />
                Email : 
                <input type="email" placeholder="Email" name="email" value={text.email} onChange={settingText} required /><br/><br />
                Phone No : 
                <input type="number" placeholder="Phone No" name="phonenum" value={text.phonenum} onChange={settingText} required /><br/><br />
                Position : 
                <select name="position" value={text.position} onChange={settingText} required>
                    <option value=""></option><br/>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                </select><br /><br />
                Message :
                <textarea name="messageDetails" cols="16" rows="2" placeholder="Your Message..." value={text.messageDetails} onChange={settingText} required></textarea> <br /> <br />
                 
                 <button className="submitBtn">Submit Form</button>
            </form>

        </>
    );
}

export default Form;