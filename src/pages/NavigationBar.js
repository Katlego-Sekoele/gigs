import {Button, Input, Link, Navbar, Text} from "@nextui-org/react";
import classes from "@/styles/Home.module.css";
import {SearchButton} from "@/pages/SearchButton";
import {SearchIcon} from "@/pages/SearchIcon";

function NavigationBar(){
    return (
        <>
            <Navbar isBordered variant="sticky">
                <Navbar.Brand css={{ mr: "$4" }}>
                    <Link href='/'>
                        <Text className={classes.navbarLogo} b textweight="extrabold">
                            gigs
                        </Text>
                    </Link>

                </Navbar.Brand>
                <Navbar.Content
                                css={{
                                    "@xsMax": {
                                        w: "100%",
                                        jc: "space-between",
                                    },
                                }}>
                        <Navbar.Item
                            css={{
                                "@xsMax": {
                                    w: "100%",
                                    jc: "center",
                                },
                            }}
                        >
                            <Input
                                className={classes.searchBar}
                                clearable
                                bordered
                                contentLeft={
                                    <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
                                }
                                contentLeftStyling={false}
                                css={{
                                    w: "100%",
                                    "@xsMax": {
                                        mw: "300px",
                                    },
                                    "& .nextui-input-content--left": {
                                        h: "100%",
                                        ml: "$4",
                                        dflex: "center",
                                    },
                                }}
                                placeholder="Search..."
                            />
                        </Navbar.Item>
                    <Navbar.Item>
                        <a href='/Services'><Button auto >View Services</Button></a>
                    </Navbar.Item>
                </Navbar.Content>

            </Navbar>
        </>
    )
}

export default NavigationBar