import {Button, Input, Link, Navbar, Text} from "@nextui-org/react";
import classes from "@/styles/Home.module.css";
import {SearchButton} from "@/pages/SearchButton";
import {SearchIcon} from "@/pages/SearchIcon";


export const CartIcon = ({
                             fill = "currentColor",
                             size,
                             height,
                             width,
                             ...props
                         }) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
                fill={fill}
            />
            <path
                d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
                fill={fill}
            />
            <path
                d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z"
                fill={fill}
            />
            <path
                d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z"
                fill={fill}
            />
        </svg>
    );
};


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
                        <a href='/Cart'><Button auto light><CartIcon></CartIcon></Button></a>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href='/Services'><Button auto >View Services</Button></Link>
                    </Navbar.Item>

                </Navbar.Content>

            </Navbar>
        </>
    )
}



export default NavigationBar