import { useEffect, useState } from 'react';
import styles from './WebAuthoring.module.css';
import { useAuth } from '../auth/useAuth';
import { TableauAuthoringViz } from '@tableau/embedding-api-react';
import { tableauServer, site } from "../../constants/Constants";

function WebAuthoring() {

  const { getJwtFromServer } = useAuth()
  const [jwt, setJwt] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setJwt(await getJwtFromServer());
    })();
  }, []);

  if (!jwt) {
    return null;
  } else {

    return (
      <div className={styles.root}>
        <TableauAuthoringViz
          src={`https://${tableauServer}/t/${site}/authoringNewWorkbook/${crypto.randomUUID()}/eBikesInventoryandSales`}
          token={jwt}
          hideCloseButton={true}
        />
      </div>
    )

  }

}

export default WebAuthoring;
