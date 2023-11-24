import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function Fruit() {
  let [students, setStudents] = useState([]);

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [accessToken, setAccessToken] = useState('');

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      setAccessToken(token);
    } else {
      // loginWithRedirect()
    }
  };

  useEffect(() => {
    checkUser();
  }, [isAuthenticated]);

  const getStudents = async () => {
    try {
      let data = await axios.get('http://localhost:8080/students', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setStudents(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
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
            <p>No data</p>
          )}
        </ul>
      </div>
    </div>
  );
}
