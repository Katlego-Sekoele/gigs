import classes from '@/styles/Home.module.css'
import { Text } from "@nextui-org/react";
import React from "react";
import Hero from "@/Hero";
import ServiceProviderIconRow from "@/ServiceProviderIconRow";
import ServicesList from "@/ServicesList";
import {getServices} from "@/ServicesService";

export const getStaticProps = async () => {
    const services = await getServices()

    return {
        props: {
            services: services
        }
    }
}

export default function Home({services}) {
    return (
        <>
            <Hero />
            <ServiceProviderIconRow />
            <div className={classes.centerList}>
                <Text b className={`${classes.rowFlexText}`}>Browse through some of our offerings.</Text>
            </div>
            <ServicesList services={services} limit={6}/>
        </>
    )
}