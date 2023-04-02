import React from "react";

const Row = ({ children, spacing }) => {


    const childStyle = {
        marginLeft: `${spacing}px`
    }

    return (
        <div className="d-flex justify-content-center">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style, 
                        ...(index > 0 ? childStyle : {})
                    }
                });
            })}
        </div>
    );
};

function LiveOrders() {
    return (
        <div className="Live">
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>$30</p>
                <p>18:30</p>
                <p>John</p>
            </Row>
        </div>
    )
};

export default LiveOrders