import {useRouter} from "next/router";
import {getServices, getAllServiceIds, getServiceById, getServiceProviderFromService} from "@/pages/ServicesService";
import {Button, Image, Text, User, Progress, Badge, Grid} from "@nextui-org/react";
import classes from "@/styles/Home.module.css"
import {log} from "next/dist/server/typescript/utils";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';



export async function getStaticPaths() {
    const paths = await getAllServiceIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const service = await getServiceById(params.id);
    return {
        props: {
            service
        },
    };
}

const ServicePage = ({ service }) => {

    const serviceProvider = getServiceProviderFromService(service)
    /*
        Email
        FirstName
        LastName
        Rating
        Skills
     */

    // Set the value received from the local storage to a local state
    const [cart, setCart] = useState([])
    const router = useRouter()


    useEffect(() => {
        let value
        // Get the value from local storage if it exists
        value = JSON.parse(localStorage.getItem("CART") || JSON.stringify([]))
        setCart(value)
    }, [])

    // When user submits the form, save the favorite number to the local storage
    const saveToLocalStorage = e => {
        setCart(cart.push(service))
        localStorage.setItem("CART", JSON.stringify(cart))
        router.push('/Cart')
    }

    return (
        <main className={classes.main}>
            <div className={classes.left}>
                <Image src={service.Image} className={classes.product_image}/>
            </div>
            <div className={classes.right}>
                <Text h3 className={`${classes.bold} ${classes.small_margin_bottom}`}>{service.Title}</Text>
                <Text h4 className={`${classes.bold} ${classes.margin_bottom}`}>R {service.Price}</Text>
                <Progress className={classes.margin_bottom} size="xs" value={100} color="gradient" status="primary"/>
                <Text p className={classes.padded}>{service.Description}</Text>
                <div className={classes.buy_btn}>
                    <Button auto shadow color="gradient" onPress={saveToLocalStorage}>Add to Invoice</Button>
                </div>
            </div>
            <div className={classes.profile_section}>
                <Badge isSquared color="warning" content={`${serviceProvider.Rating} ✦`} placement="top-left">
                    <User
                        bordered
                        src="https://imebehavioralhealth.com/wp-content/uploads/2021/10/user-icon-placeholder-1.png"
                        name={`${serviceProvider.FirstName} ${serviceProvider.LastName}`}
                        description={serviceProvider.Email}
                    >
                    </User>
                </Badge>
                <Grid.Container gap={0.5} className={classes.grid}>
                    {serviceProvider.Skills.map(skill => (<Grid><Badge color="secondary" variant="flat">{skill}</Badge></Grid>))}
                </Grid.Container>
            </div>
        </main>
    );
};

export default ServicePage