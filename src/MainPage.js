import React from 'react';
import './MainPage.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const MainPage = () => {
    return (
        <div>
            <div className="logo">
                여름 생활 백서
            </div>
            <div className="menu">
                <MenuItem>모기</MenuItem>
                <MenuItem>식중독</MenuItem>
                <MenuItem>날씨</MenuItem>
                <MenuItem>추가예정</MenuItem>
                <MenuItem>추가예정</MenuItem>
                <MenuItem>추가예정</MenuItem>
                <MenuItem>추가예정</MenuItem>
            </div>
        </div>
    );
};

export default MainPage;