import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySelections} from '../../redux/directory/directory.selectors'; 
import './directory.styles.scss';

const Directory = ({sections}) => (

      <div className='directory-menu'>
        {sections.map(({id, ...OtherSectionProps }) => (
          <MenuItem key={id} {...OtherSectionProps} />
        ))}
      </div>
)

const mapStateToProps = createStructuredSelector(
  {sections : selectDirectorySelections}
);




export default connect(mapStateToProps)(Directory);
