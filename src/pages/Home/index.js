import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Alert } from '@mui/material';
import stateList from '../../data/state-list.json';

export function Home() {
    const [currentState, setCurrentState] = useState('');
    const [stateData, setStateData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCurrentState(e.target.value);
    };

    useEffect(() => {
        const loadStateData = async () => {
            if (!currentState) return;
            console.log('Loading data for:', currentState);

            setLoading(true);
            setError(null);
            
            try {
                // Convert state name to folder name format (lowercase, replace spaces with hyphens)
                const folderName = currentState.toLowerCase().replace(/\s+/g, '-');
                console.log('folderName:', folderName);

                // Using a relative path based on the public URL
                const response = await fetch(`${process.env.PUBLIC_URL}/data/${folderName}/${folderName}.json`);
                console.log('Response:', response);
                if (!response.ok) {
                    throw new Error(`Failed to load data for ${currentState}`);
                }
                
                const data = await response.json();
                setStateData(data);
            } catch (err) {
                console.error(`Error loading data for ${currentState}:`, err);
                setError(`Could not load information for ${currentState}. Please try again later.`);
                setStateData(null);
            } finally {
                setLoading(false);
            }
        };
        
        loadStateData();
    }, [currentState]);

    return (
        <div className="home">
            <h1 className="header"><strong>State</strong><strong style={{color:'#fff'}}>Protest</strong>Rights</h1>
            <h2 className="header">Be Organized, Be United, Be Safe</h2>
            <section className="intro">
                <p>
                    In the United States of America, protesting is a form of free speech protected by the First Amendment, but <strong>there are limitations to these protections</strong>.
                </p>
                <p>
                    Before organizing or attending a protest in any US state, it is essential to know your rights as a <strong>resident or non-resident</strong>
                    &nbsp;of that state.
                </p>
                <p>
                    Use the resources at the top of the page as general guidelines, and look up information for <strong>the state in which
                    the protest will occur</strong>&nbsp;using the dropdown below.
                </p>
            </section>
            <section className="info">
                <Alert severity="error" variant="outlined">
                        <p>Never endanger yourself, or others. <strong>No exceptions.</strong></p>
                        <p>Always abide by local, state, and federal laws.</p>
                </Alert>
            </section>
            <section className="controls">
                <FormControl sx={{ m: 1, minWidth: 80, color: '#fff' }}>
                    <h3>
                        Where will the protest occur?
                    </h3>
                    <Select
                        labelId="state--list-label"
                        id="state-list"
                        value={currentState}
                        onChange={handleChange}
                        sx={{width: '80%', color: '#fff'}}
                    >
                        {stateList.map((state) => (
                            <MenuItem key={state} value={state}>
                                {state}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </section>
            <section className="state-info">
                {currentState && (
                    <div>
                        <section className="disclaimer">
                            <ul>
                                <li>These are ACLU guidelines pulled from state-level ACLU websites where available</li>
                                <li>Visit the official source(s) below for the most up-to-date information and contact forms (if any):</li>
                                {stateData && stateData.sources &&
                                    <li>
                                    {typeof stateData.sources === 'string' ?
                                        <a href={stateData.sources} target="_blank" rel="noopener noreferrer">{stateData.sources}</a> :
                                        <>
                                            {stateData.sources.map((source, index) => (
                                                <span key={index}>
                                                    {index > 0 && ', '}
                                                    <a href={source} target="_blank" rel="noopener noreferrer">{source}</a>
                                                </span>
                                            ))}
                                        </>
                                    }
                                    </li>
                                }
                                <li>This information is NOT legal advice and do not treat it as such.</li>
                                <li>Consult a legal professional for legal advice.</li>
                            </ul>
                        </section>
                        {loading && <p>Loading information for {currentState}...</p>}
                        
                        {error && <p className="error">{error}</p>}
                        
                        {!loading && !error && stateData && (
                            <div className="state-data">
                                {stateData.intro && (
                                    <div className="intro">
                                        <h3>{stateData.intro.title}</h3>
                                        <p>{stateData.intro.text}</p>
                                    </div>
                                )}
                                
                                {stateData.sections && stateData.sections.map((section, sectionIndex) => (
                                    <div className="section" key={sectionIndex}>
                                        <h3>{section.title}</h3>
                                        
                                        {section.content && section.content.map((paragraph, pIndex) => (
                                            <p key={pIndex}>{paragraph}</p>
                                        ))}

                                        {section.links && section.links.map((link, linkIndex) => (
                                            <p key={linkIndex}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                    {link.text}
                                                </a>
                                            </p>
                                        ))}
                                        
                                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                                            <div className="subsection" key={subIndex}>
                                                <h4>{subsection.title}</h4>
                                                
                                                {subsection.items && (
                                                    <ul>
                                                        {subsection.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                
                                                {subsection.link && (
                                                    <a href={subsection.link.url}>{subsection.link.text}</a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>   
                )}
            </section>
        </div>
    );
}
