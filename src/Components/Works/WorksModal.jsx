import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalFooter, Button} from 'reactstrap';

import TECHS from '../../utils/types/technologies-types';

const WorksModal = ({ isModalOpen, activeWorkData, onToggle }) => (
    <Modal 
        isOpen={ isModalOpen }  
        toggle={ onToggle }>
        <ModalBody className="col-10 offset-1">
            <h3 className="works-modal__title">{ activeWorkData.title  }</h3>
            <small className="works-modal__date mb-3 text-gray d-block">{ activeWorkData.date }</small>
            <span className="works-modal__description my-3 d-block">{ activeWorkData.description }</span>
            <ul className="works-modal__technologies list-group list-group-horizontal">
                {   
                    _.map(TECHS, (tech, index) => activeWorkData.technologies && !_.isEmpty(activeWorkData.technologies.filter(workTech => workTech === tech.name)) 
                        && (
                            <li key={ index } className="list-group-item border-0 px-0 d-flex align-items-center">
                                { tech.icon }
                            </li>
                        )
                    )
                }
            </ul>
             <a 
                href={ activeWorkData.link } 
                target="_blank" 
                className="works-modal__link"
                rel='noreferrer noopener'>
                <small className="text-gray">{ activeWorkData.link && activeWorkData.link.replace(/(^\w+:|^)\/\//, '') }</small>
            </a>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
            <Button 
                onClick={ onToggle }
                className="work__btn bg-transparent rounded-0 border-black text-black">Close</Button>
        </ModalFooter>
    </Modal>
);

WorksModal.propTypes = {
    onToggle: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    activeWorkData: PropTypes.object.isRequired,
};

export default WorksModal;
