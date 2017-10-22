import React from 'react';
import cx from 'classnames';

import './PriorityPicker.less';

const PRIORITY = ['High', 'Middle', 'Low'];

class PriorityPicker extends React.Component{
    render() {
        return (
            <div className='PriorityPicker'>
                {
                    PRIORITY.map(priority =>
                        <div
                            key={priority}
                            className={cx('PriorityPicker__swatch', { selected: this.props.value === priority })}
                            onClick={this.props.onChange.bind(null, priority)}
                        >{priority}</div>
                    )
                }
            </div>
        );
    }
};

export default PriorityPicker;