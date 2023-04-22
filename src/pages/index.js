import classes from '@/styles/Home.module.css'
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Input } from '@nextui-org/react';
import React from "react";
import {SearchButton} from "@/pages/SearchButton";
import {SearchIcon} from "@/pages/SearchIcon";
import NavigationBar from "@/pages/NavigationBar";
import Hero from "@/pages/Hero";
import ServiceProviderIconRow from "@/pages/ServiceProviderIconRow";
import ServicesList from "@/pages/ServicesList";
import ServiceListCard from "@/pages/ServiceListCard";

export default function Home() {
    return (
        <>
            <NavigationBar />
            <Hero />
            <ServiceProviderIconRow />
            <ServicesList />
        </>
    )
}