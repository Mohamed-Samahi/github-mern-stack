export const getUsernameFromSearchParams = (defaultUsername = 'mohamed-samahi') => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username') || defaultUsername;
};