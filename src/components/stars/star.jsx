import React, { useEffect, useState } from "react";

function Star({speed, index, starFieldWidth, top, left, isWarp}) {
    const [leftSide, setLeftPosition] = useState(left);

    useEffect(() => {
        const interval = setInterval(() => {
            setNewLeftPosition();
        }, 20);

        return () => clearInterval(interval);
    }, [leftSide]);

    useEffect(() => {
        setNewLeftPosition();
    }, [speed]);

    const setNewLeftPosition = () => {
        let currentLeft = parseInt(`${leftSide}`, 10);
        let leftChangeAmount = speed === 0 ? (0) : (speed + getStarRelativeSpeed(index));
        let leftDiff;

        if (currentLeft - leftChangeAmount < 0) {
            leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
        } else {
            leftDiff = currentLeft - leftChangeAmount;
        }

        setLeftPosition(leftDiff);
    }

    const getStarColor = (index) => {
        if (index % 8 === 0)
        return 'red';
        else if (index % 10 === 0)
        return 'yellow';
        else if (index % 17 === 0)
        return 'blue';
        else
        return 'white';
    }
    
    const getStarDistance = (index) => {
        if (index % 6 === 0)
        return '2px';
        else if (index % 9 === 0)
        return '4px';
        else if (index % 2 === 0)
        return '1px';
        else
        return '3px';
    }

    const getStarRelativeSpeed = (index) => {
        if (index % 6 === 0)
        return 1;
        else if (index % 9 === 0)
        return 2;
        else if (index % 2 === 0)
        return -1;
        else
        return 0;
    }

    const distance = getStarDistance(index);
    const color = getStarColor(index);
        
    return ( 
        <div style={
            Object.assign({
                height: distance,
                borderRadius: '50%', 
                position: 'absolute',
                top: top + 'px', 
                left: leftSide + 'px',
                boxShadow: `0px 0px 25px 2px ${color}`,
                background: `${color}`
            }, isWarp ? ({width: '200px', transition: 'width 4s'}) : ({width: distance}))
        }></div>
    )
}

export default Star;