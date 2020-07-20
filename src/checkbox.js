import { FlexBox } from '@romger/react-flex-layout';
import React from 'react';
import classnames from 'classnames';

class RgReactCheckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    get iconCheck() {
        return <svg
            className={classnames(
                'rg-react-checkbox__icon-check'
            )}
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.70711 2.29289C1.31658 1.90237 0.683418 1.90237 0.292893 2.29289C-0.0976311 2.68342 -0.0976311 3.31658 0.292893 3.70711L2.29289 5.70711C2.68342 6.09763 3.31658 6.09763 3.70711 5.70711L7.70711 1.70711C8.09763 1.31658 8.09763 0.683418 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L3 3.58579L1.70711 2.29289Z"
                fill="white"
            />
        </svg>;        
    }

    render() {
        const { checkedIcon, uncheckedIcon } = this.props;
        return (
            <FlexBox
                row="start center"
                onClick={() => this.props.onClick && !this.props.disabled ? this.props.onClick() : null}
                className={classnames(
                    'rg-react-checkbox',
                    this.props.className ? this.props.className : [],
                    {
                        'rg-react-checkbox--disabled': !!this.props.disabled
                    }
                )}>

                {
                    !!checkedIcon && !!uncheckedIcon
                        ?
                        !!this.props.checked
                            ?
                            checkedIcon
                            :
                            uncheckedIcon
                        :
                        <div className={classnames(
                            'rg-react-checkbox__check-wrap',
                            {
                                'rg-react-checkbox__check-wrap--checked': !!this.props.checked,
                                'rg-react-checkbox__check-wrap--disabled': !!this.props.disabled
                            }
                        )}>
                            {
                                !!this.props.checked && this.iconCheck
                            }
                        </div>
                }
                {
                    !!this.props.title &&
                    <div className={classnames(
                        'rg-react-checkbox--title'
                    )}>{this.props.title}</div>
                }
            </FlexBox>
        );
    }
}

export default RgReactCheckbox;