"use client"

import { useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const START_LIGHTS = {
    light1: { backgroundColor: "#ef4444" },
    light3: { backgroundColor: "#ef4444" },
    light2: { backgroundColor: "#ef4444" },
    light4: { backgroundColor: "#ef4444" },
}

export default function Home() {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();

    const [lights, setLights] = useState({
        light1: { backgroundColor: "#ef4444" },
        light3: { backgroundColor: "#ef4444" },
        light2: { backgroundColor: "#ef4444" },
        light4: { backgroundColor: "#ef4444" },
    });

    function UpdateLane(lane) {
        if (lane === 1) {
            setLights(prev => ({
                ...START_LIGHTS,
                light1: { backgroundColor: "#10b981" },
            }))
        }
        else if (lane === 2) {
            setLights(prev => ({
                ...START_LIGHTS,
                light2: { backgroundColor: "#10b981" },
            }))
        }
        else if (lane === 3) {
            setLights(prev => ({
                ...START_LIGHTS,
                light3: { backgroundColor: "#10b981" },
            }))
        }
        else if (lane === 4) {
            setLights(prev => ({
                ...START_LIGHTS,
                light4: { backgroundColor: "#10b981" },
            }))
        }
    }

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <>
            <div style={lights.light1} onClick={() => UpdateLane(1)}> lane 1 </div>
            <div style={lights.light2} onClick={() => UpdateLane(2)}> lane 2 </div>
            <div style={lights.light3} onClick={() => UpdateLane(3)}> lane 3 </div>
            <div style={lights.light4} onClick={() => UpdateLane(4)}> lane 4 </div>
        </>
    ) : (
        <div>
            You have to <LoginLink>Login</LoginLink> to see this page
        </div>
    );
}
