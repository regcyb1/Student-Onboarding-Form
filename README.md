# Student Onboarding Entry System

A simple local website for college staff to enter individual student onboarding
data. Submissions are saved directly to a **Google Sheet** using **Google Apps
Script** as the backend. There is no login, no dashboard, and no local database —
staff view, filter, search, and manage everything from the Google Sheet itself.

```
student onboarding system/
├── index.html        # The form (7 sections)
├── style.css         # Techspire-style responsive UI
├── script.js         # Dropdowns, validation, submission logic
├── locationData.js   # Nepal Province → District → Municipality data
├── appsScript.gs     # Google Apps Script backend (paste into Apps Script)
└── README.md         # This file
```

---

## Part A — Set up the Google Sheet + Backend

### 1. Create the Google Sheet
1. Go to <https://sheets.google.com> and create a **new blank spreadsheet**.
2. Give it any name, e.g. `Student Onboarding Data`.

### 2. Required sheet (tab) name
Rename the bottom tab to exactly:

```
StudentResponses
```

> The Apps Script also auto-creates this tab and its headers on the first
> submission, but naming it yourself keeps things clean.

### 3. Required column headers
The script writes these headers automatically on first run. For reference, the
columns (left to right) are:

```
Timestamp, Submission ID, Full Name, Student ID, Contact Number, Email Address,
Permanent Province, Permanent District, Permanent Municipality,
Temporary Province, Temporary District, Temporary Municipality,
Plus Two College Name, Plus Two College Province, Plus Two College District,
Stream, Other Stream, Computer Science Studied, GPA,
Father Name, Mother Name, Guardian Contact Number, Father Occupation,
Mother Occupation, Annual Family Income, Siblings Details,
Discovery Sources, Other Discovery Source, Enrollment Factors,
Other Colleges Considered, Primary Area of Interest, Bachelor Goal,
Other Bachelor Goal, Expected College Support, Motivation Rating,
Interested Clubs, Existing Skills, Other Skills, Overall Remarks,
Name of Official, Interview Date, Signature Name, Recorded By
```

### 4. Paste the Apps Script code
1. In the spreadsheet menu, click **Extensions → Apps Script**.
2. Delete any default `function myFunction() {}` code.
3. Open `appsScript.gs` from this project, copy **all** of it, and paste it in.
4. Click the **Save** (disk) icon.

### 5. Deploy as a Web App
1. Click **Deploy → New deployment**.
2. Click the gear icon → choose **Web app**.
3. Set:
   - **Description:** `Student Onboarding` (any text)
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Click **Deploy**.
5. Approve the permissions when Google asks (choose your account →
   *Advanced* → *Go to project (unsafe)* → *Allow*). This is normal for your
   own script.

### 6. Copy the Web App URL
After deploying, Google shows a **Web app URL** ending in `/exec`. It looks like:

```
https://script.google.com/macros/s/AKfy..../exec
```

Click **Copy**.

> Tip: paste that URL into a browser. You should see
> `{"success":true,"message":"Student Onboarding backend is running."}`

---

## Part B — Connect the Website

### 7. Paste the Web App URL into `script.js`
1. Open `script.js`.
2. Near the top, find:
   ```js
   const WEB_APP_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
   ```
3. Replace the placeholder with your copied URL:
   ```js
   const WEB_APP_URL = "https://script.google.com/macros/s/AKfy..../exec";
   ```
4. Save the file.

---

## Part C — Run the Website Locally

### 8. Run it
Because the browser blocks `fetch` from `file://` pages in some cases, it is
best to serve the folder over a tiny local server:

**Option 1 — Python (already on most Macs/Linux):**
```bash
cd "student onboarding system"
python3 -m http.server 5500
```
Then open <http://localhost:5500> in your browser.

**Option 2 — VS Code:** install the **Live Server** extension, right-click
`index.html`, choose **Open with Live Server**.

**Option 3 — Simple:** double-click `index.html` to open it directly. Submission
still works because it posts to Google over the internet.

> On a local network, others can reach it at `http://YOUR_COMPUTER_IP:5500`.

### 9. Test form submission
1. Fill in the required fields (marked `*`): Full Name, Contact Number (10
   digits), Permanent Province/District/Municipality, Stream.
2. Click **Save Student Record**.
3. You should see a green success message with a Submission ID like
   `TS ONB 2026 0001`.
4. Open your Google Sheet — a new row should appear in `StudentResponses`.

**Internet** is only needed at submission time. Filling the form works offline.

---

## Part D — Add More Location Data

All Nepal location data lives in `locationData.js` as a nested object:

```js
const locationData = {
  "Bagmati Province": {
    "Kathmandu": [
      "Kathmandu Metropolitan City",
      "Kirtipur Municipality"
    ]
  }
};
```

To add data:
1. **New province:** add a new top-level key (province name) with an object.
2. **New district:** add a key inside the province, with an array value.
3. **New municipality:** add a string to the district's array.

Example — adding a municipality to Kathmandu:
```js
"Kathmandu": [
  "Kathmandu Metropolitan City",
  "Kirtipur Municipality",
  "Gokarneshwar Municipality"   // <- added
]
```

Save the file and refresh the page — the dropdowns update automatically. No
other code changes are needed.

---

## Notes
- **Submission ID** auto-increments from the number of existing rows
  (`TS ONB 2026 0001`, `0002`, ...).
- **Timestamp** is added automatically by the backend.
- No paid libraries, no frameworks, no login, no local storage of records.
- To manage records (search, filter, edit), use Google Sheet's built-in tools.

## Troubleshooting
| Problem | Fix |
|---|---|
| "Web App URL is not set" | You didn't paste the URL into `script.js`. |
| "Could not reach the server" | Check internet; re-copy the `/exec` URL; make sure access is **Anyone**. |
| Nothing appears in the sheet | Confirm the tab is named `StudentResponses`; re-deploy after code edits. |
| Changed the `.gs` code but nothing updates | **Deploy → Manage deployments → Edit → New version**. |
