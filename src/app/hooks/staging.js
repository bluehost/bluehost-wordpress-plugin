import {useEffect, useState} from '@wordpress/element';

/**
 * Staging functionality.
 *
 * @param {Array} Initial state
 * @returns {Array}
 */
export default function useStaging(
    {
        initialEnvironment = 'production',
        initialStatus = 'default'
    }
) {

    /**
     * Status of the staging environment.
     *
     * @var {String} Can be one of 'default', 'creation', or 'ready'.
     */
    const [status, setStatus] = useState(initialStatus);

    /**
     * Name of the current environment.
     *
     * @var {String} Can be one of 'production' or 'staging'.
     */
    const [environment, setEnvironment] = useState(initialEnvironment);

    /**
     * Create an environment.
     *
     * @param {String} env
     */
    function createEnv(env = 'staging') {
        setStatus('creation');
        setTimeout(() => {
            setStatus('ready');
            setEnvironment('staging');
        }, 5000);
    }

    /**
     * Delete an environment.
     *
     * @param {String} env
     */
    function deleteEnv(env = 'staging') {
        setStatus('default');
        setEnvironment('production');
    }

    /**
     * Switch between environments.
     *
     * @param {String} env
     */
    function switchToEnv(env) {
        setEnvironment(env);
    }

    /**
     * Clone an entire environment.
     *
     * @param {String} fromEnv
     * @param {String} toEnv
     */
    function cloneEnv(fromEnv = 'production', toEnv = 'staging') {
        deployChanges(fromEnv, toEnv, 'all');
    }

    /**
     * Deploy changes from one environment to another.
     *
     * @param {String} fromEnv
     * @param {String} toEnv
     * @param {String} include One of 'all', 'files', or 'db'
     */
    function deployChanges(fromEnv, toEnv, include = 'all') {
        console.log(`Deploying ${include} changes from ${fromEnv} to ${toEnv}`);
    }

    return [{environment, status}, {createEnv, deleteEnv, switchToEnv, cloneEnv, deployChanges}];
}