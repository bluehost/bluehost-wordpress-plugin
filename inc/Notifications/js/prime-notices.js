const domReady = wp.domReady;
const apiFetch = wp.apiFetch;
domReady(() => apiFetch({ path: '/bluehost/v1/notifications?context=wp-admin-prime'}));