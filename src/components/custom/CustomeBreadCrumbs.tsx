import { Link } from "react-router";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface Breadcrumb {
  label: string;
  to: string
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

const CustomeBreadCrumbs = ({currentPage: currentPages, breadcrumbs= []}:Props) => {


  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
              <Link to="/"> Home </Link>
        </BreadcrumbItem>

        {
          breadcrumbs.map(bread => (
            <div className="flex items-center">
                <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink >               
                        <Link to={bread.to}>{bread.label}</Link>
                    </BreadcrumbLink>    
                  </BreadcrumbItem>
            </div>
        ))
      }        
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-black">
            <BreadcrumbLink >{currentPages}</BreadcrumbLink>
          </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default CustomeBreadCrumbs
