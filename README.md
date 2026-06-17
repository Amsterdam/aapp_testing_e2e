# Amsterdam App E2E Tests

End-to-end test suite for the [Amsterdam app](https://github.com/Amsterdam/aapp_app_mobile), implemented with Maestro flows.

The repository contains scenario-based tests for key app modules such as parking, profile, contact, survey, waste guide, and burning guide. Tests are organized as reusable flow fragments plus runnable entry flows.

## What Is In This Repository

- Maestro test flows under `maestro/`
- Shared reusable flows under `maestro/shared/` and module-specific `utils/` or `shared/` folders
- Entry flows (the files that are executed directly) ending in `.entry.yaml`
- JavaScript helper scripts used by Maestro (credentials, timeouts, generated values)
- Azure DevOps pipeline definitions under `pipelines/`

## Test Structure

### Entry Flows

Runnable flows include, among others:

- `maestro/parking/entry/*.entry.yaml`
- `maestro/contact/*.entry.yaml`
- `maestro/profile/**/*.entry.yaml`
- `maestro/survey/*.entry.yaml`
- `maestro/waste-guide/entry/*.entry.yaml`
- `maestro/burning-guide/*.entry.yaml`

Each entry flow composes shared helpers with `runFlow` and can set per-scenario environment variables (for example module button IDs or environment selectors).

### Shared Flows

Common actions are centralized in shared flows, for example:

- opening a module from a fresh app state
- closing onboarding/surveys
- entering access codes
- generic UI helpers (toggle, close keyboard, handle deep links)

### Scripts

The suite uses Maestro JavaScript scripts for dynamic values and secrets:

- `maestro/scripts/credentials.js` (gitignored): create locally for parking login flows

- `maestro/scripts/credentials.ci.js`: CI placeholders that are replaced in pipelines
- `maestro/parking/scripts/generateRandomLicensePlate.js`: creates random license plates

## Prerequisites

To run tests locally:

1. Install Maestro CLI
2. Install and run a supported iOS or Android simulator/emulator
3. Have a dev/test app build where testIDs used in the flows are available

To run in CI:

1. Azure DevOps pipeline access
2. BrowserStack App Automate credentials
3. Pipeline variable group `aapp_testing_e2e` configured with required secrets

## Run Tests Locally

Run a single entry flow from the repository root:

```bash
maestro test maestro/parking/entry/visitor.entry.yaml
```

Run a module entry folder:

```bash
maestro test maestro/parking/entry
```

Run another scenario:

```bash
maestro test maestro/contact/contact.entry.yaml
```

Notes:

- Parking scenarios depend on report code and pin values from `maestro/scripts/credentials.js` (gitignored; create it locally, e.g. by copying `maestro/scripts/credentials.ci.js`).


## CI/CD Execution

Pipelines:

- `pipelines/android-pipeline.yml`
- `pipelines/ios-pipeline.yml`
- shared logic in `pipelines/templates/shared.yml`

CI flow summary:

1. Rename `credentials.ci.js` to `credentials.js`
2. Inject secret values from Azure DevOps variables
3. Zip and upload Maestro tests to BrowserStack
4. Upload app artifact (or reuse provided app ID)
5. Start BrowserStack Maestro build for discovered entry flows

Both platform pipelines support optional parameters for reusing existing BrowserStack app and test suite IDs.

## Credentials And Secrets

- For local execution, create `maestro/scripts/credentials.js` (it is gitignored), e.g. by copying `maestro/scripts/credentials.ci.js`, then fill in non-production test accounts.
- For local execution, update `maestro/scripts/credentials.js` with non-production test accounts.
- For CI, use the pipeline variable group placeholders in `credentials.ci.js` and let the pipeline inject values.

## Contributing

When adding or updating tests:

1. Prefer small reusable helpers in module `shared/` or `utils/` folders
2. Keep entry flows focused on user-visible scenarios
3. Reuse existing shared flows before creating new duplicates
4. Validate new flows locally with Maestro before opening a PR

## License

Licensed under the EUPL v1.2. See `LICENSE`.
