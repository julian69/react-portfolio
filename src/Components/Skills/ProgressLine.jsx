import React, { useEffect, useState } from "react";

const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
    const [widths, setWidths] = useState(0);

    useEffect(() => {
        requestAnimationFrame(() => setWidths(percentage));
    }, [percentage]);

    return (
        <section className="progress-line">
            <span className="progress-line__label">{ label }</span>
            <div 
                className="progress-line__outer d-flex my-1 my-md-3"
                style={{ 
                    background: barBg,
                    height: `${barHeight}px`,
                }}>
                <div 
                    className="progress-line__inner" 
                    style={{  
                        width: widths,
                        background: progresBg,
                        transition: 'width 2s',
                    }} /> 
            </div>
        </section>
    );
};

export default ProgressLine;
