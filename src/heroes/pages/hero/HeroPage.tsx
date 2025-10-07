import CustomeBreadCrumbs from "@/components/custom/CustomeBreadCrumbs"
import { useParams } from "react-router"

const HeroPage = () => {

  const {idSlug} = useParams();
  
  
  

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
