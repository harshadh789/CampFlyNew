export type TravelPackage = {
  title: string
  category: string
  location: string
}

export const getRecommendedPackages = (
  currentCategory: string,
  packages: TravelPackage[]
) => {
  return packages.filter(
    (travelPackage) => travelPackage.category === currentCategory
  )
}
