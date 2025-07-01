import React from 'react';

export function Checklist() {
    return (
        <div className="checklist-wrapper">
            <h1 className="header"><strong>State</strong><strong style={{color:'#fff'}}>Protest</strong>Rights</h1>
            <h2 className="header">Prep Checklist</h2>
            <section className="intro">
                <p>
                    Whether organizing or attending a protest, it's always crucial to be prepared.<br />
                    Use these checklists to make sure you've got the basics covered,<br />
                    but always consult local laws and regulations before making any decisions.
                </p>
            </section>
            <div className="checklist-content">
            <section className="checklist">
                <h2>General Planning</h2>
                <p>
                    Memorize crucial information about the protest, e.g. location, time, and any other details. Anticipate potential issues and plan accordingly.
                </p>
                <ul>
                    <li>Know your exits and have multiple routes planned in case of emergency</li>
                    <li>Arrange backup modes of transportation (cab/bus fare, written phone number of a nearby friend, etc.)</li>
                    <li>
                        Know the location of the nearest hospital or urgent care center, public restroom, nearest food or water source, and
                        the location of the nearest shelter (in case of inclement weather)
                    </li>
                    <li>
                        If you go alone, before you leave make sure to tell someone where you are going and when you plan to return.
                        Organize a scheduled check-in (in person visit or phone call) to confirm you have returned safely.
                        Give them instructions as to what to do, or whom to contact, if you do not check in at the agreed upon time.
                    </li>
                    <li>
                        If you go with another person or a small group, make sure you have a plan for what to do if you get separated (or detained).
                    </li>
                </ul>
            </section>
            <section className="checklist">
                <h2>What <strong>to</strong> Bring</h2>
                <p>
                    Prepare for a long day of standing, walking, and possibly being detained. Bring items that will help you stay comfortable and safe.
                </p>
                <ul>
                    <li>Water for drinking, rinsing eyes, hands, etc.</li>
                    <li>Snacks to eat and share (blood sugar affects mood and both will drop over time)</li>
                    <li>First aid kit (band-aids, antiseptic wipes, gauze, etc.)</li>
                    <li>WRITTEN emergency contact details (on paper, clothing, skin, etc.)</li>
                    <li>A small amount of cash AND change (for transportation or payphones)</li>
                    <li>Pre-made signs and posters (craft materials such as paint or markers can sometimes be construed as graffiti paraphenalia by law enforcement)</li>
                    <li>Washcloth / handkerchief / hand towel</li>
                    <li>Ear protection (ear plugs, noise cancelling earmuffs for a shooting range, etc.)</li>
                    <li>Eye protection (preferably goggles that form a seal around the eyes, e.g. swim or snow goggles)</li>
                    <li>Breathing protection (N95 mask is great but anything is better than nothing)</li>
                    <li>
                        If you take a maintenance medication, or need medical support of any kind, <strong>consult with a health professional about the duration and intensity of the
                        event you plan to attend.</strong>. Bring extra medication in case you are away from home longer than expected. But do not bring <i>all</i>
                        your medication as it may get damaged / lost / confiscated.
                    </li>
                </ul>
            </section>
            <section className="checklist negative">
                <h2>What <strong>NOT to</strong> Bring</h2>
                <p>
                    Avoid bringing any materials that are, or could be construed to be, intended for illegal purposes.
                </p>
                <ul>
                    <li>Any item that you would not want to be arrested with (err on the side of caution)</li>
                    <li>Any item that has any monetary or sentimental value, e.g. jewelry, props, or devices (it may get broken, lost, or confiscated)</li>
                    <li>Your phone (if you must, set it to Airplane mode, and ensure you can quickly lock the screen using a CODE, not biometrics)</li>
                    <li>Any weapons, or any item that could be construed as a weapon (even if legal in that state, such as a small 1-inch pocket knife)</li>
                    <li>Any item that could be construed as intended for criminal mischief, e.g. a crowbar or bolt cutters, even if part of a larger toolkit or in vehicle cargo</li>
                </ul>
            </section>
            <section className="checklist">
                <h2>What <strong>to</strong> Wear</h2>
                <p>
                    Keep in mind you may be walking, standing, sitting, or generally being active for hours at a time. You should also be prepared to be
                    detained, even if you do not plan to break any laws. This means you should be prepared to be in the same clothes for hours, or even days.
                </p>
                <ul>
                    <li>Non-descript clothing without patches, badges, or unique elements</li>
                    <li>Durable, comfortable, weather-appropriate clothing</li>
                    <li>Clothing without any employer, team, club, or "affiliation" displayed on it</li>
                    <li>Clothing without any locality (neighborhood, school district, county, etc) displayed on it</li>
                    <li>Comfortable shoes (preferably closed-toe and weather-appropriate)</li>
                    <li>Clothing that you don't mind getting dirty or damaged</li>
                    <li>Gloves that provide some degree of protection to fingers and palms</li>
                    <li>A hat with a brim</li>
                </ul>
            </section>
            <section className="checklist negative">
                <h2>What <strong>NOT to</strong> Wear</h2>
                <p>
                    Generally speaking you want to avoid being able to be easily identified, either by law enforcement or by other protesters.
                </p>
                <ul>
                    <li>Any item you wouldn't want to be photographed wearing</li>
                    <li>Any type of work uniform / badge / accessory</li>
                    <li>Clothing with antagonistic or confrontational language (avoid anything related to violence)</li>
                    <li>Clothing that might be seen as impersonating first responders or law enforcement (security / police / EMS costume, even if a parody)</li>
                    <li>Clothing or footwear that impedes movement</li>
                </ul>
            </section>
            </div>
        </div>
    );
}
