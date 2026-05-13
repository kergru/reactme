/**
 * Demonstrates reading dynamic URL segments with React Router route params.
 */
import { Link, useNavigate, useParams } from 'react-router-dom';

export function UserRoutePage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="route-page">
      <p className="eyebrow">Route: /users/:userId</p>
      <h2>User {userId}</h2>
      <p>
        This page reads the dynamic <code>userId</code> segment with <code>useParams</code>.
        The Back button uses <code>useNavigate</code> to move through browser history.
      </p>
      <div className="button-row">
        <button type="button" onClick={() => navigate(-1)}>Back</button>
        <Link className="button-link" to="/">Features</Link>
      </div>
    </div>
  );
}
