import React, {useState}from 'react'


export default function Options() {
    const [formData, changeFormData] = useState(
        {sort:'',
         size:''
        });
    
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        changeFormData({...formData, [name]: value});
    }

    return (
        <div>
            <form>
                <input type="button" value="Generate Random" />
                <input type="radio" name="sort" id="" value="0"/>
                <input type="radio" name="sort" id="" value="1"/>
                <input type="radio" name="sort" id="" value="2"/>
                <input type="radio" name="sort" id="" value="3"/>
                <input type="radio" name="sort" id="" value="4"/>
                <input type="range" name="size" id="" min="5" max="1000" onChange={handleChange} />
                <input type="button" value="Sort" />
                <p>{formData}</p>
            </form>
        </div>
    )
}
