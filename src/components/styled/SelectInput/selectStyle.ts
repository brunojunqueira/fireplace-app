import { StylesConfig } from "react-select";

const defaultStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    borderBottom: '1px solid #fff',
    borderRadius: 0,
    outline: 'none',
    boxShadow: 'none',
    ':focus':{
        outline: 'none',
    },
    ':hover':{
        borderColor: 'rgba(255, 255, 255, 0.5)'
    }
}

const selectStyle: StylesConfig = {
    control: (styles) => ({
        ...styles, 
        ...defaultStyle
    }),
    option: (styles) => ({
        ...styles,
        ...defaultStyle,
        ':active':{
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
    }),
    menu: (styles) => ({
        ...styles,
        background: '#262729',
        padding: 0,
        margin: 0,
        borderRadius: 0,
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        display: 'none'
    }),
    input: (styles, {isDisabled}) => ({
        ...styles,
        color: isDisabled ? styles.color : '#fff'
    }),
    singleValue: (styles, {isDisabled}) => ({
        ...styles,
        color: isDisabled ? styles.color : '#fff'
    }),
    placeholder: (styles, {isDisabled}) => ({
        ...styles,
        color: isDisabled ? styles.color : '#fff'
    })
}

export default selectStyle;