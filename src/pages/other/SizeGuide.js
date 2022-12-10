import React from 'react';
import { Fragment } from 'react';
import LayoutOne from '../../layouts/LayoutOne';
import sizeGuideImage from '../../../src/size-guide-images/sizing.webp'

const SizeGuide = () => {
    return (
        <Fragment>
            <LayoutOne>
                <div className='container pt-3 pb-3'>
                    <img src={sizeGuideImage} alt="" />
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default SizeGuide;