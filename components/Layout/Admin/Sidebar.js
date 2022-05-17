import React from "react";
import Link from "next/link";
import { FaHome, FaUsers, FaNetworkWired } from "react-icons/fa";
import { MdReviews } from 'react-icons/md'
import styles from "./Admin.module.scss";
import { useRouter } from "next/router";

const Sidebar = () => {
  const params = useRouter();
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/admin/dashboard">
            <a>
              <FaHome />
              Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/team">
            <a>
              <FaUsers />
              Team
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/client">
            <a>
              <MdReviews/>
              Clientstetimonials
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
