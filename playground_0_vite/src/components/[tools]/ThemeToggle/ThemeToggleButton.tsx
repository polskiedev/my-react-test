import React, { ChangeEvent, useState } from 'react';
import { default as ClassBuilder } from './ThemeToggleClassBuilder';
import { APP_ENV } from '../../../config/config';

import Span from '../../atoms/Span/Span';

import { useTheme, Options as ThemeOptions } from './types/Theme/ThemeProvider';
import { useSite, Options as SiteOptions } from './types/Site/SiteProvider';
import { useEvent, Options as EventOptions } from './types/Event/EventProvider';

const {_: mainCB} = ClassBuilder();

const ThemeToggleButton: React.FC = () => {
  if(APP_ENV === 'production') return (<></>);

  const [toggleButtons, setToggleButtons] = useState(true);
  const [toggleComponent, setToggleComponent] = useState('');

  const { theme, toggleTheme } = useTheme();
  const { site, toggleSite } = useSite();
  const { event, toggleEvent } = useEvent();

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as ThemeOptions;
    toggleTheme(selectedTheme);
  };

  const handleSiteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSite = event.target.value as SiteOptions;
    toggleSite(selectedSite);
  };

  const handleEventChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedEvent = event.target.value as EventOptions;
    toggleEvent(selectedEvent);
  };

  const handleToggleButtons = () => {
    setToggleButtons((prevShowButtons) => !prevShowButtons);
    setToggleComponent((prevClassName) =>
      prevClassName.includes('minimize') ? '' : 'minimize'
    );
  };

  const availableThemes: ThemeOptions[] = ['light', 'dark'];
  const availableSites: SiteOptions[] = [
    'BASE',
    'VERAJOHN_JP', 'INTERCASINO_JP', 'YUUGADO_COM',
    'HAPPYLUKE_COM', 'LIVECASINOHOUSE_COM', 
    'VERAJOHN_COM', 'INTERCASINO_COM', 'VERAJOHN_SE', 'INTERCASINO_SE', 
    'BOABET'
  ];
  const availableEvents: EventOptions[] = [
    'NONE', 'CHRISTMAS', 'NEW_YEAR', 'HALLOWEEN', 
    'VALENTINES', 'APRIL_FOOLS', 'EASTER'
  ];

  return (
    <>
      <div className={`${mainCB.build()} ${toggleComponent}`}>
        <div className="controls flex flex-row justify-end">
        {toggleButtons ? (
          <button onClick={handleToggleButtons}>
            <Span icon="circleplus"></Span>
          </button>
        ) : (
          <button onClick={handleToggleButtons}>
            <Span icon="circleminus"></Span>
          </button>
        )}
        </div>
        <div className="content">
          <div className="theme-option">
            <label htmlFor="site-select">Site: </label>
            <select id="site-select" value={site} onChange={handleSiteChange}>
              {availableSites.map((siteCode) => (
                <option key={siteCode} value={siteCode}>
                  {siteCode.charAt(0).toUpperCase() + siteCode.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="theme-option">
            <label htmlFor="event-select">Event: </label>
            <select id="event-select" value={event} onChange={handleEventChange}>
              {availableEvents.map((eventName) => (
                <option key={eventName} value={eventName}>
                  {eventName.charAt(0).toUpperCase() + eventName.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="theme-option">
            <label htmlFor="theme-select">Theme: </label>
            <select id="theme-select" value={theme} onChange={handleThemeChange}>
              {availableThemes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeToggleButton;
