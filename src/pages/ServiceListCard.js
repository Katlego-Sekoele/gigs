import classes from "@/styles/Home.module.css"
import {Text} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

function ServiceListCard({service}) {
    return (
        <div className={`${classes.newline} ${classes.padded}`}>
            <div className={classes.containerImage}>
                <img className={classes.cardImage} src={service.image} alt={service.title}/>
                <div className={classes.bottomLeft}>
                </div>
                <Text b className={classes.price}>R {service.price}</Text>
            </div>
            <Text b className={classes.title}>{service.title}</Text>
            <Text><img alt="location icon" width='16' src="https://www.svgrepo.com/show/127575/location-sign.svg"/> {service.location}</Text>
        </div>
    )
}

export default ServiceListCard