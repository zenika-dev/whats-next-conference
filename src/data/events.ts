// Single source of truth for the What's Next? site content.
// The site is a single static page rendered from this data.

export const site = {
  name: "What's Next?",
  organiser: "Zenika Singapore",
  tagline: "Where Singapore's builders ask what comes after the hype.",
  intro:
    "A recurring evening of candid, practitioner-led conversation on AI-Driven Development: the workflows, tools and transformation reshaping how software gets built.",
  registerUrl: "https://lu.ma/whatsnext",
  showUpcoming: true,
  // Set true to re-enable the registration CTAs across the page.
  registrationOpen: false,
};

export const audience = [
  "CTOs & senior leadership",
  "Engineering leads",
  "AI practitioners",
  "Product & platform teams",
];

export const themes = [
  {
    no: "01",
    title: "Agentic AI Workflows",
    description:
      "Autonomous agents in the development loop — orchestration, guardrails and where hand-offs to humans still matter.",
  },
  {
    no: "02",
    title: "AI Tools",
    description:
      "The tooling stack that actually earns its place — copilots, evaluators and the workflows teams keep versus drop.",
  },
  {
    no: "03",
    title: "AI Transformation",
    description:
      "Taking AI from pilot to org-wide practice — culture, enablement and the messy reality of change at scale.",
  },
];

export type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  topic: string;
  image: string | null;
};

export type AgendaItem = {
  time: string;
  title: string;
  detail: string;
};

export type Edition = {
  slug: string;
  number: string;
  label: string;
  title: string;
  shortDate: string;
  date: string;
  time: string;
  venue: string;
  venueLine: string;
  venueMapUrl: string;
  partner: string;
  topics: string[];
  agenda: AgendaItem[];
  speakers: Speaker[];
  gallery: string[];
};

export const events: Edition[] = [
  {
    slug: "july-2026",
    number: "01",
    label: "Inaugural edition",
    title: "Let's Talk About AI-Driven Development",
    shortDate: "Jul 2026",
    date: "2 July 2026",
    time: "6:30 PM onwards",
    venue: "Microsoft Singapore",
    venueLine: "Frasers Tower · SG 069547",
    venueMapUrl: "https://maps.google.com/?q=Frasers+Tower+Singapore",
    partner: "Microsoft",
    topics: ["Agentic AI Workflow", "AI Tools", "AI Transformation"],
    agenda: [
      {
        time: "6:30 PM",
        title: "Registration & Networking",
        detail: "Arrive, grab a drink, meet the room.",
      },
      {
        time: "7:00 PM",
        title: "Welcome & Opening",
        detail: "Zenika Singapore sets the scene for the evening.",
      },
      {
        time: "7:15 PM",
        title: "Panel · Agentic AI Workflows",
        detail:
          "Agents in the development loop — orchestration, guardrails and hand-offs.",
      },
      {
        time: "7:50 PM",
        title: "Panel · AI Tools in Practice",
        detail: "The tooling stack teams keep versus drop.",
      },
      {
        time: "8:25 PM",
        title: "Closing Keynote · AI Transformation",
        detail:
          "From pilot to org-wide practice — culture, enablement and scale.",
      },
      {
        time: "9:00 PM",
        title: "Networking & Close",
        detail: "Keep the conversation going.",
      },
    ],
    speakers: [
      {
        id: "thidahack-tranvankeoith",
        name: "Thidahack Tranvankeoith",
        role: "MD, ISAP",
        company: "CACIB",
        topic: "Agentic AI Workflow",
        image: "/assets/speakers/thidahack.png",
      },
      {
        id: "renu-yadav",
        name: "Renu Yadav",
        role: "Sr. Engineering Manager",
        company: "Grab",
        topic: "Agentic AI Workflow",
        image: "/assets/speakers/renu.png",
      },
      {
        id: "alex-chng",
        name: "Alex Chng",
        role: "Tech Specialist Leader",
        company: "GovTech",
        topic: "Agentic AI Workflow",
        image: "/assets/speakers/alex.png",
      },
      {
        id: "jolyn-chuah",
        name: "Jolyn Chuah",
        role: "Senior Consultant",
        company: "Zenika Singapore",
        topic: "Agentic AI Workflow",
        image: "/assets/speakers/jolyn.png",
      },
      {
        id: "arnaud-lheureux",
        name: "Arnaud Lheureux",
        role: "Chief Dev Advisor",
        company: "GitHub",
        topic: "AI Tools",
        image: "/assets/speakers/arnaud.png",
      },
      {
        id: "siddharth-goel",
        name: "Siddharth Goel",
        role: "Staff Software Engineer",
        company: "DoctorsAnywhere",
        topic: "AI Tools",
        image: "/assets/speakers/siddharth.png",
      },
      {
        id: "michael-cheng",
        name: "Michael Cheng",
        role: "Dy Director, Engineering Mgmt",
        company: "GovTech",
        topic: "AI Tools",
        image: "/assets/speakers/michael.png",
      },
      {
        id: "vincent-gillet",
        name: "Vincent Gillet",
        role: "Cloud and DevOps Consultant",
        company: "Zenika Singapore",
        topic: "AI Tools",
        image: "/assets/speakers/vincent.png",
      },
      {
        id: "khang-nguyen-trieu",
        name: "Khang Nguyen Trieu",
        role: "Group Head, Digital & Tech",
        company: "Banyan Group",
        topic: "AI Transformation",
        image: "/assets/speakers/khang.png",
      },
      {
        id: "joseph-ling",
        name: "Joseph Ling",
        role: "Founder & CEO",
        company: "Vouch",
        topic: "AI Transformation",
        image: "/assets/speakers/joseph.png",
      },
    ],
    // Curated shortlist. 4 requested filenames (A38A2814, A38A2820,
    // A38A2874, A38A2889) didn't match anything actually exported and were
    // dropped; add them back here once they're placed in public/assets/gallery/.
    gallery: [
      "/assets/gallery/A38A2696.jpg",
      "/assets/gallery/A38A2711.jpg",
      "/assets/gallery/A38A2787.jpg",
      "/assets/gallery/IMG_0027.jpg",
      "/assets/gallery/A38A2897.jpg",
      "/assets/gallery/A38A2923.jpg",
      "/assets/gallery/A38A3014.jpg",
      "/assets/gallery/A38A3028.jpg",
      "/assets/gallery/IMG_9841.jpg",
      "/assets/gallery/IMG_0080.jpg",
      "/assets/gallery/A38A3040.jpg",
    ],
  },
];
