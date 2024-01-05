import Link from "next/link"
import ProjectCard from "../components/ProjectCard"
import { FaArrowLeft } from "react-icons/fa"

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      <div className="h-[95%] w-[95%] md:h-[95%] md:w-[95%] bg-yellow-300 pl-5 pt-4 rounded-2xl" >
        <Link href="/" className="text-2xl font-extralight bg-pink-300 p-2 rounded-2xl pb-2"><FaArrowLeft className="inline underline" size={20} />&nbsp;Home</Link>
        <h1 className="text-9xl font-bold">About</h1>
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default page
