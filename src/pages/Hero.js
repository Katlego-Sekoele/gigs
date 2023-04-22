import classes from '@/styles/Home.module.css'
import {Button, Input, Navbar, Text, Image} from "@nextui-org/react";
import {SearchButton} from "@/pages/SearchButton";
import {SearchIcon} from "@/pages/SearchIcon";

function Hero() {
    const heroText = "Welcome to our student freelancing platform! We’re here to help you find work that fits your schedule and skills. Whether you’re looking for a side hustle or a full-time gig, we’ve got you covered. Our platform connects you with clients who are looking for talented students just like you. With our easy-to-use interface and powerful tools, you can find work that matches your interests and expertise. So why wait? Sign up today and start earning money doing what you love!"

    return (
        <div className={classes.heroFlex}>
            <div className={classes.heroLeft}>
                <Text h1 className={`${classes.heroText}`}>
                    Work Smarter, Not Harder.
                </Text>
                <Text p className={`${classes.paddingBottom} ${classes.heroText}`}>
                    {heroText}
                </Text>
                <div className={classes.inline}>
                    <Input bordered inline
                           aria-label="search"
                           placeholder="Search for service"
                           clearable
                           contentRightStyling={false}
                           contentRight={
                               <SearchButton>
                                   <SearchIcon/>
                               </SearchButton>
                           }
                            className={`${classes.paddingRight} ${classes.inlineChild}`}>
                    </Input>
                    <Button className={classes.inlineChild}>Post Service</Button>
                </div>
            </div>
            <div className={classes.heroRight}>
                <Image
                    className={classes.heroImage}
                    src="https://images.unsplash.com/photo-1520545221203-f6ca6a8e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                    alt="Image of university students"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Hero