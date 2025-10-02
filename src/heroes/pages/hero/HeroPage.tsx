import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs"

const HeroPage = () => {
  return (
    <div>
      HeroPage
     <CustomeBreadCrumbs currentPage="Hero Description" 
                          //breadcrumbs={[{label: "Home", to: "/"}]}
                          />

    </div>
  )
}

export default HeroPage
