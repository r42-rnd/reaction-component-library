import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../../utils";

const Table = styled.table`
  width: 100%;
  background-color: ${applyTheme("color_black02")};
  padding: 1rem;
`;

const Th = styled.th`
  text-align: left;
`;

const Thr = styled.th`
  text-align: right;
  color: ${applyTheme("color_black30")};
  font-weight: normal;
`;

const TdValue = styled.td`
  text-align: right;
  padding: 1rem 0;
  color: ${applyTheme("color_coolGrey500")};
`;

const Td = styled.td`
  padding: 1rem 0;
  color: ${applyTheme("color_coolGrey400")};
`;

const Title = styled.span`
  font-weight: ${applyTheme("font_weight_bold")};
  color: ${applyTheme("color_coolGrey500")};
`;

const Discount = styled.span`
  color: ${applyTheme("color_forestGreen300")};
  font-weight: ${applyTheme("font_weight_bold")};
`;

const Total = styled.span`
  font-weight: ${applyTheme("font_weight_bold")};
  color: ${applyTheme("color_coolGrey500")};
`;

class CartSummary extends Component {
  static propTypes = {
    /**
     * Discount amount associated with promo code
     */
    displayDiscount: PropTypes.string,
    /**
     * Shipping cost
     */
    displayShipping: PropTypes.string,
    /**
     * Subtotal amount
     */
    displaySubtotal: PropTypes.string.isRequired,
    /**
     * Calculated tax amount
     */
    displayTax: PropTypes.string,
    /**
     * Total amount
     */
    displayTotal: PropTypes.string.isRequired,
    /**
     * If a product qualifies for free shipping, display "FREE" for shipping method
     */
    isFreeShipping: PropTypes.bool,
    /**
     * Quantity of products in shopping cart
     */
    itemsQuantity: PropTypes.number.isRequired
  }

  renderDiscount = () => {
    const { displayDiscount } = this.props;

    return (
      <tr>
        <Td>Promo code applied</Td>
        <TdValue><Discount>{displayDiscount}</Discount></TdValue>
      </tr>
    );
  }

  render() {
    const {
      displayDiscount,
      displayShipping,
      displaySubtotal,
      displayTax,
      displayTotal,
      isFreeShipping,
      itemsQuantity
    } = this.props;

    const shipping = (isFreeShipping) ? "FREE" : displayShipping;
    const tax = displayTax || "-";
    const discount = displayDiscount && this.renderDiscount();

    return (
      <Table>
        <thead>
          <tr>
            <Th>
              <Title>
                  Cart Summary
              </Title>
            </Th>
            <Thr>
              {itemsQuantity} items
            </Thr>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Subtotal</Td>
            <TdValue>{displaySubtotal}</TdValue>
          </tr>
          <tr>
            <Td>Shipping</Td>
            <TdValue>{shipping}</TdValue>
          </tr>
          {discount}
          <tr>
            <Td>Tax</Td>
            <TdValue>{tax}</TdValue>
          </tr>
          <tr>
            <Td>Total</Td>
            <TdValue><Total>{displayTotal}</Total></TdValue>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CartSummary;