import React, { useState } from 'react';
import './Dashboard.css';
import DashTabs from './DashTabs';
import DashNav from './DashNav';
import DashboardHome from './components/Home/DashboardHome';
import Training from './components/Training';
import Nutrition from './components/Nutrition';
import Challenges from './components/Challenges';

function Dashboard() {
    const [section, setSection] = useState(0);
    return (
        <div className='flex h-screen overflow-hidden'>
            <DashTabs setSection={setSection} />
            <div className='w-full'>
                <DashNav />
                {
                    section == 0 &&
                    <>
                        <DashboardHome />
                    </>
                }
                {
                    section == 1 &&
                    <Training />
                }
                {
                    section == 2 &&
                    <Nutrition />
                }
                {
                    section == 3 &&
                    <Challenges />
                }
                {
                    section == 4 &&
                    <Training />
                }
            </div>
        </div>
    );
}

export { Dashboard };