import {Button, Input, Navbar, Text} from "@nextui-org/react";
import classes from "@/styles/Home.module.css";
import {SearchButton} from "@/pages/SearchButton";
import {SearchIcon} from "@/pages/SearchIcon";

function NavigationBar(){
    return (
        <>
            <Navbar isBordered variant="sticky">
                <Navbar.Brand>
                    <Text className={classes.navbarLogo} b textweight="extrabold">
                        gigs
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        <Input bordered
                               aria-label="search"
                               placeholder="Search for service"
                               clearable
                               contentRightStyling={false}
                               contentRight={
                                   <SearchButton>
                                       <SearchIcon />
                                   </SearchButton>
                               }>
                        </Input>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button auto>Profile</Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </>
    )
}

export default NavigationBar