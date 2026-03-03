# Claimy App (Clean React Native Baseline)

This project is set up as a clean, feature-first React Native architecture so you can implement the final UI quickly without creating technical debt.

## Architecture

```txt
src/
  app/
    App.tsx
    providers/
  navigation/
  features/
    onboarding/
    auth/
    home/
    claim/
    chat/
    profile/
  shared/
    components/
    theme/
  state/
```

## Principles Used

- Feature-first modules: keep each screen and business logic inside `src/features/*`.
- Thin app entrypoint: app wiring is in `src/app`.
- Explicit navigation layers: onboarding, auth, and main app flow are separated.
- Shared UI primitives: reusable components live in `src/shared/components`.
- Centralized styling tokens: base colors and spacing in `src/shared/theme`.
- Global app state only when needed: session flags in zustand store (`src/state`).
- Server state is isolated: React Query client initialized in providers.

## Run

```sh
npm start
npm run android
npm run ios
```

## Quality checks

```sh
npm run lint
npm test
```

## Next build steps

1. Map each image in `Claimy _ Final UI.zip` to the matching feature screen.
2. Replace placeholder content with real components and form schemas.
3. Add API layer per feature (query keys, services, DTO mappers).
4. Add persistence for session/onboarding state.
5. Add unit tests for state and integration tests per major screen flow.
