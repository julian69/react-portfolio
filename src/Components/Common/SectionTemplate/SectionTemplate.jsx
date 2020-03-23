import React from 'react';
import PropTypes from 'prop-types';

const SectionTemplate = ({ sectionName, sectionInnerClass, isFluid, children }) => (
    <div className={ `${sectionName} section` }>
        <div className={ `container${isFluid ? '-fluid' : ''}` }>
            <div className="row">
                <div className={ `${sectionName}__inner ${sectionInnerClass}` }>
                    { children }
                </div>
            </div>
        </div>
    </div>
);

SectionTemplate.propTypes = {
    isFluid: PropTypes.bool,
    sectionInnerClass: PropTypes.string,
    children: PropTypes.node.isRequired,
    sectionName: PropTypes.string.isRequired,
};

SectionTemplate.defaultProps = {
    isFluid: false,
    sectionInnerClass: '',
};

export default SectionTemplate;



