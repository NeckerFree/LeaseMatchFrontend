import React, { useState } from "react";

interface MenuItem
{
    label: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        label: "Properties",
        children: [
            { label: "Registration" },
            { label: "Search and Listing" },
        ],
    },
    {
        label: "Customers",
        children: [
            { label: "Registration" },
        ],
    },
];

const Navigation: React.FC = () =>
{
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (label: string) =>
    {
        setOpenItems((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const renderMenu = (items: MenuItem[], parentKey: string = "") =>
    {
        return (
            <ul>
                {items.map((item, index) =>
                {
                    const key = `${parentKey}${item.label}-${index}`;
                    const hasChildren = !!item.children;

                    return (
                        <li key={key}>
                            <div
                                onClick={() => hasChildren && toggleItem(key)}
                                style={{ cursor: hasChildren ? "pointer" : "default" }}
                            >
                                {item.label}
                                {hasChildren && (
                                    <span style={{ marginLeft: "5px" }}>
                                        {openItems[key] ? "-" : "+"}
                                    </span>
                                )}
                            </div>
                            {hasChildren && openItems[key] && (
                                <div style={{ marginLeft: "20px" }}>
                                    {renderMenu(item.children!, key)}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <nav>
            <h3>Navigation</h3>
            {renderMenu(menuItems)}
        </nav>
    );
};

export default Navigation;
