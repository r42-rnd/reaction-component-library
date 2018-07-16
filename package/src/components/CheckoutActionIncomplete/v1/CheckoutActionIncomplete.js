import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const CheckoutActionIncompleteContainer = styled.div`
  color: ${applyTheme("color_black35")};
  font-family: ${applyTheme("font_family")};
  font-size: ${applyTheme("font_size_small")}
`;

class CheckoutActionIncomplete extends Component {
  static propTypes = {
    /**
     * The incomplete action name
     */
    label: PropTypes.string.isRequired,
    /**
     * Checkout process step number
     */
    stepNumber: PropTypes.number.isRequired
  };

  render() {
    const { label, stepNumber } = this.props;

    return (
      <CheckoutActionIncompleteContainer>
        <span>{stepNumber}.&nbsp;</span>
        <span>{label}</span>
      </CheckoutActionIncompleteContainer>
    );
  }
}

export default CheckoutActionIncomplete;