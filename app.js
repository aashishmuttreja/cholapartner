const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8 4.5-2.5 4.5 2.5-1-8"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  wallet: '<path d="M3 7a2 2 0 0 1 2-2h14v14H5a2 2 0 0 1-2-2z"/><path d="M16 12h.01"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 4.3 2.2c-.9.6-1.8 1.2-1.8 2.8"/><path d="M12 17h.01"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M4 12h2m12 0h2M12 4v2m0 12v2M6.3 6.3l1.4 1.4m8.6 8.6 1.4 1.4m0-11.4-1.4 1.4m-8.6 8.6-1.4 1.4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  alert: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 4.4 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0z"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  expand: '<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="M9 21H3v-6"/><path d="m3 21 7-7"/>'
};

const personas = {
  anika: {
    name: "Anika Rao",
    initials: "AR",
    role: "DSA dashboard",
    canAdmin: false,
    code: "DSA-2048",
    tier: "Silver tier",
    branch: "Chennai Central",
    promotion: {
      title: "Milestone Reward Booster",
      status: "Almost eligible",
      current: 8,
      target: 10,
      unit: "verified applications",
      milestone: "Complete 10 verified applications this month",
      reward: "campaign reward benefit",
      closesOn: "31 Jul 2026",
      nextAction: "Complete document requests for CHL-2408 and CHL-2419.",
      reason: "Your document-complete rate is 92% and your approval trend is above the configured benchmark."
    }
  },
  rohan: {
    name: "Rohan Mehta",
    initials: "RM",
    role: "DSA dashboard",
    canAdmin: false,
    code: "DSA-3187",
    tier: "Gold tier",
    branch: "Mumbai Andheri",
    promotion: {
      title: "Milestone Reward Booster",
      status: "Achieved",
      current: 12,
      target: 10,
      unit: "verified applications",
      milestone: "Completed 10 + 2 verified applications this month",
      reward: "campaign reward benefit unlocked",
      closesOn: "31 Jul 2026",
      nextAction: "Maintain performance for the next campaign.",
      reason:
        "You exceeded the monthly application milestone by 2 verified applications."
    }
  },
  meera: {
    name: "Meera Nair",
    initials: "MN",
    role: "DSA dashboard",
    canAdmin: false,
    code: "DSA-3194",
    tier: "Bronze tier",
    branch: "Coimbatore North",
    promotion: {
      title: "Fast Start Reward Track",
      status: "In progress",
      current: 3,
      target: 6,
      unit: "document-complete leads",
      milestone: "Submit 6 document-complete leads by campaign close",
      reward: "fast-start reward benefit",
      closesOn: "25 Jul 2026",
      nextAction: "Complete missing income proof for CHL-2431 and CHL-2437.",
      reason: "Your current campaign track rewards complete, low-rework lead submissions."
    }
  },
  karthik: {
    name: "Karthik Nair",
    initials: "KN",
    role: "DSA dashboard",
    canAdmin: false,
    code: "DSA-5092",
    tier: "Bronze tier",
    branch: "Kochi MG Road",
    promotion: {
      title: "Milestone Reward Booster",
      status: "Not achieved",
      current: 5,
      target: 10,
      unit: "verified applications",
      milestone: "Complete 10 verified applications this month",
      reward: "campaign reward benefit",
      closesOn: "31 Jul 2026",
      nextAction: "Prioritize high-intent leads and complete pending document requests.",
      reason:
        "Five more verified applications are required before the campaign closes."
    }
  },
  ramesh: {
    name: "Ramesh Iyer",
    initials: "RI",
    role: "Partner manager dashboard",
    canAdmin: false,
    code: "CP-1180",
    tier: "Gold partner",
    branch: "South Zone",
    promotion: {
      title: "Team Momentum Challenge",
      status: "Eligible",
      current: 14,
      target: 14,
      unit: "verified team applications",
      milestone: "Complete 14 verified team applications this month",
      reward: "partner team reward benefit",
      closesOn: "31 Jul 2026",
      nextAction: "Monitor the three pending verification cases before payout approval.",
      reason: "Your team has met the configured volume threshold and quality checks remain in review."
    }
  },
  nisha: {
    name: "Nisha Menon",
    initials: "NM",
    role: "Relationship manager dashboard",
    canAdmin: false,
    code: "RM-0721",
    tier: "Internal user",
    branch: "Assigned portfolio",
    promotion: {
      title: "Portfolio Activation Drive",
      status: "Under verification",
      current: 18,
      target: 20,
      unit: "partner activations",
      milestone: "Activate 20 assigned partners in the campaign window",
      reward: "portfolio recognition reward",
      closesOn: "5 Aug 2026",
      nextAction: "Follow up with two partners whose onboarding documents are pending.",
      reason: "Assigned partners are close to the configured activation threshold for the campaign."
    }
  },
  priya: {
    name: "Priya Shah",
    initials: "PS",
    role: "Super administrator dashboard",
    canAdmin: true,
    code: "ADM-0104",
    tier: "Privileged user",
    branch: "Portal administration",
    promotion: {
      title: "Campaign Publishing Window",
      status: "Qualified",
      current: 6,
      target: 6,
      unit: "approved campaign rules",
      milestone: "Approve 6 campaign rules for launch readiness",
      reward: "publish-ready campaign reward setup",
      closesOn: "20 Jul 2026",
      nextAction: "Review maker-checker approvals before publishing the next campaign version.",
      reason: "All configured rules for the sample sales promotion have passed validation."
    }
  }
};

const actions = [
  { status: "Due today", label: "Upload pending address proof for CHL-2408", action: "Open lead" },
  { status: "SLA risk", label: "Follow up on CHL-2419 before 3:00 PM", action: "Schedule" },
  { status: "Training", label: "Complete product-certification module", action: "Resume" },
  { status: "Campaign", label: "Two eligible applications needed for next milestone", action: "Review" }
];

const activities = [
  { title: "CHL-2425 moved to Under Assessment", detail: "Updated by operations - 24 minutes ago" },
  { title: "Quality Champion badge under verification", detail: "System event - 1 hour ago" },
  { title: "Payout statement for Jun published", detail: "Incentive admin - Yesterday" },
  { title: "Campaign closing reminder sent", detail: "Notification center - Yesterday" }
];

const leads = [
  {
    ref: "CHL-2425",
    customer: "Mira K.",
    status: "Under Assessment",
    badge: "info",
    owner: "Anika Rao",
    action: "Await operations update"
  },
  {
    ref: "CHL-2419",
    customer: "Arun S.",
    status: "Documents Pending",
    badge: "warning",
    owner: "Anika Rao",
    action: "Collect bank statement"
  },
  {
    ref: "CHL-2408",
    customer: "Devika P.",
    status: "Customer Contacted",
    badge: "success",
    owner: "Anika Rao",
    action: "Upload address proof"
  },
  {
    ref: "CHL-2398",
    customer: "Naveen R.",
    status: "Approved",
    badge: "success",
    owner: "Team queue",
    action: "Await disbursal"
  }
];

const rewardCards = [
  {
    title: "Milestone Reward Booster",
    status: "Almost eligible",
    progress: 80,
    text: "Achieve the 10 verified applications milestone to unlock the campaign reward after verification."
  },
  {
    title: "Document Excellence",
    status: "Eligible",
    progress: 100,
    text: "Document completeness meets the configured threshold."
  },
  {
    title: "Product Certification Access",
    status: "Not yet eligible",
    progress: 45,
    text: "Complete assigned training to unlock campaign participation."
  }
];

let currentPersona = personas.anika;

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.help}</svg>`;
}

function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = iconSvg(element.dataset.icon);
  });
}

function setActiveView(viewId) {
  if (viewId === "campaign-admin" && !currentPersona.canAdmin) {
    viewId = "home";
  }
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === viewId);
  });
  document.querySelector(".sidebar").classList.remove("open");
  if (location.hash !== `#${viewId}`) {
    history.replaceState(null, "", `#${viewId}`);
  }
}

function updatePromotion(persona) {
  currentPersona = persona;
  const { promotion } = persona;
  const remaining = Math.max(promotion.target - promotion.current, 0);
  const remainingText =
    remaining === 0
      ? "Milestone achieved; reward verification is in progress."
      : `${remaining} ${promotion.unit} to unlock the reward.`;
  const progress = Math.min(Math.round((promotion.current / promotion.target) * 100), 100);
  const circumference = 301.59;
  const offset = circumference - (progress / 100) * circumference;

  document.getElementById("roleLabel").textContent = persona.role;
  document.getElementById("homeTitle").textContent = `Good morning, ${persona.name.split(" ")[0]}`;
  document.getElementById("userMeta").textContent =
    `${persona.code} - ${persona.tier} - ${persona.branch}`;
  document.getElementById("userInitials").textContent = persona.initials;
  document.getElementById("profileInitials").textContent = persona.initials;
  document.getElementById("dsa360Title").textContent = persona.name;
  document.getElementById("profileMeta").textContent =
    `${persona.code} - ${persona.branch} - ${persona.tier}`;

  document.getElementById("promotionTitle").textContent = promotion.title;
  document.getElementById("promotionMessage").textContent =
    `${persona.name.split(" ")[0]}, milestone: ${promotion.milestone}. ${remainingText} Reward is processed after verification.`;
  document.getElementById("promotionStatus").textContent = promotion.status;
  document.getElementById("promotionGap").textContent =
    remaining === 0 ? "Milestone achieved" : `${remaining} ${promotion.unit} to milestone`;
  document.getElementById("promotionReward").textContent = promotion.reward;
  document.getElementById("promotionEnds").textContent = promotion.closesOn;
  document.getElementById("promotionPercent").textContent = `${progress}%`;
  document.getElementById("promotionMeter").style.strokeDashoffset = offset.toFixed(2);
  document.querySelectorAll(".admin-only").forEach((element) => {
    element.hidden = !persona.canAdmin;
  });
  if (!persona.canAdmin && document.getElementById("campaign-admin").classList.contains("active")) {
    setActiveView("home");
  }
  function delete_cookie( name, path, domain ) {
            document.cookie = name + "=" +
                ((path) ? ";path="+path:"")+
                ((domain)?";domain="+domain:"") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }

        delete_cookie("ORA_FPC", "/", ".aashishmuttreja.github.io");
        delete_cookie("FPC", "/", ".aashishmuttreja.github.io");
        localStorage.removeItem("ORA_COOK_STORE");

  const prstatus = promotion.status.toLowerCase().replace(/\s+/g, "");
  ORA.view({
    sendSessionInfo: true,
    data: {
      "ora.z_eventname": "WP_CholaDSApage",
      "ora.z_progressStatus": prstatus
    }
  });
  
}

function renderActions() {
  const actionList = document.getElementById("actionList");
  actionList.innerHTML = actions
    .map(
      (item) => `
        <div class="action-item">
          <span class="badge warning">${item.status}</span>
          <p>${item.label}</p>
          <button class="mini-button" type="button">${item.action}</button>
        </div>
      `
    )
    .join("");
}

function renderActivities() {
  const activityList = document.getElementById("activityList");
  activityList.innerHTML = activities
    .map(
      (item) => `
        <li>
          <strong>${item.title}</strong>
          <small>${item.detail}</small>
        </li>
      `
    )
    .join("");
}

function renderLeads() {
  const leadRows = document.getElementById("leadRows");
  leadRows.innerHTML = leads
    .map(
      (lead) => `
        <div class="table-row">
          <span><strong>${lead.ref}</strong></span>
          <span>${lead.customer}</span>
          <span><span class="badge ${lead.badge}">${lead.status}</span></span>
          <span>${lead.owner}</span>
          <span>${lead.action}</span>
        </div>
      `
    )
    .join("");
}

function renderRewards() {
  const rewardGrid = document.getElementById("rewardGrid");
  rewardGrid.innerHTML = rewardCards
    .map((reward) => {
      const actionLabel = reward.progress === 100 ? "View calculation" : "Why am I not eligible?";
      return `
        <article class="reward-card">
          <span class="badge ${reward.progress === 100 ? "success" : reward.progress > 60 ? "warning" : "info"}">${reward.status}</span>
          <h2>${reward.title}</h2>
          <p>${reward.text}</p>
          <div class="reward-meter" aria-label="${reward.progress}% complete">
            <span style="--progress: ${reward.progress}%"></span>
          </div>
          <button class="secondary-button" type="button">${actionLabel}</button>
        </article>
      `;
    })
    .join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveView(link.dataset.nav);
    });
  });

  document.querySelectorAll("[data-target-view]").forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.targetView));
  });

  document.getElementById("menuButton").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });

  document.getElementById("personaSelect").addEventListener("change", (event) => {
    sessionStorage.setItem("selectedPersona", event.target.value);
    window.location.reload();
  });

  document.getElementById("leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Draft validated. Duplicate check would run before final submission.");
  });
}

function init() {
  hydrateIcons();
  renderActions();
  renderActivities();
  renderLeads();
  renderRewards();
  bindEvents();
  const selectedPersona = sessionStorage.getItem("selectedPersona") || "anika";
  document.getElementById("personaSelect").value = selectedPersona;
  updatePromotion(personas[selectedPersona]);
  const hashView = location.hash.replace("#", "");
  if (hashView && document.getElementById(hashView)) {
    setActiveView(hashView);
  }
}

document.addEventListener("DOMContentLoaded", init);
