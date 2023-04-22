import classes from "@/styles/Home.module.css"
import {Text} from "@nextui-org/react";
import ServiceListCard from "@/pages/ServiceListCard";

function ServicesList(){

    let services = []
    for (let i = 0; i < 4; i++){
        services.push({
            price: 200,
            title: "Graphic Design",
            location: "UCT Upper Campus",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        })
    }

    let servicesCards = services.map(function (service) {
        return (<a href="#"><ServiceListCard service={service} /></a>)
    })

    return (
        <>
            <div className={classes.centerList}>
                <Text b className={`${classes.rowFlexText}`}>Browse through some of our offerings.</Text>
                {servicesCards}
            </div>
        </>
    )
}

export default ServicesList