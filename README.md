# Wǒ Lǎoshī — autopilot, exam media and grammar revision

## Deployment
Replace the previous deployed index.html with the standalone index.html supplied in this folder, then redeploy to your existing Vercel project. No build step, backend, framework or key is needed. Keep your existing manifest, icons and service-worker assets: those were not included in the original attachment and are not replaced here. If an installed app still shows the previous version, update its existing service-worker cache and refresh.

The live website has NOT been changed by this delivery. The interactive preview may not expose device speech or microphone services; test speech on your actual HTTPS deployment and devices.

## Autopilot
1. Start a flashcard session.
2. Tap Start / resume in the Autopilot panel.
3. Each card is spoken in this order: Chinese word, English primary meaning, Chinese sentence. The full drill repeats once, for TWO passes per word, and then moves to the next card.
4. Set a 2, 4, 6 or 10 second pause after each complete drill, and choose a speech rate. Utterance completion drives progression; prompts do not overlap and there is no fixed total card duration independent of speech length.
5. Pause cancels queued speech and timers. Resume explicitly restarts the CURRENT word’s two passes. Navigating away, hiding the page, opening writing, playing an original exam clip or manually controlling a card pauses autopilot.

Requires device Mandarin and English speech-synthesis voices. Missing language voices and speech errors are reported rather than silently substituting an incorrect language. Real device voice availability, sound quality and mobile background restrictions vary and require device testing. Speech is synthesized locally by the browser/device; it is never presented as original exam audio.

Autopilot does not auto-rate cards, schedule reviews, increase reviewed-card counts or award review XP. Those require a manual rating.

### Sentence coverage
There are 279 original authored word-example entries, plus an editable sentence saved per pronunciation. Coverage is not universal across the supplied 12,623 vocabulary pronunciation rows. Uncovered words receive a clearly labelled metalinguistic STUDY sentence mentioning the word, not a claimed natural usage example. Save your own Chinese sentence to replace it. Known surname-only senses are not silently assigned a common-word usage example. Authored sentences are learning material, not official exam sentences.

## Original exam pictures and audio
The optional switch is available in both active flashcards and the dictionary. Three genuine source-matched HSK listening picture/audio pairs are bundled from publisher paper H10901:
- Question 1: phone call; mapped to 打电话 and 电话.
- Question 5: rain; mapped to 下雨 and 雨.
- Question 6, correct option A: cold weather; mapped to 冷 and 天气.

Question mappings are checked against the paper’s answer key. The picture crops preserve the exam artwork; the audio excerpts are trimmed/re-encoded ORIGINAL exam recordings, not TTS. The second rendition of each prompt is used once in each audio clip. Source URLs, page/question references, clip ranges and original-download SHA-256 hashes are recorded in exam-provenance.json. Native audio playback is separate from autopilot. Surname-only entries are excluded from these common-word picture matches.

The source is the Chinese Test Service Website (www.chinesetest.cn), via its public download centre. This is a small verified starter set, NOT a complete past-paper database or full vocabulary image bank. Unmapped entries state that no verified pair is available; no generated images, stock photos or synthesized audio are substituted. Use the “Study the 3 exam matches” action to try the covered set.

### Rights
The original exam content belongs to its publisher/rightsholders; an open redistribution licence has NOT been established. Public availability is not blanket permission to redistribute the whole database. The publisher’s legal notice permits only certain reasonable, attributed uses and warns that substantial or unauthorized redistribution requires permission. Attribution and a link to that notice are included in the app. Confirm that your intended use of these selected excerpts is permitted and obtain authorization where necessary before public or commercial distribution. Do not interpret this package as a grant of media rights.

### Importing more media
Expand coverage with an appropriately authorized JSON media pack. Import is session-only, deliberately separate from the progress backup; reimport after reload. Imported pairs are labelled user-provided and are NOT independently verified by this app. The importer cannot certify an official origin or correct image/audio correspondence.

The pack is an array of objects with these fields:
- keys: array of exact simplified dictionary words to match
- paper: source paper identifier
- question: source question reference
- image: embedded PNG/JPEG/WebP data URL or HTTPS URL
- audio: embedded MPEG/MP3/WAV/OGG data URL or HTTPS URL (native decoding depends on the browser)
- sourcePdf and sourceAudio: HTTPS source links
- alt: accessible image description

Use MP3 for widest compatibility. Maximum 200 entries and 20 MB per pack. Invalid or unsafe media/source values are rejected. Remote media is fetched only when the feature is displayed/played, and it may expose a request to the external host. Only import trusted, authorized content. No arbitrary script or HTML is imported.

## Grammar and HSK preparation
A new Grammar block is present on Home and in permanent navigation. It includes 42 ORIGINAL lessons across six suggested learning stages:
- Sentence structure and word order
- Questions, measure words and noun modification
- Negation, modality and aspect markers
- Comparisons and complements
- 把/被 constructions and common connectors
- More advanced conditionals, concessions and explanatory patterns

Each lesson has a pattern, an explanation, an original Chinese example with local pinyin, an English gloss, a common-mistake note and a three-choice practice check with feedback. Correct practice marks the lesson reviewed; completion persists in version-2 progress and exports. Search and stage/topic filters are included. Grammar progress does not fabricate a proficiency score.

This is a substantial foundation-to-advanced workbook, NOT every possible grammar rule or a certified complete/version-specific HSK syllabus. The stages are suggested learning order, not official exam-level tags. A preparation checklist and official resources link help users verify their booked exam’s current version, skills, timings and format.

## Minimal writing buttons
Learning and practice entry points in the daily word, dictionary and flashcards are now compact, centred book/pen SVG icons. Each retains a 44px target, keyboard focus, title and descriptive accessible label. Existing writing modes and the bundled stroke-data coverage are unchanged.

## Compatibility
Existing version-2 progress and vocabulary IDs are preserved. New preferences, custom sentences and grammar completion participate in validation/export/import. Prior startup improvements, optional memory cues, bilingual dictation and sound settings remain present. New exam media does not require external downloads at runtime for the three built-in pairs; audio is loaded only on demand.

## Verification and limits
Automated local Chromium tests cover:
- Exactly 18 utterances for a three-card run: three prompts × two passes × three words, with correct Chinese/English language order and no automatic reviews.
- Cancellation of queued speech on pause/navigation, editable examples, and explicit missing-Mandarin-voice errors.
- Decodable original recordings for all three pairs and dictionary image display.
- No fake media for uncovered words or surname senses, and rejection of an unsafe imported pack.
- All 42 lesson tiles, stage filtering, grammar search, exercise feedback and persistent progress.
- Functional icon buttons, narrow-screen navigation, no tested horizontal overflow, and no uncaught page errors in the main flow.

Synthesis tests use a deterministic mock of SpeechSynthesis. They verify control flow, not actual audible Mandarin/English rendering or device permissions. Real microphone recognition, actual device speech, screen-reader behavior and the live deployment require on-device acceptance testing. Included JSON test reports record the automated checks.
