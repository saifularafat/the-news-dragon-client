import React from 'react';
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='p-4 my-5 bg-secondary'>
            <h2 className='fs-3 fw-bold py-3'>Q-Zone</h2>
            <div className='text-center'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;