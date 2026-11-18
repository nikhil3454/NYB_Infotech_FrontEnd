import { useState } from "react";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  bio: "",          // textarea
  country: "",      // dropdown
  gender: "",       // radio
  skills: [],       // checkbox group (array)
  terms: false,     // single checkbox (boolean)
  resume: null,     // file input
}
const validate = (v) => {
  const errors = {};

  if (!v.fullName.trim()) errors.fullName = "Full name is required.";
  else if (v.fullName.trim().length < 3)
    errors.fullName = "Name must be at least 3 characters.";

  if (!v.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    errors.email = "Enter a valid email address.";

  if (!v.password) errors.password = "Password is required.";
  else if (v.password.length < 8)
    errors.password = "Password must be at least 8 characters.";
  else if (!/\d/.test(v.password))
    errors.password = "Password must contain at least one number.";

  if (v.bio.length > 200) errors.bio = "Bio can't exceed 200 characters.";

  if (!v.country) errors.country = "Please select a country.";

  if (!v.gender) errors.gender = "Please choose an option.";

  if (v.skills.length === 0) errors.skills = "Select at least one skill.";

  if (!v.terms) errors.terms = "You must accept the terms.";

  if (!v.resume) errors.resume = "Please upload your resume.";
  else {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(v.resume.type))
      errors.resume = "Only PDF or Word files are allowed.";
    else if (v.resume.size > 2 * 1024 * 1024)
      errors.resume = "File must be smaller than 2 MB.";
  }

  return errors;
};

const skillOptions = ["React", "JavaScript", "Java", "SQL", "Selenium"];
const countries = ["India", "USA", "UK", "Canada", "Germany"];

export default function DynamicForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});       // which fields the user has visited
  const [submitted, setSubmitted] = useState(false); // has submit been attempted?
  const [result, setResult] = useState(null);        // data shown after success
  const [fileKey, setFileKey] = useState(0);         // used to reset the file input

  // Errors are derived from state on every render, so they update live.
  const errors = validate(values);

  /* ---------- 3. ONE change handler for every field ---------- */
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setValues((prev) => {
      // checkbox group -> add/remove from array
      if (type === "checkbox" && name === "skills") {
        const skills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value);
        return { ...prev, skills };
      }
      // single checkbox -> boolean
      if (type === "checkbox") return { ...prev, [name]: checked };
      // file -> File object (or null)
      if (type === "file") return { ...prev, [name]: files[0] || null };
      // text, email, password, textarea, select, radio
      return { ...prev, [name]: value };
    });
  };

  // Marks a field as "touched" when the user leaves it
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      // In a real app: send to API with FormData (needed for the file)
      setResult({ ...values, resume: values.resume.name });
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
    setResult(null);
    setFileKey((k) => k + 1); // new key remounts the file input, clearing it
  };

  // Show an error only after the user touched the field or tried to submit
  const showError = (name) => (touched[name] || submitted) && errors[name];

  const ErrorText = ({ name }) =>
    showError(name) ? <p className="error">{errors[name]}</p> : null;

  return (
    <div className="wrap">
      <style>{css}</style>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Text field */}
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nikhil Kumar"
          className={showError("fullName") ? "invalid" : ""}
        />
        <ErrorText name="fullName" />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={showError("email") ? "invalid" : ""}
        />
        <ErrorText name="email" />

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={showError("password") ? "invalid" : ""}
        />
        <ErrorText name="password" />

        {/* Textarea */}
        <label>Bio (optional)</label>
        <textarea
          name="bio"
          rows="3"
          value={values.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          className={showError("bio") ? "invalid" : ""}
        />
        <small>{values.bio.length}/200</small>
        <ErrorText name="bio" />

        {/* Dropdown */}
        <label>Country</label>
        <select
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className={showError("country") ? "invalid" : ""}
        >
          <option value="">-- Select --</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <ErrorText name="country" />

        {/* Radio buttons */}
        <label>Gender</label>
        <div className="row">
          {["Male", "Female", "Other"].map((g) => (
            <label key={g} className="inline">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={values.gender === g}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {g}
            </label>
          ))}
        </div>
        <ErrorText name="gender" />

        {/* Checkbox group */}
        <label>Skills</label>
        <div className="row">
          {skillOptions.map((s) => (
            <label key={s} className="inline">
              <input
                type="checkbox"
                name="skills"
                value={s}
                checked={values.skills.includes(s)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {s}
            </label>
          ))}
        </div>
        <ErrorText name="skills" />

        {/* File input (uncontrolled by nature, so we read files[0]) */}
        <label>Resume (PDF/Word, max 2 MB)</label>
        <input
          key={fileKey}
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {values.resume && <small>Selected: {values.resume.name}</small>}
        <ErrorText name="resume" />

        {/* Single checkbox */}
        <label className="inline terms">
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          I accept the terms and conditions
        </label>
        <ErrorText name="terms" />

        <div className="row buttons">
          <button type="submit">Submit</button>
          <button type="button" className="secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className="success">
          <h3>Form submitted successfully</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

const css = `
.wrap { max-width: 520px; margin: 30px auto; font-family: system-ui, sans-serif; padding: 0 16px; }
form { display: flex; flex-direction: column; gap: 6px; }
label { font-weight: 600; margin-top: 10px; font-size: 14px; }
label.inline { font-weight: 400; margin-top: 0; display: inline-flex; gap: 6px; align-items: center; }
input[type="text"], input[type="email"], input[type="password"], textarea, select {
  padding: 9px 10px; border: 1px solid #bbb; border-radius: 6px; font-size: 14px;
}
.invalid { border-color: #d93025 !important; background: #fff6f6; }
.error { color: #d93025; font-size: 13px; margin: 0; }
small { color: #666; }
.row { display: flex; gap: 16px; flex-wrap: wrap; }
.terms { margin-top: 14px; }
.buttons { margin-top: 18px; }
button { padding: 10px 20px; border: 0; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; font-size: 14px; }
button.secondary { background: #e5e7eb; color: #222; }
.success { margin-top: 24px; padding: 14px; background: #eaf7ee; border: 1px solid #9bd3ab; border-radius: 8px; }
pre { white-space: pre-wrap; font-size: 13px; }
`;