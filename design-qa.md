# Design QA

Source: user-provided desktop account profile reference image.
Prototype: `http://127.0.0.1:4181` rendered with a demo signed-in user.
Viewport: 1536 x 1024.

## Checks

- Desktop account layout uses two primary cards with the left profile panel and right information form, matching the reference structure.
- Global desktop sidebar is hidden on the account screen so the profile card starts near the viewport edge like the reference.
- Profile card includes green cover, round avatar, edit affordance, badges, streak row, side navigation, and support block.
- Information card includes header icon, last-updated timestamp, 2-column fields, security banner, and save/cancel actions.
- Form controls preserve existing IDs used by save/profile logic.
- No obvious text overlap or horizontal overflow at the checked desktop viewport.

Final result: passed
