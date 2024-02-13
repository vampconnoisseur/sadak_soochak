"use client"

import React, { useState, useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import io from "socket.io-client";

const START_LIGHTS = {
    light1: "#ef4444",
    light3: "#ef4444",
    light2: "#ef4444",
    light4: "#ef4444",
};

export default function Home() {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    const [lights, setLights] = useState(START_LIGHTS);

    useEffect(() => {
        const socket = io.connect("http://127.0.0.1:5000");

        socket.on('connect', () => {
            socket.emit('connection');
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        const handleLightsUpdate = (updatedLights) => {
            console.log(updatedLights);
            setLights(updatedLights);
        };

        socket.on('lights_update', handleLightsUpdate);

        return () => {
            socket.off('lights_update', handleLightsUpdate);
            socket.disconnect();
        };
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <>
            <LogoutLink>Log out</LogoutLink>
            <div style={{ backgroundColor: lights.light1 }}> lane 1 </div>
            <div style={{ backgroundColor: lights.light2 }}> lane 2 </div>
            <div style={{ backgroundColor: lights.light3 }}> lane 3 </div>
            <div style={{ backgroundColor: lights.light4 }}> lane 4 </div>
        </>
    ) : (
        <div>
            You have to <LoginLink>Login</LoginLink> to see this page
        </div>
    );
}
