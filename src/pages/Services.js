import classes from "@/styles/Home.module.css"
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

function Services({services}) {

    return (
        <div className={classes.container}>
            <div className={classes.containerChild}>
                <ServicesList services={services}/>
            </div>
        </div>

    )
}

export default Services