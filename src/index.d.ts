import * as React from 'react';

interface RgReactCheckboxProps {
    checkedIcon?: any;
    uncheckedIcon?: any;
    disabled?: boolean;
    onClick?: () => any;
    title?: string;
    className?: string;
    checked?: boolean;
}

export class RgReactCheckbox extends React.Component<RgReactCheckboxProps, any> {}