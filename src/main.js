const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});