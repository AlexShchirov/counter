// type ButtonType ={
//     name: string;
//     callBack: () => void;
//     disabled: boolean;

// import { ComponentPropsWithoutRef } from "react";

// // }

// // export const Button = (props:ButtonType) => {
// //     const callBackHandler = () => {
// //         props.callBack()
// //     }
// //     return (
// //         <button onClick={callBackHandler} disabled={props.disabled}>
// //             {props.name}
// //         </button>
// //     )
// // }

// type ButtonProps = {
//     isMyProp?: string;
// } & ComponentPropsWithoutRef<"button">;

// export const Button = ({ isMyProp, children, ...props }: ButtonProps) => {
//     return <button {...props}>{children}</button>;
// };

import React from "react";

type ButtonProps = {
    onClick: () => void;
    disabled: boolean;
    name: string;
};

export const Button = ({
    onClick,
    disabled,
    name,
    ...restProps
}: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {name}
        </button>
    );
};

export default Button;
