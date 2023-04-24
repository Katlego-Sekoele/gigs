import React from "react";
import {Input, useInput, Grid, Text, Dropdown, Button} from "@nextui-org/react";
import classes from "@/styles/Home.module.css"


function PersonalDetailsForm(){
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "primary",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);

    const [selected, setSelected] = React.useState(new Set(["Visa"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );


    return (
        <div className={classes.cartMain}>

            <div className={classes.formBorder}>
                <Text h1>Personal Details</Text>
                <div className={classes.small_margin_bottom}>
                    <Input
                        {...bindings}
                        bordered
                        clearable
                        shadow={false}
                        onClearClick={reset}
                        status={helper.color}
                        color={helper.color}
                        helperColor={helper.color}
                        helperText={helper.text}
                        type="email"
                        label="Email"
                        placeholder="Email"
                        auto
                        className={classes.cartInput}
                    />
                </div>
                <div className={classes.small_margin_bottom}>
                    <Input
                        bordered
                        clearable
                        shadow={false}
                        type="text"
                        label="Name"
                        id={"Name"}
                        placeholder="Please enter your name"
                        auto
                        color={'primary'}
                        className={classes.cartInput}
                    />
                </div>

                <Text h1>Payment Details</Text>
                <div className={classes.small_margin_bottom}>
                    <Text color={"primary"}>Please select a payment provider</Text>
                    <Dropdown>
                        <Dropdown.Button bordered color="primary" css={{ tt: "capitalize" }}>
                            {selectedValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                        >
                            <Dropdown.Item key="Visa">Visa</Dropdown.Item>
                            <Dropdown.Item key="Mastercard">Mastercard</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Input
                        bordered
                        clearable
                        shadow={false}
                        type="text"
                        label="Card Number"
                        id={"CardNumber"}
                        placeholder=""
                        auto
                        color={'primary'}
                        className={classes.cartInput}
                    />
                </div>
                <div className={`${classes.sideBySide} ${classes.margin_bottom}`}>
                    <Input
                        bordered
                        shadow={false}
                        type="month"
                        label="Expiry date"
                        id={"ExpiryDate"}
                        placeholder=""
                        auto
                        color={'primary'}
                        className={classes.cartInputSide}
                    />
                    <Input
                        bordered
                        shadow={false}
                        type="number"
                        label="CVV/CVC"
                        id={"CVV"}
                        placeholder=""
                        auto
                        color={'primary'}
                        className={classes.cartInputSide}
                    />
                </div>

                <div className={classes.confirmButton}>
                    <Button color={"gradient"}>
                        Confirm Purchase
                    </Button>
                </div>


            </div>

        </div>
    )
}

function CartContent(){
    return (
        <>
            <Text>{cart[0].Title}</Text>
        </>
    )
}

function Cart(){

    return (
        <>
            <CartContent/>
            <PersonalDetailsForm/>
        </>
    )
}


export default Cart
