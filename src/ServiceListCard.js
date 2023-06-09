import classes from "@/styles/Home.module.css"
import {Text} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

function ServiceListCard({service}) {

    return (
        <div className={`${classes.newline} ${classes.padded}`}>
            <div className={classes.containerImage}>
                <Image className={classes.cardImage} src={service.Image} alt={service.Title}/>
                <div className={classes.bottomLeft}>
                </div>
                <Text b className={classes.price}>R {service.Price}</Text>
            </div>
            <Text b className={classes.Title}>{service.Title}</Text>
            <Text>{service.Location}</Text>
        </div>
    )
}

export default ServiceListCard