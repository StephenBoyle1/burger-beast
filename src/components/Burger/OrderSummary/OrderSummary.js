import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                 {props.ingredients[igKey]}</li>);
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Total Price: {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinued}>Contine</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        </Aux>
    );
};

export default OrderSummary;