import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader animate-wiggle  w-6 h-6 flex-1 content-center">
                    <div className="logo absolute inset-y-2/4 jump">
                        <img src="/imgs/logos/logo.svg" alt="evento" />
                        <h1 className="text-lg font-semibold">evento</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;