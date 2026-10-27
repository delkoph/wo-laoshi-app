# Wǒ Lǎoshī — revised app

## Install
Replace your deployed index.html with the index.html in this folder and redeploy to Vercel. This is a standalone, framework-free update; no build step or API key is needed. Keep the existing manifest, icons and service-worker assets in your project. These were not included in the supplied attachment and are not replaced here. If an installed app still shows the old version, refresh/update its existing service-worker cache.

This package has not been deployed to the live website.

## Changes
- Startup: search normalization is precomputed at build time. Stroke geometry is indexed and each character is JSON-decoded only when needed, rather than decoding all 3,034 characters at boot. Study IDs, review keys and version-2 progress compatibility are retained. All 11,470 supplied source entries are represented (12,623 pronunciation rows), plus the existing everyday phrases. The vocabulary representation now contains study/search fields rather than a verbatim copy of every original source field. Keep your original attachment as the source archive.
- Optional visual memory cues in flashcards and quizzes, independent of custom hints: radical-highlighted outlines, stroke counts, shape observation, and a look/cover/recall prompt. Personal cues are displayed when available. Cues are study aids, not historical etymologies, invented radical meanings, or guaranteed memory improvements.
- Optional sound effects under Progress: off by default, with brighter day-mode tones and softer night-mode tones. Includes button clicks, progress, quiz feedback and XP awards. Synthesized locally with Web Audio; no sound downloads.
- Word of the day and dictionary results now open the existing writing studio in learning or practice mode. Character coverage remains limited to the bundled stroke subset.
- Previous-word navigation in flashcards and quizzes, including from session completion. Previously rated cards cannot be rated twice in the same session. Previously answered quiz questions remain locked; revisiting does not award points or alter accuracy.
- Bilingual dictionary dictation with an explicit English/Mandarin selector. Translator dictation follows the selected source language; use Swap languages for the other direction. Added inline listening state, transcript review, secure-context checks, permission/network/device error messages, navigation cleanup and keyboard-dictation guidance.
- Scoped the quiz-hint layout so it no longer inherits the fixed sidebar layout and blocks navigation.

## Verification
Local Chromium checks passed for the writing dialog, card back-navigation, duplicate-rating protection, quiz back-navigation, optional cues in both modes, dictionary writing entry points, and settings persistence. No uncaught page errors were observed in that flow. At a 390px mobile viewport, flashcards with cues and dictionary results showed no horizontal overflow.

Simulated SpeechRecognition transcript tests passed for English and Mandarin in BOTH the dictionary and translator. These verify application handling, not a real microphone or speech service. Real-device microphone permissions, vendor speech service availability, browser compatibility, audible sound quality, and the live Vercel deployment still require device testing. No server-side transcription fallback is included; unsupported browsers are guided to their keyboard microphone or typing.

Five fresh-context local-file Chromium runs measured median DOMContentLoaded at 418.6 ms before and 295.3 ms after (~29% lower). This is a local startup benchmark, NOT a network, mobile-device, or production guarantee. The file remains substantial because the stroke dataset is bundled for offline writing. Network transfer can still dominate initial loading.

## Suggested device checks
1. Load the HTTPS deployment, allow microphone access, and dictate English and Mandarin in the dictionary.
2. Dictate into the translator in both source-language directions; review the text before translating.
3. Deny microphone access and verify the inline recovery message.
4. Enable sound effects in Progress, compare day and night modes, then turn effects off.
5. Practice writing from the daily word, dictionary, and flashcards.
6. Enable visual cues in a quiz, move forward, then back before answering the next question.
7. Verify an existing progress backup imports and persists after refresh.
