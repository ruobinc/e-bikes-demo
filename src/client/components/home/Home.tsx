import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { users } from '../../../db/users';
import styles from './Home.module.css';

function Home() {
  const { userId } = useParams();
  
  // Find current user
  const currentUser = users.find(user => user.username === userId);

  return (
    <div className={styles.root}>
      <div>
        <video className={styles.video} autoPlay muted loop>
          <source src="/ebikes.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroDynamo}>
          <h1 className={styles.title}>DYNAMO X2</h1>
          <h2 className={styles.subtitle}>不可能を克服する</h2>
          {currentUser?.isRetailer ? (
            <Link to={`/${userId}/product-catalog`} className={styles.action}>詳細へ</Link>
          ) : (
            <Link to={`/${userId}/performance`} className={styles.action}>詳細へ</Link>
          )}
        </div>
      </div>
      <div>
        <img className={styles.img} src='/CyclingGrass.jpg' />
        <div className={styles.heroElectra}>
          <h1 className={styles.title}>ELECTRA SERIES</h1>
          <h2 className={styles.subtitle}>RIDE WITH POWER</h2>
          <div className={styles.action}>SEE ELECTRA BIKES</div>
        </div>
      </div>
    </div>
  )
}

export default Home;
