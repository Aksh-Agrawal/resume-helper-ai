// DOM Elements
const uploadBtn = document.getElementById("uploadBtn");
const downloadBtn = document.getElementById("downloadBtn");
const uploadModal = document.getElementById("uploadModal");
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const uploadProgress = document.getElementById("uploadProgress");
const resumeEditor = document.getElementById("resumeEditor");
const getSuggestionsBtn = document.getElementById("getSuggestionsBtn");
const suggestionsList = document.getElementById("suggestionsList");
const loadingOverlay = document.getElementById("loadingOverlay");
const improveTextBtn = document.getElementById("improveTextBtn");
const templateCards = document.querySelectorAll(".template-card");
const toolbarBtns = document.querySelectorAll(".toolbar-btn[data-action]");
const closeModal = document.querySelector(".close");

// Template Definitions
const templates = {
  modern: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Your Name</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-envelope"></i> your.email@example.com | 
                <i class="fas fa-phone"></i> (123) 456-7890 | 
                <i class="fas fa-linkedin"></i> linkedin.com/in/yourname
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-user"></i> Professional Summary
            </h2>
            <p class="editable" contenteditable="true">
                Dynamic professional with proven expertise in delivering exceptional results. 
                Passionate about innovation and continuous improvement.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-briefcase"></i> Work Experience
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Job Title</h3>
                <p class="company-info" contenteditable="true">Company Name | Start Date - End Date</p>
                <ul contenteditable="true">
                    <li>Achievement or responsibility with quantifiable results</li>
                    <li>Key accomplishment that demonstrates impact</li>
                    <li>Leadership or technical contribution</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-graduation-cap"></i> Education
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Degree Name</h3>
                <p contenteditable="true">University Name | Graduation Year</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-cog"></i> Skills
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Skill 1</span>
                <span class="skill-tag">Skill 2</span>
                <span class="skill-tag">Skill 3</span>
                <span class="skill-tag">Skill 4</span>
            </div>
        </div>
    `,
  professional: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">PROFESSIONAL NAME</h1>
            <p class="contact-info editable" contenteditable="true">
                Email: professional@email.com • Phone: (555) 123-4567 • Location: City, State
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-briefcase"></i> PROFESSIONAL EXPERIENCE
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Senior Position Title</h3>
                <p class="company-info" contenteditable="true">Corporation Name • 2020 - Present</p>
                <ul contenteditable="true">
                    <li>Led strategic initiatives resulting in measurable business impact</li>
                    <li>Managed team and resources to achieve organizational goals</li>
                    <li>Developed and implemented processes that improved efficiency</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-graduation-cap"></i> EDUCATION & CERTIFICATIONS
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Advanced Degree, Field of Study</h3>
                <p contenteditable="true">Prestigious University • Year</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-award"></i> CORE COMPETENCIES
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Leadership</span>
                <span class="skill-tag">Strategy</span>
                <span class="skill-tag">Analytics</span>
                <span class="skill-tag">Communication</span>
            </div>
        </div>
    `,
  creative: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Creative Professional</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-globe"></i> portfolio.com | 
                <i class="fas fa-envelope"></i> creative@email.com | 
                <i class="fas fa-instagram"></i> @username
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-palette"></i> About Me
            </h2>
            <p class="editable" contenteditable="true">
                Innovative creator with a passion for bringing ideas to life through exceptional design and storytelling.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-star"></i> Featured Projects
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Project Name</h3>
                <p class="company-info" contenteditable="true">Client/Company | Year</p>
                <ul contenteditable="true">
                    <li>Creative approach and unique solution implemented</li>
                    <li>Results achieved and impact created</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-tools"></i> Creative Skills
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Adobe Creative Suite</span>
                <span class="skill-tag">UI/UX Design</span>
                <span class="skill-tag">Branding</span>
                <span class="skill-tag">Illustration</span>
            </div>
        </div>
    `,
  minimal: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Name</h1>
            <p class="contact-info editable" contenteditable="true">
                email@example.com • +1-234-567-8900 • linkedin.com/in/name
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">Summary</h2>
            <p class="editable" contenteditable="true">
                Concise professional summary highlighting key strengths and career objectives.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">Experience</h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Position</h3>
                <p class="company-info" contenteditable="true">Company | Dates</p>
                <ul contenteditable="true">
                    <li>Key responsibility or achievement</li>
                    <li>Another important contribution</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">Education</h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Degree</h3>
                <p contenteditable="true">Institution | Year</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">Skills</h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Skill</span>
                <span class="skill-tag">Skill</span>
                <span class="skill-tag">Skill</span>
            </div>
        </div>
    `,
};

// Event Listeners
uploadBtn.addEventListener("click", () => {
  uploadModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  uploadModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === uploadModal) {
    uploadModal.style.display = "none";
  }
});

// Upload Area Events
uploadArea.addEventListener("click", () => {
  fileInput.click();
});

uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("drag-over");
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("drag-over");
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("drag-over");
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFileUpload(files[0]);
  }
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    handleFileUpload(e.target.files[0]);
  }
});

// Handle File Upload
async function handleFileUpload(file) {
  const validTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ];

  if (!validTypes.includes(file.type)) {
    alert("Please upload a PDF, DOCX, or TXT file.");
    return;
  }

  uploadArea.style.display = "none";
  uploadProgress.style.display = "block";

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/upload-resume", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      resumeEditor.innerHTML = data.html;
      uploadModal.style.display = "none";
      // Show success message
      showNotification(
        "Resume uploaded successfully! You can now edit it.",
        "success"
      );
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    alert("Error uploading file: " + error.message);
  } finally {
    uploadProgress.style.display = "none";
    uploadArea.style.display = "block";
  }
}

// Get AI Suggestions
getSuggestionsBtn.addEventListener("click", async () => {
  const resumeText = resumeEditor.innerText;

  if (!resumeText.trim()) {
    alert("Please add content to your resume first.");
    return;
  }

  loadingOverlay.style.display = "flex";
  suggestionsList.innerHTML = "";

  try {
    const response = await fetch("/api/get-suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: resumeText,
        section: "general",
      }),
    });

    const data = await response.json();

    if (data.success) {
      displaySuggestions(data.suggestions);
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    alert("Error getting suggestions: " + error.message);
  } finally {
    loadingOverlay.style.display = "none";
  }
});

// Display Suggestions
function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = "";

  if (!Array.isArray(suggestions) || suggestions.length === 0) {
    suggestionsList.innerHTML =
      '<p style="color: #666; text-align: center;">No suggestions available.</p>';
    return;
  }

  suggestions.forEach((suggestion) => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.innerHTML = `
            <h4>${suggestion.title || "Suggestion"}</h4>
            <p>${suggestion.description || suggestion}</p>
        `;
    suggestionsList.appendChild(item);
  });
}

// Improve Selected Text
improveTextBtn.addEventListener("click", async () => {
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();

  if (!selectedText) {
    alert("Please select some text to improve.");
    return;
  }

  loadingOverlay.style.display = "flex";

  try {
    const response = await fetch("/api/improve-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: selectedText,
        context: "professional experience",
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Replace selected text with improved version
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(data.improved_text));
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    alert("Error improving text: " + error.message);
  } finally {
    loadingOverlay.style.display = "none";
  }
});

// Template Selection
templateCards.forEach((card) => {
  card.addEventListener("click", () => {
    const templateName = card.dataset.template;
    if (templates[templateName]) {
      if (confirm("This will replace your current content. Continue?")) {
        resumeEditor.innerHTML = templates[templateName];
      }
    }
  });
});

// Toolbar Actions
toolbarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    switch (action) {
      case "bold":
        document.execCommand("bold");
        break;
      case "italic":
        document.execCommand("italic");
        break;
      case "underline":
        document.execCommand("underline");
        break;
      case "heading":
        document.execCommand("formatBlock", false, "h2");
        break;
      case "list":
        document.execCommand("insertUnorderedList");
        break;
    }
  });
});

// Download as PDF (using window.print)
downloadBtn.addEventListener("click", () => {
  window.print();
});

// Auto-save to localStorage
let saveTimeout;
resumeEditor.addEventListener("input", () => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem("resumeContent", resumeEditor.innerHTML);
  }, 1000);
});

// Load saved content on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedContent = localStorage.getItem("resumeContent");
  if (savedContent) {
    if (confirm("Found a saved resume. Would you like to restore it?")) {
      resumeEditor.innerHTML = savedContent;
    }
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + S to save (prevent default browser save)
  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
    e.preventDefault();
    localStorage.setItem("resumeContent", resumeEditor.innerHTML);
    showNotification("Resume saved locally!", "success");
  }

  // Ctrl/Cmd + P to print/download
  if ((e.ctrlKey || e.metaKey) && e.key === "p") {
    e.preventDefault();
    window.print();
  }
});

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <i class="fas fa-${
          type === "success" ? "check-circle" : "info-circle"
        }"></i>
        <span>${message}</span>
    `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
