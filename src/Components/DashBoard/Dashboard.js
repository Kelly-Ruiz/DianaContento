import React from 'react';
import './Dashboard.css';
import DashTabs from './DashTabs';
import DashNav from './DashNav';
import DashboardHome from './components/DashboardHome';

function Dashboard() {
    return (
        <div className='flex h-screen overflow-hidden'>
            <DashTabs />
            <div className='w-full'>
                <DashNav />
                <DashboardHome/>
            </div>
        </div>
    );
}

export { Dashboard };