import { User, Text } from "@nextui-org/react";
import classes from "@/styles/Home.module.css"

function ServiceProviderIconRow(){
    const src = ["https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026024d"]

    const profiles = src.map(function(profile) {
        return <User
            src={profile}
            name=""
            size="xl"
            bordered
            color="secondary"
        />
    })

    return (
        <>
            <div className={classes.rowFlex}>
                <Text b className={classes.rowFlexText}>Meet some of our top service providers!</Text>
                {profiles}
            </div>
        </>
    )

}

export default ServiceProviderIconRow