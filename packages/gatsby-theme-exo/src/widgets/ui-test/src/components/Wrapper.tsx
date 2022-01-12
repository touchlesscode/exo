import React from 'react';

const Wrapper: React.FC = ({ children }) => {
    return (
        <div className="rounded-lg bg-gray-800 border border-gray-600 shadow-xl p-4">
            {children}
        </div>
    );
}

export default Wrapper;