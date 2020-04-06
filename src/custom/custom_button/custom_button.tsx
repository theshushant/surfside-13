import React from "react";
import './custom_button.scss';

const CustomButton = (props: { title: string, onPressed: any, isSubmitting: boolean }) => {
    return (
        <button type = {"submit"} style={{backgroundColor: "#10C1CE"}} className={"customButton"} disabled={props.isSubmitting}
             >
            <h3>{props.title}</h3>
        </button>
    );
};

export default CustomButton;