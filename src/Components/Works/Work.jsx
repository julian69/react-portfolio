import React from 'react';
import { Button } from 'reactstrap';

const WorkTemplate = ({ work, slide, onInfoClick }) => (
    <div className="slide" data-anchor={ slide }>
        <div className="col-12 d-flex justify-content-center">  
            <div className="slide__img-wrapper"> {/* this div fixes ios streching imgs inside flex */}
                <img 
                    className="img-fluid" 
                    alt={ `${work.title} different devices images` }
                    src={ require(`../../assets/imgs/${work.img}.png`) } />
            </div>
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">  
            <Button 
                onClick={ onInfoClick }
                className="work__btn bg-transparent rounded-0 border-black text-black">Info +</Button>
        </div>
    </div>
);

export default WorkTemplate;
