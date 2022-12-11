import React from 'react';
import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';

const Men = () => {
    let { pathname } = useLocation();
    return (
        <Fragment>
            <SEO
                titleTemplate="Men"
                description="Men cloths of Tavaas"
            />
            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/men" },
                        { label: "Men", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className='pt-90 pb-100'>
                    <div className='container'>
                        <h1>Coming Soon!</h1>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default Men;