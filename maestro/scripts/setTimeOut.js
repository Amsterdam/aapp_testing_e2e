
// This script will timeout after TIMEOUT_DURATION seconds. Defaults to 10 seconds.
function setTimeoutPromise(ms) {
	return new Promise((_, reject) => {
		setTimeout(() => reject(new Error('Timeout reached')), ms);
	});
}

async function main() {
	try {
		await setTimeoutPromise(TIMEOUT_DURATION || 10000);
	} catch (e) {
		output.timedOut = true;
		output.message = e.message;
	}
}

main();
