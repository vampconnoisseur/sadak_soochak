"use client"

import React, { useState, useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import io from "socket.io-client";
import "../../../styles/global.css";
import "../../../styles/dashboard.css"

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
        <div className=" main-dashboard"> 
            <div class="lane">LANE1 LANE2 LANE3 LANE4</div>
                <div class="traffic-container">
                    <div class="traffic">
                        <div class="circle l1" onclick="openModal('l1')"></div>
                        <div class="circle l2" onclick="openModal('l2')"></div>
                        <div class="circle l3" onclick="openModal('l3')"></div>
                        <div class="circle l4" onclick="openModal('l4')"></div>
                    </div>
                </div>

                {/* <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="closeModal()">&times;</span>
                        <p>Enter a color (e.g., red, blue, green):</p>
                        <input type="text" id="colorInput"/>
                        <button onclick="changeColor()">Change Color</button>
                    </div>
                </div>  */}










                <div className="lane-dashboard">
                    <div style={{ backgroundColor: lights.light1 }}> lane 1 </div>
                    <div style={{ backgroundColor: lights.light2 }}> lane 2 </div>
                    <div style={{ backgroundColor: lights.light3 }}> lane 3 </div>
                    <div style={{ backgroundColor: lights.light4 }}> lane 4 </div>
                </div>

































        </div>
        <footer id="advanced-footer">
    <div id="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div id="contact-info">
            <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    </div>
</footer>
        </>
    ) : (
        <div className="main-section-not-auth">
{/* <hr className="horizontal-line" /> */}



                

        <div className="main-not-auth">
            <img  src="https://rb.gy/x2xvwk" alt="fvgb" />
            <div className="not-auth">
                <p>You have to <LoginLink>Login</LoginLink> to see this page</p>
            </div>
        </div>
        <footer id="advanced-footer">
    <div id="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div id="contact-info">
            <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    </div>
</footer>
        </div>
        
    );
}
