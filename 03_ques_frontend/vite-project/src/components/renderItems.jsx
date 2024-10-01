import axios from 'axios';
import { useState } from 'react';

export const RenderItems = () => {

    const [name, setName] = useState([]);

    const fetchData = async() => {
        try {
            const response = await axios.get("http://localhost:3000/student/getAllStudentMark");

            const items = response.data.response.map(item => ({
                name: item.name,
                marks: item.marks
              }));

            console.log(items, "itemsssssssssssssss");
            console.log(response, "response");
             
            setName(items);
        } catch (error) {
            console.error("Error fetching", error);
        }
    }


  return (
    <>
    <h1>Welcome</h1>
    <button onClick={fetchData}>Click here to see result</button>
    <div>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {name.map((student, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{student.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{student.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}
