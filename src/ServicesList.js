import classes from "@/styles/Home.module.css"
import {Link, Text} from "@nextui-org/react";
import ServiceListCard from "@/ServiceListCard";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";
import {getServices} from "@/ServicesService";

function ServicesList({services, limit} ){

    let servicesCards = services.map(function (service) {
        return (<Link href={`/Services/${service.id}`} key={service.id}><ServiceListCard service={service} /></Link>)
    })

    if (limit) {
        servicesCards = servicesCards.slice(0, limit)
    }

    // console.log(services)
    //
    // return (
    //     <>
    //     </>
    // )

    return (
        <>
            <div className={classes.centerList}>
                {servicesCards}
            </div>
        </>
    )
}

export default ServicesList