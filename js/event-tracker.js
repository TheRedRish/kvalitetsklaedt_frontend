import {getSessionToken} from './session.js';

const url = 'http://localhost:8080';

function trackEvent(eventType, eventData = {}) {
    const payload = {
        sessionId: getSessionToken(),
        timestamp: new Date().toISOString(),
        eventType,
        eventData
    };

    fetch(url + '/api/tracking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to track event');
        }
    }).catch(error => {
        console.error('Tracking error:', error);
    });
}

export {trackEvent};