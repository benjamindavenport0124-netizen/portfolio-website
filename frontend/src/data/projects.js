const github = "https://github.com/benjamindavenport0124-netizen";

export const projects = [
  {
    slug: "airanker",
    title: "AI Video Ranker",
    category: "Local AI · Video processing",
    icon: "video",
    summary:
      "Turning long Minecraft recordings into a ranked list of moments worth reviewing.",
    intro:
      "Video AI is a self-hosted analysis system I developed to help find interesting moments in hours of recorded gameplay. Originally built for Minecraft Hypixel SkyBlock, it combines voice commentary and in-game events into a timeline, then ranks moments by their potential value in a YouTube video. The goal is to spend less time searching through footage and more time creating.",
    status: "Working pipeline · dashboard planned",
    tags: [
      "Python",
      "Faster-Whisper",
      "Ollama",
      "Qwen2.5 7B",
      "EasyOCR",
      "OpenCV",
      "Watchdog",
      "Linux",
    ],
    facts: [
      ["Input", "Recordings + Minecraft logs"],
      ["Analysis", "Qwen2.5 7B through Ollama"],
      ["Output", "Scores, explanations + timestamps"],
    ],
    workflow: [
      [
        "Detect new files",
        "Watchdog monitors designated folders for recordings and matching chat logs, then queues available files for processing.",
      ],
      [
        "Transcribe commentary",
        "GPU-accelerated Faster-Whisper turns spoken commentary into timestamped dialogue.",
      ],
      [
        "Parse Minecraft logs",
        "A custom parser removes formatting codes and irrelevant notifications, then aligns chat events with the recording start time.",
      ],
      [
        "Extract on-screen text",
        "When logs are unavailable, an alternative mode uses EasyOCR and OpenCV to read text from video frames.",
      ],
      [
        "Build one timeline",
        "Transcriptions and chat events are stored together chronologically in JSONL files.",
      ],
      [
        "Analyze overlapping segments",
        "Qwen2.5 7B evaluates chunks through Ollama for rare drops, achievements, player reactions, and entertaining moments.",
      ],
      [
        "Rank the highlights",
        "Each segment receives a score from 1–10, an explanation, and relevant timestamps. The results are sorted for review.",
      ],
    ],
    sections: [
      [
        "Synchronizing the recording",
        "Minecraft logs can contain events from before or after a recording. I developed timestamp conversion and filtering logic to align those events with the correct place in the video.",
      ],
      [
        "Keeping inference manageable",
        "Large prompts and unpredictable model outputs caused processing delays. Structured JSON responses, output-token limits, configurable intervals, and overlapping chunks helped make the analysis more manageable.",
      ],
      [
        "A self-hosted workflow",
        "The system runs on Linux with local inference and no per-token API fees. I administer it through SSH, VS Code, and Webmin. Building it gave me practical experience with file handling, event detection, model integration, and performance optimization.",
      ],
    ],
    nextSteps: [
      "Build a web dashboard for uploading recordings and monitoring processing progress.",
      "Let users review highlights and download results remotely.",
      "Explore automatic clip selection and assembly as a longer-term video editing tool.",
    ],
    repo: `${github}/AIvideoprocessor`,
    related: ["aicoach", "jarvis"],
  },
  {
    slug: "voicecalculator",
    title: "Voice Calculator",
    category: "Software · Speech recognition",
    icon: "mic",
    summary:
      "A calculator that turns spoken mathematical expressions into answers.",
    intro:
      "This began as an AP Computer Science project with the goal of creating something that could help people. I chose a calculator controlled by speech, so a user could enter mathematics just by talking. The project grew to include symbolic operations and a parser that preserves the structure of nested expressions.",
    status: "AP Computer Science project",
    tags: ["Python", "Whisper", "Speech recognition", "Math parsing", "GUI"],
    facts: [
      ["Input", "Spoken mathematics"],
      ["Approach", "Custom expression parsing"],
      ["Output", "Calculated result"],
    ],
    workflow: [
      [
        "Speak an expression",
        "Enter a mathematical expression using voice input.",
      ],
      [
        "Recognize the speech",
        "Transcribe the spoken words so they can be processed as text.",
      ],
      [
        "Parse the mathematics",
        "Convert mathematical language into an expression using custom parsing logic.",
      ],
      [
        "Show the answer",
        "Calculate the expression and display the result in the interface.",
      ],
    ],
    example: {
      label: "Illustrative nested expression",
      input: "(tan(4 + (5 - 2)) + 6) * 2",
      note: "The parentheses preserve which operations belong together. This example illustrates grouping; it is not a recorded test result.",
    },
    sections: [
      [
        "More than basic arithmetic",
        "The calculator supports operations including integrals, derivatives, expression simplification, and solving for x in equations involving multiple variables, alongside fractions, logarithms, and trigonometry.",
      ],
      [
        "The part I am proudest of",
        "My favorite part was the parenthesis parser. It counts and tracks opening and closing parentheses so nested groups stay intact as a spoken equation becomes a structured expression. Getting that grouping right is essential when one function or operation contains another.",
      ],
      [
        "Built to help through voice",
        "The class brief pushed me to think about how software could help people. Voice input became the central interaction, bringing speech recognition, mathematical parsing, and a graphical interface into one application.",
      ],
    ],
    repo: `${github}/voicecalculator`,
    related: ["airanker", "website"],
  },
  {
    slug: "aicoach",
    title: "AI FPS Coach",
    category: "Local AI · Computer vision",
    icon: "crosshair",
    summary:
      "A local AI experiment that watches periodic screenshots and speaks feedback on request.",
    intro:
      "I connected my main PC to an Ollama model on my server using a stream of gameplay screenshots—one image every five seconds. When I pressed a button, the system reviewed how I was doing and read its feedback aloud.",
    status: "Gameplay coaching experiment",
    tags: ["Python", "Computer vision", "Ollama", "Image analysis"],
    facts: [
      ["Capture interval", "One screenshot every 5 seconds"],
      ["Trigger", "Feedback button"],
      ["Output", "Spoken coaching feedback"],
    ],
    workflow: [
      [
        "Capture gameplay",
        "The main PC captures one screenshot every five seconds.",
      ],
      [
        "Send it to the server",
        "The images go to a locally hosted Ollama model on a separate Ubuntu PC.",
      ],
      [
        "Request coaching",
        "A button press asks the system for feedback about the gameplay.",
      ],
      [
        "Speak the response",
        "The feedback is read aloud so it can be heard during play.",
      ],
    ],
    sections: [
      [
        "A sequence of snapshots",
        "The input behaves like a very low-frame-rate video: a new picture every five seconds. It gives the model periodic views of the game rather than a continuous full-motion stream.",
      ],
      [
        "Feedback when I ask for it",
        "The button controls when coaching is requested. Reading the answer aloud connects the image-analysis experiment with an interface that does not require stopping to read a response.",
      ],
      [
        "A focused local experiment",
        "This was a practical way to connect two PCs, image input, a local model, and spoken output. The goal was to explore that loop and get feedback on play.",
      ],
    ],
    related: ["airanker", "aiserver"],
  },
  {
    slug: "website",
    approachTitle: "Designed around the visitor",
    title: "Portfolio Website",
    status: "In active development",
    category: "Web development · Personal portfolio",
    icon: "globe",
    summary:
      "A space-inspired home for my software, AI, and engineering projects.",
    intro:
      "I built this website in React to bring my projects, skills, and aerospace interests together. The mission-control-inspired design uses a dark background, blue accents, orbital graphics, and clear project navigation.",
    tags: ["React", "Vite", "React Router", "CSS", "Responsive design"],
    facts: [
      ["Framework", "React"],
      ["Navigation", "React Router"],
      ["Visual direction", "Space + mission control"],
    ],
    workflow: [
      [
        "Introduce my interests",
        "Explain the connection between aerospace engineering and software development.",
      ],
      [
        "Show the work",
        "Highlight projects with descriptions, tools, and links to more detail.",
      ],
      [
        "Explain each build",
        "Give each project a dedicated page with its purpose and approach.",
      ],
      [
        "Make contact easy",
        "Keep the resume, GitHub profile, and contact information within reach.",
      ],
    ],
    sections: [
      [
        "A consistent visual language",
        "The dark palette, blue accents, and space imagery reflect my aerospace interests. Shared navigation and footer components keep the experience consistent across pages.",
      ],
      [
        "Built with reusable components",
        "The site uses React components and React Router for page navigation. Vite provides the development and production build tools, while CSS handles the responsive layouts and visual styling.",
      ],
      [
        "A project that presents the others",
        "The portfolio brings together software projects, AI experiments, certifications, and modeling interests. The goal is to make the work easy to explore and provide a direct way to get in touch.",
      ],
    ],
    repo: `${github}/portfolio-website`,
    related: ["voicecalculator", "3dmodeling"],
  },
  {
    slug: "aiserver",
    title: "Local AI Server",
    category: "Infrastructure · Local AI",
    icon: "server",
    summary:
      "A dedicated Ubuntu machine for experimenting with local models and AI workflows.",
    intro:
      "My Ubuntu server runs on an Intel Core i5-11600KF and an NVIDIA GeForce GTX 1660 SUPER. It is my place to try local AI models, connect experiments, and see how much I can get out of the hardware. A small self-hosted testing website gives me a way to try a few Ollama models.",
    status: "In use · ongoing experiments",
    tags: [
      "Ubuntu",
      "Intel Core i5-11600KF",
      "GTX 1660 SUPER",
      "Ollama",
      "Self-hosting",
    ],
    facts: [
      ["CPU", "Intel Core i5-11600KF"],
      ["GPU", "NVIDIA GTX 1660 SUPER"],
      ["Operating system", "Ubuntu"],
    ],
    workflow: [
      [
        "Assemble the system",
        "Bring together a dedicated machine with an NVIDIA GPU.",
      ],
      [
        "Configure Ubuntu",
        "Set up the operating system as the environment for local experiments.",
      ],
      [
        "Run Ollama models",
        "Host a few language models locally and test what the system can handle.",
      ],
      [
        "Try a web interface",
        "Use a small self-hosted testing website to interact with the models.",
      ],
    ],
    sections: [
      [
        "Hardware meets software",
        "This project extends beyond writing an application. Assembling the machine and configuring Ubuntu are part of building the environment in which the AI experiments run.",
      ],
      [
        "Making the hardware work",
        "The i5-11600KF and GTX 1660 SUPER are the foundation of my local setup. Trying different models and workflows is a way to learn the practical limits of the machine rather than treating inference as an unlimited resource.",
      ],
      [
        "A small testing website",
        "The server includes a self-hosted website for trying a few Ollama models. It gives me a simple place to interact with local AI while developing other projects.",
      ],
    ],
    related: ["airanker", "jarvis"],
  },
  {
    slug: "3dmodeling",
    approachTitle: "From idea to digital form",
    title: "3D Modeling",
    category: "Engineering · Digital design",
    icon: "box",
    summary:
      "Exploring engineering and architectural forms through CAD and 3D modeling.",
    intro:
      "My modeling work spans engineering and architectural projects using Blender, AutoCAD, Revit, and Maya. It is another way I explore building ideas, alongside my software and AI projects.",
    tags: ["Blender", "AutoCAD", "Revit", "Maya"],
    facts: [
      ["Focus", "Engineering + architecture"],
      ["Medium", "Digital 3D models"],
      ["Tools", "CAD + 3D modeling software"],
    ],
    workflow: [
      [
        "Start with an idea",
        "Choose an engineering or architectural subject to explore.",
      ],
      [
        "Build the geometry",
        "Develop the digital form in a CAD or 3D modeling tool.",
      ],
      [
        "Review the model",
        "Inspect the shape and how the parts relate in three dimensions.",
      ],
      [
        "Refine the design",
        "Continue developing the model and its presentation.",
      ],
    ],
    sections: [
      [
        "An interest in form and structure",
        "Engineering and architectural modeling add a spatial dimension to my project work. They connect my interest in engineering with the process of making a digital design.",
      ],
      [
        "A range of modeling tools",
        "I work with Blender, AutoCAD, Revit, and Maya across modeling projects. The portfolio also includes an AutoCAD credential alongside my programming certifications.",
      ],
    ],
    certificate: "/certifications/AutoCAD.pdf",
    related: ["whale", "website"],
  },
  {
    slug: "whale",
    title: "Project Whale",
    category: "Robotics · Lighter-than-air flight",
    icon: "fish",
    status: "Prototype · not yet flight-tested",
    summary:
      "Building a soft, helium-filled robot that moves with gently flapping fins.",
    intro:
      "Project Whale is my independent DIY build inspired by Keio University’s Cuddle-Fish. I am combining programming, electronics, 3D printing, and custom balloon fabrication to make a lightweight fish that floats indoors. The long-term goal is to receive commands from my server PC while the onboard controller handles fin movement.",
    tags: [
      "XIAO ESP32-C3",
      "ESP32Servo",
      "Linear servos",
      "Helium buoyancy",
      "3D printing",
      "Lightweight design",
    ],
    facts: [
      ["Controller", "Seeed Studio XIAO ESP32-C3"],
      ["Actuation", "Two linear micro servos"],
      ["Milestone ahead", "Measure usable helium lift"],
    ],
    approachTitle: "The intended flight concept",
    workflow: [
      [
        "Float with helium",
        "A custom envelope is intended to support the complete robot near neutral buoyancy. Actual usable lift still needs to be measured.",
      ],
      [
        "Move with fins",
        "Two servo-driven fins are intended to flap together for forward motion and differently for turning.",
      ],
      [
        "Adjust the balance",
        "A manually adjustable battery mount will establish the balance point before a powered carriage is considered.",
      ],
      [
        "Add wireless commands",
        "A future Wi-Fi connection will let the server send high-level commands while the ESP32 manages local servo timing.",
      ],
    ],
    sections: [
      [
        "An envelope built from four panels",
        "I cut and assembled four curved foil panels, or gores, into a custom envelope. The current flat pattern is about 36 inches long and 16½ inches wide at its widest point; those are pattern dimensions, not measured inflated dimensions. Several leaks still need repair.",
      ],
      [
        "The first electronics lesson",
        "The XIAO ESP32-C3 is programmed and both linear servos have operated using ESP32Servo. Connecting the controller ground to the battery and servo ground resolved twitching during testing. The next step is smoother motion with adjustable travel and speed.",
      ],
      [
        "Every gram is part of the design",
        "The envelope must lift itself as well as the battery, controller, servos, frame, fins, and wiring. I have not yet demonstrated helium-supported flight or measured complete weight and lifting capacity. Those measurements will determine what the final assembly can support.",
      ],
      [
        "Pitch control is a balance problem",
        "The proposed battery carriage shifts the center of gravity: forward toward the nose to pitch down, backward toward the tail to pitch up. This changes balance, not helium buoyancy. Its effectiveness and required travel still need testing.",
      ],
      [
        "A lightweight underside frame",
        "The frame, fin linkages, and battery mount are being planned. Broad reinforcement patches and tabs or straps are intended to distribute loads without puncturing the envelope. Attachment materials will be tested before the assembly is mounted.",
      ],
      [
        "Future server integration",
        "Wireless control, room tracking, and autonomous behavior have not been implemented. The intended division is local servo timing on the ESP32 and higher-level commands on the server, including a defined response if the connection is lost.",
      ],
    ],
    specificationTitle: "Components in the prototype plan",
    specifications: [
      [
        "Envelope",
        "Custom foil envelope assembled from four curved panels; leak repairs pending",
      ],
      ["Controller", "Seeed Studio XIAO ESP32-C3"],
      ["Fin actuators", "Two AGFRC C1.5CLS PRO linear micro servos"],
      ["Power", "1S 3.7 V, 450 mAh LiPo with a matching external charger"],
      ["Supply capacitor", "220 µF, 25 V capacitor across the servo supply"],
      [
        "Structure",
        "Planned lightweight underside frame, fin membranes, supports, and tail",
      ],
      [
        "Pitch mechanism",
        "Manual battery adjustment first; an additional carriage actuator is planned",
      ],
      ["Measurement", "Jewelry scale for components and the finished assembly"],
    ],
    progress: {
      title: "Where the build stands",
      done: [
        "Cut and assembled the four-panel envelope.",
        "Programmed the XIAO ESP32-C3.",
        "Connected and operated both linear servos.",
        "Resolved servo twitching with a shared electrical ground.",
      ],
      pending: [
        "Repair the envelope leaks and air-test the seams.",
        "Weigh the envelope and all onboard components, then measure usable helium lift.",
        "Build the frame, adjustable battery mount, and fin linkages.",
        "Develop smooth flapping control and test the assembly on a loose indoor tether.",
        "Add wireless commands and evaluate a powered battery carriage if the weight budget allows it.",
      ],
    },
    reference: {
      href: "https://yunsuenpai.com/assets/pdf/cuddlefish.pdf",
      label: "Read the Cuddle-Fish research paper",
      note: "Research inspiration for an independent DIY build; Project Whale is not an exact reproduction.",
    },
    related: ["3dmodeling", "aiserver"],
  },
  {
    slug: "jarvis",
    title: "Jarvis",
    category: "Wearables · Personal AI assistant",
    icon: "glasses",
    status: "In development · device testing",
    summary:
      "A personal AI assistant connecting smart glasses, an iPhone app, and my Ubuntu server.",
    intro:
      "I am building a custom assistant for Ray-Ban Meta glasses with a Swift iPhone app and a Python service on my Ubuntu server. Saying “Hey Jarvis” starts a conversation: the iPhone handles speech recognition and the response plays through the glasses. Photo capture lets me ask questions about what I am looking at.",
    tags: [
      "Swift",
      "SwiftUI",
      "Python",
      "SQLite",
      "Meta Wearables SDK",
      "iPhone Shortcuts",
      "Ubuntu",
    ],
    facts: [
      ["Client", "Swift iPhone app"],
      ["Backend", "Python service on Ubuntu"],
      ["Interface", "Voice + photo capture"],
    ],
    workflow: [
      [
        "Start with a phrase",
        "“Hey Jarvis” starts the conversation, with speech recognition handled on the iPhone.",
      ],
      [
        "Include visual context",
        "Capture a photo when the question is about what I am looking at.",
      ],
      [
        "Connect to the server",
        "The iPhone app communicates with a Python service running on my Ubuntu PC.",
      ],
      [
        "Hear the response",
        "AI responses play through the glasses, keeping the interaction centered on voice.",
      ],
    ],
    sections: [
      [
        "Different modes for different tasks",
        "The app includes saved conversations and assistant modes such as a Japanese tutor and a project helper. These modes let the same voice interface support different kinds of conversations.",
      ],
      [
        "Connecting to iPhone Shortcuts",
        "The app connects to iPhone Shortcuts for garage controls, extending the assistant beyond conversation into a practical phone integration.",
      ],
      [
        "Building across devices",
        "Development has involved Bluetooth audio routing, background listening, camera integration, authentication, and diagnosing crashes on real devices. The system crosses the boundaries between the glasses, the phone, and the server.",
      ],
    ],
    progress: {
      title: "Current development",
      done: [
        "Voice conversations connecting the iPhone app and Python server service.",
        "Photo capture for questions about visual context.",
        "Saved conversations, assistant modes, and iPhone Shortcuts integration.",
      ],
      pending: [
        "Test the recently added AirPods support.",
        "Test the redesigned dashboard on real devices.",
        "Continue refining audio routing, background listening, and crash handling.",
      ],
    },
    related: ["aiserver", "aicoach"],
  },
];

// A null-prototype index makes unknown URL slugs (including "constructor")
// resolve to undefined instead of inherited Object properties.
export const projectBySlug = Object.assign(
  Object.create(null),
  Object.fromEntries(projects.map((project) => [project.slug, project])),
);
