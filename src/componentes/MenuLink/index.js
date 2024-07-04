import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            to={to}
            className={({ isActive, isTransitioning }) =>
                `${styles.link}  ${isActive ? styles.linkDestacado : ""} ${isTransitioning ? styles.transicionando : ""}`
            }
        >
            {children}
        </NavLink>
    )
}