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

// New UI Elements
const navTabs = document.querySelectorAll(".nav-tab");
const sectionHeaders = document.querySelectorAll(".section-header");

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  initializeNavTabs();
  initializeSidebarSections();
  updatePreviewCards();
});

// Navigation Tabs
function initializeNavTabs() {
  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      navTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const tabName = tab.getAttribute("data-tab");
      // Handle tab switching logic here
      console.log("Switched to tab:", tabName);
    });
  });
}

// Sidebar Section Collapsible
function initializeSidebarSections() {
  sectionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("collapsed");
      const content = header.nextElementSibling;
      if (content && content.classList.contains("section-content")) {
        content.classList.toggle("hidden");
      }
    });
  });
}

// Update Template Preview Cards
function updatePreviewCards() {
  templateCards.forEach((card) => {
    const preview = card.querySelector(".template-preview");
    const templateName = card.getAttribute("data-template");
    if (preview && templateName) {
      preview.className = `template-preview template-${templateName}`;
    }
  });
}

// Template Definitions
const templates = {
  modern: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Your Name</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-envelope"></i> your.email@example.com
                <i class="fas fa-phone"></i> (123) 456-7890
                <i class="fas fa-linkedin"></i> linkedin.com/in/yourname
            </p>
        </div>
        <div class="resume-section sidebar-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-cog"></i> Skills
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">Git</span>
            </div>
            <h2 class="section-title editable" contenteditable="true" style="margin-top: 2rem;">
                <i class="fas fa-graduation-cap"></i> Education
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">B.S. Computer Science</h3>
                <p contenteditable="true">State University<br>2017 - 2021</p>
            </div>
        </div>
        <div class="resume-section main-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-user"></i> Professional Summary
            </h2>
            <p class="editable" contenteditable="true">
                Innovative software engineer with 3+ years building scalable web applications. 
                Expert in full-stack development with passion for creating intuitive user experiences.
            </p>
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-briefcase"></i> Work Experience
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Software Engineer</h3>
                <p class="company-info" contenteditable="true">Tech Innovations Inc. | Jan 2021 - Present</p>
                <ul contenteditable="true">
                    <li>Developed cutting-edge solutions improving system efficiency by 45%</li>
                    <li>Led agile team of 6 developers delivering high-quality products</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
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
                <h3 contenteditable="true">Senior Director of Operations</h3>
                <p class="company-info" contenteditable="true">Global Corporation • 2018 - Present</p>
                <ul contenteditable="true">
                    <li>Led strategic initiatives resulting in $5M annual cost savings and 35% productivity increase</li>
                    <li>Managed cross-functional team of 25+ professionals across multiple departments</li>
                    <li>Developed and implemented enterprise-wide processes improving operational efficiency</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">Operations Manager</h3>
                <p class="company-info" contenteditable="true">Previous Corporation • 2015 - 2018</p>
                <ul contenteditable="true">
                    <li>Optimized supply chain operations reducing costs by $2M annually</li>
                    <li>Built high-performing team of 15 direct reports</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-graduation-cap"></i> EDUCATION & CERTIFICATIONS
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Master of Business Administration (MBA)</h3>
                <p contenteditable="true">Prestigious University • 2016</p>
            </div>
            <div class="education-item editable">
                <h3 contenteditable="true">Project Management Professional (PMP)</h3>
                <p contenteditable="true">Project Management Institute • 2019</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                <i class="fas fa-award"></i> CORE COMPETENCIES
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Strategic Planning</span>
                <span class="skill-tag">Leadership</span>
                <span class="skill-tag">Business Analytics</span>
                <span class="skill-tag">Change Management</span>
                <span class="skill-tag">P&L Management</span>
                <span class="skill-tag">Team Development</span>
            </div>
        </div>
    `,
  creative: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Creative<br>Professional</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-globe"></i> myportfolio.com | 
                <i class="fas fa-envelope"></i> creative@email.com | 
                <i class="fas fa-instagram"></i> @creative_handle
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Creative Vision
            </h2>
            <p class="editable" contenteditable="true">
                Award-winning designer transforming bold ideas into stunning visual experiences. 
                Blending creativity with strategic thinking to deliver impactful brand solutions 
                that resonate with audiences and drive measurable results.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Featured Work
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Brand Identity Redesign</h3>
                <p class="company-info" contenteditable="true">Fortune 500 Client | 2023</p>
                <ul contenteditable="true">
                    <li>Created comprehensive brand identity increasing customer engagement by 85%</li>
                    <li>Designed 50+ marketing assets across digital and print media</li>
                    <li>Won Silver Award at National Design Competition</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">Website Redesign & UX</h3>
                <p class="company-info" contenteditable="true">Tech Startup | 2022</p>
                <ul contenteditable="true">
                    <li>Redesigned user experience improving conversion rate by 120%</li>
                    <li>Conducted user research with 500+ participants</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Education
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Bachelor of Fine Arts in Graphic Design</h3>
                <p contenteditable="true">Art Institute | 2019 | GPA: 3.9</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Creative Toolkit
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Adobe Creative Suite</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">UI/UX Design</span>
                <span class="skill-tag">Brand Strategy</span>
                <span class="skill-tag">Motion Graphics</span>
                <span class="skill-tag">Illustration</span>
            </div>
        </div>
    `,
  minimal: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Name</h1>
            <p class="contact-info editable" contenteditable="true">
                email@example.com<br>
                +1-234-567-8900<br>
                city, state
            </p>
        </div>
        <div class="resume-section">
            <div class="section-label editable" contenteditable="true">Summary</div>
            <div class="section-content">
                <p class="editable" contenteditable="true">
                    Focused professional with expertise in delivering results through systematic approach 
                    and attention to detail. 5+ years experience in project execution and team collaboration.
                </p>
            </div>
        </div>
        <div class="resume-section">
            <div class="section-label editable" contenteditable="true">Experience</div>
            <div class="section-content">
                <div class="experience-item editable">
                    <h3 contenteditable="true">Position Title</h3>
                    <p class="company-info" contenteditable="true">Company Name / 2020-2024</p>
                    <ul contenteditable="true">
                        <li>Key achievement with measurable impact on business outcomes</li>
                        <li>Important responsibility demonstrating leadership capabilities</li>
                        <li>Technical or strategic contribution to team success</li>
                    </ul>
                </div>
                <div class="experience-item editable">
                    <h3 contenteditable="true">Previous Position</h3>
                    <p class="company-info" contenteditable="true">Former Company / 2018-2020</p>
                    <ul contenteditable="true">
                        <li>Significant accomplishment in previous role</li>
                        <li>Project management or technical expertise</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="resume-section">
            <div class="section-label editable" contenteditable="true">Education</div>
            <div class="section-content">
                <div class="education-item editable">
                    <h3 contenteditable="true">Degree, Field of Study</h3>
                    <p contenteditable="true">University / Year</p>
                </div>
            </div>
        </div>
        <div class="resume-section">
            <div class="section-label editable" contenteditable="true">Skills</div>
            <div class="section-content">
                <div class="skills-grid editable" contenteditable="true">
                    <span class="skill-tag">Skill One</span>
                    <span class="skill-tag">Skill Two</span>
                    <span class="skill-tag">Skill Three</span>
                    <span class="skill-tag">Skill Four</span>
                    <span class="skill-tag">Skill Five</span>
                </div>
            </div>
        </div>
    `,
  executive: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">EXECUTIVE NAME</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-envelope"></i> executive@company.com | 
                <i class="fas fa-phone"></i> (555) 000-0000 | 
                <i class="fas fa-map-marker-alt"></i> Metropolitan Area
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                EXECUTIVE PROFILE
            </h2>
            <p class="editable" contenteditable="true">
                Distinguished C-Level executive with 15+ years driving organizational transformation and revenue growth. 
                Proven track record in scaling operations, leading M&A initiatives, and building high-performance teams. 
                Strategic visionary with expertise in navigating complex business environments and delivering sustainable results.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                EXECUTIVE EXPERIENCE
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Chief Operating Officer</h3>
                <p class="company-info" contenteditable="true">Fortune 500 Corporation | 2018 - Present</p>
                <ul contenteditable="true">
                    <li>Orchestrated company-wide transformation increasing revenue from $200M to $500M</li>
                    <li>Spearheaded 3 successful acquisitions totaling $150M in strategic value</li>
                    <li>Built and led executive team of 12 VPs managing 2,000+ employees globally</li>
                    <li>Implemented operational excellence program reducing costs by $25M annually</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">Vice President of Operations</h3>
                <p class="company-info" contenteditable="true">Major Corporation | 2013 - 2018</p>
                <ul contenteditable="true">
                    <li>Drove digital transformation initiatives across all business units</li>
                    <li>Grew division revenue by 180% over 5-year period</li>
                    <li>Established strategic partnerships with Fortune 100 companies</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                EDUCATION & BOARD POSITIONS
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Master of Business Administration (MBA)</h3>
                <p contenteditable="true">Harvard Business School | 2005</p>
            </div>
            <div class="education-item editable">
                <h3 contenteditable="true">Board Member</h3>
                <p contenteditable="true">Tech Industry Association | 2020 - Present</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                EXECUTIVE COMPETENCIES
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Strategic Leadership</span>
                <span class="skill-tag">P&L Management</span>
                <span class="skill-tag">M&A Integration</span>
                <span class="skill-tag">Digital Transformation</span>
                <span class="skill-tag">Board Relations</span>
                <span class="skill-tag">Global Operations</span>
            </div>
        </div>
    `,
  tech: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">TECH_PROFESSIONAL</h1>
            <p class="contact-info editable" contenteditable="true">
                github.com/username | dev@email.com | techblog.dev
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                TechnicalProfile
            </h2>
            <p class="editable" contenteditable="true">
                Full-stack engineer specializing in scalable cloud architecture and modern web technologies. 
                Open-source contributor with 10K+ GitHub stars. Passionate about clean code and developer experience.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                DevelopmentExperience
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">seniorEngineer</h3>
                <p class="company-info" contenteditable="true">Tech Startup | 2021 - Present</p>
                <ul contenteditable="true">
                    <li>Architected microservices platform handling 10M+ requests/day with 99.99% uptime</li>
                    <li>Built real-time data pipeline processing 5TB data daily using Kafka and Spark</li>
                    <li>Optimized database queries reducing response time from 2s to 100ms</li>
                    <li>Mentored 5 junior developers and established code review best practices</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">softwareEngineer</h3>
                <p class="company-info" contenteditable="true">Enterprise Company | 2019 - 2021</p>
                <ul contenteditable="true">
                    <li>Developed RESTful APIs serving 1M+ daily active users</li>
                    <li>Implemented automated testing reducing bugs by 70%</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Certifications
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">AWS Certified Solutions Architect</h3>
                <p contenteditable="true">Amazon Web Services | 2023</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                TechStack
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Python</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">PostgreSQL</span>
            </div>
        </div>
    `,
  academic: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Dr. Academic Name</h1>
            <p class="contact-info editable" contenteditable="true">
                professor@university.edu<br>
                Department of Research, University Name<br>
                academicsite.edu/profile
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Research Interests
            </h2>
            <p class="editable" contenteditable="true">
                Distinguished researcher with expertise in computational biology and machine learning applications 
                in healthcare. Published 45+ peer-reviewed papers with 2,500+ citations. Principal investigator 
                on $3M+ in funded research projects. Research focuses on developing novel algorithms for genomic 
                analysis and personalized medicine applications.
            </p>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Academic Positions
            </h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Associate Professor</h3>
                <p class="company-info" contenteditable="true">Prestigious University | 2018 - Present</p>
                <ul contenteditable="true">
                    <li>Lead research laboratory with 8 PhD students and 4 postdoctoral researchers investigating computational approaches to genomic analysis</li>
                    <li>Secured $2M NSF grant for computational genomics research program focused on cancer genetics</li>
                    <li>Published 15 papers in top-tier journals (Nature, Science, Cell) with average impact factor of 25+</li>
                    <li>Developed and taught 4 graduate-level courses with consistently high evaluations (4.8/5.0 average)</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">Assistant Professor</h3>
                <p class="company-info" contenteditable="true">Research University | 2014 - 2018</p>
                <ul contenteditable="true">
                    <li>Established independent research program in computational genomics</li>
                    <li>Secured $800K in startup funding and initial grants</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Education
            </h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Ph.D. in Computational Biology</h3>
                <p contenteditable="true">Elite Research University | 2014</p>
            </div>
            <div class="education-item editable">
                <h3 contenteditable="true">M.S. in Bioinformatics</h3>
                <p contenteditable="true">Research Institute | 2010</p>
            </div>
        </div>
        <div class="resume-section">
            <h2 class="section-title editable" contenteditable="true">
                Research Skills
            </h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Machine Learning</span>
                <span class="skill-tag">Genomics</span>
                <span class="skill-tag">Python/R</span>
                <span class="skill-tag">Statistical Analysis</span>
                <span class="skill-tag">Grant Writing</span>
                <span class="skill-tag">Scientific Writing</span>
            </div>
        </div>
    `,
  compact: `
        <div class="resume-section header-section">
            <h1 class="editable" contenteditable="true">Your Name</h1>
            <p class="contact-info editable" contenteditable="true">
                <i class="fas fa-envelope"></i> email@example.com
                <i class="fas fa-phone"></i> (555) 555-5555
                <i class="fas fa-map-marker-alt"></i> City, ST
            </p>
        </div>
        <div class="resume-section sidebar-compact">
            <h2 class="section-title editable" contenteditable="true">Skills</h2>
            <div class="skills-grid editable" contenteditable="true">
                <span class="skill-tag">Leadership</span>
                <span class="skill-tag">Analytics</span>
                <span class="skill-tag">Strategy</span>
                <span class="skill-tag">Management</span>
                <span class="skill-tag">Communication</span>
            </div>
            <h2 class="section-title editable" contenteditable="true" style="margin-top: 1.5rem;">Education</h2>
            <div class="education-item editable">
                <h3 contenteditable="true">Degree Name</h3>
                <p contenteditable="true">University<br>Year</p>
            </div>
        </div>
        <div class="resume-section main-compact">
            <h2 class="section-title editable" contenteditable="true">Profile</h2>
            <p class="editable" contenteditable="true">
                Results-oriented professional with 5+ years experience delivering impactful solutions. 
                Skilled in project management and team leadership with focus on measurable outcomes.
            </p>
            <h2 class="section-title editable" contenteditable="true">Experience</h2>
            <div class="experience-item editable">
                <h3 contenteditable="true">Job Title</h3>
                <p class="company-info" contenteditable="true">Company | 2020-Present</p>
                <ul contenteditable="true">
                    <li>Delivered key projects resulting in 30% efficiency gain</li>
                    <li>Managed team of 4 achieving 95% on-time delivery</li>
                </ul>
            </div>
            <div class="experience-item editable">
                <h3 contenteditable="true">Previous Role</h3>
                <p class="company-info" contenteditable="true">Former Company | 2018-2020</p>
                <ul contenteditable="true">
                    <li>Contributed to initiatives saving $100K annually</li>
                </ul>
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
        "success",
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
        // Remove all template classes
        resumeEditor.className = "resume-editor";
        // Add the selected template class
        resumeEditor.classList.add(`template-${templateName}`);
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
