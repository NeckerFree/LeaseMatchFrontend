import React, { useState } from 'react';

interface MenuItem
{
    label: string;
    subItems?: MenuItem[];
}

const menuOptions: MenuItem[] = [
    {
        label: 'Properties',
        subItems: [
            { label: 'Registration' },
            { label: 'Search and listing' },
        ],
    },
    {
        label: 'Customers',
        subItems: [
            { label: 'Registration' },
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
        <nav style={{ padding: '1rem', background: '#f4f4f4', borderBottom: '1px solid #ccc' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                {menuOptions.map((menu) => (
                    <li key={menu.label} style={{ marginBottom: '0.5rem' }}>
                        <div
                            onClick={() => menu.subItems && handleMenuToggle(menu.label)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                padding: '0.5rem',
                                background: '#eaeaea',
                                borderRadius: '5px',
                            }}
                        >
                            {menu.label}
                        </div>
                        {menu.subItems && openMenu === menu.label && (
                            <ul style={{ listStyleType: 'none', margin: 0, paddingLeft: '1rem' }}>
                                {menu.subItems.map((subItem) => (
                                    <li key={subItem.label} style={{ marginTop: '0.3rem' }}>
                                        <a
                                            href={`#${subItem.label.replace(/\s+/g, '-').toLowerCase()}`}
                                            style={{ textDecoration: 'none', color: '#007bff' }}
                                        >
                                            {subItem.label}
                                        </a>
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

export default Navigation;
