export type ImageProps = {
  alternativeText: string
  url: string
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

export type TechIcon = {
  title: string
  icon: ImageProps
}

export type SectionTechsProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  name: string
  photo: ImageProps
  description: string
  role: string
  socialLinks: SocialLinks[]
}

export type SectionAuthorsProps = {
  title: string
  authors: Author[]
}

export type Reviews = {
  name: string
  review: string
  photo: ImageProps
}

export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTechs: SectionTechsProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAuthors: SectionAuthorsProps
  sectionReviews: SectionReviewsProps
}
