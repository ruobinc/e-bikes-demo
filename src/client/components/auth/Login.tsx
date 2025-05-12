import { users } from '../../../db/users';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import LoginUser from './LoginUser';
import imagePath from '@/assets/CyclingGrass.jpg';
import { useAppContext } from '../../App';

function Login() {

  const { updateUserLicense } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className={styles.root} style={{ backgroundImage: `url(${imagePath})` }}>

      {
        users.map((user) => {
          return <LoginUser
            user={user}
            key={user.username}
            onClick={() => {
              navigate(`${user.username}/Home`)
              updateUserLicense(user.license);
            }} />
        })
      }

      <div className={styles.footer}>
        <h3>Resources</h3>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open('/DemoScript', '_blank');
              }}
            >
              Demo script
            </a>
          </li>
          <li>
            <a href="https://github.com/tableau/e-bikes-demo" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://developer.salesforce.com/tools/tableau/embedding-playground" target="_blank">Tableau Embedding Playground</a>
          </li>
          <li>
            <a href="https://help.tableau.com/current/api/embedding_api/en-us/index.html" target="_blank">Tableau Embedding Guide</a>
          </li>
          <li>
            <a href="https://www.tableau.com/developer" target="_blank">Tableau Developer Program</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Login;
