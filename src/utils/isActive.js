const isActive = (location, path) => {
  if (path === '/') {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  if (location.pathname.includes(path)) {
    return true;
  }

  return false;
};

export default isActive;
