/* =============================================================
   Student Onboarding Entry System - script.js
   - Dependent location dropdowns (Province -> District -> Municipality)
   - "Same as Permanent Address" copy + lock
   - Conditional "Other" fields
   - Max 3 enrollment factors
   - Client side validation
   - Submit as JSON to Google Apps Script Web App
   Depends on: locationData.js (must load first)
   ============================================================= */

/* -------------------------------------------------------------
   STEP 1: Paste your deployed Google Apps Script Web App URL here.
   See README.md for how to deploy and copy this URL.
   ------------------------------------------------------------- */
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyV7V6k7nDdGl1mzbc-3bQYpRILTnvUbNBbaok5B1Ifu8128XA4Kdd1NuMZbVJbLqn52w/exec";

// ------------------------------------------------------------------
// Dependent Location Dropdowns
// ------------------------------------------------------------------

/**
 * A "location group" is a set of linked province/district/municipality
 * dropdowns that share the same data-group attribute.
 * Some groups have no municipality (e.g. plusTwo) - that is handled
 * gracefully by checking for the element's existence.
 */
function setupLocationGroup(group) {
  const province = document.querySelector(`[data-role="province"][data-group="${group}"]`);
  const district = document.querySelector(`[data-role="district"][data-group="${group}"]`);
  const municipality = document.querySelector(`[data-role="municipality"][data-group="${group}"]`);

  if (!province) return;

  // Fill province dropdown from locationData keys
  fillOptions(province, Object.keys(locationData), "Select Province");

  // Province changed -> refresh districts
  province.addEventListener("change", () => {
    const districts = province.value ? Object.keys(locationData[province.value]) : [];
    fillOptions(district, districts, "Select District");
    district.disabled = !province.value;

    // Reset municipality whenever province changes
    if (municipality) {
      fillOptions(municipality, [], "Select Municipality");
      municipality.disabled = true;
    }
  });

  // District changed -> refresh municipalities
  if (municipality) {
    district.addEventListener("change", () => {
      const munis =
        province.value && district.value
          ? locationData[province.value][district.value]
          : [];
      fillOptions(municipality, munis, "Select Municipality");
      municipality.disabled = !district.value;
    });
  }
}

/**
 * Replace all options in a <select> with a placeholder + given values.
 */
function fillOptions(select, values, placeholder) {
  if (!select) return;
  select.innerHTML = "";

  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = placeholder;
  select.appendChild(ph);

  values.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}

// ------------------------------------------------------------------
// "Same as Permanent Address" logic
// ------------------------------------------------------------------

function setupSameAsPermanent() {
  const checkbox = document.getElementById("sameAsPermanent");
  const permProvince = document.getElementById("permProvince");
  const permDistrict = document.getElementById("permDistrict");
  const permMunicipality = document.getElementById("permMunicipality");
  const tempProvince = document.getElementById("tempProvince");
  const tempDistrict = document.getElementById("tempDistrict");
  const tempMunicipality = document.getElementById("tempMunicipality");

  // Copy permanent values into temporary dropdowns, rebuilding the
  // dependent option lists so the selected values are valid.
  function copyPermanentToTemporary() {
    // Province
    tempProvince.value = permProvince.value;

    // Rebuild districts for chosen province
    const districts = permProvince.value ? Object.keys(locationData[permProvince.value]) : [];
    fillOptions(tempDistrict, districts, "Select District");
    tempDistrict.value = permDistrict.value;

    // Rebuild municipalities for chosen district
    const munis =
      permProvince.value && permDistrict.value
        ? locationData[permProvince.value][permDistrict.value]
        : [];
    fillOptions(tempMunicipality, munis, "Select Municipality");
    tempMunicipality.value = permMunicipality.value;
  }

  function setTempDisabled(disabled) {
    [tempProvince, tempDistrict, tempMunicipality].forEach((el) => {
      el.disabled = disabled;
    });
  }

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      copyPermanentToTemporary();
      setTempDisabled(true);
    } else {
      // Re-enable; district/municipality stay disabled until parent chosen
      tempProvince.disabled = false;
      tempDistrict.disabled = !tempProvince.value;
      tempMunicipality.disabled = !tempDistrict.value;
    }
  });

  // Keep temporary in sync if permanent changes while box is checked
  [permProvince, permDistrict, permMunicipality].forEach((el) => {
    el.addEventListener("change", () => {
      if (checkbox.checked) copyPermanentToTemporary();
    });
  });
}

// ------------------------------------------------------------------
// Conditional "Other" fields
// ------------------------------------------------------------------

function setupConditionalFields() {
  // Stream -> Other Stream
  const stream = document.getElementById("stream");
  const otherStreamWrap = document.getElementById("otherStreamWrap");
  stream.addEventListener("change", () => {
    toggle(otherStreamWrap, stream.value === "Other");
  });

  // Discovery "Other"
  const discoveryOther = document.getElementById("discoveryOther");
  const otherDiscoveryWrap = document.getElementById("otherDiscoveryWrap");
  discoveryOther.addEventListener("change", () => {
    toggle(otherDiscoveryWrap, discoveryOther.checked);
  });

  // Bachelor goal "Other"
  const bachelorGoalOther = document.getElementById("bachelorGoalOther");
  const otherBachelorGoalWrap = document.getElementById("otherBachelorGoalWrap");
  document.querySelectorAll('[name="bachelorGoal"]').forEach((r) => {
    r.addEventListener("change", () => {
      toggle(otherBachelorGoalWrap, bachelorGoalOther.checked);
    });
  });

  // Skills "Other"
  const skillsOther = document.getElementById("skillsOther");
  const otherSkillsWrap = document.getElementById("otherSkillsWrap");
  skillsOther.addEventListener("change", () => {
    toggle(otherSkillsWrap, skillsOther.checked);
  });

  // Preparation cascade: prepAnything -> prepType -> academy / country
  const prepTypeWrap = document.getElementById("prepTypeWrap");
  const prepAcademyWrap = document.getElementById("prepAcademyWrap");
  const prepCountryWrap = document.getElementById("prepCountryWrap");
  const prepAnythingYes = document.getElementById("prepAnythingYes");
  const prepTypeEntrance = document.getElementById("prepTypeEntrance");
  const prepTypeIelts = document.getElementById("prepTypeIelts");
  const prepTypeAbroad = document.getElementById("prepTypeAbroad");

  function refreshPrep() {
    const yes = prepAnythingYes.checked;
    toggle(prepTypeWrap, yes);
    // Academy shown for Entrance or IELTS; country for Abroad. Only when "Yes".
    toggle(prepAcademyWrap, yes && (prepTypeEntrance.checked || prepTypeIelts.checked));
    toggle(prepCountryWrap, yes && prepTypeAbroad.checked);
  }

  document.querySelectorAll('[name="prepAnything"]').forEach((r) => {
    r.addEventListener("change", refreshPrep);
  });
  document.querySelectorAll('[name="prepType"]').forEach((c) => {
    c.addEventListener("change", refreshPrep);
  });
}

function toggle(el, show) {
  el.classList.toggle("hidden", !show);
}

// ------------------------------------------------------------------
// Enrollment factors: maximum 3 selections
// ------------------------------------------------------------------

function setupMaxFactors() {
  const factors = document.querySelectorAll('[name="enrollmentFactors"]');
  factors.forEach((cb) => {
    cb.addEventListener("change", () => {
      const checked = document.querySelectorAll('[name="enrollmentFactors"]:checked');
      if (checked.length > 3) {
        cb.checked = false; // undo the last one
        showFieldError("enrollmentFactors", "You can select a maximum of 3 factors.");
      } else {
        clearFieldError("enrollmentFactors");
      }
    });
  });
}

// ------------------------------------------------------------------
// Validation helpers
// ------------------------------------------------------------------

function showFieldError(name, message) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) {
    el.textContent = message;
    const field = el.closest(".field");
    if (field) field.classList.add("invalid");
  }
}

function clearFieldError(name) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) {
    el.textContent = "";
    const field = el.closest(".field");
    if (field) field.classList.remove("invalid");
  }
}

function clearAllErrors() {
  document.querySelectorAll("[data-error-for]").forEach((el) => {
    el.textContent = "";
    const field = el.closest(".field");
    if (field) field.classList.remove("invalid");
  });
}

/**
 * Validate the form. Returns true if all checks pass.
 * Shows friendly messages under the relevant fields.
 */
function validateForm() {
  clearAllErrors();
  let ok = true;
  let firstInvalid = null;

  const fail = (name, msg) => {
    showFieldError(name, msg);
    if (!firstInvalid) {
      // Prefer the field input; fall back to the error node (radio/checkbox groups)
      firstInvalid =
        document.getElementById(name) ||
        document.querySelector(`[name="${name}"]`) ||
        document.querySelector(`[data-error-for="${name}"]`);
    }
    ok = false;
  };

  const val = (id) => {
    const el = document.getElementById(id);
    return el ? (el.value || "").trim() : "";
  };
  const radio = (name) => document.querySelector(`[name="${name}"]:checked`);
  const checkCount = (name) =>
    document.querySelectorAll(`[name="${name}"]:checked`).length;

  // Simple required text/select fields: [id, label]
  const requiredText = [
    ["fullName", "Full Name"],
    ["studentId", "Student ID"],
    ["email", "Email Address"],
    ["permProvince", "Province"],
    ["permDistrict", "District"],
    ["permMunicipality", "Municipality"],
    ["tempProvince", "Province"],
    ["tempDistrict", "District"],
    ["tempMunicipality", "Municipality"],
    ["plusTwoCollege", "Plus Two College Name"],
    ["plusTwoProvince", "Plus Two College Province"],
    ["plusTwoDistrict", "Plus Two College District"],
    ["stream", "Stream"],
    ["gpa", "GPA"],
    ["fatherName", "Father Name"],
    ["motherName", "Mother Name"],
    ["fatherOccupation", "Father Occupation"],
    ["motherOccupation", "Mother Occupation"],
    ["annualIncome", "Annual Family Income"],
    ["siblingsDetails", "This field"],
    ["primaryInterest", "Primary Area of Interest"],
    ["overallRemarks", "Overall Remarks"],
    ["officialName", "Name of Official"],
    ["interviewDate", "Interview Date"],
    ["signatureName", "Signature Name"]
  ];
  requiredText.forEach(([id, label]) => {
    if (!val(id)) fail(id, `${label} is required.`);
  });

  // Contact Number: required + exactly 10 digits
  const contact = val("contactNumber");
  if (!contact) {
    fail("contactNumber", "Contact Number is required.");
  } else if (!/^\d{10}$/.test(contact)) {
    fail("contactNumber", "Contact Number must be exactly 10 digits.");
  }

  // Guardian Contact: required + exactly 10 digits
  const guardian = val("guardianContact");
  if (!guardian) {
    fail("guardianContact", "Guardian Contact Number is required.");
  } else if (!/^\d{10}$/.test(guardian)) {
    fail("guardianContact", "Guardian Contact Number must be exactly 10 digits.");
  }

  // Father Contact: required + exactly 10 digits
  const fatherContact = val("fatherContact");
  if (!fatherContact) {
    fail("fatherContact", "Father Contact Number is required.");
  } else if (!/^\d{10}$/.test(fatherContact)) {
    fail("fatherContact", "Father Contact Number must be exactly 10 digits.");
  }

  // Mother Contact: required + exactly 10 digits
  const motherContact = val("motherContact");
  if (!motherContact) {
    fail("motherContact", "Mother Contact Number is required.");
  } else if (!/^\d{10}$/.test(motherContact)) {
    fail("motherContact", "Mother Contact Number must be exactly 10 digits.");
  }

  // Email formats. Student email required (checked above); parent emails optional.
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = val("email");
  if (email && !emailRe.test(email)) {
    fail("email", "Please enter a valid email address.");
  }
  const fatherEmail = val("fatherEmail");
  if (fatherEmail && !emailRe.test(fatherEmail)) {
    fail("fatherEmail", "Please enter a valid email address.");
  }
  const motherEmail = val("motherEmail");
  if (motherEmail && !emailRe.test(motherEmail)) {
    fail("motherEmail", "Please enter a valid email address.");
  }

  // Preparation cascade
  if (!radio("prepAnything")) {
    fail("prepAnything", "Please select an option.");
  } else if (document.getElementById("prepAnythingYes").checked) {
    if (checkCount("prepType") === 0) {
      fail("prepType", "Please select at least one option.");
    }
    if (
      (document.getElementById("prepTypeEntrance").checked ||
        document.getElementById("prepTypeIelts").checked) &&
      !val("prepAcademy")
    ) {
      fail("prepAcademy", "Please specify the academy.");
    }
    if (document.getElementById("prepTypeAbroad").checked && !val("prepCountry")) {
      fail("prepCountry", "Please specify the country.");
    }
  }

  // GPA range 0-4 (already checked non-empty above)
  const gpa = val("gpa");
  if (gpa !== "") {
    const n = parseFloat(gpa);
    if (isNaN(n) || n < 0 || n > 4) {
      fail("gpa", "GPA must be a number between 0 and 4.");
    }
  }

  // Conditional "Other" text fields
  if (val("stream") === "Other" && !val("otherStream")) {
    fail("otherStream", "Please specify the other stream.");
  }
  if (document.getElementById("discoveryOther").checked && !val("otherDiscovery")) {
    fail("otherDiscovery", "Please specify the other discovery source.");
  }
  if (document.getElementById("bachelorGoalOther").checked && !val("otherBachelorGoal")) {
    fail("otherBachelorGoal", "Please specify the other bachelor goal.");
  }
  if (document.getElementById("skillsOther").checked && !val("otherSkills")) {
    fail("otherSkills", "Please specify the other skill.");
  }

  // Required radio groups: [name, label]
  const requiredRadios = [
    ["csStudied", "Please select an option."],
    ["otherCollegesConsidered", "Please select an option."],
    ["bachelorGoal", "Please select a goal."],
    ["motivationRating", "Please select a motivation rating."]
  ];
  requiredRadios.forEach(([name, msg]) => {
    if (!radio(name)) fail(name, msg);
  });

  // Required checkbox groups: at least one selection
  const requiredChecks = [
    ["discoverySources", "Please select at least one option."],
    ["expectedSupport", "Please select at least one option."],
    ["interestedClubs", "Please select at least one option."],
    ["existingSkills", "Please select at least one option."]
  ];
  requiredChecks.forEach(([name, msg]) => {
    if (checkCount(name) === 0) fail(name, msg);
  });

  // Enrollment factors: at least 1, at most 3
  const factorCount = checkCount("enrollmentFactors");
  if (factorCount === 0) {
    fail("enrollmentFactors", "Please select at least one factor.");
  } else if (factorCount > 3) {
    fail("enrollmentFactors", "You can select a maximum of 3 factors.");
  }

  if (firstInvalid && typeof firstInvalid.scrollIntoView === "function") {
    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return ok;
}

// ------------------------------------------------------------------
// Collect form data into a flat object
// ------------------------------------------------------------------

function getValue(id) {
  const el = document.getElementById(id);
  return el ? (el.value || "").trim() : "";
}

function getRadio(name) {
  const el = document.querySelector(`[name="${name}"]:checked`);
  return el ? el.value : "";
}

/** Checkbox group -> comma separated string */
function getChecks(name) {
  return Array.from(document.querySelectorAll(`[name="${name}"]:checked`))
    .map((el) => el.value)
    .join(", ");
}

function collectData() {
  return {
    fullName: getValue("fullName"),
    studentId: getValue("studentId"),
    contactNumber: getValue("contactNumber"),
    email: getValue("email"),
    permProvince: getValue("permProvince"),
    permDistrict: getValue("permDistrict"),
    permMunicipality: getValue("permMunicipality"),
    tempProvince: getValue("tempProvince"),
    tempDistrict: getValue("tempDistrict"),
    tempMunicipality: getValue("tempMunicipality"),
    plusTwoCollege: getValue("plusTwoCollege"),
    plusTwoProvince: getValue("plusTwoProvince"),
    plusTwoDistrict: getValue("plusTwoDistrict"),
    stream: getValue("stream"),
    otherStream: getValue("otherStream"),
    csStudied: getRadio("csStudied"),
    gpa: getValue("gpa"),
    fatherName: getValue("fatherName"),
    fatherContact: getValue("fatherContact"),
    fatherEmail: getValue("fatherEmail"),
    motherName: getValue("motherName"),
    motherContact: getValue("motherContact"),
    motherEmail: getValue("motherEmail"),
    guardianContact: getValue("guardianContact"),
    fatherOccupation: getValue("fatherOccupation"),
    motherOccupation: getValue("motherOccupation"),
    annualIncome: getValue("annualIncome"),
    siblingsDetails: getValue("siblingsDetails"),
    discoverySources: getChecks("discoverySources"),
    otherDiscovery: getValue("otherDiscovery"),
    enrollmentFactors: getChecks("enrollmentFactors"),
    otherCollegesConsidered: getRadio("otherCollegesConsidered"),
    prepAnything: getRadio("prepAnything"),
    prepType: getChecks("prepType"),
    prepAcademy: getValue("prepAcademy"),
    prepCountry: getValue("prepCountry"),
    primaryInterest: getValue("primaryInterest"),
    bachelorGoal: getRadio("bachelorGoal"),
    otherBachelorGoal: getValue("otherBachelorGoal"),
    expectedSupport: getChecks("expectedSupport"),
    motivationRating: getRadio("motivationRating"),
    interestedClubs: getChecks("interestedClubs"),
    existingSkills: getChecks("existingSkills"),
    otherSkills: getValue("otherSkills"),
    overallRemarks: getValue("overallRemarks"),
    officialName: getValue("officialName"),
    interviewDate: getValue("interviewDate"),
    signatureName: getValue("signatureName"),
    recordedBy: getValue("signatureName") // Recorded By mirrors signature field
  };
}

// ------------------------------------------------------------------
// Status message helpers
// ------------------------------------------------------------------

function showStatus(message, type) {
  const box = document.getElementById("statusMessage");
  box.textContent = message;
  box.className = "status-message " + type; // type = success | error
  box.classList.remove("hidden");
  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

function hideStatus() {
  document.getElementById("statusMessage").classList.add("hidden");
}

// ------------------------------------------------------------------
// Submit handler
// ------------------------------------------------------------------

function setupSubmit() {
  const form = document.getElementById("onboardingForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideStatus();

    if (!validateForm()) {
      showStatus("Please fix the highlighted fields and try again.", "error");
      return;
    }

    if (WEB_APP_URL === "PASTE_YOUR_WEB_APP_URL_HERE" || !WEB_APP_URL) {
      showStatus("Web App URL is not set. Open script.js and paste your Google Apps Script URL.", "error");
      return;
    }

    const data = collectData();

    // Lock button + show loading text
    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Saving record...";

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        // text/plain avoids a CORS preflight against Apps Script
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showStatus("Student record saved successfully. Submission ID: " + result.submissionId, "success");
        form.reset();
        resetFormState();
      } else {
        showStatus("Submission failed: " + (result.error || "Unknown error."), "error");
      }
    } catch (err) {
      showStatus("Could not reach the server. Check your internet connection and the Web App URL. (" + err.message + ")", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });

  // Clear Form button
  document.getElementById("clearBtn").addEventListener("click", () => {
    form.reset();
    resetFormState();
    hideStatus();
    clearAllErrors();
  });
}

/**
 * After form.reset(), restore dependent dropdowns and hidden fields
 * to their initial state (reset() clears values but not our JS state).
 */
function resetFormState() {
  // Rebuild all district/municipality dropdowns to disabled/empty
  ["perm", "temp", "plusTwo"].forEach((group) => {
    const district = document.querySelector(`[data-role="district"][data-group="${group}"]`);
    const municipality = document.querySelector(`[data-role="municipality"][data-group="${group}"]`);
    if (district) {
      fillOptions(district, [], "Select District");
      district.disabled = true;
    }
    if (municipality) {
      fillOptions(municipality, [], "Select Municipality");
      municipality.disabled = true;
    }
  });

  // Re-enable temp province (Same-as checkbox is cleared by reset)
  document.getElementById("tempProvince").disabled = false;

  // Hide all conditional "Other" fields
  ["otherStreamWrap", "otherDiscoveryWrap", "otherBachelorGoalWrap", "otherSkillsWrap", "prepTypeWrap", "prepAcademyWrap", "prepCountryWrap"]
    .forEach((id) => document.getElementById(id).classList.add("hidden"));
}

// ------------------------------------------------------------------
// Init on page load
// ------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  ["perm", "temp", "plusTwo"].forEach(setupLocationGroup);
  setupSameAsPermanent();
  setupConditionalFields();
  setupMaxFactors();
  setupSubmit();
});
