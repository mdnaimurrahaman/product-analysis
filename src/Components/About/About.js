import React from 'react';


const About = () => {
    return (
        <div className='container mt-5 p-5'>
            <h1 className='text-center fw-bold mb-5'>About</h1>
            <div>
                <h3>Connect to your smartphone</h3>
                <p>To use a smartwatch, you need a smartphone. On your smartphone, you install the app that comes with the smartwatch, such as Android Wear or Watch from Apple. By opening the accompanying app on your smartphone and turning on Bluetooth, you can synchronize the watch with your phone. Now your devices are connected and you will receive notifications from your smartphone on the screen of your watch. For example, you can read emails and messages, view your calendar appointments, or take phone calls. That's useful, because you no longer have to worry about missing an important message.</p>
            </div>
            <div>
                <h3>Measuring daily activities and exercise</h3>
                <p>If the smartwatch has a built-in GPS and/or heart rate sensor, the watch measures your daily activities. This includes counting the number of steps, stairs, calorie consumption, and sleep patterns. Thanks to GPS, a watch also measures your route during exercise. Is GPS not built into the smartwatch? Then it's often possible to use the GPS signal from your smartphone. For this, it is necessary that you take your phone with you while running or cycling.</p>
            </div>
            <div>
                <h3>Applications on your smartwatch</h3>
                <p>It's possible to install third-party apps in the corresponding app store of the smartwatch. Popular apps are Spotify, WhatsApp, NS Reisplanner, Appie, or Buienradar. Thanks to these apps on your smartwatch, you no longer have to take your smartphone out of your pocket when you do your shopping, when you want to see if your train is delayed, or when you're wondering if you need to bring an umbrella.</p>
            </div>
        </div>
    );
};

export default About;