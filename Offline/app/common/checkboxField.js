'use strict';

/**
 * Checkbox Field.
 *
 * @module modules/checkboxField
 * React component with an checkbox and a label.
 */

import React from 'react';
import PropTypes from 'prop-types';

class CheckboxField extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            showError: false,
            showBorderError: false,
            errorMsg: this.props.errorMsg ? this.props.errorMsg.empty : null,
            validate: this.props.validate
        };
    }

    /**
     * Checks for updated props for resulting them into state change
     * @param {array} nextProps - contains the updated props
     */
    componentWillReceiveProps (nextProps) {
        if (nextProps.validate === true && this.props.validate !== nextProps.validate ) {
            this.validate();
        }
    }

    /**
     * validate - validates the value in checkbox field.
     */
    validate  () {

        const { error, errorMsg, borderError } = this.getError();

        if (error) {

            this.setState({
                showError: error,
                errorMsg: errorMsg
            });
        }

        else {

            this.setState({
                showError: error
            });

        }

        this.setState({
            showBorderError: borderError,
            errorMsg: errorMsg
        });

        this.callErrorCallback(error, errorMsg);
    }

    /**
     * callErrorCallback - handles error callbacks
     * @param {object} error - the error occured
     * @param {string} errorMsg - error message to display
     */
    callErrorCallback( error, errorMsg ) {

        if ( this.props.errorCallback ) {

            this.props.errorCallback( error, errorMsg);
        }
    }

    /**
     * getError - handles errors
     * @returns {object}
     */
    getError() {
        if ( this.props.errorMsg && !this.checkboxField.checked ) {
            return {
                error: true,
                errorMsg: this.props.errorMsg
            };
        }
        else {
            return {
                error: false
            };
        }
    }

    /**
     * Handles change of input value
     */

    handleChange (e){
        console.log('1111111111',e.target.name);
        console.log('2222222222',e.target.value);

        const isCheckboxChecked = this.checkboxField.checked;

        if (!isCheckboxChecked && this.props.required) {
            this.setState({
                showError: true
            });
        }
        else {
            this.setState({
                showError: false
            });
        }

        if ( this.props.changeCallback ) {
            this.props.changeCallback(event);
        }
    }

    /**
     * Main render function
     *
     */

    render() {

        let { type, name, checkboxClass, required, injectHtml, wrapperClass, defaultChecked, isDisabled } = this.props;

        return (
            <div className={ `${ wrapperClass } ${this.state.showError ? 'show-error' : ''}` }>
                <label htmlFor={name}>
                    {
                        isDisabled ||  isDisabled === 'true' ?
                        <input
                            type={ type }
                            name={ name }
                            id={ name }
                            required = { required }
                            defaultChecked={ defaultChecked }
                            data-linktext={ name }
                            disabled
                        />
                        :
                        <input
                            ref={ checkboxField => this.checkboxField = checkboxField }
                            type={ type }
                            name={ name }
                            id={ name }
                            required = { required }
                            onChange={ this.handleChange }
                            onBlur={ (e) => {
                                this.validate();
                            }}
                            defaultChecked={ defaultChecked }
                            data-linktext={ name }
                        />
                    }
                    <span className={ checkboxClass } dangerouslySetInnerHTML={{ __html: injectHtml }} />
                </label>
                <p className={`error-msg ${this.state.showError ? 'show-msg' : ''}`} role='alert'>{this.state.errorMsg}</p>
            </div>
        );
    }
}

CheckboxField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    checkboxClass: PropTypes.string,
    required: PropTypes.bool,
    injectHtml: PropTypes.node,
    defaultChecked: PropTypes.bool,
    wrapperClass: PropTypes.string
};

CheckboxField.defaultProps = {
    defaultChecked: false,
    type: 'checkbox',
    required: false,
    name: '',
    checkboxClass: '',
    wrapperClass: 'checkbox-group'
};

export default CheckboxField;
