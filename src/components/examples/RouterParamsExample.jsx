/**
 * Demonstrates dynamic routes, route params, and programmatic navigation.
 */
import { Link } from 'react-router-dom';

export const routerParamsCode = `<Route path="/users/:userId" element={<UserRoutePage />} />

function UserRoutePage() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Back</button>;
}`;

export function RouterParamsExample() {
  return (
    <div className="stack">
      <p>Open a dynamic route and read the <code>userId</code> URL segment.</p>
      <div className="button-row">
        <Link className="button-link" to="/users/ada">Ada</Link>
        <Link className="button-link" to="/users/grace">Grace</Link>
      </div>
    </div>
  );
}

export const routerParamsExample = {
  title: 'Router Params',
  description: 'Dynamic routes expose URL segments through useParams and can navigate with useNavigate.',
  code: routerParamsCode,
  demo: <RouterParamsExample />
};
