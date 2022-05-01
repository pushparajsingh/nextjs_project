import React from "react";
import Link from "next/link";
import { FaHome, FaUsers, FaNetworkWired } from "react-icons/fa";
import styles from "./Admin.module.scss";
import { useRouter } from "next/router";

const Sidebar = () => {
  const params = useRouter();
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/home">
            <a>
              <FaHome />
              Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>
              <FaUsers />
              Team
            </a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>
              <FaNetworkWired />
              Team
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
