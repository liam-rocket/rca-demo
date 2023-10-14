import { useSearchParams, Navigate } from 'react-router-dom';

/**
 * Navigate to another page
 *
 * const handleSurpriseMe = (location) => {
 *  return <Navigate to={`/surpriseMe?location=${location}`} replace={true}/>
 * }
 *
 */

function SurpriseMe() {
  let [searchParams] = useSearchParams();
  return (
    <div style={{ marginTop: '50px' }}>{searchParams.get('location')}</div>
  );
}

export default SurpriseMe;
