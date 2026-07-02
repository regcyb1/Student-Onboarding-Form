/**
 * Student Onboarding Entry System - Google Apps Script backend
 * -------------------------------------------------------------
 * Receives JSON from the frontend, appends a row to the
 * "StudentResponses" sheet, and returns the generated Submission ID.
 *
 * SETUP:
 *   1. Create a Google Sheet.
 *   2. Add a tab named exactly:  StudentResponses
 *   3. Extensions > Apps Script, paste this file.
 *   4. Deploy > New deployment > Web app.
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   5. Copy the Web App URL into script.js (WEB_APP_URL).
 * -------------------------------------------------------------
 */

// Sheet tab name - must match the tab in your Google Sheet.
var SHEET_NAME = "StudentResponses";

// Submission ID prefix parts.
var ID_PREFIX = "TS ONB";
var ID_YEAR = "2026";

// Column headers, in the exact order rows are written.
var HEADERS = [
  "Timestamp",
  "Submission ID",
  "Full Name",
  "Student ID",
  "Contact Number",
  "Email Address",
  "Permanent Province",
  "Permanent District",
  "Permanent Municipality",
  "Temporary Province",
  "Temporary District",
  "Temporary Municipality",
  "Plus Two College Name",
  "Plus Two College Province",
  "Plus Two College District",
  "Stream",
  "Other Stream",
  "Computer Science Studied",
  "GPA",
  "Preparing Anything",
  "Preparation Type",
  "Entrance Institute",
  "Abroad Tests",
  "Abroad Country",
  "Father Name",
  "Father Contact Number",
  "Father Email",
  "Mother Name",
  "Mother Contact Number",
  "Mother Email",
  "Guardian Contact Number",
  "Father Occupation",
  "Mother Occupation",
  "Annual Family Income",
  "Siblings Details",
  "Discovery Sources",
  "Other Discovery Source",
  "Enrollment Factors",
  "Other Colleges Considered",
  "Primary Area of Interest",
  "Bachelor Goal",
  "Other Bachelor Goal",
  "Expected College Support",
  "Motivation Rating",
  "Interested Clubs",
  "Existing Skills",
  "Other Skills",
  "Overall Remarks",
  "Name of Official",
  "Interview Date",
  "Signature Name",
  "Recorded By"
];

/**
 * Handle POST requests from the frontend.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Serialize concurrent submissions so Submission IDs never collide.
    lock.waitLock(30000);

    var data = JSON.parse(e.postData.contents);

    var sheet = getSheet();
    ensureHeaders(sheet);

    var submissionId = generateSubmissionId(sheet);
    var timestamp = new Date();

    var row = [
      timestamp,
      submissionId,
      data.fullName || "",
      data.studentId || "",
      data.contactNumber || "",
      data.email || "",
      data.permProvince || "",
      data.permDistrict || "",
      data.permMunicipality || "",
      data.tempProvince || "",
      data.tempDistrict || "",
      data.tempMunicipality || "",
      data.plusTwoCollege || "",
      data.plusTwoProvince || "",
      data.plusTwoDistrict || "",
      data.stream || "",
      data.otherStream || "",
      data.csStudied || "",
      data.gpa || "",
      data.prepAnything || "",
      data.prepType || "",
      data.prepInstitute || "",
      data.abroadTest || "",
      data.prepCountry || "",
      data.fatherName || "",
      data.fatherContact || "",
      data.fatherEmail || "",
      data.motherName || "",
      data.motherContact || "",
      data.motherEmail || "",
      data.guardianContact || "",
      data.fatherOccupation || "",
      data.motherOccupation || "",
      data.annualIncome || "",
      data.siblingsDetails || "",
      data.discoverySources || "",
      data.otherDiscovery || "",
      data.enrollmentFactors || "",
      data.otherCollegesConsidered || "",
      data.primaryInterest || "",
      data.bachelorGoal || "",
      data.otherBachelorGoal || "",
      data.expectedSupport || "",
      data.motivationRating || "",
      data.interestedClubs || "",
      data.existingSkills || "",
      data.otherSkills || "",
      data.overallRemarks || "",
      data.officialName || "",
      data.interviewDate || "",
      data.signatureName || "",
      data.recordedBy || ""
    ];

    sheet.appendRow(row);

    return jsonResponse({ success: true, submissionId: submissionId });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Optional GET handler - lets you confirm the Web App is live
 * by opening the URL in a browser.
 */
function doGet() {
  return jsonResponse({ success: true, message: "Student Onboarding backend is running." });
}

/**
 * Return the StudentResponses sheet, creating it if missing.
 */
function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

/**
 * Ensure the sheet columns match HEADERS, in the exact HEADERS order.
 *
 * Empty sheet -> write all headers.
 * Existing sheet whose header row already equals HEADERS -> no-op (cheap
 *   compare, no write).
 * Existing sheet in a different shape/order -> migrate: rebuild every row
 *   by matching the OLD header label to its NEW position. This realigns
 *   old rows instead of just relabeling columns, so data added later (e.g.
 *   Father/Mother contact + email, the prep / entrance / abroad fields)
 *   and any reordering land under the right headers. Columns present in
 *   the old sheet but not in HEADERS are dropped; new headers get "".
 */
function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    return;
  }

  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();
  var range = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  var oldHeaders = range[0];

  // Already correct? (right width + same labels in order) -> nothing to do.
  var aligned = oldHeaders.length === HEADERS.length;
  if (aligned) {
    for (var i = 0; i < HEADERS.length; i++) {
      if (oldHeaders[i] !== HEADERS[i]) { aligned = false; break; }
    }
  }
  if (aligned) return;

  // Map each old header label -> its column index.
  var indexOf = {};
  oldHeaders.forEach(function (label, i) {
    if (label !== "" && !(label in indexOf)) indexOf[label] = i;
  });

  // Rebuild every row (including the header row) in HEADERS order.
  var rebuilt = range.map(function (rowArr, r) {
    return HEADERS.map(function (label) {
      if (r === 0) return label;              // header row
      var src = indexOf[label];
      return src === undefined ? "" : rowArr[src];
    });
  });

  sheet.clearContents();
  sheet.getRange(1, 1, rebuilt.length, HEADERS.length).setValues(rebuilt);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

/**
 * Build the next Submission ID based on existing data rows.
 * Format: "TS ONB 2026 0001".
 */
function generateSubmissionId(sheet) {
  // Row 1 is the header, so data rows = lastRow - 1.
  var dataRows = Math.max(0, sheet.getLastRow() - 1);
  var serial = dataRows + 1;
  var padded = ("0000" + serial).slice(-4); // e.g. 1 -> "0001"
  return ID_PREFIX + " " + ID_YEAR + " " + padded;
}

/**
 * Helper: return a JSON ContentService response.
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
