# Copilot Instructions for BOOTCAMP-DAY1

## Project Overview
This workspace is organized by day, with each day containing subfolders for specific tasks. Most tasks are implemented using HTML, CSS, and JavaScript, with supporting image assets for UI and demonstration purposes.

## Directory Structure
- Each `dayX/` folder contains:
  - One or more subfolders for tasks (e.g., `task1/`, `project 1/`)
  - HTML files (e.g., `index.html`, `DAY3.HTML`, `ch1.html`)
  - CSS files for styling (e.g., `style.css`, `bass.css`, `ch1.css`)
  - JavaScript files for logic (e.g., `task.js`, `q1.js` to `q5.js`)
  - Image assets for UI or demonstration

## Key Patterns and Conventions
- **Task Scripts:** Each JavaScript file (e.g., `q4.js`) typically solves a single problem, often with sample inputs and outputs hardcoded for demonstration.
- **HTML/CSS/JS Integration:** Tasks are usually standalone; JS files may be run in the browser console or with Node.js for output verification.
- **File Naming:** Task files are named by day and question (e.g., `q1.js`, `ch1.html`). Images are named descriptively for easy reference in HTML/CSS.
- **Sample Inputs/Outputs:** Many JS files include sample inputs/outputs in comments for quick testing and validation.

## Developer Workflows
- **Testing JS Code:**
  - Run JS files in the browser console or with Node.js (`node path/to/file.js`).
  - Outputs are typically logged to the console.
- **Editing Tasks:**
  - To add or update a task, create/edit the relevant HTML, CSS, and JS files in the appropriate day/task folder.
  - Reference images using relative paths for portability.
- **Debugging:**
  - Use browser dev tools or Node.js error messages for debugging JS logic.

## Integration Points
- No external dependencies or build tools are present; all code is vanilla HTML/CSS/JS.
- Images are used for UI and demonstration only; no dynamic asset loading.

## Example: Adding a New Task
1. Create a new folder under the relevant day (e.g., `day8/task1/`).
2. Add `index.html`, `style.css`, and `script.js` as needed.
3. Place any required images in the same folder.
4. Follow the naming and structure conventions from previous days for consistency.

## References
- See `day 7/script/q4.js` for a sample JS task with input/output demonstration.
- Use `index.html` files in each day folder as entry points for browser-based tasks.

---
For questions or unclear patterns, please provide feedback so this guide can be improved for future AI agents.
