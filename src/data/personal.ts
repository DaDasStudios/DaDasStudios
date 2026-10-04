/**
 * All landing page copy lives here. Paragraph strings accept inline HTML (<b>, <a>, <span>).
 */

export const hero = {
	eyebrow: "Electronics Engineering & Integration Developer",
	title: "Hey, I'm David Pérez",
	/** Words with a `track` get its color: hardware = mint, software = crimson */
	tagline: [
		{ text: "I design hardware and write " },
		{ text: "the software around it", track: "software" },
		{ text: "." },
	],
	description:
		"Electronics engineering student at Universidad de Ibagué, Colombia, and integration developer for retail clients in Europe.",
	actions: [
		{ label: "Experience", href: "#experience", style: "primary" },
		{ label: "Projects", href: "#doors", style: "secondary" },
	],
	focusLabel: "Show me first",
} as const

export const about = {
	title: "About me",
	paragraphs: [
		"I'm in my 9th semester of <b>Electronics Engineering</b> at Universidad de Ibagué. Since September 2025 I've also worked as an <b>integration developer</b> at CORUS Consulting, on data flows for retail clients in Europe.",
		"Most of what I've built sits between hardware and software: a C++ library for a lighting protocol I first had to decode with an oscilloscope, a brain-computer interface that presses a piano pedal, and web platforms with real users.",
		"I'm also a teaching assistant for circuits courses, a student representative, and I play the piano.",
	],
}

/**
 * Skill rows. Hardware rows show on one side, software rows on the other.
 * `icon` is a file in /public/images/techs (optional).
 */
export interface SkillGroup {
	name: string
	track: "hardware" | "software"
	items: { name: string; icon?: string }[]
}

export const skillGroups: SkillGroup[] = [
	{
		name: "Embedded and firmware",
		track: "hardware",
		items: [
			{ name: "C", icon: "c.png" },
			{ name: "C++", icon: "cpp.webp" },
			{ name: "ESP32" },
			{ name: "Arduino", icon: "arduino.svg" },
			{ name: "VHDL", icon: "quartus.png" },
			{ name: "DALI IEC 62386" },
			{ name: "Serial" },
		],
	},
	{
		name: "Electronic design",
		track: "hardware",
		items: [
			{ name: "Fusion 360", icon: "fusion.webp" },
			{ name: "KiCad", icon: "kicad.png" },
			{ name: "LTspice", icon: "ltspice.webp" },
			{ name: "Proteus", icon: "proteus.png" },
		],
	},
	{
		name: "Lab and signals",
		track: "hardware",
		items: [
			{ name: "Python", icon: "python.svg" },
			{ name: "MATLAB", icon: "matlab.png" },
			{ name: "PySide6", icon: "qt.png" },
			{ name: "LCR" },
			{ name: "NanoVNA" },
		],
	},
	{
		name: "Integration and back end",
		track: "software",
		items: [
			{ name: "Express", icon: "express.png" },
			{ name: "Java", icon: "java.svg" },
			{ name: "webMethods", icon: "sag.png" },
			{ name: "Spring Boot", icon: "springboot.png" },
			{ name: "SAP Commerce Cloud", icon: "sap.png" },
			{ name: "GraphQL", icon: "graphql.svg" },
			{ name: "Trading Networks" },
			{ name: "Node.js", icon: "nodejs.webp" },
			{ name: "Kafka", icon: "kafka.png" },
			{ name: "Universal Messaging" },
			{ name: "API Gateway" },
		],
	},
	{
		name: "Front end",
		track: "software",
		items: [
			{ name: "TypeScript", icon: "typescript.svg" },
			{ name: "JavaScript", icon: "javascript.svg" },
			{ name: "React", icon: "react.svg" },
			{ name: "Next.js", icon: "next.svg" },
			{ name: "Astro", icon: "astro.svg" },
			{ name: "Tailwind CSS", icon: "tailwind.svg" },
			{ name: "HTML", icon: "html-5.svg" },
			{ name: "CSS", icon: "css-3.svg" },
		],
	},
	{
		name: "Databases and DevOps",
		track: "software",
		items: [
			{ name: "MySQL", icon: "mysql.svg" },
			{ name: "MongoDB", icon: "mongo.svg" },
			{ name: "SQL Server", icon: "mssql.png" },
			{ name: "PostgreSQL", icon: "postgresql.svg" },
			{ name: "Jenkins", icon: "jenkins.jpg" },
			{ name: "Git", icon: "git.svg" },
			{ name: "Docker", icon: "docker.svg" },
			{ name: "Linux", icon: "linux.svg" },
		],
	},
] as const

/** Header copy for /hardware, /software and /projects/archive */
export const labs = {
	hardware: {
		eyebrow: "Hardware lab",
		title: "Hardware lab",
		intro: "Boards, firmware and signals. Each project includes renders, PCB layouts, schematics or simulations where I have them.",
	},
	software: {
		eyebrow: "Software studio",
		title: "Software studio",
		intro: "APIs, web apps and tools. Each project includes its architecture, the stack and a link to the code or the live site.",
	},
	archive: {
		title: "Early work archive",
		intro: "Practice projects from when I was learning web development. Kept here for the record.",
	},
}

export const sections = {
	highlights: {
		title: "Highlights",
		intro: "Projects, milestones and the work I'm proudest of.",
	},
	doors: {
		title: "Two labs, one engineer",
		intro:
			"Hardware projects come with renders, PCB layers, schematics and simulations. Software projects come with architecture, code and live demos.",
		hardware: { eyebrow: "Hardware lab", title: "Boards, firmware, signals", cta: "Enter the lab" },
		software: { eyebrow: "Software studio", title: "APIs, apps, integrations", cta: "Enter the studio" },
		archive: "Older practice projects live in the <a href='/projects/archive'>early work archive</a>.",
	},
	experience: {
		title: "Career Highlights",
		intro:
			"Integration, embedded systems, full-stack development and teaching. Each role is shown <span class='text-secondary-600 font-medium'>in the format that fits the work</span>.",
	},
	beyond: {
		title: "Beyond the code",
		intro: "The things that shaped how I work: a summer in the US, a classroom, a student council and a piano.",
	},
	contact: {
		title: "Let's build something",
		text: "I'm looking for an internship in hardware or software development in the United States. Recruiters and engineers are both welcome to write.",
		visaNote:
			"For US employers: I'm eligible for a J-1 internship sponsored by a designated exchange program, so no H-1B sponsorship is needed. I already completed a J-1 program in the US in 2025.",
	},
	footer: "Made with <span class='text-primary font-medium'>love</span> with <b>Astro and Tailwind</b>",
}
