import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Sidebar.module.scss";
import { config } from "~/config";
import Button from "~/components/Core/Button";
import SuggestedList from "./SuggestedList";
import FollowingList from "./FollowingList";

import Menu from "./Menu/Menu";

function Sidebar() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_scrollbar}>
        <Menu />
        <hr className={styles.hr} />
        {!user && (
          <div className={styles.sidebar_login_wrapper}>
            <div className={styles.sidebar_login}>
              <p className={styles.login_tip}>
                Prijavite se da pratite kreatore, objavljujete videee i kometarisete.
              </p>
              <Link to={config.routes.login}>
                <Button outline large className={styles.button_login}>
                  Prijavi se
                </Button>
              </Link>
            </div>
            <hr className={styles.hr} />
          </div>
        )}

        <SuggestedList />

        {user && <FollowingList />}

        <div className={styles.contact}>
          <p>Kontaktiraj developera</p>
          <a
            className={styles.facebook}
            href="https://www.instagram.com/timurrr.js"
          >
            Timur Zupčević
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
