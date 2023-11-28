import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';

export default function Fruit() {
  let [students, setStudents] = useState([]);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      let data = await axios.get('http://localhost:8080/students', {
        headers: {
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
      });
      setStudents(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      Welcome ! {user.nickname}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <ul style={{ textAlign: 'left' }}>
          {students && students.length > 0 ? (
            students.map((student) => (
              <li>{`${student.first_name} ${student.last_name}`}</li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </div>
    </div>
  );
}
