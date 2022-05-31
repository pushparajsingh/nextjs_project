import React from "react";
import Link from "next/link";
import { FaHome, FaUsers, FaUserGraduate,FaMicroblog } from "react-icons/fa";
import { MdReviews } from 'react-icons/md'
import styles from "./Admin.module.scss";
import { useRouter } from "next/router";
import {BiCategoryAlt} from "react-icons/bi";
import {CgEventbrite} from "react-icons/cg"

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
          <Link href="/admin/blogs">
            <a>
              <FaMicroblog />
             Blogs
            </a>
          </Link>
        </li>
        <li>
        <Link href="/admin/careers">
            <a>
            <FaUserGraduate />
            
              Careers
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/categories">
            <a>
              <BiCategoryAlt/>
              Categories
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/companyevent">
            <a>
              <CgEventbrite/>
              Company event
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/clientstetimonials">
            <a>
              <MdReviews/>
              Clients tetimonials
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
      </ul>
    </div>
  );
};
export default Sidebar;
