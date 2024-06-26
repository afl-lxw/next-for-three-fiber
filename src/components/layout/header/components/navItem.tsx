import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from '../../styles/header.module.scss'

interface InNavItem {
  href: string;
  children: React.ReactNode,
  onMouseEnter: (ev: MouseEvent) => void;
}

const NavItem: FC<InNavItem> = ({ href, children, onMouseEnter }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className="h-full pr-4 pl-4 cursor-pointer flex items-center justify-center">
      <motion.div
        className={`h-full `}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        layout
        onHoverStart={onMouseEnter}
      >
        <span className={`${isActive ? styles.dotActive : styles.dotInactive} text-black h-full flex items-center justify-center`} >{children}</span>
      </motion.div>
    </Link>
  );
};

export default NavItem;