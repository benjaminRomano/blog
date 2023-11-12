# Places Generator

Here are some janky scripts for generating the places for the `Places in LA` page.

**Steps**

1. Manually Use Google Takeout to export Saved Lists (there's unfortunately no API for this)
2. Manually resolve places from the place URLs in saved lists (`resolve-places.mjs`).
3. Generate and cache thumbnails for all places (`resolve-thumbnails.mjs`)
4. Create entries for the website (`generate-entries.mjs`)
