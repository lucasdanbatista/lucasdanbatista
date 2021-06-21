import React from "react";

class IconButtonProps {
    onClick?: () => void;

    constructor(onClick: () => void) {
        this.onClick = onClick;
    }
}

class IconButtonState {
    hovered: boolean = false;
}

export default class IconButton extends React.Component<IconButtonProps, IconButtonState> {
    constructor(props: IconButtonProps) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    render() {
        return (
            <button
                style={{
                    borderRadius: '100%',
                    width: '6vh',
                    height: '6vh',
                    backgroundColor: `rgba(255, 255, 255, ${this.state.hovered ? 0.5 : 0.8})`,
                    border: 'none',
                    color: 'rgba(0, 0, 0, 0.8)',
                    margin: '8px',
                    cursor: 'pointer'
                }}
                onMouseOver={() => this.setState({hovered: true})}
                onMouseOut={() => this.setState({hovered: false})}
                onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}