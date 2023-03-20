import { Link } from 'react-router-dom';
import { routes } from '../../routes';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <div data-testid="home" className={styles.container}>
      <ul>
        {routes.map((el) => (
          <li data-testid="link" key={el.path}>
            <Link to={el.path ?? ''}>{el.handle.linkName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
