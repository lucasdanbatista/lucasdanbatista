import React from "react";

export enum TextFamily {
    MONOSPACE,
}

export enum TextColor {
    BLACK,
    WHITE,
}

export enum TextSize {
    H1,
    SUBTITLE,
}

class TextProps {
    color?: TextColor;
    size?: TextSize;
    family?: TextFamily;
}

export default class Text extends React.Component<TextProps> {
    render() {
        return (
            <div style={this.applyStyle()}>
                {this.props.children}
            </div>
        );
    }

    private applyStyle(): any {
        const style = {
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '',
            fontWeight: '',
        };

        switch (this.props.size) {
            case TextSize.H1:
                style.fontSize = '8vh';
                style.fontWeight = 'bold';
                break;
            case TextSize.SUBTITLE:
                style.fontSize = '4vh';
                style.fontWeight = 'normal';
                break;
        }

        switch (this.props.family) {
            case TextFamily.MONOSPACE:
                style.fontFamily = 'monospace';
                break;
        }

        switch (this.props.color) {
            case TextColor.WHITE:
                style.color = 'white';
                break;
            case TextColor.BLACK:
                style.color = 'black';
                break;
        }

        return style;
    }
}