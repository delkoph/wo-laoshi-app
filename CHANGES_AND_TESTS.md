# Enhanced-build audit and test results

## Audit decisions

The original translator's MyMemory request flow was compatible with general text.
It was the local-only default in the replacement that caused the reported lookup
barrier. The enhanced build restores automatic online fallback on a deliberate
Translate click, while keeping a clearly disclosed local-only switch and the
new error/cancellation safeguards. Pinyin support is adapted from the original
concept and bundled locally instead of fetching a CDN at runtime.

Guided writing uses pinned Hanzi Writer code and original stroke data, not an
LLM-generated stroke sequence. The source corpus has 3,034 unique simplified
characters; all have bundled stroke records. The full user-supplied vocabulary
parses equal to the original JSON array. The stroke subset adds no speculative
meaning, mnemonic etymology or HSK status.

Installation/offline reopening is implemented as a static PWA. Keeping the main
app consolidated is compatible with adding the small manifest, service-worker
and icon files necessary for a reliable install flow. No deployment was made.

## Test environment

Local Chromium Headless Shell via Playwright; served from localhost (development
secure context). Desktop 1440×1000, mobile 390×844. Drawing was exercised with both
mouse input and Chromium touch-event dispatch in a touch-capable mobile context.
This is browser emulation, not testing a physical phone or stylus.

## Passed checks

- Original vocabulary JSON equality and complete 3,034-character stroke-data coverage.
- JavaScript syntax checks for both bundled libraries, the main app and service worker.
- Updated embedded app loads: **PASS**.
- All three palettes in both day/night modes: **PASS**.
- Bundled stroke renderer and individual-stroke lessons: **PASS**.
- Freehand ink, undo, ghost, per-character retention, explicit Done: **PASS**.
- Actual guided tracing accepts all seven 你 strokes: **PASS**.
- Character Lens radical SVG, ink map, rebuild slider and toggle: **PASS**.
- Optional quiz pinyin, custom hints, safe cues and two complete quizzes: **PASS**.
- Original-style general translation, contextual ruby pinyin, swap and local-only switch: **PASS**.
- API rejection is not shown as a translation: **PASS**.
- Manifest, icons, registered service worker and offline shell cache: **PASS**.
- All seven screens fit 390px width: **PASS**.
- True offline reload plus bundled writing lesson: **PASS**.
- Backup includes writing stats, theme and custom hints: **PASS**.
- No uncaught browser JavaScript errors: **PASS**.
- Touch-event drawing, license round-trip retains ink, and explicit Done: **PASS**.
- Deferred install prompt dismissal and manual instructions (simulated event): **PASS**.
- New preferences, memory cues and writing counts survive import: **PASS**.
- No uncaught touch/install-test JavaScript errors: **PASS**.

## Live translation check

A real cross-origin MyMemory request for the nonsensitive sample “My little cat
is sleeping beside the window.” returned Chinese successfully. The output
contained ten locally generated ruby/pinyin annotations; no service error was
reported. This is a one-request integration check, not a translation-quality
certification or a guarantee of future service uptime.

API-rejection handling was separately verified with a controlled quota-error
response. General-success pinyin, local-only mode and Chinese-input readings were
verified with controlled responses and local lookup.

## Offline and installation verification

The service worker registered, cached the application shell and supporting files,
and controlled the local app. A true browser-offline reload reopened the app and
a stroke-order lesson without a network connection. Manifest fields and icon
references were checked. A deferred-install-prompt dismissal was simulated and
correctly returned to manual instructions. No native home-screen installation
on a physical device, production HTTPS host or user account is claimed.

## Still to review before release

- Your visual and pedagogical acceptance review.
- Chinese content, polyphonic/name readings and public-service translations.
- Physical iPhone/iPad/Android drawing, stylus pressure and native installation.
- Safari/Firefox behavior and a formal screen-reader/contrast accessibility review.
- Browser-vendor speech availability and actual microphone permissions.
- User-supplied vocabulary redistribution rights and required attribution.
- Production service-worker scope/cache behavior on the eventual hosting origin.

No deployment has been performed. Temporary freehand drawings are deliberately
not saved as images; only practice counts survive Done. Spaced-review scheduling
and XP rules are unchanged by viewing a writing lesson or enabling hints.
