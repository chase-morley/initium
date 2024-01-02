document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('modeSwitch');
    const root = document.documentElement;
  
    modeSwitch.addEventListener('change', () => {
        document.body.classList.toggle(modeSwitch.checked);
        //document.body.classList.toggle('dark-mode', modeSwitch.checked);
    
        if (modeSwitch.checked) {
            root.style.setProperty('--background', '#000');
            root.style.setProperty('--text', '#fff');
            root.style.setProperty('--switch-off', '#000');
            root.style.setProperty('--switch-on', '#fff');
        } else {
            root.style.setProperty('--background', '#fff');
            root.style.setProperty('--text', '#000');
            root.style.setProperty('--switch-off', '#fff');
            root.style.setProperty('--switch-on', '#000');
        }
    });
});