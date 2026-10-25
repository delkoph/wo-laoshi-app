# Wǒ Lǎoshī — enhanced review build (not deployed)

The application logic, styling, complete supplied vocabulary, local pinyin engine,
stroke-order renderer and 3,034-character stroke dataset are consolidated into
index.html. That file is about 13 MB uncompressed. The deliberately bundled data
means that core writing lessons do not rely on a CDN or a live character API.

## What changed

- Writing Studio on flashcards: “Teach me to write” and “Practice writing”.
- Stroke-order playback, individual strokes, guided tracing, and a freehand pad
  for fingers, styluses or mouse input. Undo, Clear and tracing-model controls.
- Multi-character selection preserves each character's ink during the open
  session. No automatic advance or forced timeout; choose Done explicitly.
- Character Lens: radical-coloured strokes, a 3×3 stroke-centreline density map,
  gradual stroke reconstruction and editable personal memory cues. Optional.
- Optional visual/custom quiz hints and independent pinyin on/off button.
- Green, burgundy and blue themes, each with its own day/night palette.
- Restored the original translator's general online translation flow, with
  context-aware pinyin above Chinese output and optional Chinese-input readings.
- Home-screen install flow plus install manifest, icons and offline service worker.

## Review locally without deploying

Opening index.html previews core study features. For a complete local PWA test,
run `python -m http.server 8000` in this folder and open localhost in a browser.
Service workers are supported on localhost for development, not arbitrary file
URLs. The interactive chat preview is not a native installation test.

On the flashcard page, try Learn → Next stroke, then Free writing or Guided
tracing. Freehand marks are not automatically graded. Guided tracing compares
stroke paths/direction against the model; it is not OCR or a proficiency score.
Done records practice counts only if you drew or completed guided tracing.
Viewing a lesson alone does not inflate those counts. No writing XP was added.

Drawings are temporary for the open writing dialog. Only practice counts are
saved; raw handwriting is not retained, uploaded or included in progress backups.
Closing a nonempty session without Done asks before discarding it. A Clear/Undo
operation changes only the selected character's temporary pad.

## Home-screen installation (when you later decide to host)

Do not deploy until you are ready. No GitHub/Vercel account was accessed.
When hosting later, keep ALL of these files together in the output root:

- index.html
- manifest.webmanifest
- sw.js
- icon-192.png and icon-512.png
- THIRD-PARTY-NOTICES.txt and ARPHICPL.TXT

These small supporting files are needed for reliable install/offline support and
license distribution. The main application remains one consolidated code file.
No framework, node_modules, API keys, package.json or build command is required.
For Vercel later: choose Other, skip the build step, and serve the repository root.
Do not upload only the ZIP or put the support files in a different directory.

Use “＋ App” in the app header to check offline readiness and install instructions.
A compatible Chromium browser can offer a native install prompt. Safari on
Apple devices uses Share → Add to Home Screen. Exact native menus depend on the
browser/device. This build does not force installation or claim it succeeded
merely because the user accepted a prompt. Core study is cached after successful
service-worker installation; check the status before relying on offline access.
Online translation and some device speech services still need connectivity.
Browser storage may be evicted, and installation never guarantees permanent data.

## Translator reconciliation

The uploaded original translator.html sent arbitrary text directly to MyMemory
and used a CDN copy of pinyin-pro. The earlier replacement's local-only default
introduced the unwanted “no exact local match” barrier. This revision restores
online fallback ENABLED BY DEFAULT, with a visible disclosure and a persistent
off switch. Nothing is sent until the user clicks Translate; exact local entries
and phrases are still resolved without a request. Dictation fills the text field
but does not automatically submit it to a translation service.

Retained safeguards: 500 UTF-8-byte online limit, 12-second timeout, API/HTTP
status checks, stale-response cancellation, escaped rendering and explicit
network/quota errors. Chinese readings now come from a bundled, pinned local
pinyin-pro engine (3.29.5), not a runtime CDN. Ruby annotation is constructed from
escaped text fields rather than remote HTML. English output remains normal text.

Turning online translation off deliberately limits the app to local lookups.
That limitation is now explained as “Local-only mode” rather than presented as a
failed general translator. Offline mode cannot provide a full machine-translation
engine. MyMemory may still reject/limit requests or produce inaccurate output;
no client-only implementation can guarantee its uptime or translation quality.
Verify important translations and readings, especially names and rare usages.
Do not submit sensitive text to a public translation service.

## Character Lens and quiz hints

Character Lens can be switched off on flashcards or in Progress. This preference
is separate from the quiz custom-hint switch. The Lens colours the radical group
from the stroke dataset. A radical label, when available, comes from the supplied
single-character dictionary entry, not a guessed decomposition of a whole word.
The density map samples stroke centrelines, not actual painted area. Direction
counts are approximate geometric descriptors, not authoritative stroke names.
No fabricated character etymology is presented.

Save a personal cue on a flashcard to make it available as that pronunciation's
quiz hint. Without a saved cue, the optional hint shows stroke/radical/shape
information. Hints do not automatically reveal the translation or hidden pinyin;
user-written cues may of course contain whatever the user chose to write.
Both pinyin and custom hints are off by default in quizzes. Toggling either does
not reset answers or create a new quiz. Settings are included in progress backups.

## Data and migration

All 11,470 source entries and 12,623 pronunciation forms remain embedded, with
14 labeled everyday phrases. The original vocabulary schema and all source fields
are preserved. The old/new/newest HSK edition choices remain explicit. The source
corpus's license/provenance still needs owner verification before redistribution.

Progress stays on this browser/origin under wo-laoshi-v2. Existing v2 backups are
accepted; new settings get defaults when missing. Custom cues, colour selection,
quiz preferences and writing counts are included in new backups. The original
woLaoshiState migration remains available if no new saved state exists. There is
no account, cloud sync or fake leaderboard. Multi-tab storage remains last-writer-
wins, not transactional. Export progress before switching domains or replacing
the original corpus. Review IDs depend on stable vocabulary row/form order.

## Third-party notices

Hanzi Writer 3.7.3 and pinyin-pro 3.29.5 are bundled under their MIT licenses.
The selected Hanzi Writer Data 2.0.1 records derive from Make Me a Hanzi / Arphic
and retain their Arphic Public License. No stroke path was modified. The subset
selection notice, full licenses and no-warranty notice are in the app and in the
supporting text files. The app lets users export that freely redistributable
stroke-data subset from its license dialog. Those license terms apply to the
stroke data; they do not assign a license to the independently authored app or
the user-supplied vocabulary corpus.

## References used

- https://github.com/chanind/hanzi-writer
- https://github.com/chanind/hanzi-writer-data
- https://github.com/zh-lx/pinyin-pro
- https://mymemory.translated.net/doc/spec.php
- https://vercel.com/docs/builds/configure-a-build

See CHANGES_AND_TESTS.md for verification and remaining release checks.
