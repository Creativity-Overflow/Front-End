import { colors } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
// import "@/components/slider.css"

export default function Slider3d() {

    const [imgWidth, setImgWidth] = useState(180);
    const [imgHeight, setImgHeight] = useState(270);
    const [resetRotationTimer, setResetRotationTimer] = useState(null);
    useEffect(() => {
        // Your original JavaScript code here
        var radius = 240; // how big of the radius
        var autoRotate = true; // auto rotate or not
        var rotateSpeed = -60; // unit: seconds/360 degrees


        // ===================== start =======================
        setTimeout(init, 100);

        var odrag = document.getElementById("drag-container");
        var ospin = document.getElementById("spin-container");
        var aImg = ospin.getElementsByTagName("img");
        var aVid = ospin.getElementsByTagName("video");
        var aEle = [...aImg, ...aVid]; // combine 2 arrays

        // Size of images
        ospin.style.width = imgWidth + "px";
        ospin.style.height = imgHeight + "px";

        // Size of ground - depend on radius
        var ground = document.getElementById("ground");
        ground.style.width = radius * 3 + "px";
        ground.style.height = radius * 3 + "px";

        function init(delayTime) {
            for (var i = 0; i < aEle.length; i++) {
                aEle[i].style.transform =
                    "rotateY(" +
                    i * (360 / aEle.length) +
                    "deg) translateZ(" +
                    radius +
                    "px)";
                // Size of images
                ospin.style.width = imgWidth + 'px';
                ospin.style.height = imgHeight + 'px';

                aEle[i].style.transition = "transform 1s";
                aEle[i].style.transitionDelay =
                    delayTime || (aEle.length - i) / 4 + "s";
            }
        }

        // Rest of your JavaScript code...
        function applyTranform(obj) {
            // Constrain the angle of camera (between 0 and 180)
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;

            // Apply the angle
            obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
        }

        function playSpin(yes) {
            ospin.style.animationPlayState = yes ? "running" : "paused";
        }

        var sX,
            sY,
            nX,
            nY,
            desX = 0,
            desY = 0,
            tX = 0,
            tY = 10;

        // auto spin
        if (autoRotate) {
            var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
            ospin.style.animation = `${animationName} ${Math.abs(
                rotateSpeed
            )}s infinite linear`;
        }


        document.onpointerdown = function (e) {
            clearInterval(odrag.timer);
            e = e || window.event;
            var sX = e.clientX,
                sY = e.clientY;

            this.onpointermove = function (e) {
                e = e || window.event;
                var nX = e.clientX,
                    nY = e.clientY;
                desX = nX - sX;
                desY = nY - sY;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(odrag);
                sX = nX;
                sY = nY;
            };

            this.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desX *= 0.95;
                    desY *= 0.95;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    playSpin(false);
                    if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                        clearInterval(odrag.timer);
                        playSpin(true);
                    }
                }, 17);
                this.onpointermove = this.onpointerup = null;
            };

            return false;
        };

        document.onmousewheel = function (e) {
            e = e || window.event;
            var d = e.wheelDelta / 20 || -e.detail;
            radius += d;
            init(1);

            // Clear the existing reset rotation timer
            clearTimeout(resetRotationTimer);

            // Set a new reset rotation timer that triggers after 10 seconds
            const newResetRotationTimer = setTimeout(() => {
                radius = 240; // Reset the radius to its original value
                init(1); // Apply the reset radius
            }, 10000); // 10000 milliseconds (10 seconds)

            setResetRotationTimer(newResetRotationTimer);
        };


    }, []);
    return (
        <div className='all3d '>
            <div className='strin3d '>
                <h1 className='' style={{ fontSize: '40px', color: "snow" }}>Welcome to Creativity Overflow </h1>
                <h2 style={{ fontSize: '25px', color: "snow" }}>Where your Creativity is Unlimited </h2>
            </div>
            <div className="threeD mt-52">
                <div id="drag-container">
                    <div
                        id="spin-container"

                    >

                        <img className='image3d'
                            src="https://i.pinimg.com/564x/d0/4b/08/d04b08a454655c5bad69b4a98008b1ee.jpg"
                            alt=""

                        />
                        <img className='image3d'
                            src="https://i.pinimg.com/564x/05/49/92/054992ee906aecdb12256c78e34875dc.jpg"
                            alt=""

                        />
                        <img className='image3d'
                            src="https://i.pinimg.com/564x/eb/62/aa/eb62aa9025d32cb054f0ce6c20651422.jpg"
                            alt=""

                        />
                        <img className='image3d'
                            src="https://i.pinimg.com/564x/02/42/eb/0242eb1ea1d59e42c6812f3e9f887e02.jpg"
                            alt=""

                        />
                        <img className='image3d'
                            src="https://i.pinimg.com/564x/28/76/53/2876533599b7cefd228c103a56dbd3e2.jpg"
                            alt=""

                        />
                        <img className='image3d'
                            src="https://mpost.io/wp-content/uploads/image-74-7.jpg"
                            alt=""
                        />


                        <a
                            target="_blank"
                            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
                        >

                        </a>


                        <p style={{ fontSize: '20px' }}>Creativity Overflow</p>
                    </div>
                    <div
                        id="ground"

                    ></div>
                </div>


            </div>
        </div>
    );
}

