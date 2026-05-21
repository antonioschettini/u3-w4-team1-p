import { ArrowRightShort } from "react-bootstrap-icons"
import InterestsCard from "./InterestsCard"
import { useSelector } from "react-redux"
import { useMemo } from "react"

const Interests = () => {
  const jobs = useSelector((rs) => rs.jobs.jobs)

  const randomJobs = useMemo(() => {
    if (!jobs?.length) return []

    // eslint-disable-next-line react-hooks/purity
    const start = Math.floor(Math.random() * Math.max(1, jobs.length - 2))

    return jobs.slice(start, start + 2)
  }, [jobs])
  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white shadow-sm">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Potrebbero interessarti</p>
        </div>
        <p className="text-secondary mb-0">Pagine per te</p>
      </div>
      <div className="d-flex flex-column">
        {randomJobs.map((job) => (
          <InterestsCard key={job._id} job={job} />
        ))}
      </div>
      <div className="text-center text-secondary-emphasis fw-semibold pt-2">
        Mostra tutto <ArrowRightShort />
      </div>
    </div>
  )
}

export default Interests
