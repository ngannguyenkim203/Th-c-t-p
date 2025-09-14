// src/layouts/ShopLayout.jsx
import React from 'react';
import SidebarShop from '../components/Shop/SidebarShop.jsx';
import MainHeader from '../components/Common/MainHeader.jsx';
import { Outlet } from 'react-router-dom';
import MainLayout from './MainLayout.jsx'; 

const ShopLayout = () => {
    return (
        <MainLayout>
            <div className="container-fluid px-0">
                {/* Header cố định trên cùng */}
                {/* <header className="bg-white shadow-sm sticky-top" >
                    <MainHeader />
                </header> */}
                <div className="d-flex" style={{ height: '89vh' }}>
                    <div className="bg-dark text-white" style={{ width: '250px' }}>
                        <SidebarShop />
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                        {/* Nội dung chính có thể scroll */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ShopLayout;
