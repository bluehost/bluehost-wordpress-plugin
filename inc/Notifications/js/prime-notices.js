const domReady = wp.domReady;
const apiFetch = wp.apiFetch;

const primeTransient = () => apiFetch({ path: '/bluehost/v1/notifications?context=wp-admin-prime'});

if ('requestIdleCallback' in window) {
    window.requestIdleCallback(primeTransient, { timeout: 2500 });
} else {
    domReady(primeTransient);
}