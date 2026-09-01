import eCom1 from '../assets/e-commarce/e-com-1.png';
import eCom2 from '../assets/e-commarce/e-com-2.png';
import eCom3 from '../assets/e-commarce/e-com-3.png';
import eCom4 from '../assets/e-commarce/e-com-4.png'
import eCom5 from '../assets/e-commarce/e-com-5.png'
import eCom6 from '../assets/e-commarce/e-com-6.png'
import eCom7 from '../assets/e-commarce/e-com-7.png'
import eCom8 from '../assets/e-commarce/e-com-8.png'
import eCom9 from '../assets/e-commarce/e-com-9.png'
import eCom10 from '../assets/e-commarce/e-com-10.png'

import burger1 from '../assets/burger-builder/burger-1.png'
import burger2 from '../assets/burger-builder/burger-2.png'
import burger3 from '../assets/burger-builder/burger-3.png'
import burger4 from '../assets/burger-builder/burger-4.png'
import burger5 from '../assets/burger-builder/burger-5.png'
import burger6 from '../assets/burger-builder/burger-6.png'
import burger7 from '../assets/burger-builder/burger-7.png'
import burger8 from '../assets/burger-builder/burger-8.png'

import blog1 from '../assets/blog-project/blog-1.png'
import blog2 from '../assets/blog-project/blog-2.png'
import blog3 from '../assets/blog-project/blog-3.png'
import blog4 from '../assets/blog-project/blog-4.png'
import blog5 from '../assets/blog-project/blog-5.png'

import rest1 from '../assets/restaurant-app/restaurant-1.png'
import rest2 from '../assets/restaurant-app/restaurant-2.png'
import rest3 from '../assets/restaurant-app/restaurant-3.png'
import rest4 from '../assets/restaurant-app/restaurant-4.png'
import rest5 from '../assets/restaurant-app/restaurant-5.png'
import rest6 from '../assets/restaurant-app/restaurant-6.png'



const ProjectsData = [
    {
        id: 1,
        image: eCom1,
        images: [eCom1, eCom2, eCom3, eCom4, eCom5, eCom6, eCom7, eCom8, eCom9, eCom10],
        title: "Django E-Commarce ",
        technology: ["Django", "HTML", "JavaScripts", "Bootstrap"],
        github: " ",
        description: "This is Django e-commarce project.",


    },
    {
        id: 2,
        image: burger3,
        images: [burger1, burger2, burger3, burger4, burger5, burger6, burger7, burger8],
        title: "Burger Builder",
        technology: ["React", "Redux", "JavaScripts", "CSS"],
        github: "",
        description: "This is Burger Builder Project"
    },
    {
        id: 3,
        image: blog1,
        images: [blog1, blog2, blog3, blog4, blog5],
        title: "Blog Project",
        technology: ["React", "Redux", "JavaScripts", "CSS"],
        github: "",
        description: "This is Blog Project"

    },
    {
        id: 4,
        image: rest1,
        images: [rest1, rest2, rest3, rest4, rest5, rest6],
        title: "Restaurant App",
        technology: ["React", "Redux", "JavaScripts", "CSS"],
        github: "",
        description: "This is Restaurant App Project"

    }
]

export default ProjectsData;