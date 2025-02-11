import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
