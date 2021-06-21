import React from "react";

class RoundedButtonProps {
    onClick?: () => void;

    constructor(onClick: () => void) {
        this.onClick = onClick;
    }
}

class RoundedButtonState {
    hovered: boolean = false;
}

export default class RoundedButton extends React.Component<RoundedButtonProps, RoundedButtonState> {
    constructor(props: RoundedButtonProps) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    render() {
        return (
            <button
                style={{
                    borderRadius: '16vh',
                    backgroundColor: `rgba(255, 255, 255, ${this.state.hovered ? 0.5 : 0.8})`,
                    border: 'none',
                    color: 'rgba(0, 0, 0, 0.8)',
                    padding: '2vh',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    fontSize: '2.25vh',
                    margin: '16px',
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