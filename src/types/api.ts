export type ImageProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: ImageProps
}

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechsProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTechs: SectionTechsProps
}
