import React, {useEffect} from "react";
import {Input, useInput, Grid, Text, Dropdown, Button, Card, Link, User, Badge} from "@nextui-org/react";
import classes from "@/styles/Home.module.css"
import {useState} from "react"
import {useRouter} from "next/router";
import {getServiceProviderFromService} from "@/ServicesService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {router} from "next/router";


function PersonalDetailsForm({router, setCart}) {
    const {value, reset, bindings} = useInput("");

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

    const notify = () => {
        alert("Purchase Successful.");
        setCart([])
        if (typeof window !== 'undefined') {
            localStorage.setItem("CART", JSON.stringify([]))
        }
        router.push('/')
    }


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
                        <Dropdown.Button bordered color="primary" css={{tt: "capitalize"}}>
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
                    <Button color={"gradient"} onPress={notify}>
                        Confirm Purchase
                    </Button>
                </div>


            </div>

        </div>
    )
}

function CartContent({cart, setCart, router}) {



    // When user submits the form, save the favorite number to the local storage
    const saveToLocalStorage = e => {
        setCart([])
        if (typeof window !== 'undefined') {
            localStorage.setItem("CART", JSON.stringify([]))
        }
        router.push('/')
    }

    function sumCart() {
        let sum = 0;

        for (let item of cart){
            sum += item.Price
        }

        return sum
    }

    return (
        <div className={classes.cartMain}>
            <div className={classes.formBorder}>
                <Text h1>Invoiced Services</Text>
                <div className={classes.sideBySideTotal}>
                    <Text h3><i>Total</i> R {sumCart()}</Text>
                    <Button color="error" auto onPress={saveToLocalStorage}>Clear Cart</Button>
                </div>
                <div className={classes.serviceCardsInvoiceCointainer}>
                {(cart.map(function (cartItem) {
                    let serviceProvider = getServiceProviderFromService(cartItem)
                    return (
                        <div key={cartItem.Description} className={classes.serviceCardsInvoiceCointainerChild}>
                <Card className={classes.invoiceCard}>
                <Card.Header>
                    <Badge isSquared color="warning" content={`${serviceProvider.Rating} ✦`} placement="top-left">
                        <User
                            bordered
                            src="https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png"
                            name={`${serviceProvider.FirstName} ${serviceProvider.LastName}`}
                            description={serviceProvider.Email}
                        >
                        </User>
                    </Badge>
                </Card.Header>
                <Card.Body css={{py: "$2"}}>
                    <Text h4>{cartItem.Title}</Text>
                    <Text h5>
                        R {cartItem.Price}
                    </Text>
                    <hr/>
                    <Text>
                        {cartItem.Description}
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <Link
                        icon
                        color="primary"
                        target="_blank"
                        href={`mailto:${serviceProvider.Email}`}
                    >
                        Contact Me.
                    </Link>
                </Card.Footer>
            </Card>
                        </div>
            )
            }))}
                </div>
        </div>
</div>

)
}

function Cart() {

    // Set the value received from the local storage to a local state
    const [cart, setCart] = useState([])
    const router = useRouter()

    useEffect(() => {
        let value
        // Get the value from local storage if it exists

        if (typeof window !== 'undefined') {
            value = JSON.parse(localStorage.getItem("CART") || JSON.stringify([]))
        }else{
            value = []
        }
        setCart(value)
    }, [])

    return (
        <>
            <CartContent cart={cart} setCart={setCart} router={router}/>
            <PersonalDetailsForm router={router} setCart={setCart}/>
        </>
    )
}


export default Cart
