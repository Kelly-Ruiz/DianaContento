import React from 'react';
import './Dashboard.css';
import DashTabs from './DashTabs';
import DashNav from './DashNav';

function Dashboard() {
    return(
        <div className=' flex'>
        <DashTabs/>
        <div>
        <DashNav/>
        <p>DashBoard, perfil creado y autenticado</p>

        </div>
        
        </div>
    );
}

export { Dashboard };