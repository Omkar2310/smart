import React from 'react';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/collection.components';
import CollectionsOverview from '../../components/collections_overview/collections_overview.components'

const ShopPage = ({match}) => (
    
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionsOverview } />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
    
);


export default ShopPage;