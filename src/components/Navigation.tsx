import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem
{
    label: string;
    path?: string;
    subItems?: MenuItem[];
}

const menuOptions: MenuItem[] = [
    {
        label: 'Properties',
        subItems: [
            { label: 'Registration', path: '/properties/registration' },
            { label: 'Search and listing', path: '/properties/search' },
        ],
    },
    {
        label: 'Customers',
        subItems: [
            { label: 'Registration', path: '/customers/registration' },
        ],
    },
];

const Navigation: React.FC = () =>
{
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuToggle = (menuLabel: string) =>
    {
        setOpenMenu(openMenu === menuLabel ? null : menuLabel);
    };

    return (
        <nav style={styles.nav}>
            <ul style={styles.menu}>
                {menuOptions.map((menu) => (
                    <li key={menu.label} style={styles.menuItem}>
                        <div
                            onClick={() => menu.subItems && handleMenuToggle(menu.label)}
                            style={styles.menuLink}
                        >
                            {menu.label}
                        </div>
                        {menu.subItems && openMenu === menu.label && (
                            <ul style={styles.subMenu}>
                                {menu.subItems.map((subItem) => (
                                    <li key={subItem.label} style={styles.subMenuItem}>
                                        <Link to={subItem.path || '#'} style={styles.subMenuLink}>
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#f4f4f4',
        padding: '0.5rem 1rem',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    menu: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        gap: '2rem',
    },
    menuItem: {
        position: 'relative',
    },
    menuLink: {
        cursor: 'pointer',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#333',
    },
    subMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        listStyleType: 'none',
        margin: 0,
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1001,
    },
    subMenuItem: {
        marginBottom: '0.5rem',
    },
    subMenuLink: {
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '0.9rem',
    },
};

export default Navigation;
