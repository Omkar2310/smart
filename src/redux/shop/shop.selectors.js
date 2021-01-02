import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
    [selectCollections],
    collections => 
    // collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections[collectionUrlParam]
    )
);