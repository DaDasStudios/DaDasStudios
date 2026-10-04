export const site = {
	name: "David Pérez",
	fullName: "Jesús David Pérez Piñeres",
	description:
		"Electronics engineering student and integration developer. Hardware projects, software projects and experience of Jesús David Pérez Piñeres.",
	email: "jesusdavidperezpineros@gmail.com",
}

export const socials = [
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/jesusdavidperezpineros", icon: "/images/linkedin.svg" },
	{ name: "GitHub", link: "https://github.com/DaDasStudios", icon: "/images/github.svg" },
	{ name: "Email", link: `mailto:${site.email}`, icon: "/images/email.svg" },
	{ name: "YouTube", link: "https://www.youtube.com/@expresspiano7622", icon: "/images/youtube.svg" },
]

export const navigation = [
	{ name: "Software", link: "/software" },
	{ name: "Hardware", link: "/hardware" },
	{ name: "Experience", link: "/#experience" },
	{ name: "Beyond the code", link: "/#beyond" },
]

/**
 * Résumé variants. Put the PDFs in /public/resume.
 * `track` decides which one the focus switch recommends.
 */
export const resumes = [
	{ label: "Electronics, IoT and PCB", href: "/resume/Jesus_Perez_Resume_Electronics_IoT.pdf", track: "hardware" },
	{ label: "Full-stack development", href: "/resume/Jesus_Perez_Resume_FullStack.pdf", track: "software" },
	{ label: "Integration and backend", href: "/resume/Jesus_Perez_Resume_Integration.pdf", track: "software" },
] as const
