
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculty(){

    const [data, setData] = useState([]);

    const apiUrl = "https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/faculties";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const formatedFaculty = data.map((fac)=>{
        return(
            <tr>
                <td>{fac.id}</td>
                <td>{fac.FacultyID}</td>
                <td>{fac.FacultyName}</td>
                <td><Link className="btn btn-primary" to={"/faculty/"+fac.id}>Read More</Link></td>
            </tr>
        );
    })

    return(<table className="table">{formatedFaculty}</table>);
}

export default Faculty;
