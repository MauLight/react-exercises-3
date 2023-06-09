import React from "react";

function Dialog(props) {
    return (
        <div className="modal">
            {props.children}
        </div>
    )
};

function ConfirmationDialog() {
    return (
        <Dialog color="blue">
            <h1 className="Dialog-title">
                Thanks!
            </h1>
            <p className="Dialog-message">
                We'll process your order in 24 hours.
            </p>
        </Dialog>
    );
};

export default ConfirmationDialog;