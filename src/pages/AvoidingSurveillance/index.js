import React from 'react';

export function AvoidingSurveillance() {
    return (
        <div className="surveillance-wrapper">
            <h1 className="header"><strong>State</strong><strong style={{color:'#fff'}}>Protest</strong>Rights</h1>
            <h2 className="header">Avoiding Surveillance</h2>
            <section className="image-grid">
                <h2>These guidelines are from the ACLU of Maryland website</h2>
                <h3>While most of these apply to any US state, consult your local laws and regulations before making any decisions.</h3>
                <div className="image-grid-item">
                    <img src="/assets/kyr_protesting_surveillance_1_1080x1350.png" alt="Checklist 1" />
                    <img src="/assets/kyr_protesting_surveillance_2_1080x1350.png" alt="Checklist 2" />
                    <img src="/assets/kyr_protesting_surveillance_3_1080x1350.png" alt="Checklist 3" />
                </div>
            </section>
        </div>
    );
}
